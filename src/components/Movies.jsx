import React from "react";

function Movies({ title, image, description, industry }) {
  return (
    <div className="card mb-4 bg-color text-white rounded" id={industry}>
      <img src={image} className="card-img-top" alt={title} loading="lazy" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Movies;
