import { home, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { easeOut, motion} from 'framer-motion';
import { Brain, Timer, Sparkles, ArrowRight} from 'lucide-react';

export default function Welcome({
  canRegister = true,
}: {
  canRegister?: boolean;
}) {
  const { auth } = usePage<SharedData>().props;

  return (
    <>
      <Head title="Welcome">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen relative bg-[#0a0a0a] text-white">
        {/* Background gradient overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-[#4271FD]/10 via-transparent to-[#841FEA]/10 pointer-events-none" />

        {/* Header */}
        <header className="relative z-10 w-full px-6 py-4 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link href={home()} className="flex items-center gap-2">
                <img src="/images/Taskify.png" alt="logo-taskify" className="h-12 w-auto" />
                <span className="text-xl font-semibold">
                  Taskify
                </span>
              </Link>
            </div>

            {/* Navigation */}
            {/* <div className="hidden md:flex items-center gap-6">
              <Link
                href={home()}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href={register()}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Tasks
              </Link>
              <Link
                href={register()}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Notes
              </Link>
              <Link
                href={register()}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Calendar
              </Link>
            </div> */}

            <div className="flex items-center gap-4">
              <Link
                href={login()}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Log in
              </Link>

              {canRegister && (
                <Link
                  href={register()}
                  className="inline-block rounded-md px-4 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-[#4271FD] to-[#841FEA] shadow-sm hover:shadow-[0_0_15px_rgba(253,253,252,0.45)] transition-all duration-300"
                >
                  Register
                </Link>
              )}
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
          <div className="w-full max-w-5xl text-center">
            {/* Hero */}
            <div className="space-y-8">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-tight">
                <span className="bg-gradient-to-r from-[#4271FD] to-[#841FEA] bg-clip-text text-transparent">
                  Simplify{' '}
                </span>
                your task,
                <br />
                amplify your results
              </h1>

              <motion.p
                className="mt-6 text-lg leading-8 text-white/70 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: easeOut }}
              >
                Taskify helps you simplify your workflow and focus on what truly matters.
              </motion.p>

              <div className="mt-10 flex items-center justify-center gap-4">
                <Link
                  href={register()}
                  className="px-8 py-3 rounded-md text-white font-semibold text-lg bg-gradient-to-r from-[#4271FD] to-[#841FEA] shadow-sm hover:shadow-[0_0_25px_rgba(253,253,252,0.45)] transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mt-20 text-center w-full">
              <p className="text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Why choose us?
              </p>
              
              <div className="mt-10 w-full max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                  {/* Left */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="rounded-2xl bg-white/5 border border-white/5 shadow-lg p-10 lg:p-12 backdrop-blur-sm flex flex-col justify-center"
                  >
                    <h2 className="text-3xl font-semibold text-white">
                      The{' '}
                      <span className="bg-gradient-to-r from-[#4271FD] to-[#841FEA] bg-clip-text text-transparent font-extrabold">
                        FUTURE
                      </span>
                    </h2>

                    <h3 className="mt-4 text-2xl font-bold leading-tight text-white">
                      Task management made simple for you.
                    </h3>

                    <p className="mt-6 text-lg leading-8 text-white/70">
                      Taskify is a modern workspace built to help you stay organized and productive. 
                      You can create and manage tasks, set priorities, and track progress. Whether you’re a student, 
                      freelancer, or professional, Taskify gives you everything to plan, focus, and achieve more effortlessly.
                    </p>
                  </motion.div>

                  {/* Right */}
                  <motion.aside
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="rounded-2xl bg-white/5 border border-white/5 shadow-lg p-8 backdrop-blur-sm flex flex-col justify-between"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: '+12000', label: 'Tasks completed every month' },
                        { value: '+3500', label: 'Active users' },
                        { value: '+25%', label: 'Increase in productivity' },
                        { value: '99.9%', label: 'Uptime and reliability' },
                      ].map((s) => (
                        <motion.div
                          key={s.value}
                          whileHover={{ scale: 1.05, rotate: 1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                          className="rounded-2xl overflow-hidden"
                        >
                          <div className="rounded-2xl p-[2px] bg-gradient-to-r from-[#4271FD] via-[#4AA9FF] to-[#841FEA]">
                            <div className="bg-[#0a0a0a] rounded-xl p-6">
                              <div className="text-3xl font-extrabold bg-gradient-to-r from-[#4271FD] to-[#841FEA] bg-clip-text text-transparent">
                                {s.value}
                              </div>
                              <p className="mt-2 text-sm text-white/70">{s.label}</p>
                              </div>
                            </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <Link
                        href={register()}
                        className="w-full inline-flex items-center justify-center rounded-md px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#4271FD] to-[#841FEA] shadow-sm hover:shadow-[0_0_15px_rgba(253,253,252,0.45)] transition-all duration-300"
                      >
                        Join Us Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.aside>
                </div>
              </div>
            </div>


          {/* Core Values*/}
          <section className="mt-20 w-full">
            <p className="text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Our Core Values
            </p>
            <div className="mt-10 max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: 'Smart Task Management', desc: "Focus on what matters most", icon: <Brain className="h-60 w-25 text-[#4271FD]"/> },
                  { title: 'Real Time Sync', desc: "Your tasks, always up to date", icon: <Timer className="h-60 w-25 text-[#4AA9FF]"/> },
                  { title: 'Insightful Dashboard', desc: "Track your progress easily", icon: <Sparkles className="h-60 w-25 text-[#FFD580]"/> }
                ].map((card) => (
                  <div key={card.title} className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(253, 253, 252, 0.25)]  transation-all duration-300">
                    <h4 className="text-xl font-semibold text-white mb-4">{card.title}</h4>
                    <p className="text-sm text-white/70">{card.desc}</p>
                    <motion.div
                    whileHover={{scale: 1.05}}
                    className="mt-6 flex justify-center"
                  >
                    {card.icon}
                  </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Highlights */}
          <section className="mt-20 w-full">
            <p className="text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              The Highlights of Taskify
            </p>
            <div className="mt-10 max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: 'Task List', img: '/images/tasks.png' },
                  { title: 'Notes', img: '/images/notes.png' },
                  { title: 'Event', img: '/images/calendar.png' },
                ].map((card) => (
                  <div key={card.title} className="rounded-2xl bg-white/5 border border-white/5 p-8 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(253,253,252,0.25)] transition-all duration-300">
                    <h4 className="text-xl font-semibold text-white mb-4">{card.title}</h4>
                    <div className="w-36 h-36 mb-6 mx-auto">
                      <img src={card.img} alt={card.title} className="w-full h-full object-contain" />
                    </div>
                    <Link
                      href={register()}
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-md text-white font-medium bg-gradient-to-r from-[#4271FD] via-[#4AA9FF] to-[#841FEA]"
                    >
                      See Detail
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team */}
          <div className="mt-20">
            <p className="text-sm text-white/70">Our Team</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-8">
              {['Erizka Nia Ramadhani', 'Adi Pratama Putra', 'Zakki Khairul Abdulaziz'].map(
                (team) => (
                  <div
                    key={team}
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                  >
                    {team}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </main>
      </div>
    </>
  );
}
