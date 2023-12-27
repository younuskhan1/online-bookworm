import { useState } from "react";
import Cards from "../Cards/Cards";
import ReadingInfo from "../ReadingInfo/ReadingInfo";
import "./CardAndReadingInfo.css";
import { useEffect } from "react";


const CardAndReadingInfo = () => {
    const [books, setBooks] = useState([]);

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
    return (
        <div className="card-and-reading-info">
            <Cards books = {books}></Cards>
            <ReadingInfo></ReadingInfo>
        </div>
    );
};

export default CardAndReadingInfo;