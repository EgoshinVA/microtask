import React from 'react';

type ButtonPropsType = {
    title: string,
    callBack: () => void
}

export const Button: React.FC<ButtonPropsType> = ({title, callBack}) => {
    const onClickHandler = () => {
        callBack()
    }

    return (
        <div>
            <button onClick={onClickHandler}>{title}</button>
        </div>
    );
};