import "./Days.scss";

function Days() {

    const today = new Date();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    const nextSevenDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      nextSevenDays.push(date.getDate());
    }

    return(
        <>
        <div className="days">

      {nextSevenDays.map((date, index) => {
        const dayIndex = (today.getDay() + index) % 7;
        const dayName = dayNames[dayIndex];

        return (
          <div key={index} className={`days__day ${dayName.toLowerCase()}`}>
            <p className={`days__${dayName.toLowerCase()}`}>{dayName}</p>
            <h3 className="days__date">{date}</h3>
          </div>
        );
      })}
        </div>
        </>
    )
}

export default Days;