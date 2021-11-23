import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import firebase from "./firebase";

function App() {
  console.log("App functions");

  const [token, settoken] = useState("");

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    let firebaseToken;
    try {
      firebaseToken = await firebase.messaging().getToken();
      if (firebaseToken) {
        console.log("current token for client: ", firebaseToken);
        settoken(firebaseToken);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        // shows on the UI that permission is required
      }
    } catch (e) {
      console.log("An error occurred while retrieving token. ", e);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input value={token} />
      </header>
    </div>
  );
}

export default App;
