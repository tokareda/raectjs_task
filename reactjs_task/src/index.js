import React from "react";
import ReactDOM from "react-dom";
import Layout from "./component/Layout";

class App extends React.Component {
  render() {
    return <Layout />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
