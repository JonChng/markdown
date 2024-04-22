import React from 'react';
import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {

  const [markdownText, setMarkdownText] = useState(`# Header (H1 size)

  ## Sub header (H2 size)
  
  [Link](https://example.com)
  
  Inline code: \`console.log('Hello, World!')\`
  
  \`\`\`
  // Code block
  function greet(name) {
    return 'Hello, ' + name + '!';
  }
  \`\`\`
  
  - List item 1
  - List item 2
  - List item 3
  
  > Blockquote
  
  ![Image](https://example.com/image.jpg)
  
  **Bolded text**`);;

  const handleChange = (e) => {
    setMarkdownText(e.target.value);
  };

  return (
    <div className="App">
      <Editor markdownText={markdownText} handleChange={handleChange} />
      <Preview markdownText={markdownText} />
    </div>
  );
}

function Editor(props) {
  return (
    <textarea id="editor" value={props.markdownText} onChange={props.handleChange} rows="10" cols="50">
      
    </textarea>
  );
}

function Preview(props){
  return (
    <div id="preview" dangerouslySetInnerHTML={{__html: marked(props.markdownText)}}>
    </div>
  );
}

export default App;
