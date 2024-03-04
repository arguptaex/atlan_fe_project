import Link from 'next/link';



export default function HeroSection(params) {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-text-section">
                    <h1>Join the AI Revolution: Share Your Models with the World!?</h1>
                    <p>
                        Whether youre a coding novice or a seasoned pro, our platform is
                        designed to fuel your passion and drive your projects to new
                        heights.
                    </p>
                    <Link href="/share">
                        <button className="explore-btn">
                            UPLOAD MODEL
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )

};
