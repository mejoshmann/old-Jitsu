import "./Today.scss";


function Today() {
    return(
        <>
        <div className="today">
        <div className="today__leftCont"></div>
        <div className="today__right__cont">
            <h4 className="today__hours">You trained{" "}hours</h4>
            <h4 className="today__positions">Positions trained</h4>
            <h5 className="today__positions--trained"></h5>
        </div>

        </div>
        </>
    )
}

export default Today;