<script>
    export let post;
    let content;
    let editButton;	
    import {browser} from '$app/environment'
    function handleDelete(){

        if(!(post.username == localStorage.getItem("CRUDAppUsername")))
        {
            alert("You can't delete this post")
            return;
        }

        fetch('/api/deletePost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                postId: post.postId
            })
        })
        window.location.reload();
    }
    function handleEdit(){

	content.contentEditable = true;
        content.focus();

        editButton.innerHTML = "✔️"


        content.contentEditable = false;

        editButton.innerHTML = "🔧"

            const res = await fetch('/api/editPost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    postId: post.postId,
                    content: content.innerHTML
                })
            });
            const data = await res.json();
  
            if(data)
            {

                window.location.reload();
            }
        }
    }
</script>

<div class="post">

    <h1 class="username">{post.username}</h1>
    <p on:focus={() => { this.value = this.value }}  bind:this={content} class="content">{post.content}</p>
    {#if browser && post.username == localStorage.getItem("CRUDAppUsername")}
        <button on:click={handleDelete}>X</button>
        <button bind:this={editButton} class="editButton" on:click={handleEdit}>🔧</button>
    {/if}
</div>

<style>
    .post {
        background-color: #171c28;
        border-radius: 10px;
        padding: 1rem;
    	min-height: 3em;
        min-width: 70%;
    }
    .post .content{
        color: white;
        max-height: 100px;
        overflow: auto;
        font-size: 20px;
    }

    .post .username {
        color: #FFF;
        font-size: 30px;
        text-align: left;
        margin: 1px;
    }
    .post button {
        position: relative;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background-color: #765291;
        color: rgb(207, 207, 207);
        font-size: 30px;
        cursor: pointer;
    }
</style>
