import { useState } from "react";
import Cards from "../Cards/Cards";
import ReadingInfo from "../ReadingInfo/ReadingInfo";
import "./CardAndReadingInfo.css";
import { useEffect } from "react";


const CardAndReadingInfo = () => {
    const [books, setBooks] = useState([]);
    const [totalExerciseTime, setTotalExerciseTime] = useState(0);
    const [numberOfBooks, setNumberOfBooks] = useState([]);
    // const [added, setAdded] = useState(false);
    // console.log(numberOfBooks);

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


    const exerciseTimeHandler = (book) =>{
        // console.log(book);
        for(let books of numberOfBooks){
            if( books.title === book.title){
                return alert("you cannot add the same item for twice");
            }
        }
        const timeRequired = totalExerciseTime + parseFloat(book.time_required); 
        setTotalExerciseTime(timeRequired);
        const dataNumber = [...numberOfBooks, book];
        setNumberOfBooks(dataNumber);
    }
    

    return (
        <div className="card-and-reading-info">
            <Cards exerciseTimeHandler = {exerciseTimeHandler} books = {books}></Cards>
            <ReadingInfo numberOfBooks={numberOfBooks} totalExerciseTime={totalExerciseTime}></ReadingInfo>
        </div>
    );
};

export default CardAndReadingInfo;