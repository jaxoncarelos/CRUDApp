<script>
    export let post;
    console.log(post)
</script>

<div class="post">
    <p class="id">{post.postId}</p>
    <h1 class="username">{post.username}</h1>
    <p class="content">{post.content}</p>
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
    }
    .post .username {
        color: #FFF;
        font-size: 30px;
        text-align: left;
        padding: 5px;
    }
</style>