# Especificação Técnica e de Design (spec.md)
## Portfólio de Arquitetura em Astro: Rigor Técnico, Metodologia BIM e Prática Construtiva

---

## 1. Visão Geral & Objetivos Estratégicos

### 1.1 Propósito do Projeto
Desenvolver um portfólio digital estático de alta performance voltado para estudantes de Arquitetura e Urbanismo (estágio / nível júnior), concebido para demonstrar **processo projetual, rigor técnico, maturidade executiva e clareza de comunicação visual**. O foco não é apenas uma galeria de imagens estéticas, mas uma prova tangível de competência em fluxos de trabalho reais de escritórios e construtoras.

### 1.2 Diferenciais Competitivos em Destaque
- **Proficiência em BIM (com ênfase no ArchiCAD):** Modelagem paramétrica da informação, extração automática de quantitativos, documentação coordenada e interoperabilidade OpenBIM (IFC/BCF).
- **Vivência com Construtoras e Incorporadoras:** Conhecimento prático em processos de aprovação legal (Prefeituras, Corpo de Bombeiros, Vigilância Sanitária) e documentação para viabilidade/financiamento bancário (Caixa Econômica Federal - CEF / SBPE / PBQP-H).
- **Detalhamento Construtivo:** Demonstração de domínio técnico através de encontros de materiais, esquadrias, impermeabilização e marcenaria executiva.

### 1.3 Perfil do Recrutador e Metas de Conversão
- **Tempo de Avaliação Inicial:** 3 a 5 segundos para identificar quem é o candidato, seu nível acadêmico, foco de atuação e como entrar em contato.
- **Ações Imediatas Disponíveis:**
  - Download de Curriculo Vitae (PDF consolidado).
  - Download de Caderno de Portfólio Resumido (PDF para arquivamento offline por bancas e RHs).
  - Link direto para contato via E-mail / WhatsApp / LinkedIn.
  - Links permanentes para cada projeto (`/projetos/[slug]`) para envio direto em propostas e vagas específicas.

---

## 2. Identidade Visual & Diretrizes de Design

### 2.1 Filosofia Estética: "Precision Minimalist"
Design sóbrio, editorial e livre da aparência padronizada de frameworks genéricos. O projeto inspira-se em publicações consagradas de arquitetura (*El Croquis*, *Detail*, *Domus*) e interfaces técnicas contemporâneas.

### 2.2 Sistema de Cores e Iluminação
- **Modo Padrão (Dark Obsidian & Slate):** Fundo escuro com camadas de profundidade sutis, destacando pranchas técnicas claras e iluminação de perspectivas renderizadas.
  - Fundo Primário: `#0a0b0d` (Obsidian profundo)
  - Fundo Secundário (Superfícies de Vidro): `rgba(18, 20, 26, 0.7)`
  - Bordas Especulares: `rgba(255, 255, 255, 0.08)` a `rgba(255, 255, 255, 0.15)`
  - Texto Principal: `#f1f3f5`
  - Texto Secundário / Legendas: `#8a919e`
  - Acento Técnico: `#38bdf8` (Cyan técnico) ou `#818cf8` (Índigo suave) para indicadores de escala e tags de status.
- **Modo Claro Editorial (Alabaster & Concreto):** Acessível via alternador suave (Dark/Light Toggle). Inspirado em papel vegetal, traços de nanquim e concreto aparente.
  - Fundo Primário: `#f8f9fa` (Alabaster)
  - Superfícies de Vidro: `rgba(255, 255, 255, 0.75)`
  - Bordas Especulares: `rgba(0, 0, 0, 0.08)`
  - Texto Principal: `#111317`
  - Texto Secundário: `#525866`

