import React from "react";
import "./InfoSection.css";

function InfoSection() {
  return (
    <div className="infoSection">
      <h3>
        Developed in React Js by Arif Shariati @{" "}
        <a
          href="https://github.com/arifshariati/covid-19-tracker"
          rel="noreferrer noopener"
          target="_blank"
        >
          GitHub
        </a>
      </h3>
      <h4>Dependencies</h4>
      <ul>
        <li>
          <a
            href="https://reactjs.org/"
            rel="noreferrer noopener"
            target="_blank"
          >
            React Js
          </a>
        </li>
        <li>
          <a
            href="https://material-ui.com/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Material UI
          </a>
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/react-chartjs-2"
            rel="noreferrer noopener"
            target="_blank"
          >
            React Chartjs-2
          </a>
        </li>
        <li>
          <a
            href="https://react-leaflet.js.org/"
            rel="noreferrer noopener"
            target="_blank"
          >
            React Leaflet - Leaflet
          </a>
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/numeral"
            rel="noreferrer noopener"
            target="_blank"
          >
            Numeral
          </a>
        </li>
      </ul>
    </div>
  );
}

export default InfoSection;
