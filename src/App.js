import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // const step = 1; // later we will update this step, right now we are building the static part
  // const arr = useState(1);
  // Step 1 : Defining the state
  const [step, setStep] = useState(1);
  // console.log(arr);

  // const step = 1;

  function handlePrevious() {
    // alert("Previous");
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    // alert("Next");

    if (step < 3) setStep(step + 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        {/* step 2 : we used the state varaible 'step' in our component*/}
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Step {step} : {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          // onClick={() => alert("Previous")}
          // onClick={() => handlePrevious()}
          onClick={handlePrevious}
          // onMouseEnter={() => alert("TEST")}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          // onClick={() => alert("Next")}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
