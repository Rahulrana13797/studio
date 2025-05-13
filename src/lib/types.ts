
export interface PlanTask {
  id: number | string;
  week: string;
  task: string;
  subtask: string;
  owner: string;
  start: string;
  end: string;
  duration: number;
  complete: string;
  dependencies: string;
  deliverable: string;
  status: string;
}

export interface RaciTask {
  id: number;
  description: string;
  assignments: string[];
}

export interface WeeklyProgress {
  week: string;
  completed: number;
  total: number;
}

export interface TaskStatusItem {
  status: string;
  count: number;
  color: string; // Tailwind bg color class, e.g., 'bg-green-500'
  fill?: string; // For charts, direct fill color, e.g., 'hsl(var(--chart-1))'
}

export interface Milestone {
  name: string;
  planned: string;
  actual: string;
  status: string;
}

export interface RiskItem {
  description: string;
  impact: string;
  probability: string;
  mitigationPlan: string;
  owner: string;
}

export interface ResourceAllocation {
  role: string;
  week1: number;
  week2: number;
  week3: number;
  week4: number;
  total: number;
  capacity: string;
  notes?: string;
}
