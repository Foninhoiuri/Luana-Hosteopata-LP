// Worker da Cloudflare: os arquivos do site (dist/) são servidos pelos Static Assets.
// Este código só roda para /api/* (ver "run_worker_first" no wrangler.jsonc).
export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);

    if (pathname === '/api/health') {
      return Response.json({ ok: true });
    }

    if (pathname.startsWith('/api/')) {
      return Response.json({ ok: false, error: 'Rota não encontrada.' }, { status: 404 });
    }

    return env.ASSETS.fetch(request);
  },
};
