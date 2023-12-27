import PropTypes from 'prop-types';

const Card = ({book}) => {
    console.log(book)
    return (
        <div>
            <p>{book.title}</p>
        </div>
    );
};

Card.propTypes = {
    book : PropTypes.object.isRequired,
}
export default Card;