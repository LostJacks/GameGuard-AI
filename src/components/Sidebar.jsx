import Icon from './Icon';

const NAVIGATION = [
  { id: 'home', label: 'Analyzer', icon: 'home' },
  { id: 'results', label: 'Results', icon: 'analysis' },
  { id: 'how', label: 'How it works', icon: 'layers' },
  { id: 'about', label: 'About', icon: 'info' },
];

export default function Sidebar({ page, onNavigate }) {
  return (
    <aside className="sidebar" aria-label="Application navigation">
      <button className="brand-block brand-button" type="button" onClick={() => onNavigate('home')} aria-label="GameGuard AI home">
        <span className="brand-mark"><Icon name="shield" size={25} strokeWidth={1.7}/><span className="brand-mini-glint"/></span>
        <span className="brand-text"><strong>GAMEGUARD<span>.AI</span></strong><small>INTELLIGENT CHAT SAFETY</small></span>
      </button>
      <div className="sidebar-main">
        <p className="nav-title">NAVIGATION</p>
        <nav className="nav-stack" aria-label="Pages">
          {NAVIGATION.map(({ id, label, icon }) => (
            <button
              key={id} type="button" className={`side-link ${page === id ? 'is-active' : ''}`}
              aria-current={page === id ? 'page' : undefined}
              onClick={() => onNavigate(id)}
            >
              <Icon name={icon} size={19}/><span>{label}</span>
              {page === id && <span className="active-spark" aria-hidden="true"/>}
            </button>
          ))}
        </nav>
      </div>
      <div className="sidebar-bottom">
        <div className="side-feature">
          <span className="side-feature-sheen" aria-hidden="true"/>
          <span className="feature-icon"><Icon name="sparkles" size={17}/></span>
          <strong>Play hard. Speak better.</strong>
          <p>Helping make sense of competitive conversations, one message at a time.</p>
          <button type="button" onClick={() => onNavigate('about')} className="side-feature-link">
            Explore the project <Icon name="arrow" size={14}/>
          </button>
        </div>
        <span className="sidebar-copyright">GAMEGUARD AI · CHAT INTELLIGENCE</span>
      </div>
    </aside>
  );
}
