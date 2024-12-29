
import "./App.css";

import { useState } from "react";
import {LC, NC, SC, UC } from "./data/Characters";

function App() {
 let [uppercase, setUppercase] = useState(false);
 let [lowercase, setLowercase] = useState(false);
 let [numbercase, setNumbercase] = useState(false);
 let [specialcase, setSpecialcase] = useState(false);
let [finalpassword,SetFinalPassword] = useState(' ');
let [passlen,SetPasslen] = useState(10);
 let createpassword =() => {
  let Characters = '';
  let finalpass = '';
 // let plength = "";

if(uppercase || lowercase || numbercase || specialcase){
if(uppercase) Characters +=UC;
  if(lowercase) Characters+=LC;
    if(specialcase) Characters+=SC;
      if(numbercase) Characters+=NC;

// console.log(Characters)
      for (let i = 0;i<passlen;i++){
finalpass += Characters.charAt(Math.floor(Math.random()*(Characters.length)));
// console.log(finalpass)
SetFinalPassword(finalpass);
      }

}

else{
  alert("Please Select atleast on check box")
}
 }
 let copypass = () => {
  navigator.clipboard.writeText(finalpassword)
 }
  return (
    <div>
      <div className="password-box">
        <h2>Password Generator</h2>
        <div className="password-input">
          <input type="text" value = {finalpassword} readonly ></input>
          <button onClick = {copypass}>Copy</button>
        </div>

        <div className="password-length">
          <h3>Password Length</h3>
          <input type="number" max = {20} min = {10}  onChange={(event) => SetPasslen(event.target.value)} value ={passlen}></input>
        </div>

        <div className="password-length">
          <h3>Include UpperCase</h3>

          <input type="checkbox" checked={uppercase} onChange={() => setUppercase(!uppercase)}/>
        </div>
        <div className="password-length">
          <h3>Include LowerCase</h3>
          <input type="checkbox" checked={lowercase} onChange={() => setLowercase(!lowercase)}/>
        </div>
        <div className="password-length">
          <h3>Include Numbers</h3>
          <input type="checkbox" checked={numbercase} onChange={() => setNumbercase(!numbercase)}/>
        </div>
        <div className="password-length">
          <h3>Include Special Characters</h3>
          <input type="checkbox" checked={specialcase} onChange={() => setSpecialcase(!specialcase)}/>
        </div>
        <div className="generate-btn">
          <button onClick={createpassword}>Generate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
