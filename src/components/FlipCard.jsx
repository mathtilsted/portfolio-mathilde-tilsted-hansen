import { useState } from "react";

export default function FlipCard({ image, title, text }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-side front">
        <img src={image} alt={title} />
      </div>

      <div className="flip-side back">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
