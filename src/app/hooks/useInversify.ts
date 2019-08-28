import { appContainer } from 'application';

// TODO maybe rename to useInject
export const useInversify = <T>(type: symbol): T => {
  return appContainer.get<T>(type);
};
