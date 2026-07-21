export const LANDING_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dhaniels Store API — Nickname Validator</title>
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiMwYTBhMGEiLz4KICA8dGV4dCB4PSIzMiIgeT0iNDIiIGZvbnQtZmFtaWx5PSJKZXRCcmFpbnMgTW9ubywgbW9ub3NwYWNlIiBmb250LXNpemU9IjMwIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjZjVmNWY1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4mZ3Q7XzwvdGV4dD4KPC9zdmc+Cg==">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500;700&display=swap');

  :root{
    --bg:#0a0a0a;
    --panel:#141414;
    --line:#2a2a2a;
    --white:#f5f5f5;
    --gray:#8a8a8a;
    --gray-dim:#5c5c5c;
  }
  *{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  body{
    background:var(--bg);
    color:var(--white);
    font-family:'Space Grotesk',sans-serif;
    -webkit-font-smoothing:antialiased;
    min-height:100vh;
  }
  .mono{font-family:'JetBrains Mono',monospace;}

  nav{
    display:flex;align-items:center;justify-content:space-between;
    padding:22px 24px;
    border-bottom:1px solid var(--line);
  }
  .brand{display:flex;align-items:center;gap:10px;font-weight:700;font-size:17px;letter-spacing:-0.02em;}
  .brand .dot{width:8px;height:8px;background:var(--white);border-radius:1px;}
  .nav-links{display:flex;gap:22px;align-items:center;}
  .nav-links a{
    color:var(--gray);text-decoration:none;font-size:14px;
    font-family:'JetBrains Mono',monospace;
    transition:color .15s;
  }
  .nav-links a:hover, .nav-links a:focus-visible{color:var(--white);}
  .nav-links a.cta{
    color:var(--bg);background:var(--white);
    padding:8px 16px;border-radius:6px;font-weight:700;
  }
  .nav-links a.cta:hover{background:var(--gray);}

  main{max-width:960px;margin:0 auto;padding:0 24px;}

  .hero{padding:72px 0 48px;}
  .eyebrow{
    display:inline-flex;align-items:center;gap:8px;
    border:1px solid var(--line);border-radius:999px;
    padding:7px 14px;font-size:12.5px;
    font-family:'JetBrains Mono',monospace;color:var(--gray);
    margin-bottom:28px;
  }
  .eyebrow .ping{width:6px;height:6px;background:var(--white);border-radius:50%;
    animation:blink 1.6s infinite;}
  @keyframes blink{0%,100%{opacity:1;}50%{opacity:.15;}}

  h1{
    font-size:clamp(38px,7vw,64px);
    font-weight:700;line-height:1.04;letter-spacing:-0.03em;
    color:var(--gray-dim);
  }
  h1 .accent{color:var(--white);}

  .sub{
    margin-top:22px;font-size:17px;line-height:1.6;color:var(--gray);
    max-width:480px;
  }

  .actions{margin-top:36px;display:flex;gap:12px;flex-wrap:wrap;}
  .btn{
    display:inline-flex;align-items:center;gap:10px;
    padding:14px 22px;border-radius:8px;font-weight:700;font-size:15px;
    text-decoration:none;border:1px solid var(--line);
    font-family:'JetBrains Mono',monospace;
    transition:transform .12s, background .15s;
  }
  .btn:active{transform:scale(.98);}
  .btn-primary{background:var(--white);color:var(--bg);}
  .btn-primary:hover{background:var(--gray);}
  .btn-secondary{color:var(--white);}
  .btn-secondary:hover{border-color:var(--gray);}

  .tags{margin-top:28px;display:flex;gap:10px;flex-wrap:wrap;}
  .tag{
    font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--gray);
    border:1px solid var(--line);padding:6px 12px;border-radius:6px;
  }

  /* signature: terminal lookup card */
  .terminal{
    margin:56px 0 80px;
    background:var(--panel);
    border:1px solid var(--line);
    border-radius:12px;
    overflow:hidden;
  }
  .term-bar{
    display:flex;align-items:center;justify-content:space-between;
    padding:12px 16px;border-bottom:1px solid var(--line);
  }
  .term-dots{display:flex;gap:7px;}
  .term-dots span{width:9px;height:9px;border-radius:50%;background:var(--line);}
  .term-label{font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--gray-dim);}
  .term-body{padding:22px 20px;font-family:'JetBrains Mono',monospace;font-size:13.5px;line-height:1.9;}
  .term-body .in{color:var(--gray);}
  .term-body .in span{color:var(--white);}
  .term-body .out{color:var(--gray-dim);white-space:pre;}
  .term-body .key{color:var(--gray);}
  .term-body .val{color:var(--white);}
  .cursor{display:inline-block;width:7px;height:14px;background:var(--white);
    animation:blink 1s steps(2) infinite;vertical-align:middle;margin-left:2px;}

  .grid3{
    display:grid;grid-template-columns:repeat(3,1fr);gap:1px;
    background:var(--line);border:1px solid var(--line);border-radius:10px;
    overflow:hidden;margin-bottom:80px;
  }
  .grid3 .cell{background:var(--bg);padding:22px 20px;}
  .grid3 .num{font-family:'JetBrains Mono',monospace;color:var(--gray-dim);font-size:12px;}
  .grid3 h3{font-size:16px;margin-top:8px;font-weight:700;}
  .grid3 p{font-size:13.5px;color:var(--gray);margin-top:6px;line-height:1.55;}

  footer{
    border-top:1px solid var(--line);
    padding:24px;text-align:center;
    font-family:'JetBrains Mono',monospace;font-size:12.5px;color:var(--gray-dim);
  }

  @media (max-width:640px){
    .grid3{grid-template-columns:1fr;}
    .nav-links a:not(.cta){display:none;}
  }
