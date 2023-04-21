/**
 * Interface is 99% simpler to type
 * we should avoid using this interface.we should use type instead of interface.
 */

type person = {
  id: number;
  name: string;
  age: number;
  address: string;
};
interface Person {
  id: number;
  name: string;
  age: number;
  address: string;
}
