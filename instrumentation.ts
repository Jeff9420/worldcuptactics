// Record the actual server runtime without exposing a public debug endpoint.
export function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    console.info('[security-runtime]', JSON.stringify({ node: process.version, release: '2026-10-22' }));
  }
}
