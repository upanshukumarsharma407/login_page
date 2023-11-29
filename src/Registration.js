import React, { useEffect, useState } from 'react'
import'./registration.css';
import axios from 'axios'
const Registration = () => {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [result, setResult] = useState("");
  const [data,setData]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/user');
       setData(response.data)
console.log(response.data)
       
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    };

    fetchData();
  }, []); 

const checkUser=()=>
{
  const foundUser = data.find(user => user.email === email && user.password === password);

  if (foundUser) {
    setResult(`User found with email: ${email}`);
  } else {
    setResult('User not found or incorrect password');
  }
}

  return (
    
    <div className="registration-page ">
       <div className='registration center'> Registration Form </div>
       <div className="inputs center ">
      <div className='input' onChange={(e)=>setEmail(e.target.value)}>Email <input type="text" /></div>   
      <div className='input' >Password <input type="password" onChange={(e)=>setPassword(e.target.value)} /></div>
       </div>
       <div className="button_container center">
         <button className='signin_button' onClick={()=>checkUser()}>Sign in</button>


       </div>
    {result}
    </div>
 
  )
}

export default Registration