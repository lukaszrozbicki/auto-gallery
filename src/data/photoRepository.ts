import { PhotoRepository } from 'domain/PhotoRepository';
import { Photo } from 'domain/Photo';
import { Source } from './sources/Source';
import { PhotoThumbnail } from './sources/models';
import { photoMapper } from './mappers/photoMapper';
import { injectDependencies } from 'ioc/utils';
import { ApplicationTypes } from 'ioc/types';

export const photoRepositoryFactory = (apiSource: Source): PhotoRepository => (
  {
    getPhotos: async (): Promise<Photo[]> => {
      const rawThumbnails: PhotoThumbnail[] = await apiSource.getThumbnails();

      return rawThumbnails.map(photoMapper.fromEntityToDomain).reverse();
    },
  }
);

export const createPhotoRepository = injectDependencies(
  ApplicationTypes.APISource,
)(photoRepositoryFactory);
