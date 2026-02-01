/* 
    so in that over main goal is doing pagination
    steps -
    1- we need a dummy data
    2 - we have to fetch that data
    3 - we need eo render that data
    4 - next thing is that we have implement pagination into it
    5 - next thing is that we have to optimized the code 
*/


import React, { useState, useEffect } from 'react'
import ProductCard from './Products';

const Mainpage = () => {
    const [Product, setProduct] = useState([]);

    const fetchData = async () => {
        try {
        const res = await fetch("https://dummyjson.com/products?limit=500");
        const data = res.json();
        setProduct(data.products);
        }catch (error) {
            console.log("that error is comming", {error});
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return(
        <div> 
            <h1>Products</h1>
            {Product.map((p) => (
                <ProductCard key={p.id} title={p.title} image={p.thumbnail}/>
            ))}
        </div>
    );
}
export default Mainpage;