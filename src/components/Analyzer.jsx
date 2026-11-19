import Icon from './Icon';

const MAX_CHARS = 4000;

export default function Analyzer({ message, setMessage, onAnalyze, loading, error, onClearError }) {
  function submit(event) {
    event.preventDefault();
    onAnalyze();
  }

  return (
    <section className="analyzer-card" aria-labelledby="analyzer-title">
      <div className="panel-topline"/>
      <div className="panel-heading-row">
        <div className="panel-heading-left">
          <span className="section-icon"><Icon name="message" size={22}/></span>
          <div><h2 id="analyzer-title">Message Analyzer</h2><span className="analyzer-subtitle">Find out if a gaming chat message is toxic.</span></div>
        </div>
      </div>
      <form onSubmit={submit}>
        <div className="control-label message-control"><label htmlFor="message">Your message</label></div>
        <div className="message-field-wrap">
          <textarea
            id="message" value={message} onChange={event => { setMessage(event.target.value); onClearError(); }}
            placeholder={'Type a gaming message or paste a chat conversation...'}
            maxLength={MAX_CHARS} rows={8} aria-describedby="message-help"
            onKeyDown={event => { if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) { event.preventDefault(); onAnalyze(); } }}
          />
          <span className="field-watermark"><Icon name="corner" size={18}/></span>
        </div>
        <div className="field-bottom">
          <span id="message-help">You can also paste a chat transcript with player names.</span>
          <span className="char-counter">{message.length.toLocaleString()} / {MAX_CHARS.toLocaleString()}</span>
        </div>
        {error && (
          <div className="error-inline" role="alert"><Icon name="alert" size={17}/><span>{error}</span>
            <button type="button" onClick={onClearError} aria-label="Dismiss message"><Icon name="x" size={16}/></button>
          </div>
        )}
        <div className="analyzer-actions">
          <button type="submit" disabled={loading || !message.trim()} className="primary-action">
            {loading ? <><Icon className="spin" name="loader" size={18}/>Analyzing...</> : <><Icon name="sparkles" size={18}/>Analyze Message<Icon name="arrow" size={18}/></>}
          </button>
          <span className="action-note">Ctrl + Enter to analyze</span>
        </div>
      </form>
    </section>
  );
}
