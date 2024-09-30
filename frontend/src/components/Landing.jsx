const Landing = () => {
    return (
        <div className="beauty-journey-container">
            <div className="text-area">
                <h1 className="font-effect-outline">
                    Embrace your <br /> beauty journey!<br />
                    Discover a world of <br /> Pampering and <br />
                    self-care at your <br />fingertips.
                </h1>
                <p className="font-effect-emboss">Your confidence matters</p>
            </div>
            <div className="image-area">
                <img src="/src/images/clips1.jpg" alt="Hairdresser at work" />
            </div>

            {/* Why Us Section */}
            <div className="why-us-container">
                <div className="why-us-image">
                    <img src="/src/images/clips2.jpg" alt="Haircut in progress" />
                </div>
                <div className="why-us-text">
                    <h2>Why us</h2>
                    <p>
                        Clip&Styles offer a seamless, user-friendly experience that prioritizes convenience and choice.
                        With our intuitive interface, customers can easily browse through a diverse selection of reputable
                        beauty shops, read reviews, and book appointments effortlessly. Our platform also provides real-time 
                        availability updates, ensuring customers can secure their desired services at their preferred times. 
                        Additionally, we prioritize customer satisfaction, offering responsive support and a transparent booking 
                        process. By choosing us, customers can enjoy a hassle-free way to indulge in self-care and beauty treatments,
                        all in one convenient place.
                    </p>
                </div>
            </div>

            {/* Why We Should Be Your First Stop Section */}
            <div className="first-stop-container">
                <div className="first-stop-text">
                    <h2>Why we should be your first stop</h2>
                    <ul>
                        <li>User-Friendly</li>
                        <li>Comprehensive Service listing</li>
                        <li>Convenient Booking Process</li>
                        <li>Exclusive Deals and Discounts</li>
                        <li>Excellent Customer Service</li>
                    </ul>
                </div>
                <div className="first-stop-images">
                    <img src="/src/images/clips3.jpg" alt="Various services" />
                </div>
            </div>

            {/* Perfect for Small Businesses Section */}
            <div className="small-business-container">
                <h2>Why we are perfect for small businesses</h2>
                <div className="small-business-image">
                    <img src="/src/images/clips4.jpg" alt="Beauty shop setup" />
                </div>
                <p className="small-business-text">
                    Our platform offers an ideal solution for small beauty shops by providing a user-friendly interface that simplifies
                    the booking process, streamlines operations, and maximizes visibility. With our customizable scheduling system,
                    small businesses can efficiently manage appointments and increase customer satisfaction.
                </p>
            </div>

            {/* Footer Section */}
            <footer className="footer-container">
                <div className="footer-motto">
                    <div className="footer-item">BE BOLD</div>
                    <div className="footer-item">BE BRAVE</div>
                    <div className="footer-item">BE CONFIDENT</div>
                </div>
                <div className="footer-content">
                    <div className="footer-logo">
                        <h3>Logo</h3>
                        <p>Kintsugi Company</p>
                    </div>
                    <div className="footer-legal">
                        <h3>Legal</h3>
                        <p>Terms of use</p>
                        <p>Privacy policy</p>
                    </div>
                    <div className="footer-help">
                        <h3>Need Help</h3>
                        <p>FAQ</p>
                        <p>How to book</p>
                    </div>
                    <div className="footer-social">
                        <h3>Follow us on</h3>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-tiktok"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>    
    );
};

export default Landing;
