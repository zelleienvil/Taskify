import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';
import { CheckSquare } from 'lucide-react'; 

interface LoginProps {
  status?: string;
  canResetPassword: boolean;
  canRegister: boolean;
}

export default function Login({ status, canResetPassword, canRegister }: LoginProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white p-4 relative overflow-hidden">
      <Head title="Log in" />

      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#4271FD]/10 via-transparent to-[#841FEA]/10 pointer-events-none" />

      {/* Grid layout: illustration + form */}
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left side - Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center space-y-6 animate-fade-in">
          <div className="text-center space-y-2">
            <h2 className="text-6xl font-bold bg-gradient-to-r from-[#4271FD] to-[#841FEA] bg-clip-text text-transparent">
              Organize Your Future
            </h2>
            <p className="text-white/70 text-sm">Experience the next generation of task management</p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full max-w-md mx-auto animate-slide-up">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_0_25px_rgba(132,31,234,0.25)]">
            {/* Logo and title */}
            <div className="flex items-center justify-center space-x-2 mb-2">
                <img src="/images/taskify.png" alt="" className="h-25 w-auto"/>
            </div>

            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-semibold text-white">Welcome Back</h2>
                <p className="text-sm text-white/70">Enter your email and password below to log in</p>
              </div>

              <Form {...store.form()} resetOnSuccess={['password']} className="space-y-4">
                {({ processing, errors }) => (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                        autoFocus
                        tabIndex={1}
                        className="bg-white/5 border-white/10 placeholder:text-white/40 focus:border-[#4271FD] transition-colors"
                      />
                      <InputError message={errors.email} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        required
                        tabIndex={2}
                        className="bg-white/5 border-white/10 placeholder:text-white/40 focus:border-[#841FEA] transition-colors"
                      />
                      <InputError message={errors.password} />
                    </div>

                    {canResetPassword && (
                      <div className="text-right">
                        <TextLink href={request()} className="text-sm text-white/70 hover:text-white transition-colors">
                          Forgot password?
                        </TextLink>
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#4271FD] to-[#841FEA] hover:opacity-90 text-white font-semibold shadow-[0_0_25px_rgba(132,31,234,0.3)] hover:shadow-[0_0_15px_rgba(132,31,234,0.3)] transition-all duration-500"
                      tabIndex={4}
                      disabled={processing}
                    >
                      {processing && <Spinner />}
                      Log in
                    </Button>
                  </>
                )}
              </Form>

              {canRegister && (
                <p className="text-center text-sm text-white/70">
                  Don’t have an account?{' '}
                  <TextLink href={register()} className="text-[#4271FD] hover:text-[#841FEA] font-medium transition-colors">
                    Sign up
                  </TextLink>
                </p>
              )}

              {status && (
                <div className="mt-4 text-center text-sm font-medium text-green-500">{status}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
