import { renderWithClient } from '../../../api/setupTest';
import Home from '../index';

describe('home page', () => {
  test('Should Home Page render', () => {
    const view = renderWithClient(<Home />);
    expect(view).toBeDefined();
  });
});
