export default function UserDetails() {
    return (
        <div class="wrapper">
        {/* {% if user.profile_picture %} */}
            {/* <div class="profilePage">
                <img src="{{ user.profile_picture.url }}"
                     alt="Profile Image"/>
            </div> */}
        {/* {% else %} */}
            <div class="profilePage">
                <img src="/images/blank-profile-picture-973460_1280.jpeg"
                     alt="Profile Image"/>
            </div>
        {/* {% endif %} */}
        <div class="profileText">
            <h1>Username: goshoo</h1>
            <h1>Email: gosho@gosho.com</h1>
            {/* {% if fullname %} */}
                <h1>Name: Gosho Goshov</h1>
        </div>
        <div class="actionBtn">
            <a href="{% url 'edit user' pk=request.user.pk %}" class="remove">Edit</a>
            <a href="{% url 'liked products'%}" class="remove">My products</a>
        </div>
        <div class="actionBtnDelete">
            <a href="{% url 'delete user' pk=request.user.pk %}">Delete</a>
        </div>
    </div>
    )
}