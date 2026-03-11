import { useState } from "react";
import "./style.css";

function Square({value}){
    return <button className="square">{value}</button>
}

export default function Board() {
    const [square, setSquares] = useState(Array(9).fill(null));

    return (
        <>
            <div className="board-row">
                <Square value={square=[0]}/>
                <Square value={square=[1]}/>
                <Square value={square=[2]}/>
            </div>
            <div className="board-row">
                <Square value={square=[3]}/>
                <Square value={square=[4]}/>
                <Square value={square=[5]}/>
            </div>
            <div className="board-row">
                <Square value={square=[6]}/>
                <Square value={square=[7]}/>
                <Square value={square=[8]}/>
            </div>            
        </>
    );
}