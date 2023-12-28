import "./ReadingInfo.css"

const ReadingInfo = () => {
    return (
        <div className="reading-info-parent">
            <p style={{textAlign: "center",padding: "0px 10px 20px", fontSize: "25px",fontWeight: "700"}}>Break & Exercise Time</p>
            <div  className="reading-time-info">
                <h3 style={{fontSize: "20px", color: "purple",borderBottom:"4px solid white", paddingBottom: "20px"}}>Add a Break</h3>
            </div>
        </div>
    );
};

export default ReadingInfo;