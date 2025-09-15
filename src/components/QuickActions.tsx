import { Plus, Upload, MessageSquare, Calendar, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";

export const QuickActions = () => {
  const actions = [
    {
      label: "New Client",
      description: "Add client",
      icon: Users,
      color: "bg-primary/20 text-primary"
    },
    {
      label: "Upload Docs", 
      description: "Upload files",
      icon: Upload,
      color: "bg-success/20 text-success"
    },
    {
      label: "Create Task",
      description: "Assign task",
      icon: Plus,
      color: "bg-warning/20 text-warning"
    },
    {
      label: "Schedule Meet",
      description: "Book meeting",
      icon: Calendar,
      color: "bg-primary/20 text-primary"
    },
    {
      label: "Generate Report",
      description: "Create report",
      icon: FileText,
      color: "bg-success/20 text-success"
    },
    {
      label: "Team Chat",
      description: "Start conversation",
      icon: MessageSquare,
      color: "bg-warning/20 text-warning"
    }
  ];

  return (
    <Card className="bg-gradient-card shadow-soft">
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="text-title">Quick Actions</CardTitle>
        <CardDescription className="text-caption">
          Frequently used actions for faster workflow
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Button
                key={index}
                variant="outline"
                onClick={() => toast.success(`${action.label} clicked!`)}
                className="h-auto p-3 sm:p-4 flex flex-col items-center gap-2 sm:gap-3 hover:bg-accent/50 transition-all duration-200 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`p-2 sm:p-3 rounded-lg ${action.color} group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </div>
                <div className="text-center">
                  <div className="font-medium text-xs sm:text-sm lg:text-base">{action.label}</div>
                  <div className="text-caption mt-1 hidden sm:block">{action.description}</div>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};