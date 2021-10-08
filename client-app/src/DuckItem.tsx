import { IDuck } from './demo';

export default function DuckItem(props: { duck: IDuck}) {
    return (
        <div>
            <span> {props.duck.name} </span>
            <button onClick={() => {
                alert(props.duck.name + ' is quacking!')
            }}>Make Sound</button>
        </div>
    )
}
console.log('')