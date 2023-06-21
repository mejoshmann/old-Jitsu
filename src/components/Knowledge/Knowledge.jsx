import { useState } from "react";
import "./Knowledge.scss";

function Knowledge() {

  const [showPoints, setShowPoints] = useState({
    takedown: false,
    sweep: false,
    knee: false,
    guard: false,
    mount: false,
    back: false,
    advantages: false,
  });

  const handleClick = (pointsName) => {
    setShowPoints((prevState) => ({
      ...prevState,
      [pointsName]: !prevState[pointsName],
    }));
  };

  return (
    <>
      <div className="points">
        <div className="points__takedown">
          <div className="points__heading--cont">
          <h2
            className="points__heading"
            onClick={() => handleClick("takedown")}
          >
            Takedowns
          </h2>
          <h3 className="points__points">2 Points</h3>
          </div>
          {showPoints.takedown && (
            <p className="points__info">
              Unlike most other grappling combat sports, the takedown is not
              highly valued in this ruleset. Taking the opponent down and
              controlling him will earn you only two points. To get them, the
              opponent must land on his back, side, or butt, and you must
              establish top position for at least 3 seconds.
            </p>
          )}
        </div>

        <div className="points__sweep">
        <div className="points__heading--cont">

          <h2 className="points__heading" 
              onClick={() => handleClick("sweep")}>
            Sweeps
          </h2>
          <h3 className="points__points">2 Points</h3>
          </div>
          {showPoints.sweep && (
            <p className="points__info">
              A sweep is performed when you reverse the position from the bottom
              and end up in top position. To get the 2 points, you need to start
              from full guard or half guard. Many competitors prefer to allow
              being taken down and perform a sweep to negate the 2 points earned
              by the opponent’s takedown.
            </p>
          )}
        </div>

        <div className="points__knee">
        <div className="points__heading--cont">

          <h2 className="points__heading" 
              onClick={() => handleClick("knee")}>
            Knee on Belly
          </h2>
          <h3 className="points__points">2 Points</h3>
          </div>
          {showPoints.knee && (
            <p className="points__info">
              As it’s clear from the name, the knee-on-belly position entails
              placing your knee or shin on the opponent’s belly or chest. Again,
              you need to hold the position for 3 seconds before you get the
              points.
            </p>
          )}
        </div>
        <div className="points__guard">
        <div className="points__heading--cont">

          <h2 className="points__heading" 
              onClick={() => handleClick("guard")}>
            Guard Pass
          </h2>
          <h3 className="points__points">3 Points</h3>
          </div>
          {showPoints.guard && (
            <p className="points__info">
              The only move to score 3 points is passing the guard. A guard pass
              means overcoming the opponent’s guard and ending up in side
              control, north south, or mount, all considered dominant positions,
              unlike the guards, which are neutral.
            </p>
          )}
        </div>
        <div className="points__mount">
        <div className="points__heading--cont">

          <h2 className="points__heading" 
              onClick={() => handleClick("mount")}>
            Mount
          </h2>
          <h3 className="points__points">4 Points</h3>
          </div>
          {showPoints.mount && (
            <p className="points__info">
              Mount is a dominant position achieved when sitting on your
              opponent’s belly or chest. You must have both knees or one knee
              and a foot on the ground for a mount to be scored. Back Mount is
              where you are on your opponent’s back, and both of you face the
              ground. Both the mount and back mount are dominant positions for
              the attacker and are scored accordingly.
            </p>
          )}
        </div>
        <div className="points__back">
        <div className="points__heading--cont">

          <h2 className="points__heading" 
              onClick={() => handleClick("back")}>
            Back Control
          </h2>
          <h3 className="points__points">4 Points</h3>
          </div>
          {showPoints.back && (
            <p className="points__info">
              Back control is very similar to back mount. Still, the difference
              is that the opponent sits on the floor instead of lying on his
              belly. You must have both legs inside his hips to get the precious
              3 points awarded for back control.
            </p>
          )}
        </div>

        <div className="points__advantages">
        <div className="points__heading--cont">

          <h2
            className="points__heading"
            onClick={() => handleClick("advantages")}
          >
            Advantages
          </h2>
          </div>
          {showPoints.advantages && (
            <p className="points__info">
              Advantage points are awarded that come into play
              only when the score is a draw. You can earn advantage points in
              different scenarios. The most common is when you cannot hold a
              position for the entire 3 seconds required for scoring. For
              example, you may pass the guard and go into side control. Still,
              the opponent escapes after two seconds, which gives you an
              advantage point. Advantage points can also be earned for attempted
              and nearly finished submissions. Then referees are also allowed to
              award advantage points after the match is over but before the
              results are revealed, and in this way, settle the draw.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Knowledge;
