/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, type ReactNode } from 'react';

import {
  QueryClientProvider,
  QueryClient,
  MutationCache,
  QueryCache,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { logout } from '@/actions/logout';

const handleGlobalError = async (error: unknown) => {
  /* const errorData = error as ApiError

  if (errorData.code === ApiErrorCodes.UNAUTHORIZED) {
    await logout();
  }*/
};

export const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
          },
        },
        queryCache: new QueryCache({
          onError: handleGlobalError,
        }),
        mutationCache: new MutationCache({
          onError: handleGlobalError,
        }),
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
