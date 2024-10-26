import quotes from "../data/phrases.json";
import photos from "../data/photos.json";
import getRandomNumber from "../utils/getRandomNumber";

const Button = ({ setPhraseSelected, setBgSelected }) => {
  const handlePhrase = () => {
    const indexRandom = getRandomNumber(quotes.length);
    const indexRandom2 = getRandomNumber(photos.length);
    setPhraseSelected(quotes[indexRandom]);
    setBgSelected(photos[indexRandom2]);
  };

  return <button onClick={handlePhrase}>Ver otra</button>;
};

export default Button;
