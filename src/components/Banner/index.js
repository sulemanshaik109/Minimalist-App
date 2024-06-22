import "./index.css"
import Header from "../Header"


const Banner = () => {
    return (
        <div className="banner-container">
            <Header/>
            <div className="banner-details-container">
                <h1 className="banner-heading">The choice is yours.
                    <br/>
                     Because they don’t have one.</h1>
                <button className="view-btn" type="button">Quick View</button>
            </div>
        </div>
    )
}

export default Banner