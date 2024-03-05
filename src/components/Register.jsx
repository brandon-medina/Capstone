function Register () {

        // const eventHandler = () => {

        //     console.log('in eventHandler')
        // }

    return (
        <div>
            <h2>Register</h2>
            <form>
                <label>
                    Username
                    <input 
                    type="text" 
                    placeholder="username" 
                    />
                </label>
                <label htmlFor="password">Password</label>
                <input name="password" type="password" placeholder="password" />
                <label>
                    Email
                    <input 
                    type="text" 
                    placeholder="email" 
                    />
                </label>
                <label htmlFor="first_name">First Name</label>
                <input name="first_name" type="text" placeholder="first_name" />
                <label>
                    Last Name
                    <input 
                    type="text" 
                    placeholder="last_name" 
                    />
                </label>
                <button onSubmit={""}>Submit</button>
            </form>
        </div>
    );
}

export default Register;