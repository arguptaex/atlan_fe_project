import Image from "next/image";
import modelImg from "@/assets/model_one.jpg";
import Link from 'next/link';
import { BiLike } from "react-icons/bi";


import imagesrc from "../../assets/model_one.jpg"




export default function Model({ title, slug, image, creator, likes, views }) {
    const imgSrc = "/assets/" + image

    return (
        <div className="model-card">
            <Image
                className="model-card-img"
                src={"/" + image}
                alt="model image uploaded by developer"
                width={200}
                height={200}

            />

            <div className="model-card-data">
                <h1 className="card-head-text">{title}</h1>
                <p>Created by : {creator}</p>

                <div className="model-stats">
                    <span className="stats-icons first">
                        <BiLike />Likes {likes}
                    </span>
                    <span className="stats-icons">
                        <ion-icon name="eye-outline"></ion-icon>Views {views}
                    </span>
                </div>
                <Link href={`/models/${slug}`} className="model-try-btn">
                    <button>Try Now</button>
                </Link>

            </div>
        </div>
    )

};
