<script>
  import FormPage from "./FormPage.svelte";
  



</script>


<FormPage />


<style lang="postcss">
    :global(body) {
        margin: 0;
        height: 100vh;
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


