import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, label, children, handles = [] }) => {
  let borderColor = '#555';
  let headerColor = '#f5f5f5';
  let titleColor = '#333';

  switch (label) {
    case 'Input':
      borderColor = '#3498db'; // Blue
      headerColor = '#ebf5fb';
      titleColor = '#2980b9';
      break;
    case 'Output':
      borderColor = '#2ecc71'; // Green
      headerColor = '#eafaf1';
      titleColor = '#27ae60';
      break;
    case 'LLM':
      borderColor = '#9b59b6'; // Purple
      headerColor = '#f5eef8';
      titleColor = '#8e44ad';
      break;
    case 'Text':
      borderColor = '#e67e22'; // Orange
      headerColor = '#fdf2e9';
      titleColor = '#d35400';
      break;
    case 'Date':
      borderColor = '#e74c3c'; // Red
      headerColor = '#fdedec';
      titleColor = '#c0392b';
      break;
    case 'Time':
      borderColor = '#1abc9c'; 
      headerColor = '#e8f8f5';
      titleColor = '#16a085';
      break;
    case 'Sticky Note':
      borderColor = '#f1c40f'; // Yellow
      headerColor = '#fef9e7';
      titleColor = '#d4ac0d';
      break;
    case 'Send Email': 
      borderColor = '#34495e'; // Dark Blue
      headerColor = '#ebedef';
      titleColor = '#2c3e50';
      break;
    case 'Math':
      borderColor = '#e91e63'; // Pink
      headerColor = '#fce4ec';
      titleColor = '#c2185b';
      break;
    default:
      break;
  }

  return (
    <div style={{ 
      background: '#fff', 
      border: `2px solid ${borderColor}`,
      borderRadius: '8px', 
      minWidth: '200px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      fontFamily: 'sans-serif',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{ 
        background: headerColor, 
        padding: '8px 12px', 
        fontWeight: 'bold', 
        color: titleColor,
        borderBottom: `1px solid ${borderColor}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <span>{label}</span>
        <div style={{width: '8px', height: '8px', borderRadius: '50%', background: titleColor}}></div>
      </div>

      {/* Body */}
      <div style={{ padding: '15px' }}>
        {children}
      </div>

      {/* Handles (Wires) */}
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={{
            ...handle.style,
            background: titleColor,
            border: `2px solid #fff`,
            width: '12px',
            height: '12px',
          }}
        />
      ))}
    </div>
  );
};