export function saveSubmission(type, data) {
  const submission = { type, ...data, createdAt: new Date().toISOString() }
  const storageKey = 'clube-intervalo-submissions'
  try {
    const current = JSON.parse(localStorage.getItem(storageKey) || '[]')
    localStorage.setItem(storageKey, JSON.stringify([...current, submission]))
  } catch {
    // A confirmação ainda funciona se o navegador bloquear o armazenamento local.
  }
  return `CI-${new Date().toISOString().slice(2, 10).replaceAll('-', '')}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`
}
