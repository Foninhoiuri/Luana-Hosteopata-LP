# Luana Helena · Osteopata Especializada

Landing page em **React (Vite)** + **Node.js (Express)** para a osteopata Luana Helena — gestantes, pós-parto e bebês.

## Rodando localmente

Requer Node.js 18.11 ou superior.

```bash
npm install
npm run dev
```

- Site: http://localhost:5173
- API: http://localhost:3001 (o Vite repassa `/api` para ela)

## Produção

```bash
npm install
npm run build   # gera a pasta dist/
npm start       # Express serve dist/ na porta $PORT (padrão 3001)
```

### Hospedagem na Cloudflare (Worker + Static Assets)

O site é servido pelos Static Assets da Cloudflare (`dist/`); o Worker em `worker/index.js`
responde apenas às rotas `/api/*`. Configuração em `wrangler.jsonc`.

**Pelo painel (deploy automático a cada push):**
Workers & Pages → Create → Import a repository → este repositório, com:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

**Pelo terminal:**

```bash
npx wrangler login
npm run deploy
```

Teste local no ambiente da Cloudflare: `npm run cf:dev`.

Cabeçalhos de cache ficam em `client/public/_headers`. Limite da Cloudflare: 25 MiB por arquivo.

### Outras hospedagens

- **Servidor Node** (Render, Railway, VPS…): build `npm install && npm run build`, start `npm start`.
- **Hospedagem estática** (Vercel, Netlify…): build `npm run build`, pasta de saída `dist`.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Textos, WhatsApp, perguntas, benefícios | `client/src/content.js` |
| Estilos e cores | `client/src/styles.css` |
| Seções | `client/src/components/` |
| Fotos | `client/public/images/` |
| Vídeo vertical do hero (9:16) | `client/public/video/hero.mp4` |
| Vídeo da seção "Dores na gestação" (16:9) | `client/public/video/gestacao.mp4` |

Os vídeos devem estar em **MP4 H.264** para tocar em todos os navegadores (inclusive Safari/iPhone).
