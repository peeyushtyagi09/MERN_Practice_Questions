import React from 'react';

const ProductCard = ({ image, title }) => {
    return (
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 m-2 w-64">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-40 object-cover rounded-t-md mb-3"
            />
            <span className="text-lg font-semibold text-gray-800">{title}</span>
        </div>
    );
}

export default ProductCard;