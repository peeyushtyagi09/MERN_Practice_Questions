// import React, { useState, useEffect} from 'react';
// import RecipesCard from "./RecipesCard";
// const MainPage = () => {
//     const [input, setInput] = useState("");
//     const [recipes, setRecipes] = useState([]);

//     const fetchData = async () => {
//         try {
//             const res = await fetch(
//                 `https://dummyjson.com/recipes/search?q=${encodeURIComponent(input)}`
//               );              
//         const data = await res.json();
//         setRecipes(data?.recipes);
//         }catch(error){
//             console.log("in think some problem in data fetching", {error})
//         }
//     };

//         useEffect(() => {

//             fetchData();

//         }, [input])
    
//     return (
//         <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">

//             <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 className="w-80 px-4 py-2 mb-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//                 placeholder="Search recipes..."
//             />

//             <h1 className="text-3xl font-bold mb-8 text-gray-800">Recipes</h1>
//             <div className="flex flex-wrap justify-center gap-6">
//                 {
//                     recipes.map((r) => (
//                         <RecipesCard key={r.id} name={r.name} image={r.image} />
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }
// export default MainPage;

// optimal solution 
