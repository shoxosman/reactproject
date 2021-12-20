import React, { useEffect, useState } from "react";
import { useLoginMutation } from "../features/TheApiSlice";
import jwt from "jsonwebtoken";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/userSlice";
import { FaEnvelope ,FaLock,FaPaperPlane } from "react-icons/fa";

import { Navigate } from "react-router-dom";

export default function Login() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLogin, {  data, error }] = useLoginMutation();
 
    
  useEffect(() => {
    data && dispatch(addUser(jwt.decode(data?.token)));
  }, [data]);
  return (
   


  <div>
      {/* {JSON.stringify(jwt.decode(data?.token))} */}
      {JSON.stringify(error)}
      {user && <Navigate to="/" />}
      <div id="warpper">
        <div className="form-container">
           < div className="header">
            <h4>
            Login to your account
            </h4>
            </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              userLogin({ email, password });
            }}
           
            action="#"
            method="POST"
          >
            
            <div className="input-group">
            <FaEnvelope className="form-icon"/>
              
                
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email address"
                />
              <span className="bar"></span>
              </div>
          
              <div className="input-group">
              <FaLock className="form-icon"/>
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required

                  placeholder="Password"
                />
                <span className="bar"></span>
              </div>
           


              <div className="div-button">
              <button
                type="submit"
               className="form-button"
              >

                <FaPaperPlane />
              </button>
            </div>
            <div className="switch-login">
              <span >Don't have an account</span>
              <a href="/register">Login</a>
            </div>
          </form>
        </div>
      </div>
      </div>
      
     
     
  
  );

}