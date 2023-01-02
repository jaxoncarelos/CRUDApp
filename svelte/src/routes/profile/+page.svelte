
{#if browser}
    {#if localStorage.getItem("CRUDAppLoggedIn") == "true"}
        <script>
            import { goto } from '@sveltejs/app';
            goto('/profile/' + localStorage.getItem("CRUDAppUsername"));
        </script>
    {:else}
        <script>
            import { goto } from '@sveltejs/app';
            goto('/login');
        </script>
    {/if}
{/if}

<script>
    import { browser } from '$app/environment'
</script>