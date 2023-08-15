import React, {useState} from "react"
import { ButtonContainer } from './styles'

function Button({onClick, Name}){
  return(
    <ButtonContainer onClick = {onClick}>
      <p>{Name}</p>
    </ButtonContainer>
    )
}

export default Button;
