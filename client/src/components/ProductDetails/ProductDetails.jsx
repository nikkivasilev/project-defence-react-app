export default function ProductDetails() {
    return (
        <section id="detailsPage">
        <div class="Productwrapper">
            <div class="albumCover">
                <img src="{{ product.Image.url }}" alt="Product Image"/>
            </div>
            <div class="albumInfo">
                <div class="albumText">
                    <h1 class="albumText">Name: Qki obuwki </h1>
                    <h1 class="albumText">Price:  122 BNG</h1>
                    {/* {% if object.description %} */}
                        <p class="albumText">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ipsum aliquid totam dignissimos! Nemo, porro pariatur saepe facere iste aliquam fugiat 
                        enim reiciendis dolorum quia delectus, vitae quo temporibus labore excepturi?</p>
                    {/* {% endif %} */}
                </div>
                <div class="actionBtn">
                    {/* {% if user_liked_product %}
                        <a href="{% url 'like product' pk=product.pk %}" class="edit">Dislike</a>
                    {% else %}
                        <a href="{% url 'like product' pk=product.pk %}" class="actionBtnDelete">Like</a>
                    {% endif %} */}
                    {/* <a href="{% url 'add product to basket' pk=product.pk %}" class="remove">Add to cart</a> */}
                    <a href="{% url 'product comments' pk=product.pk %}">Comments</a>

                </div>
            </div>
        </div>
    </section>
    )
}