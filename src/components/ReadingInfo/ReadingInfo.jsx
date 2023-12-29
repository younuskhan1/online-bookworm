import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./ReadingInfo.css"
import { useEffect, useState } from 'react';
import { getBreakTimeFromLocalStorage,
     setBreakTimeToLocalStorage } 
     from '../LocalStorage/LocalStorage';

const ReadingInfo = ({totalExerciseTime, numberOfBooks}) => {
    // console.log(totalExerciseTime)
    const [breakTime, setBreakTime] = useState(0);
    
    useEffect(()=>{
        const getBreakTimeFromLS = getBreakTimeFromLocalStorage();
        setBreakTime(getBreakTimeFromLS);
    },[])

    const breakTimeHandler = (breakTime) =>{
        setBreakTime(breakTime)
        setBreakTimeToLocalStorage(breakTime);
    }
    const activityCompleted = ()=>{
        return toast.info("All activities is completed.", {
            position: "top-center",
            theme: "dark",
        });
    }

    return (
        <div className="reading-info-parent">
            <p style={{textAlign: "center",padding: "0px 10px 20px", fontSize: "25px",fontWeight: "700"}}>Break & Exercise Time</p>
            <div  className="reading-time-info">
                <h3 style={{fontSize: "20px", color: "purple", borderBottom:"4px solid white", paddingBottom: "20px",textAlign: "center"}}>Add a Break</h3>
                <div className="break-time-button-parent">
                    <button className="break-time-button" onClick={()=>breakTimeHandler(10)}><span style={{fontSize: "22px",fontWeight:"700"}}>10</span>m</button>
                    <button className="break-time-button button-margin" onClick={()=>breakTimeHandler(20)}><span style={{fontSize: "22px",fontWeight:"700"}}>20</span>m</button>
                    <button className="break-time-button button-margin" onClick={()=>breakTimeHandler(30)}><span style={{fontSize: "22px",fontWeight:"700"}}>30</span>m</button>
                    <button className="break-time-button button-margin" onClick={()=>breakTimeHandler(40)}><span style={{fontSize: "22px",fontWeight:"700"}}>40</span>m</button>
                    <button className="break-time-button button-margin" onClick={()=>breakTimeHandler(50)}><span style={{fontSize: "22px",fontWeight:"700"}}>50</span>m</button>  
                </div>
                <h3 style={{fontSize: "20px", color: "purple", padding: "20px 0px",textAlign:"center",borderBottom:"4px solid white"}}>Exercise Details</h3>
                <p style={{textAlign: "center", fontWeight: "700",paddingTop: "20px"}}>Total Number of Selected Books {numberOfBooks.length}</p>
                <div className="exercise-time">
                    <p style={{fontWeight: "700"}}>Exercise Time</p>
                    <p style={{color: "gray"}}><span>{totalExerciseTime}</span> hours</p>
                </div>
                <div className="exercise-time">
                    <p style={{fontWeight: "700"}}>Break Time</p>
                    <p style={{color: "gray"}}><span>{breakTime}</span> minutes</p>
                </div>
                <div style={{padding: "20px 0px"}}><button className="activity-completed-button" onClick={activityCompleted}>Activity Completed</button></div>
            </div>
            <ToastContainer />
        </div>
    );
};

ReadingInfo.propTypes = {
    totalExerciseTime : PropTypes.number.isRequired,
    numberOfBooks: PropTypes.array.isRequired,
}
export default ReadingInfo;