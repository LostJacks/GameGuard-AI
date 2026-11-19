// An intentionally conservative parser: only infer conversation context when
// every non-blank line has a clear "Player: message" style prefix.
// Plain multiline text is treated as ONE message, never silently reinterpreted.
const SPEAKER_LINE = /^(?:\[\d{1,2}:\d{2}(?::\d{2})?\]\s*)?(?:[\p{L}\p{N}_ .\-]{1,28}):\s*(\S.*)$/u;

export function interpretInput(text) {
  const raw = String(text || '').trim();
  const lines = raw.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
  if (lines.length < 2 || lines.length > 40) return { message: raw, previousMessages: [] };
  const matches = lines.map(line => line.match(SPEAKER_LINE));
  if (matches.some(match => !match)) return { message: raw, previousMessages: [] };
  return {
    message: matches.at(-1)[1],
    previousMessages: matches.slice(0, -1).map(match => match[1]),
  };
}
