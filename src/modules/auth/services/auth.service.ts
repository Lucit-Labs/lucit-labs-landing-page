import { User } from '@/modules/user/types/user.types';

class AuthService {
  public async createClient(data: {
    name: string;
    last_name: string;
    email: string;
    password: string;
    phone_number: string;
  }): Promise<User> {
    const request = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );

    if (!request.ok) {
      throw await request.json();
    }

    const user = await request.json();

    return user as User;
  }
}

const authService = new AuthService();
export default authService;
