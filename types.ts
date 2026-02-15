
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface SocialLink {
  platform: 'WhatsApp' | 'Facebook' | 'Instagram';
  url: string;
  icon: string;
}

export enum Page {
  Home = 'Home',
  About = 'Sobre Nosotros',
  Services = 'Servicios',
  Contact = 'Contacto'
}
