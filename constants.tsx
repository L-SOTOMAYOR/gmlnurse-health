
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
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'weight-control',
    title: 'Control de Peso y Metabolismo',
    description: 'Programas personalizados que combinan nutrición, suplementación y seguimiento profesional para alcanzar tus metas de salud.',
    icon: 'Activity',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mesotherapy',
    title: 'Nano Mesoterapia',
    description: 'Tratamiento avanzado de rejuvenecimiento cutáneo que nutre la piel desde las capas más profundas sin necesidad de agujas invasivas.',
    icon: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'lymphatic',
    title: 'Masajes Linfáticos',
    description: 'Técnicas especializadas para reducir inflamación, mejorar la circulación y acelerar la recuperación postoperatoria.',
    icon: 'Zap',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4af6b1d462c2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sclerotherapy',
    title: 'Escleroterapia',
    description: 'Procedimiento mínimamente invasivo para tratar y eliminar las venas varicosas y arañas vasculares, mejorando la estética y salud de tus piernas.',
    icon: 'Heart',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wound-care',
    title: 'Cuidado de Heridas Postoperatorias',
    description: 'Atención especializada de enfermería para asegurar una cicatrización adecuada y prevenir infecciones tras cualquier cirugía.',
    icon: 'UserPlus',
    imageUrl: 'https://images.unsplash.com/photo-1584432851739-6886e6f5a3d7?auto=format&fit=crop&q=80&w=800'
  }
];

export const CONTACT_INFO = {
  phones: ['939-254-2268', '214-244-4685'],
  whatsapp: 'https://wa.me/19392542268',
  facebook: 'https://facebook.com/gmlnurse',
  instagram: 'https://instagram.com/gmlnurse',
  tagline: 'Deja tu salud en mano de profesionales',
  email: 'info@gmlnurse.health'
};

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
