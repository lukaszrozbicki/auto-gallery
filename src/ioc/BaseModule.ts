import { ContainerModule, interfaces } from 'inversify';

export abstract class BaseModule extends ContainerModule {
  protected bind: interfaces.Bind;

  constructor() {
    super((bind: interfaces.Bind) => {
      this.bind = bind;

      this.init();
    });
  }

  protected abstract init(): void;
}
