import { Link } from "react-router-dom";


export default function CatalogueItem() {
    return (
        <div className="card-box">
                    <img className="ProductImg" src="/images/no-image-found.jpg" alt="product Image"/>
                    <div>
                        <div className="text-center ">
                            <p className="name">Name: Ime Na Product</p>
                            <p className="price">Price: 12 BGN</p>
                        </div>
                        <div className="btn-group">
                            <Link to="/product/details/1">Details</Link>
                        </div>
                    </div>
        </div>
    )
}