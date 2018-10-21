import styled from 'styled-components'

export const InputContainer = styled.div`
	display: flex;
    width: 215px;
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    font-family: sans-serif;
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    color: #262626;
    outline: 0;
    font-size: 16px;
    padding: 5px 10px 5px 26px;
    z-index: 2;
`

export const InputDiv = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-family: sans-serif;
    background: #fafafa;
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    color: #999;
    cursor: text;
    font-size: 14px;
    font-weight: 300;
    padding: 7px;
    text-align: center;
    z-index: 2;
`