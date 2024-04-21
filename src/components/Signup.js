import React, {useState} from 'react'
import {  useNavigate } from 'react-router-dom'


const Signup = () => {  
    const [credentials, setCredentials] = useState({name:"",email: "", password: "",cpassword:""}) 
    let history = useNavigate();
    // history is used to get the path or the current url and then we can push accordingly to some new routes based on same conditions being passed or not
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(credentials);
        const {name,password,email}=credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            history('/');

        }
        else{
            alert("Invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        
        <div className='container'>
            <h1>Welcome to the SignUp Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp" placeholder="Enter Name"/>
                        
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" name='email' onChange={onChange} minLength={5} required  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name='password' className="form-control" onChange={onChange}  id="password" placeholder="Password" minLength={5} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} minLength={5} required aria-describedby="emailHelp" placeholder="Confirm Password"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your password with anyone else.</small>
                </div>
                
                
            </form>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Signup