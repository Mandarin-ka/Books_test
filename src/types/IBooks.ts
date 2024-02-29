export interface IBooks {
  totalItems?: number;
  items?: IBook[];
}

export interface IBook {
  id: string;
  volumeInfo?: VolumeInfo;
}

export interface VolumeInfo {
  title?: string;
  authors?: string[];
  publisher?: string;
  description?: string;
  categories?: string[];
  imageLinks?: ImageLinks;
}

export interface ImageLinks {
  smallThumbnail?: string;
  thumbnail?: string;
}