### 2.3 Texturas e Efeitos Atmosféricos
- **Glassmorphism Refinado:** Elementos de navegação, cards e fichas técnicas utilizam `backdrop-filter: blur(16px)` com bordas translúcidas de `1px` (`border border-white/10 dark:border-white/10 light:border-black/5`) e sombras difusas multidirecionais.
- **Ruído Analógico de Fundo (Subtle SVG Noise):** Uma camada SVG fixa de ruído granulado procedural com `pointer-events: none` e opacidade ultra-sutil (2.5% a 3.5%), conferindo textura de papel tátil à tela digital e eliminando o aspecto plástico de CSS puro.

### 2.4 Tipografia Estruturada
- **Títulos e Destaques:** Sans-serif geométrica contemporânea (*Space Grotesk* ou *Plus Jakarta Sans*), com tracking ligeiramente negativo (`tracking-tight`) e pesos equilibrados (Medium / SemiBold).
- **Corpo de Texto:** Sans-serif neutra de alta legibilidade (*Plus Jakarta Sans* ou *Inter*), garantindo conforto visual na leitura de memoriais e conceitos.
- **Anotações Técnicas, Cotas e Metadados:** Tipografia monoespaçada técnica (*Geist Mono* ou *JetBrains Mono*), aplicada em escalas gráficas, áreas construídas, coordenadas de projeto e nomes de softwares.

---

## 3. Arquitetura de Informação & Navegação

```
/
├── (Hero Imediato: Identificação + Status + Ações Rápidas)
├── (Destaque Metodológico: Prática Construtiva & Fluxo BIM ArchiCAD)
├── (Galeria de Projetos Selecionados: Filtros por tags + Cards Interativos)
├── (Matriz de Habilidades & Ferramentas Técnicas por Proficiência Prática)
├── (Sobre Mim: Trajetória Acadêmica, Cursos Extracurriculares e Concursos)
└── (Contato & Disponibilidade: Cidade, Modelo de Trabalho e Canais)
/projetos/
├── [slug]/ (Páginas Dedicadas com Narrativa Completa e Peças Técnicas)
└── index.astro (Arquivo cronológico completo ou redirecionamento para galeria)
```

---

## 4. Detalhamento Estrutural das Seções

### 4.1 Seção 1: Hero / Apresentação Imediata
- **Objetivo:** Responder em menos de 3 segundos quem é o profissional, o que busca e como contatá-lo.
- **Componentes:**
  - **Identificação Clara:** Nome em destaque, status acadêmico explícito (*"Estudante do 7º/8º período de Arquitetura e Urbanismo"*) e instituição de ensino.
  - **Foco Profissional:** *"Projetos Executivos, Modelagem BIM (ArchiCAD) e Compatibilização para Obras Corporativas e Residenciais"*.
  - **Barra de Ações Rápidas (Floating or Header Actions):**
    - Botão primário com ícone: `Baixar CV (PDF)`
    - Botão secundário com ícone: `Baixar Portfólio Resumido (PDF)`
    - Botão de contato rápido: `Fale Comigo (E-mail / WhatsApp)`
  - **Badge de Status de Disponibilidade:** Ex.: *"Disponível para Estágio / Júnior • Modelo Híbrido ou Presencial"*.

### 4.2 Seção 2: Prática Construtiva & Metodologia BIM (Seção Destaque)
- **Objetivo:** Evidenciar conhecimento técnico direto em rotinas de construtoras antes mesmo de navegar pelos projetos.
- **Blocos de Conteúdo em 3 Pilares:**
  1. **Fluxo de Trabalho BIM & ArchiCAD:**
     - Modelagem paramétrica avançada e parametrização de componentes construtivos.
     - Extração automatizada de pranchas, tabelas de quantitativos e detalhamento 3D interativo.
     - Práticas de OpenBIM (exportação/validação IFC, matriz de coordenadas, detecção de interferências).
  2. **Aprovação Legal & Projetos Corporativos:**
     - Conformidade com Plano Diretor municipal, Código de Obras e NBR 9050 (Acessibilidade universal).
     - Ritos de tramitação e pranchas padrão de Prefeitura, Corpo de Bombeiros (PPCI) e órgãos ambientais.
  3. **Viabilidade Técnica & Financiamento Imobiliário:**
     - Conhecimento da documentação exigida por agentes financeiros (Caixa Econômica Federal - CEF / SBPE).
     - Elaboração de peças gráficas e memoriais descritivos alinhados a planilhas orçamentárias e cronogramas físico-financeiros.

