import "/src/styles.css";

import React from "react";

import image1 from "./Images/image_1.jpg";

import Toolbar from "./Toolbar/Toolbar";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Toolbar />

        <div className="images-class">
          <img src={image1} />
        </div>

        <add_info />
      </div>
    );
  }
}
