import React, { useState } from "react";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const CLOUD_NAME = "db9q0ylis"; // Your Cloudinary cloud name
  const UPLOAD_PRESET = "ml_default"; // Your upload preset

  const handleImageChange = (event) => {
    setImage(event.target.files[0]); // Store selected file
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", UPLOAD_PRESET); // Cloudinary preset

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, // ✅ Fixed API URL
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setImageUrl(data.secure_url); // ✅ Get and set the uploaded image URL
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>

      {imageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <img src={imageUrl} alt="Uploaded" width="200px" />
          <p>Image URL: {imageUrl}</p>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
