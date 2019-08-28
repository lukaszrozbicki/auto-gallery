import React, { FunctionComponent, useEffect, useState } from 'react';

import { UseCase } from 'domain/UseCase';
import { Photo } from 'domain/Photo';
import { useInversify } from 'app/hooks/useInversify';
import { ApplicationTypes } from 'ioc/types';

export const App: FunctionComponent = () => {
  const [ photos, setPhotos ] = useState<Photo[]>([]);
  const getPhotos = useInversify<UseCase<Photo[]>>(ApplicationTypes.GetPhotosUseCase);

  useEffect(
    () => {
      const fetchPhotos = async () => {
        const photos = await getPhotos();

        isCancelled || setPhotos(photos);
      };
      let isCancelled = false;

      fetchPhotos();

      return () => {
        isCancelled = true;
      }
    },
    [ getPhotos ],
  );

  if (photos.length === 0) {
    return <p>loading...</p>;
  }

  return (
    <ul>
      {photos.map((photo: Photo) => (
        <li
          key={photo.id}
        >
          <img src={`data:image/jpeg;base64,${photo.url}`} alt="" />
        </li>
      ))}
    </ul>
  )
};
