import { SERVICE_NAME } from './index';

describe('tworepo-backend', () => {
  it('should export SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('tworepo-backend');
  });
});