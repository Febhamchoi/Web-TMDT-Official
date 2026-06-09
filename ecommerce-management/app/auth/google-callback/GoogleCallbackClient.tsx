'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';

import { useAuth } from '@/context/AuthContext';

export function GoogleCallbackClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const accessToken = searchParams.get('accessToken');
      const refreshToken = searchParams.get('refreshToken');
      const userInfoStr = searchParams.get('userInfo');

      if (!accessToken || !refreshToken || !userInfoStr) {
        throw new Error('Thiếu thông tin đăng nhập');
      }

      const userInfo = JSON.parse(userInfoStr);

      login(accessToken, refreshToken, userInfo, true, '/');
      setLoading(false);
    } catch (error: any) {
      console.error('Google callback error:', error);
      toast.error(error?.message || 'Đăng nhập Google thất bại!');
      router.push('/login');
    }
  }, [searchParams, login, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-600">Đang xử lý đăng nhập...</p>
      </div>
    </div>
  );
}
