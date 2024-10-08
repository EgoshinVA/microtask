import React from 'react';
import {CarInfoType} from "./App";

type NewComponentPropsType = {
    carInfo: CarInfoType[]
}

export const NewComponent: React.FC<NewComponentPropsType> = (props) => {
    return (
        <div>
            <table>
                <caption>
                    New Component
                </caption>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">manufacturer</th>
                    <th scope="col">model</th>
                </tr>
                {props.carInfo.map((car, index)=><tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{car.manufacturer}</td>
                    <td>{car.model}</td>
                </tr>)}
            </table>
        </div>
    );
};