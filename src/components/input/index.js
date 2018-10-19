import React from 'react'
import { InputContainer, Input, InputDiv } from './style.js'

export default ({ typing=false, children }) => (
		<InputContainer>
			{ typing ? <Input placeholder={children} /> : <InputDiv>{children}</InputDiv> }	
		</InputContainer>
	)