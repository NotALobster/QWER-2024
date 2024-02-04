import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
//import capsules from "./capsules";
import {HelloWorld, StartCookie, GetCookie, Signin, Signup, GetCapsules, AddCapsule, UploadImage} from "./capsules.js";

function App() {
  const [count, setCount] = useState(0);

  const [file, setFile] = useState();
  //cookies
  StartCookie();


  const submit = async event => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("image", file);
    //formData.append("description", description)
    console.log(formData);  
    UploadImage(formData);
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={HelloWorld}>
          hello
        </button>

        <button onClick={GetCookie}>
          GetCookie
        </button>

        <button onClick={(event) => Signin("render", "secure")}>
          TryLogin
        </button>

        <button onClick={(event) => Signup("render", "secure")}>
          TrySignup
        </button>

        <button onClick={(event) => GetCapsules()}>
          GetCapsules
        </button>

        <button onClick={(event) => AddCapsule("Howdy World")}>
          AddCapsule
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR!
        </p>
        <div>
          <form onSubmit={submit}>
            <input
              filename={file} 
              onChange={e => setFile(e.target.files[0])} 
              type="file" 
              accept="image/*"
            ></input>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
