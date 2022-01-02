import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Main from "./components/Main";

function Home() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

ReactDOM.render(<Home />, document.getElementById("root"));
