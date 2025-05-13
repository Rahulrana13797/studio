
"use client";
import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell as RechartsCell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import type { WeeklyProgress, TaskStatusItem, Milestone, RiskItem } from '@/lib/types';

const weeklyProgressData: WeeklyProgress[] = [
  { week: 'Week 1', completed: 85, total: 100 },
  { week: 'Week 2', completed: 60, total: 100 },
  { week: 'Week 3', completed: 25, total: 100 },
  { week: 'Week 4', completed: 5, total: 100 }
];

const taskStatusData: TaskStatusItem[] = [
  { status: 'Completed', count: 12, color: 'bg-green-500', fill: 'hsl(var(--chart-2))' },
  { status: 'In Progress', count: 8, color: 'bg-yellow-500', fill: 'hsl(var(--chart-3))'  },
  { status: 'Not Started', count: 14, color: 'bg-red-500', fill: 'hsl(var(--chart-1))'  },
  { status: 'Delayed', count: 2, color: 'bg-gray-500', fill: 'hsl(var(--muted-foreground))' }
];

const totalTasks = taskStatusData.reduce((sum, status) => sum + status.count, 0);

const chartConfig = {
  tasks: {
    label: "Tasks",
  },
  completed: {
    label: "Completed",
    color: "hsl(var(--chart-2))",
  },
  inProgress: {
    label: "In Progress",
    color: "hsl(var(--chart-3))",
  },
  notStarted: {
    label: "Not Started",
    color: "hsl(var(--chart-1))",
  },
  delayed: {
    label: "Delayed",
    color: "hsl(var(--muted-foreground))",
  },
} satisfies Parameters<typeof ChartContainer>[0]["config"];


const milestonesData: Milestone[] = [
  { name: 'Current State Assessment Complete', planned: 'Day 7', actual: 'Day 8', status: 'Completed' },
  { name: 'Opportunity Analysis Complete', planned: 'Day 14', actual: 'Day 14', status: 'On Track' },
  { name: 'Business Case Approved', planned: 'Day 21', actual: '', status: 'Not Started' },
  { name: 'Pilot Plan Approved', planned: 'Day 30', actual: '', status: 'Not Started' }
];

const riskData: RiskItem[] = [
  { description: 'Insufficient data quality for accurate spend analysis', impact: 'High', probability: 'Medium', mitigationPlan: 'Use manual sampling and validation for key categories', owner: 'Analytics Lead' },
  { description: 'Stakeholder availability constraints delay interviews', impact: 'Medium', probability: 'High', mitigationPlan: 'Schedule interviews 2 weeks in advance; offer flexible times', owner: 'Category Manager' },
  { description: 'Executive sponsorship changes during project', impact: 'High', probability: 'Low', mitigationPlan: 'Maintain multiple executive relationships; document project value', owner: 'CPO' }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Completed': return 'bg-green-100 text-green-800';
    case 'On Track': return 'bg-blue-100 text-blue-800';
    case 'At Risk': return 'bg-yellow-100 text-yellow-800';
    case 'Delayed': return 'bg-orange-100 text-orange-800';
    default: return 'bg-red-100 text-red-800';
  }
};

const ProgressTab: FC = () => {
  const overallProgressValue = 42; // Example value

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-primary">Progress Tracker Dashboard</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Overall Project Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={overallProgressValue} className="h-4 mb-2" />
            <p className="text-center text-lg font-medium">{overallProgressValue}% Complete</p>
            
            <div className="mt-6">
              <h3 className="font-semibold mb-3 text-md">Weekly Progress</h3>
              {weeklyProgressData.map((week, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between mb-1 text-sm">
                    <span>{week.week}</span>
                    <span>{week.completed}%</span>
                  </div>
                  <Progress value={week.completed} className="h-3" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Task Status Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent nameKey="status" hideLabel />} />
                  <Pie data={taskStatusData} dataKey="count" nameKey="status" cx="50%" cy="50%" outerRadius={100} labelLine={false} label={({ percent }) => `${(percent * 100).toFixed(0)}%`}>
                    {taskStatusData.map((entry) => (
                      <RechartsCell key={entry.status} fill={entry.fill} className="focus:outline-none" />
                    ))}
                  </Pie>
                  <ChartLegend content={<ChartLegendContent nameKey="status" />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
             <p className="text-center text-muted-foreground mt-2">{totalTasks} Total Tasks</p>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2 shadow-lg">
          <CardHeader>
            <CardTitle>Milestone Tracker</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Milestone</TableHead>
                  <TableHead className="text-center">Planned Date</TableHead>
                  <TableHead className="text-center">Actual Date</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {milestonesData.map((milestone, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{milestone.name}</TableCell>
                    <TableCell className="text-center">{milestone.planned}</TableCell>
                    <TableCell className="text-center">{milestone.actual || '-'}</TableCell>
                    <TableCell className={`text-center font-semibold ${getStatusColor(milestone.status)}`}>{milestone.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2 shadow-lg">
          <CardHeader>
            <CardTitle>Risk Register</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Risk Description</TableHead>
                  <TableHead className="text-center">Impact</TableHead>
                  <TableHead className="text-center">Probability</TableHead>
                  <TableHead>Mitigation Plan</TableHead>
                  <TableHead>Owner</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {riskData.map((risk, index) => (
                  <TableRow key={index}>
                    <TableCell>{risk.description}</TableCell>
                    <TableCell className="text-center">{risk.impact}</TableCell>
                    <TableCell className="text-center">{risk.probability}</TableCell>
                    <TableCell>{risk.mitigationPlan}</TableCell>
                    <TableCell>{risk.owner}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgressTab;
