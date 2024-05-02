import React from "react";

export default function About() {
  return (
    <div id="about-section">
      <div className="text-foreground">
        <div className="my-4">
          <p>
            Experienced Software Engineer specializing in{" "}
            <span className="text-white font-semibold hover:text-secondary cursor-pointer">
              Django
            </span>{" "}
            Back-end development. Skilled in crafting efficient web applications
            through continuous learning and{" "}
            <span className="text-white font-semibold hover:text-secondary cursor-pointer">
              {" "}
              problem-solving
            </span>
            . Committed to staying ahead in technology trends, leveraging
            technical expertise to contribute innovatively to software
            development.
          </p>
        </div>
      </div>
    </div>
  );
}
