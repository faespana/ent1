const Phrase = ({ newPhrase }) => {
  return (
    <div>
      <h2>{newPhrase.phrase}</h2>
      <h2>{newPhrase.author}</h2>
    </div>
  );
};

export default Phrase;
