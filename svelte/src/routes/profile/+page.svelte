
{#if browser && localStorage.getItem("CRUDAppUsername") != undefined}
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

<script>
    import { browser } from '$app/environment'
    import Profile from '$lib/Profile.svelte'
</script>