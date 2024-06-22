import "./index.css"
import QuickViewPopup from "../QuickViewPopup"

const ProductCard = (props) => {
    const {name} = props;
    return (
        <div className="product-card">
            <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1719065745/Beej-Patakha_3_1_gubibq.png" alt="product" className="product-image"/>
            <div className="product-details">
                <p className="name">{name}</p>
                <QuickViewPopup name={name}/>
            </div>
        </div>
    )
}

export default ProductCard