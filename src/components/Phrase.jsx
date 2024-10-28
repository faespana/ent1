const Phrase = ({ newPhrase }) => {
  return (
    <div>
      <p className="italic text-white mb-5">{newPhrase.phrase}</p>
      {/* <h2>{newPhrase.author}</h2> */}
    </div>
  );
};

export default Phrase;
