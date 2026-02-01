import React, {useState} from 'react';

const MainPage = () => {
    const [data, setData] = useState('');
    const [allData,setAllData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');
    const [history, setHistory] = useState([]);
    const handleChange = (e) => {
        setData(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!data.trim()) return;
        saveToHistory();
        setAllData([...allData, data]);
        setData('');
    }   
    const handleRemove = (index) => {
        saveToHistory();
        const updatedData = allData.filter((_, i) => i !== index)
        setAllData(updatedData);
        console.log("Removed")
    }
    const handleEdit = (index) => {
        setEditIndex(index);
        setEditValue(allData[index]);
    } 
    const handleSave= () =>{
        saveToHistory();
        const updateData = [...allData];
        updateData[editIndex] = editValue;
        setAllData(updateData);
        setEditIndex(null);
        setEditValue('');
    }
    const saveToHistory = () => {
        setHistory(prev => [...prev, allData]);
    }

    const handleUndo = () => {
        if(history.length === 0) return;

        const prevState = history[history.length - 1];
        setAllData(prevState);
        setHistory(history.slice(0, -1));
    }
    return(
        <div> 
            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={data}
                onChange={handleChange}
                placeholder="enter you text here...."
                 />
                 <button type="submit">Add</button>
            </form>

            {
                allData.map((value, index) => (
                    <div key={index}>
                        {editIndex === index ? (
                            <>
                            <input
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)} />
                            <button onClick={handleSave}>Save</button>
                            </>
                        ) : (
                            <>
                            <h1>{value}</h1>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleRemove(index)}>Remove</button>
                            </>
                        )}
                        
                    </div>
                ))
            }
        </div>
    )
}
export default MainPage;