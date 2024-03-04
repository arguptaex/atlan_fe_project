export default function ImagePicker({ label, name }) {

    return (
        <div className="img-picker">
            <label htmlFor={name}>{label}</label>
            <div className="img-input-container">
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
