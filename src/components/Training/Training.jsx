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

  const currentDate = new Date();
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <>
      <form className="form">
        <div className="form__date">{formattedDate}</div>
        <label className="form__toggle">
          <div
            className={`toggle-slider ${toggled ? "on" : "off"}`}
            onClick={handleToggle}
          >
            <div className="slider"></div>
            <p className="form__toggle--noGi">Gi</p>
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
            <div className="form__button-container">
              <button className="form__button--move">Single Leg</button>
              <button className="form__button--move">Double Leg</button>
              <button className="form__button--move">Osoto Gari</button>
              <button className="form__button--move">Shoulder Throw</button>
            </div>
          )}

          <button
            className="form__button"
            onClick={(e) => handleButtonClick("button2", e)}
          >
            Positions
          </button>
          {showButtons.button2 && (
            <div className="form__button-container">
              <button className="form__button--move">Guard</button>
              <button className="form__button--move">Side Control</button>
              <button className="form__button--move">Mount</button>
              <button className="form__button--move">Back Control</button>
            </div>
          )}

          <button
            className="form__button"
            onClick={(e) => handleButtonClick("button3", e)}
          >
            Submissions
          </button>
          {showButtons.button3 && (
            <div className="form__button-container">
              <button className="form__button--move">Triangle</button>
              <button className="form__button--move">Arm Bar</button>
              <button className="form__button--move">Guillotine</button>
              <button className="form__button--move">Rear Naked Choke</button>
            </div>
          )}

          <button
            className="form__button"
            onClick={(e) => handleButtonClick("button4", e)}
          >
            Movements
          </button>
          {showButtons.button4 && (
            <div className="form__button-container">
              <button className="form__button--move">Bridging</button>
              <button className="form__button--move">Shrimping</button>
              <button className="form__button--move">Escapes</button>
              <button className="form__button--move">Guard Passes</button>
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
