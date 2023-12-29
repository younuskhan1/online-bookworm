const getElementsFromLocalStorage = () => {
    return localStorage.getItem("book") ? 
    JSON.parse(localStorage.getItem("book")) : [];
}
const setElementToLocalStorage = (book) =>{
    const existedElementsOfLocalStorage = getElementsFromLocalStorage();
    const newElementsOfLocalStorage = [ ...existedElementsOfLocalStorage, book.title];
    localStorage.setItem("book", JSON.stringify(newElementsOfLocalStorage));
}
const getBreakTimeFromLocalStorage = () => {
    return localStorage.getItem("breakTime") ? 
    localStorage.getItem("breakTime") : "";
}
const setBreakTimeToLocalStorage = (breakTime) =>{
    localStorage.setItem("breakTime",(breakTime));
}

export {getElementsFromLocalStorage,
     setElementToLocalStorage,
     getBreakTimeFromLocalStorage, 
     setBreakTimeToLocalStorage
};