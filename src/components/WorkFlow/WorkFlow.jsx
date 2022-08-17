import React, { useCallback, useState } from "react";
import styled from "styled-components";
import generator from "../generator";
import './flow.css' 
import Options from "./Options";

const Title = styled.h1 `
    color: ${ props => props.main ? 'black' : 'red'};
`

export default function WorkFlow() {
    const [password, setPassword] = useState('Скоро здесь будет пароль)');
    const [nums, setNums] = useState(false);
    const [symbols, setSymbols] = useState(false);
    const [length, setLength] = useState(16);

    return (
        <div className="generator_block">
            <div className="header">
                <Title main>
                    Сгенерируем пароль?
                </Title>
            </div>
            <div className="body">
                <div className="generated_password" id='password_block'>
                    {password}
                </div>
                <Options 
                    onChangeNums={useCallback(() => {setNums(!nums)}, [nums])}
                    onChangeLength={useCallback((e) => {setLength(e)}, [length])}
                    onChangeSymbols={useCallback((e) => {setSymbols(e)}, [symbols])}
                />
                <div 
                    className="sha" 
                    onClick={() => generator( length, setPassword )}>Сгенерировать</div>
            </div>
        </div>
    )
}