import React, {useState} from 'react';
import {NewComponent} from "./components/newComponent/NewComponent";

export type MoneyType = {
    banknote: "dollar" | "ruble",
    nominal: number,
    number: string
}

export type FilterType = 'all' | 'dollar' | 'ruble'


function App() {
    const [money, setMoney] = useState<MoneyType[]>([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money

    filter === 'ruble' && (currentMoney = money.filter(item => item.banknote === 'ruble'))
    filter === 'dollar' && (currentMoney = money.filter(item => item.banknote === 'dollar'))

    const setCurrentFilter = (filt: FilterType) => {
        setFilter(filt)
    }

    return (
        <div>
            <NewComponent setCurrentFilter={setCurrentFilter} currentMoney={currentMoney}/>
        </div>

    );
}

export default App;