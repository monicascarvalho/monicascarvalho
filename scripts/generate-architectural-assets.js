import fs from 'node:fs';
import path from 'node:path';

const baseDir = path.resolve('public/images/projects');
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

// Helper to generate an architectural floor plan SVG with real architectural graphic conventions
function generateFloorPlanSvg(title, scale, dimensions) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800" style="background:#0f1218; font-family:'Plus Jakarta Sans',sans-serif;">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
      </pattern>
      <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6">
        <circle cx="5" cy="5" r="3" fill="#38bdf8"/>
      </marker>
    </defs>
    <!-- Background grid -->
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    <!-- Title Block / Selo de Arquitetura -->
    <g transform="translate(40, 40)">
      <rect width="320" height="85" fill="rgba(20,24,32,0.85)" stroke="rgba(255,255,255,0.12)" rx="4"/>
      <text x="16" y="28" fill="#38bdf8" font-size="12" font-family="'Geist Mono',monospace" letter-spacing="1">DOCUMENTAÇÃO EXECUTIVA | BIM ARCHICAD</text>
      <text x="16" y="52" fill="#ffffff" font-size="18" font-weight="600">${title}</text>
      <text x="16" y="72" fill="#9ca3af" font-size="13" font-family="'Geist Mono',monospace">ESCALA: ${scale} | COTAS EM METROS</text>
    </g>

    <!-- North Arrow / Rosa dos Ventos -->
    <g transform="translate(1120, 70)">
      <circle cx="0" cy="0" r="26" fill="rgba(20,24,32,0.8)" stroke="rgba(255,255,255,0.15)"/>
      <polygon points="0,-20 6,0 0,6 -6,0" fill="#38bdf8"/>
      <text x="-4" y="-24" fill="#38bdf8" font-size="11" font-weight="bold" font-family="'Geist Mono',monospace">N</text>
    </g>

    <!-- Graphic Scale -->
    <g transform="translate(950, 740)">
      <rect x="0" y="0" width="200" height="8" fill="rgba(255,255,255,0.1)"/>
      <rect x="0" y="0" width="50" height="8" fill="#38bdf8"/>
      <rect x="100" y="0" width="50" height="8" fill="#38bdf8"/>
      <text x="0" y="-8" fill="#9ca3af" font-size="10" font-family="'Geist Mono',monospace">0</text>
      <text x="50" y="-8" fill="#9ca3af" font-size="10" font-family="'Geist Mono',monospace">2.5m</text>
      <text x="100" y="-8" fill="#9ca3af" font-size="10" font-family="'Geist Mono',monospace">5m</text>
      <text x="200" y="-8" fill="#9ca3af" font-size="10" font-family="'Geist Mono',monospace">10m</text>
    </g>

    <!-- Structural grid lines (Eixos estruturais) -->
    <g stroke="rgba(56,189,248,0.25)" stroke-dasharray="8,6" stroke-width="1">
      <line x1="220" y1="180" x2="220" y2="650"/>
      <line x1="450" y1="180" x2="450" y2="650"/>
      <line x1="720" y1="180" x2="720" y2="650"/>
      <line x1="960" y1="180" x2="960" y2="650"/>
      <line x1="180" y1="240" x2="1020" y2="240"/>
      <line x1="180" y1="420" x2="1020" y2="420"/>
      <line x1="180" y1="580" x2="1020" y2="580"/>
    </g>

    <!-- Eixos Identificadores circulares -->
    <g fill="rgba(20,24,32,0.9)" stroke="#38bdf8" stroke-width="1.5" font-family="'Geist Mono',monospace" font-size="12" text-anchor="middle" dominant-baseline="central">
      <circle cx="220" cy="160" r="14"/><text x="220" y="160" fill="#38bdf8">1</text>
      <circle cx="450" cy="160" r="14"/><text x="450" y="160" fill="#38bdf8">2</text>
      <circle cx="720" cy="160" r="14"/><text x="720" y="160" fill="#38bdf8">3</text>
      <circle cx="960" cy="160" r="14"/><text x="960" y="160" fill="#38bdf8">4</text>
      <circle cx="160" cy="240" r="14"/><text x="160" y="240" fill="#38bdf8">A</text>
      <circle cx="160" cy="420" r="14"/><text x="160" y="420" fill="#38bdf8">B</text>
      <circle cx="160" cy="580" r="14"/><text x="160" y="580" fill="#38bdf8">C</text>
    </g>

    <!-- Thick walls (Alvenaria cortada em ArchiCAD) -->
    <g fill="none" stroke="#f1f5f9" stroke-width="4" stroke-linejoin="miter">
      <rect x="220" y="240" width="740" height="340" />
      <line x1="450" y1="240" x2="450" y2="420"/>
      <line x1="720" y1="240" x2="720" y2="580"/>
      <line x1="220" y1="420" x2="720" y2="420"/>
    </g>

    <!-- Hatched Core (Paredes preenchidas/hachura) -->
    <g fill="rgba(255,255,255,0.06)">
      <rect x="222" y="242" width="226" height="176"/>
      <rect x="452" y="242" width="266" height="176"/>
      <rect x="222" y="422" width="496" height="156"/>
      <rect x="722" y="242" width="236" height="336"/>
    </g>

    <!-- Structural Columns (Pilares de concreto 25x50) -->
    <g fill="#38bdf8" opacity="0.85">
      <rect x="212" y="232" width="16" height="16"/>
      <rect x="442" y="232" width="16" height="16"/>
      <rect x="712" y="232" width="16" height="16"/>
      <rect x="952" y="232" width="16" height="16"/>
      <rect x="212" y="412" width="16" height="16"/>
      <rect x="442" y="412" width="16" height="16"/>
      <rect x="712" y="412" width="16" height="16"/>
      <rect x="952" y="412" width="16" height="16"/>
      <rect x="212" y="572" width="16" height="16"/>
      <rect x="442" y="572" width="16" height="16"/>
      <rect x="712" y="572" width="16" height="16"/>
      <rect x="952" y="572" width="16" height="16"/>
    </g>

    <!-- Doors and swings (Esquadrias e arcos de abertura) -->
    <g stroke="rgba(255,255,255,0.6)" stroke-width="1.5" fill="none">
      <path d="M 450 300 A 60 60 0 0 1 510 360" stroke-dasharray="3,3"/>
      <line x1="450" y1="360" x2="510" y2="360"/>
      <path d="M 720 480 A 70 70 0 0 1 790 550" stroke-dasharray="3,3"/>
      <line x1="720" y1="550" x2="790" y2="550"/>
    </g>

    <!-- Level tags & Room names -->
    <g font-family="'Plus Jakarta Sans',sans-serif" text-anchor="middle">
      <g transform="translate(330, 320)">
        <text y="0" fill="#f8fafc" font-size="14" font-weight="600">SALA DE ESTAR / LIVING</text>
        <text y="20" fill="#38bdf8" font-size="12" font-family="'Geist Mono',monospace">A: 34.50 m² | NÍVEL +1.20</text>
      </g>
      <g transform="translate(580, 320)">
        <text y="0" fill="#f8fafc" font-size="14" font-weight="600">COZINHA & ÁREA GOURMET</text>
        <text y="20" fill="#38bdf8" font-size="12" font-family="'Geist Mono',monospace">A: 26.80 m² | NÍVEL +1.18</text>
      </g>
      <g transform="translate(470, 500)">
        <text y="0" fill="#f8fafc" font-size="14" font-weight="600">SUÍTE MASTER COM CLOSET</text>
        <text y="20" fill="#38bdf8" font-size="12" font-family="'Geist Mono',monospace">A: 28.10 m² | NÍVEL +1.20</text>
      </g>
      <g transform="translate(840, 410)">
        <text y="0" fill="#f8fafc" font-size="14" font-weight="600">VARANDA PANORÂMICA</text>
        <text y="20" fill="#38bdf8" font-size="12" font-family="'Geist Mono',monospace">A: 42.00 m² | NÍVEL +1.15</text>
      </g>
    </g>

    <!-- Dimension lines (Linhas de cota normatizadas ABNT NBR 6492) -->
    <g stroke="#94a3b8" stroke-width="1.2">
      <!-- Top dim line -->
      <line x1="220" y1="200" x2="960" y2="200"/>
      <line x1="220" y1="190" x2="220" y2="210"/>
      <line x1="450" y1="190" x2="450" y2="210"/>
      <line x1="720" y1="190" x2="720" y2="210"/>
      <line x1="960" y1="190" x2="960" y2="210"/>
      <!-- Text annotations for dimensions -->
      <text x="335" y="195" fill="#e2e8f0" font-size="11" font-family="'Geist Mono',monospace" text-anchor="middle">5.75</text>
      <text x="585" y="195" fill="#e2e8f0" font-size="11" font-family="'Geist Mono',monospace" text-anchor="middle">6.75</text>
      <text x="840" y="195" fill="#e2e8f0" font-size="11" font-family="'Geist Mono',monospace" text-anchor="middle">6.00</text>
      <!-- Total dim line -->
      <line x1="220" y1="620" x2="960" y2="620"/>
      <line x1="220" y1="610" x2="220" y2="630"/>
      <line x1="960" y1="610" x2="960" y2="630"/>
      <text x="590" y="638" fill="#38bdf8" font-size="12" font-family="'Geist Mono',monospace" text-anchor="middle">COTA TOTAL: 18.50 m</text>
    </g>
  </svg>`;
}

// Helper to generate an architectural section (Corte Esquemático)
function generateSectionSvg(title, scale) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800" style="background:#0f1218; font-family:'Plus Jakarta Sans',sans-serif;">
    <defs>
      <pattern id="soilPattern" width="20" height="20" patternUnits="userSpaceOnUse">
        <line x1="0" y1="20" x2="20" y2="0" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>
      </pattern>
    </defs>
    <!-- Background grid -->
    <rect width="100%" height="600" fill="#0d1016" />
    <rect y="600" width="100%" height="200" fill="url(#soilPattern)" />
    <line x1="0" y1="600" x2="1200" y2="600" stroke="#94a3b8" stroke-width="4"/>

    <!-- Title Block -->
    <g transform="translate(40, 40)">
      <rect width="320" height="85" fill="rgba(20,24,32,0.85)" stroke="rgba(255,255,255,0.12)" rx="4"/>
      <text x="16" y="28" fill="#38bdf8" font-size="12" font-family="'Geist Mono',monospace" letter-spacing="1">CORTE LONGITUDINAL AA' | BIM ARCHICAD</text>
      <text x="16" y="52" fill="#ffffff" font-size="18" font-weight="600">${title}</text>
      <text x="16" y="72" fill="#9ca3af" font-size="13" font-family="'Geist Mono',monospace">ESCALA: ${scale} | PÉ-DIREITO 3.00m</text>
    </g>

    <!-- Slabs (Lajes nervuradas cortadas) -->
    <g fill="#1e2430" stroke="#f1f5f9" stroke-width="3">
      <!-- Ground floor slab -->
      <rect x="180" y="570" width="840" height="30"/>
      <!-- 1st floor slab -->
      <rect x="180" y="420" width="840" height="25"/>
      <!-- 2nd floor slab -->
      <rect x="180" y="270" width="840" height="25"/>
      <!-- Roof slab -->
      <rect x="180" y="140" width="840" height="30"/>
    </g>

    <!-- Structural Pillars (Pilares) -->
    <g fill="#38bdf8" opacity="0.3">
      <rect x="220" y="170" width="30" height="400"/>
      <rect x="520" y="170" width="30" height="400"/>
      <rect x="800" y="170" width="30" height="400"/>
      <rect x="980" y="170" width="30" height="400"/>
    </g>

    <!-- Architectural Facade Skin / Brises -->
    <g stroke="#38bdf8" stroke-width="2" opacity="0.85">
      <line x1="180" y1="140" x2="180" y2="570"/>
      <!-- Brise-soleil slats -->
      <line x1="160" y1="200" x2="180" y2="200"/>
      <line x1="160" y1="220" x2="180" y2="220"/>
      <line x1="160" y1="240" x2="180" y2="240"/>
      <line x1="160" y1="320" x2="180" y2="320"/>
      <line x1="160" y1="340" x2="180" y2="340"/>
      <line x1="160" y1="360" x2="180" y2="360"/>
      <line x1="160" y1="460" x2="180" y2="460"/>
      <line x1="160" y1="480" x2="180" y2="480"/>
      <line x1="160" y1="500" x2="180" y2="500"/>
    </g>

    <!-- Height Level Markers (Símbolos de Nível ABNT) -->
    <g font-family="'Geist Mono',monospace" font-size="12" fill="#38bdf8">
      <!-- Ground Level -->
      <path d="M 120 570 L 140 560 L 140 570 Z" fill="#38bdf8"/>
      <line x1="120" y1="570" x2="170" y2="570" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="60" y="565" fill="#f8fafc">NÍVEL ±0.00</text>
      <!-- 1st Floor Level -->
      <path d="M 120 420 L 140 410 L 140 420 Z" fill="#38bdf8"/>
      <line x1="120" y1="420" x2="170" y2="420" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="60" y="415" fill="#f8fafc">NÍVEL +3.00</text>
      <!-- 2nd Floor Level -->
      <path d="M 120 270 L 140 260 L 140 270 Z" fill="#38bdf8"/>
      <line x1="120" y1="270" x2="170" y2="270" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="60" y="265" fill="#f8fafc">NÍVEL +6.00</text>
      <!-- Roof Level -->
      <path d="M 120 140 L 140 130 L 140 140 Z" fill="#38bdf8"/>
      <line x1="120" y1="140" x2="170" y2="140" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="60" y="135" fill="#f8fafc">NÍVEL +9.00</text>
    </g>

    <!-- Interior annotations -->
    <g text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif">
      <text x="360" y="510" fill="#94a3b8" font-size="13">RECEPÇÃO / FOYER</text>
      <text x="660" y="510" fill="#94a3b8" font-size="13">ÁREA TÉCNICA E CONVÍVIO</text>
      <text x="360" y="360" fill="#94a3b8" font-size="13">ESCRITÓRIOS / OPEN SPACE</text>
      <text x="660" y="360" fill="#94a3b8" font-size="13">SALAS DE REUNIÃO</text>
      <text x="360" y="220" fill="#94a3b8" font-size="13">DIRETORIA CORPORATIVA</text>
      <text x="660" y="220" fill="#94a3b8" font-size="13">TERRAÇO JARDIM COBERTURA</text>
    </g>
  </svg>`;
}

