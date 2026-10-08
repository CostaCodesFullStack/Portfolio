export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: number;
  image: string;
}

export const certificates: Certificate[] = [
  {
    id: 'engenharia-de-software',
    title: 'Engenharia de Software',
    issuer: 'FIAP',
    year: 2026,
    image: '/images/certificados/Certificado Engenharia de Software.png',
  },
  {
    id: 'python',
    title: 'Python',
    issuer: 'Santander Open Academy',
    year: 2025,
    image: '/images/certificados/python.png',
  },
  {
    id: 'git-e-github',
    title: 'Git e GitHub',
    issuer: 'DIO',
    year: 2026,
    image: '/images/certificados/Git e Github.png',
  },
];
