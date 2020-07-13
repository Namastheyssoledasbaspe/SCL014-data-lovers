import dataAtletas from './data/atletas/atletas.js';
import {
  sortedAscendent, sortedDescendent, filterbyGender, filterByCountry, filterByDiscipline,
} from './data.js';

const allAthletes = document.querySelector('#all-athletes');

// filtrando la data para trabajar con los atletas desde Rio 2008
const athletes = dataAtletas.atletas;
const dataDisciplines = athletes.filter(athlete => (athlete.disciplinas));
const data = dataDisciplines.filter(athletesList => (athletesList.disciplinas[0].año > 2007));


// mostrar a todos los atletas
const showAthletes = () => {
  let info = '';
  data.forEach((obj) => {
    const box = document.createElement('div');
    box.setAttribute('id', 'box');
    box.setAttribute('class', 'box');
    info = `<img src = ${obj.genero === 'F' ? './imagenes/avatarFem.png' : './imagenes/avatarMas.png'} class="avatar">
    <p class="name">${obj.nombre}</p>
    <p class="info">${obj.deporte}</p>
    <p class="info">${obj.disciplinas.map(year => year.año)}</p>
    <p class="info">${obj.equipo}</p>`;
    // <img class="flag" src ="https://www.countryflags.io/${defineFlag(obj.noc,)}/flat/64.png">`;
    allAthletes.appendChild(box);
    box.innerHTML = info;

    // informacion de atleta en un modal
    const showAthleteModal = () => {
      let infoAthleteModal = '';
      const boxModal = document.createElement('div');
      boxModal.setAttribute('id', 'box-modal');
      boxModal.setAttribute('class', 'box-modal');
      infoAthleteModal = `<div class="athlete">
      <span class="close" id="close">&times;</span>
      <img src = ${obj.genero === 'F' ? './imagenes/avatarFem.png' : './imagenes/avatarMas.png'} class="avatar2">
      <p class="name-modal">${obj.nombre}</p>
      <table>
      <tr><td><p class="info-modal">Género: </p></td><td><p class="info-modal">${obj.genero}</p></td></tr>
      <tr><td><p class="info-modal">Altura: </p></td><td><p class="info-modal">${obj.altura} cm</p></td></tr>
      <tr><td><p class="info-modal">Peso: </p></td><td><p class="info-modal">${obj.peso} kg</p></td></tr>
      <tr><td><p class="info-modal">Deporte: </p></td><td><p class="info-modal">${obj.deporte}</p></td></tr>
      <tr><td><p class="info-modal">Disciplina: </p></td><td><p class="info-modal">${obj.disciplinas.map(item => item.disciplina)}</p></td></tr>
      <tr><td><p class="info-modal">País: </p></td><td><p class="info-modal">${obj.equipo}</p></td></tr>
      <tr><td><p class="info-modal">Año de Participación: </p></td><td><p class="info-modal">${obj.disciplinas.map(year => year.año)}</p></td></tr>
      <tr><td><p class="info-modal">Sede Olímpica: </p></td><td><p class="info-modal">${obj.disciplinas.map(city => city.ciudad)}</p></td></tr>
      <tr><td><p class="info-modal">Medallas: </p></td><td><p class="info-modal">${obj.disciplinas.map(medal => medal.medalla)}</p></td></tr>
      </table>
      </div>`;
      document.querySelector('#modal-athlete').appendChild(boxModal);
      boxModal.innerHTML = infoAthleteModal;

      // funcionalidad cerrar modal
      const close = document.querySelector('#close');
      close.addEventListener('click', () => {
        document.querySelector('#modal-athlete').removeChild(boxModal);
      });
    };
    // mostrar modal al hacer click
    box.addEventListener('click', () => {
      showAthleteModal(obj);
      document.querySelector('#modal-athlete').classList.remove('hide');
    });
  });
};
showAthletes(data);

// funcionalidad del boton ordenar A-Z
document.getElementById('a-z').addEventListener('click', () => {
  allAthletes.innerHTML = '';
  showAthletes(sortedAscendent(data));
});

// funcionalidad del boton ordenar Z-A
document.getElementById('z-a').addEventListener('click', () => {
  allAthletes.innerHTML = '';
  showAthletes(sortedDescendent(data));
});

// funcionalidad del filtro por genero
const genderFilter = document.querySelector('#genderFilter');

