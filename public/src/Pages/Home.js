import React,{useState, useEffect} from 'react'
import UserHeader from '../componets/Header/Header'
import Home from '../componets/Home/Home' 
import { useCookies} from "react-cookie"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [cookies,setCookie,removeCookie]=useCookies([]);
  useEffect(()=>{
    const verifyUser=async()=>{
      console.log(";;;;;;;;");
      if(!cookies.jwt){
        navigate('/login')
      }else{
        const{data}=await axios.post
        ('http://localhost:4000',{},
        {withCredentials:true}
        )
      }
    };
    verifyUser();
  },[cookies,navigate,removeCookie]);
  

  return (
    <div>
        <UserHeader/>
        <Home/>
        
    </div>
  );
}

export default HomePage