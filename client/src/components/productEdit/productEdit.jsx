import { useNavigate, useParams } from 'react-router-dom';

import * as productService from '../../services/productService';
import { useEffect, useState } from 'react';

export default function ProductEdit() {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [errorMessage, setErrorMessage] = useState('')
    const [product, setProduct] = useState({
        name: '',
        imageUrl: '',
        price: '',
        description: '',
    });

    useEffect(() => {
        productService.getOne(productId)
            .then(result => {
                setProduct(result);
            });
    }, [productId]);

    const editProductSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));
        try {
            await productService.edit(productId, values);

            navigate('/catalogue');
        } catch (err) {
            setErrorMessage(err)
        }
    }

    const onChange = (e) => {
        setProduct(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="container-inline">
        <section id="welcomePage">

            <div className="music-img">
                <img src="/images/contrast.png" alt="music-icon"/>
            </div>
        </section>
        <section id="registerPage">
            <fieldset>
                <legend>EDIT PRODUCT</legend>
                <form onSubmit={editProductSubmitHandler}>
                    <label htmlFor="name">Name:</label>
                    <input value={product.name} onChange={onChange} type="text" id="name" name="name" placeholder="Enter product name..." />

                    <label htmlFor="image-url">Image Url:</label>
                    <input value={product.imageUrl} onChange={onChange} type="text" id="image-url" name="imageUrl" placeholder="Enter product Image Url..." />

                    <label htmlFor="price">Price:</label>
                    <input value={product.price} onChange={onChange} type="number" id="price" name="price" placeholder='Enter price'/>

                    <label htmlFor="description">Description:</label>
                    <input value={product.description} onChange={onChange} type="text" id="description" name="description" placeholder="Enter product description..." />
                    
                    {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}

                    <input className="register" type="submit" value="Edit product" />

                </form>
            </fieldset>

        </section>
    </div>
    );
}