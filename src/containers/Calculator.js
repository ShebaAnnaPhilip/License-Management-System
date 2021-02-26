import React, { useState } from "react";
import '../App.css'

export default function Calculator() {
  const [clientCount, setClientCount] = useState(1);
  const [serverCount, setServerCount] = useState(1);

  function startCalculator({ selector }) {
    const $root = document.querySelector(selector);

    const $inputs = $root.querySelectorAll("input");

    const $outputArea = $root.querySelector(".calculator__result");

    // contains a map of form input names and values
    const currentFormState = {};

    const outputResult = ($el, formState) => {
      $el.innerHTML = "";
      if (!formState.clientLicenses) {
        formState.clientLicenses = 0;
      }
      if (!formState.serverLicenses) {
        formState.serverLicenses = 0;
      }
      if (formState.clientLicenses && formState.serverLicenses) {
        const result =
          formState.clientLicenses * 10 + formState.serverLicenses * 30;
        $el.innerHTML = `
            <dl>
                <dt>Total Cost of Ownership (TCO)</dt>
                <dd class="calculator__total-cost">$${result}.00</dd>
            </dl>
            `;
      }
      console.log($el, formState);
    };
    // load initial state
    $inputs.forEach((node) => {
      currentFormState[node.getAttribute("name")] = node.value;
    });
    outputResult($outputArea, currentFormState);

    $inputs.forEach((node) => {
      node.addEventListener("change", (e) => {
        console.log(
          "input change:",
          node.getAttribute("name"),
          ":",
          node.value
        );
        currentFormState[node.getAttribute("name")] = node.value;
        outputResult($outputArea, currentFormState);
      });
    });
  }

  // main start
  const calculatorID = "#calculator__form";
  document.addEventListener("DOMContentLoaded", () => {
    startCalculator({ selector: calculatorID });
  });

  return (
    <div className="calculator">
      <div>
        <h2>The best pricing model</h2>
        <p>
          Enter how many endpoints and servers you intend to run, and calculate
          the TCO of your switch to Rustr.
        </p>
      </div>
      <div id="calculator__form">
        <dl>
          <dt>
            <label for="clientLicenses"> # of clients</label>
          </dt>
          <dd>
            <input
              id="clientLicenses"
              name="clientLicenses"
              value={clientCount}
              type="number"
              onChange={(e) => {
                setClientCount(e.target.value);
              }}
            />
          </dd>
          <dt>
            <label for="serverLicenses"># of servers</label>
          </dt>
          <dd>
            <input
              id="serverLicenses"
              name="serverLicenses"
              value={serverCount}
              type="number"
              onChange={(e) => {
                setServerCount(e.target.value);
              }}
            />
          </dd>
        </dl>

        <div className="calculator__result"></div>

        <div>
          <button className="home-btn">Reserve Licenses Now</button>
        </div>
      </div>
    </div>
  );
}
