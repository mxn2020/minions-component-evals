import './App.css';

function App() {
    return (
        <div className="app">
            <header className="hero">
                <h1>Minions Component-evals</h1>
                <p className="tagline">Pipeline-level benchmarks for RAG, routing, and classification</p>
                <div className="cta-buttons">
                    <a href="https://component-evals.minions.help" className="btn btn-primary">
                        Documentation
                    </a>
                    <a href="https://github.com/mxn2020/minions-component-evals" className="btn btn-secondary">
                        GitHub
                    </a>
                </div>
            </header>

            <main className="content">
                <section className="features">
                    <div className="feature-card">
                        <h3>TypeScript SDK</h3>
                        <code>npm install @minions-component-evals/sdk</code>
                    </div>
                    <div className="feature-card">
                        <h3>Python SDK</h3>
                        <code>pip install minions-component-evals</code>
                    </div>
                    <div className="feature-card">
                        <h3>CLI Tool</h3>
                        <code>npm install -g @minions-component-evals/cli</code>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>
                    Built on the{' '}
                    <a href="https://github.com/mxn2020/minions">Minions SDK</a>
                </p>
            </footer>
        </div>
    );
}

export default App;
