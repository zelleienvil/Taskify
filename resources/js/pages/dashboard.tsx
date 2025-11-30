import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { List, CheckCircle, Clock, AlertCircle, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props {
  stats?: {
    totalLists: number;
    totalTasks: number;
    completedTasks: number;
    pendingTasks: number;
  };
}

const breadcrumbs: BreadcrumbItem[] = [
  { title: "", href: "/dashboard" },
];

export default function Dashboard({
  stats = {
    totalLists: 0,
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
  },
}: Props) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />
      <div className="min-h-screen flex flex-col gap-6 rounded-xl p-6 bg-[#0A0A0A] text-white transition-all duration-300">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-[#4271FD] via-[#4AA9FF] to-[#841FEA] bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-white/60 mt-1">
              Welcome back! Here's your overview.
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="/lists">
              <Button className="bg-gradient-to-r from-[#4271FD] to-[#841FEA] hover:shadow-[0_0_20px_rgba(132,31,234,0.6)] hover:scale-[1.03] transition-all text-white">
                <List className="h-4 w-4 mr-2" />
                View Lists
              </Button>
            </Link>
            <Link href="/tasks">
              <Button className="bg-gradient-to-r from-[#4AA9FF] to-[#841FEA] hover:shadow-[0_0_20px_rgba(66,113,253,0.6)] hover:scale-[1.03] transition-all text-white">
                <CheckCircle className="h-4 w-4 mr-2" />
                View Tasks
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-4">
          {[
            {
              title: "Total Lists",
              value: stats.totalLists,
              color: "from-[#4271FD]/20 to-[#841FEA]/10 border-[#4AA9FF]/30 text-[#6C8CFF]",
              icon: <List className="h-5 w-5 text-[#6C8CFF]" />,
            },
            {
              title: "Total Tasks",
              value: stats.totalTasks,
              color: "from-[#4AA9FF]/20 to-[#4271FD]/10 border-[#4AA9FF]/25 text-[#7DAFFF]",
              icon: <CheckCircle className="h-5 w-5 text-[#7DAFFF]" />,
            },
            {
              title: "Pending Tasks",
              value: stats.pendingTasks,
              color: "from-[#FF7A7A]/20 to-[#FFB6B6]/10 border-[#FF8A8A]/25 text-[#FF9A9A]",
              icon: <Clock className="h-5 w-5 text-[#FF9A9A]" />,
            },
            {
              title: "Completed Tasks",
              value: stats.completedTasks,
              color: "from-[#7AFFB4]/20 to-[#B4FFD8]/10 border-[#8DFFC2]/25 text-[#9EFFCC]",
              icon: <AlertCircle className="h-5 w-5 text-[#9EFFCC]" />,
            },
          ].map((card, i) => (
            <Card
              key={i}
              className={`bg-gradient-to-br ${card.color} backdrop-blur-sm border rounded-2xl p-1 transition-all duration-500 hover:shadow-[0_0_25px_rgba(132,31,234,0.35)] hover:scale-[1.05]`}
            >
              <div className="bg-[#0A0A0A]/80 rounded-xl p-4">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {card.title}
                  </CardTitle>
                  {card.icon}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{card.value}</div>
                  <p className="text-xs text-white/50">Overview</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid gap-6 md:grid-cols-2 mt-4">
          <Card className="border-[#4AA9FF]/20 bg-[#141414]/60 backdrop-blur-md rounded-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(74,169,255,0.3)] hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white/90">
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Link href="/lists">
                  <Button variant="outline" className="w-full justify-start border-white/10 hover:border-[#4271FD] hover:bg-[#1A1A1A]/60 hover:shadow-[0_0_15px_rgba(66,113,253,0.4)] transition-all">
                    <List className="mr-2 h-4 w-4" />
                    View All Lists
                  </Button>
                </Link>
                <Link href="/tasks">
                  <Button variant="outline" className="w-full justify-start border-white/10 hover:border-[#841FEA] hover:bg-[#1A1A1A]/60 hover:shadow-[0_0_15px_rgba(132,31,234,0.4)] transition-all">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    View All Tasks
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#4AA9FF]/20 bg-[#141414]/60 backdrop-blur-md rounded-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(132,31,234,0.3)] hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white/90">
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-br from-[#4271FD]/40 to-[#841FEA]/40 p-2">
                    <Plus className="h-4 w-4 text-[#A98AFF]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/90">
                      Welcome to Taskify
                    </p>
                    <p className="text-xs text-white/60">
                      Get started by creating your first list or task.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
