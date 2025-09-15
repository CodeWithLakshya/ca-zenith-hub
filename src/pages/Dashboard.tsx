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
import { VideoConferencing } from "@/components/pages/VideoConferencing";
import { NotificationsCirculars } from "@/components/pages/NotificationsCirculars";
import { LegalResources } from "@/components/pages/LegalResources";
import { Settings } from "@/components/pages/Settings";
import { AIAnalysis } from "@/components/pages/AIAnalysis";
import { LayoutDashboard, FileText, CheckSquare, MessageSquare, Settings as SettingsIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-4 sm:space-y-6 pb-20 sm:pb-6">
            <DashboardStats />
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
              <div className="xl:col-span-2">
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
      case "video":
        return <VideoConferencing />;
      case "notifications":
        return <NotificationsCirculars />;
      case "resources":
        return <LegalResources />;
      case "settings":
        return <Settings />;
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
      <div className="hidden sm:block w-16 sm:w-64">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-auto p-3 sm:p-6">
          {renderContent()}
        </main>
      </div>
      
      {/* Mobile Sidebar - Bottom Navigation */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
        <div className="flex justify-around py-2">
          {[
            { id: "dashboard", icon: LayoutDashboard },
            { id: "documents", icon: FileText },
            { id: "tasks", icon: CheckSquare },
            { id: "chat", icon: MessageSquare },
            { id: "settings", icon: Settings },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200",
                  activeTab === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                )}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};