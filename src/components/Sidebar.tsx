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
    { id: "video", label: "Video Conference", icon: Video },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "resources", label: "Legal Resources", icon: BookOpen },
    { id: "ai-analysis", label: "AI Analysis", icon: Calculator },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="w-full sm:w-64 bg-card border-r border-border h-full flex flex-col relative">
      <div className="p-4 sm:p-6 border-b border-border flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Building2 className="w-4 h-4 sm:w-6 sm:h-6 text-primary-foreground" />
          </div>
          <div className="hidden sm:block">
            <h2 className="font-bold text-lg text-foreground">CA Pro</h2>
            <p className="text-xs text-muted-foreground">Practice Management</p>
          </div>
        </div>
      </div>
      
      <nav className="p-2 sm:p-4 flex-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-2 sm:py-3 rounded-lg text-left mb-1 transition-all duration-200",
                activeTab === item.id
                  ? "bg-gradient-primary text-primary-foreground shadow-soft"
                  : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
              )}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium hidden sm:block">{item.label}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="p-2 sm:p-4 mt-auto flex-shrink-0">
        <div className="bg-accent/50 rounded-lg p-2 sm:p-4">
          <div className="flex items-center gap-2 mb-1 sm:mb-2">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
            <span className="text-xs font-medium text-accent-foreground hidden sm:block">Security Status</span>
          </div>
          <p className="text-xs text-muted-foreground hidden sm:block">All systems secure</p>
        </div>
      </div>
    </div>
  );
};