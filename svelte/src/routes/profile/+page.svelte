
{#if browser}
    {#if localStorage.getItem("CRUDAppLoggedIn") == "true"}
        <Profile username={localStorage.getItem("CRUDAppUsername")}/>
    {:else}
        <script>
            import { goto } from '@sveltejs/app';
            goto('/login');
        </script>
    {/if}
{/if}

<script>
    import { browser } from '$app/environment'
    import Profile from '$lib/Profile.svelte'
</script>