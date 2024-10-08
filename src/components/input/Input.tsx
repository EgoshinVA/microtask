import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (newTitle: string) => void
}

export const Input: React.FC<InputPropsType> = (props) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};