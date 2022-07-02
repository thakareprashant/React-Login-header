import React,{useState} from 'react'
import { Header } from '../Header/Header'
import "./Login.css"



const Login = () => {
  const [email,setEmail] = useState("")
  
  
 
const saveMail= (event)=>{
  setEmail(event.target.value)
  console.log(event.target.value)
}
  
  return (
    <>
      <Header email={email}/>
      <div className='main-login-container'>
        <div className='login-container'>
          <form className='login-form'>
             <h2>Login</h2>
             <input typeof='email' className='email' placeholder='Enter your mail' onChange={saveMail}></input>
             <input typeof='password' className='password' placeholder='Enter your password'></input>
             <button className='button'>Submit</button>




          </form>
          </div>
      </div>

    </>
  )
}

export default Login