// TechnologyBadge.js
import React from "react";

const TechnologyBadge = ({ technology }) => {
  return (
    <span className="inline-block bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
      {technology}
    </span>
  );
};

export default TechnologyBadge;
