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

  return (
    <button
      className="ml-auto block cursor-pointer bg-violet-950 py-2 px-4 text-white rounded-md text-sm hover:brightness-200"
      onClick={handlePhrase}
    >
      Ver otra
    </button>
  );
};

export default Button;
