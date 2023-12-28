import { useState } from "react";
import Cards from "../Cards/Cards";
import ReadingInfo from "../ReadingInfo/ReadingInfo";
import "./CardAndReadingInfo.css";
import { useEffect } from "react";


const CardAndReadingInfo = () => {
    const [books, setBooks] = useState([]);
    const [totalExerciseTime, setTotalExerciseTime] = useState(0);

    useEffect(()=>{
        const loadData = async()=>{
            const URL = "books.json";
            try{
                const res = await fetch (URL);
                const response = await res.json();
                setBooks(response);
            }
            catch(error){
                console.log(error);
            }
        }
     loadData();
    },[])

    let totalTimeRequired = 0;
    const exerciseTimeHandler = (time_required)=>{
        const timeRequired = parseFloat(time_required);
        totalTimeRequired = totalTimeRequired + timeRequired; 
        setTotalExerciseTime(totalTimeRequired);
    }
    

    return (
        <div className="card-and-reading-info">
            <Cards exerciseTimeHandler = {exerciseTimeHandler} books = {books}></Cards>
            <ReadingInfo totalExerciseTime={totalExerciseTime}></ReadingInfo>
        </div>
    );
};

export default CardAndReadingInfo;