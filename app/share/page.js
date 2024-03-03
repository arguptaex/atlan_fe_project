import ImagePicker from "@/components/models/image-picker";
export default function ShareModelPage(params) {
    return (
        <main>
            <section class="share-model-form">
                <h1>Share you Model with us</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                    dignissimos.
                </p>
                <div class="form-container">
                    <form action="" class="model-form">
                        <div className="person-info">
                            <p>
                                <label htmlFor="name">Your name</label>
                                <input type="text" id="name" name="name" required />
                            </p>
                            <p>
                                <label htmlFor="email">Your email</label>
                                <input type="email" id="email" name="email" required />
                            </p>
                        </div>
                        <p>
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" name="title" required />
                        </p>
                        <p>
                            <label htmlFor="summary">Short Summary</label>
                            <input type="text" id="summary" name="summary" required />
                        </p>
                        <p>
                            <label htmlFor="instructions">Instructions</label>
                            <textarea
                                id="instructions"
                                name="instructions"
                                rows="10"
                                required
                            ></textarea>
                        </p>

                        <ImagePicker label="Your image" name="image" />

                        <p className="{classes.actions}">
                            <button type="submit">
                                Share Model
                            </button>
                        </p>
                    </form>
                </div>
            </section>
        </main>
    )

};
