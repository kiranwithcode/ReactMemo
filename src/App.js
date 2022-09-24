
import './App.css';
import {useEffect, useMemo, useState} from "react"
function App() {
  const [text, setText] = useState('')
  const [age, setAge] = useState(null)
  const [country, seCountry] = useState('')

  const userType = useMemo(() =>(
    {
      underAge : age <18 ? true : false,
      citizen : country === "USA" ? true : false,
    }
  ))

  useEffect(() =>{
    console.log("User type has changed..");
  },[userType])
  console.log("Component re-rendered");

  return (
    <div className='App'>
      <h2>useMemo Example</h2>
      <input placeholder='name' onChange={(e) => setText(e.target.value)}></input>
      <br></br>
      <input placeholder='age' type="number" onChange={(e) => setAge(e.target.value)}></input>
      <br></br>
      <select>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="INDIA">INDIA</option>
        <option value="MALESIA">MALESIA</option>
        <option value="DUBAI">DUBAI</option>
      </select>
      
     
    </div>
  );
}

export default App;
