import {
  Heart,
  Car,
  Home,
  PiggyBank,
  Zap,
  UserCheck,
  Clock,
  TrendingDown,
  Shield,
  Award,
  Globe,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  features: string[];
  badge?: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  stat?: string;
  statLabel?: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  insurance: string;
  savings?: string;
}

export interface Partner {
  id: string;
  name: string;
  initial: string;
  color: string;
}

export interface NavLink {
  label: string;
  href: string;
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { label: "Nos Services", href: "#services" },
  { label: "Comment ça marche", href: "#process" },
  { label: "Avis clients", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

// ─── Services ─────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    id: "sante",
    title: "Mutuelle Santé",
    description:
      "Couverture complète pour vous et votre famille. Remboursements rapides, réseaux de soins étendus.",
    icon: Heart,
    color: "#ef4444",
    bgColor: "rgba(239,68,68,0.1)",
    badge: "Populaire",
    features: [
      "Remboursement sous 48h",
      "Réseau de 25 000 professionnels",
      "Tiers payant généralisé",
      "Couverture optique & dentaire",
    ],
  },
  {
    id: "auto",
    title: "Assurance Auto",
    description:
      "Protection tous risques ou au tiers, assistance 0 km incluse, bonus-malus optimisé.",
    icon: Car,
    color: "#6366f1",
    bgColor: "rgba(99,102,241,0.1)",
    features: [
      "Assistance 0 km 24h/24",
      "Voiture de remplacement",
      "Conducteur désigné",
      "Protection juridique",
    ],
  },
  {
    id: "habitation",
    title: "Assurance Habitation",
    description:
      "Protégez votre logement contre tous les sinistres. Propriétaire ou locataire, nous avons la solution.",
    icon: Home,
    color: "#14b8a6",
    bgColor: "rgba(20,184,166,0.1)",
    features: [
      "Dégâts des eaux & incendie",
      "Vol & vandalisme",
      "Responsabilité civile",
      "Indemnisation en valeur à neuf",
    ],
  },
  {
    id: "pret",
    title: "Assurance Prêt",
    description:
      "Sécurisez votre prêt immobilier avec des garanties adaptées. Délégation d'assurance disponible.",
    icon: PiggyBank,
    color: "#f59e0b",
    bgColor: "rgba(245,158,11,0.1)",
    badge: "Économisez",
    features: [
      "Délégation d'assurance",
      "Garanties décès & PTIA",
      "Incapacité & invalidité",
      "Tarif compétitif garanti",
    ],
  },
];

// ─── Benefits ─────────────────────────────────────────────────────────────────

export const benefits: Benefit[] = [
  {
    id: "fast",
    title: "Devis en 3 minutes",
    description:
      "Obtenez votre comparatif personnalisé instantanément, sans engagement et sans paperasse.",
    icon: Zap,
    stat: "3 min",
    statLabel: "pour votre devis",
  },
  {
    id: "personal",
    title: "Offres sur-mesure",
    description:
      "Nos experts analysent votre profil et vous proposent les garanties adaptées à vos besoins réels.",
    icon: UserCheck,
    stat: "100%",
    statLabel: "personnalisé",
  },
  {
    id: "support",
    title: "Disponible 24h/7j",
    description:
      "Un conseiller dédié à votre écoute, à tout moment. Par téléphone, chat ou email.",
    icon: Clock,
    stat: "24/7",
    statLabel: "à votre service",
  },
  {
    id: "price",
    title: "Meilleur prix garanti",
    description:
      "Nous négocions pour vous les meilleures conditions auprès de nos 50+ partenaires assureurs.",
    icon: TrendingDown,
    stat: "-40%",
    statLabel: "d'économies en moyenne",
  },
  {
    id: "secure",
    title: "100% sécurisé",
    description:
      "Vos données sont protégées et chiffrées. Courtier agréé ORIAS et certifié RGPD.",
    icon: Shield,
    stat: "ORIAS",
    statLabel: "agréé & certifié",
  },
  {
    id: "award",
    title: "Primé & reconnu",
    description:
      "Élu meilleur courtier en ligne 4 années de suite par le Magazine de l'Assurance.",
    icon: Award,
    stat: "#1",
    statLabel: "courtier en ligne",
  },
];

// ─── Process Steps ────────────────────────────────────────────────────────────

