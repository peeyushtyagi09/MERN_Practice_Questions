// import React, { useState, useEffect } from 'react';
// import ProductCard from './Products';

// const PAGE_SIZE = 10;

// const Mainpage = () => {
//     const [products, setProducts] = useState([]);
//     // LOGIC MISTAKE 1: currentPage should be a number, not an array. Let's initialize to 0.
//     const [currentPage, setCurrentPage] = useState(0);

//     const fetchData = async () => {
//         const data = await fetch("https://dummyjson.com/products?limit=500");
//         const json = await data.json();
//         setProducts(json.products);
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const totalProducts = products.length;
//     const noofPages = Math.ceil(totalProducts / PAGE_SIZE);

//     // LOGIC MISTAKE 2: If currentPage is an array (the initial code), 
//     // multiplying it with PAGE_SIZE would result in NaN for start and end.
//     // After fixing initialization to 0, below is correct:
//     const start = currentPage * PAGE_SIZE;
//     const end = start + PAGE_SIZE;

//     // LOGIC MISTAKE 3: handlePageChange needs to be passed the page number and set it properly.
//     const handlePageChange = (n) => {
//         setCurrentPage(n);
//     };

//     return !products.length ? (
//         <h1 className="text-2xl text-center my-8 font-bold text-red-600">No products found</h1>
//     ) : (
//         <div className="App min-h-screen bg-gray-50 flex flex-col items-center py-8">
//             <h2 className="text-3xl font-bold mb-8 text-gray-800">All Products</h2>
//             <div>
//                 {/* LOGIC MISTAKE 4: 
//                     Missing return in map callback, so nothing renders!
//                     Also, onClick handler must call handlePageChange with n. 
//                 */}
//                 {[...Array(noofPages).keys()].map((n) => (
//                     <span
//                         key={n}
//                         onClick={() => handlePageChange(n)}
//                         style={{
//                             margin: '0 6px',
//                             cursor: 'pointer',
//                             fontWeight: currentPage === n ? 'bold' : 'normal',
//                             color: currentPage === n ? 'blue' : 'black',
//                         }}
//                     >
//                         {n + 1}
//                     </span>
//                 ))}
//             </div>
//             <div className="flex flex-wrap justify-center gap-6">
//                 {
//                     products.slice(start, end).map((p) => (
//                         <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default Mainpage;