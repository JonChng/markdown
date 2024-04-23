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
    <div className="App bg-gray-600">
      <Editor markdownText={markdownText} handleChange={handleChange} />
      <Preview markdownText={markdownText} />
    </div>
  );
}

function Editor(props) {
  return (
    <div className="mb-10">
      <p className='text-3xl text-white pt-7 pb-7'>Editor</p>
      <textarea className="text-black border-2 border-black bg-gray-300"id="editor" value={props.markdownText} onChange={props.handleChange} rows="10" cols="50" >
      
      </textarea>
    </div>
    
  );
}

function Preview(props){
  return (

    <div className="w-30 h-50">
      <p className='text-3xl text-white pt-7 pb-7'>Preview</p>

      <div id="preview"  dangerouslySetInnerHTML={{ __html: marked(props.markdownText) }} className='border-2 border-black w-13 pt-5 pb-5 bg-gray-300 text-black' >
      </div>
    </div>
    
  );
}

export default App;
