import food from './img/restaurant.jpg'
import './Hero.css';

function Hero(){
    return(
    <>
        <div id="herosection">
            <div class="grid-item">
                <h1>Little Lemon</h1>
                <h2>Chigaco</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div id="img" class="grid-item">
                <img src={food} alt="hero"></img>
            </div>
       </div>
    </>
    )
}

export default Hero;