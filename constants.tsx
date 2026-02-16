
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
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800',
    features: [
      'Vitaminas C, B12, complejo B y minerales',
      'Hidratación profunda en 30-60 minutos',
      'Ideal para recuperación y energía',
      'Formulaciones personalizadas'
    ]
  },
  {
    id: 'weight-control',
    title: 'Control de Peso y Metabolismo',
    description: 'Programas personalizados que combinan nutrición, suplementación y seguimiento profesional para alcanzar tus metas de salud.',
    icon: 'Activity',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
    features: [
      'Plan nutricional personalizado',
      'Seguimiento semanal de progreso',
      'Suplementación y lipotropics',
      'Asesoría en hábitos saludables'
    ]
  },
  {
    id: 'mesotherapy',
    title: 'Nano Mesoterapia',
    description: 'Tratamiento avanzado de rejuvenecimiento cutáneo que nutre la piel desde las capas más profundas sin necesidad de agujas invasivas.',
    icon: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    features: [
      'Sin agujas — tecnología nano',
      'Rejuvenecimiento y luminosidad',
      'Ácido hialurónico y vitaminas',
      'Resultados desde la primera sesión'
    ]
  },
  {
    id: 'lymphatic',
    title: 'Masajes Linfáticos',
    description: 'Técnicas especializadas para reducir inflamación, mejorar la circulación y acelerar la recuperación postoperatoria.',
    icon: 'Zap',
    imageUrl: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800',
    features: [
      'Reduce retención de líquidos',
      'Acelera recuperación postquirúrgica',
      'Mejora circulación sanguínea',
      'Técnica manual especializada'
    ]
  },
  {
    id: 'sclerotherapy',
    title: 'Escleroterapia',
    description: 'Procedimiento mínimamente invasivo para tratar y eliminar las venas varicosas y arañas vasculares, mejorando la estética y salud de tus piernas.',
    icon: 'Heart',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    features: [
      'Elimina arañas vasculares',
      'Procedimiento ambulatorio rápido',
      'Mínimas molestias y sin cirugía',
      'Mejora estética y circulación'
    ]
  },
  {
    id: 'wound-care',
    title: 'Cuidado de Heridas Postoperatorias',
    description: 'Atención especializada de enfermería para asegurar una cicatrización adecuada y prevenir infecciones tras cualquier cirugía.',
    icon: 'UserPlus',
    imageUrl: 'https://images.unsplash.com/photo-1576671414201-7da744b3bab7?auto=format&fit=crop&q=80&w=800',
    features: [
      'Curación y cambio de vendajes',
      'Prevención de infecciones',
      'Seguimiento de cicatrización',
      'Atención a domicilio disponible'
    ]
  }
];

export const CONTACT_INFO = {
  phones: ['939-254-2268', '214-244-4685'],
  whatsapp: 'https://wa.me/19392542268',
  facebook: 'https://www.facebook.com/gmlnurse',
  instagram: 'https://www.instagram.com/gmlnurse',
  tagline: 'Deja tu salud en mano de profesionales',
  email: 'info@gmlnurse.health',
  businessHours: 'Lunes a Sábado — Previa Cita'
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
