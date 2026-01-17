import { useState, useEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TimeNode = ({ id, data }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <BaseNode id={id} label="Time" handles={[{ type: 'source', position: Position.Right, id: 'output' }]}>
      <div style={{ padding: '5px' }}>{time}</div>
    </BaseNode>
  );
};