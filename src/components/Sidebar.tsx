import { 
  LayoutDashboard, 
  FileText, 
  CheckSquare, 
  Users, 
  Clock, 
  MessageSquare, 
  Video, 
  Bell, 
  BookOpen, 
  Calculator,
  Settings,
  Shield,
  Building2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "documents", label: "Client Portal", icon: FileText },
    { id: "tasks", label: "Tasks & Assignments", icon: CheckSquare },
    { id: "hr", label: "HR & Payroll", icon: Users },
    { id: "attendance", label: "Attendance", icon: Clock },
    { id: "chat", label: "Team Chat", icon: MessageSquare },
    { id: "conference", label: "Video Conference", icon: Video },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "resources", label: "Legal Resources", icon: BookOpen },
    { id: "ai-analysis", label: "AI Analysis", icon: Calculator },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="w-64 bg-card border-r border-border h-full">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-bold text-lg text-foreground">CA Pro</h2>
            <p className="text-xs text-muted-foreground">Practice Management</p>
          </div>
        </div>
      </div>
      
      <nav className="p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left mb-1 transition-all duration-200",
                activeTab === item.id
                  ? "bg-gradient-primary text-primary-foreground shadow-soft"
                  : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-accent/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-accent-foreground">Security Status</span>
          </div>
          <p className="text-xs text-muted-foreground">All systems secure</p>
        </div>
      </div>
    </div>
  );
};