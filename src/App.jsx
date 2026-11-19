import { useCallback, useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import Results from './pages/Results';
import How from './pages/How';
import About from './pages/About';
import { classifyMessage } from './services/api';
import { SAMPLE_RESULT } from './data/examples';
import { interpretInput } from './services/interpretInput';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useCallback((next) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  async function analyze() {
    if (loading || !message.trim()) return;
    setError('');
    setLoading(true);
    try {
      const input = interpretInput(message);
      const prediction = await classifyMessage(input);
      setResult({ ...prediction, ...input, rawInput: message.trim(), isDemo: false });
      navigate('results');
    } catch (problem) {
      setError(problem instanceof Error ? problem.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  function chooseExample(text) {
    setMessage(text);
    setError('');
    navigate('home');
    window.requestAnimationFrame(() => document.getElementById('message')?.focus());
  }

  function previewResult() {
    setResult(SAMPLE_RESULT);
    navigate('results');
  }

  return (
    <div className="app-shell">
      <Sidebar page={page} onNavigate={navigate} />
      <div className="app-main">
        <Header page={page} onNavigate={navigate} />
        <main id="main-content">
          {page === 'home' && (
            <Home
              analyzer={{ message, setMessage, loading, error, onAnalyze: analyze, onClearError: () => setError('') }}
              onChooseExample={chooseExample}
              onPreview={previewResult}
            />
          )}
          {page === 'results' && <Results result={result} onNewAnalysis={() => navigate('home')} />}
          {page === 'how' && <How />}
          {page === 'about' && <About />}
        </main>
        <footer className="app-footer">
          <span>© {new Date().getFullYear()} GameGuard AI</span>
          <span>Built to understand the conversation, not just the words.</span>
        </footer>
      </div>
    </div>
  );
}
