import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cards from "../Cards/Cards";
import ReadingInfo from "../ReadingInfo/ReadingInfo";
import "./CardAndReadingInfo.css";
import { useEffect } from "react";
import { getElementsFromLocalStorage, 
    setElementToLocalStorage } 
    from "../LocalStorage/LocalStorage";


const CardAndReadingInfo = () => {
    const [books, setBooks] = useState([]);
    const [totalExerciseTime, setTotalExerciseTime] = useState(0);
    const [numberOfBooks, setNumberOfBooks] = useState([]);


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

    useEffect(()=>{
        if(books.length > 0){
            let localStorageBooks =[];
            const elementsOfLS = getElementsFromLocalStorage();
            for (let element of elementsOfLS){
                const LSElements = books.find(book => book.title === element);
                if(LSElements){
                    localStorageBooks.push(LSElements);
                }
            }
            setNumberOfBooks(localStorageBooks);
            let requiredTime = 0;
            for(let book of localStorageBooks){
               requiredTime = requiredTime + parseFloat(book.time_required);
            }
            setTotalExerciseTime(requiredTime);

        }
        
    },[books])


    const exerciseTimeHandler = (book) =>{
        // console.log(book);
        for(let books of numberOfBooks){
            if( books.title === book.title){
                return toast.info("you cannot add the same book for twice times.", {
                    position: "top-center",
                    theme: "dark",
                });
            }
        }
        const timeRequired = totalExerciseTime + parseFloat(book.time_required); 
        setTotalExerciseTime(timeRequired);
        const dataNumber = [...numberOfBooks, book];
        setNumberOfBooks(dataNumber);
        setElementToLocalStorage(book);
    }
    
    return (
        <div className="card-and-reading-info">
            <Cards exerciseTimeHandler = {exerciseTimeHandler} books = {books}></Cards>
            <ReadingInfo numberOfBooks={numberOfBooks} totalExerciseTime={totalExerciseTime}></ReadingInfo>
            <ToastContainer />
        </div>
    );
};

export default CardAndReadingInfo;