</style>
</head>
<body>

<nav>
  <div class="brand"><span class="dot"></span>Dhaniels Store API</div>
  <div class="nav-links">
    <a href="/docs">Docs</a>
    <a href="/docs" class="cta">Buka Docs →</a>
  </div>
</nav>

<main>
  <div class="hero">
    <div class="eyebrow"><span class="ping"></span> Validator Nickname Game</div>
    <h1>Koleksi endpoint siap pakai untuk <span class="accent">Project</span> bot, aplikasi, dan eksperimenmu. Stabil dan gampang diintegrasikan.</h1>
    <p class="sub">Api yang dipakai oleh seluruh sistem Dhaniels Store, sekarang bisa lo pake juga.</p>

    <div class="actions">
      <a class="btn btn-primary" href="/docs">Lihat Dokumentasi →</a>
      <a class="btn btn-secondary" href="/nickname/ml?id=1114917746&server=13486">Coba Contoh Request</a>
    </div>

    <div class="tags">
      <span class="tag">Cepat & Ringan</span>
      <span class="tag">Response JSON Jelas</span>
      <span class="tag">dan Gratis</span>
    </div>
  </div>

  <div class="terminal">
    <div class="term-bar">
      <div class="term-dots"><span></span><span></span><span></span></div>
      <div class="term-label">GET /nickname/ml</div>
    </div>
    <div class="term-body">
      <div class="in">$ curl "api.dhanielsstore.com/nickname/ml?id=<span>123456789</span>&server=<span>12345</span>"</div>
      <div class="out">{
  <span class="key">"success"</span>: <span class="val">true</span>,
  <span class="key">"game"</span>: <span class="val">"Mobile Legends: Bang Bang"</span>,
  <span class="key">"id"</span>: <span class="val">123456789</span>,
  <span class="key">"server"</span>: <span class="val">12345</span>,
  <span class="key">"name"</span>: <span class="val">"Vipers Projects"</span>,
  <span class="key">"country"</span>: <span class="val">"Indonesia"</span>
}<span class="cursor"></span></div>
    </div>
  </div>

  <div class="grid3">
    <div class="cell">
      <div class="num">01</div>
      <h3>Mudah digunakan</h3>
      <p>Cukup kirim id (dan server kalau gamenya butuh).</p>
    </div>
    <div class="cell">
      <div class="num">02</div>
      <h3>Respon jelas & bersih</h3>
      <p>JSON polos: success, nama, dan detail akun. Gampang di-parse bot lo.</p>
    </div>
    <div class="cell">
      <div class="num">03</div>
      <h3>Free to Use</h3>
      <p>Sekarang Endpoint ini gratis karna masih uji coba hehe.</p>
    </div>
  </div>
