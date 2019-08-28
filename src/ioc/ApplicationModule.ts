import { BaseModule } from 'ioc/BaseModule';
import { Source } from 'data/sources/Source';
import { ApplicationTypes } from 'ioc/types';
import { createAPISource } from 'data/sources/APISource';
import { PhotoRepository } from 'domain/PhotoRepository';
import { createPhotoRepository } from 'data/photoRepository';
import { Photo } from 'domain/Photo';
import { UseCase } from 'domain/UseCase';
import { createGetPhotos } from 'domain/getPhotos';
import { bootstrapAutoGalleryApplication } from 'app';

export class ApplicationModule extends BaseModule {
  protected init(): void {
    this.bind<Source>(ApplicationTypes.APISource)
      .toDynamicValue(createAPISource);

    this.bind<PhotoRepository>(ApplicationTypes.PhotoRepository)
      .toDynamicValue(createPhotoRepository);

    this.bind<UseCase<Photo[]>>(ApplicationTypes.GetPhotosUseCase)
      .toDynamicValue(createGetPhotos);

    this.bind<Function>(ApplicationTypes.AutoGalleryApplication)
      .toConstantValue(bootstrapAutoGalleryApplication);
  }
}
