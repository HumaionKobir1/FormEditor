import React, { useState } from 'react';

const ClozeQuestion = () => {
  const [sentence, setSentence] = useState(['This', 'is', 'a', 'sentence', '_____', '.']);

  const reorderSentence = (startIndex, endIndex) => {
    const list = Array.from(sentence);
    const [removed] = list.splice(startIndex, 1);
    list.splice(endIndex, 0, removed);
    setSentence(list);
  };

  return (
    <div className="border p-4">
      <h2 className="text-lg font-bold mb-2">Cloze Question</h2>
      <p>
        {sentence.map((word, index) => (
          <span key={index} draggable="true" onDragStart={() => reorderSentence(index, sentence.length - 1)}>
            {word}{' '}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ClozeQuestion;
