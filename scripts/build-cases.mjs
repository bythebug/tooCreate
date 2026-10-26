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
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${meta.title} — toocreate</title>
  <meta name="description" content="${meta.description || meta.title}" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <meta name="theme-color" content="#E8390C" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap" rel="stylesheet" />
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    :root{
      --orange:#E8390C;--orange-text:#C42D06;--yellow:#CDEF2E;--cream:#FFF4EC;--white:#FFFFFF;
      --ink:#1C1410;--ink-dim:rgba(28,20,16,0.7);--line:rgba(28,20,16,0.12);
      --font:'Hanken Grotesk',system-ui,-apple-system,sans-serif;
      --maxw:760px;--gutter:clamp(20px,5vw,64px);
      --ease:cubic-bezier(0.22,1,0.36,1);
    }
    html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
    body{font-family:var(--font);background:var(--white);color:var(--ink);min-height:100vh;-webkit-font-smoothing:antialiased}

    .cs-nav{
      position:sticky;top:0;z-index:100;
      padding:16px var(--gutter);
      background:rgba(255,255,255,0.88);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
      display:flex;align-items:center;gap:16px;
      border-bottom:1px solid var(--line);
    }
    .cs-back{font-size:0.92rem;font-weight:500;color:var(--ink-dim);text-decoration:none;transition:color 0.2s}
    .cs-back:hover{color:var(--ink)}
    .cs-nav-brand{font-size:1.3rem;font-weight:800;letter-spacing:-0.045em;color:var(--orange);margin-right:auto;text-decoration:none}

    .cs-hero{
      background:radial-gradient(120% 100% at 12% 0%,#F5541B 0%,var(--orange) 48%,#D33108 100%);
      color:var(--white);
      padding:clamp(80px,12vw,160px) var(--gutter) clamp(60px,8vw,100px);
    }
    .cs-hero-inner{width:100%;max-width:calc(var(--maxw) - 2 * var(--gutter));margin-inline:auto}
    .case-kicker{display:inline-block;margin-bottom:20px;font-size:0.9rem;font-weight:600;color:rgba(255,255,255,0.88)}
    .cs-hero h1{
      font-size:clamp(2rem,4.8vw,3.6rem);font-weight:800;
      line-height:1.04;letter-spacing:-0.035em;text-wrap:balance;margin-bottom:28px;
    }
    .cs-result{
      display:inline-block;background:var(--yellow);color:var(--ink);
      font-size:0.98rem;font-weight:700;padding:10px 18px;border-radius:100px;
    }

    .cs-body{max-width:var(--maxw);margin:0 auto;padding:clamp(48px,8vw,96px) var(--gutter)}
    .cs-body h2{
      font-size:clamp(1.4rem,2.8vw,1.9rem);font-weight:800;
      margin:56px 0 14px;line-height:1.15;letter-spacing:-0.02em;
    }
    .cs-body h2:first-child{margin-top:0}
    .cs-body h3{font-size:clamp(1rem,1.8vw,1.25rem);font-weight:700;margin:32px 0 10px}
    .cs-body p{font-size:1.08rem;line-height:1.75;color:var(--ink-dim);margin-bottom:20px}
    .cs-body ul,.cs-body ol{padding-left:24px;margin-bottom:20px}
    .cs-body li{font-size:1.08rem;line-height:1.7;color:var(--ink-dim);margin-bottom:8px}
    .cs-body li::marker{color:var(--orange)}
    .cs-body strong{color:var(--ink);font-weight:700}
    .cs-body em{font-style:italic}
    .cs-body blockquote{
      border-left:4px solid var(--yellow);
      padding:22px 28px;margin:40px 0;
      background:var(--cream);border-radius:0 12px 12px 0;
    }
    .cs-body blockquote p{color:var(--ink);font-size:1.15rem;font-style:italic;margin:0}
    .cs-body hr{border:none;border-top:1px solid var(--line);margin:56px 0}
    .cs-body a{color:var(--orange-text);text-underline-offset:3px}

    .cs-footer{text-align:center;padding:clamp(48px,8vw,80px) var(--gutter);border-top:1px solid var(--line)}
    .btn{
      display:inline-flex;align-items:center;gap:10px;
      background:var(--orange);color:var(--white);
      font-family:var(--font);font-size:0.98rem;font-weight:600;text-decoration:none;
      padding:15px 26px;border-radius:100px;
      transition:background 0.3s var(--ease);
    }
    .btn:hover{background:#F2470F}
    .btn-sm{padding:9px 18px;font-size:0.9rem}
    @media (max-width:420px){.cs-back{display:none}}
  </style>
</head>
<body>

  <nav class="cs-nav">
    <a href="../" class="cs-nav-brand">toocreate</a>
    <a href="../#work" class="cs-back">← All work</a>
    <a href="https://calendly.com/toocreate/30min" target="_blank" rel="noopener" class="btn btn-sm">Book a call</a>
  </nav>

  <header class="cs-hero">
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
    <a href="../#work" class="btn">← All case studies</a>
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
