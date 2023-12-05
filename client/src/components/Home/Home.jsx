import { Link } from "react-router-dom"


export default function Home() {
    return (
        <>
        <h1 className="index-header">WELCOME TO MAGAZIN SLUNCE </h1>
        <h1 className="index-header"> ONLINE STORE! </h1>
        <div className="index-div">
            <img className="index-picture" src='images/img.png' alt="picture of store"/>
            <div>
                <p className="index-text">
                    Welcome to magazin slunce. This is a quality children's online store where people can sell and buy clothes with favorite characters, slippers, shoes,
                    pajamas, swimwear, flip-flops, backpacks, hats, scooters and toys. The idea behind the store is that parents 
                    whose children have grown up can sell their old stuff to others that need them.
                    Deliveries by courier throughout the country.
                </p>
                <p className="index-btn">
                    <Link className="index-btn" to='/catalogue'> Start Shopping!</Link>
                </p>
            </div>
        </div>
        
        </>
    )
}