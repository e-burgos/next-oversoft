import { renderWithClient } from '../../../api/setupTest';
import Companies from '../index';

describe('Companies page', () => {
  test('Should Companies Page render', () => {
    const view = renderWithClient(<Companies />);
    expect(view).toBeDefined();
  });
});
