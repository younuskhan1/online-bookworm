import "./ReadingInfo.css"

const ReadingInfo = () => {
    return (
        <div className="reading-info-parent">
            <p style={{textAlign: "center",padding: "0px 10px 20px", fontSize: "25px",fontWeight: "700"}}>Break & Exercise Time</p>
            <div  className="reading-time-info">
                <h3 style={{fontSize: "20px", color: "purple",borderBottom:"4px solid white", paddingBottom: "20px",textAlign: "center"}}>Add a Break</h3>
                <div className="break-time-button-parent">
                    <button className="break-time-button"><span style={{fontSize: "22px",fontWeight:"700"}}>10</span>s</button>
                    <button className="break-time-button button-margin"><span style={{fontSize: "22px",fontWeight:"700"}}>20</span>s</button>
                    <button className="break-time-button button-margin"><span style={{fontSize: "22px",fontWeight:"700"}}>30</span>s</button>
                    <button className="break-time-button button-margin"><span style={{fontSize: "22px",fontWeight:"700"}}>40</span>s</button>
                    <button className="break-time-button button-margin"><span style={{fontSize: "22px",fontWeight:"700"}}>50</span>s</button>  
                </div>
                <h3 style={{fontSize: "20px", color: "purple", padding: "20px 0px",textAlign:"center",borderBottom:"4px solid white"}}>Exercise Details</h3>
                <div className="exercise-time">
                    <p style={{fontWeight: "700"}}>Exercise Time</p>
                    <p style={{color: "gray"}}><span>200</span> seconds</p>
                </div>
                <div className="exercise-time">
                    <p style={{fontWeight: "700"}}>Break Time</p>
                    <p style={{color: "gray"}}><span>15</span> seconds</p>
                </div>
                <div style={{padding: "20px 0px"}}><button className="activity-completed-button">Activity Completed</button></div>
            </div>
        </div>
    );
};

export default ReadingInfo;