
import PropTypes from 'prop-types';
import Card from "../Card/Card";
import "./Cards.css"


const Cards = ({books}) => {
    return (
        <div className="all-cards-section">
          {
            books.map((book, index)=> <Card key = {index} book = {book}></Card>)
          }
        </div>
    );
};

Cards.propTypes = {
    books : PropTypes.array.isRequired,
}

export default Cards;