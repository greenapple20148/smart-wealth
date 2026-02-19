
export interface NavItem {
  label: string;
  href: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  date: string;
}

export interface FeaturedGuide {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  color: string;
}
