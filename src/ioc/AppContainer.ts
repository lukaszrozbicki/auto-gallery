import { Container } from 'inversify';
import { ApplicationModule } from 'ioc/ApplicationModule';

export class AppContainer extends Container {
  constructor() {
    super({
      defaultScope: 'Singleton',
      skipBaseClassChecks: true,
    });

    this.load(new ApplicationModule());
  }
}
