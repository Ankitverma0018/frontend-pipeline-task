import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DateNode = ({ id, data }) => {
  const date = new Date().toLocaleDateString();
  return (
    <BaseNode id={id} label="Date" handles={[{ type: 'source', position: Position.Right, id: 'output' }]}>
      <div style={{ padding: '5px' }}>Date: {date}</div>
    </BaseNode>
  );
};