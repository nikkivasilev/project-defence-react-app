import { useEffect, useState } from "react"
import CatalogueItem from "../CatalogueItem/CatalogueItem"
import {getAll} from "../../services/productService"

export default function Catalogue() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAll()
        .then(result => setProducts(result))
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <section id="catalogPage">
         {products.length > 0 ? ( 
            <>  
                {products.map(product => <CatalogueItem key={product._id} {...product}/>)}
            </>
        ) : <> <p>No Products in Catalog!</p>   </>
    
        } 
        </section>
    )
}