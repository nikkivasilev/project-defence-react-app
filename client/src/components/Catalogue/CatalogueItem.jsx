import { Link } from "react-router-dom"

export default function CatalogueItem() {
    return (
        <div className="card-box">
                    <img className="ProductImg" src="{{ object.Image.url }}" alt="product Image"/>
                    <div>
                        <div className="text-center ">
                            <p className="name">Name: Ime Na Product</p>
                            <p className="price">Price: 12 BGN</p>
                        </div>
                        <div className="btn-group">
                            <Link to="">Details</Link>
                        </div>
                    </div>
        </div>
    )
}