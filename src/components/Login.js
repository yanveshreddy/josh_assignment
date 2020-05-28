import React from 'react';
import "../css/login.css";
import { Link } from 'react-router-dom'
const Login = () => {

    const [userName, setUsername] = React.useState("");
    const [isNameEntered, setIsNameEntered] = React.useState(false)

    const handleNameChange = (e) => {
        setUsername(e.target.value);
        if (userName !== "" || userName !== null)
            setIsNameEntered(true);
    }
    return (
        <div className="body1">
            <div className="login-page">
                <div className="form">
                    <form className="login-form">
                        <input type="text" placeholder="username" onChange={handleNameChange} />
                        <input type="password" placeholder="password" />
                        {isNameEntered ? < Link to={{
                            pathname: "/dashboard",
                            userName: { userName }
                        }}><button>login</button></Link> : <button>login</button>}

                        {/* <p className="message">Not registered? <a href="#">Create an account</a></p> */}
                    </form>
                </div>
            </div >
        </div>


    );
};

export default Login;