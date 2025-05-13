"use client";
import React, { useState, Suspense, lazy } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { File, Home, SheetIcon, MenuSquare, Settings2 } from 'lucide-react'; // Using generic icons as placeholders

const OverviewTab = lazy(() => import('@/components/tabs/overview-tab'));
const PlanTab = lazy(() => import('@/components/tabs/plan-tab'));
const RaciTab = lazy(() => import('@/components/tabs/raci-tab'));
const ProgressTab = lazy(() => import('@/components/tabs/progress-tab'));
const ResourceTab = lazy(() => import('@/components/tabs/resource-tab'));

type TabName = 'overview' | 'plan' | 'raci' | 'progress' | 'resources';

interface TabConfig {
  id: TabName;
  label: string;
  component: React.LazyExoticComponent<React.FC<{}>>;
}

const tabs: TabConfig[] = [
  { id: 'overview', label: 'Overview & Instructions', component: OverviewTab },
  { id: 'plan', label: '30-Day Plan', component: PlanTab },
  { id: 'raci', label: 'RACI Matrix', component: RaciTab },
  { id: 'progress', label: 'Progress Tracker', component: ProgressTab },
  { id: 'resources', label: 'Resource Allocation', component: ResourceTab },
];

const ExcelMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabName>('plan');

  const renderTabButton = (tabConfig: TabConfig) => (
    <Button
      key={tabConfig.id}
      variant="ghost"
      className={`px-4 py-2 h-auto border-b-0 rounded-b-none shadow-sm
                  ${activeTab === tabConfig.id 
                    ? 'bg-background border-t border-l border-r text-primary font-semibold relative z-10 -mb-px border-b-background' 
                    : 'bg-gray-100 hover:bg-gray-200 text-muted-foreground border-t border-l border-r border-transparent'}`}
      onClick={() => setActiveTab(tabConfig.id)}
    >
      {tabConfig.label}
    </Button>
  );

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="w-full h-screen flex flex-col bg-gray-50 text-foreground">
      {/* Excel header */}
      <header className="bg-primary text-primary-foreground p-2 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-2">
          <SheetIcon className="w-6 h-6" />
          <h1 className="font-bold text-lg">Planify - S2P Transformation.xlsx</h1>
        </div>
        {/* Navigation bar commented out as requested
        <nav className="flex space-x-1">
          {['File', 'Home', 'Insert', 'Page Layout'].map(item => (
            <Button key={item} variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/80 h-8 px-3">
              {item === "File" && <File size={16} className="mr-1" />}
              {item === "Home" && <Home size={16} className="mr-1" />}
              {item === "Insert" && <MenuSquare size={16} className="mr-1" />}
              {item === "Page Layout" && <Settings2 size={16} className="mr-1" />}
              {item}
            </Button>
          ))}
        </nav>
        */}
      </header>
      
      {/* Excel tabs */}
      <div className="flex space-x-1 bg-muted/30 px-2 pt-2 border-b border-border shadow-sm">
        {tabs.map(renderTabButton)}
      </div>
      
      {/* Excel content area */}
      <main className="flex-grow bg-background border-l border-r border-border overflow-auto shadow-inner">
        <Suspense fallback={<ContentSkeleton />}>
          {ActiveComponent && <ActiveComponent />}
        </Suspense>
      </main>
      
      {/* Excel status bar */}
      <footer className="bg-gray-100 p-1.5 text-xs border-t border-border text-muted-foreground flex justify-between items-center">
        <div>Ready</div>
        <div>Sheet {tabs.findIndex(t => t.id === activeTab) + 1} of {tabs.length}</div>
      </footer>
    </div>
  );
};

const ContentSkeleton: React.FC = () => (
  <div className="p-6 space-y-4">
    <Skeleton className="h-8 w-1/2" />
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-4 w-5/6" />
    <div className="grid grid-cols-2 gap-4 mt-6">
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-32 w-full" />
    </div>
    <Skeleton className="h-48 w-full mt-4" />
  </div>
);


export default ExcelMockup;