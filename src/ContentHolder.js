import React, { Component } from "react";
import resume from "./Resume.pdf";

class ContentHolder extends Component {
  render() {
    const contentHolderStyle = {
      backgroundColor: this.props.bgcolor, //customizable background color at component-level
      width: "100%",
      height: "45vw",
      position: "relative"
    };

    const objectStyle = {
      width: "95%",
      height: "90%",
      position: "absolute",
      padding: "1.5%"
    };

    return (
      <div style={contentHolderStyle}>
        <div style={objectStyle}>
          <object data={resume} type="application/pdf" style={objectStyle}>
            alt : <a href="Resume.pdf">Resume.pdf</a>
          </object>
        </div>
      </div>
    );
  }
}

export default ContentHolder;
