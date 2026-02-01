import React, { useState, useEffect, useRef } from "react";
import Quotes from "./Quotes";

const MainPage = () => {
  const [storage, setStorage] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const timerRef = useRef(null);
  const containerRef = useRef(null);

  // 1) Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/quotes");
        const data = await res.json();
        setStorage(data.quotes);
        setFiltered(data.quotes);
      } catch (error) {
        console.error("Problem in data fetching:", error);
      }
    };

    fetchData();
  }, []);

  // 2) Outside click handler (close suggestions)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 3) Helper to rebuild suggestions
  const rebuildSuggestions = (value) => {
    const lower = value.toLowerCase();

    const result = storage.filter((q) => {
      return (
        q.quote.toLowerCase().includes(lower) ||
        q.author.toLowerCase().includes(lower)
      );
    });

    const sug = result
      .slice(0, 6)
      .map((q) => `${q.quote.slice(0, 50)} — ${q.author}`);

    setSuggestions(value ? sug : []);
  };

  // 4) Debounced search + suggestions
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      const lower = value.toLowerCase();

      const result = storage.filter((q) => {
        return (
          q.quote.toLowerCase().includes(lower) ||
          q.author.toLowerCase().includes(lower)
        );
      });

      setFiltered(result);
      rebuildSuggestions(value);
    }, 400);
  };

  // 5) Click suggestion
  const handleSuggestionClick = (text) => {
    setQuery(text);
    setSuggestions([]);

    const lower = text.toLowerCase();

    const result = storage.filter((q) => {
      return (
        q.quote.toLowerCase().includes(lower) ||
        q.author.toLowerCase().includes(lower)
      );
    });

    setFiltered(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Debounced Quotes Search
      </h1>

      {/* Search Box + Dropdown Wrapper */}
      <div ref={containerRef} className="max-w-xl mx-auto mb-2 relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => {
            if (query.trim()) {
              rebuildSuggestions(query);
            }
          }}
          placeholder="Search by quote or author..."
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-lg mt-2 z-10">
            {suggestions.map((s, idx) => (
              <div
                key={idx}
                onClick={() => handleSuggestionClick(s)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm text-gray-700"
              >
                {s}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Results Cards */}
      <div className="space-y-4 max-w-3xl mx-auto mt-6">
        {filtered.length > 0 ? (
          filtered.map((q) => (
            <Quotes key={q.id} quote={q.quote} author={q.author} />
          ))
        ) : (
          <p className="text-center text-gray-500">No results found</p>
        )}
      </div>
    </div>
  );
};

export default MainPage;
