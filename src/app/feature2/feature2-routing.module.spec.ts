import { Feature2RoutingModule } from './feature2-routing.module';

describe('Feature2RoutingModule', () => {
  let feature2RoutingModule: Feature2RoutingModule;

  beforeEach(() => {
    feature2RoutingModule = new Feature2RoutingModule();
  });

  it('should create an instance', () => {
    expect(feature2RoutingModule).toBeTruthy();
  });
});
