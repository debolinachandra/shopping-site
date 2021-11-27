import React, { useState } from 'react'
import Product from './Product'
import { Data } from './Data';
import './Products.css';


const AddProducts = () => {
    const [state, setState] = useState(Data);
const changeHandler=(e)=>{
    e.preventDefault();
    if()
}


    return (
        <div className="products">
            <form>
                <label>Product company</label>
                <select>
                    <option value="select" selected disabled></option>
                    
                </select>
                <label>Product title</label>
                <input type="text" name="title" value="" onChange={changeHandler}/>
                <label>Price</label>
                <input type="text" name="title" value="" onChange={changeHandler}/>
                <input type="checkbox" name="Top Products" value="" onChange={changeHandler}/>
                <label>Upload Product Image</label>
                <input type="submit" name="Upload" />
                <button>Cancel</button>
                <button>Save</button>
            </form>

        </div>
    )
}

export default AddProducts
