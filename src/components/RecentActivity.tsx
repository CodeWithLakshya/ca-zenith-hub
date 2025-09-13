import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, FileText, Users, CheckSquare, AlertTriangle } from "lucide-react";

export const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "document",
      title: "GST Return uploaded",
      client: "ABC Industries Ltd.",
      time: "2 hours ago",
      status: "pending",
      icon: FileText
    },
    {
      id: 2,
      type: "task",
      title: "Tax computation completed",
      client: "XYZ Trading Co.",
      time: "4 hours ago", 
      status: "completed",
      icon: CheckSquare
    },
    {
      id: 3,
      type: "client",
      title: "New client onboarding",
      client: "PQR Services Pvt Ltd",
      time: "6 hours ago",
      status: "in-progress",
      icon: Users
    },
    {
      id: 4,
      type: "alert",
      title: "Compliance deadline approaching",
      client: "Multiple clients",
      time: "8 hours ago",
      status: "urgent",
      icon: AlertTriangle
    },
    {
      id: 5,
      type: "document",
      title: "Bank reconciliation statement",
      client: "LMN Enterprises",
      time: "1 day ago",
      status: "reviewed",
      icon: FileText
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success/10 text-success";
      case "pending":
        return "bg-warning/10 text-warning";
      case "urgent":
        return "bg-destructive/10 text-destructive";
      case "in-progress":
        return "bg-primary/10 text-primary";
      case "reviewed":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="p-6 bg-gradient-card shadow-soft">
      <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm">{activity.title}</p>
                <p className="text-sm text-muted-foreground">{activity.client}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Clock className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              </div>
              <Badge className={`text-xs ${getStatusColor(activity.status)}`}>
                {activity.status.replace("-", " ")}
              </Badge>
            </div>
          );
        })}
      </div>
    </Card>
  );
};