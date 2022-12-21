{#if browser}
<main>
    <nav>
        <ul>
            <l2>CRUD App</l2>
            {#if browser && localStorage.getItem("CRUDAppUsername") != undefined}
                <li><a href="/profile">{localStorage.getItem("CRUDAppUsername")}</a></li>
            {:else}
                <li><a href="/login">Login</a></li>
            {/if}
        </ul>
    </nav>
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
    main ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #171c28;
        height: 40px;
    }
    main l2 {
        padding: 8px;
        position: relative;
        left: 1vw;

        float: left;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        color: white;
        text-decoration: none;
    }
    main li {
        padding: 10px;
        position: relative;
        left: 92vw;
        float: left;
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        color: white;
        text-decoration: none;
    }
    main li a {
        color: white;
        text-decoration: none;
    }
    main li a:hover {
        color: #765291;
    }
</style>