### 4.3 Seção 3: Galeria de Projetos em Destaque (O Núcleo)
- **Critério de Seleção:** Exibição curada de 4 a 6 projetos consistentes.
- **Barra de Filtros por Tags:**
  - `Todos`, `Residencial`, `Corporativo / Comercial`, `Equipamento Público`, `BIM / Executivo`, `Interiores`.
- **Card de Projeto com Efeito Glass:**
  - Imagem de capa com aspect ratio refinado (16:10 ou 3:2).
  - Título do Projeto, Ano e Localização.
  - Mini-ficha: Tipologia, Área Construída e Papel desempenhado.
  - Badges das ferramentas utilizadas (ex.: `ArchiCAD`, `Enscape`, `NBR 9050`).
  - Indicador de link explícito para a página dedicada: *"Ver Documentação Completa →"*.

### 4.4 Seção 4: Estrutura da Página Dedicada do Projeto (`/projetos/[slug]`)
Cada projeto possui uma rota estática própria estruturada sob uma narrativa técnica rigorosa:

1. **Ficha Técnica Rápida (Tabela Glassmorphism):**
   - **Tipologia / Uso:** (ex.: Habitação Coletiva Multifamiliar)
   - **Ano / Semestre:** (ex.: 2024 / 7º Semestre)
   - **Localização:** (ex.: Curitiba, PR)
   - **Área do Terreno / Área Construída:** (ex.: 1.250 m² / 3.420 m²)
   - **Softwares Utilizados:** (ex.: ArchiCAD 27, Enscape, Photoshop, AutoCAD)
   - **Autoria & Papel:** (Projeto individual ou, se em grupo, especificação estrita do escopo de responsabilidade do autor — ex.: *Modelagem BIM completa, plantas executivas e detalhamento de fachada*).
2. **Conceito & Partido Arquitetônico:**
   - 1 a 2 parágrafos concisos explicando as diretrizes espaciais, insolação, ventilação e a resposta dialética com o entorno urbano.
3. **Evolução do Processo (Carrossel Interativo Embla):**
   - Diagramas conceituais, volumetrias evolutivas, croquis de partido e esquemas de insolação/ventilação passiva.
4. **Peças Técnicas & Desenho Construtivo (Integrado com Lightbox + Zoom PhotoSwipe):**
   - Plantas baixas cotadas com layout e especificações de piso.
   - Cortes gerais e esquemáticos limpos, com espessuras de linha normatizadas e cotas de nível.
   - Elevações e fachadas com indicação clara de acabamentos.
   - Todas as imagens com escala gráfica e indicação de norte magnético.
5. **Perspectivas Finais & Materialidade:**
   - Renders e composições valorizando iluminação natural, textura de materiais e escala humana apropriada.
6. **Detalhamento Construtivo Executivo (O Diferencial de Maturidade):**
   - Pranchas de detalhamento técnico em escala 1:10 a 1:2: encontros de caixilharia/alvenaria, fixação de brises, marcenaria de mobiliário fixo ou cortes de impermeabilização de lajes.

### 4.5 Seção 5: Matriz de Habilidades e Ferramentas Técnicas
Substituição das barras subjetivas de porcentagem por categorização objetiva de proficiência prática e fluxo de trabalho:

