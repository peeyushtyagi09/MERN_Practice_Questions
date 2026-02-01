import React from 'react';

const RecipesCard = ({ name, image }) => {
    return (
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 m-2 w-64 hover:shadow-lg transition-shadow duration-300">
            <img
                src={image}
                alt={name}
                className="w-full h-40 object-cover rounded-t-md mb-3"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-1">{name}</h2>
        </div>
    );
};

export default RecipesCard;