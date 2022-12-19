<div class="loginBack">
    <div class="login">
        <h1 style="color: #FFF;">Login</h1>
        <form>
            <input type="text" placeholder="Username" key="username" />
            <input type="password" placeholder="Password" key="password" />
            <button on:click={login}>Login</button>
        </form>
        <a href="/login">Already have an account?</a>
    </div>
</div>

<script>
    import {getNotificationsContext} from 'svelte-notifications'
    const addNotification = getNotificationsContext()
    async function login()
    {
        const username = document.querySelector('input[key="username"]').value;
        const password = document.querySelector('input[key="password"]').value;
        
        console.log(username, password)
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        console.log(response)
        if(response.status === 200)
        {
            localStorage.setItem("CRUDAppUsername", username);
            localStorage.setItem("CRUDAppLoggedIn", "true")
            window.location.href = '/';
        } 
        else {
            alert("Invalid username or password")
        }

    }
</script>

<style lang="scss">
    .loginBack {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: #292E39
        
    }
    .login {
        width: 400px;
        height: 300px;
        padding: 20px;
        border-radius: 10px;
        flex-direction: column;
        display: flex;
        background-color:  #353f54;
        
    }
    .login input {
        color: white;
        width: 390px;
        height: 40px;
        border-radius: 5px;
        border: none;
        margin: 5px 0;
        background-color: #171c28;
        font-size: 20px;
        padding-left: 10px;

    }
    .login input::placeholder {
        color: #777;
        font-size: 20px;
        padding-left: 0px;
    }
    .login button {
        cursor: pointer;
        z-index: -1;
        width: 400px;
        height: 40px;
        border-radius: 5px;
        border: none;
        margin: 5px 0;
        background-color: #765291;
        color: white;
        font-size: 20px;
        padding-left: 10px;
    }
    .login button:active {
        background-color: #765291;
        box-shadow: 0 5px #353f54;
        transform: translateY(3px);
    }
    .login a {
        color: #FFF;
        text-decoration: none;
        font-size: 10px;
        margin-top: 50px;
        margin-left: 5px;
    }
</style>