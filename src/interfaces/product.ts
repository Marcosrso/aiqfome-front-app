export interface ProductOptionChoice {
  label: string;
  value: number;
}

export interface ProductOption {
  id: string;
  title: string;
  type: "single" | "multi" | "text";
  required?: boolean;
  choices?: ProductOptionChoice[];
  placeholder?: string;
  min?: number;
  max?: number;
}

export interface Product {
  slug: string;
  name: string;
  description: string;
  value: number;
  img: string;
  altImg: string;
  options: ProductOption[];
}
