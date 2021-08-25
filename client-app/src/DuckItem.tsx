import React from 'react';
import { IDuck } from './demo';

interface Props {
    duck: IDuck;
}

export default function DuckItem(props: Props) {
    return (
        <div>
            <span> {props.duck.name} </span>
            <button onClick={() => {
                alert(props.duck.name + ' is quacking!')
            }}>Make Sound</button>
        </div>
    )
}