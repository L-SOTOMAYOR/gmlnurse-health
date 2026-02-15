import React from 'react';
import { Heart, Activity, UserPlus, Sparkles, Zap, Droplet } from 'lucide-react';
import { Service } from './types';

export const COLORS = {
  primary: '#10b981', // Emerald 500
  secondary: '#064e3b', // Emerald 900
  accent: '#ecfdf5', // Emerald 50
  dark: '#0f172a' // Slate 900
};

export const SERVICES: Service[] = [
  {
    id: 'iv-therapy',
    title: 'Sueroterapias',
    description: 'Infusiones intravenosas diseñadas para rehidratar, desintoxicar y potenciar tu sistema inmunológico con vitaminas y minerales esenciales.',
    icon: 'Droplet',
    imageUrl: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80&fit=crop'
  },
  {
    id: 'weight-control',
    title: 'Control de Peso y Metabolismo',
    description: 'Programas personalizados que combinan nutrición, suplementación y seguimiento profesional para alcanzar tus metas de salud.',
    icon: 'Activity',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80&fit=crop'
  },
  {
    id: 'mesotherapy',
    title: 'Nano Mesoterapia',
    description: 'Tratamiento avanzado de rejuvenecimiento cutáneo que nutre la piel desde las capas más profundas sin necesidad de agujas invasivas.',
    icon: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80&fit=crop'
  },
  {
    id: 'lymphatic',
    title: 'Masajes Linfáticos',
    description: 'Técnicas especializadas para reducir inflamación, mejorar la circulación y acelerar la recuperación postoperatoria.',
    icon: 'Zap',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80&fit=crop'
  },
  {
    id: 'sclerotherapy',
    title: 'Escleroterapia',
    description: 'Procedimiento mínimamente invasivo para tratar y eliminar las venas varicosas y arañas vasculares, mejorando la estética y salud de tus piernas.',
    icon: 'Heart',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80&fit=crop'
  },
  {
    id: 'wound-care',
    title: 'Cuidado de Heridas Postoperatorias',
    description: 'Atención especializada de enfermería para asegurar una cicatrización adecuada y prevenir infecciones tras cualquier cirugía.',
    icon: 'UserPlus',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80&fit=crop'
  }
];

export const CONTACT_INFO = {
  phones: ['939-254-2268', '214-244-4685'],
  whatsapp: 'https://wa.me/19392542268',
  whatsappChannel: 'https://whatsapp.com/channel/0029Vb7Eqt6ADTOEnbl1mv0u',
  facebook: 'https://facebook.com/gmlnurse',
  instagram: 'https://instagram.com/gmlnurse',
  tagline: 'Deja tu salud en mano de profesionales',
  email: 'info@gmlnurse.health'
};

export const TESTIMONIALS = [
  {
    name: 'Carmen Rodríguez',
    text: 'El servicio de sueroterapia a domicilio fue excepcional. Me sentí revitalizada inmediatamente. Muy profesionales.',
    role: 'Paciente Regular'
  },
  {
    name: 'José Morales',
    text: 'Increíble atención postoperatoria. La enfermera fue muy cuidadosa con mis heridas y me dio mucha tranquilidad.',
    role: 'Recuperación Cirugía'
  },
  {
    name: 'Laura Santos',
    text: 'Los masajes linfáticos me ayudaron muchísimo con la inflamación. Recomiendo GML Nurse al 100%.',
    role: 'Paciente de Bienestar'
  }
];

export const getIcon = (name: string, className?: string) => {
  switch (name) {
    case 'Droplet': return <Droplet className={className} />;
    case 'Activity': return <Activity className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Heart': return <Heart className={className} />;
    case 'UserPlus': return <UserPlus className={className} />;
    default: return <Heart className={className} />;
  }
};