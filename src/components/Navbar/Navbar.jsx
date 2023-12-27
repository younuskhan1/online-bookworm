import image from "../../assets/images/bookreader.png";
import readerImage from "../../assets/images/great reader.jpg";
import "./Navbar.css";
const Navbar = () => {
    return (
        <>
            <nav className="navbar-parents">
                <div className="logo-and-club-name-div">
                     <img className="reader-logo" src={image} alt="" />
                     <p className="club-name">ONLINE BOOKWORM CLUB</p>
                </div>
                <div className="reader-introduction">
                    <div><img className="reader-image" src={readerImage} alt="" /></div>
                    <div>
                        <p className="reader-name">Hasan Mahmud Khan</p>
                        <p className="reader-location"><i className="fa-solid fa-location-dot"></i> Copenhagen, Denmark</p>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;