import React, { useState } from 'react';
import TextInput from '../ui/TextInput';
import Accordion from '../ui/Accordion';
import TextArea from '../ui/TextArea';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const inputChange = (value) => {
    setInputValue(value);
  };

  const textareaChange = (value) => {
    setTextareaValue(value);
  };

  const accordionItems = [
    { title: 'Section 1', content: 'Content for Section 1' },
    { title: 'Section 2', content: 'Content for Section 2' },
    { title: 'Section 3', content: 'Content for Section 3' },
  ];

  return (<>
     <div>
      <h1>Input</h1>
      <TextInput label="Enter Text:" value={inputValue} onChange={inputChange} placeholder="Please Text" />
      {/* <p>Entered Text: {inputValue}</p> */}
    </div>
    <div>
      <h1>Accordion</h1>
      <Accordion items={accordionItems} />
    </div>
    <div>
      <h1>React TextArea Component Example</h1>
      <TextArea label="Enter Text:" value={textareaValue} onChange={textareaChange} />
      {/* <p>Entered Text: {textareaValue}</p> */}
    </div>
  </>
  );
};

export default App;
