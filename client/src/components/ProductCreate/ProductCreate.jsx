import { useNavigate } from 'react-router-dom';

import * as productService from '../../services/productService';

export default function ProductCreate() {
    const navigate = useNavigate();
    
    const createProductSubmitHandler = async (e) => {
        e.preventDefault();

        const productData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await productService.create(productData);

            navigate('/catalogue');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    return (
        <div className="container-inline">
        <section id="welcomePage">

            <div className="music-img">
                <img src="/images/contrast.png" alt="music-icon"/>
            </div>
        </section>
        <section id="registerPage">
            <fieldset>
                <legend>CREATE PRODUCT</legend>
                <form onSubmit={createProductSubmitHandler}>
                <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter product name..." />

                    <label htmlFor="image-url">ImageUrl:</label>
                    <input type="text" id="image-url" name="image-url" placeholder="Enter product Image Url..." />

                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" placeholder='Enter price'/>

                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" name="description" placeholder="Enter product description..." />

                    <input className="register" type="submit" value="Create product" />

                </form>
            </fieldset>

        </section>
    </div>

    );
}