// Helper to generate a Construction Detail SVG (Detalhe Construtivo 1:10)
function generateConstructionDetailSvg(title, scale) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800" style="background:#0c0f14; font-family:'Plus Jakarta Sans',sans-serif;">
    <!-- Title -->
    <g transform="translate(50, 50)">
      <rect width="400" height="90" fill="rgba(20,24,32,0.85)" stroke="rgba(255,255,255,0.12)" rx="4"/>
      <text x="20" y="30" fill="#38bdf8" font-size="12" font-family="'Geist Mono',monospace" letter-spacing="1">DETALHAMENTO CONSTRUTIVO EXECUTIVO</text>
      <text x="20" y="56" fill="#ffffff" font-size="18" font-weight="600">${title}</text>
      <text x="20" y="76" fill="#9ca3af" font-size="13" font-family="'Geist Mono',monospace">ESCALA: ${scale} | ESPECIFICAÇÃO DE MATERIAIS</text>
    </g>

    <!-- Structural Concrete Slab cut -->
    <g transform="translate(200, 250)">
      <!-- Reinforced Concrete Hatch -->
      <rect x="0" y="200" width="450" height="150" fill="#1b202a" stroke="#cbd5e1" stroke-width="3"/>
      <!-- Screed / Contrapiso regulador -->
      <rect x="0" y="160" width="450" height="40" fill="#2d3748" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Waterproofing membrane (Manta asfáltica dupla) -->
      <line x1="0" y1="158" x2="450" y2="158" stroke="#38bdf8" stroke-width="4" stroke-dasharray="6,3"/>
      <!-- Flooring / Porcelanato ou Piso Elevado -->
      <rect x="0" y="130" width="450" height="28" fill="#475569" stroke="#94a3b8" stroke-width="1.5"/>

      <!-- Aluminum Profile / Perfil de Alumínio Anodizado Embutido -->
      <rect x="420" y="40" width="60" height="120" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
      <!-- Double laminated glass / Vidro duplo insulado 8+8mm -->
      <rect x="440" y="-120" width="20" height="160" fill="rgba(56,189,248,0.3)" stroke="#38bdf8" stroke-width="2"/>

      <!-- Flashing / Pingadeira metálica e calafetação com PU -->
      <path d="M 390 130 L 420 130 L 420 170 L 380 170 Z" fill="#0f172a" stroke="#f1f5f9" stroke-width="2"/>
    </g>

    <!-- Callout pointers / Linhas de chamada com especificações -->
    <g stroke="#38bdf8" stroke-width="1.5" fill="none">
      <path d="M 660 180 L 740 180 L 800 150"/>
      <path d="M 680 340 L 750 340 L 800 300"/>
      <path d="M 650 410 L 740 410 L 800 420"/>
      <path d="M 650 490 L 740 490 L 800 540"/>
    </g>

    <!-- Specification texts -->
    <g fill="#f8fafc" font-size="13" font-family="'Plus Jakarta Sans',sans-serif">
      <g transform="translate(810, 140)">
        <text y="0" font-weight="600" fill="#38bdf8">01. ESQUADRIA & CAIXILHO</text>
        <text y="18" fill="#cbd5e1" font-size="12">Vidro laminado duplo 8+8mm com PVB acústico.</text>
        <text y="34" fill="#94a3b8" font-size="11" font-family="'Geist Mono',monospace">Perfil em alumínio anodizado preto fosco.</text>
      </g>
      <g transform="translate(810, 290)">
        <text y="0" font-weight="600" fill="#38bdf8">02. PISO & REGULARIZAÇÃO</text>
        <text y="18" fill="#cbd5e1" font-size="12">Porcelanato retificado 120x120cm assentamento com junta 1.5mm.</text>
        <text y="34" fill="#94a3b8" font-size="11" font-family="'Geist Mono',monospace">Argamassa colante AC-III flexível sobre contrapiso.</text>
      </g>
      <g transform="translate(810, 410)">
        <text y="0" font-weight="600" fill="#38bdf8">03. IMPERMEABILIZAÇÃO CRÍTICA</text>
        <text y="18" fill="#cbd5e1" font-size="12">Manta asfáltica elastomérica 4mm com véu de poliéster.</text>
        <text y="34" fill="#94a3b8" font-size="11" font-family="'Geist Mono',monospace">Rodapé invertido com primer e mástique de poliuretano (PU).</text>
      </g>
      <g transform="translate(810, 530)">
        <text y="0" font-weight="600" fill="#38bdf8">04. ESTRUTURA PORTANTE</text>
        <text y="18" fill="#cbd5e1" font-size="12">Laje maciça de concreto armado fck = 35 MPa.</text>
        <text y="34" fill="#94a3b8" font-size="11" font-family="'Geist Mono',monospace">Cobrimento de armadura c = 30mm conforme NBR 6118.</text>
      </g>
    </g>
  </svg>`;
}

// Helper to generate Hero Renders / Conceptual Perspective
function generateHeroImageSvg(title, subtitle, colorScheme) {
  const bgGrad = colorScheme === 'cyan' 
    ? 'linear-gradient(135deg, #0a0d14 0%, #111827 50%, #032b43 100%)' 
    : 'linear-gradient(135deg, #090a0f 0%, #161a23 50%, #1f293d 100%)';
  const accent = colorScheme === 'cyan' ? '#38bdf8' : '#818cf8';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000" style="background:${bgGrad}; font-family:'Plus Jakarta Sans',sans-serif;">
    <defs>
      <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.15)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
      </linearGradient>
      <linearGradient id="glow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="${accent}" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
      </linearGradient>
    </defs>

    <!-- Isometric building massing & architecture volumes -->
    <g transform="translate(800, 520) scale(1.1)">
      <!-- Ground plane shadow -->
      <polygon points="-400,100 0,300 400,100 0,-100" fill="rgba(0,0,0,0.5)"/>

      <!-- Lower Volume -->
      <polygon points="-300,40 0,190 300,40 0,-110" fill="url(#glassGrad)" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
      <polygon points="-300,40 -300,-120 0,-270 0,-110" fill="#151b26" stroke="rgba(255,255,255,0.1)"/>
      <polygon points="0,-110 0,-270 300,-120 300,40" fill="#1b2332" stroke="rgba(255,255,255,0.1)"/>

      <!-- Cantilever Tower Volume (Balanço com brises) -->
      <polygon points="-160,-160 80,-40 240,-120 0,-240" fill="${accent}" opacity="0.25"/>
      <polygon points="-160,-160 -160,-340 80,-220 80,-40" fill="#243044" stroke="${accent}" stroke-width="2"/>
      <polygon points="80,-40 80,-220 240,-300 240,-120" fill="#1a2230" stroke="rgba(255,255,255,0.2)"/>

      <!-- Glass facade horizontal mullions -->
      <g stroke="${accent}" stroke-width="1" opacity="0.6">
        <line x1="-160" y1="-280" x2="80" y2="-160"/>
        <line x1="-160" y1="-220" x2="80" y2="-100"/>
        <line x1="80" y1="-160" x2="240" y2="-240"/>
        <line x1="80" y1="-100" x2="240" y2="-180"/>
      </g>
    </g>

    <!-- Foreground badge & project title overlay -->
    <g transform="translate(80, 800)">
      <rect width="600" height="130" rx="8" fill="rgba(10,12,16,0.85)" stroke="rgba(255,255,255,0.1)" backdrop-filter="blur(16px)"/>
      <text x="32" y="42" fill="${accent}" font-size="13" font-family="'Geist Mono',monospace" letter-spacing="1">PROJETO ARQUITETÔNICO | MODELAGEM BIM</text>
      <text x="32" y="78" fill="#ffffff" font-size="28" font-weight="700">${title}</text>
      <text x="32" y="106" fill="#9ca3af" font-size="15">${subtitle}</text>
    </g>
  </svg>`;
}

