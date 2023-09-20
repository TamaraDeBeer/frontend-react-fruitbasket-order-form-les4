// import './App.css'
// import {useState} from "react";
// import Counter from "./components/Counter.jsx";
// function App() {
//
//     const [fruit, setFruit] = useState ({
//         strawberry: 0,
//         banana: 0,
//         apple: 0,
//         kiwi: 0,
//     });
//
//     // eslint-disable-next-line no-unused-vars
//     const [fruitImage, setFruitImage] = useState({
//         apples: "🍏",
//         banana: "🍌",
//         kiwi: "🥝",
//         strawberry: "🍓",
//     });
//
//     function fruitIncrement(fruits) {
//         setFruit(prevState => ({
//             ...prevState,
//                 [fruits]: prevState[fruits] + 1
//         }))}
//
//     function fruitDecrement(fruits) {
//         if(fruits[fruit] > 0) {
//             setFruit(prevState => ({
//                 ...prevState,
//                 [fruits]: prevState[fruits] - 1
//             }))}
//     }
//
//
//
//     // let [quantityBanana, setQuantityBanana] = useState(0);
//     // const handleIncreaseBanana = () => {
//     //     setQuantityBanana(quantityBanana+1);
//     // }
//     // const handleDecreaseBanana = () => {
//     //     if(quantityBanana > 0) {
//     //         setQuantityBanana(quantityBanana-1)
//     //     }
//     // }
//     //
//     // let [quantityStrawberry, setQuantityStrawberry] = useState(0);
//     // const handleIncreaseStrawberry = () => {
//     //     setQuantityStrawberry(quantityStrawberry+1);
//     // }
//     // const handleDecreaseStrawberry = () => {
//     //     if(quantityStrawberry > 0) {
//     //         setQuantityStrawberry(quantityStrawberry-1)
//     //     }
//     // }
//     //
//     // let [quantityApple, setQuantityApple] = useState(0);
//     // const handleIncreaseApple = () => {
//     //     setQuantityApple(quantityApple+1);
//     // }
//     // const handleDecreaseApple = () => {
//     //     if(quantityApple > 0) {
//     //         setQuantityApple(quantityApple-1)
//     //     }
//     // }
//     //
//     // let [quantityKiwi, setQuantityKiwi] = useState(0);
//     // const handleIncreaseKiwi = () => {
//     //     setQuantityKiwi(quantityKiwi+1);
//     // }
//     // const handleDecreaseKiwi = () => {
//     //     if(quantityKiwi > 0) {
//     //         setQuantityKiwi(quantityKiwi-1)
//     //     }
//     // }
//
// const resetForm = () => {
//         setFruit(0);
// }
//
// return (
//     <>
//         <main>
//         <h1>Fruitmand bezorgservice</h1>
//             <h2>Jouw winkelmandje:</h2>
//
//             <Counter fruitObject={fruit} increment={fruitIncrement} decrement={fruitDecrement} fruitImageObject={fruitImage}/>
//
//
//             {/*<div className="fruit-container">*/}
//             {/*    <img src={aardbei} alt="aardbei afbeelding"/>*/}
//             {/*    <h2>Aardbeien</h2>*/}
//             {/*    <div className="fruit-button-container">*/}
//             {/*    <button className="fruit-button" onClick={handleDecreaseStrawberry}>-</button>*/}
//             {/*    <p>{quantityStrawberry}</p>*/}
//             {/*    <button className="fruit-button" onClick={handleIncreaseStrawberry}>+</button>*/}
//             {/*    </div>*/}
//             {/*</div>*/}
//
//             {/*<div className="fruit-container">*/}
//             {/*    <img src={banaan} alt="banaan afbeelding"/>*/}
//             {/*    <h2>Bananen</h2>*/}
//             {/*    <div className="fruit-button-container">*/}
//             {/*    <button className="fruit-button" onClick={handleDecreaseBanana}>-</button>*/}
//             {/*    <p>{quantityBanana}</p>*/}
//             {/*    <button className="fruit-button" onClick={handleIncreaseBanana}>+</button>*/}
//             {/*</div></div>*/}
//
//             {/*<div className="fruit-container">*/}
//             {/*    <img src={appel} alt="appel afbeelding"/>*/}
//             {/*    <h2>Appels</h2>*/}
//             {/*    <div className="fruit-button-container">*/}
//             {/*    <button className="fruit-button" onClick={handleDecreaseApple}>-</button>*/}
//             {/*    <p>{quantityApple}</p>*/}
//             {/*    <button className="fruit-button" onClick={handleIncreaseApple}>+</button>*/}
//             {/*</div></div>*/}
//
//             {/*<div className="fruit-container">*/}
//             {/*    <img src={kiwi} alt="kiwi afbeelding"/>*/}
//             {/*    <h2>Kiwis</h2>*/}
//             {/*    <div className="fruit-button-container">*/}
//             {/*    <button className="fruit-button" onClick={handleDecreaseKiwi}>-</button>*/}
//             {/*    <p>{quantityKiwi}</p>*/}
//             {/*    <button className="fruit-button" onClick={handleIncreaseKiwi}>+</button>*/}
//             {/*</div></div>*/}
//             <button className="reset-button" type="button" onClick={resetForm}>Reset</button>
//
//             </main>
//     </>
//   )
// }
//
// export default App

