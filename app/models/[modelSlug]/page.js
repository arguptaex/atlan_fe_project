'use client'

import { useState } from "react";
import "./modelSlug.css";
import { dummyModels } from "@/models-data";
import calculateResult from "@/app/api/modelOuput";



export default function ModelPage({ params }) {
    // const titleToFind = params.modelSlug;
    // console.log(params.modelSlug)
    const foundModel = dummyModels.find(model => model.slug === params.modelSlug);


    const [query, setQuery] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {

        const answer = calculateResult(query);
        setResult(answer)
        e.preventDefault();
        // const response = await fetch('../api/modelOutput.js', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ query }),
        // });
        // const data = await response.json();
        // setResult(data.result);
        // console.log(data.result)


    };





    return (
        <main>

            <section className="model-page">
                <div className="container">
                    <div className="model-info">
                        <div className="model-info-head">{foundModel.title}</div>
                        <div className="model-info-brief">
                            {foundModel.instructions}
                        </div>
                        <div className="code-container">
                            <pre className="language-python">
                                <code className="language-python">
                                    def function():
                                    for i in range(6):
                                    print(i)
                                    for i in range(5):
                                    return True
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className="img-holder"></div>
                </div>
            </section>



            <section className="model-social-stats">
                <div className="container">
                    <a className="social-stat-icons">
                        <ion-icon name="heart-outline"></ion-icon>
                        Likes {foundModel.likes}
                    </a>
                    <a className="social-stat-icons">
                        <ion-icon name="eye-outline"></ion-icon>
                        Views {foundModel.views}
                    </a>
                    <a className="social-stat-icons">
                        <ion-icon name="share-social-outline"></ion-icon>
                        Shares
                    </a>
                    <a href="" className="github-anchor">
                        <ion-icon name="share-social-outline"></ion-icon>
                        GitHub
                    </a>
                </div>
            </section>
            <section className="model-demo">
                <div className="container">
                    <h1>Lets Try out this Model</h1>

                    <form onSubmit={handleSubmit} action="" className="demo-form">

                        {foundModel.input_type !== "image" && (
                            <div className="query-input">

                                <label htmlFor="query">ENTER YOUR QUERY</label>
                                <input
                                    type="text"
                                    id="query"
                                    name="query"
                                    onChange={(e) => setQuery(e.target.value)}
                                    required
                                />
                            </div>

                        )}

                        {foundModel.input_type === "image" && (
                            <div className="query-input">
                                <label htmlFor="trial-image">Upload your Image</label>
                                <div className="img-input-container">
                                    <input
                                        type="file"
                                        id="trial-image"
                                        name="trial-image"
                                        accept="image/png, image/jpeg"
                                    />
                                </div>
                            </div>
                        )}

                        <button type="submit">
                            <ion-icon name="play-outline"></ion-icon>RUN
                        </button>
                    </form>
                    <div className="demo-result">
                        <h2>Result</h2>
                        <p className="result">
                            {result}
                        </p>
                    </div>
                </div>
            </section>



        </main >
    )

};
