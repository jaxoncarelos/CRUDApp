{#if browser}
<main>
    <button on:click={logOut}>Log out</button>
    <Namecard />
</main>
{/if}
<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    button {
        cursor: pointer;
        position: absolute;
        width: 100px;
        height: 40px;
        border-radius: 5px;
        border: none;
        margin: 5px 0;
        background-color: #765291;
        color: white;
        font-size: 20px;
        padding-left: 10px;
    }
</style>

<script>
    import Namecard from '../lib/Namecard.svelte';
    import { browser } from '$app/environment';
    function logOut(){
        localStorage.setItem("CRUDAppUsername", "")
        localStorage.setItem("CRUDAppLoggedIn", false)
        window.location.href = '/login'
    }
</script>