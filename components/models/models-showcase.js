
import Model from "./model-item";


export default function ModelsShowcase({ models }) {
    return (
        <section className="models-showcase">
            <div className="container">
                <h1 className="showcase-headline">
                    Discover and Dive into Cutting-Edge Models
                </h1>
                <div className="available-models">

                    {models.map((model) => (

                        <Model key={model.id} {...model} />

                    ))}
                </div>
            </div>
        </section>
    )

};
