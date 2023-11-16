import { Link } from "react-router-dom";


export default function ProductDetails(props) {
    console.log(props);
    return (
        <section id="detailsPage">
        <div className="Productwrapper">
            <div className="albumCover">
                <img src="" alt="Product Image"/>
            </div>
            <div className="albumInfo">
                <div className="albumText">
                    <h1 className="albumText">Name: Qki obuwki </h1>
                    <h1 className="albumText">Price:  122 BNG</h1>
                    {/* {% if object.description %} */}
                        <p className="albumText">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ipsum aliquid totam dignissimos! Nemo, porro pariatur saepe facere iste aliquam fugiat 
                        enim reiciendis dolorum quia delectus, vitae quo temporibus labore excepturi?</p>
                    {/* {% endif %} */}
                </div>
                <div className="actionBtn">
                    {/* {% if user_liked_product %}
                        <Link href="{% url 'like product' pk=product.pk %}" className="edit">Dislike</a>
                    {% else %}
                        <Link href="{% url 'like product' pk=product.pk %}" className="actionBtnDelete">Like</a>
                    {% endif %} */}
                    {/* <Link href="{% url 'add product to basket' pk=product.pk %}" className="remove">Add to cart</a> */}
                    <Link href="">Comments</Link>

                </div>
            </div>

        </div>
        <div className="commentswrapper">
            <form className="actionBtn" method="post" action="">
                <label className="commentText">
                    {/* {{ comment_form.text }} */}
                    <button className="register" type="submit">Post</button>
                </label>
            </form>
            {/* {% if product_comments %} */}
                {/* {% for comment in product_comments %} */}
                    <div className="comment">Nikola: super qki obuwki
                        {/* - {{ comment.publication_date_and_time }} */}
                        {/* {% if comment.user == request.user %} */}
                            <div className="actionBtnDeleteComment">
                            <Link href="">DELETE</Link>
                        </div>
                        {/* {% endif %} */}
                    </div>
                {/* {% endfor %} */}
            {/* {% else %} */}
                <h1 className="index-header">No one has commented yet. Be the first one!</h1>
            {/* {% endif %} */}
        </div>
    </section>  
    )
}