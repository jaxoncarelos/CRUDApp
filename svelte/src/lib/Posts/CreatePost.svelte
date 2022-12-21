<div class="createPosts">
    <h1>Create a post</h1>
    <input maxlength="32" type="text" placeholder="Enter your post" bind:value={content} />
    <button on:click={createPost}>Create</button>
</div>

<script>
    let content;
    const createPost = async () => {
        if(!content)
        {
            alert("Please enter a post")
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
        height: 30vh;
        background: #292E39;
        padding: 20px;
    }
    .createPosts input {
        width: 300px;
        height: 40px;
        border-radius: 10px;
        border: none;
        padding: 10px;
        margin: 10px;
    }
    .createPosts button {
        width: 320px;
        height: 40px;
        border-radius: 10px;
        border: none;
        padding: 10px;
        margin: 10px;
        background: #765291;
        color: #FFF;
        cursor: pointer;
    }
</style>