import ImagePicker from "@/components/models/image-picker";
import fs from 'fs';
import "./shareForm.css"
import path from 'path';
import axios from 'axios';

import { dummyModels } from "@/models-data";
export default function ShareModelPage(params) {

    async function shareMeal(formData) {
        "use server";
        // event.preventDefault();


        const meal = {
            title: formData.get('title'),
            summary: formData.get('summary'),
            instructions: formData.get('instructions'),
            image: formData.get('image').name,
            creator: formData.get('name'),
            creator_email: formData.get('email'),
            likes: 0,
            views: 0

        };
        dummyModels.push(meal);



        const filePath = './models-data.js';

        fs.writeFileSync(
            filePath,
            `export const dummyModels = ${JSON.stringify(dummyModels, null, 3)};\n`
        );


    }
    return (
        <main>
            <section className="share-model-form">

                <div className="container">
                    <h1>Share you Model with us</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                        dignissimos.
                    </p>
                    <div className="form-container">
                        <form action={shareMeal} className="model-form">
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
                                    rows="5"
                                    required
                                ></textarea>
                            </p>

                            <ImagePicker label="Your image" name="image" />

                            <p className="{classes.actions}">
                                <button className="share-model-btn" type="submit">
                                    Share Model
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )

};
