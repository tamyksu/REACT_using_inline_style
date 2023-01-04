//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";
var message = "";
const data = new Date(2023, 1, 1, 1);
const myStyle = {
  color: "red"
};
if (data.getHours() >= 0 && data.getHours() <= 12) {
  message = "Good Morning";
  myStyle.color = "red";
} else if (data.getHours() > 12 && data.getHours() <= 18) {
  message = "Good Afternoon";
  myStyle.color = "green";
} else {
  message = "Good Evening";
  myStyle.color = "blue";
}
ReactDOM.render(
  <h1 style={myStyle}>{message}</h1>,
  document.getElementById("root")
);
