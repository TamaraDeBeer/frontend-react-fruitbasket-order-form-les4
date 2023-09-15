// eslint-disable-next-line react/prop-types
const Counter = ({fruitObject, increment, decrement, fruitImageObject, reset}) => {
    return (<div>
        {Object.keys(fruitObject).map((fruit) => {
        return (
            <div key={fruit} className="fruit-container">
                <span>{fruitImageObject[fruit]}</span>
                <span className="fruit-type">{fruit}</span>
                <div className="fruit-button-container">
                    <button className="fruit-button" onClick={() => decrement(fruit)}>-</button>
                    <span>{fruitObject[fruit]}</span>
                    <button className="fruit-button" onClick={() => increment(fruit)}>+</button>
                </div>
            </div>)
    })}
        <button className="reset-button" onClick={reset}>Reset</button>
    </div>);
};
export default Counter;