import React, { useRef} from 'react';

// No need for React.memo here if Parent handles object memoization with useMemo.
// Child will render only when obj changes (by reference).

const Child = React.memo(({ obj }) => {
    const currentChildrender = useRef(0);
    currentChildrender.current += 1;
    return (
        <div style={{ border: '1px solid red', marginTop: '10px' }}>
            <h1>{obj.name}</h1>
            <p>Child Render Count: {currentChildrender.current}</p>
        </div>
    );
});
export default Child