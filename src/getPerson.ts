import { resolve } from 'path';

type Person = {
  name: string;
};

export function getPerson(): Promise<Person> {
  // eslint-disable-next-line prettier/prettier
  return new Promise((resolve) => setTimeout(() => resolve({ name: 'bob' }), 5000));
}
