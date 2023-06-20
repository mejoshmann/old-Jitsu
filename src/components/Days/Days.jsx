import "./Days.scss";

function Days() {
    return(
        <>
        <div className="days">
            <div className="days__day mon">
                <p className="days__mon">Mon</p>
                <h3 className="days__date">1</h3>
            </div>
            <div className="days__day tues">
                <p className="days__tues">Tue</p>
                <h3 className="days__date">2</h3>
            </div>
            <div className="days__day wed">
                <p className="days__wed">Wed</p>
                <h3 className="days__date">3</h3>
            </div>
            <div className="days__day thu">
                <p className="days__thu">Thu</p>
                <h3 className="days__date">4</h3>
            </div>
            <div className="days__day fri">
                <p className="days__fri">Fri</p>
                <h3 className="days__date">5</h3>
            </div>
            <div className="days__day sat">
                <p className="days__sat">Sat</p>
                <h3 className="days__date">6</h3>
            </div>
            <div className="days__day sun">
                <p className="days__sun">Sun</p>
                <h3 className="days__date">7</h3>
            </div>
        </div>
        </>
    )
}

export default Days;