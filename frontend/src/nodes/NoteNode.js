import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  return (
    <BaseNode id={id} label="Sticky Note" handles={[]}>
      <textarea placeholder="Type notes..." style={{ width: '100%', height: '50px' }} />
    </BaseNode>
  );
};