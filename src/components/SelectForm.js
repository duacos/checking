import React from "react";

const SelectForm = props => {
  return (
    <select defaultValue={props.value} onChange={props.handleSelect}>
      <option value="No realizado">No realizado</option>
      <option value="Realizado informalmente">Realizado informalmente</option>
      <option value="Planificado">Planificado</option>
      <option value="Bien definido">Bien definido</option>
      <option value="Cuantitativamente controlado">
        Cuantitativamente controlado
      </option>
      <option value="Mejora continua">Mejora continua</option>
    </select>
  );
};

export default SelectForm;
