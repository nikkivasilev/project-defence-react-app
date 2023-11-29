export default function UserDetails() {
    return (
        <div className="wrapper">
        {/* {% if user.profile_picture %} */}
            {/* <div className="profilePage">
                <img src="{{ user.profile_picture.url }}"
                     alt="Profile Image"/>
            </div> */}
        {/* {% else %} */}
            <div className="profilePage">
                <img src="/images/blank-profile-picture-973460_1280.jpeg"
                     alt="Profile Image"/>
            </div>
        {/* {% endif %} */}
        <div className="profileText">
            <h1>Username: goshoo</h1>
            <h1>Email: gosho@gosho.com</h1>
        </div>
        <div className="actionBtn">
            <a href="{% url 'edit user' pk=request.user.pk %}" className="remove">Edit</a>
            <a href="{% url 'liked products'%}" className="remove">My products</a>
        </div>
        <div className="actionBtnDelete">
            <a href="{% url 'delete user' pk=request.user.pk %}">Delete</a>
        </div>
    </div>
    )
}