const projects = [
  { id: '01', slug: '01-edificio-multifamiliar-icarai', title: 'Edifício Habitacional Horizonte', sub: 'Modelagem ArchiCAD, NBR 15575 e Incorporação Imobiliária' },
  { id: '02', slug: '02-complexo-corporativo-inova', title: 'Sede Corporativa & Hub de Inovação', sub: 'Aprovação Municipal, Corpo de Bombeiros e Fachada Ventilada' },
  { id: '03', slug: '03-centro-cultural-estacao', title: 'Centro Cultural e Parque Urbano', sub: 'Equipamento Público, Acessibilidade NBR 9050 e Topografia' },
  { id: '04', slug: '04-residencia-patio-concreto', title: 'Residência Pátio & Concreto', sub: 'Detalhamento Executivo de Concreto Aparente e Caixilharia' },
  { id: '05', slug: '05-interiores-sede-construtora', title: 'Sede Executiva de Construtora', sub: 'Interiores Corporativos, Marcenaria Paramétrica e Iluminação' },
];

projects.forEach(p => {
  const dir = path.join(baseDir, p.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(path.join(dir, 'hero.svg'), generateHeroImageSvg(p.title, p.sub, p.id === '01' || p.id === '03' ? 'cyan' : 'indigo'));
  fs.writeFileSync(path.join(dir, 'planta-baixa.svg'), generateFloorPlanSvg(`PLANTA BAIXA TIPO - ${p.title.toUpperCase()}`, '1:50', '24x18m'));
  fs.writeFileSync(path.join(dir, 'corte-geral.svg'), generateSectionSvg(`CORTE ESQUEMÁTICO TRANSVERSAL - ${p.title.toUpperCase()}`, '1:50'));
  fs.writeFileSync(path.join(dir, 'detalhe-executivo.svg'), generateConstructionDetailSvg(`DETALHE CONSTRUTIVO ENCONTRO PISO-FACHADA`, '1:10'));
});

console.log('Todos os assets arquitetônicos vetoriais gerados com sucesso!');

