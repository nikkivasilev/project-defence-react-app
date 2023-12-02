import { useEffect, useState } from "react"
import CatalogueItem from "../CatalogueItem/CatalogueItem"
import {getAll} from "../../services/productService"

export default function Catalogue() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAll()
            .then(setProducts);
    }, []);

    return (
        <section id="catalogPage">
         {products.length > 0 ? ( 
            <>  
                {products.map(x => <CatalogueItem key={x._id} {...x}/>)}
            </>
        ) : <> <p>No Products in Catalog!</p>   </>
    
        } 
        </section>
    )
}