import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);

    const handleSubmit = async () => {
        try {
            // Backend add data
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            const data = await response.json();

            // Result Alert
            alert(
                `Pipeline Analysis Report:\n` +
                `-----------------------------\n` +
                `🟢 Number of Nodes: ${data.num_nodes}\n` +
                `🔵 Number of Edges: ${data.num_edges}\n` +
                `checking Is DAG (No Loops)?: ${data.is_dag}`
            );
        } catch (error) {
            console.error(error);
            alert("Error: Backend se connect nahi ho paya. Kya 'uvicorn' wala terminal chalu hai?");
        }
    };

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button 
                type="submit" 
                onClick={handleSubmit}
                style={{
                    padding: '10px 20px',
                    borderRadius: '5px',
                    background: '#5D3FD3', // VectorShift Purple color
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }}
            >
                Submit Pipeline
            </button>
        </div>
    );
}