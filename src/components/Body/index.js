import "./index.css"

import ProductCard from "../ProductCard"

const products = ["Raju Rassibomb", "Ladiyon ki Rani Chani"]

const Body = () => {
    return (
        <div className="body-container">
            <div className="decorative-container">
                <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1719061593/Frame_vimzsr.png" className="decorative-frame-img" alt="decorative frame img"/>
                <p className="text">About</p>
                <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1719061593/Frame_vimzsr.png" className="decorative-frame-img" alt="decorative frame img"/>
            </div>
            <div className="about-container">
                <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1719066298/Frame_1_xjyhvn.png" alt="decoration"/>
                <p className="about">Our products are crafted exclusively from the dreams and screams of young kids who wanted to show their mastery in their chosen fields, but were directed towards a factory for daily wages. Each cracker bursts brighter than their lost smiles, and can be heard louder than their cries for miles. Buy them, burst them, brag about them.
                <br/><span className="highlight-text">The choice is yours. Because they don’t have one.</span></p>
                <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1719066298/Frame_1_xjyhvn.png" alt="decoration"/>
            </div>
            <div className="decorative-container">
                <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1719061593/Frame_vimzsr.png" className="decorative-frame-img" alt="decorative frame img"/>
                <p className="text">Our products</p>
                <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1719061593/Frame_vimzsr.png" className="decorative-frame-img" alt="decorative frame img"/>
            </div>
            <ul className="products-list">
                {products.map(product => (
                    <ProductCard key={product} name={product}/>
                ))}
            </ul>
            <div className="bottom-frame">
                <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1719066966/Framebottom_felit2.png" className="decorative-bottom-frame" alt="decorative frame img1"/>
            </div>
        </div>
    )
}

export default Body