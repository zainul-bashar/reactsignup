import React,{useState} from "react";
import '../App.css';

const Signup = () => {

    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[pass,setPass] = useState('');
    const[confirmPass,setConfirmPass] = useState('');
    const[successMsg,setSuccessMsg] = useState('');
    const[errorMsg,setErrorMsg] = useState('');

   const submitForm = () => {
    
    if(name && email && pass && confirmPass === pass){
    
        setSuccessMsg('Sign Up Successfully!');
        setName('')
        setEmail('')
        setPass('')
        setConfirmPass('')
        setErrorMsg('')
    }

    else if(pass !== confirmPass){
        setErrorMsg('Password Mismatch')
        setSuccessMsg('')
    }

    else{
        setErrorMsg('Please Fill All The Fields')
        setSuccessMsg('')
    }

   }

    return(
        <>
        
        <div className="container">

        <h1>Signup</h1><br/>
        <input type="text" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)} value={name} required/><br/>
        <input type="email" placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)} value={email} required/><br/>
        <input type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)} value={pass} required/><br/>
        <input type="password" placeholder="Confirm Password" onChange={(e)=>setConfirmPass(e.target.value)} value={confirmPass} required/><br/><br/>
         <p className="successMsg">{successMsg}</p>
         <p className="errorMsg">{errorMsg}</p>
         <button onClick={submitForm}>Sign Up</button>

         </div>

        </>
    )
}
export default Signup;