export const steps: Step[] = [
  {
    number: "01",
    title: "Analysez vos besoins",
    description:
      "Répondez à quelques questions simples sur votre situation et vos attentes. Cela prend moins de 2 minutes.",
  },
  {
    number: "02",
    title: "Comparez les offres",
    description:
      "Notre algorithme compare en temps réel les offres de 50+ assureurs pour vous présenter les meilleures options.",
  },
  {
    number: "03",
    title: "Choisissez votre plan",
    description:
      "Un conseiller expert vous accompagne pour sélectionner la formule la mieux adaptée à votre budget.",
  },
  {
    number: "04",
    title: "Souscrivez en ligne",
    description:
      "Signature électronique, 100% dématérialisé. Votre contrat est actif sous 24h et vos documents disponibles immédiatement.",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marie Leconte",
    role: "Directrice Marketing",
    avatar: "ML",
    rating: 5,
    text: "J'ai économisé 420€ par an sur ma mutuelle santé ! Le comparateur est bluffant et le conseiller m'a vraiment guidée vers la meilleure option pour ma famille. Je recommande à 100%.",
    insurance: "Mutuelle Santé",
    savings: "420€/an",
  },
  {
    id: "2",
    name: "Thomas Reynaud",
    role: "Entrepreneur",
    avatar: "TR",
    rating: 5,
    text: "Processus ultra-simple. En 5 minutes j'avais mon comparatif auto complet. Le tarif était 35% moins cher que mon ancienne assurance avec de meilleures garanties. Excellent service.",
    insurance: "Assurance Auto",
    savings: "35%",
  },
  {
    id: "3",
    name: "Isabelle Morin",
    role: "Infirmière",
    avatar: "IM",
    rating: 5,
    text: "Grâce à AssurPro, j'ai pu faire une délégation d'assurance prêt et économiser plus de 8 000€ sur la durée de mon crédit immobilier. Le conseiller était très professionnel et disponible.",
    insurance: "Assurance Prêt",
    savings: "8 000€",
  },
  {
    id: "4",
    name: "Jean-Paul Durand",
    role: "Retraité",
    avatar: "JD",
    rating: 4,
    text: "Très satisfait du service. J'avais des questions spécifiques sur ma couverture habitation et le conseiller a pris le temps de tout m'expliquer. Souscription simple et rapide.",
    insurance: "Assurance Habitation",
  },
  {
    id: "5",
    name: "Sophie Blanchard",
    role: "Cheffe de projet IT",
    avatar: "SB",
    rating: 5,
    text: "Interface intuitive, comparaison claire des offres, et assistance réactive. AssurPro m'a fait gagner du temps et de l'argent. C'est la référence pour les assurances en ligne !",
    insurance: "Mutuelle Santé",
    savings: "280€/an",
  },
  {
    id: "6",
    name: "Karim Benzara",
    role: "Architecte",
    avatar: "KB",
    rating: 5,
    text: "J'avais une situation complexe avec plusieurs biens immobiliers. L'équipe a su me proposer une solution globale cohérente. Économies réelles et couverture optimisée.",
    insurance: "Multi-risques",
    savings: "650€/an",
  },
];

// ─── Partners ─────────────────────────────────────────────────────────────────

export const partners: Partner[] = [
  { id: "1", name: "AXA France", initial: "AXA", color: "#00008F" },
  { id: "2", name: "Allianz", initial: "ALZ", color: "#003781" },
  { id: "3", name: "Generali", initial: "GEN", color: "#CC0000" },
  { id: "4", name: "MMA", initial: "MMA", color: "#E8000D" },
  { id: "5", name: "Matmut", initial: "MAT", color: "#E30613" },
  { id: "6", name: "Maif", initial: "MAI", color: "#009639" },
  { id: "7", name: "GMF", initial: "GMF", color: "#004B9B" },
  { id: "8", name: "Groupama", initial: "GRP", color: "#D0021B" },
  { id: "9", name: "Covéa", initial: "COV", color: "#1A4785" },
  { id: "10", name: "Swiss Life", initial: "SWL", color: "#C00000" },
  { id: "11", name: "Prévoir", initial: "PRV", color: "#005FA8" },
  { id: "12", name: "April", initial: "APR", color: "#E95B0C" },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

export const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "01 23 45 67 89",
    href: "tel:+33123456789",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@assurpro.fr",
    href: "mailto:contact@assurpro.fr",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "12 Rue de la Paix, 75001 Paris",
    href: "#",
  },
  {
    icon: Globe,
    label: "Horaires",
    value: "Lun–Ven 8h30–19h | Sam 9h–17h",
    href: "#",
  },
];

export const insuranceTypes = [
  "Mutuelle Santé",
  "Assurance Auto",
  "Assurance Habitation",
  "Assurance Prêt",
  "Assurance Vie",
  "Prévoyance",
  "Assurance Professionnelle",
  "Autre",
];
