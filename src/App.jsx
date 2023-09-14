import './App.css'
import {useState} from "react";
import aardbei from "./assets/aardbeien.jpg"
import appel from "./assets/appel.jpeg"
import banaan from "./assets/banaan.jpg"
import kiwi from "./assets/kiwi.jpg"
function App() {

    let [quantityBanana, setQuantityBanana] = useState(0);
    const handleIncreaseBanana = () => {
        setQuantityBanana(quantityBanana+1);
    }
    const handleDecreaseBanana = () => {
        if(quantityBanana > 0) {
            setQuantityBanana(quantityBanana-1)
        }
    }

    let [quantityStrawberry, setQuantityStrawberry] = useState(0);
    const handleIncreaseStrawberry = () => {
        setQuantityStrawberry(quantityStrawberry+1);
    }
    const handleDecreaseStrawberry = () => {
        if(quantityStrawberry > 0) {
            setQuantityStrawberry(quantityStrawberry-1)
        }
    }

    let [quantityApple, setQuantityApple] = useState(0);
    const handleIncreaseApple = () => {
        setQuantityApple(quantityApple+1);
    }
    const handleDecreaseApple = () => {
        if(quantityApple > 0) {
            setQuantityApple(quantityApple-1)
        }
    }

    let [quantityKiwi, setQuantityKiwi] = useState(0);
    const handleIncreaseKiwi = () => {
        setQuantityKiwi(quantityKiwi+1);
    }
    const handleDecreaseKiwi = () => {
        if(quantityKiwi > 0) {
            setQuantityKiwi(quantityKiwi-1)
        }
    }

const resetForm = () => {
        setQuantityKiwi(0);
        setQuantityBanana(0);
        setQuantityApple(0);
        setQuantityStrawberry(0);
}

return (
    <>
        <main>
        <h1>Fruitmand bezorgservice</h1>
            <h2>Jouw winkelmandje:</h2>

            <div className="fruit-container">
                <img src={aardbei} alt="aardbei afbeelding"/>
                <h2>Aardbeien</h2>
                <div className="fruit-button-container">
                <button className="fruit-button" onClick={handleDecreaseStrawberry}>-</button>
                <p>{quantityStrawberry}</p>
                <button className="fruit-button" onClick={handleIncreaseStrawberry}>+</button>
                </div>
            </div>

            <div className="fruit-container">
                <img src={banaan} alt="banaan afbeelding"/>
                <h2>Bananen</h2>
                <div className="fruit-button-container">
                <button className="fruit-button" onClick={handleDecreaseBanana}>-</button>
                <p>{quantityBanana}</p>
                <button className="fruit-button" onClick={handleIncreaseBanana}>+</button>
            </div></div>

            <div className="fruit-container">
                <img src={appel} alt="appel afbeelding"/>
                <h2>Appels</h2>
                <div className="fruit-button-container">
                <button className="fruit-button" onClick={handleDecreaseApple}>-</button>
                <p>{quantityApple}</p>
                <button className="fruit-button" onClick={handleIncreaseApple}>+</button>
            </div></div>

            <div className="fruit-container">
                <img src={kiwi} alt="kiwi afbeelding"/>
                <h2>Kiwis</h2>
                <div className="fruit-button-container">
                <button className="fruit-button" onClick={handleDecreaseKiwi}>-</button>
                <p>{quantityKiwi}</p>
                <button className="fruit-button" onClick={handleIncreaseKiwi}>+</button>
            </div></div>
            <button className="reset-button" type="button" onClick={resetForm}>Reset</button>

            </main>
    </>
  )
}

export default App
