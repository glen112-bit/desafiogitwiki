import React, {useState} from "react";
import { ItemContainer } from './styles'

function ItemRepo({ repo, title, subtitle, link, handleRemoveRepo }) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return(
    <ItemContainer onClick = { handleRemove }>
      <h3>{subtitle}</h3>
      <p>{title}</p>
      <a href={"#"} className="remover">remover</a> <br/>
      <a href={link} className="verRepo">ver repositorio</a>
      <hr/>
    </ItemContainer>
    )
}

export default ItemRepo;
