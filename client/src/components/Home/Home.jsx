import { Link } from "react-router-dom"


export default function Home() {
    return (
        <>
        <h1 class="index-header">WELCOME TO MAGAZIN SLUNCE </h1>
        <h1 class="index-header"> ONLINE STORE! </h1>
        <div class="index-div">
            <img class="index-picture" src='images/img.png' alt="picture of store"/>
            <div>
                <p class="index-text">
                    Welcome to magazin slunce. This is a quality children's store with favorite characters, slippers, shoes,
                    pajamas, swimwear, flip-flops, backpacks, hats, scooters and lots of toys. The goods are from Bulgarian
                    and imported children's clothes, pajamas, Venus underwear, Mariela and others. Breeze representative.
                    Year-round swimwear, hats, t-shirts with the favorite characters paw patrol, pepa pig, spiderman,
                    frozen, avengers, etc. Children's shoes made of natural and eco leather. Polish sandals, slippers,
                    sneakers befado, raweks and viggami. Original Disney sneakers and flip-flops. Women's and children's
                    bags and of course many toys. Deliveries by courier throughout the country.
                </p>
                <p class="index-btn">
                    <Link class="index-btn" to=''> Start Shopping!</Link>
                </p>
            </div>
        </div>
        
        </>
    )
}