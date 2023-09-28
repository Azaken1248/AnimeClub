//import { useState } from "react";
import NavigationBar from "./NavigationBar";
import "../Styles/App.css";
import { SetStateAction } from "react";

function App() {
  return (
    <NavigationBar
      setCurrentPage={function (value: SetStateAction<string>): void {
        throw new Error("Function not implemented.");
      }}
    ></NavigationBar>
  );
}

export default App;
