import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const MathNode = ({ id, data }) => {
  return (
    <BaseNode 
      id={id} 
      label="Math" 
      handles={[
        { type: 'target', position: Position.Left, id: 'num1', style: { top: '30%' } },
        { type: 'target', position: Position.Left, id: 'num2', style: { top: '70%' } },
        { type: 'source', position: Position.Right, id: 'result' }
      ]}
    >
      <select style={{ width: '100%' }}>
        <option>Add (+)</option>
        <option>Subtract (-)</option>
      </select>
    </BaseNode>
  );
};