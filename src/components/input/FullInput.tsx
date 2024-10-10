import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (newMessage: string) => void
}

export const FullInput: React.FC<FullInputPropsType> = (props) => {
    const [title, setTitle] = useState<string>('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};