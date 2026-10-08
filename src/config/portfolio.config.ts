export interface PortfolioConfig {
  personal: {
    name: string;
    role: string;
    academicStatus: string;
    institution: string;
    location: string;
    availability: string;
    bio: string;
    shortPitch: string;
  };
  focusAreas: {
    title: string;
    description: string;
    icon: string;
  }[];
  downloads: {
    cvUrl: string;
    portfolioPdfUrl: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsappUrl: string;
    linkedinUrl: string;
    behanceUrl: string;
  };
  bimWorkflow: {
    title: string;
    badge: string;
    description: string;
    pillars: {
      tag: string;
      title: string;
      summary: string;
      deliverables: string[];
    }[];
  };
  skillsCategories: {
    name: string;
    icon: string;
    tools: {
      name: string;
      level: 'Avançado' | 'Proficiente' | 'Operacional';
      highlight?: boolean;
      description: string;
    }[];
  }[];
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Davi Cruz",
    role: "Arquitetura & Urbanismo | Modelagem BIM",
    academicStatus: "Estudante do 8º período de Arquitetura e Urbanismo",
    institution: "Faculdade de Arquitetura e Urbanismo",
    location: "São Paulo, SP (Disponibilidade Híbrida / Presencial)",
    availability: "Disponível para Estágio (30h/sem) ou Nível Júnior",
    shortPitch: "Estudante focado em Projetos Executivos, Modelagem da Informação (BIM no ArchiCAD) e rotinas técnicas de Construtora — com vivência em aprovação legal e viabilidade para financiamento bancário.",
    bio: "Graduando em Arquitetura e Urbanismo com perfil pragmático e ênfase no canteiro e na documentação executiva. Busco aliar sensibilidade espacial e rigor geométrico à precisão da modelagem paramétrica em ArchiCAD. Experiência de estágio em suporte a construtoras, acompanhando processos de aprovação municipal, ritos de Corpo de Bombeiros e formatação de pranchas para viabilidade bancária junto à Caixa Econômica Federal (CEF)."
  },
  focusAreas: [
    {
      title: "Modelagem BIM no ArchiCAD",
      description: "Construção virtual de edifícios com parametrização de materiais, extração automatizada de pranchas e quantitativos precisos.",
      icon: "cube"
    },
    {
      title: "Projetos Executivos & Detalhamento",
      description: "Desenvolvimento de pranchas de marcenaria, caixilharia, paginação de piso e encontros construtivos de alta resolução técnica.",
      icon: "ruler"
    },
    {
      title: "Aprovações & Financiamento",
      description: "Ritos legais em prefeitura, normas de acessibilidade (NBR 9050) e documentação de viabilidade para financiamento (SBPE / CEF).",
      icon: "stamp"
    }
  ],
  downloads: {
    cvUrl: "/docs/curriculo.pdf",
    portfolioPdfUrl: "/docs/portfolio-resumido.pdf"
  },
  contact: {
    email: "contato.davicruz.arq@gmail.com",
    phone: "+55 (11) 98765-4321",
    whatsappUrl: "https://wa.me/5511987654321",
    linkedinUrl: "https://linkedin.com",
    behanceUrl: "https://behance.net"
  },
  bimWorkflow: {
    title: "Prática Construtiva, Metodologia BIM e Aprovação Corporativa",
    badge: "Fluxo Integrado ArchiCAD & Construtoras",
    description: "A prática projetual vai além da volumetria plástica: é a estruturação da informação construtiva para viabilizar orçamentos, aprovações públicas e execução sem retrabalhos na obra.",
    pillars: [
      {
        tag: "01. Modelagem ArchiCAD & OpenBIM",
        title: "Informação Paramétrica & Coordenação",
        summary: "Utilização do ArchiCAD como núcleo central do edifício virtual, integrando estruturas, paredes compostas e especificações materiais.",
        deliverables: [
          "Modelagem com perfis complexos e propriedades personalizadas",
          "Mapeamento e exportação IFC 2x3 / IFC4 para compatibilização multidisciplinar",
          "Geração dinâmica de tabelas de esquadrias e quantitativos de áreas úteis e construídas",
          "Cortes e elevações sincronizados em tempo real com o modelo tridimensional"
        ]
      },
      {
        tag: "02. Ritos de Aprovação & Legal",
        title: "Conformidade Normativa & Corporativa",
        summary: "Estruturação de pranchas legais para tramitação célere em órgãos públicos e comissões técnicas municipais.",
        deliverables: [
          "Aplicação rigorosa da NBR 9050 (Rampas, sanitários PCD e rotas acessíveis)",
          "Enquadramento no Plano Diretor e Código de Obras (Taxas de ocupação e coeficientes)",
          "Compatibilização básica com pranchas de Prevenção e Combate a Incêndio (PPCI / Bombeiros)",
          "Plantas de situação, implantação e memoriais descritivos padrão prefeitura"
        ]
      },
      {
        tag: "03. Viabilidade & Construtoras",
        title: "Documentação para Financiamento (CEF/SBPE)",
        summary: "Apoio a incorporadoras e construtoras na montagem do dossiê técnico de viabilidade exigido por agentes financeiros.",
        deliverables: [
          "Adequação às diretrizes de financiamento bancário (Caixa Econômica / SBPE)",
          "Conferência de compatibilidade entre peças gráficas e planilhas orçamentárias",
          "Detalhamento construtivo preventivo para evitar patologias e aditivos contratuais",
          "Padronização de pranchas executivas para leitura direta no canteiro de obras"
        ]
      }
    ]
  },
  skillsCategories: [
    {
      name: "BIM & Modelagem Paramétrica",
      icon: "building",
      tools: [
        { name: "Graphisoft ArchiCAD", level: "Avançado", highlight: true, description: "Modelagem paramétrica, documentação integrada, perfis complexos, pranchas e tabelas dinâmicas." },
        { name: "OpenBIM / IFC / BCF", level: "Proficiente", highlight: true, description: "Matriz de coordenadas, classificação de elementos IFC e checagem de interferências." },
        { name: "Autodesk Revit", level: "Operacional", highlight: false, description: "Conhecimento de interface, famílias básicas e documentação preliminar." },
        { name: "SketchUp Pro + LayOut", level: "Avançado", highlight: false, description: "Estudos volumétricos rápidos, maquetes conceituais e apresentações preliminares." },
        { name: "Rhinoceros 3D", level: "Operacional", highlight: false, description: "Modelagem de superfícies complexas e geometria de partido arquitetônico." }
      ]
    },
    {
      name: "Documentação Técnica & Normas",
      icon: "blueprint",
      tools: [
        { name: "AutoCAD 2D", level: "Avançado", highlight: true, description: "Pranchas executivas, cotas normatizadas, espessuras de pena e xrefs estruturados." },
        { name: "NBR 9050 (Acessibilidade)", level: "Avançado", highlight: true, description: "Dimensionamento de sanitários acessíveis, desníveis, faixas táteis e circulação." },
        { name: "NBR 15575 (Desempenho)", level: "Proficiente", highlight: false, description: "Critérios de conforto térmico, acústico e lumínico na especificação construtiva." },
        { name: "NBR 6492 (Desenho Técnico)", level: "Avançado", highlight: false, description: "Representação rigorosa de grafismo arquitetônico, simbologias e escalas." }
      ]
    },
    {
      name: "Visualização & Renderização",
      icon: "image",
      tools: [
        { name: "Enscape 3D", level: "Avançado", highlight: true, description: "Renderização em tempo real sincronizada com o ArchiCAD, estudos de insolação e vídeos." },
        { name: "D5 Render / Twinmotion", level: "Proficiente", highlight: false, description: "Iluminação global, materialidade PBR e ambientação de entorno paisagístico." },
        { name: "Lumion", level: "Operacional", highlight: false, description: "Composição de cenas e renderização de perspectivas externas diurnas." }
      ]
    },
    {
      name: "Pós-Produção & Diagramação",
      icon: "layers",
      tools: [
        { name: "Adobe InDesign", level: "Avançado", highlight: true, description: "Diagramação de cadernos técnicos, portfólios editoriais e memoriais de projeto." },
        { name: "Adobe Photoshop", level: "Avançado", highlight: false, description: "Humanização de plantas, pós-produção de perspectivas e ajuste tonal." },
        { name: "Adobe Illustrator", level: "Proficiente", highlight: false, description: "Diagramas axonométricos, esquemas de partido e infográficos de fluxo." }
      ]
    }
  ]
};

