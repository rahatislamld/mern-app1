import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5002/").then((response) => {
      setMessage(response.data);
    });
  }, []);

  return <div className="App">{message}</div>;
}

export default App;
