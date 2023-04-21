/**
 * @param generics:-> a way of passing types to function along side parameters.(Dynamic type passing parameters)
 */

const Name: string = "Saurav";
const age: number = 24;
const MobileNumber: number = 9572365331;
const isMarried: boolean = false;

function getIdentity<T>(arg: T): T {
  return arg;
}

getIdentity<string>(Name);
getIdentity<number>(age);
getIdentity<number>(MobileNumber);
getIdentity<boolean>(isMarried);

const UseState = <T>(arg: T): [T, (a: T) => void] => {
  let v: typeof arg = arg;

  const setV = (newValue: typeof arg): void => {
    v = newValue;
  };

  return [v, setV];
};

const [count, setCount] = UseState(0);
const [value, setValue] = UseState("");
