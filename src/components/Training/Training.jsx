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
              <button>Single Leg</button>
              <button>Double Leg</button>
              <button>Osoto Gari</button>
              <button>Shoulder Throw</button>
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
              <button>Guard</button>
              <button>Side Control</button>
              <button>Mount</button>
              <button>Back Control</button>
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
              <button>Triangle</button>
              <button>Arm Bar</button>
              <button>Guillotine</button>
              <button>Rear Naked Choke</button>
            </div>
          )}

          <button
            className="form__button"
            onClick={(e) => handleButtonClick("button4", e)}
          >
            Movements
          </button>
          {showButtons.button4 && (
            <div className="button-container">
              <button>Bridging</button>
              <button>Shrimping</button>
              <button>Escapes</button>
              <button>Guard Passes</button>
            </div>
          )}
        </div>
        <label htmlFor="journal" className="form__journal">
          <textarea type="text" className="form__journal-input" />
        </label>
        <label htmlFor="submit" className="form__submit">
          <button className="form__submit--button" id="submit">Add Training</button>
        </label>
      </form>
    </>
  );
}

export default Training;
