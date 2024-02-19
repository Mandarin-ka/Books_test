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
  publishedDate?: string;
  description?: string;
  pageCount?: number;
  categories?: string[];
  allowAnonLogging?: boolean;
  contentVersion?: string;
  imageLinks?: ImageLinks;
  previewLink?: string;
  infoLink?: string;
  canonicalVolumeLink?: string;
  subtitle?: string;
}

export interface ImageLinks {
  smallThumbnail?: string;
  thumbnail?: string;
}
