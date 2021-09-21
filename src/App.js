import axios from "axios";
import { useState } from "react";
import "./App.css";
import Rep from "./components/Rep";

function App() {
  const [inpValue, setInpValue] = useState("jetrockets");
  const [reps, setReps] = useState([]);

  async function fetchReps() {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${inpValue}&sort=stars&order=desc`
    );
    setReps(response.data);
    console.log(response.data);
  }

  return (
    <div className="App">
      <div className="App-header">
        <input
          type="text"
          value={inpValue}
          onChange={(event) => setInpValue(event.target.value)}
        ></input>
        <button onClick={fetchReps}>Искать</button>
      </div>
      {
      reps.map( function (rep) {
        return (
          <Rep rep={rep} key={rep.id}/>
        )
      })
      
      }


    </div>
  );
}

export default App;
