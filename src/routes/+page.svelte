<script>
    import { onMount } from "svelte";

    
    let title = "Temporia Card Creator";
    let name = "";
    let image;
    let frequency = "";
    let description = "";
    let crystalValue = "";
    let season = "";
    let cardID;
    let quantity = 1;
    let previewImage;
    let qrCodeURL = "";
    let generatedImageURL;
    let qrCodeImage;
    let errorMessage = "";
    let successMessage = "";
    let apiUrl = import.meta.env.VITE_PUBLIC_API_URL;
    
    import QRCode from "qrcode";
    import axios from "axios";
    import { get } from "svelte/store";

    $: endRange = cardID + quantity - 1;
    $: cardIdDisplay = quantity > 1 ? `${cardID}-${endRange}` : cardID;

    onMount(() => {
        getCardId();
    });

    async function getCardId() {
        try {
            const response = await axios.get(`${apiUrl}/get-card-id`);
            cardID = response.data.cardId + 1;
        } catch (error) {
            console.error('Error:', error.response);
        }
    }

    const handleFileChange = event => {
        image = event.target.files[0];
        //const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => {
            previewImage = e.target.result;
        };
        reader.readAsDataURL(image);
    };

    const resetForm = () => {
        name = "";
        image = null;
        frequency = "";
        description = "";
        crystalValue = "";
        season = "";
        quantity = 1;
        previewImage = null;
        qrCodeURL = "";
        cardID = getCardId();
    };

    const handleFormSubmit = async () => {
        console.warn("Form submitted!");
        const qrCodeString = `${season}_${name}`;
        qrCodeImage = await QRCode.toDataURL(qrCodeString);
        qrCodeURL = qrCodeImage;
        //hit the server with the form data and the endpoint to create the card
        //then, display the card
        const formData = new FormData();
        formData.append('name', name);
        formData.append('frequency', frequency);
        formData.append('description', description);
        formData.append('value', crystalValue);
        formData.append('season', season);
        formData.append('cardId', cardID);
        formData.append('image', image);  // Assuming 'image' is a File object
        formData.append('quantity', quantity);

        try {
            const response = await axios.post(`${apiUrl}/create-card`, formData);
            if(response.data.error) {
                errorMessage = response.data.error;
            } else {
                const newCard = response.data;
                console.log(newCard);
                successMessage = "Card(s) created successfully!";
                resetForm();
            }
        } catch (error) {
            console.error('Error:', error.response.data.error);
            errorMessage = error.response.data.error;
            resetForm();
        }

    };

    const handleClick = () => {
        console.warn("Button clicked!");
    };

    const downloadImages = async () => {
        try {
            const response = await axios.get(`${apiUrl}/download-images`, { responseType: 'blob' });
            console.log(response);
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const a = document.createElement('a');
            a.href = url;
            a.download = 'cards.zip';
    
            document.body.appendChild(a);
            a.click();
    
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Error downloading the file:', error.response);
        }
    };

    $: isFormIncomplete = !(name && image && frequency && description && crystalValue && season)

</script>

<style lang="postcss">
    :global(body) {
        margin: 0;
        padding-top: 100px;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: 200% 200%;
        background-image: linear-gradient(35deg, #322d2c 25%, #8e3455 25%, #735963 50%, #295f72 50%, #7bc2db 75%, #62c7b1 75%);
        animation: gradient-shift 5s linear infinite;
    }

    @keyframes gradient-shift {
        0% { background-position: 100% 0; }
        100% { background-position: 0 0; }
    }
</style>

<div class="flex flex-col items-center mt-16">
    <div class="shadow-md rounded-lg bg-white w-full max-w-md p-8">
        <div class="rounded-lg"> <!-- animate-float will do cool things -->
            <h1 class="text-3xl mb-8 text-center font-semibold underline">{title}</h1>
        </div>
        <form on:submit|preventDefault={handleFormSubmit}>
            <label class="block mb-4">
                <span>Name</span>
                <input class="mt-1 block w-full p-2 border border-gray-300 rounded" type="text" bind:value={name} required>
            </label>

            <label class="block mb-4">
                <span>Image</span>
                <input class="mt-1 block w-full p-2 border border-gray-300 rounded" type="file" accept="image/*" on:change={handleFileChange} required>
            </label>

            {#if previewImage}
                <img class="mb-4 rounded" src={previewImage} alt="Preview" />
            {/if}

            <label class="block mb-4">
                <span class="mb-2 block">Frequency</span>
                <div class="space-y-2">
                    <div>
                        <input id="daily" class="mr-2 leading-tight" type="radio" bind:group={frequency} value="daily">
                        <label for="daily">Daily</label>
                    </div>
                    <div>
                        <input id="weekly" class="mr-2 leading-tight" type="radio" bind:group={frequency} value="weekly">
                        <label for="weekly">Weekly</label>
                    </div>
                    <div>
                        <input id="monthly" class="mr-2 leading-tight" type="radio" bind:group={frequency} value="monthly">
                        <label for="monthly">Monthly</label>
                    </div>
                    <div>
                        <input id="yearly" class="mr-2 leading-tight" type="radio" bind:group={frequency} value="yearly">
                        <label for="yearly">Yearly</label>
                    </div>
                </div>
            </label>

            <label class="block mb-4">
                <span>Description</span>
                <textarea class="mt-1 block w-full p-2 border border-gray-300 rounded" bind:value={description} required></textarea>
            </label>

            <label class="block mb-4">
                <span>Value</span>
                <input class="mt-1 block w-full p-2 border border-gray-300 rounded" type="number" bind:value={crystalValue} required>
            </label>

            <label class="block mb-4">
                <span>Season</span>
                <input class="mt-1 block w-full p-2 border border-gray-300 rounded" type="number" bind:value={season} required>
            </label>
            
            <div id="cardIdContainer">
                <label class="block mb-4" for="cardIdContainer">
                    <span>Card ID</span>
                    <span class="mt-1 block w-full p-2 border border-gray-300 rounded">{cardIdDisplay}</span>
                </label>
            </div>

            <label class="block mb-4">
                <span>Quantity</span>
                <input class="mt-1 block w-full p-2 border border-gray-300 rounded" type="number" min="1" bind:value={quantity} required>
            </label>

            <div class="flex items-center justify-center mt-8 space-x-4">
                <button on:click={handleClick} disabled={isFormIncomplete} type="submit" class="py-2 px-4 rounded bg-blue-500 text-white">{quantity > 1 ? `Create ${quantity} Cards` : 'Create Card'}</button>
            </div>

            {#if errorMessage}
                <div class="text-red-500 mt-4">{errorMessage}</div>
            {/if}

            {#if successMessage}
                <div class="text-green-500 mt-4">{successMessage}</div>
                <div>
                    <button on:click={downloadImages} type="button" class="py-2 px-4 rounded bg-blue-500 text-white">Download QR-Image Composite</button>
                </div>
            {/if}

        </form>

        {#if qrCodeURL}
            <img src={qrCodeURL} alt="Generated QR Code" />
        {/if}

<!--         {#if generatedImageURL}
            <p style="text-align: center;">New card created successfully!</p>
            <div>
                <img src={generatedImageURL} alt="Generated Image" />
            </div>
        {/if} -->
        <!-- <canvas id="c" width="800" height="600"></canvas> -->
    </div>
</div>
