import { renderWithClient } from '../../../api/setupTest';
import Login from '../index';

describe('Login page', () => {
  test('Should Login Page render', () => {
    const view = renderWithClient(<Login />);
    expect(view).toBeDefined();
  });
});
