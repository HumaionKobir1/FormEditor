import React from 'react';

const ComprehensionQuestion = () => {
  return (
    <div className="border p-4">
      <h2 className="text-lg font-bold mb-2">Comprehension Question</h2>
      {/* Add your UI elements for Comprehension question here */}
      <div>
        {/* Example UI elements */}
        <label htmlFor="comprehensionTextarea">Answer the question:</label>
        <textarea id="comprehensionTextarea" rows="4" cols="50" />
      </div>
    </div>
  );
};

export default ComprehensionQuestion;
