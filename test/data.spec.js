import {
  defineFlag,
  sortedAscendent,
  sortedDescendent,
  filterbyGender,
  filterByDiscipline,
  filterByCountry,
} from '../src/data.js';


describe('defineFlag', () => {
  it('is a function', () => {
    expect(typeof defineFlag).toBe('function');
  });

  const pais = 'CHI';
  it('returns `defineFlag`', () => {
    expect(defineFlag(pais)).toBe('CH');
  });

  const paisTwo = 'ITA';
  it('returns for flagtwo `defineFlag`', () => {
    expect(defineFlag(paisTwo)).toBe('IT');
  });
});


describe('sortAscendent', () => {
  it('is a function', () => {
    expect(typeof sortedAscendent).toBe('function');
  });

  const athletes = [
    {
      nombre: 'Matteo Bisiani',
    },
    {
      nombre: 'Carlos Alberto Pedroso Curiel',
    },
    {
      nombre: 'Pascal Andr Jean Touron',
    },
    {
      nombre: 'Aaron Wells Peirsol',
    },
    {
      nombre: 'Aleksandr Aleksandrovich Karelin',
    },
  ];

  it('returns `sortAscendent`', () => {
    expect(sortedAscendent(athletes)).toStrictEqual([
      {
        nombre: 'Aaron Wells Peirsol',
      },
      {
        nombre: 'Aleksandr Aleksandrovich Karelin',
      },
      {
        nombre: 'Carlos Alberto Pedroso Curiel',
      },
      {
        nombre: 'Matteo Bisiani',
      },
      {
        nombre: 'Pascal Andr Jean Touron',
      },
    ]);
  });
});

describe('sortDescendent', () => {
  it('is a function', () => {
    expect(typeof sortedDescendent).toBe('function');
  });

  const athletesTwo = [
    {
      nombre: 'Matteo Bisiani',
    },
    {
      nombre: 'Carlos Alberto Pedroso Curiel',
    },
    {
      nombre: 'Pascal Andr Jean Touron',
    },
    {
      nombre: 'Aaron Wells Peirsol',
    },
    {
      nombre: 'Aleksandr Aleksandrovich Karelin',
    },
  ];

  it('returns `sortDescendent`', () => {
    expect(sortedDescendent(athletesTwo)).toStrictEqual([
      {
        nombre: 'Pascal Andr Jean Touron',
      },
      {
        nombre: 'Matteo Bisiani',
      },
      {
        nombre: 'Carlos Alberto Pedroso Curiel',
      },
      {
        nombre: 'Aleksandr Aleksandrovich Karelin',
      },
      {
        nombre: 'Aaron Wells Peirsol',
      },
    ]);
  });
});

describe('filterbyGender', () => {
  it('is a function', () => {
    expect(typeof filterbyGender).toBe('function');
  });
});

const athletesThree = [
  {
    nombre: 'Matteo Bisiani',
    genero: 'M',
    altura: '184',
    peso: '85',
    deporte: 'Archery',
    equipo: 'Italy',
    noc: 'ITA',
    disciplinas: [
      {
        disciplina: 'Archery Mens Team',
        temporada: 'Summer',
        año: 2000,
        ciudad: 'Sydney',
        medalla: 'Silver',
      },
    ],
  },
  {
    nombre: 'Nataliya Andrivna Burdeina',
    genero: 'F',
    altura: '165',
    peso: '63',
    deporte: 'Archery',
    equipo: 'Ukraine',
    noc: 'UKR',
    disciplinas: [
      {
        disciplina: 'Archery Womens Team',
        temporada: 'Summer',
        año: 2000,
        ciudad: 'Sydney',
        medalla: 'Silver',
      },
    ],
  },
  {
    nombre: 'Ilario Di Bu',
    genero: 'M',
    altura: '175',
    peso: '90',
    deporte: 'Archery',
    equipo: 'Italy',
    noc: 'ITA',
    disciplinas: [
      {
        disciplina: 'Archery Mens Team',
        temporada: 'Summer',
        año: 2000,
        ciudad: 'Sydney',
        medalla: 'Silver',
      },
      {
        disciplina: 'Archery Mens Team',
        temporada: 'Summer',
        año: 2008,
        ciudad: 'Beijing',
        medalla: 'Silver',
      },
    ],
  },
];

it('returns `filterbyGender`', () => {
  expect(filterbyGender(athletesThree, 'F')).toEqual([
    {
      nombre: 'Nataliya Andrivna Burdeina',
      genero: 'F',
      altura: '165',
      peso: '63',
      deporte: 'Archery',
      equipo: 'Ukraine',
      noc: 'UKR',
      disciplinas: [
        {
          disciplina: 'Archery Womens Team',
          temporada: 'Summer',
          año: 2000,
          ciudad: 'Sydney',
          medalla: 'Silver',
        },
      ],
    },
  ]);
});

describe('filterByDiscipline', () => {
  it('is a function', () => {
    expect(typeof filterByDiscipline).toBe('function');
  });
});
it('returns `filterByDiscipline`', () => {
  expect(filterByDiscipline(athletesThree, 'Archery Mens Team')).toEqual([
    {
      nombre: 'Matteo Bisiani',
      genero: 'M',
      altura: '184',
      peso: '85',
      deporte: 'Archery',
      equipo: 'Italy',
      noc: 'ITA',
      disciplinas: [
        {
          disciplina: 'Archery Mens Team',
          temporada: 'Summer',
          año: 2000,
          ciudad: 'Sydney',
          medalla: 'Silver',
        },
      ],
    },
    {
      nombre: 'Ilario Di Bu',
      genero: 'M',
      altura: '175',
      peso: '90',
      deporte: 'Archery',
      equipo: 'Italy',
      noc: 'ITA',
      disciplinas: [
        {
          disciplina: 'Archery Mens Team',
          temporada: 'Summer',
          año: 2000,
          ciudad: 'Sydney',
          medalla: 'Silver',
        },
        {
          disciplina: 'Archery Mens Team',
          temporada: 'Summer',
          año: 2008,
          ciudad: 'Beijing',
          medalla: 'Silver',
        },
      ],
    },
  ]);
});


describe('filterByCountry', () => {
  it('is a function', () => {
    expect(typeof filterByCountry).toBe('function');
  });
});
it('returns `filterByCountry`', () => {
  expect(filterByCountry(athletesThree, 'Italy')).toEqual([
    {
      nombre: 'Matteo Bisiani',
      genero: 'M',
      altura: '184',
      peso: '85',
      deporte: 'Archery',
      equipo: 'Italy',
      noc: 'ITA',
      disciplinas: [
        {
          disciplina: 'Archery Mens Team',
          temporada: 'Summer',
          año: 2000,
          ciudad: 'Sydney',
          medalla: 'Silver',
        },
      ],
    },
    {
      nombre: 'Ilario Di Bu',
      genero: 'M',
      altura: '175',
      peso: '90',
      deporte: 'Archery',
      equipo: 'Italy',
      noc: 'ITA',
      disciplinas: [
        {
          disciplina: 'Archery Mens Team',
          temporada: 'Summer',
          año: 2000,
          ciudad: 'Sydney',
          medalla: 'Silver',
        },
        {
          disciplina: 'Archery Mens Team',
          temporada: 'Summer',
          año: 2008,
          ciudad: 'Beijing',
          medalla: 'Silver',
        },
      ],
    },
  ]);
});
