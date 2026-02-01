import React, { useState, useEffect } from 'react';
import RecipesCard from '../../AutoComplete/RecipesCard';

const MainPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fetchNow, setFetchNow] = useState(false);

    useEffect(() => {
        if(!fetchNow) return;

        const fetchRecipes = async () => {
            try {
                setLoading(true);
                const res = await fetch("https://dummyjson.com/recipes");
                const json = await res.json();
                setData(json.recipes);
            }catch (err) {
                console.err("fetch failed: ", err);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [fetchNow]);

    return (
        <div>
            <h1>Recipes</h1>
            <button onClick={() => setFetchNow(true)}>
                Click me to fetch data
            </button>
        {loading && <p>Laoding...</p>}

        {
            data.map((r) => (
                <RecipesCard key={r.id} name={r.name} image={r.image} />
            ))
        }
        </div>
    )
}
export default MainPage;