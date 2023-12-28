
import PropTypes from 'prop-types';
import Card from "../Card/Card";
import "./Cards.css"


const Cards = ({books, exerciseTimeHandler}) => {
    return (
        <div className='cards-parent'>
            <h3 className='cards-parent-heading'>Selected Today<span>&#39;</span>s Books</h3>
            <div className="all-cards-div">
              {
                books.map((book, index)=> <Card exerciseTimeHandler={exerciseTimeHandler} key = {index} book = {book}></Card>)
              }
            </div>
        </div>
    );
};

Cards.propTypes = {
    books : PropTypes.array.isRequired,
    exerciseTimeHandler: PropTypes.func.isRequired,
}

export default Cards;