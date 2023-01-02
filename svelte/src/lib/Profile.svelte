{#if browser}
    {#await doesUserExist(username) then userExists}
        {#if userExists}
            <h1>404 User Not Found</h1>
        {:else}
        <main>
            <button on:click={logOut}>Log out</button>
            <Namecard username={username}/>
            {#await fetch("/api/fetchUserPosts?username=" + username).then(res => res.json()) then posts}
                <PostList posts={posts} style="transform: translateY(10%)"/>
            {/await}
        </main>
        {/if}
    {/await}
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
    import PostList from '$lib/Posts/PostList.svelte';
    import Namecard from '$lib/Namecard.svelte';
    import { browser } from '$app/environment';

    export let username;

    async function doesUserExist(username)
    {
        const usernameAvailable = await fetch("/api/usernameCheck?username=" + username).then(res => res.json());
        return usernameAvailable.usernameAvailable;
    }

    function logOut(){
        localStorage.removeItem("CRUDAppUsername")
        localStorage.setItem("CRUDAppLoggedIn", false)
        window.location.href = '/login'
    }
</script>