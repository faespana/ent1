import { useState } from "react";
import "./App.css";
import quotes from "./data/phrases.json";
import photos from "./data/photos.json";
import getRandomNumber from "./utils/getRandomNumber";
import Phrase from "./components/Phrase";
import Button from "./components/Button";

function App() {
  const indexRandom = getRandomNumber(quotes.length);

  const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom]);

  const [bgSelected, setBgSelected] = useState(getRandomNumber(photos.length));

  const objStyle = {
    backgroundImage: `url(/images/fondo${bgSelected}.jpg)`,
  };
  return (
    <div style={objStyle}>
      <h1>Galleta de la Fortun</h1>
      <Phrase newPhrase={phraseSelected} />
      <Button
        setPhraseSelected={setPhraseSelected}
        setBgSelected={setBgSelected}
      />
    </div>
  );
}

export default App;
