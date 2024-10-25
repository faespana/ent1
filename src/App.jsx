import { useState } from "react";
import "./App.css";
import quotes from "./data/phrases.json";
import getRandomNumber from "./utils/getRandomNumber";
import Phrase from "./components/Phrase";
import Button from "./components/Button";

function App() {
  const indexRandom = getRandomNumber(quotes.length);

  const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom]);

  const handlePhrase = () => {
    setPhraseSelected(
      (newPhraseSelected) =>
        (newPhraseSelected = quotes[getRandomNumber(quotes.length)])
    );
  };

  // console.log(phraseSelected);
  return (
    <div>
      <h1>Galleta de la Fortuna</h1>
      <Phrase newPhrase={phraseSelected} />
      <Button handlePhrase={handlePhrase} />
    </div>
  );
}

export default App;
