import http from './http';

interface LoginResponse {
  code: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    userInfo: {
      userId: string;
      email: string;
      role: string;
      fullName: string;
    };
  };
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await http.post<LoginResponse>('/auth/login', {
    email,
    password,
  });
  return response.data;
};

export const adminLogin = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await http.post<LoginResponse>('/auth/admin/login', {
    email,
    password,
  });
  return response.data;
};

export const requestPasswordReset = async (email: string) => {
  const response = await http.post('/auth/forgot-password', { email });
  return response.data;
};

export const resetPassword = async (payload: {
  email: string;
  token: string;
  password: string;
}) => {
  const response = await http.post('/auth/reset-password', payload);
  return response.data;
};

/**
 * Redirect người dùng đến Google OAuth
 * Sẽ chuyển hướng đến backend OAuth endpoint
 */
export const loginWithGoogle = () => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.log('loginWithGoogle apiBaseUrl:', apiBaseUrl);
  }
  window.location.href = `${apiBaseUrl}/auth/google`;
};
