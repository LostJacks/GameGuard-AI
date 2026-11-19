const BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000').replace(/\/$/, '');

// API integration only. No predicted labels are produced by this frontend.
// Single:  POST /api/predict         { message }
// Context: POST /api/predict/context { message, previous_messages }
export async function classifyMessage({ message, previousMessages = [] }) {
  const usesContext = previousMessages.length > 0;
  const route = usesContext ? '/api/predict/context' : '/api/predict';
  const payload = usesContext ? { message, previous_messages: previousMessages } : { message };
  let response;
  try {
    response = await fetch(`${BASE_URL}${route}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(20000),
    });
  } catch (error) {
    if (error?.name === 'TimeoutError') throw new Error('The analysis took too long. Please try again.');
    throw new Error('The analysis service is not available yet. You can explore a sample result while the model is being integrated.');
  }
  if (!response.ok) {
    let detail = '';
    try { const data = await response.json(); detail = typeof data.detail === 'string' ? data.detail : ''; } catch { /* ignore invalid error body */ }
    if (response.status === 404 && usesContext) throw new Error('Conversation analysis is not supported by the API yet. Please try a single message.');
    if (response.status === 503) throw new Error('The analysis model has not been loaded by the API yet.');
    throw new Error(detail || `The analysis service returned HTTP ${response.status}.`);
  }
  let data;
  try { data = await response.json(); } catch { throw new Error('The analysis service returned an invalid response.'); }
  const normalizedLabel = String(data.label ?? '').trim().toLowerCase().replace(/[\s-]+/g, ' ');
  if (!['toxic', 'not toxic', 'non toxic'].includes(normalizedLabel)) throw new Error('The service returned an unsupported classification.');
  const probability = data.toxicity_probability;
  // The service must expose a probability; we never invent one.
  if (typeof probability !== 'number' || !Number.isFinite(probability) || probability < 0 || probability > 1) {
    throw new Error('The service did not provide a valid toxicity probability.');
  }
  return {
    label: normalizedLabel === 'toxic' ? 'Toxic' : 'Not Toxic',
    toxicityProbability: probability,
    modelName: typeof data.model_name === 'string' && data.model_name.trim() ? data.model_name : 'GameGuard AI',
  };
}
