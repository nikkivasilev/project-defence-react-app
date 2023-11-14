import CatalogueItem from "./CatalogueItem"

export default function Catalogue() {
    return (
        <section id="catalogPage">
        {/* {% if object_list %} */}
            {/* {% for object in object_list %} */}
                <CatalogueItem />

            {/* {% endfor %} */}
        {/* {% else %} */}
            <p>No Products in Catalog!</p>
        {/* {% endif %} */}
    </section>
    )
}