// estas funciones son de ejemplo

// export const filterData = () => 'example';

// export const sortData = () => 'OMG';

// funcion que permite definir la bandera a colocar
export const defineFlag = flag => flag.slice(0, -1);

// funcion para ordenar A-Z
export const sortedAscendent = (data) => {
  let result = '';
  result = data.sort((a, b) => {
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
    return 0;
  });
  return result;
};

// funcion para ordenar Z-A
export const sortedDescendent = (data) => {
  let result = '';
  result = data.sort((a, b) => {
    if (a.nombre > b.nombre) {
      return -1;
    }
    if (a.nombre < b.nombre) {
      return 1;
    }
    return 0;
  });
  return result;
};
// funcion para filtrar por genero
export const filterbyGender = (data, gender) => {
  const filtered = data.filter(atleta => atleta.genero === gender);
  return filtered;
};

// funcion para filtrar por pais
export const filterByCountry = (data, country) => {
  const filtered = data.filter(atleta => atleta.equipo === country);
  return filtered;
};

// funcion para filtrar por disciplina
export const filterByDiscipline = (data, discipline) => {
  const unfiltered = data.filter(atleta => atleta.disciplinas);
  const filtered = unfiltered.filter(atletas => atletas.disciplinas[0].disciplina === discipline);
  return filtered;
};