genderFilter.addEventListener('change', () => {
  document.querySelector('#disciplineFilter').value = '';
  document.querySelector('#countryFilter').value = '';
  const value = genderFilter.value;
  const newData = filterbyGender(data, value);

  document.querySelector('#a-z').style.display = 'none';
  document.querySelector('#z-a').style.display = 'none';
  document.querySelector('.search').style.marginLeft = '57%';
  document.getElementById('countryFilter').value = '';
  document.getElementById('disciplineFilter').value = '';

  //funcion que muestra la data filtrada
  const showFilterData = () => {
    let info = '';
    newData.forEach((obj) => {
      const newBox = document.createElement('div');
      newBox.setAttribute('id', 'box');
      newBox.setAttribute('class', 'box');
      info = `<img src = ${obj.genero === 'F' ? './imagenes/avatarFem.png' : './imagenes/avatarMas.png'} class="avatar">
      <p class="name">${obj.nombre}</p>
      <p class="info">${obj.deporte}</p>
      <p class="info">${obj.disciplinas.map(year => year.año)}</p>
      <p class="info">${obj.equipo}</p>`;
      allAthletes.appendChild(newBox);
      newBox.innerHTML = info;

      // mostrar modal en data filtrada
      const showFilterAthleteModal = () => {
        let infoFilterAthleteModal = '';
        const boxFilterModal = document.createElement('div');
        boxFilterModal.setAttribute('id', 'box-modal');
        boxFilterModal.setAttribute('class', 'box-modal');
        infoFilterAthleteModal = `<div class="athlete">
    <span class="close" id="close">&times;</span>
    <img src = ${obj.genero === 'F' ? './imagenes/avatarFem.png' : './imagenes/avatarMas.png'} class="avatar2">
    <p class="name-modal">${obj.nombre}</p>
    <table>
    <tr><td><p class="info-modal">Género: </p></td><td><p class="info-modal">${obj.genero}</p></td></tr>
    <tr><td><p class="info-modal">Altura: </p></td><td><p class="info-modal">${obj.altura} cm</p></td></tr>
    <tr><td><p class="info-modal">Peso: </p></td><td><p class="info-modal">${obj.peso} kg</p></td></tr>
    <tr><td><p class="info-modal">Deporte: </p></td><td><p class="info-modal">${obj.deporte}</p></td></tr>
    <tr><td><p class="info-modal">Disciplina: </p></td><td><p class="info-modal">${obj.disciplinas.map(item => item.disciplina)}</p></td></tr>
    <tr><td><p class="info-modal">País: </p></td><td><p class="info-modal">${obj.equipo}</p></td></tr>
    <tr><td><p class="info-modal">Año de Participación: </p></td><td><p class="info-modal">${obj.disciplinas.map(year => year.año)}</p></td></tr>
    <tr><td><p class="info-modal">Sede Olímpica: </p></td><td><p class="info-modal">${obj.disciplinas.map(city => city.ciudad)}</p></td></tr>
    <tr><td><p class="info-modal">Medallas: </p></td><td><p class="info-modal">${obj.disciplinas.map(medal => medal.medalla)}</p></td></tr>
    </table>
    </div>`;
        document.querySelector('#modal-athlete').appendChild(boxFilterModal);
        boxFilterModal.innerHTML = infoFilterAthleteModal;

        // funcionalidad cerrar modal
        const close = document.querySelector('#close');
        close.addEventListener('click', () => {
          document.querySelector('#modal-athlete').removeChild(boxFilterModal);
        });
      };
      // mostrar modal al hacer click
      newBox.addEventListener('click', () => {
        showFilterAthleteModal(obj);
        document.querySelector('#modal-athlete').classList.remove('hide');
      });
    });
  };
  allAthletes.innerHTML = '';
  showFilterData(newData);
});

// lista de options en selects disciplinas
const disciplineListOne = data.map(atleta => atleta.disciplinas);
const disciplineListTwo = () => {
  const result = [];
  disciplineListOne.forEach((arr) => {
    arr.forEach((obj) => {
      result.push(obj.disciplina);
    });
  });
  return result;
};

const disciplineList = disciplineListTwo();
const disciplines = disciplineList.filter((element, indx, arr) => (arr.indexOf(element) === indx));
const selectDiscipline = document.querySelector('#disciplineFilter');
(() => {
  const orderDiscipline = disciplines.sort();
  orderDiscipline.forEach((discipline) => {
    const option = document.createElement('option');
    option.textContent = discipline;
    option.setAttribute('class', 'options');
    option.setAttribute('value', discipline);
    selectDiscipline.appendChild(option);
  });
})();


