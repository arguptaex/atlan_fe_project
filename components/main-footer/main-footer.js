export default function MainFooter(params) {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-logo foot-comp">
                    <h1><span>Avg</span>Engineer</h1>
                    <p>Copyrights &#169; 2024 All rights Reserved</p>
                </div>
                <div className="footer-links foot-comp">
                    <a href="" className="foot-link">About</a>
                    <a href="" className="foot-link">Contact Us</a>
                    <a href="" className="foot-link">Nptel</a>
                    <a href="" className="foot-link">Code Snippets</a>
                </div>
                <div className="foot-social-handles foot-comp">
                    <a href="" className="foot-social-links">
                        <ion-icon name="logo-youtube"></ion-icon>Youtube
                    </a>
                    <a href="" className="foot-social-links">
                        <ion-icon name="logo-instagram"></ion-icon>Instagram
                    </a>
                    <a href="" className="foot-social-links">
                        <ion-icon name="logo-twitter"></ion-icon>Twitter
                    </a>
                </div>
                <div className="footer-update-subs foot-comp">
                    Subscribe for latest Updates :-
                    <input type="text" className="subs-email-input" placeholder="Email" />
                </div>
            </div>
        </footer>
    )
};
