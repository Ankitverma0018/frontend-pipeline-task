import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('custom-', ''));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      label="Input"
      handles={[
        { type: 'source', position: Position.Right, id: 'value' }
      ]}
    >
      <label>
        Name:
        <input 
          type="text" 
          value={currName} 
          onChange={handleNameChange} 
          style={{ display: 'block', marginBottom: '5px', width: '90%' }}
        />
      </label>
      <label>
        Type:
        <select value={inputType} onChange={handleTypeChange} style={{ width: '100%' }}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
};