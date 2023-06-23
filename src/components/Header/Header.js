import React from "react";
import { Container } from "./styles";

const Header = (props) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  const handleSearch = (e) => {
    props.setPesquisa(e.target.value);
  };

  const handleIdSearch = (e) => {
    props.setIdFilter(e.target.value);
  };

  const handleSelect = (e) => {
    props.setTypeSelected(e.target.value);
  };

  const handleOrderSelected = (e) => {
    props.setOrderSelected(e.target.value);
  };

  return (
    <Container>
      <input
        type="number"
        placeholder="Buscar por id"
        onChange={handleIdSearch}
        value={props.idFilter}
      />
      <input
        type="text"
        placeholder="Buscar por nome"
        onChange={handleSearch}
        value={props.pesquisa}
      />
      <select>
        <option value="">Ordenar</option>
        <option value="">Crescente</option>
        <option value="">Decrescente</option>
      </select>
      <select
        onChange={handleOrderSelected}
        value={props.orderSelected} 
      >
        <option value="order">Ordenar</option>
        <option value="asc">Crescente</option>
        <option value="desc">Decrescente</option>
      </select>

      <select name="tipo" id="tipo"
        onChange={handleSelect}
        value={props.typeSelected}>
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
        {pokemontypesArray.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Header;
