import { useState } from "react";
import LogoHookahBang from "./img/HookahBang.png";
import "./App.css";
import CardList from "./components/CardList";

function App({ CardMedia }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={LogoHookahBang} alt="Logo HookahBang" />
        <CardList />
      </header>
    </div>
  );
}

export default App;
