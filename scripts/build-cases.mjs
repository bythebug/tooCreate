import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CASES_DIR = join(ROOT, 'case-studies');

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: content };
  const meta = {};
  for (const line of match[1].split(/\r?\n/)) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const val = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, '');
    if (key) meta[key] = val;
  }
  return { meta, body: match[2].trim() };
}

function renderPage(slug, meta, body) {
  const htmlBody = marked.parse(body);
  const gradient = meta.gradient || '135deg,#3a1a0a,#1c0601';
  const imageTag = meta.image
    ? `<img class="cs-hero-bg" src="${meta.image}" alt="" aria-hidden="true" />`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${meta.title} — toocreate</title>
  <meta name="description" content="${meta.description || meta.title}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,500&display=swap" rel="stylesheet" />
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    :root{
      --orange:#E8390C;--lime:#CDEF2E;
      --orange-ink:#2B0A02;--orange-ink-2:#1C0601;
      --cream:#FFF4EC;--cream-dim:rgba(255,244,236,0.66);--cream-faint:rgba(255,244,236,0.32);
      --font:'Hanken Grotesk',system-ui,-apple-system,sans-serif;
      --maxw:760px;--gutter:clamp(20px,5vw,64px);
      --ease:cubic-bezier(0.22,1,0.36,1);
    }
    html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
    body{font-family:var(--font);background:var(--orange-ink-2);color:var(--cream);min-height:100vh}

    .cs-nav{
      position:sticky;top:0;z-index:100;
      padding:16px var(--gutter);
      background:rgba(28,6,1,0.88);backdrop-filter:blur(14px);
      -webkit-backdrop-filter:blur(14px);
      display:flex;align-items:center;gap:16px;
      border-bottom:1px solid rgba(255,244,236,0.06);
    }
    .cs-back{
      font-size:0.75rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;
      color:var(--cream-dim);text-decoration:none;
      display:inline-flex;align-items:center;gap:6px;
      transition:color 0.2s;
    }
    .cs-back:hover{color:var(--cream)}
    .cs-nav-brand{font-size:0.9rem;font-weight:900;letter-spacing:0.04em;color:var(--cream)}

    .cs-hero{
      position:relative;overflow:hidden;
      padding:clamp(80px,12vw,160px) var(--gutter) clamp(60px,8vw,100px);
      display:flex;flex-direction:column;
    }
    .cs-hero-bg{
      position:absolute;inset:0;width:100%;height:100%;
      object-fit:cover;opacity:0.2;mix-blend-mode:luminosity;
    }
    .cs-hero::before{
      content:'';position:absolute;inset:0;z-index:1;
      background:linear-gradient(180deg,rgba(28,6,1,0) 30%,rgba(28,6,1,0.7) 100%);
    }
    .cs-hero-inner{position:relative;z-index:2;max-width:var(--maxw)}
    .case-kicker{
      display:inline-block;margin-bottom:20px;
      font-size:0.7rem;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;
      color:var(--lime);border:1px solid rgba(205,239,46,0.35);
      padding:6px 14px;border-radius:100px;
    }
    .cs-hero h1{
      font-size:clamp(1.9rem,4.5vw,3.2rem);font-weight:900;
      line-height:1.08;letter-spacing:-0.02em;
      color:var(--cream);margin-bottom:24px;
    }
    .cs-result{
      display:inline-flex;align-items:center;gap:8px;
      font-size:0.88rem;font-weight:700;color:var(--lime);
    }

    .cs-body{
      max-width:var(--maxw);margin:0 auto;
      padding:clamp(48px,8vw,96px) var(--gutter);
    }
    .cs-body h2{
      font-size:clamp(1.3rem,2.8vw,1.8rem);font-weight:800;
      color:var(--cream);margin:56px 0 14px;line-height:1.15;
      letter-spacing:-0.01em;
    }
    .cs-body h2:first-child{margin-top:0}
    .cs-body h3{
      font-size:clamp(1rem,1.8vw,1.25rem);font-weight:700;
      color:var(--cream);margin:32px 0 10px;
    }
    .cs-body p{
      font-size:1.05rem;line-height:1.78;
      color:var(--cream-dim);margin-bottom:20px;
    }
    .cs-body ul,.cs-body ol{padding-left:24px;margin-bottom:20px}
    .cs-body li{
      font-size:1.05rem;line-height:1.75;
      color:var(--cream-dim);margin-bottom:8px;
    }
    .cs-body strong{color:var(--cream);font-weight:700}
    .cs-body em{font-style:italic}
    .cs-body blockquote{
      border-left:3px solid var(--orange);
      padding:20px 28px;margin:40px 0;
      background:rgba(232,57,12,0.07);border-radius:0 10px 10px 0;
    }
    .cs-body blockquote p{color:var(--cream);font-size:1.1rem;font-style:italic;margin:0}
    .cs-body hr{border:none;border-top:1px solid rgba(255,244,236,0.08);margin:56px 0}
    .cs-body a{color:var(--lime);text-underline-offset:3px}

    .cs-footer{
      text-align:center;
      padding:clamp(48px,8vw,80px) var(--gutter);
      border-top:1px solid rgba(255,244,236,0.06);
    }
    .btn{
      display:inline-block;
      background:var(--orange);color:var(--cream);
      font-family:var(--font);font-size:0.82rem;font-weight:800;
      letter-spacing:0.1em;text-transform:uppercase;text-decoration:none;
      padding:14px 32px;border-radius:100px;
      transition:background 0.2s var(--ease),transform 0.2s var(--ease);
    }
    .btn:hover{background:#F1490E;transform:translateY(-2px)}
  </style>
</head>
<body>

  <nav class="cs-nav">
    <a href="../index.html" class="cs-back">← Back</a>
    <span class="cs-nav-brand">toocreate</span>
  </nav>

  <header class="cs-hero" style="background:linear-gradient(${gradient})">
    ${imageTag}
    <div class="cs-hero-inner">
      <span class="case-kicker">${meta.kicker || 'Case Study'}</span>
      <h1>${meta.title}</h1>
      ${meta.result ? `<p class="cs-result">${meta.result}</p>` : ''}
    </div>
  </header>

  <article class="cs-body">
    ${htmlBody}
  </article>

  <footer class="cs-footer">
    <a href="../index.html#work" class="btn">← All Case Studies</a>
  </footer>

</body>
</html>`;
}

const files = readdirSync(CASES_DIR).filter(f => f.endsWith('.md'));
let count = 0;
for (const file of files) {
  const slug = basename(file, '.md');
  const raw = readFileSync(join(CASES_DIR, file), 'utf-8');
  const { meta, body } = parseFrontmatter(raw);
  if (!meta.title) { console.warn(`Skipping ${file}: missing title in frontmatter`); continue; }
  const html = renderPage(slug, meta, body);
  writeFileSync(join(CASES_DIR, `${slug}.html`), html, 'utf-8');
  console.log(`✓  case-studies/${slug}.html`);
  count++;
}
console.log(`\nBuilt ${count} case study page(s).`);
