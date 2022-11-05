import React from "react";

class MyComponent extends React.Component {
   state = {
      name: "QA",
      address: "Hue",
   };
   handleClick(event) {
        console.log("Click me my button");
      console.log("My name is", this.state.name);
   }
   handleOnMouseOver(event) {
      //   console.log("Click me my button");
      console.log("event", event.pageX);
   }
   render() {
      return (
         <div>
            My name is {this.state.name} and I'm from {this.state.address}
            <button onClick={this.handleClick}>Click me</button>
            <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
         </div>
      );
   }
}

export default MyComponent;
