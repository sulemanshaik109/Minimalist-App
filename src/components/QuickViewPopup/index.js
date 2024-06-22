import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './index.css';

const QuickViewPopup = (props) => {
  const {name} = props
  return (
    <Popup trigger={<button className="view-btn product-btn" type="button">Quick View</button>} modal>
      {close => (
        <div className="modal">
          <div className='popup-images'>
              <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1719078773/popup-img_nndhws.png" className='popup-large-img' alt="popup large"/>
              <div className='small-images-container'>
                <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1719079473/small1_pridg0.png" className='popup-small-img' alt="popup small"/>
                <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1719079182/small_image_kz5j0s.png" className='popup-small-img' alt="popup small"/>
                <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1719079182/small_image_kz5j0s.png" className='popup-small-img' alt="popup small"/>
                <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1719079182/small_image_kz5j0s.png" className='popup-small-img' alt="popup small"/>
              </div>
            </div>
          <div className="content">
            <div className='popup-heading-container'>
              <h1 className='popup-heading'>{name}</h1>
              <button className="close" type="button" onClick={close}>&times;</button>
            </div>
            <p className='popup-price'>MRP: <br/>
            <span className='price'>Raju's Dreams/-</span></p>
            <div className='horizontal-dotted-line'></div>
            <p className='popup-text'>Product Description: <br/>
            <span className='description'>This product packs an extra punch, thanks to the literal blood, sweat and tears of an young boy.</span></p>
            <div className='horizontal-dotted-line'></div>
            <p className='popup-text'>Product Contents:</p>
            <ul className='contents'>
              <li className='description'>10 hand-hurting pieces of rassi bombs</li>
              <li className='description'>Jilled with great pain</li>
              <li className='description'>Raju’s hopes</li>
            </ul>
            <div className='horizontal-dotted-line'></div>
            <p className='popup-context'>Shipping Time: <br/>
            <span className='description'>Before Raju understands that his dreams do not matter.</span></p>
            <button className='view-btn product-btn' type="button">Choose Now</button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default QuickViewPopup;
