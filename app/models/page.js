import { dummyModels } from "@/models-data";
import Model from "@/components/models/model-item";
import './models.css'

export default function TrendingModels(params) {
    const models = dummyModels;

    return (
        <main className="trending-main">
            <h1 className='head-txt'>
                Trending Models
            </h1>

            <section className="like-based">
                <div className="container">
                    <h1 className="showcase-headline">
                        Most Liked Models
                    </h1>
                    <div className="available-models">

                        {models
                            .sort((a, b) => b.likes - a.likes).slice(0, 3)
                            .map((model) => (
                                <Model key={model.id} {...model} />
                            ))}
                    </div>


                </div>
            </section>
            <section className="view-based">
                <div className="container">
                    <h1 className="showcase-headline">
                        Most Viewed Models
                    </h1>
                    <div className="available-models">

                        {models
                            .sort((a, b) => b.views - a.views).slice(0, 3)
                            .map((model) => (
                                <Model key={model.id} {...model} />
                            ))}
                    </div>


                </div>
            </section>
        </main>
    )


};
