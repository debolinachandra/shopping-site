import React from 'react'
import './Details.css';
import {Link,useParams} from 'react-router-dom';
import {Data} from './Data';


const Details = (props) => {

  const{id}=useParams();
  
  let detailsProduct=Data.find(item=>item._id===parseInt(id))
    return (
        <div className="details">
        <div className="inside-container">
          <h1>product details</h1>
          <div className="details-center">
            <div className="details-img">
              <img src={`${detailsProduct.img}`} alt="product" />
            </div>
            <div className="details-info">
              <h4 className="details">{detailsProduct.title}</h4>
            <p className="details-text-info">{detailsProduct.details}</p>
            <p className="details-price">
              price: <span>${detailsProduct.price}</span>
            
            </p>
            <div className="details-btn">
              <Link to="/products">Back to products</Link>
            <button>Add to cart</button>
            </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Details
