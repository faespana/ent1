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
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={objStyle}
    >
      <h1 className="absolute top-20 text-2xl uppercase font-bold">
        Galleta de la Fortuna
      </h1>
      <article className="max-w-md p-6 bg-violet-700 bg-opacity-85 rounded-xl shadow-2xl">
        <Phrase newPhrase={phraseSelected} />
        <Button
          setPhraseSelected={setPhraseSelected}
          setBgSelected={setBgSelected}
        />
      </article>
    </div>
  );
}

export default App;
