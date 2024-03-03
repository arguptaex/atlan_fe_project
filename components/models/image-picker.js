export default function ImagePicker({ label, name }) {

    return (
        <div class="img-picker">
            <label htmlFor={name}>{label}</label>
            <div class="img-input-container">
                <input
                    type="file"
                    id={name}
                    name={name}
                    accept="image/png, image/jpeg"
                />
            </div>
        </div>
    )

};
