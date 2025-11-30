import { login } from '@/routes';
import { store } from '@/routes/register';
import { Form, Head } from '@inertiajs/react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';


export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#4271FD]/10 via-transparent to-[#841FEA]/10 pointer-events-none" />

      <Head title="Register" />

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side - Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center space-y-6 animate-fade-in">
          <div className="text-center space-y-2">
            <h2 className="text-6xl font-bold bg-gradient-to-r from-[#4271FD] to-[#841FEA] bg-clip-text text-transparent">
              Join Taskify Today
            </h2>
            <p className="text-muted-foreground">
              Create your account and start organizing smarter
            </p>
          </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="w-full max-w-md mx-auto animate-slide-up">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_0_25px_rgba(132,31,234,0.25)]">
            {/* Logo and Title */}
            <div className="flex items-center justify-center space-x-2 mb-2">
              <img src="images/taskify.png" alt="" className="h-25 w-auto" />
            </div>

            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-semibold text-white">
                  Create Your Account
                </h2>
                <p className="text-sm text-white/70">
                  Enter your details below to get started
                </p>
              </div>

              <Form
                {...store.form()}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing
                className="space-y-4"
              >
                {({ processing, errors }) => (
                  <>
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        required
                        className="bg-background/50 border-white/10 text-white placeholder:text-white/50 focus:border-[#841FEA] transition-colors"
                      />
                      <InputError message={errors.name} />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="bg-background/50 border-white/10 text-white placeholder:text-white/50 focus:border-[#841FEA] transition-colors"
                      />
                      <InputError message={errors.email} />
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white">Password</Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="bg-background/50 border-white/10 text-white placeholder:text-white/50 focus:border-[#841FEA] transition-colors"
                      />
                      <InputError message={errors.password} />
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                      <Label htmlFor="password_confirmation" className="text-white">Confirm Password</Label>
                      <Input
                        id="password_confirmation"
                        name="password_confirmation"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="bg-background/50 border-white/10 text-white placeholder:text-white/50 focus:border-[#841FEA] transition-colors"
                      />
                      <InputError message={errors.password_confirmation} />
                    </div>

                    <Button
                      type="submit"
                      disabled={processing}
                      className="w-full bg-gradient-to-r from-[#4271FD] to-[#841FEA] hover:opacity-90 text-white font-semibold shadow-[0_0_25px_rgba(132,31,234,0.3)] hover:shadow-[0_0_15px_rgba(132,31,234,0.3)] transition-all duration-300"
                    >
                      {processing && <Spinner />}
                      Create Account
                    </Button>
                  </>
                )}
              </Form>

              <p className="text-center text-sm text-white/70">
                Already have an account?{' '}
                <TextLink href={login()} className="text-[#841FEA] hover:text-[#4271FD] transition-colors font-medium">
                  Log in
                </TextLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )};
