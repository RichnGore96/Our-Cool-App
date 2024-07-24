import React, { useState } from 'react';

function PhotoUpload({ onPhotoUpload }) {
    const [photos, setPhotos] = useState([]);

    const handlePhotoChange = (e) => {
        const files = Array.from(e.target.files);
        setPhotos(files);
        onPhotoUpload(files);
    };

    return (
        <div className="photo-upload">
            <h2>Upload Photos</h2>
            <input type="file" multiple onChange={handlePhotoChange} />
        </div>
    );
}

export default PhotoUpload;
