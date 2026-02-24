export interface PublicationInterface {
  id: number;
  title: string;
  authors: string;
  journal: string;
  publisher: string;
  year: number;
  html: string[];
  pdf: string[];
  img: string;
}
