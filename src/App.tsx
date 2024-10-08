import React, {useState} from 'react';
import {NewComponent} from "./NewComponent";

export type CarInfoType = {
    manufacturer: string,
    model: string
}

function App() {
    const [carInfo, setCarInfo] = useState<CarInfoType[]>([
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
        ]
    )
    return (
        <NewComponent carInfo={carInfo}/>
    );
}

export default App;