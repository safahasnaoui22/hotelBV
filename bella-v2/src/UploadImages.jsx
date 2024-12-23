import React, { useState } from "react";
import axios from "axios";

const UploadImages = () => {
  const [images, setImages] = useState([]);

  const onDrop = async (acceptedFiles) => {
    const formData = new FormData();
    acceptedFiles.forEach(file => {
      formData.append('images', file);
    });

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setImages([...images, ...response.data.files]);
    } catch (error) {
      console.error('Error uploading images: ', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => onDrop(e.target.files)} multiple />
      {images.map(image => (
        <img key={image} src={image} alt="Uploaded" style={{ width: '100px', height: '100px', margin: '5px' }} />
      ))}
    </div>
  );
};

export default UploadImages;
