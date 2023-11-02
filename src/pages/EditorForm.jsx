import React, { useState } from 'react';
import CategorizeQuestion from '../components/CategorizeQuestion';
import ClozeQuestion from '../components/ClozeQuestion';
import ComprehensionQuestion from '../components/ComprehensionQuestion';

const FormEditor = () => {
  const [questions, setQuestions] = useState([]);
  const [questionType, setQuestionType] = useState('');

  const addQuestion = () => {
    let newQuestion;
    switch (questionType) {
      case 'categorize':
        newQuestion = <div className="bg-white p-4 rounded shadow-md"><CategorizeQuestion></CategorizeQuestion> </div>;
        break;
      case 'cloze':
        newQuestion = <div className="bg-white p-4 rounded shadow-md"><ClozeQuestion></ClozeQuestion> </div>;
        break;
      case 'comprehension':
        newQuestion = <div className="bg-white p-4 rounded shadow-md"><ComprehensionQuestion></ComprehensionQuestion> </div>;
        break;
      default:
        newQuestion = null;
    }
    setQuestions([...questions, newQuestion]);
  };

  const handleQuestionTypeChange = (e) => {
    setQuestionType(e.target.value);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Form Editor</h1>
      <div className="flex items-center space-x-4 mb-4">
        <select
          value={questionType}
          onChange={handleQuestionTypeChange}
          className="p-2 border rounded"
        >
          <option value="">Select Question Type</option>
          <option value="categorize">Categorize</option>
          <option value="cloze">Cloze</option>
          <option value="comprehension">Comprehension</option>
        </select>
        <button onClick={addQuestion} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Question
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {questions.map((question, index) => (
          <div key={index}>{question}</div>
        ))}
      </div>
    </div>
  );
};

export default FormEditor;
