import { useState } from 'react'; // ✅ at the top

function Login() {
    // ✅ state goes INSIDE the component
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return ( <
        div id = "log_in" >
        <
        h1 > Log In < /h1>

        <
        input type = "text"
        placeholder = "Username"
        value = { username }
        onChange = {
            (e) => setUsername(e.target.value) }
        />

        <
        input type = "password"
        placeholder = "Password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        />

        <
        button onClick = {
            () => console.log(username, password) } >
        Log In <
        /button> <
        /div>
    );
}