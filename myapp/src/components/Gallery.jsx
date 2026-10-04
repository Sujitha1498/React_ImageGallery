import { useState } from "react";
import ImageCard from "./ImageCard";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const images = [
    {
      id: 1,
      title: "Mountain Dreams",
      category: "Nature",
      description: "Peaceful mountains surrounded by clouds.",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 2,
      title: "Ocean Blue",
      category: "Travel",
      description: "Beautiful blue ocean and endless horizons.",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 3,
      title: "Forest Walk",
      category: "Nature",
      description: "A quiet path surrounded by green trees.",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 4,
      title: "City Lights",
      category: "City",
      description: "The city comes alive under the night sky.",
      url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 5,
      title: "Golden Sunset",
      category: "Travel",
      description: "A beautiful sunset over the landscape.",
      url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 6,
      title: "Desert Road",
      category: "Travel",
      description: "A long road crossing the peaceful desert.",
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 7,
      title: "Modern Architecture",
      category: "Architecture",
      description: "Creative architecture with modern design.",
      url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 8,
      title: "Green Valley",
      category: "Nature",
      description: "A beautiful valley surrounded by mountains.",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 9,
      title: "Night City",
      category: "City",
      description: "Bright buildings lighting up the city.",
      url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80"
    }
  ];

  const categories = ["All", "Nature", "Travel", "City", "Architecture"];

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((image) => image.category === activeCategory);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-intro">
        <p className="small-title">VISUAL STORIES</p>
        <h1>Explore the World</h1>
        <p className="intro-text">
          A collection of beautiful moments, places and experiences
          captured through photography.
        </p>
      </div>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;