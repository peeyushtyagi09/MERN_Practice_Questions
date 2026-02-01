import React from "react";

const Quotes = ({ quote, author }) => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
      <h1 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Quote of the Day
      </h1>

      <p className="text-lg text-gray-700 italic leading-relaxed text-center">
        “{quote}”
      </p>

      <div className="mt-4 text-right">
        <span className="text-sm text-gray-500">— {author}</span>
      </div>
    </div>
  );
};

export default Quotes;