// funcionalidad del filtro por disciplinas
const disciplinesFilter = document.getElementById('disciplineFilter');
disciplinesFilter.addEventListener('change', () => {
  const value = disciplinesFilter.value;
  const newData = filterByDiscipline(data, value);

  document.querySelector('#a-z').style.display = 'none';
  document.querySelector('#z-a').style.display = 'none';
  document.querySelector('.search').style.marginLeft = '57%';
  document.getElementById('countryFilter').value = '';
  document.getElementById('genderFilter').value = '';

  // mostrar la data filtrada
  const showFilterData = () => {
    let info = '';
    newData.forEach((obj) => {
      const newBox = document.createElement('div');
      newBox.setAttribute('id', 'box');
      newBox.setAttribute('class', 'box');
      info = `<img src = ${obj.genero === 'F' ? './imagenes/avatarFem.png' : './imagenes/avatarMas.png'} class="avatar">
      <p class="name">${obj.nombre}</p>
      <p class="info">${obj.deporte}</p>
      <p class="info">${obj.disciplinas.map(year => year.año)}</p>
      <p class="info">${obj.equipo}</p>`;
      // <img class="flag" src ="https://www.countryflags.io/${defineFlag(obj.noc,)}/flat/64.png">`;
      allAthletes.appendChild(newBox);
      newBox.innerHTML = info;

      // mostrar modal en data filtrada
      const showFilterAthleteModal = () => {
        let infoFilterAthleteModal = '';
        const boxFilterModal = document.createElement('div');
        boxFilterModal.setAttribute('id', 'box-modal');
        boxFilterModal.setAttribute('class', 'box-modal');
        infoFilterAthleteModal = `<div class="athlete">
    <span class="close" id="close">&times;</span>
    <img src = ${obj.genero === 'F' ? './imagenes/avatarFem.png' : './imagenes/avatarMas.png'} class="avatar2">
    <p class="name-modal">${obj.nombre}</p>
    <table>
    <tr><td><p class="info-modal">Género: </p></td><td><p class="info-modal">${obj.genero}</p></td></tr>
    <tr><td><p class="info-modal">Altura: </p></td><td><p class="info-modal">${obj.altura} cm</p></td></tr>
    <tr><td><p class="info-modal">Peso: </p></td><td><p class="info-modal">${obj.peso} kg</p></td></tr>
    <tr><td><p class="info-modal">Deporte: </p></td><td><p class="info-modal">${obj.deporte}</p></td></tr>
    <tr><td><p class="info-modal">Disciplina: </p></td><td><p class="info-modal">${obj.disciplinas.map(item => item.disciplina)}</p></td></tr>
    <tr><td><p class="info-modal">País: </p></td><td><p class="info-modal">${obj.equipo}</p></td></tr>
    <tr><td><p class="info-modal">Año de Participación: </p></td><td><p class="info-modal">${obj.disciplinas.map(year => year.año)}</p></td></tr>
    <tr><td><p class="info-modal">Sede Olímpica: </p></td><td><p class="info-modal">${obj.disciplinas.map(city => city.ciudad)}</p></td></tr>
    <tr><td><p class="info-modal">Medallas: </p></div></td><td><p class="info-modal">${obj.disciplinas.map(medal => medal.medalla)}</p></td></tr>
    </table>
    </div>`;
        document.querySelector('#modal-athlete').appendChild(boxFilterModal);
        boxFilterModal.innerHTML = infoFilterAthleteModal;

        // funcionalidad cerrar modal
        const close = document.querySelector('#close');
        close.addEventListener('click', () => {
          document.querySelector('#modal-athlete').removeChild(boxFilterModal);
        });
      };
      // mostrar modal al hacer click
      newBox.addEventListener('click', () => {
        showFilterAthleteModal(obj);
        document.querySelector('#modal-athlete').classList.remove('hide');
      });
    });
  };
  allAthletes.innerHTML = '';
  showFilterData(newData);
});


// lista de options en select paises
const countryL = data.map(atletas => atletas.equipo);
const countrys = countryL.filter((elemento, index, array) => (array.indexOf(elemento) === index));
const selectCountry = document.querySelector('#countryFilter');
(() => {
  const orderCountrys = countrys.sort();
  orderCountrys.forEach((country) => {
    const option = document.createElement('option');
    option.textContent = country;
    option.setAttribute('value', country);
    option.setAttribute('class', 'options');
    selectCountry.appendChild(option);
  });
})();

