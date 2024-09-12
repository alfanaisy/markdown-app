import Editor from './components/Editor';

import { useState } from 'react';
import Preview from './components/Preview';

const defaultValue = `# Welcome to my markdown previewer!`;

function App() {
  const [isEditorFullscreen, setIsEditorFullscreen] = useState(false);
  const [isPreviewFullscreen, setIsPreviewFullscreen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  console.log(value);
  return (
    <div className="app">
      {!isPreviewFullscreen && (
        <Editor
          value={value}
          setValue={setValue}
          isFullscreen={isEditorFullscreen}
          fullscreenHandler={() => setIsEditorFullscreen(!isEditorFullscreen)}
        />
      )}
      {!isEditorFullscreen && (
        <Preview
          value={value}
          isFullscreen={isPreviewFullscreen}
          fullscreenHandler={() => setIsPreviewFullscreen(!isPreviewFullscreen)}
        />
      )}
    </div>
  );
}

export default App;
