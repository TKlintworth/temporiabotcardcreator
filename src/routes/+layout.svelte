<!--layout.svelte-->
<script>
    import "../app.css";
</script>



<header class="header">
    <!-- Other header content -->
    <a href="/gallery">
        <button class="gallery-button">View All Cards</button>
    </a>
    <a href="/">
        <button class="gallery-button">Create New Cards</button>
    </a>
</header>

<slot />

<style>
    .header {
        position: fixed; /* Stick at the top */
        top: 0;
        width: 100%;
        background-color: white; /* Background color */
        padding: 10px; /* Some padding */
        z-index: 1000; /* Stack above other elements */
        display: flex;
        justify-content: space-around; /* Space the buttons evenly */
    }
    
    .gallery-button {
        background-color: #4CAF50; /* Green color */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color 0.3s;
    }

    .gallery-button:hover {
        background-color: #45a049; /* Darker green on hover */
    }

    /* Add padding to the main content to avoid it being overlapped by the fixed header */
    main {
        padding-top: 80px; /* Adjust based on the height of your header */
    }
</style>
