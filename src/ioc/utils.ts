import { interfaces } from 'inversify';

type GetReturnType<F extends Function> =
  F extends (...x: any[]) => infer R ? R : never

export const injectDependencies = (...dependencies: symbol[]) =>
  <F extends Function>(factory: F) =>
    ({ container }: interfaces.Context): GetReturnType<F> => {
      const injections = dependencies.map((dependencyType: symbol) => {
        return container.get(dependencyType);
      });

      return factory.call(factory, ...injections);
    };
