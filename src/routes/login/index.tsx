import React, { useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";

const LoginPage = (): JSX.Element => {
  const [email, setEmail] = useState<string>("")
  const [pwd, setPwd] = useState<string>("")

  const login = () => {
    try{
      firebase.default.auth().signInWithEmailAndPassword(email,pwd)
    }
    catch(err){
      console.log(err)
    }
  }

  return <div>
    <input value={email} placeholder={"email"} onChange={e=>setEmail(e.currentTarget.value)} type="email"/>
    <input value={pwd} placeholder={"password"} onChange={e=>setPwd(e.currentTarget.value)} type="password"/>
    <button onClick={login}>Login</button>
  </div>;
};

export default LoginPage;
