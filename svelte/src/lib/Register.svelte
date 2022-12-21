<div class="registerBack">
    <div class="register">
        <h1 style="color: #FFF;">Register</h1>
        <form>
            <input type="text" placeholder="Username" key="username" />
            <input type="text" placeholder="Email" key="password" />
            <input type="password" placeholder="Password" key="password" />
            <input type="password" placeholder="Confirm Password" />
            <button on:click={register}>Register</button>
        </form>
        <a href="/login">Already have an account?</a>
    </div>
</div>

<style lang="scss">
    .registerBack {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: #292E39
        
    }
    .register {
        width: 400px;
        height: 400px;
        padding: 20px;
        border-radius: 10px;
        flex-direction: column;
        display: flex;
        background-color:  #353f54;
        
    }
    .register input {
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
    .register input::placeholder {
        color: #777;
        font-size: 20px;
        padding-left: 0px;
    }
    .register button {
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
    .register button:active {
        background-color: #765291;
        box-shadow: 0 5px #353f54;
        transform: translateY(3px);
    }
    .register a {
        color: #FFF;
        text-decoration: none;
        font-size: 10px;
        margin-top: 50px;
        margin-left: 5px;
    }
</style>

<script>
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };
    async function register() {
        const username = document.querySelector("input[placeholder='Username']").value;

        const usernameAvailable = await fetch("/api/usernameCheck?username=" + username).then(res => res.json());

        
        if(!usernameAvailable.usernameAvailable) {

            alert("Username is already taken");
            return;
        } else {

        }
        const email = document.querySelector("input[placeholder='Email']").value;
        if(!validateEmail(email)) {
            alert("Email is not valid");
            return;
        }
        const password = document.querySelector("input[placeholder='Password']").value;
        const confirmPassword = document.querySelector("input[placeholder='Confirm Password']").value;
        if(password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // fetch /api/register with username email password
        const registerResponse = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        }).then(res => res.json());

        if(registerResponse.success) {
            alert("Successfully registered");
            localStorage.setItem("CRUDAppUsername", username)
            localStorage.setItem("CRUDAppLoggedIn", true)
            window.location.href = "/";
        } else {
            alert("Something went wrong");
        }
    }
</script>