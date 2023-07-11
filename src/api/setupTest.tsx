/* eslint-disable react/display-name */
import '@testing-library/jest-dom';
import * as React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { setupServer } from 'msw/node';
import { setLogger } from 'react-query';
import { handlers } from '../../__mocks__/handlers';

export const createTestQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
};

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(<QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>);
  return {
    ...result,
    rerender: /* istanbul ignore next */ (rerenderUi: React.ReactElement) =>
      rerender(<QueryClientProvider client={testQueryClient}>{rerenderUi}</QueryClientProvider>),
    queryClient: testQueryClient,
  };
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
  );
}

export const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});
