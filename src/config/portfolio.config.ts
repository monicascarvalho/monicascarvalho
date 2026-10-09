export interface PortfolioConfig {
  personal: {
    name: string;
    fullName: string;
    role: string;
    academicStatus: string;
    institution: string;
    graduationPeriod: string;
    previousDegree: string;
    location: string;
    availability: string;
    shortPitch: string;
    bio: string;
    badges: string[];
  };
  downloads: {
    cvUrl: string;
    portfolioPdfUrl?: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsappUrl: string;
    location: string;
    linkedin?: string;
    instagram?: string;
    github?: string;
  };
  seo?: {
    metaDescription: string;
  };
  experienceSummary: {
    years: string;
    title: string;
    companies: string[];
    description: string;
    highlights: string[];
  };
  skills: {
    category: string;
    icon: string;
    items: {
      name: string;
      level?: string;
      highlight?: boolean;
      description: string;
    }[];
  }[];
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Monica Carvalho",
    fullName: "Monica Cleia Sousa Carvalho",
    role: "Arquitetura e Urbanismo | Modelagem BIM & Desenho Urbano",
    academicStatus: "Estudante de Arquitetura e Urbanismo (Período Noturno)",
    institution: "Universidade Paulista (UNIP)",
    graduationPeriod: "2023 – 2027",
    previousDegree: "Bacharel em Administração de Empresas (Faculdade Unibero, 2004–2008)",
    location: "São Paulo, SP (Morumbi)",
    availability: "Disponível para Estágio / Posição Júnior",
    shortPitch: "Estudante de Arquitetura e Urbanismo na UNIP em transição de carreira, unindo sólida vivência de mais de 11 anos no setor imobiliário (Plano&Plano, Queiroz Galvão, Rossi, PDG) ao domínio prático de Archicad (BIM), QGIS e desenho técnico.",
    bio: "Em transição de carreira para a atuação plena em Projetos Arquitetônicos e Desenho Urbano, uno a formação acadêmica em Arquitetura e Urbanismo na Universidade Paulista (UNIP) a uma sólida trajetória de mais de 11 anos no setor imobiliário e da construção civil.\n\nCom ampla vivência na estruturação de processos de financiamento imobiliário (PJ e repasses), contratos e conformidade legal junto a Cartórios de Registro de Imóveis (CRI) em empresas como Plano&Plano, Queiroz Galvão, Rossi e PDG, desenvolvi uma compreensão aprofundada da viabilização técnica do produto imobiliário e da dinâmica das cidades.\n\nHoje, direciono essa maturidade para o desenvolvimento de projetos arquitetônicos, desenho urbano e planejamento espacial, aliando rigor técnico, sensibilidade projetual, acessibilidade (NBR 9050), conforto ambiental e ferramentas digitais contemporâneas.",
    badges: [
      "11+ Anos no Setor Imobiliário",
      "Modelagem BIM (Archicad)",
      "QGIS & Geoprocessamento",
      "UNIP (2023–2027)",
      "Acessibilidade NBR 9050",
      "Financiamento & Regularização CRI"
    ]
  },
  seo: {
    metaDescription: "Estudante de Arquitetura (UNIP) com 11+ anos no setor imobiliário, aliando vivência em incorporadoras ao domínio de Archicad (BIM), QGIS e desenho técnico."
  },
  downloads: {
    cvUrl: "/docs/curriculo-monica-carvalho.pdf",
    portfolioPdfUrl: "/docs/curriculo-monica-carvalho.pdf"
  },
  contact: {
    email: "monica.carvalho60@gmail.com",
    phone: "(11) 97626-4686",
    whatsappUrl: "https://wa.me/5511976264686?text=Ol%C3%A1%20Monica%2C%20vi%20seu%20portf%C3%B3lio%20de%20arquitetura%20e%20gostaria%20de%20conversar.",
    location: "São Paulo - SP (Morumbi)",
    linkedin: "https://www.linkedin.com/in/monica-s-carvalho/",
    instagram: "", // Preencha com o link do Instagram quando criado (ex: https://instagram.com/monicacarvalho.arq). Ele aparecerá automaticamente no site e nos dados estruturados do Google.
    github: "https://github.com/monicascarvalho"
  },
  experienceSummary: {
    years: "11+ anos",
    title: "Trajetória Prévia no Mercado Imobiliário & Incorporação",
    companies: ["Plano&Plano", "Queiroz Galvão", "Solv", "Rossi", "PDG", "Abitare", "Goldfarb"],
    description: "Sólida experiência em incorporadoras de grande porte com processos de crédito corporativo, financiamento imobiliário (PJ e repasses), conformidade contratual e registro de escrituras em Cartórios de Imóveis (CRI).",
    highlights: [
      "Visão executiva de produto imobiliário e viabilidade financeira",
      "Compreensão de normas urbanísticas, código de obras e ritos legais",
      "Interface técnica entre incorporadora, agentes financeiros e poder público",
      "Gestão de indicadores e documentação técnica de empreendimentos"
    ]
  },
  skills: [
    {
      category: "BIM & Modelagem Digital",
      icon: "cube",
      items: [
        {
          name: "Graphisoft Archicad",
          highlight: true,
          description: "Estudos preliminares, plantas baixas, cortes, fachadas, modelagem 3D paramétrica e documentação técnica integrada."
        },
        {
          name: "AutoCAD",
          highlight: true,
          description: "Desenho técnico 2D, pranchas executivas cotadas, espessuras e normas de representação gráfica."
        }
      ]
    },
    {
      category: "Planejamento Urbano & Território",
      icon: "map",
      items: [
        {
          name: "QGIS",
          highlight: true,
          description: "Mapeamento territorial, geoprocessamento, análise de morfologia urbana, zoneamento e impacto de vizinhança."
        },
        {
          name: "Desenho Urbano & Morfologia",
          highlight: false,
          description: "Uso e ocupação do solo, requalificação de espaços públicos e integração à malha viária existente."
        }
      ]
    },
    {
      category: "Normas, Legislação & Mercado",
      icon: "shield",
      items: [
        {
          name: "NBR 9050 (Acessibilidade)",
          highlight: true,
          description: "Dimensionamento de rampas, sanitários acessíveis, rotas de circulação e conformidade com o desenho universal."
        },
        {
          name: "Código de Obras & Plano Diretor",
          highlight: false,
          description: "Adequação a parâmetros urbanísticos municipais, taxas de ocupação e coeficientes de aproveitamento."
        },
        {
          name: "Processos Imobiliários & CRI",
          highlight: true,
          description: "Financiamento bancário (PJ e repasses), contratos imobiliários e regularização em Cartórios de Registro de Imóveis."
        }
      ]
    },
    {
      category: "Apresentação & Gestão",
      icon: "layout",
      items: [
        {
          name: "Canva & Pacote Gráfico",
          highlight: false,
          description: "Diagramação visual de pranchas, memoriais descritivos e apresentação de estudos preliminares."
        },
        {
          name: "Microsoft Excel Avançado",
          highlight: false,
          description: "Controle de processos, acompanhamento de indicadores e estruturação de planilhas de gestão."
        }
      ]
    }
  ]
};
