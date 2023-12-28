import { useState } from "react";
import Cards from "../Cards/Cards";
import ReadingInfo from "../ReadingInfo/ReadingInfo";
import "./CardAndReadingInfo.css";
import { useEffect } from "react";


const CardAndReadingInfo = () => {
    const [books, setBooks] = useState([]);
    const [totalExerciseTime, setTotalExerciseTime] = useState(0);
    // const [added, setAdded] = useState(false);

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


    const exerciseTimeHandler = (requiredTime)=>{
       const timeRequired = totalExerciseTime + requiredTime; 
        setTotalExerciseTime(timeRequired);
    }
    

    return (
        <div className="card-and-reading-info">
            <Cards exerciseTimeHandler = {exerciseTimeHandler} books = {books}></Cards>
            <ReadingInfo totalExerciseTime={totalExerciseTime}></ReadingInfo>
        </div>
    );
};

export default CardAndReadingInfo;