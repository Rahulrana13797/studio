import type { FC } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { PlanTask } from '@/lib/types';
import { ScrollArea } from '@/components/ui/scroll-area';

const tasks: PlanTask[] = [
  { id: 1, week: 'Week 1', task: 'Current State Assessment', subtask: 'Conduct spend analysis using existing data', owner: 'Procurement Analytics Lead', start: 'Day 1', end: 'Day 3', duration: 3, complete: '0%', dependencies: 'None', deliverable: 'Spend analysis report', status: 'Not Started' },
  { id: 1.1, week: 'Week 1', task: 'Current State Assessment', subtask: 'Pull last 12 months of spend data', owner: 'Procurement Analytics Lead', start: 'Day 1', end: 'Day 1', duration: 1, complete: '0%', dependencies: 'None', deliverable: 'Raw data extract', status: 'Not Started' },
  { id: 1.2, week: 'Week 1', task: 'Current State Assessment', subtask: 'Categorize spend by department/supplier/category', owner: 'Procurement Analytics Lead', start: 'Day 2', end: 'Day 2', duration: 1, complete: '0%', dependencies: '1.1', deliverable: 'Categorized spend data', status: 'Not Started' },
  { id: 2, week: 'Week 1', task: 'Current State Assessment', subtask: 'Document current process workflows', owner: 'Process Manager', start: 'Day 2', end: 'Day 4', duration: 3, complete: '0%', dependencies: 'None', deliverable: 'Process flow diagrams', status: 'Not Started' },
  { id: 3, week: 'Week 1', task: 'Stakeholder Input Collection', subtask: 'Survey internal customers', owner: 'Category Manager', start: 'Day 1', end: 'Day 5', duration: 5, complete: '0%', dependencies: 'None', deliverable: 'Survey results summary', status: 'Not Started' },
  { id: 4, week: 'Week 2', task: 'Savings Opportunity Analysis', subtask: 'Identify quick-win categories', owner: 'Procurement Analytics Lead', start: 'Day 8', end: 'Day 9', duration: 2, complete: '0%', dependencies: '1', deliverable: 'Quick-win category list', status: 'Not Started' },
  { id: 5, week: 'Week 2', task: 'Process Efficiency Opportunity Mapping', subtask: 'Analyze current cycle times', owner: 'Process Manager', start: 'Day 8', end: 'Day 10', duration: 3, complete: '0%', dependencies: '2', deliverable: 'Cycle time analysis', status: 'Not Started' },
  { id: 6, week: 'Week 3', task: 'ROI Model Creation', subtask: 'Gather cost inputs', owner: 'Procurement Finance Analyst', start: 'Day 15', end: 'Day 16', duration: 2, complete: '0%', dependencies: '4, 5', deliverable: 'Cost model', status: 'Not Started' },
  { id: 7, week: 'Week 3', task: 'Requirements Definition', subtask: 'Document functional requirements', owner: 'Procurement Systems Manager', start: 'Day 15', end: 'Day 17', duration: 3, complete: '0%', dependencies: '4, 5', deliverable: 'Requirements document', status: 'Not Started' },
  { id: 8, week: 'Week 4', task: 'Executive Presentation Development', subtask: 'Create compelling narrative', owner: 'CPO/Procurement Director', start: 'Day 22', end: 'Day 24', duration: 3, complete: '0%', dependencies: '6', deliverable: 'Executive summary', status: 'Not Started' },
  { id: 9, week: 'Week 4', task: 'Pilot Project Planning', subtask: 'Select pilot scope', owner: 'Category Manager', start: 'Day 22', end: 'Day 23', duration: 2, complete: '0%', dependencies: '6, 7', deliverable: 'Pilot scope document', status: 'Not Started' }
];

const getRowBgColor = (week: string) => {
  switch (week) {
    case 'Week 1': return 'bg-blue-50 hover:bg-blue-100';
    case 'Week 2': return 'bg-green-50 hover:bg-green-100';
    case 'Week 3': return 'bg-yellow-50 hover:bg-yellow-100';
    case 'Week 4': return 'bg-red-50 hover:bg-red-100';
    default: return 'hover:bg-muted/50';
  }
};

const PlanTab: FC = () => {
  return (
    <ScrollArea className="h-[calc(100vh-200px)] p-1"> {/* Adjust height as needed */}
      <Table className="min-w-full whitespace-nowrap">
        <TableHeader className="sticky top-0 bg-background z-10">
          <TableRow>
            <TableHead className="w-12 px-2 py-3">ID</TableHead>
            <TableHead className="w-24 px-2 py-3">Week</TableHead>
            <TableHead className="w-48 px-2 py-3">Major Task</TableHead>
            <TableHead className="w-64 px-2 py-3">Subtask</TableHead>
            <TableHead className="w-48 px-2 py-3">Owner</TableHead>
            <TableHead className="w-24 px-2 py-3 text-center">Start</TableHead>
            <TableHead className="w-24 px-2 py-3 text-center">End</TableHead>
            <TableHead className="w-24 px-2 py-3 text-center">Duration</TableHead>
            <TableHead className="w-24 px-2 py-3 text-center">% Comp.</TableHead>
            <TableHead className="w-32 px-2 py-3">Deps.</TableHead>
            <TableHead className="w-48 px-2 py-3">Deliverable</TableHead>
            <TableHead className="w-32 px-2 py-3">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id} className={`${getRowBgColor(task.week)} transition-colors duration-150`}>
              <TableCell className="px-2 py-2 text-center">{task.id}</TableCell>
              <TableCell className="px-2 py-2">{task.week}</TableCell>
              <TableCell className="px-2 py-2">{task.task}</TableCell>
              <TableCell className="px-2 py-2">{task.subtask}</TableCell>
              <TableCell className="px-2 py-2">{task.owner}</TableCell>
              <TableCell className="px-2 py-2 text-center">{task.start}</TableCell>
              <TableCell className="px-2 py-2 text-center">{task.end}</TableCell>
              <TableCell className="px-2 py-2 text-center">{task.duration}</TableCell>
              <TableCell className="px-2 py-2 text-center">{task.complete}</TableCell>
              <TableCell className="px-2 py-2">{task.dependencies}</TableCell>
              <TableCell className="px-2 py-2">{task.deliverable}</TableCell>
              <TableCell className="px-2 py-2">{task.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};

export default PlanTab;
