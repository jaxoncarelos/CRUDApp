<Profile username={username} />
<script>
    // import profile from src/lib/Profile.svelte
    import Profile from '$lib/Profile.svelte'
    import { page } from '$app/stores'
    let username = $page.params.username
</script>