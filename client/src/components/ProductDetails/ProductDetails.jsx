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
    const [edit, setEdit] = useState(false);
    const [editComment, setEditComment] = useState({});
    const [formValidEdit, setFormValidEdit] = useState(true);
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

    const deleteCommentHandler = async (e) => {
        const commentId = e.target.parentElement.id
        await commentService.remove(commentId);
        
        commentService.getAll(productId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                });
            });
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

    const editCommentClickHandler = async (e) => {
        const commentId = e.target.parentElement.id
        commentService.getOne(commentId)
            .then(result => {
                setEditComment(result)
                setEdit(true)
            })
        
    }


    const editCommentHandler = async (e) => {
        e.preventDefault();

        console.log(editComment);
        await commentService.edit(editComment)
            .then((result) => {
                dispatch({
                    type: 'EDIT_COMMENT',
                    payload: result,
                });
                setEditComment({})
                setEdit(false)
            }).catch((error) => {
                setEditComment({})
                setEdit(false)
                throw error
            })

    }

    const onChangeEdit = (e) => {
        setEditComment(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="detailsPage">
        <div className="Productwrapper">
            <div className="albumCover">
                <img src={product.imageUrl} alt="Product Image"/>
            </div>
            <div className="albumInfo">
                <div className="albumText">
                    <h1 className="albumText">Name: {product.name}</h1>
                    <h1 className="albumText">Price: {product.price} BNG</h1>
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
                <>
                {!edit ? 
            <form className="actionBtn" onSubmit={onSubmit}>
                <label className="commentText">
                <textarea id='add-comment' name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                {!formValid && <p style={{color: 'red'}}>Comment must not be an empty string!</p>}
                    <button className="register" type="submit">Add Comment</button>
                </label>
            </form>
                 : 
            <form className="actionBtn" onSubmit={editCommentHandler}>
                 <label className="commentText">
                 <textarea name="text" value={editComment.text} onChange={onChangeEdit} placeholder="Comment......"></textarea>
                 {!formValidEdit && <p style={{color: 'red'}}>Comment must not be an empty string!</p>}
                     <button className="register" type="submit">Edit Comment</button>
                 </label>
             </form>   
                    
                }
                </>
            )}
            <ul>
                    {comments.map(({ _id, text, owner }) => (
                        <li id={_id} key={_id} className="comment">
                            <p>{owner.email}: {text} </p> 
                            {email===owner.email &&
                            <>
                            <button className="delete" onClick={deleteCommentHandler}> DELETE</button>
                            <button className="edit" onClick={editCommentClickHandler}> EDIT</button>
                            </>
                            }
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