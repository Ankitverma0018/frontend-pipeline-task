import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);
  const textareaRef = useRef(null);

  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    let match;
    const found = [];
    
    while ((match = regex.exec(currText)) !== null) {
      found.push(match[1]);
    }
    
    const uniqueVars = [...new Set(found)];
    setHandles(uniqueVars);

  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const nodeHandles = [
    { type: 'source', position: Position.Right, id: 'output' },
    
    ...handles.map((varName, index) => ({
      type: 'target',
      position: Position.Left,
      id: varName,
      style: { top: `${index * 20 + 50}px` } 
    }))
  ];

  return (
    <BaseNode
      id={id}
      label="Text"
      handles={nodeHandles}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ fontSize: '12px', marginBottom: '5px', color: '#666' }}>
          Type {'{{ variable }}'} to add handle:
        </label>
        
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          rows={1}
          style={{
            width: '100%',
            minHeight: '30px',
            resize: 'none',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '5px',
            fontFamily: 'monospace',
            overflow: 'hidden'
          }}
        />
      </div>
    </BaseNode>
  );
};