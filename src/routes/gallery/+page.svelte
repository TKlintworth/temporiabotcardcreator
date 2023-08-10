<script>
    import axios from 'axios';

    let images = [];

    const fetchImages = async () => {
        try {
            const response = await axios.get('http://localhost:5173/gallery');
            images = response.data;
        } catch (error) {
            console.error('Error:', error.response.statusText);
        }
    };

    fetchImages();
</script>

<div class="gallery-container">
    <h1>Your Gallery</h1>
    <div class="gallery-grid">
        {#each images as image}
            <div class="image-wrapper">
                <img src={image.url} alt={image.description} />
            </div>
        {/each}
    </div>
</div>

<style>
    .gallery-container {
        padding: 20px;
    }

    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 16px;
    }

    .image-wrapper img {
        width: 100%;
        height: auto;
    }
</style>
