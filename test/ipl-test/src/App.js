import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        Login / >
        <
        /div>
    );
}

function Login() {
    return ( <
        div id = "log_in" >
        <
        h1 > Log In < /h1> <
        input type = "text"
        placeholder = "Username" / >
        <
        br / >
        <
        input type = "password"
        placeholder = "Password" / >
        <
        br / >
        <
        button > Log In < /button> <
        /div>
    );
}

export default App;