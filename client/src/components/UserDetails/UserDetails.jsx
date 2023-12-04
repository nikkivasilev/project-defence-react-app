import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";

export default function UserDetails() {
    const { email, username, userId} = useContext(AuthContext);

    // const deleteButtonClickHandler = async () => {
    //     const hasConfirmed = confirm(`Are you sure you want to delete ${product.title}`);

    //     if (hasConfirmed) {
    //         await productService.remove(productId);

    //         navigate('/catalogue');
    //     }
    // }

    return (
    <div className="wrapper">
        <div className="profileText">
            {username && 
            <h1>Username: {username}</h1>
            }
            
            <h1>Email: {email}</h1>
        </div>
        
        {/* <div className="actionBtn">
        <Link to={pathToUrl(Path.UserEdit, { userId })} className="button">Edit</Link>
        </div> */}
        {/* <div className="actionBtnDelete">
            <button onClick={deleteButtonClickHandler}>Delete</button>
        </div> */}
    </div>
    )
}