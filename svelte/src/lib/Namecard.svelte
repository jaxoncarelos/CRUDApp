<div class="wrapper">
    <div class="sub">
        <img src="blank.webp" height="300">
        <div class="name">{localStorage.getItem("CRUDAppUsername")}</div>
    </div>
</div>

<style>
    .wrapper {
        padding: 10vw;
        height: 100vh;
        background-color: #292E39;
    }
    .name {
        font-size: 50px;
        color: white;
        text-align: center;
    }
    .sub {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>