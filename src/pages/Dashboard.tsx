import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardStats } from "@/components/DashboardStats";
import { QuickActions } from "@/components/QuickActions";
import { RecentActivity } from "@/components/RecentActivity";
import { UpcomingDeadlines } from "@/components/UpcomingDeadlines";

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
        return (
          <div className="bg-card rounded-lg p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-foreground mb-4">Client Portal & Document Management</h2>
            <p className="text-muted-foreground mb-6">Manage client document uploads, reviews, and approvals.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-2">Pending Documents</h3>
                <p className="text-3xl font-bold text-warning">23</p>
                <p className="text-sm text-muted-foreground">Awaiting review</p>
              </div>
              <div className="bg-gradient-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-2">Approved Today</h3>
                <p className="text-3xl font-bold text-success">15</p>
                <p className="text-sm text-muted-foreground">Ready for processing</p>
              </div>
              <div className="bg-gradient-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-2">Total Storage</h3>
                <p className="text-3xl font-bold text-primary">2.4TB</p>
                <p className="text-sm text-muted-foreground">On local server</p>
              </div>
            </div>
          </div>
        );
      case "ai-analysis":
        return (
          <div className="bg-card rounded-lg p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-foreground mb-4">AI-Powered Financial Analysis</h2>
            <p className="text-muted-foreground mb-6">Upload ledgers and client business descriptions for automated analysis and red flag detection.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-4">Recent Analysis</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">ABC Industries - Q3 Review</span>
                    <span className="text-xs bg-destructive/10 text-destructive px-2 py-1 rounded">3 Red Flags</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">XYZ Trading - Monthly Check</span>
                    <span className="text-xs bg-success/10 text-success px-2 py-1 rounded">All Clear</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-4">Automated Tasks</h3>
                <div className="space-y-2">
                  <p className="text-sm">✓ Bank Reconciliation</p>
                  <p className="text-sm">✓ Opening Balance Verification</p>
                  <p className="text-sm">✓ Expense Classification</p>
                  <p className="text-sm">✓ Compliance Check</p>
                </div>
              </div>
            </div>
          </div>
        );
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