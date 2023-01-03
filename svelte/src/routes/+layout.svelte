<nav>
    <ul>
        <l2><a href="/">CRUD App</a></l2>
        {#if browser && localStorage.getItem("CRUDAppUsername") != undefined}
            <li><a href="/profile">{localStorage.getItem("CRUDAppUsername")}</a></li>
        {:else}
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
        {/if}
    </ul>
</nav>
<slot></slot>

<script>
    import {browser} from '$app/environment'
</script>

<style>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #171c28;
        height: 40px;
    }
    l2 {
        padding: 8px;
        position: relative;
        left: 1vw;
        float: left;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        color: white;
        text-decoration: none;
    }
    li {
        padding: 10px;
        position: relative;
        left: 85%;
        float: left;
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        color: white;
        text-decoration: none;
    }
    a {
        color: white;
        text-decoration: none;
    }
    li a:hover {
        color: #765291;
    }
</style>