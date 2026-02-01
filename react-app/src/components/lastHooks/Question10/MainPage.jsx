import React, { useState } from 'react';

const MainPage = () => {
    const [text, setText] = useState('');
    const [allData, setAllData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');
    const [history, setHistory] = useState([]);

    const handleChanges = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        saveToHistory();
        setAllData([...allData, text]);
        setText('');
    };
    const handleRemove = (index) => {
        saveToHistory();
        const updatedData = allData.filter((_, i) => i !== index);
        setAllData(updatedData);
    };
    const handleEdit = (index) => {
        setEditIndex(index);
        setEditValue(allData[index]);
    };

    const handleSave = () => {
        saveToHistory();
        const updateData = [...allData];
        updateData[editIndex] = editValue;
        setAllData(updateData);
        setEditIndex(null);
        setEditValue('');
    };
    const saveToHistory = () => {
        setHistory((prev) => [...prev, allData]);
    };

    const handleUndo = () => {
        if (history.length === 0) return;
        const lastState = history[history.length - 1];
        setHistory((prev) => prev.slice(0, -1));
        setAllData(lastState);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-tr from-blue-100 via-white to-indigo-200 py-8 px-3">
            <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-2xl transition-all duration-300">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 mb-6">
                    <input
                        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                        type="text"
                        value={text}
                        onChange={handleChanges}
                        placeholder="Enter your text..."
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-600 transition duration-150"
                    >
                        ADD
                    </button>
                    <button
                        type="button"
                        onClick={handleUndo}
                        disabled={history.length === 0}
                        className={`px-6 py-2 rounded-lg font-semibold shadow transition duration-150 ${
                            history.length === 0
                                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                                : 'bg-yellow-500 text-white hover:bg-yellow-600'
                        }`}
                    >
                        Undo
                    </button>
                </form>
                <div>
                    {allData.length === 0 ? (
                        <div className="text-center text-gray-400 p-8">
                            <svg className="mx-auto h-14 w-14 mb-2 text-blue-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
                            <span>Add items to get started!</span>
                        </div>
                    ) : (
                        <ul className="space-y-4">
                            {allData.map((item, index) => (
                                <li
                                    key={index}
                                    className={`flex flex-col sm:flex-row sm:items-center gap-3 bg-gradient-to-r from-white via-blue-50 to-indigo-50 rounded-xl px-5 py-4 shadow
                                        ${editIndex === index ? 'border-2 border-blue-400' : 'border border-gray-200'}`}
                                >
                                    {editIndex === index ? (
                                        <>
                                            <input
                                                type="text"
                                                value={editValue}
                                                onChange={(e) => setEditValue(e.target.value)}
                                                className="flex-1 px-3 py-2 border border-blue-400 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                                                autoFocus
                                            />
                                            <button
                                                className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
                                                onClick={handleSave}
                                            >
                                                Save
                                            </button>
                                            <button
                                                className="px-3 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition"
                                                onClick={() => {setEditIndex(null); setEditValue('');}}
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <span className="flex-1 text-lg text-gray-800 break-words">{item}</span>
                                            <div className="flex gap-2 mt-2 sm:mt-0">
                                                <button
                                                    className="px-3 py-2 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition"
                                                    onClick={() => handleRemove(index)}
                                                >
                                                    Remove
                                                </button>
                                                <button
                                                    className="px-3 py-2 bg-blue-400 text-white rounded-lg font-semibold hover:bg-blue-500 transition"
                                                    onClick={() => handleEdit(index)}
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainPage;