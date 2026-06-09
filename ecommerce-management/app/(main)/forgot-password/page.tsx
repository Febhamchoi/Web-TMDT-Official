'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { requestPasswordReset } from '@/service/auth';
import { validateEmail } from '@/lib/validations/form';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = validateEmail(email);
    if (!validation.valid) {
      toast.error(validation.error || 'Email không hợp lệ');
      return;
    }

    try {
      setLoading(true);
      await requestPasswordReset(email.trim());
      toast.success('Đã gửi email đặt lại mật khẩu. Vui lòng kiểm tra hộp thư.');
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Không thể gửi email đặt lại mật khẩu');
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
            <Mail className="h-5 w-5" />
          </div>
          <h1 className="text-3xl font-light tracking-wide text-gray-900">Quên mật khẩu</h1>
          <p className="mt-2 text-sm text-gray-500">
            Nhập email của bạn, chúng tôi sẽ gửi link đặt lại mật khẩu.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-gray-900 bg-gray-50 focus:bg-white"
              required
            />
          </div>

          <Button
            type="submit"
            className="h-12 w-full rounded-none bg-gray-900 text-sm tracking-widest hover:bg-black"
            disabled={loading}
          >
            {loading ? 'ĐANG XỬ LÝ...' : 'GỬI LINK ĐẶT LẠI'}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <Link href="/login" className="font-medium text-gray-900 underline underline-offset-2">
            Quay lại đăng nhập
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
