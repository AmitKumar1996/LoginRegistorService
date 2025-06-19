import React, { useState } from "react";
import axios from "axios";

function Login()
{
    const [ Password, setPasswordValue ] = useState( "" );
    const [ userid, setUseridValue ] = useState( "" );

    const setPassword = ( e ) =>
    {
        setPasswordValue( e.target.value );

    }
    const setUserId = ( e ) =>
    {
        setUseridValue( e.target.value );

    }
    const handleSubmit = async ( e ) =>
    {
        // prevent default

        e.preventDefault();

        // api call
        console.log( "This is our Data " + userid + " " + Password )

        // create object with userId and password for passing the api
        const data = {
            "userId": userid,
            "password": Password
        }
        try
        {
            const responce = await axios.post( "http://localhost:9181/loginUser", data );
            console.log( "responce.data :- " + responce.data );
            if ( !responce.data )
            {
                alert( "Invalid User Id or Password" );
            } else
            {
                alert( "Login Successfull" );
            }
        }
        catch ( error )
        {
            console.log( "Catch executed" );
            console.log( error );
        }


    }



    const redirectToRegistor = () =>
    {
        window.location.href = "/register";
    }
    return (
        <>  <h1>This is Login page</h1>

            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label>User ID:</label>
                    <input type="email" placeholder="Enter your User ID" value={userid} onChange={setUserId} />
                    <br></br>
                    <br></br>
                    <label>Password:</label>
                    <input type="password" placeholder="Enter your password" value={Password} onChange={setPassword} />
                    <br></br>
                    <br></br>
                    <a onClick={redirectToRegistor}>Don't have an Account</a>
                    <button type="submit">Login</button>


                </form>

            </div>
        </>
    )
}

export default Login;
