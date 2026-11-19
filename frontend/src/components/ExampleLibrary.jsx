import Icon from './Icon';
import { EXAMPLES } from '../data/examples';

export default function ExampleLibrary({ onSelect, onPreview }) {
  return (
    <aside className="insight-column" aria-labelledby="examples-title">
      <div className="examples-card">
        <div className="examples-header"><div><h3 id="examples-title">Example Messages</h3></div><span className="examples-header-icon"><Icon name="zap" size={19}/></span></div>
        <p className="examples-subtitle">Try a message to see how the analyzer works.</p>
        <div className="examples-list">
          {EXAMPLES.map((item) => (
            <button key={item.id} className="example-item" type="button" onClick={() => onSelect(item.message)} title="Use this message">
              <span className={`example-index ${item.tone}`}><Icon name={item.icon} size={16}/></span>
              <span className="example-copy"><span className="example-kind">{item.category}</span><strong>“{item.message}”</strong><small>{item.description}</small></span>
              <Icon name="arrow" size={16}/>
            </button>
          ))}
        </div>
        <p className="examples-bottom"><Icon name="info" size={15}/><span>Examples fill the input; they don't make a prediction.</span></p>
      </div>
      <div className="sample-preview-card">
        <div className="sample-icon"><Icon name="analysis" size={22}/></div>
        <div><span className="mini-label">EXPLORE THE INTERFACE</span><strong>See an example result</strong>
          <p>Take a look at the results layout using clearly marked sample data.</p>
          <button type="button" className="sample-preview-link" onClick={onPreview}>View sample result <Icon name="arrow" size={15}/></button>
        </div>
      </div>
    </aside>
  );
}
