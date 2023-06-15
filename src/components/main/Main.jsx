import './Main.scss';
function Main() {
    return(
        <div className="main">
            
            <div className="main__container">
            <div className="main__news"></div>
            <div className="main__activity"></div>
            <div className="main__something"></div>
            <div className="main__somethingElse"></div>
            </div>
            <div className="main__trackerContainer">
                <div className="main__months">
                    <div className="main__jan">Jan</div>
                    <div className="main__feb">Feb</div>
                    <div className="main__mar">Mar</div>
                    <div className="main__apr">Apr</div>
                    <div className="main__may">May</div>
                    <div className="main__jun">Jun</div>
                    <div className="main__jul">Jul</div>
                    <div className="main__aug">Aug</div>
                    <div className="main__sept">Sep</div>
                    <div className="main__oct">Oct</div>
                    <div className="main_nov">Nov</div>
                    <div className="main__dec">Dec</div>
                </div>
            </div>

        </div>
    )
}

export default Main;