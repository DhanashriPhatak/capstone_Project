import './Footer.css';

function Footer(){
    return(
        <footer class="container">
            <div>
                <img src="" alt=""/>
            </div>
            <div id="navigation">
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><a href="App.js">Home</a></li>
                    <li><a href="About.js">About</a></li>
                    <li><a href="Menu.js">Menu</a></li>
                    <li><a href="Reservations.js">Reservations</a></li>
                    <li><a href="Order_online.js">Order Online</a></li>
                    <li><a href="Login.js">Login</a></li>
                </ul>
            </div>
            <div id="Contact">
                <h4>Contact Us</h4>
                <p>Address:</p>
                <p>Phone number:</p>
                <p>Email:</p>
            </div>
            <div ud="social_media">
                <h4>Social Media Links</h4>
                <p>Instagram</p>
                <p>Facebook</p>
            </div>
        </footer>
    )
}

export default Footer;