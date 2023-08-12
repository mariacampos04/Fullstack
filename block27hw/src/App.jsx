import { useState } from "react";
import Authenticate from "./components/Authenticate.jsx"
import SignUpForm from "./components/SignUpForm.jsx"
import './App.css'

export default function App() {
  const [token, setToken] = useState(null);

  //export default function App() {
    return (
      <>
        <Authenticate />
        {/* passing the setToken to my SignUpForm component */}
        <SignUpForm token = {token} setToken ={setToken} />
        {/* passing the setToken to my Authenticate component*/}
        <Authenticate token ={token} setToken = {setToken} />
      </>
    );
  //}
}
//block27hw/src/components/SignUpForm.jsx