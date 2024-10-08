import React, {useState} from 'react';

function App() {
    let [a, setA] = useState<number>(1)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    return (
        <div>
            {a}
            <button onClick={onClickHandler}>add</button>
            <button onClick={()=>{setA(0)}}>0</button>
        </div>
    );
}

export default App;