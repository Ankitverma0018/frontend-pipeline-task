from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PipelineData(BaseModel):
    nodes: List[Dict]
    edges: List[Dict]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineData):
    nodes = pipeline.nodes
    edges = pipeline.edges
    
    num_nodes = len(nodes)
    num_edges = len(edges)
    
    adj = {}
    for node in nodes:
        adj[node['id']] = []
    
    for edge in edges:
        source = edge['source']
        target = edge['target']
        if source in adj:
            adj[source].append(target)
            
    visited = set()
    rec_stack = set()
    is_dag = True
    
    def has_cycle(node):
        visited.add(node)
        rec_stack.add(node)
        
        if node in adj:
            for neighbor in adj[node]:
                if neighbor not in visited:
                    if has_cycle(neighbor):
                        return True
                elif neighbor in rec_stack:
                    return True
        
        rec_stack.remove(node)
        return False
    
    for node in nodes:
        node_id = node['id']
        if node_id not in visited:
            if has_cycle(node_id):
                is_dag = False
                break
    
    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}