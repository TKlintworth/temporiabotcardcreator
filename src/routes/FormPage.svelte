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
    let canvas;

    import QRCode from "qrcode";
    import { fabric } from 'fabric';

    import { onMount } from 'svelte';

    const handleFileChange = event => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => {
        previewImage = e.target.result;
        updateCanvasWithQRCode();
        };
        reader.readAsDataURL(file);
    };

    const handleFormSubmit = async () => {
        const qrCodeString = `${season}_${name}`;
        qrCodeImage = await QRCode.toDataURL(qrCodeString);
        updateCanvasWithQRCode();
    };

    const updateCanvasWithQRCode = () => {
        if (!previewImage || !qrCodeImage || !canvas) return;

        fabric.Image.fromURL(previewImage, function(img1) {
        // scale image down, and flip it, before adding to canvas
        img1.scale(0.5);
        img1.set('flipX', true);
        canvas.add(img1);
        
        fabric.Image.fromURL(qrCodeImage, function(img2) {
            img2.scale(0.1);
            img2.set({ left: 150, top: 100 });
            canvas.add(img2);
        });
        });
    };

    /* const handleFileChange = (event) => {
        image = event.target.files[0];
        previewImage = URL.createObjectURL(image);
    } */

    onMount(async () => {
        canvas = new fabric.Canvas('c');
    });
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
                <button type="submit" class="py-2 px-4 rounded bg-blue-500 text-white">{quantity > 1 ? `Create ${quantity} Cards` : 'Create Card'}</button>
            </div>

        </form>

        {#if qrCodeURL}
            <img src={qrCodeURL} alt="Generated QR Code" />
        {/if}
        <canvas id="c" width="800" height="600"></canvas>
    </div>
</div>
