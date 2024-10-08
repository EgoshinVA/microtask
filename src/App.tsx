import React from 'react';
import {Button} from "./components/button/Button";

function App() {

    const ButtonFoo = (text: string, age:number) => {
        console.log(text, age)
    }

    const Button3 = () => {
        console.log('Im stupid button')
    }

    return (
        <div>
            <Button title={'YT Channel-1'} callBack={() => ButtonFoo('1 but', 21)}/>
            <Button title={'YT Channel-2'} callBack={() => ButtonFoo('2 but', 22)}/>
            <Button title={'Stupid btn'} callBack={Button3}/>
        </div>
    );
}

export default App;