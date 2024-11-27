import React from "react";
import "../css/gallery.css"; 
const GalleryItem = ({ image, altText }) => (
  <div className="gallery-item">
    <img src={image} alt={altText} className="gallery-image" />
  </div>
);

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1712623171142-cc7e03c2fa4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1712623171142-cc7e03c2fa4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1712623171142-cc7e03c2fa4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1731857890156-c8bfbfc1fdf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1731857890156-c8bfbfc1fdf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1712623171142-cc7e03c2fa4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    "https://images.unsplash.com/photo-1731857890156-c8bfbfc1fdf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1731857890156-c8bfbfc1fdf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1731857890156-c8bfbfc1fdf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1731857890156-c8bfbfc1fdf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1731857890156-c8bfbfc1fdf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1731857890156-c8bfbfc1fdf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1731857890156-c8bfbfc1fdf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="imgo">
      <h1>Explore</h1>
      <div className="gallery-container">
        {images.map((image, index) => (
          <GalleryItem key={index} image={image} altText={`Gallery Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
