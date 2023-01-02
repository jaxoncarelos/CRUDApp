{#if browser}
<main>

    <div>
        <CreatePost />
        {#await getPosts() then posts}
            <PostList posts={posts} />
        {:catch error}
            <p>There was an error loading the posts</p>
        {/await}
    </div>
</main>
{/if}
<script>
    import { browser } from '$app/environment';
    import CreatePost from './Posts/CreatePost.svelte';
    import PostList from './Posts/PostList.svelte';


    async function getPosts()
    {
        // create an example post in postList

        const posts = await fetch("/api/fetchPosts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())


        return posts;
    }
</script>

<style>
    main {
        background-color: #292E39;
        height: 100vh;
        width: 100vw;
        color: white;
    }
    main div {
        text-align: center;
        font-size: 60px;
    }
</style>