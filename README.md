# Portfólio de Arquitetura & BIM

Portfólio digital minimalista, elegante e de alto desempenho desenvolvido com o framework [Astro](https://astro.build/) (v5.4), focado em estudantes de Arquitetura e Urbanismo (nível estágio / júnior). 

O projeto prioriza **rigor técnico, clareza de processo projetual, metodologia BIM (com ênfase no ArchiCAD) e práticas reais de construtoras** (processos de aprovação legal municipal/bombeiros e viabilidade para financiamento CEF/SBPE).

---

## 🏛️ Diferenciais & Funcionalidades

1. **Apresentação Imediata (Regra dos 3 Segundos):**
   - Nome, status acadêmico e foco profissional explícitos no Hero.
   - Botões de ação rápida para download direto de **CV (PDF)** e **Caderno de Portfólio Resumido (PDF)**.
   - Status de disponibilidade para contratação e canais diretos (E-mail com cópia em 1 clique, WhatsApp, LinkedIn).

2. **Destaque Metodológico: Prática Construtiva & Fluxo BIM:**
   - Seção dedicada na Home abordando modelagem no **ArchiCAD / OpenBIM** (IFC/BCF), ritos de aprovação legal (Prefeituras, PPCI Corpo de Bombeiros e NBR 9050) e documentação de viabilidade para financiamento bancário (Caixa Econômica Federal).

3. **Navegação em Páginas Dedicadas (`/projetos/[slug]`):**
   - Estrutura narrativa completa gerada estaticamente via **Astro Content Collections**.
   - Ficha técnica executiva com áreas, escopo do autor, softwares e normas.
   - Memorial descritivo e partido arquitetônico formatados com tipografia refinada.
   - **Carrossel Interativo (Embla Carousel)** para estudos volumétricos e diagramas conceituais.
   - **Visualizador Técnico com Zoom Profundo (PhotoSwipe 5)** para plantas cotadas, cortes e elevações.
   - Bloco de **Detalhamento Construtivo Executivo (Escala 1:10)** provando maturidade de canteiro.

4. **Identidade Visual "Precision Minimalist":**
   - Modo Escuro Sofisticado (*Dark Obsidian & Slate*) por padrão com alternador suave (*Dark/Light Toggle*) para modo claro editorial (*Alabaster & Concreto*).
   - Camadas translúcidas com **Glassmorphism** (`backdrop-filter: blur(16px)` e bordas especulares de 1px).
   - Textura analógica de ruído procedural SVG leve de fundo.
   - Tipografia contemporânea: *Space Grotesk* + *Plus Jakarta Sans* + *Geist Mono* (para cotas e escalas).

---

## 📁 Estrutura do Projeto

```
/opt/dcruz/portifolio/
├── public/
│   ├── docs/
│   │   ├── curriculo.pdf            # CV consolidado para download
│   │   └── portfolio-resumido.pdf   # Caderno de portfólio para download
│   ├── images/projects/             # Pranchas, plantas e renders dos projetos
│   ├── favicon.svg                  # Favicon arquitetônico com monograma DC
│   └── noise.svg                    # Textura analógica de fundo
├── src/
│   ├── components/
│   │   ├── common/                  # Header, Footer, ThemeToggle, NoiseOverlay
│   │   ├── home/                    # Hero, BimSection, ProjectGallery, SkillsMatrix, etc.
│   │   └── project/                 # SpecTable, TechnicalSheet, ProcessCarousel, DetailSection
│   ├── config/
│   │   └── portfolio.config.ts      # Dados centrais tipados do autor e contatos
│   ├── content/
│   │   ├── config.ts                # Schema Zod de validação dos projetos
│   │   └── projects/                # Projetos em Markdown (01 a 05)
│   ├── layouts/
│   │   ├── BaseLayout.astro         # Layout mestre com fontes, SEO e tema
│   │   └── ProjectLayout.astro      # Layout dedicado /projetos/[slug] com PhotoSwipe
│   ├── pages/
│   │   ├── index.astro              # Landing page principal
│   │   ├── 404.astro                # Página 404 customizada
│   │   └── projetos/
│   │       ├── index.astro          # Catálogo completo de projetos
│   │       └── [slug].astro         # Rota dinâmica de cada projeto
│   ├── scripts/
│   │   └── lightbox-init.ts         # Inicialização do PhotoSwipe 5
│   └── styles/
│       └── global.css               # Design tokens, glassmorphism e resets
├── astro.config.mjs                 # Configuração do Astro com Tailwind
├── spec.md                          # Especificação detalhada de design e requisitos
└── tailwind.config.mjs              # Tokens de cores obsidian, alabaster e blur
```

---

## 🚀 Como Executar Localmente

### 1. Instalar dependências
```bash
npm install
```

### 2. Iniciar servidor de desenvolvimento
```bash
npm run dev
```
Acesse em: `http://localhost:4321`

### 3. Gerar build estático para produção
```bash
npm run build
```
Os arquivos prontos para deploy (SSG estático sem servidor necessário) estarão na pasta `dist/`.

---

## ✏️ Como Personalizar os Dados

1. **Informações do Perfil e Contatos:**
   Edite o arquivo [`src/config/portfolio.config.ts`](file:///opt/dcruz/portifolio/src/config/portfolio.config.ts) para alterar seu nome, instituição, bio, links de redes e telefones.
2. **Substituição dos PDFs Oficiais:**
   Coloque seus arquivos reais em [`public/docs/curriculo.pdf`](file:///opt/dcruz/portifolio/public/docs/curriculo.pdf) e [`public/docs/portfolio-resumido.pdf`](file:///opt/dcruz/portifolio/public/docs/portfolio-resumido.pdf).
3. **Adicionar ou Modificar Projetos:**
   Crie ou edite arquivos `.md` na pasta [`src/content/projects/`](file:///opt/dcruz/portifolio/src/content/projects/). O schema Zod validará automaticamente os campos obrigatórios (área, softwares, ritos legais, escala das pranchas e detalhes construtivos).

