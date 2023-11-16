import CatalogueItem from "../CatalogueItem/CatalogueItem"

export default function Catalogue(products) {
    return (
        <section id="catalogPage">
         {products.products.length > 0 ? ( 
            <>  
                {products.products.map(x => <CatalogueItem key={x._id} {...x}/>)}
            </>
        ) : <> <p>No Products in Catalog!</p>   </>
    
        } 
        </section>
    )
}