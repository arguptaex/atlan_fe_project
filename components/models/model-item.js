import Image from "next/image";
import modelImg from "@/assets/model_one.jpg";
import Link from 'next/link';





export default function Model({ title, slug, image, creator, likes, views }) {
    return (
        <div className="model-card">
            <Image
                className="model-card-img"
                // src={modelImg}
                alt="model image uploaded by developer"
                fill={true}


            />
            <h1 className="card-head-text">{title}</h1>
            <p>Created by : {creator}</p>

            <div className="model-stats">
                <span className="stats-icons">
                    <ion-icon name="heart-outline"></ion-icon>Likes
                </span>
                <span className="stats-icons">
                    <ion-icon name="eye-outline"></ion-icon>Views
                </span>
            </div>
            <Link href={`/models/${slug}`} className="model-try-btn">
                <button>Try Now</button>
            </Link>
        </div>
    )

};
