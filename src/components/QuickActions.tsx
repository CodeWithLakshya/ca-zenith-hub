import { Plus, Upload, MessageSquare, Calendar, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const QuickActions = () => {
  const actions = [
    {
      title: "New Client",
      description: "Add a new client to the system",
      icon: Users,
      color: "primary"
    },
    {
      title: "Upload Documents", 
      description: "Upload client documents for review",
      icon: Upload,
      color: "success"
    },
    {
      title: "Create Task",
      description: "Assign a new task to team members",
      icon: Plus,
      color: "warning"
    },
    {
      title: "Schedule Meeting",
      description: "Book a video conference with client",
      icon: Calendar,
      color: "primary"
    },
    {
      title: "Generate Report",
      description: "Create compliance or financial reports",
      icon: FileText,
      color: "success"
    },
    {
      title: "Team Chat",
      description: "Start a conversation with colleagues",
      icon: MessageSquare,
      color: "warning"
    }
  ];

  const getButtonVariant = (color: string) => {
    switch (color) {
      case "primary":
        return "default";
      case "success":
        return "secondary";
      case "warning":
        return "outline";
      default:
        return "ghost";
    }
  };

  return (
    <Card className="p-6 bg-gradient-card shadow-soft">
      <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Button
              key={index}
              variant={getButtonVariant(action.color)}
              className="h-auto p-4 flex flex-col items-start gap-2 text-left"
            >
              <div className="flex items-center gap-2 w-full">
                <Icon className="w-5 h-5" />
                <span className="font-medium">{action.title}</span>
              </div>
              <span className="text-xs text-muted-foreground">{action.description}</span>
            </Button>
          );
        })}
      </div>
    </Card>
  );
};