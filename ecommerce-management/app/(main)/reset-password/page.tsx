'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { resetPassword } from '@/service/auth';
import { validatePassword, validateConfirmPassword } from '@/lib/validations/form';

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token') || '';
  const initialEmail = searchParams.get('email') || '';

  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const canSubmit = useMemo(() => Boolean(token), [token]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const passwordValidation = validatePassword(password);
    const confirmValidation = validateConfirmPassword(password, confirmPassword);

    if (!email.trim()) {
      toast.error('Vui lòng nhập email');
      return;
    }
    if (!passwordValidation.valid) {
      toast.error(passwordValidation.error || 'Mật khẩu không hợp lệ');
      return;
    }
    if (!confirmValidation.valid) {
      toast.error(confirmValidation.error || 'Xác nhận mật khẩu không hợp lệ');
      return;
    }

    try {
      setLoading(true);
      await resetPassword({
        email: email.trim(),
        token,
        password,
      });
      toast.success('Đặt lại mật khẩu thành công');
      router.push('/login');
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Không thể đặt lại mật khẩu');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <motion.div
        className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h1 className="text-3xl font-light tracking-wide text-gray-900">Đặt lại mật khẩu</h1>
          <p className="mt-2 text-sm text-gray-500">Tạo mật khẩu mới cho tài khoản của bạn.</p>
        </div>

        {!token ? (
          <div className="space-y-4 text-center">
            <p className="text-sm text-gray-600">
              Liên kết đặt lại mật khẩu không hợp lệ hoặc đã hết hạn.
            </p>
            <Button asChild className="w-full rounded-none bg-gray-900 hover:bg-black">
              <Link href="/forgot-password">Gửi lại link đặt mật khẩu</Link>
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-gray-900 bg-gray-50 focus:bg-white"
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password">Mật khẩu mới</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-gray-900 bg-gray-50 focus:bg-white"
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="confirmPassword">Xác nhận mật khẩu</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-12 rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-gray-900 bg-gray-50 focus:bg-white"
                required
              />
            </div>

            <Button
              type="submit"
              className="h-12 w-full rounded-none bg-gray-900 text-sm tracking-widest hover:bg-black"
              disabled={loading || !canSubmit}
            >
              {loading ? 'ĐANG XỬ LÝ...' : 'LƯU MẬT KHẨU MỚI'}
            </Button>
          </form>
        )}

        <div className="mt-6 text-center text-sm text-gray-500">
          <Link href="/login" className="font-medium text-gray-900 underline underline-offset-2">
            Quay lại đăng nhập
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
