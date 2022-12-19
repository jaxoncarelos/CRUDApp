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
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20vw, 3fr));
        grid-gap: 10px;
        padding: 10px;
    }
</style>