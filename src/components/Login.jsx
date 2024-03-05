// import { useState } from "react";

function Login () {
    // const [userInfo, setUserInfo] = useState({
    //     username: "",
    //     password: "",
    // })
    // const [errorMsg, setError] = useState(null);
    
    // const eventHandler = async (event) => {
    //     event.preventDefault();
    //     // const { data, error } = await login(userInfo);

    //      if (error) {

    //     //     setError(error.data.message);
    //     //     console.log(`error ${JSON.stringify(error.data.message)}`);
    //      } else {

    //     //     props.setToken(data.token);
    //     //     console.log(`data ${JSON.stringify(data.token)}`);
    //     // }
    //     console.log("in eventHandler");
    // }

    //     const onUserInput = (e) => {
    //         if (errorMsg) {
    //             setError(null);
    //         }

    //         setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    //     };

    return (
        <div>
            <h2>Login</h2>
            <form>
                <label>
                    Username
                    <input 
                        type="text"
                        placeholder="Username"
                        name="username"
                        // value={userInfo.username}
                        // onChange={onUserInput}
                    />
                </label>
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    placeholder="password"
                    name="password"
                    // value={userInfo.password}
                    // onChange={onUserInput}
                />
                <button>Submit</button>
            </form>

        </div>);
}

export default Login;