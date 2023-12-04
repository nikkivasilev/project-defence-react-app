import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as productService from '../../services/productService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
import reducer from './commentReducer';
import useForm from '../../hooks/useForm';
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";


export default function ProductDetails() {
    const navigate = useNavigate();
    const { email, userId, isAuthenticated } = useContext(AuthContext);
    const [product, setProduct] = useState({});
    const [comments, dispatch] = useReducer(reducer, []);
    const { productId } = useParams();

    useEffect(() => {
        productService.getOne(productId)
            .then(setProduct);

        commentService.getAll(productId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                });
            });
    }, [productId]);


    const addCommentHandler = async (values) => {
        

        const newComment = await commentService.create(
            productId,
            values.comment
        );

        newComment.owner = { email };

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })
        
    }

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${product.title}`);

        if (hasConfirmed) {
            await productService.remove(productId);

            navigate('/catalogue');
        }
    }

    const { values, onChange, onSubmit, formValid } = useForm(addCommentHandler, {
        comment: '',
    });

    return (
        <section id="detailsPage">
        <div className="Productwrapper">
            <div className="albumCover">
                <img src={product.imageUrl} alt="Product Image"/>
            </div>
            <div className="albumInfo">
                <div className="albumText">
                    <h1 className="albumText">Name:  {product.name}</h1>
                    <h1 className="albumText">Price:  {product.price} BNG</h1>
                    {product.description &&
                    <>
                        <p className="albumText">Description: {product.description}</p>
                        </>
                    }
                </div>
                
                    {userId === product._ownerId && (
                    <div className="actionBtn">
                        <Link to={pathToUrl(Path.ProductEdit, { productId })} className="button">Edit</Link>
                        <button className="register" onClick={deleteButtonClickHandler}>Delete</button>
                    </div>
                    )}
            </div>

        </div>
        <div className="commentswrapper">
            {isAuthenticated && (
            <form className="actionBtn" onSubmit={onSubmit}>
                <label className="commentText">
                <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                {formValid && <p style={{color: 'red'}}>Comment must not be an empty string!</p>}

                    <button className="register" type="submit">Add Comment</button>
                </label>
            </form>
            )}
            <ul>
                    {comments.map(({ _id, text, owner: { email } }) => (
                        <li key={_id} className="comment">
                            <p>{email}: {text}</p>
                        </li>
                    ))}
            </ul>

                    {comments.length === 0 && (
                        <h1 className="index-header">No one has commented yet. Be the first one!</h1>
                    )}
            
        </div>
    </section>  
    )
}