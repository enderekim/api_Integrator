import React, { useEffect, useState } from 'react';
import './App.css';

interface Parameter {
    id: number;
    name: string;
    value: string;
}

const ParameterList: React.FC = () => {
    const [parameters, setParameters] = useState<Parameter[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchParameters();
    }, []);

    const fetchParameters = async () => {
        try {
            const response = await fetch('http://localhost:5005/getparameterlist');
            if (!response.ok) {
                throw new Error('to fetch parameters : Hata ' + response.statusText);
            }
            const data = await response.json();
            setParameters(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading parameters...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Parameters</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {parameters.map(param => (
                        <tr key={param.id}>
                            <td>{param.id}</td>
                            <td>{param.name}</td>
                            <td>{param.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Parameter List</h1>
      </header>
      <main>
        <ParameterList />
      </main>
    </div>
  );
}

export default App;
