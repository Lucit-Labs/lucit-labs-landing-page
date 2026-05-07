import { cookies } from 'next/headers';

import { ApiError } from '@/shared/types/error.types';

export async function login(data: { email: string; password: string }) {
  const { email, password } = data;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const resData = await res.json();

  if (!res.ok) {
    return { success: false, error: resData as ApiError };
  }

  (await cookies()).set('session_token', resData.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
    sameSite: 'lax',
  });

  return { success: true };
}
