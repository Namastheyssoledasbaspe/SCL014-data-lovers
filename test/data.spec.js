import { defineFlag, sortedAscendent, sortedDescendent } from '../src/data.js';


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
