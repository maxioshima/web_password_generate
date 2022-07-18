import React, { useRef } from "react";
import { useMemo } from "react";
import CCheckBox from "./CCheckbox";

export default function Options({ onChangeNums, onChangeLength, onChangeSymbols }) {
    const length = useRef("length");

    let onHandleChange = () => {
        onChangeLength(length.current.value)
    }

    return (
        <div>
            <div className="password_length">
                <label className="options_text">Password length</label>
                <input type="range" onChange={onHandleChange} ref={length} min={6} max={24} />
                <div>{length.current.value}</div>
            </div>
            <CCheckBox title='Numbers' onChange={onChangeNums}/>
            <CCheckBox title='Symbols' onChange={onChangeSymbols}/>
        </div>
    )
}