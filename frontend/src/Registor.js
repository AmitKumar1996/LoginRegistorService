// import React from "react";


// function Registor()
// {

//     // const registerData = {
//     //     name: "",
//     //     email: "",
//     //     password: "",

//     // }
//     const [ register, setRegister ] = React.useState( {
//         name: "",
//         email: "",
//         password: "",

//     } );
//     const handelChange = ( e ) =>
//     {
//         // setRegister( {
//         //     name: document.getElementById( "name" ).value,
//         //     email: document.getElementById( "email" ).value,
//         //     password: document.getElementById( "password" ).value,
//         // } )

//         setRegister( {
//             ...register,
//             [ e.target.name ]: e.target.value
//         } )
//     }

//     const handleSubmit = () =>
//     {
//         console.log( register );
//     }

//     return (
//         <>
//             <div className="container">
//                 <form onSubmit={handleSubmit}>
//                     <h2>Registor</h2>

//                     <label for="username">Username: </label>
//                     <input type="text" id="username" placeholder="Enter your Name" value={register.name} onChange={handelChange}></input>
//                     <br></br>
//                     <br></br>
//                     <label for="email">Email: </label>
//                     <input type="email" id="email" placeholder="Enter your Email" value={register.email} onChange={handelChange}></input>
//                     <br></br>
//                     <br></br>
//                     <label for="password">Password: </label>
//                     <input type="password" id="password" placeholder="Enter you Password" value={register.password} onChange={handelChange}></input>
//                     <br></br>
//                     <br></br>
//                     <button type="submit">Submit</button>
//                 </form>

//             </div>
//         </>
//     )
// }

// export default Registor;


import React from "react";

import axios from "axios";



function Registor()
{
    const [ register, setRegister ] = React.useState( {
        name: "",
        email: "",
        password: "",
    } );

    const handelChange = ( e ) =>
    {
        setRegister( {
            ...register,
            [ e.target.name ]: e.target.value,
        } );
    };

    const handleSubmit = async ( e ) =>
    {
        e.preventDefault();
        console.log( register );

        try
        {
            const response = await axios.post( "http://localhost:9181/addUser", register );
            console.log( response.data );
            alert( "User Added Successfully" )
        }
        catch ( error )
        {
            console.log( error );
        }


    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>

                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    id="username"
                    name="name"
                    placeholder="Enter your Name"
                    value={register.name}
                    onChange={handelChange}
                />
                <br /><br />

                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={register.email}
                    onChange={handelChange}
                />
                <br /><br />

                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your Password"
                    value={register.password}
                    onChange={handelChange}
                />
                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Registor;
