import React from 'react';
import {FilterType, MoneyType} from "../../App";

type NewComponentPropsType = {
    currentMoney: MoneyType[],
    setCurrentFilter: (filt: FilterType) => void
}

export const NewComponent: React.FC<NewComponentPropsType> = ({currentMoney, setCurrentFilter}) => {
    return (
        <div>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) =>
                    <li key={index}>
                        <span>{objFromMoneyArr.banknote} </span>
                        <span>{objFromMoneyArr.nominal} </span>
                        <span>{objFromMoneyArr.number}</span>
                    </li>
                )}
            </ul>
            <button onClick={() => setCurrentFilter('all')}>all</button>
            <button onClick={() => setCurrentFilter('ruble')}>ruble</button>
            <button onClick={() => setCurrentFilter('dollar')}>dollar</button>
        </div>
    );
};