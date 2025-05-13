
"use client";
import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend as RechartsLegend, Tooltip as RechartsTooltip } from 'recharts';
import type { ResourceAllocation } from '@/lib/types';

const resourcesData: ResourceAllocation[] = [
  { role: 'CPO/Procurement Director', week1: 8, week2: 6, week3: 10, week4: 15, total: 39, capacity: '24%', notes: 'Focused on executive alignment' },
  { role: 'Category Manager(s)', week1: 15, week2: 12, week3: 10, week4: 20, total: 57, capacity: '36%', notes: 'Higher involvement in pilot planning' },
  { role: 'Analytics Lead', week1: 20, week2: 25, week3: 15, week4: 10, total: 70, capacity: '44%', notes: 'Heavy lifting in weeks 1-2' },
  { role: 'Process Manager', week1: 18, week2: 20, week3: 15, week4: 10, total: 63, capacity: '39%', notes: 'Focus on process documentation' },
  { role: 'Procurement Finance Analyst', week1: 4, week2: 8, week3: 18, week4: 6, total: 36, capacity: '23%' },
  { role: 'IT Support', week1: 10, week2: 5, week3: 8, week4: 5, total: 28, capacity: '18%' },
  { role: 'Business Unit Representatives', week1: 6, week2: 4, week3: 2, week4: 8, total: 20, capacity: '13%' }
];

const chartData = ['Week 1', 'Week 2', 'Week 3', 'Week 4'].map(week => {
  const weekKey = week.toLowerCase().replace(' ', '') as keyof ResourceAllocation;
  let entry: any = { name: week };
  resourcesData.forEach(resource => {
    entry[resource.role.replace(/[^a-zA-Z0-9]/g, '')] = resource[weekKey as 'week1']; // Use typesafe key
  });
  return entry;
});

const roleColors: Record<string, string> = {
  'CPO/Procurement Director': 'hsl(var(--chart-1))',
  'Category Manager(s)': 'hsl(var(--chart-2))',
  'Analytics Lead': 'hsl(var(--chart-3))',
  'Process Manager': 'hsl(var(--chart-4))',
  'Procurement Finance Analyst': 'hsl(var(--chart-5))',
  'IT Support': 'hsl(var(--accent))',
  'Business Unit Representatives': 'hsl(var(--muted-foreground))',
};

const chartConfig = resourcesData.reduce((acc, resource) => {
  acc[resource.role.replace(/[^a-zA-Z0-9]/g, '')] = {
    label: resource.role,
    color: roleColors[resource.role] || 'hsl(var(--foreground))',
  };
  return acc;
}, {} as Parameters<typeof ChartContainer>[0]["config"]);


const ResourceTab: FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-primary">Resource Allocation</h2>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Resource Allocation Table</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role/Person</TableHead>
                <TableHead className="text-center">Week 1 Hrs</TableHead>
                <TableHead className="text-center">Week 2 Hrs</TableHead>
                <TableHead className="text-center">Week 3 Hrs</TableHead>
                <TableHead className="text-center">Week 4 Hrs</TableHead>
                <TableHead className="text-center">Total Hrs</TableHead>
                <TableHead className="text-center">% Capacity</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {resourcesData.map((resource, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{resource.role}</TableCell>
                  <TableCell className="text-center">{resource.week1}</TableCell>
                  <TableCell className="text-center">{resource.week2}</TableCell>
                  <TableCell className="text-center">{resource.week3}</TableCell>
                  <TableCell className="text-center">{resource.week4}</TableCell>
                  <TableCell className="text-center font-bold">{resource.total}</TableCell>
                  <TableCell className="text-center">{resource.capacity}</TableCell>
                  <TableCell>{resource.notes || '-'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Resource Allocation by Week (Hours)</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 40, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent wrapperStyle={{paddingTop: '20px'}} />} />
                {resourcesData.map((resource) => (
                  <Bar 
                    key={resource.role} 
                    dataKey={resource.role.replace(/[^a-zA-Z0-9]/g, '')} 
                    stackId="a" 
                    fill={roleColors[resource.role]} 
                    radius={[4, 4, 0, 0]}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourceTab;
