<div class="createPosts">
    <h1>Create a post</h1>
    <input  type="text" placeholder="Enter your post" bind:value={content} />
    <button on:click={createPost}>Create</button>
</div>

<script>
    let content;
    const createPost = async () => {
        if(!content || !localStorage.getItem("CRUDAppUsername"))
        {
            alert("Invalid")
            return;
        }
        const res = await fetch('/api/createPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: localStorage.getItem("CRUDAppUsername"),
                content: content
            })
        });
        const data = await res.json();

        if(data)
        {

            window.location.reload();
        }
    }
</script>

<style>
    .createPosts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 35vh;
        background: #292E39;
        padding: 1em;
    }
    .createPosts input {
        width: 300px;
        height: 40px;
        border-radius: 10px;
        border: none;
        padding: 10px;
        margin: 10px;
    }
    .createPosts h1 {
        font-size: 2em;
    }
    .createPosts button {
        width: 320px;
        height: 40px;
        border-radius: 10px;
        border: none;
        background: #765291;
        color: #FFF;
        cursor: pointer;
        padding: 1em;
    }
</style>
