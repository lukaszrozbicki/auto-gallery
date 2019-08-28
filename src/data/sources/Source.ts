import { PhotoEntity } from '../PhotoEntity';
import { PhotoThumbnail } from './models';

export interface Source {
  getFiles: () => Promise<PhotoEntity[]>;
  getThumbnails: (files: PhotoEntity[]) => Promise<PhotoThumbnail[]>;
}
