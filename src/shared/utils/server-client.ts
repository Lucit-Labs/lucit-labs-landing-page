import { cookies } from 'next/headers';

import { logout } from '@/actions/logout';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface ApiClientOptions extends Omit<
  globalThis.RequestInit,
  'method' | 'body'
> {
  body?: Record<string, unknown>;
}

/**
 * Server-side API client that automatically attaches the authorization token
 * from cookies to all requests.
 *
 * Throws `UnauthorizedError` on 401 responses for global handling.
 *
 * @example
 * const response = await apiClient("/customer", {
 *   method: "POST",
 *   body: { name: "John" }
 * });
 */
export async function apiClient<T = unknown>(params: {
  path: string;
  method: HttpMethod;
  options?: ApiClientOptions;
  queryParams?: string;
}): Promise<{ ok: boolean; status: number; data: T }> {
  const { path, method = 'GET', options = {}, queryParams } = params;

  const cookieStore = await cookies();
  const token = cookieStore.get('session_token');

  const { body, headers, ...restOptions } = options;

  const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`);

  if (queryParams) url.search = queryParams;

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token.value}` }),
      ...headers,
    },
    ...(body && { body: JSON.stringify(body) }),
    ...restOptions,
  });

  const data = await response.json();

  if (response.status === 401) {
    console.error('Unauthorized access logging out');
    await logout();
    return { ok: false, status: response.status, data };
  }

  // Throw for other errors
  if (!response.ok) {
    console.error(`API request error: ${response.status}`, data);
    return { ok: false, status: response.status, data };
  }

  return {
    ok: response.ok,
    status: response.status,
    data,
  };
}
