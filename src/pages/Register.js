import React, { useEffect, useState } from "react";
import { useRegisterMutation } from "../features/TheApiSlice";
import jwt from "jsonwebtoken";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/userSlice";
import { FaUser,FaEnvelope ,FaLock,FaPaperPlane } from "react-icons/fa";

import { Navigate } from "react-router-dom";

export default function Register() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRegister, { isError, isLoading, data, error }] =
    useRegisterMutation();
  useEffect(() => {
    data && dispatch(addUser(jwt.decode(data?.token)));
  }, [data]);
  return (


    <div>
      {JSON.stringify(data)}
      {isError && JSON.stringify(error)}
      {user && <Navigate to="/" />}
      <div id="warpper">
        <div className="form-container">
           < div className="header">
            <h3>
              Sign Up
            </h3>
            </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              userRegister({ username, email, password });
            }}
           
          >
           
              <div className="input-group">
                <FaUser className="form-icon"/>
                <input
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  type="text"
                  required
                  placeholder="Username"
                />
                <span className="bar"></span>
              </div>
              <div className="input-group">
                <FaEnvelope className="form-icon"/>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  type="email"
    
                  placeholder="Email"
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
                  required
                  type="password"
              
                  placeholder="Password"
                /><span className="bar"></span>
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
              <span href="/login">Already have an account</span>
              <a href="/login">Login</a>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  
  );
}