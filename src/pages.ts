export const LANDING_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dhaniels Store API — Nickname Validator</title>
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
    <h1>Tinggal Masukin ID Tujuan, dan <span class="accent">BOOM</span> Ketemu nicknamenya.</h1>
    <p class="sub">Api buat validasi ID game — dipakai oleh seluruh sistem Dhaniels Store, sekarang bisa lo pake juga.</p>

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

  main{max-width:960px;margin:0 auto;padding:56px 24px 100px;}

  h1{font-size:clamp(28px,5vw,40px);font-weight:700;letter-spacing:-0.02em;}
  .lede{color:var(--gray);margin-top:14px;font-size:15.5px;max-width:620px;line-height:1.6;}

  .base-url{
    margin-top:26px;
    display:inline-flex;align-items:center;gap:10px;
    border:1px solid var(--line);border-radius:8px;
    padding:12px 16px;font-family:'JetBrains Mono',monospace;font-size:14px;
    background:var(--panel);color:var(--gray);
  }
  .base-url b{color:var(--white);font-weight:500;}

  section{margin-top:52px;}
  .section-title{
    display:flex;align-items:center;gap:10px;
    font-family:'JetBrains Mono',monospace;font-size:13px;
    text-transform:uppercase;letter-spacing:.08em;color:var(--gray-dim);
    margin-bottom:16px;
  }
  .section-title::after{content:'';flex:1;height:1px;background:var(--line);}

  table{width:100%;border-collapse:collapse;font-size:13.5px;}
  th{
    text-align:left;font-family:'JetBrains Mono',monospace;
    font-size:11px;text-transform:uppercase;letter-spacing:.06em;
    color:var(--gray-dim);padding:0 12px 12px;border-bottom:1px solid var(--line);
    font-weight:500;
  }
  td{padding:13px 12px;border-bottom:1px solid var(--line);vertical-align:middle;}
  tr:last-child td{border-bottom:none;}
  .ep-name{font-weight:700;}
  .ep-path{color:var(--gray);font-family:'JetBrains Mono',monospace;font-size:12px;display:block;margin-top:3px;}
  .param{font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--gray);}
  .badge{
    font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;
    padding:4px 9px;border-radius:5px;border:1px solid var(--line);
    display:inline-block;white-space:nowrap;
  }
  .badge-get{color:var(--white);}
  .badge-online{color:var(--green);border-color:rgba(127,209,140,.3);}

  .panel{
    background:var(--panel);border:1px solid var(--line);border-radius:10px;
    padding:20px;font-family:'JetBrains Mono',monospace;font-size:13px;line-height:1.9;
    overflow-x:auto;
  }
  .panel .c-key{color:var(--gray);}
  .panel .c-val{color:var(--white);}
  .panel .c-str{color:var(--green);}

  .params-list{list-style:none;margin-top:4px;}
  .params-list li{
    display:flex;gap:14px;padding:12px 0;border-bottom:1px solid var(--line);
    font-size:14px;
  }
  .params-list li:last-child{border-bottom:none;}
  .params-list b{font-family:'JetBrains Mono',monospace;color:var(--white);min-width:70px;}
  .params-list span{color:var(--gray);}
  .req{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--gray-dim);border:1px solid var(--line);padding:2px 7px;border-radius:4px;margin-left:8px;}

  footer{border-top:1px solid var(--line);padding:24px;text-align:center;
    font-family:'JetBrains Mono',monospace;font-size:12.5px;color:var(--gray-dim);}

  @media (max-width:640px){
    th:nth-child(3), td:nth-child(3){display:none;}
  }
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
  <p class="lede">Satu API buat lookup nickname akun berdasarkan ID, dari banyak game. Semua endpoint dipanggil dengan GET dan hasilnya JSON.</p>

  <div class="base-url">Base URL &nbsp;<b>https://api.dhanielsstore.com</b></div>

  <section>
    <div class="section-title">Daftar Endpoint</div>
    <table>
      <thead>
        <tr>
          <th>Game</th>
          <th>Parameter</th>
          <th>Method</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><span class="ep-name">Arena Of Valor</span><span class="ep-path">/nickname/aov</span></td><td class="param">id</td><td><span class="badge badge-get">GET</span></td><td><span class="badge badge-online">ONLINE</span></td></tr>
        <tr><td><span class="ep-name">Call Of Duty Mobile</span><span class="ep-path">/nickname/codm</span></td><td class="param">id</td><td><span class="badge badge-get">GET</span></td><td><span class="badge badge-online">ONLINE</span></td></tr>
        <tr><td><span class="ep-name">Garena Free Fire</span><span class="ep-path">/nickname/ff</span></td><td class="param">id</td><td><span class="badge badge-get">GET</span></td><td><span class="badge badge-online">ONLINE</span></td></tr>
        <tr><td><span class="ep-name">Genshin Impact</span><span class="ep-path">/nickname/gi</span></td><td class="param">id</td><td><span class="badge badge-get">GET</span></td><td><span class="badge badge-online">ONLINE</span></td></tr>
        <tr><td><span class="ep-name">Honkai Impact 3rd</span><span class="ep-path">/nickname/hi</span></td><td class="param">id</td><td><span class="badge badge-get">GET</span></td><td><span class="badge badge-online">ONLINE</span></td></tr>
        <tr><td><span class="ep-name">Honkai Star Rail</span><span class="ep-path">/nickname/hsr</span></td><td class="param">id</td><td><span class="badge badge-get">GET</span></td><td><span class="badge badge-online">ONLINE</span></td></tr>
        <tr><td><span class="ep-name">LifeAfter</span><span class="ep-path">/nickname/la</span></td><td class="param">id, zone</td><td><span class="badge badge-get">GET</span></td><td><span class="badge badge-online">ONLINE</span></td></tr>
        <tr><td><span class="ep-name">Love and Deepspace</span><span class="ep-path">/nickname/ld</span></td><td class="param">id</td><td><span class="badge badge-get">GET</span></td><td><span class="badge badge-online">ONLINE</span></td></tr>
        <tr><td><span class="ep-name">Magic Chess: Go Go</span><span class="ep-path">/nickname/mcgg</span></td><td class="param">id, server</td><td><span class="badge badge-get">GET</span></td><td><span class="badge badge-online">ONLINE</span></td></tr>
        <tr><td><span class="ep-name">Mobile Legends: Bang Bang</span><span class="ep-path">/nickname/ml</span></td><td class="param">id, server</td><td><span class="badge badge-get">GET</span></td><td><span class="badge badge-online">ONLINE</span></td></tr>
        <tr><td><span class="ep-name">Point Blank</span><span class="ep-path">/nickname/pb</span></td><td class="param">id</td><td><span class="badge badge-get">GET</span></td><td><span class="badge badge-online">ONLINE</span></td></tr>
        <tr><td><span class="ep-name">Punishing: Gray Raven</span><span class="ep-path">/nickname/pgr</span></td><td class="param">id, zone</td><td><span class="badge badge-get">GET</span></td><td><span class="badge badge-online">ONLINE</span></td></tr>
        <tr><td><span class="ep-name">Sausage Man</span><span class="ep-path">/nickname/sm</span></td><td class="param">id</td><td><span class="badge badge-get">GET</span></td><td><span class="badge badge-online">ONLINE</span></td></tr>
        <tr><td><span class="ep-name">Super Sus</span><span class="ep-path">/nickname/sus</span></td><td class="param">id</td><td><span class="badge badge-get">GET</span></td><td><span class="badge badge-online">ONLINE</span></td></tr>
        <tr><td><span class="ep-name">VALORANT</span><span class="ep-path">/nickname/valo</span></td><td class="param">id</td><td><span class="badge badge-get">GET</span></td><td><span class="badge badge-online">ONLINE</span></td></tr>
        <tr><td><span class="ep-name">Zenless Zone Zero</span><span class="ep-path">/nickname/zzz</span></td><td class="param">id</td><td><span class="badge badge-get">GET</span></td><td><span class="badge badge-online">ONLINE</span></td></tr>
      </tbody>
    </table>
  </section>

  <section>
    <div class="section-title">Catatan Parameter</div>
    <ul class="params-list">
      <li><b>id</b><span>User ID akun game tujuan. <span class="req">wajib, semua endpoint</span></span></li>
      <li><b>server / zone</b><span>Diperlukan cuma di beberapa game: ML &amp; MCGG pakai zone ID angka, PGR pakai kode <code>ap</code>/<code>eu</code>/<code>na</code>, LifeAfter pakai nama server (contoh: <code>miskatown</code>).</span></li>
    </ul>
  </section>

  <section>
    <div class="section-title">Contoh Request — Mobile Legends</div>
    <div class="panel">GET https://api.dhanielsstore.com/nickname/ml?id=1114917746&server=13486</div>
  </section>

  <section>
    <div class="section-title">Contoh Response — Sukses</div>
    <div class="panel">{
  <span class="c-key">"success"</span>: <span class="c-val">true</span>,
  <span class="c-key">"game"</span>: <span class="c-str">"Mobile Legends: Bang Bang"</span>,
  <span class="c-key">"id"</span>: <span class="c-val">1114917746</span>,
  <span class="c-key">"server"</span>: <span class="c-val">13486</span>,
  <span class="c-key">"name"</span>: <span class="c-str">"Outrageous Dominance"</span>,
  <span class="c-key">"country"</span>: <span class="c-str">"Indonesia"</span>
}</div>
  </section>

  <section>
    <div class="section-title">Contoh Response — Gagal</div>
    <div class="panel">{
  <span class="c-key">"success"</span>: <span class="c-val">false</span>,
  <span class="c-key">"message"</span>: <span class="c-str">"Bad request"</span>
}</div>
  </section>
</main>

<footer>© 2026 Dhaniels Store — api.dhanielsstore.com</footer>

</body>
</html>
`
