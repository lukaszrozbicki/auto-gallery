import { Photo } from './Photo';
import { PhotoRepository } from './PhotoRepository';
import { UseCase } from './UseCase';
import { injectDependencies } from 'ioc/utils';
import { ApplicationTypes } from 'ioc/types';

export const getPhotosFactory = (photosRepository: PhotoRepository): UseCase<Photo[]> =>
  async (): Promise<Photo[]> => await photosRepository.getPhotos();

export const createGetPhotos = injectDependencies(
  ApplicationTypes.PhotoRepository,
)(getPhotosFactory);

/*
@injectable()
export class GetPhotos implements UseCase<Photo[], Promise<Photo[]>> {
  @inject(ApplicationTypes.PhotoRepository)
  private readonly photoRepository;

  execute = async (): Promise<Photo[]> => await this.photoRepository.getPhotos();
}
*/
