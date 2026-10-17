// Local, self-contained SVG artwork for the profile. No remote badge services.
const fs = require('node:fs');
const path = require('node:path');
const out = path.join(__dirname, '../docs/assets');
fs.mkdirSync(out, { recursive: true });
const esc = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
const font = 'Segoe UI, Arial, sans-serif';
const icons = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  file: '<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8zM14 3v5h5M9 12h6M9 16h6"/>',
  person: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
  mail: '<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
  play: '<path d="m8 4 13 8-13 8z"/>',
  code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18"/>',
  game: '<path d="M7 7h10a4 4 0 0 1 3.9 3.2l1.5 7.2a2.6 2.6 0 0 1-4.3 2.4L15 17H9l-3.1 2.8a2.6 2.6 0 0 1-4.3-2.4l1.5-7.2A4 4 0 0 1 7 7Z"/><path d="M7 10v5m-2.5-2.5h5M15.5 11h.01M18 14h.01"/>',
  server: '<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01M12 6.5h5M12 17.5h5"/>',
  nodes: '<path d="m7 7 10 3m-10 0 4 7m6-4-3 4"/><circle cx="5" cy="7" r="3"/><circle cx="19" cy="11" r="3"/><circle cx="12" cy="20" r="3"/>',
  layers: '<path d="m12 3 10 5-10 5L2 8zM2 12l10 5 10-5M2 16l10 5 10-5"/>',
};
const icon = (kind, color, x, y, size = 22) => `<g transform="translate(${x} ${y}) scale(${size / 24})" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icons[kind]}</g>`;
function svg(w, h, title, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title"><title id="title">${esc(title)}</title>${body}</svg>\n`;
}
function write(name, content) { fs.writeFileSync(path.join(out, name + '.svg'), content); }
function button(name, label, kind, primary = false, width = 144) {
  const bg = primary ? '#79d6ff' : '#14243a';
  const fg = primary ? '#081827' : '#f1f6fc';
  const border = primary ? '#9ce2ff' : '#496580';
  write('button-' + name, svg(width, 44, label,
    `<rect x=".75" y=".75" width="${width-1.5}" height="42.5" rx="9" fill="${bg}" stroke="${border}" stroke-width="1.5"/>` +
    icon(kind, fg, 17, 11, 21) +
    `<text x="47" y="27.5" font-family="${font}" font-size="14.5" font-weight="600" fill="${fg}">${esc(label)}</text>`));
}
button('portfolio', 'Portfolio', 'grid', true);
button('cv', 'CV · PDF', 'file');
button('linkedin', 'LinkedIn', 'person');
button('email', 'Email me', 'mail');
button('gameplay', 'Watch gameplay', 'play', true, 182);
button('case-study', 'Case study', 'file', false, 150);
button('backend', 'Backend case study', 'server', true, 210);
button('source', 'Explore source', 'code', true, 180);
button('walkthrough', 'Code walkthrough', 'file', false, 202);
button('game-cv', 'Unity CV · PDF', 'file', false, 178);
for (const [kind, color] of Object.entries({game:'#237ba3',server:'#6265c9',nodes:'#237ba3',layers:'#237ba3',code:'#237ba3'})) {
  write('icon-' + kind, svg(28,28,kind,`<rect width="28" height="28" rx="7" fill="${color}"/>`+icon(kind, '#ffffff', 5, 5, 18)));
}
// Compact brand banner. The name, role and evidence remain selectable README text.
const hero = `<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#102035"/><stop offset="1" stop-color="#0b1422"/></linearGradient>
  <linearGradient id="accent"><stop stop-color="#79d6ff"/><stop offset="1" stop-color="#a6afff"/></linearGradient>
  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#456180" stroke-width=".7" opacity=".25"/></pattern>
</defs>
<rect x="1" y="1" width="1198" height="238" rx="18" fill="url(#bg)" stroke="#34506c" stroke-width="2"/>
<rect x="720" y="2" width="478" height="236" rx="17" fill="url(#grid)"/>
<path d="M44 45h38" stroke="url(#accent)" stroke-width="4" stroke-linecap="round"/>
<text x="98" y="51" fill="#a9bed2" font-family="${font}" font-size="17" font-weight="600" letter-spacing="2.4">MR / ENGINEERING PORTFOLIO</text>
<text x="44" y="119" fill="#f0f6fc" font-family="${font}" font-size="44" font-weight="700">Games you can play.</text>
<text x="44" y="174" fill="#79d6ff" font-family="${font}" font-size="44" font-weight="700">Code you can inspect.</text>
<text x="46" y="211" fill="#a9bed2" font-family="${font}" font-size="16" letter-spacing="1">UNITY / C# / .NET</text>
<g stroke="#39556f" fill="none" stroke-width="2"><path d="M820 71h70v91h76M820 161h70M1020 72v32M1020 160v31h-130"/><path d="M890 113h60" stroke-dasharray="5 6"/></g>
<g transform="translate(750 45)"><rect width="88" height="68" rx="14" fill="#162d44" stroke="#79d6ff"/>${icon('game','#79d6ff',25,14,38)}</g>
<g transform="translate(750 129)"><rect width="88" height="68" rx="14" fill="#162d44" stroke="#79d6ff"/>${icon('code','#79d6ff',25,15,38)}</g>
<g transform="translate(962 70)"><rect width="120" height="98" rx="16" fill="#1e2848" stroke="#a6afff"/>${icon('server','#bdc5ff',35,24,50)}</g>
<g fill="#79d6ff"><circle cx="890" cy="72" r="4"/><circle cx="890" cy="162" r="4"/><circle cx="890" cy="191" r="4"/></g>
<path d="M1120 40v160" stroke="#34506c" stroke-width="1"/><text x="1150" y="156" transform="rotate(-90 1150 156)" font-family="${font}" font-size="12" letter-spacing="3" fill="#94aec6">BUILD / EXPLAIN</text>`;
write('profile-banner', svg(1200, 240, 'Games you can play. Code you can inspect. Unity, C# and .NET.', hero));
write('profile-banner-mobile', svg(640, 200, 'Games you can play. Code you can inspect. Unity, C# and .NET.',
  `<rect x="1" y="1" width="638" height="198" rx="16" fill="#102035" stroke="#34506c" stroke-width="2"/>
  <text x="28" y="37" fill="#a9bed2" font-family="${font}" font-size="14" font-weight="600" letter-spacing="2">MR / ENGINEERING PORTFOLIO</text>
  <text x="28" y="88" fill="#f0f6fc" font-family="${font}" font-size="34" font-weight="700">Games you can play.</text>
  <text x="28" y="132" fill="#79d6ff" font-family="${font}" font-size="34" font-weight="700">Code you can inspect.</text>
  <text x="29" y="172" fill="#a9bed2" font-family="${font}" font-size="15" letter-spacing="1">UNITY / C# / .NET</text>
  <rect x="492" y="42" width="108" height="116" rx="16" fill="#162d44" stroke="#496580"/>
  ${icon('game','#79d6ff',526,54,40)}${icon('server','#bdc5ff',526,109,40)}`));
console.log('Generated desktop/mobile banners, 10 buttons and 5 section icons.');