| Categoria | Softwares & Metodologias | Aplicação Prática no Fluxo de Trabalho |
| :--- | :--- | :--- |
| **BIM & Modelagem 3D** | ArchiCAD (foco principal), Revit, SketchUp, Rhino | Modelagem paramétrica da informação, famílias/objetos GDL, extração de quantitativos, documentação coordenada e pranchas integradas. |
| **Documentação Técnica & Normas** | AutoCAD, Normas ABNT (NBR 6492, NBR 9050, NBR 15575) | Plantas executivas, cortes cotados, pranchas padrão de aprovação e acessibilidade física. |
| **Visualização & Renderização** | Enscape, Twinmotion, Lumion, V-Ray | Imagens fotorrealistas, estudos de iluminação solar diurna/noturna e passeios virtuais. |
| **Pós-Produção & Diagramação** | Adobe InDesign, Illustrator, Photoshop | Montagem de pranchas conceituais, diagramas isométricos explicativos e cadernos de apresentação. |
| **Prática de Construtora & Gestão** | Processos de Financiamento CEF (SBPE/FGTS), Aprovação Municipal | Compatibilização de projetos legais, leitura de memoriais descritivos e interfaces com engenharia. |

### 4.6 Seção 6: Sobre Mim & Trajetória Acadêmica
- Narrativa concisa sobre o foco profissional e visão sobre a arquitetura construída.
- Cursos extracurriculares especializados (ex.: Formação avançada em ArchiCAD BIM, Iluminação Arquitetônica, Compatibilização de Projetos).
- Participação em workshops, concursos de estudantes (ex.: Projetar.org, CBIC), iniciação científica ou vivência em Empresa Júnior de Arquitetura.

### 4.7 Seção 7: Contato & Disponibilidade
- Informações claras de localização (ex.: *"São Paulo - SP"* ou *"Curitiba - PR"*).
- Modelo de disponibilidade: *"Disponível para estágio (30h/sem) ou contratação júnior | Presencial, híbrido ou remoto"*.
- Links diretos com botões interativos:
  - E-mail institucional/profissional com botão de cópia de endereço em 1 clique.
  - LinkedIn com perfil atualizado.
  - Behance / Issuu para visualização de portfólios editoriais complementares.
  - WhatsApp para contato profissional rápido.

---

## 5. Especificação Técnica & Stack de Desenvolvimento