import './App.css'
import {useState} from "react";
import { useForm } from 'react-hook-form';
import Counter from "./components/Counter/Counter.jsx";
import logo from "./assets/screenshot-logo.png";
import Form from './components/Form/Form.jsx';

function App() {
    const initialFruit = {
        apples: 0,
        bananas: 0,
        kiwis: 0,
        strawberries: 0,
    };

    const [fruitImage] = useState({
        apples: "🍏",
        bananas: "🍌",
        strawberries: "🍓",
        kiwis: "🥝",
    });

    const [fruits, setFruits] = useState(initialFruit)

    function reset() {
        setFruits(initialFruit)
    }

    function fruitIncrement(fruit) {
        setFruits((prevState) => ({
            ...prevState, [fruit]: prevState[fruit] + 1
        }))
    }

    function fruitDecrement(fruit) {
        if (fruits[fruit] > 0) {
            setFruits((prevState) => ({
                ...prevState, [fruit]: prevState[fruit] - 1
            }))
        }
    }

    // function conditional styling kleur of bij decrement/increment stying voor kleur


    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, formState: { errors } } = useForm();

    function handleFormSubmit(data) {
        console.log(data);
    }

        return (
            <>
                <body>
                <header>
                    <img src={logo} alt="logo" className="logo"/>
                </header>

                <main>

                    <h1>Fruitmand bezorgservice</h1>
                    <Counter
                        reset={reset}
                        fruitObject={fruits}
                        fruitImageObject={fruitImage}
                        increment={fruitIncrement}
                        decrement={fruitDecrement}
                    />

                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <Form
                            inputType="text"
                            inputName="first-name"
                            inputId="first-name"
                            inputLabel="Voornaam:"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Dit veld is verplicht",
                                },
                                minLength: {
                                    value: 3,
                                    message: 'Input moet minstens 3 karakters bevatten',
                                },
                                }}
                            register={register}
                            errors={errors}
                        />

                        <Form
                            inputType="text"
                            inputName="last-name"
                            inputId="last-name"
                            inputLabel="Achternaam:"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Dit veld is verplicht",
                                },
                                }}
                            register={register}
                            errors={errors}
                        />

                        <Form
                            inputType="email"
                            inputName="email"
                            inputId="email"
                            inputLabel="Email:"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Dit veld is verplicht",
                                },
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "Gelieve een geldig e-mailadres in te vullen",
                                },
                            }}
                            register={register}
                            errors={errors}
                        />

                        <Form
                            inputType="number"
                            inputName="age"
                            inputId="age"
                            inputLabel="Leeftijd:"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Dit veld is verplicht",
                                },
                                min: {
                                    value: 2,
                                    message: 'Input moet minstens 2 cijfers bevatten',
                                },
                            }}
                            register={register}
                            errors={errors}
                        />

                        <Form
                            inputType="text"
                            inputName="zip-code"
                            inputId="zip-code"
                            inputLabel="Postcode:"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Dit veld is verplicht",
                                },
                                pattern: {
                                    value: /^([0-9]{4}[ ]+[a-zA-Z]{2})$/,
                                    message: "Vul een geldige postcode in, bv: 1234 AB"
                                },
                            }}
                            register={register}
                            errors={errors}
                        />

                        <label htmlFor="delivery-frequency" className="contact-details-container">
                            Bezorgfrequentie:
                            <select
                                id="delivery-frequency"
                                {...register("delivery-frequency", {
                                    required: {
                                        value: true,
                                        message: "Dit veld is verplicht",
                                    }
                                })}
                                >
                                <option value="every-week">Iedere week</option>
                                <option value="every-other-week">Om de week</option>
                                <option value="every-month">Iedere maand</option>
                            </select>
                        </label>

                        <div className="radio-button">
                            <label htmlFor="day">
                                Overdag
                                <input
                                    type="radio"
                                    id="day"
                                    value="day"
                                    {...register("delivery")}
                                />
                            </label>

                        <label htmlFor="evening">
                            's Avonds
                            <input
                                type="radio"
                                id="evening"
                                value="evening"
                                {...register("delivery")}
                            />
                        </label>
                        </div>

                        <label htmlFor="message-field" className="contact-details-container">
                            Opmerking:
                            <textarea
                                id="message-field"
                                rows="4"
                                cols="40"
                                placeholder="Laat je bericht achter"
                                {...register("message-field")}
                            ></textarea>
                        </label>

                        <label htmlFor="terms-and-conditions-checkbox" className="contact-details-container">
                            <input
                                type="checkbox"
                                id="terms-and-conditions-checkbox"
                                value="terms-and-conditions-checkbox"
                                {...register("terms-and-conditions-checkbox", {
                                    required: true,
                                    message: "Dit veld is verplicht",
                                },
                                )}
                            />
                            Ik ga akkoord met de voorwaarden
                        </label>

                        <button type="submit" className="button">
                            Versturen
                        </button>

                    </form>
                </main>
                </body>
            </>);
    }


export default App;
