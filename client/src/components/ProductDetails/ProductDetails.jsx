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
        <div class="commentswrapper">
            <form class="actionBtn" method="post" action="{% url 'create comment product' pk=product.pk %}">
                <label class="commentText">
                    {/* {{ comment_form.text }} */}
                    <button class="register" type="submit">Post</button>
                </label>
            </form>
            {/* {% if product_comments %} */}
                {/* {% for comment in product_comments %} */}
                    <div class="comment">Nikola: super qki obuwki
                        {/* - {{ comment.publication_date_and_time }} */}
                        {/* {% if comment.user == request.user %} */}
                            <div class="actionBtnDeleteComment">
                            <a href="{% url 'delete comment product' pk=comment.pk %}">DELETE</a>
                        </div>
                        {/* {% endif %} */}
                    </div>
                {/* {% endfor %} */}
            {/* {% else %} */}
                <h1 class="index-header">No one has commented yet. Be the first one!</h1>
            {/* {% endif %} */}
        </div>
    </section>  
    )
}