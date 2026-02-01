// import React, {useState, useEffect } from 'react';
// import ProductCard from '../../pagination/Products';

// const MainPage = () => {

//         const [Product, setProduct] = useState([]);

//     const fetchData = async () => {
//         try{
//             const res = await fetch("https://dummyjson.com/products");
//             const data = await res.json();
//             setProduct(data.products);
//         }catch (error) {
//             console.log("Oo OO baby error is comming i think some problem in fetching data :", {error});
//         }
//     } 

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return(
//         <div>
//             <h1>Question 1</h1>
//             {Product.map((p) => (
//                 <ProductCard key={p.id} title={p.title} image={p.thumbnail}/>
//             ))}
//         </div>
//     )
// }

// export default MainPage;

import React, {useState, useEffect} from 'react';
import ProductCard from '../../pagination/Products';

const MainPage = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                setError(null);
                const res = await fetch("https://dummyjson.com/products?limit=500", {
                    signal: controller.signal,
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const data = await res.json();
                setProducts(data.products);
            }catch(err){
                if(err.name !== "AbortError") {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        return () => {
            controller.abort();
        };
    }, []);

    if (loading) return <h2>Loading...</h2>;
    if(error) return <h2>Error: {error}</h2>;
    return(
        <div>
            <h1>Question 1</h1>
                {products.map((p) => (
                    <ProductCard key={p.id} title={p.title} image={p.thumbnail} />
                ))}
        </div>
    )
}

export default MainPage;