</main>

<footer>© 2026 Dhaniels Store — api.dhanielsstore.com</footer>

</body>
</html>
`

export const DOCS_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Docs — Dhaniels Store API</title>
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiMwYTBhMGEiLz4KICA8dGV4dCB4PSIzMiIgeT0iNDIiIGZvbnQtZmFtaWx5PSJKZXRCcmFpbnMgTW9ubywgbW9ub3NwYWNlIiBmb250LXNpemU9IjMwIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjZjVmNWY1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4mZ3Q7XzwvdGV4dD4KPC9zdmc+Cg==">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500;700&display=swap');

  :root{
    --bg:#0a0a0a;
    --panel:#141414;
    --line:#2a2a2a;
    --white:#f5f5f5;
    --gray:#8a8a8a;
    --gray-dim:#5c5c5c;
    --green:#7fd18c;
  }
  *{box-sizing:border-box;margin:0;padding:0;}
  body{
    background:var(--bg);color:var(--white);
    font-family:'Space Grotesk',sans-serif;
    -webkit-font-smoothing:antialiased;
  }
  nav{
    display:flex;align-items:center;justify-content:space-between;
    padding:22px 24px;border-bottom:1px solid var(--line);
  }
  .brand{display:flex;align-items:center;gap:10px;font-weight:700;font-size:17px;letter-spacing:-0.02em;}
  .brand .dot{width:8px;height:8px;background:var(--white);border-radius:1px;}
  .nav-links a{
    color:var(--gray);text-decoration:none;font-size:14px;
    font-family:'JetBrains Mono',monospace;margin-left:22px;
  }
  .nav-links a:hover{color:var(--white);}

  main{max-width:820px;margin:0 auto;padding:48px 20px 100px;}

  h1{font-size:clamp(26px,5vw,38px);font-weight:700;letter-spacing:-0.02em;}
  .lede{color:var(--gray);margin-top:14px;font-size:15px;line-height:1.6;}

  .base-url{
    margin-top:24px;
    display:inline-flex;align-items:center;gap:10px;flex-wrap:wrap;
    border:1px solid var(--line);border-radius:8px;
    padding:12px 16px;font-family:'JetBrains Mono',monospace;font-size:13px;
    background:var(--panel);color:var(--gray);
  }
  .base-url b{color:var(--white);font-weight:500;}

  .section-title{
    display:flex;align-items:center;gap:10px;
    font-family:'JetBrains Mono',monospace;font-size:12.5px;
    text-transform:uppercase;letter-spacing:.08em;color:var(--gray-dim);
    margin:44px 0 16px;
  }
  .section-title::after{content:'';flex:1;height:1px;background:var(--line);}

  .ep-card{
    border:1px solid var(--line);border-radius:12px;
    background:var(--panel);
    margin-bottom:14px;
    overflow:hidden;
  }
  .ep-head{
    display:flex;align-items:center;justify-content:space-between;
    gap:10px;padding:16px 18px;flex-wrap:wrap;
  }
  .ep-title{display:flex;flex-direction:column;gap:4px;}
  .ep-title b{font-size:15.5px;font-weight:700;}
  .ep-title span{font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--gray);}
  .ep-badges{display:flex;gap:8px;flex-shrink:0;}
  .badge{
    font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;
    padding:4px 9px;border-radius:5px;border:1px solid var(--line);
    display:inline-flex;align-items:center;white-space:nowrap;
  }
  .badge-get{color:var(--white);}
  .badge-online{color:var(--green);border-color:rgba(127,209,140,.3);}

  .ep-try{
    border-top:1px solid var(--line);
    padding:14px 18px 18px;
    display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;
  }
  .field{display:flex;flex-direction:column;gap:5px;flex:1;min-width:110px;}
  .field label{
    font-family:'JetBrains Mono',monospace;font-size:10.5px;color:var(--gray-dim);
    text-transform:uppercase;letter-spacing:.05em;
  }
  .field input{
    background:var(--bg);border:1px solid var(--line);color:var(--white);
    border-radius:6px;padding:9px 10px;font-family:'JetBrains Mono',monospace;
    font-size:13px;width:100%;
  }
  .field input:focus{outline:none;border-color:var(--gray);}
  .field input::placeholder{color:var(--gray-dim);}

  .try-btn{
    background:var(--white);color:var(--bg);border:none;
    font-family:'JetBrains Mono',monospace;font-weight:700;font-size:13px;
    padding:10px 16px;border-radius:6px;cursor:pointer;flex-shrink:0;
  }
  .try-btn:active{transform:scale(.98);}

  .panel{
    background:var(--panel);border:1px solid var(--line);border-radius:10px;
    padding:20px;font-family:'JetBrains Mono',monospace;font-size:13px;line-height:1.9;
    overflow-x:auto;
  }
  .panel .c-key{color:var(--gray);}
  .panel .c-val{color:var(--white);}
  .panel .c-str{color:var(--green);}

  footer{border-top:1px solid var(--line);padding:24px;text-align:center;
    font-family:'JetBrains Mono',monospace;font-size:12.5px;color:var(--gray-dim);}
</style>
</head>
<body>

<nav>
  <div class="brand"><span class="dot"></span>Dhaniels Store API</div>
  <div class="nav-links">
    <a href="/">Beranda</a>
  </div>
</nav>

<main>
  <h1>Dokumentasi API</h1>
  <p class="lede">Lookup nickname akun berdasarkan ID, dari banyak game. Semua endpoint GET, hasilnya JSON. Isi ID di kolom bawah tiap endpoint terus pencet Try buat langsung nyoba.</p>

  <div class="base-url">Base URL &nbsp;<b>https://api.dhanielsstore.com</b></div>

  <div class="section-title">Endpoints</div>

  <div class="ep-card">
    <div class="ep-head">
      <div class="ep-title"><b>Arena Of Valor</b><span>/nickname/aov</span></div>
      <div class="ep-badges"><span class="badge badge-get">GET</span><span class="badge badge-online">ONLINE</span></div>
    </div>
    <form class="ep-try" action="/nickname/aov" method="get">
      <div class="field"><label>id</label><input type="text" name="id" placeholder="User ID" required></div>
      <button class="try-btn" type="submit">Try →</button>
    </form>
  </div>

  <div class="ep-card">
    <div class="ep-head">
      <div class="ep-title"><b>Call Of Duty Mobile</b><span>/nickname/codm</span></div>
      <div class="ep-badges"><span class="badge badge-get">GET</span><span class="badge badge-online">ONLINE</span></div>
    </div>
    <form class="ep-try" action="/nickname/codm" method="get">
      <div class="field"><label>id</label><input type="text" name="id" placeholder="User ID" required></div>
      <button class="try-btn" type="submit">Try →</button>
    </form>
  </div>

  <div class="ep-card">
    <div class="ep-head">
      <div class="ep-title"><b>Garena Free Fire</b><span>/nickname/ff</span></div>
      <div class="ep-badges"><span class="badge badge-get">GET</span><span class="badge badge-online">ONLINE</span></div>
    </div>
    <form class="ep-try" action="/nickname/ff" method="get">
      <div class="field"><label>id</label><input type="text" name="id" placeholder="User ID" required></div>
      <button class="try-btn" type="submit">Try →</button>
    </form>
  </div>

  <div class="ep-card">
    <div class="ep-head">
      <div class="ep-title"><b>Genshin Impact</b><span>/nickname/gi</span></div>
      <div class="ep-badges"><span class="badge badge-get">GET</span><span class="badge badge-online">ONLINE</span></div>
    </div>
    <form class="ep-try" action="/nickname/gi" method="get">
      <div class="field"><label>id</label><input type="text" name="id" placeholder="UID" required></div>
      <button class="try-btn" type="submit">Try →</button>
    </form>
  </div>

  <div class="ep-card">
    <div class="ep-head">
      <div class="ep-title"><b>Honkai Impact 3rd</b><span>/nickname/hi</span></div>
      <div class="ep-badges"><span class="badge badge-get">GET</span><span class="badge badge-online">ONLINE</span></div>
    </div>
    <form class="ep-try" action="/nickname/hi" method="get">
      <div class="field"><label>id</label><input type="text" name="id" placeholder="User ID" required></div>
      <button class="try-btn" type="submit">Try →</button>
    </form>
  </div>

  <div class="ep-card">
    <div class="ep-head">
      <div class="ep-title"><b>Honkai Star Rail</b><span>/nickname/hsr</span></div>
      <div class="ep-badges"><span class="badge badge-get">GET</span><span class="badge badge-online">ONLINE</span></div>
    </div>
    <form class="ep-try" action="/nickname/hsr" method="get">
      <div class="field"><label>id</label><input type="text" name="id" placeholder="UID" required></div>
      <button class="try-btn" type="submit">Try →</button>
    </form>
  </div>

  <div class="ep-card">
    <div class="ep-head">
      <div class="ep-title"><b>LifeAfter</b><span>/nickname/la</span></div>
      <div class="ep-badges"><span class="badge badge-get">GET</span><span class="badge badge-online">ONLINE</span></div>
    </div>
    <form class="ep-try" action="/nickname/la" method="get">
      <div class="field"><label>id</label><input type="text" name="id" placeholder="User ID" required></div>
      <div class="field"><label>zone</label><input type="text" name="zone" placeholder="cth: miskatown" required></div>
      <button class="try-btn" type="submit">Try →</button>
    </form>
  </div>

  <div class="ep-card">
    <div class="ep-head">
      <div class="ep-title"><b>Love and Deepspace</b><span>/nickname/ld</span></div>
      <div class="ep-badges"><span class="badge badge-get">GET</span><span class="badge badge-online">ONLINE</span></div>
    </div>
    <form class="ep-try" action="/nickname/ld" method="get">
      <div class="field"><label>id</label><input type="text" name="id" placeholder="User ID" required></div>
      <button class="try-btn" type="submit">Try →</button>
    </form>
  </div>

  <div class="ep-card">
    <div class="ep-head">
      <div class="ep-title"><b>Magic Chess: Go Go</b><span>/nickname/mcgg</span></div>
      <div class="ep-badges"><span class="badge badge-get">GET</span><span class="badge badge-online">ONLINE</span></div>
    </div>
    <form class="ep-try" action="/nickname/mcgg" method="get">
      <div class="field"><label>id</label><input type="text" name="id" placeholder="User ID" required></div>
      <div class="field"><label>server</label><input type="text" name="server" placeholder="Zone ID" required></div>
      <button class="try-btn" type="submit">Try →</button>
    </form>
  </div>

<div class="ep-card">
    <div class="ep-head">
      <div class="ep-title"><b>Mobile Legends: Bang Bang</b><span>/nickname/ml</span></div>
      <div class="ep-badges"><span class="badge badge-get">GET</span><span class="badge badge-online">ONLINE</span></div>
    </div>
    <form class="ep-try" action="/nickname/ml" method="get">
      <div class="field"><label>id</label><input type="text" name="id" placeholder="User ID" required></div>
      <div class="field"><label>server</label><input type="text" name="server" placeholder="Server" required></div>
      <button class="try-btn" type="submit">Try →</button>
    </form>
  </div>

  <div class="ep-card">
    <div class="ep-head">
      <div class="ep-title"><b>Point Blank</b><span>/nickname/pb</span></div>
      <div class="ep-badges"><span class="badge badge-get">GET</span><span class="badge badge-online">ONLINE</span></div>
    </div>
    <form class="ep-try" action="/nickname/pb" method="get">
      <div class="field"><label>id</label><input type="text" name="id" placeholder="User ID" required></div>
      <button class="try-btn" type="submit">Try →</button>
    </form>
  </div>

  <div class="ep-card">
    <div class="ep-head">
      <div class="ep-title"><b>Punishing: Gray Raven</b><span>/nickname/pgr</span></div>
      <div class="ep-badges"><span class="badge badge-get">GET</span><span class="badge badge-online">ONLINE</span></div>
    </div>
    <form class="ep-try" action="/nickname/pgr" method="get">
      <div class="field"><label>id</label><input type="text" name="id" placeholder="User ID" required></div>
      <div class="field"><label>zone</label><input type="text" name="zone" placeholder="ap / eu / na" required></div>
      <button class="try-btn" type="submit">Try →</button>
    </form>
  </div>

  <div class="ep-card">
    <div class="ep-head">
      <div class="ep-title"><b>Sausage Man</b><span>/nickname/sm</span></div>
      <div class="ep-badges"><span class="badge badge-get">GET</span><span class="badge badge-online">ONLINE</span></div>
    </div>
    <form class="ep-try" action="/nickname/sm" method="get">
      <div class="field"><label>id</label><input type="text" name="id" placeholder="User ID" required></div>
      <button class="try-btn" type="submit">Try →</button>
    </form>
  </div>

  <div class="ep-card">
    <div class="ep-head">
      <div class="ep-title"><b>Super Sus</b><span>/nickname/sus</span></div>
      <div class="ep-badges"><span class="badge badge-get">GET</span><span class="badge badge-online">ONLINE</span></div>
    </div>
    <form class="ep-try" action="/nickname/sus" method="get">
      <div class="field"><label>id</label><input type="text" name="id" placeholder="User ID" required></div>
      <button class="try-btn" type="submit">Try →</button>
    </form>
  </div>

  <div class="ep-card">
    <div class="ep-head">
      <div class="ep-title"><b>VALORANT</b><span>/nickname/valo</span></div>
      <div class="ep-badges"><span class="badge badge-get">GET</span><span class="badge badge-online">ONLINE</span></div>
    </div>
    <form class="ep-try" action="/nickname/valo" method="get">
      <div class="field"><label>id</label><input type="text" name="id" placeholder="Riot ID#Tag" required></div>
      <button class="try-btn" type="submit">Try →</button>
    </form>
  </div>

  <div class="ep-card">
    <div class="ep-head">
      <div class="ep-title"><b>Zenless Zone Zero</b><span>/nickname/zzz</span></div>
      <div class="ep-badges"><span class="badge badge-get">GET</span><span class="badge badge-online">ONLINE</span></div>
    </div>
    <form class="ep-try" action="/nickname/zzz" method="get">
      <div class="field"><label>id</label><input type="text" name="id" placeholder="UID" required></div>
      <button class="try-btn" type="submit">Try →</button>
    </form>
  </div>

  <div class="section-title">Contoh Response — Sukses</div>
  <div class="panel">{
  <span class="c-key">"success"</span>: <span class="c-val">true</span>,
  <span class="c-key">"game"</span>: <span class="c-str">"Mobile Legends: Bang Bang"</span>,
  <span class="c-key">"id"</span>: <span class="c-val">1234567</span>,
  <span class="c-key">"server"</span>: <span class="c-val">12345</span>,
  <span class="c-key">"name"</span>: <span class="c-str">"Vipers Projects"</span>,
  <span class="c-key">"country"</span>: <span class="c-str">"Indonesia"</span>
}</div>

  <div class="section-title">Contoh Response — Gagal</div>
  <div class="panel">{
  <span class="c-key">"success"</span>: <span class="c-val">false</span>,
  <span class="c-key">"message"</span>: <span class="c-str">"Bad request"</span>
}</div>
</main>

<footer>© 2026 Dhaniels Store — api.dhanielsstore.com</footer>

</body>
</html>
`
