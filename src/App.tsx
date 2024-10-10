import React, {useState} from 'react';
import {Input} from "./components/input/Input";
import {Button} from "./components/button/Button";

type MessageType = {
    message: string
}

function App() {
    const [message, setMessage] = useState<MessageType[]>([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const [title, setTitle] = useState<string>('')

    const addMessage = () => {
        setMessage([...message, {message: title}])
        setTitle('')
    }

    return (
        <div className="App">
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;