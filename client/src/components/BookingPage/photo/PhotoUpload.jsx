import React, { useState } from 'react';

function PhotoUpload() {
    const [photos, setPhotos] = useState([]);

    const handleFileChange = (event) => {
        setPhotos([...event.target.files]);
    };

    return (
        <section className="photo-upload">
            <h2>Attach Photos</h2>
            <input 
                type="file" 
                accept="image/*" 
                multiple 
                onChange={handleFileChange}
            />
            <div>
                {photos.length > 0 && (
                    <ul>
                        {Array.from(photos).map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}

export default PhotoUpload;
