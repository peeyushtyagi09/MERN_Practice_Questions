import React, {useState, useEffect} from 'react';

const MainPage = () => {
    const [counter, setCounter] = useState(0);
    const [start, setStart] = useState(true);

    useEffect(() => {
        if(!start) return;
        
        const id = setInterval(() => {
            setCounter((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(id);
    }, [start]);

    return(
        <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-6 text-blue-700">Counter</h1>
            <div className="text-6xl font-extrabold text-gray-900 mb-8 p-4 bg-white rounded-2xl shadow-inner border-2 border-blue-100 transition-all duration-200">
                {counter}
            </div>
            <div className="flex space-x-4">
                <button
                    onClick={() => setStart(true)}
                    className={`px-6 py-2 rounded-lg font-semibold shadow transition 
                    ${start 
                        ? "bg-blue-400 text-white cursor-not-allowed opacity-60 border border-blue-400" 
                        : "bg-blue-600 hover:bg-blue-700 text-white border border-blue-600"}`}
                    disabled={start}
                >
                    Start
                </button>
                <button
                    onClick={() => setStart(false)}
                    className={`px-6 py-2 rounded-lg font-semibold shadow transition 
                    ${!start 
                        ? "bg-red-400 text-white cursor-not-allowed opacity-60 border border-red-400"
                        : "bg-red-600 hover:bg-red-700 text-white border border-red-600"}`}
                    disabled={!start}
                >
                    Stop
                </button>
            </div>
        </div>
    )
}

export default MainPage;