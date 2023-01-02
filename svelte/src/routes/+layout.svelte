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