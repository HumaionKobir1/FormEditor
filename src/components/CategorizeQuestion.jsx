import React from 'react';

const CategorizeQuestion = () => {
  return (
    <div className="border p-4">
      <h2 className="text-lg font-bold mb-2">Categorize Question</h2>
      <div className="flex">
        <div
          id="categoryContainer"
          className="border p-4 mr-4"
          onDrop={(e) => drop(e)}
          onDragOver={(e) => allowDrop(e)}
        >
          <h3>Categories</h3>
          <div id="category1" className="category" draggable="true" onDragStart={(e) => drag(e)}>Category 1</div>
          <div id="category2" className="category" draggable="true" onDragStart={(e) => drag(e)}>Category 2</div>
        </div>
        <div
          id="optionsContainer"
          className="border p-4"
          onDrop={(e) => drop(e)}
          onDragOver={(e) => allowDrop(e)}
        >
          <h3>Options</h3>
          <div id="option1" className="option" draggable="true" onDragStart={(e) => drag(e)}>Option 1</div>
          <div id="option2" className="option" draggable="true" onDragStart={(e) => drag(e)}>Option 2</div>
        </div>
      </div>
    </div>
  );
};

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

export default CategorizeQuestion;
