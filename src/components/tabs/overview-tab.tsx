import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const OverviewTab: FC = () => (
  <div className="p-6 space-y-6">
    <h1 className="text-3xl font-bold text-center text-primary">Source-to-Pay Transformation - 30-Day Action Plan</h1>
    
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-accent">Instructions and Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-1">Purpose:</h3>
          <p className="ml-4 text-muted-foreground">
            This workbook provides a structured 30-day plan to initiate your Source-to-Pay transformation journey. 
            The plan focuses on building a compelling business case, identifying opportunities, and preparing for a successful pilot implementation.
          </p>
        </div>
        
        <Separator />

        <div>
          <h3 className="font-semibold text-lg mb-1">How to Use This Workbook:</h3>
          <ul className="ml-8 list-disc space-y-1 text-muted-foreground">
            <li><span className="font-medium text-foreground">30-Day Plan tab:</span> Main project timeline with tasks, dates, and ownership</li>
            <li><span className="font-medium text-foreground">RACI Matrix:</span> Clarifies roles and responsibilities for each major task</li>
            <li><span className="font-medium text-foreground">Progress Tracker:</span> Visual dashboard to monitor completion status</li>
            <li><span className="font-medium text-foreground">Resource Allocation:</span> Estimates time commitments by team member</li>
            <li>Customize the plan based on your organization's specific needs and resources</li>
            <li>Update status regularly in the Progress Tracker to monitor advancement</li>
          </ul>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold text-lg mb-1">Critical Success Factors:</h3>
          <ul className="ml-8 list-disc space-y-1 text-muted-foreground">
            <li>Executive Sponsorship: Secure C-level support before beginning</li>
            <li>Cross-Functional Involvement: Include finance, IT, and business stakeholders</li>
            <li>Data-Driven Approach: Base all estimates on actual data where possible</li>
            <li>Focus on Business Outcomes: Tie activities to measurable results</li>
            <li>Realistic Timeframes: Be honest about implementation requirements</li>
          </ul>
        </div>

        <Separator />
        
        <div>
          <h3 className="font-semibold text-lg mb-1">Expected Outcomes After 30 Days:</h3>
          <ul className="ml-8 list-disc space-y-1 text-muted-foreground">
            <li>Documented business case with ROI projections</li>
            <li>Executive alignment on transformation strategy</li>
            <li>Concrete plan for a focused pilot implementation</li>
            <li>Defined success metrics for measuring value</li>
            <li>Clear next steps for moving forward</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default OverviewTab;