### 5.1 Stack Tecnológico
- **Framework:** [Astro](https://astro.build/) (versão estável 5.x).
  - *Justificativa:* Zero-JS por padrão, renderização estática instantânea (SSG), otimização nativa de imagens com o componente `<Image />` e suporte a Content Collections fortemente tipadas.
- **Estilização:** Tailwind CSS (com tema customizado e utilitários para glassmorphism e tipografia).
- **Componentes Interativos (Zero Framework Overhead):**
  - **Lightbox com Zoom Técnico:** [PhotoSwipe 5](https://photoswipe.com/) integrado via Vanilla TypeScript. Permite zoom em alta fidelidade com pan/arraste e gestos táteis em mobile para inspeção de plantas cotadas e cortes sem perda de nitidez.
  - **Carrossel de Imagens & Pranchas:** [Embla Carousel](https://www.embla-carousel.com/) (versão vanilla). Leve, acessível, suporte a gestos de swipe e sem interferência em renderização de layout.
  - **Ícones:** Tabler Icons ou Lucide Icons (SVGs otimizados inline).

### 5.2 Otimização de Assets e Imagens de Alta Resolução
Pranchas e renders de arquitetura costumam gerar arquivos pesados. O sistema adotará a seguinte estratégia:
1. **Pipeline do Astro `<Image />`:**
   - Conversão automática para formatos modernos (`.webp` e `.avif`).
   - Geração de múltiplos `srcset` responsivos para cards e visualização inicial.
2. **Estratégia para Lightbox (Peças Técnicas):**
   - Carregamento de imagem compactada na página e link para versão em alta resolução (resolução original limpa para zoom detalhado no PhotoSwipe).
3. **Botão de PDF Consolidado Sempre Acessível:**
   - Link direto no Header e Footer para o arquivo PDF hospedado localmente em `/public/docs/curriculo.pdf` e `/public/docs/portfolio-resumido.pdf`.

---

## 6. Estrutura de Diretórios do Projeto

```
/opt/dcruz/portifolio/
├── public/
│   ├── favicon.svg
│   ├── noise.svg                    # Textura procedural de ruído de fundo
│   └── docs/
│       ├── curriculo.pdf            # CV para download direto
│       └── portfolio-resumido.pdf   # Caderno técnico consolidado (10-15 páginas)
├── src/
│   ├── assets/
│   │   ├── images/                  # Renders e pranchas originais
│   │   │   ├── hero/
│   │   │   ├── bim/
│   │   │   └── projects/            # Imagens organizadas por projeto
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.astro         # Topbar com Glassmorphism, ThemeToggle e Downloads
│   │   │   ├── Footer.astro         # Contatos, copyright e disponibilidade
│   │   │   ├── ThemeToggle.astro    # Alternador Dark/Light com persistência em localStorage
│   │   │   ├── NoiseOverlay.astro   # Textura fixa de ruído analógico
│   │   │   └── PdfButton.astro      # Botão reutilizável de download
│   │   ├── home/
│   │   │   ├── HeroSection.astro    # Apresentação imediata e pitch profissional
│   │   │   ├── BimSection.astro     # Destaque em ArchiCAD, Construtoras e Aprovação
│   │   │   ├── ProjectCard.astro    # Card com glassmorphism e tags
│   │   │   ├── ProjectGallery.astro # Grid com filtros reativos por tipologia
│   │   │   ├── SkillsMatrix.astro   # Matriz de habilidades práticas
│   │   │   ├── AboutSection.astro   # Trajetória e atividades extracurriculares
│   │   │   └── ContactSection.astro # Canais de contato e disponibilidade
│   │   └── project/
│   │       ├── ProjectHeader.astro  # Título, metadados e tags
│   │       ├── SpecTable.astro      # Ficha técnica estruturada
│   │       ├── TechnicalSheet.astro # Peça técnica com trigger para PhotoSwipe Lightbox
│   │       ├── ProcessCarousel.astro# Carrossel Embla para croquis e diagramas
│   │       └── DetailSection.astro  # Bloco de detalhamento construtivo executivo
│   ├── config/
│   │   └── portfolio.config.ts      # Dados centrais tipados do autor, contatos e configurações
│   ├── content/
│   │   ├── config.ts                # Definição e validação do schema Zod para projetos
│   │   └── projects/                # Coleções em Markdown / MDX
│   │       ├── 01-edificio-multifamiliar-icarai.md
│   │       ├── 02-complexo-corporativo-inova.md
│   │       ├── 03-centro-cultural-estacao.md
│   │       ├── 04-residencia-patio-concreto.md
│   │       └── 05-interiores-sede-construtora.md
│   ├── layouts/
│   │   ├── BaseLayout.astro         # Layout base com meta tags, fontes e CSS global
│   │   └── ProjectLayout.astro      # Layout dedicado para a rota /projetos/[slug]
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── index.astro              # Landing page principal completa
│   │   └── projetos/
│   │       ├── index.astro          # Índice completo de projetos
│   │       └── [slug].astro         # Páginas dinâmicas renderizadas estaticamente
│   ├── scripts/
│   │   ├── gallery-filter.ts        # Lógica vanilla para filtragem de projetos por tags
│   │   ├── lightbox-init.ts         # Inicialização do PhotoSwipe 5 com suporte a zoom/pan
│   │   └── carousel-init.ts         # Inicialização do Embla Carousel
│   └── styles/
│       ├── global.css               # Variáveis CSS, resets e estilos de glassmorphism
│       └── typography.css           # Configurações de fontes refinadas
├── astro.config.mjs                 # Configuração do Astro com Tailwind
├── package.json
├── tailwind.config.mjs              # Extensão de tokens (cores, blur, fontes)
├── tsconfig.json
└── spec.md                          # Este documento de especificação técnica
```

---

## 7. Modelagem de Dados & Schemas Zod

### 7.1 Configuração Global do Perfil (`src/config/portfolio.config.ts`)
```typescript
export interface PortfolioConfig {
  personal: {
    name: string;
    academicStatus: string; // ex: "Estudante de Arquitetura e Urbanismo (8º Período)"
    institution: string;
    location: string;
    availability: string; // ex: "Disponível para Estágio / Júnior • Presencial ou Híbrido"
    bio: string;
  };
  focusAreas: string[]; // ["BIM & ArchiCAD", "Projetos Executivos", "Aprovação e Financiamento"]
  downloads: {
    cvUrl: string;
    portfolioPdfUrl: string;
  };
  contact: {
    email: string;
    phone?: string;
    whatsappUrl?: string;
    linkedinUrl: string;
    behanceUrl?: string;
    instagramUrl?: string;
  };
}
```

### 7.2 Schema Zod da Coleção de Projetos (`src/content/config.ts`)
```typescript
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    shortDescription: z.string(),
    category: z.enum([
      'Residencial',
      'Corporativo / Comercial',
      'Equipamento Público',
      'Interiores',
      'Concurso / Acadêmico'
    ]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    year: z.string(),
    semester: z.string(),
    location: z.string(),
    siteArea: z.string().optional(),       // ex: "1.250 m²"
    builtArea: z.string(),                 // ex: "3.420 m²"
    softwares: z.array(z.string()),        // ["ArchiCAD 27", "Enscape", "AutoCAD"]
    authorRole: z.string(),                // Papel detalhado (individual ou em grupo)
    bimWorkflow: z.object({
      tools: z.array(z.string()),          // ["Modelagem Paramétrica", "Interoperabilidade IFC", "Tabelas Interativas"]
      highlight: z.string(),               // Destaque técnico no projeto
    }).optional(),
    approvalCompliance: z.array(z.string()).optional(), // ["NBR 9050", "Código de Obras", "Corpo de Bombeiros"]
    heroImage: image(),
    heroImageAlt: z.string(),
    processGallery: z.array(z.object({
      image: image(),
      caption: z.string(),
    })).optional(),
    technicalDrawings: z.array(z.object({
      title: z.string(),
      sheetType: z.enum(['Planta Baixa', 'Corte', 'Elevação', 'Implantação', 'Detalhe Construtivo']),
      scale: z.string(),                   // ex: "1:50", "1:20", "1:5"
      image: image(),
      highResImage: image().optional(),    // Imagem em altíssima resolução para PhotoSwipe Zoom
      description: z.string(),
    })),
    constructionDetails: z.array(z.object({
      title: z.string(),
      detailScale: z.string(),             // ex: "1:10"
      description: z.string(),
      image: image(),
    })).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
```

---

## 8. Catálogo dos Projetos Exemplares Iniciais

Para fornecer um portfólio rico imediatamente pronto para exibição e testes, o sistema incluirá 5 projetos concebidos para demonstrar toda a amplitude técnica exigida:

1. **Edifício Habitacional Multifamiliar "Horizonte"**
   - *Categoria:* Residencial
   - *Destaque Técnico:* Modelagem integral em ArchiCAD, atendimento rigoroso à NBR 15575 (Desempenho Térmico e Acústico) e NBR 9050, extração de tabelas de esquadrias e áreas para memorial de incorporação.
2. **Sede Corporativa & Hub de Inovação**
   - *Categoria:* Corporativo / Comercial
   - *Destaque Técnico:* Ritos de aprovação em Prefeitura e Corpo de Bombeiros (rotas de fuga, compartimentação), fachada cortina ventilada com detalhamento de fixação mecânica e subestrutura metálica.
3. **Centro Cultural e Parque Urbano**
   - *Categoria:* Equipamento Público
   - *Destaque Técnico:* Integração topográfica, drenagem sustentável, acessibilidade universal e diagramas de fluxo de público.
4. **Residência Unifamiliar "Pátio & Concreto"**
   - *Categoria:* Residencial
   - *Destaque Técnico:* Concreto aparente ripado, detalhamento de encontro caixilho-alvenaria embutida, calhas ocultas e impermeabilização de cobertura verde.
5. **Espaço Institucional & Recepção de Construtora**
   - *Categoria:* Interiores / Executivo
   - *Destaque Técnico:* Detalhamento executivo milimétrico de marcenaria de recepção, especificação luminotécnica com cálculo de iluminância e paginação de piso vinílico/porcelanato retificado.

---

## 9. Requisitos de Experiência do Usuário (UX) & Performance

### 9.1 Metas de Performance (Google Lighthouse)
- **Performance:** 95+ (Core Web Vitals em verde: LCP < 1.8s, CLS < 0.05, FID/INP < 100ms).
- **Acessibilidade:** 100 (Contraste de texto validado conforme WCAG AA, tags ARIA em carrosséis e botões, navegação por teclado).
- **Best Practices:** 100 (HTTPS, headers modernos, ausência de console errors).
- **SEO:** 100 (OpenGraph cards enriquecidos com renders de capa, metadados semânticos de arquitetura e sitemap XML automático).

### 9.2 Comportamento do Lightbox (PhotoSwipe 5)
- Permite duplo clique ou gesto de pinça para zoom de até 400% nas pranchas técnicas.
- Pan suave com arraste do mouse para leitura de cotas de linha sem distorção.
- Legenda com escala gráfica visível e botão de fechar acessível (`ESC` ou ícone).

### 9.3 Comportamento do Carrossel (Embla Carousel)
- Transição fluida com arraste por toque e cliques em botões prev/next minimalistas.
- Indicador discreto de posição (bullets com estilo glass ou indicador numérico tipo `01 / 04`).

---

## 10. Roteiro de Implementação Passo a Passo

1. **Fase 1: Inicialização do Projeto e Dependências**
   - Instalação do Astro 5 com Tailwind CSS.
   - Instalação do PhotoSwipe 5 e Embla Carousel.
   - Configuração de tipografia web (Google Fonts ou fontes locais otimizadas).
2. **Fase 2: Fundações de Design & Assets**
   - Implementação do gerador de ruído SVG (`noise.svg`).
   - Configuração dos tokens de cores, glassmorphism e classes utilitárias no Tailwind.
   - Implementação do script de alternância Dark/Light Theme com persistência.
3. **Fase 3: Componentes Nucleares & Layout Base**
   - Criação de `BaseLayout.astro`, `Header.astro` com botões de PDF e `Footer.astro`.
   - Criação do `HeroSection.astro` focado na regra dos 3 segundos.
   - Criação da `BimSection.astro` (destaque ArchiCAD, Construtoras e Financiamento).
   - Criação da `SkillsMatrix.astro` estruturada por fluxo de trabalho.
4. **Fase 4: Sistema de Conteúdo & Content Collections**
   - Configuração de `src/content/config.ts` com validação Zod.
   - Criação dos 5 projetos de arquitetura com dados ricos, memoriais, fichas técnicas e placeholders de pranchas em alta resolução.
5. **Fase 5: Galeria Interativa & Páginas Dedicadas**
   - Desenvolvimento de `ProjectGallery.astro` com filtros reativos em TypeScript.
   - Criação da rota dinâmica `src/pages/projetos/[slug].astro`.
   - Integração do PhotoSwipe 5 para zoom nas pranchas técnicas e do Embla Carousel para croquis conceituais.
6. **Fase 6: Refinamento, Acessibilidade e Testes**
   - Verificação de contraste de cores nos dois modos (Dark e Light).
   - Teste de responsividade (mobile, tablet e monitores de alta resolução ultrawide).
   - Validação de build estático (`astro build`) e verificação de integridade dos links de PDF.