// funcionalidad del filtro por pais
const countrysFilter = document.getElementById('countryFilter');
countrysFilter.addEventListener('change', () => {
  const value = countrysFilter.value;
  const newData = filterByCountry(data, value);

  document.querySelector('#a-z').style.display = 'none';
  document.querySelector('#z-a').style.display = 'none';
  document.querySelector('.search').style.marginLeft = '57%';
  document.getElementById('disciplineFilter').value = '';
  document.getElementById('genderFilter').value = '';

  // mostrar data fitrada
  const showFilterData = () => {
    let info = '';
    newData.forEach((obj) => {
      const newBox = document.createElement('div');
      newBox.setAttribute('id', 'box');
      newBox.setAttribute('class', 'box');
      info = `<img src = ${obj.genero === 'F' ? './imagenes/avatarFem.png' : './imagenes/avatarMas.png'} class="avatar">
      <p class="name">${obj.nombre}</p>
      <p class="info">${obj.deporte}</p>
      <p class="info">${obj.disciplinas.map(year => year.año)}</p>
      <p class="info">${obj.equipo}</p>`;
      // <img class="flag" src ="https://www.countryflags.io/${defineFlag(obj.noc,)}/flat/64.png">`;
      allAthletes.appendChild(newBox);
      newBox.innerHTML = info;

      // mostrar modal en data filtrada
      const showFilterAthleteModal = () => {
        let infoFilterAthleteModal = '';
        const boxFilterModal = document.createElement('div');
        boxFilterModal.setAttribute('id', 'box-modal');
        boxFilterModal.setAttribute('class', 'box-modal');
        infoFilterAthleteModal = `<div class="athlete">
    <span class="close" id="close">&times;</span>
    <img src = ${obj.genero === 'F' ? './imagenes/avatarFem.png' : './imagenes/avatarMas.png'} class="avatar2">
    <p class="name-modal">${obj.nombre}</p>
    <table>
    <tr><td><p class="info-modal">Género: </p></td><td><p class="info-modal">${obj.genero}</p></td></tr>
    <tr><td><p class="info-modal">Altura: </p></td><td><p class="info-modal">${obj.altura} cm</p></td></tr>
    <tr><td><p class="info-modal">Peso: </p></td><td><p class="info-modal">${obj.peso} kg</p></td></tr>
    <tr><td><p class="info-modal">Deporte: </p></td><td><p class="info-modal">${obj.deporte}</p></td></tr>
    <tr><td><p class="info-modal">Disciplina: </p></td><td><p class="info-modal">${obj.disciplinas.map(item => item.disciplina)}</p></td></tr>
    <tr><td><p class="info-modal">País: </p></td><td><p class="info-modal">${obj.equipo}</p></td></tr>
    <tr><td><p class="info-modal">Año de Participación: </p></td><td><p class="info-modal">${obj.disciplinas.map(year => year.año)}</p></td></tr>
    <tr><td><p class="info-modal">Sede Olímpica: </p></td><td><p class="info-modal">${obj.disciplinas.map(city => city.ciudad)}</p></td></tr>
    <tr><td><p class="info-modal">Medallas: </p></div></td><td><p class="info-modal">${obj.disciplinas.map(medal => medal.medalla)}</p></td></tr>
    </table>
    </div>`;
        document.querySelector('#modal-athlete').appendChild(boxFilterModal);
        boxFilterModal.innerHTML = infoFilterAthleteModal;

        // funcionalidad cerrar modal
        const close = document.querySelector('#close');
        close.addEventListener('click', () => {
          document.querySelector('#modal-athlete').removeChild(boxFilterModal);
        });
      };
      // mostrar modal al hacer click
      newBox.addEventListener('click', () => {
        showFilterAthleteModal(obj);
        document.querySelector('#modal-athlete').classList.remove('hide');
      });
    });
  };
  allAthletes.innerHTML = '';
  showFilterData(newData);
});


// funcionalidad del input buscar por nombre
const searcher = document.getElementById('search');

searcher.addEventListener('input', (e) => {
  const typedValue = e.target.value.toLowerCase();
  const names = document.querySelector('#all-athletes').getElementsByTagName('div');
  Array.from(names).forEach((box) => {
    const athleteName = box.childNodes[2].textContent;
    const boxes = box;
    if (athleteName.toLowerCase().indexOf(typedValue) !== -1) {
      boxes.style.display = 'block';
    } else {
      boxes.style.display = 'none';
    }
  });
});
