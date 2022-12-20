<script>
    export let post;
    console.log(post)
    import {browser} from '$app/environment'
    function handleDelete(){
        console.log(localStorage.getItem("CRUDAppUsername"))
        console.log(post.username)
        if(!(post.username == localStorage.getItem("CRUDAppUsername")))
        {
            alert("You can't delete this post")
            return;
        }
        console.log("delete")
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
        // make the p element with the class of content editable
        let content = document.querySelector(".content")
        content.contentEditable = true;
        content.focus();
        // make the button with the text of 🔧 into a button with the text of ✔️
        let editButton = document.querySelector(".editButton")
        editButton.innerHTML = "✔️"
        // on editButton click submit the new content to the server
        editButton.onclick = async () => {
            // make the p element with the class of content not editable
            content.contentEditable = false;
            // make the button with the text of ✔️ into a button with the text of 🔧
            editButton.innerHTML = "🔧"
            // submit the new content to the server
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
            console.log(data);
            if(data)
            {
                console.log("nice")
                window.location.reload();
            }
        }
    }
</script>

<div class="post">
    <p class="id">{post.postId}</p>
    <h1 class="username">{post.username}</h1>
    <p class="content">{post.content}</p>
    {#if browser && post.username == localStorage.getItem("CRUDAppUsername")}
        <button on:click={handleDelete}>X</button>
        <button class="editButton" on:click={handleEdit}>🔧</button>
    {/if}
</div>

<style>
    .post {
        background-color: #171c28;
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
    }
    .post .id {
        position: relative;
        color: #FFF;
        left: 50%;
        font-size: 12px;
        transform: translateY(-50%);
    }
    .post .username {
        color: #FFF;
        font-size: 30px;
        text-align: left;
        padding: 5px;
        transform: translateY(-50%);
    }
    .post button {
        position: relative;
        left: 40%;
        transform: translateX(-40%);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background-color: #765291;
        color: #FFF;
        font-size: 30px;
        cursor: pointer;
    }
</style>