/* eslint-disable react/prop-types */
import { marked } from 'marked';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';

import { useMemo } from 'react';

import './preview.css';

marked.setOptions({
  breaks: true,
  gfm: true,
  smartLists: true,
  smartypants: true,
  xhtml: true,
});

const Preview = ({ value, isFullscreen, fullscreenHandler }) => {
  const parsedValue = useMemo(() => marked(value), [value]);

  return (
    <div className="preview-wrapper">
      <div className="tools">
        <p>Previewer</p>
        {isFullscreen ? (
          <MdFullscreenExit size={20} onClick={fullscreenHandler} />
        ) : (
          <MdFullscreen size={20} onClick={fullscreenHandler} />
        )}
      </div>
      <div id="preview" className={`${isFullscreen ? 'fullscreen' : ''}`}>
        <div dangerouslySetInnerHTML={{ __html: parsedValue }} />
      </div>
    </div>
  );
};

export default Preview;
