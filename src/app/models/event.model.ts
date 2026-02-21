export interface Quote {
  home: number;
  draw?: number;
  away: number;
}

export interface SportEvent {
  id: number;
  nome: string;
  sport: string;
  categoria: string;
  quote: Quote;
}

export interface SportConCategorie {
  sport: string;
  categorie: string[];
}
