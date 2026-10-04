function ImageCard({ image }) {
  return (
    <div className="image-card">
      <img src={image.url} alt={image.title} />

      <div className="card-overlay">
        <div className="card-content">
          <span>{image.category}</span>
          <h2>{image.title}</h2>
          <p>{image.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;