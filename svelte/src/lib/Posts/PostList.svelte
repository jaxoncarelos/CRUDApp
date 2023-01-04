<script>
    import Post from './Post.svelte';
    export let posts;
</script>

<div class="postList">
    {#if !posts }
        <p>There are no posts yet</p>
    {:else}
        {#each posts as post (post.postId)}
            <Post post={post} />
        {/each}
    {/if}
</div>

<style>
    .postList {
        position: relative;
        top: 3em;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        padding: 1rem;
    }
</style>
