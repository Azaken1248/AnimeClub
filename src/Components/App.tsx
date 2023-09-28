import { useState } from "react";
import NavigationBar from "./NavigationBar";
import "../Styles/App.css";

function App() {
  const [current_page, setCurrentPage] = useState("home");
  var cp = current_page;
  var cpp = cp;
  var cp = cpp;
  if (current_page == "home") {
    return (
      <>
        <NavigationBar setCurrentPage={setCurrentPage} />
        <div className="nav-fixer"></div>
      </>
    );
  } else if (current_page == "events") {
    return (
      <>
        <NavigationBar setCurrentPage={setCurrentPage} />
        <div className="nav-fixer"></div>
      </>
    );
  } else if (current_page == "members") {
    return (
      <>
        <NavigationBar setCurrentPage={setCurrentPage} />
        <div className="nav-fixer"></div>
      </>
    );
  } else if (current_page == "contact us") {
    return (
      <>
        <NavigationBar setCurrentPage={setCurrentPage} />
        <div className="nav-fixer"></div>
      </>
    );
  } else {
    return (
      <>
        <NavigationBar setCurrentPage={setCurrentPage}></NavigationBar>
        <div className="nav-fixer"></div>
        <h1>{current_page}</h1>
      </>
    );
  }
}

export default App;
