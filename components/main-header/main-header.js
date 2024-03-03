import Image from "next/image";
import logo from "@/assets/Logo_one.png";


export default function MainHeader(params) {
    return (
        <header id="header" className="header">
            <div className="container">
                <div className="logo">
                    <Image className="logo-img" src={logo} alt="logo" priority />
                </div>

                <nav className="main-nav-list">
                    <li><a className="main-nav-link" href="/index">About</a></li>
                    <li><a className="main-nav-link" href="">NPTEL</a></li>
                    <li><a className="main-nav-link" href="">Code Snippets</a></li>
                    <li><a className="main-nav-link" href="">Contact Us</a></li>
                    <a className="nav-signup-btn" href="">Sign Up / Log In</a>
                </nav>
                <a className="signup-btn" href=""><button>Sign Up / Log In</button></a>

                <button className="menu-btn" >
                    <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
                    <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
                </button>
            </div>
        </header>

    )

};
