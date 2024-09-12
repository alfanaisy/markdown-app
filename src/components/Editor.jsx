import './editor.css';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';

// eslint-disable-next-line react/prop-types
const Editor = ({ value, setValue, isFullscreen, fullscreenHandler }) => {
  return (
    <div className="editor-wrapper">
      <div className="tools">
        <p>Editor</p>
        {isFullscreen ? (
          <MdFullscreenExit size={20} onClick={fullscreenHandler} />
        ) : (
          <MdFullscreen size={20} onClick={fullscreenHandler} />
        )}
      </div>
      <textarea
        id="editor"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`${isFullscreen ? 'fullscreen' : ''}`}
      ></textarea>
    </div>
  );
};

export default Editor;
