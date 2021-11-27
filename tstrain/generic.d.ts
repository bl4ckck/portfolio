interface Base<T, T2> {
  a: T;
  b: T2;
}

type FirstExtendedBase = Base<boolean, string>;

const exampleOne: FirstExtendedBase = {
  a: false,
  b: '',
};

type SecondExtendedBase = Base<number, Date>;

const exampleTwo: SecondExtendedBase = {
  a: 42,
  b: new Date(),
};