import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardStats } from "@/components/DashboardStats";
import { QuickActions } from "@/components/QuickActions";
import { RecentActivity } from "@/components/RecentActivity";
import { UpcomingDeadlines } from "@/components/UpcomingDeadlines";
import { ClientPortal } from "@/components/pages/ClientPortal";
import { TasksAssignments } from "@/components/pages/TasksAssignments";
import { HRPayroll } from "@/components/pages/HRPayroll";
import { AttendanceManagement } from "@/components/pages/AttendanceManagement";
import { TeamChat } from "@/components/pages/TeamChat";
import { AIAnalysis } from "@/components/pages/AIAnalysis";

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <DashboardStats />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <QuickActions />
              </div>
              <div>
                <UpcomingDeadlines />
              </div>
            </div>
            <RecentActivity />
          </div>
        );
      case "documents":
        return <ClientPortal />;
      case "tasks":
        return <TasksAssignments />;
      case "hr":
        return <HRPayroll />;
      case "attendance":
        return <AttendanceManagement />;
      case "chat":
        return <TeamChat />;
      case "ai-analysis":
        return <AIAnalysis />;
      default:
        return (
          <div className="bg-card rounded-lg p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1).replace("-", " ")} Module
            </h2>
            <p className="text-muted-foreground">This module is under development. Full functionality will be available soon.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};