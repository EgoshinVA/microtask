import React from 'react';
import {UserType} from "./App";

type NewComponentPropsType = {
    students: UserType[]
}

export const NewComponent: React.FC<NewComponentPropsType> = () => {
    return (
        <div>

        </div>
    );
};