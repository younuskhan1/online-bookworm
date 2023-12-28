import PropTypes from 'prop-types';
import "./Card.css"

const Card = ({book, exerciseTimeHandler}) => {
    const {image, title, paragraph, age, time_required} = book;
    return (
        <div className='book-card'>
            <img className='card-image' src={image} alt="" />
            <h3 style={{paddingLeft:"17px", paddingTop:"10px", fontSize: "20px"}}>{title}</h3>
            <div style = {{height: "40%", display:"flex", flexDirection: "column", justifyContent:"space-between"}}>
                <div className='card-text'>
                    <p style={{textAlign:"justify",color: "gray"}}>{paragraph}</p>
                    <p style={{padding:"10px 0px", fontWeight: "bold"}}> For Age : {age}</p>
                    <p style={{fontWeight: "bold"}}> Time Required : {time_required}</p>
                </div>
                <div className="button-holder"><button className="cart-button" onClick={()=>exerciseTimeHandler(time_required)}>Add to Cart</button></div>
            </div>
        </div>
    );
};

Card.propTypes = {
    book : PropTypes.object.isRequired,
    exerciseTimeHandler:PropTypes.func.isRequired,
}
export default Card;