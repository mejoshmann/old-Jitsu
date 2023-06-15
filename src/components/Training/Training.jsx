import { useState } from "react";
import "./Training.scss";

function Training() {

  const [formData, setFormData] = useState({
    hours: '',
    journal: '',
  });
  const [toggled, setToggled] = useState(false);
  const [showButtons, setShowButtons] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
  });

  const handleButtonClick = (buttonName, e) => {
    e.preventDefault();
    setShowButtons((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  const handleToggle = () => {
    setToggled((prevState) => !prevState);
  };

  return (
    <>
      <form className="form">
        <label className="form__toggle">
          <div
            className={`toggle-slider ${toggled ? "on" : "off"}`}
            onClick={handleToggle}
          >
            <div className="slider"></div>
          </div>
        </label>
        <label className="form__hours">Hours Trained
          <input type="number" pattern="[0-9]" className="form__hours-input" />
        </label>
        <div className="form__positions">
          <button
            className="form__button"
            onClick={(e) => handleButtonClick("button1", e)}
          >
            Takedowns
          </button>
          {showButtons.button1 && (
            <div className="button-container">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
            </div>
          )}

          <button
            className="form__button"
            onClick={(e) => handleButtonClick("button2", e)}
          >
            Positions
          </button>
          {showButtons.button2 && (
            <div className="button-container">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
            </div>
          )}

          <button
            className="form__button"
            onClick={(e) => handleButtonClick("button3", e)}
          >
            Submissions
          </button>
          {showButtons.button3 && (
            <div className="button-container">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
            </div>
          )}

          <button
            className="form__button"
            onClick={(e) => handleButtonClick("button4", e)}
          >
            Escapes
          </button>
          {showButtons.button4 && (
            <div className="button-container">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
            </div>
          )}
        </div>
        <label htmlFor="journal" className="form__journal">
          <textarea type="text" className="form__journal-input" />
        </label>
      </form>
    </>
  );
}

export default Training;
