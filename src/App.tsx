import { useState } from "react";
import "./App.css";
import $ from "jquery";
import JqCss from "./jqComponent/jqCss";

// Display Calculator
function displayCalculator() {
  $("section").css("display", "none");
  $("main").css("display", "block");
  JqCss();
}

function App() {
  const [service, setService] = useState("10");
  const [vat, setVat] = useState("15");
  const [amount, setAmount] = useState("");

  const vatChange = (e: any) => {
    setVat(e.target.value);
  };

  const serviceChange = (e: any) => {
    setService(e.target.value);
  };

  const amountChange = (e: any) => {
    setAmount(e.target.value);
  };

  // Dom
  let totalAmount: any = document.getElementById("total-amount");

  const calculate = () => {
    let Total;
    let Amount = Number(amount);
    let Vat = Number(vat);
    let Service = Number(service);

    Total = Amount + (Vat * Amount) / 100 + (Service * Amount) / 100;

    if (!Amount) {
      alert("Please enter correct amount!");
      totalAmount!.textContent = "";
    } else if (Amount < 0) {
      alert("Please enter number greater than zero");
      totalAmount!.textContent = "";
    } else {
      totalAmount!.innerHTML = `${Total}`;
    }
  };

  const clear = () => {
    totalAmount!.textContent = "";
    setAmount("");
    setVat("15");
    setService("10");
  };

  return (
    <div id="body">
      <section>
        <h1 id="h1" className="text-center">
          Well Come to <span>Vat</span> and <span>Service Charge</span>{" "}
          Calculator
        </h1>
        <button
          onClick={displayCalculator}
          className="btn btn-primary"
          id="btn-start"
        >
          Start Calculation
        </button>
      </section>

      <main className="hidden">
        <div className="calc-bg">
          <div className="label-input">
            <label htmlFor="input-amount">Enter amount before vat:</label>
            <input
              onChange={amountChange}
              value={amount}
              type="number"
              id="input-amount"
            />
          </div>
          <div className="label-input">
            <label htmlFor="vat-percentage">Vat Percentage(%):</label>
            <input
              onChange={vatChange}
              type="number"
              id="vat-percentage"
              value={vat}
            />
          </div>
          <div className="label-input">
            <label htmlFor="service-charge">Service Charge(%):</label>
            <input
              onChange={serviceChange}
              type="number"
              id="service-charge"
              value={service}
            />
          </div>
          <div className="label-input">
            <label htmlFor="total-amount" id="total-str">
              The total value =
            </label>
            <h4 id="total-amount"></h4>
          </div>

          <div className="btns">
            <button
              onClick={calculate}
              className="btn btn-success"
              id="btn-calculate"
            >
              Calculate
            </button>
            <button onClick={clear} className="btn btn-danger" id="btn-clear">
              Reset
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
