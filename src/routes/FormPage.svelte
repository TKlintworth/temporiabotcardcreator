<script>
    let title = "Temporia Card Creator";
    let name = "";
    let image;
    let frequency = "";
    let description = "";
    let crystalValue = "";
    let season = "";
    let cardID = 1;
    let quantity = 1;
    let previewImage;
    let qrCodeURL = "";
    let qrCodeImage;

    import QRCode from "qrcode";
    import axios from "axios";

    const handleFileChange = event => {
        image = event.target.files[0];
        //const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => {
            previewImage = e.target.result;
        };
        reader.readAsDataURL(image);
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

        try {
            const response = await axios.post('http://localhost:5000/create-card', formData);
            const newCard = response.data;
            console.log(newCard);
        } catch (error) {
            console.error('Error:', error.response.statusText);
        }

    };

    const handleClick = () => {
        console.warn("Button clicked!");
    };

    /* const handleFileChange = (event) => {
        image = event.target.files[0];
        previewImage = URL.createObjectURL(image);
    } */
</script>

<div class="flex flex-col items-center mt-8">
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

            <label class="block mb-4">
                <span>Card ID</span>
                <input class="mt-1 block w-full p-2 border border-gray-300 rounded" type="number" bind:value={cardID} disabled>
            </label>

            <label class="block mb-4">
                <span>Quantity</span>
                <input class="mt-1 block w-full p-2 border border-gray-300 rounded" type="number" min="1" bind:value={quantity} required>
            </label>

            <div class="flex items-center justify-center mt-8 space-x-4">
                <button on:click={handleClick} type="submit" class="py-2 px-4 rounded bg-blue-500 text-white">{quantity > 1 ? `Create ${quantity} Cards` : 'Create Card'}</button>
            </div>

        </form>

        {#if qrCodeURL}
            <img src={qrCodeURL} alt="Generated QR Code" />
        {/if}
        <canvas id="c" width="800" height="600"></canvas>
    </div>
</div>
