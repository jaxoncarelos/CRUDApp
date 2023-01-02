<div class="wrapper">
    <div class="sub">
        <img src="blank.webp" height="300" alt="blank">
        <div class="name">{username}</div>
    </div>
</div>
<script>
    export let username;
</script>
<style>
    .wrapper {
        padding: 10vw;
        height: 20%;
        background-color: #292E39;
    }
    .sub {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .name {
        font-size: 50px;
        color: white;
        text-align: center;
    }
</style>