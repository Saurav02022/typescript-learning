/**
 * @param generics:-> a way of passing types to function along side parameters.(Dynamic type passing parameters)
 */
const Name = "Saurav";
const age = 24;
const MobileNumber = 9572365331;
const isMarried = false;
function getIdentity(arg) {
    return arg;
}
getIdentity(Name);
getIdentity(age);
getIdentity(MobileNumber);
getIdentity(isMarried);
const UseState = (arg) => {
    let v = arg;
    const setV = (newValue) => {
        v = newValue;
    };
    return [v, setV];
};
const [count, setCount] = UseState(0);
const [value, setValue] = UseState("");
