import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 3001;
const IS_PROD = process.env.NODE_ENV === 'production';
const DIST_DIR = path.resolve(__dirname, '../dist');

const app = express();
app.disable('x-powered-by');

/* ---------- API ---------- */
app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.use('/api', (_req, res) => res.status(404).json({ ok: false, error: 'Rota não encontrada.' }));

/* ---------- Front-end (produção) ---------- */
if (IS_PROD) {
  app.use(express.static(DIST_DIR, { maxAge: '7d', index: false }));
  app.get('*', (_req, res) => res.sendFile(path.join(DIST_DIR, 'index.html')));
}

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}${IS_PROD ? '' : ' (API)'}`);
});
