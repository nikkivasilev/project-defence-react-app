import { Link } from "react-router-dom";

export default function CatalogueItem(props) {
    const productUrl = `/product/details/${props._id}`
    return (
        <div className="card-box">
                    <img className="ProductImg" src="/images/no-image-found.jpg" alt="product Image"/>
                    <div>
                        <div className="text-center ">
                            <p className="name">Name: {props.name}</p>
                            <p className="price">Price: {props.price} BGN</p>
                        </div>
                        <div className="btn-group">
                            <Link to={productUrl}>Details</Link>
                        </div>
                    </div>
        </div>
    )
}