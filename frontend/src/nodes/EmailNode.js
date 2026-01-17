import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const EmailNode = ({ id, data }) => {
  return (
    <BaseNode 
      id={id} 
      label="Send Email" 
      handles={[
        { type: 'target', position: Position.Left, id: 'trigger' }
      ]}
    >
      <input type="email" placeholder="To: email@example.com" style={{ width: '100%' }} />
    </BaseNode>
  );
};