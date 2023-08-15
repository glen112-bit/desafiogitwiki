import React, {useState} from "react";
import { InputContainer } from './styles'

function Input({ value, onChange }) {
  return(
    <InputContainer>
      <input 
        onChange = { onChange } 
        value = { value }
      />
    </InputContainer>
    )
}

export default Input
