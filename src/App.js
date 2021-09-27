import ReactDOM from "react-dom";
import React, { Component } from "react";
import ScrollSpyTabs from "./ScrollSpyTabs";

function App() {
  return (
    <div
        style={{
          fontFamily: "roboto, sans-serif",
          fontSize: 15,
          backgroundColor: "#fff"
        }}
      >
        <h1>Sam ScrollSpyTabs demo</h1>
        <p>
          This is a demo of the react scrollspy using material-ui tab components
        </p>
        <p>
          See source for credits and license. If not specified otherwise MIT
          license apply.
        </p>
        <p>
          Checkout a live demo on{" "}
        </p>
        <hr />
        <ScrollSpyTabs
          tabsInScroll={[
            {
              text: "Tab no. 1",
              component: <h3 style={{ height: "80vh", backgroundColor: "pink" }}>tab no 1 - some text</h3>
            },
            {
              text: "Tab no. 2",
              component: <h3 style={{ height: "80vh", backgroundColor: "yellow" }}>tab no 2 - some text</h3>
            },
            {
              text: "Tab no. 3",
              component: <h3 style={{ height: "150vh", backgroundColor: "aliceblue" }}>tab no 3 - some text</h3>
            },
            {
              text: "Tab no. 4",
              component: <h3 style={{ height: "100vh", backgroundColor: "antiquewhite" }}>tab no 4 - some text</h3>
            },
            {
              text: "Tab no. 5",
              component: <h3 style={{ height: "100vh", backgroundColor: "gainsboro" }}>tab no 4 - some text</h3>
            }
          ]}
        />
      </div>
  );
}

export default App;
