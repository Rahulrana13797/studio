import type { FC } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { RaciTask } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

const roles = ['CPO', 'Procurement Director', 'Category Manager', 'Analytics Lead', 'IT', 'Finance', 'Business Units'];
const tasks: RaciTask[] = [
  { id: 1, description: 'Conduct spend analysis', assignments: ['I', 'A', 'C', 'R', 'C', 'C', 'I'] },
  { id: 2, description: 'Document current processes', assignments: ['I', 'A', 'C', 'C', 'C', 'I', 'R'] },
  { id: 3, description: 'Assess technology ecosystem', assignments: ['I', 'A', 'I', 'C', 'R', 'I', 'C'] },
  { id: 4, description: 'Survey internal customers', assignments: ['I', 'A', 'R', 'I', 'I', 'C', 'C'] },
  { id: 5, description: 'Identify savings opportunities', assignments: ['C', 'A', 'R', 'R', 'I', 'C', 'I'] },
  { id: 6, description: 'Create ROI model', assignments: ['C', 'A', 'C', 'C', 'I', 'R', 'I'] },
  { id: 7, description: 'Develop executive presentation', assignments: ['R', 'A', 'C', 'C', 'I', 'C', 'I'] },
  { id: 8, description: 'Plan pilot project', assignments: ['A', 'A', 'R', 'C', 'C', 'C', 'C'] }
];

const getRaciCellStyle = (assignment: string) => {
  switch (assignment) {
    case 'R': return 'bg-blue-100 text-blue-800';
    case 'A': return 'bg-red-100 text-red-800';
    case 'C': return 'bg-green-100 text-green-800';
    case 'I': return 'bg-yellow-100 text-yellow-800';
    default: return '';
  }
};

const RaciTab: FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-primary">RACI Matrix - Source-to-Pay Transformation</h2>
      
      <div className="mb-6 flex flex-wrap gap-2">
        <span className="font-semibold mr-2">Legend:</span>
        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">R: Responsible</Badge>
        <Badge className="bg-red-100 text-red-800 hover:bg-red-200">A: Accountable</Badge>
        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">C: Consulted</Badge>
        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">I: Informed</Badge>
      </div>
      
      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="w-12 font-semibold">ID</TableHead>
              <TableHead className="w-64 font-semibold">Task Description</TableHead>
              {roles.map((role, index) => (
                <TableHead key={index} className="font-semibold text-center">{role}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell className="text-center font-medium">{task.id}</TableCell>
                <TableCell>{task.description}</TableCell>
                {task.assignments.map((assignment, index) => (
                  <TableCell key={index} className={`text-center font-semibold ${getRaciCellStyle(assignment)}`}>
                    {assignment}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RaciTab;
