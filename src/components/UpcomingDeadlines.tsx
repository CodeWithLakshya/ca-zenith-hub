import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, AlertTriangle } from "lucide-react";

export const UpcomingDeadlines = () => {
  const deadlines = [
    {
      id: 1,
      title: "GST Return Filing",
      client: "ABC Industries Ltd.",
      date: "2024-01-15",
      priority: "high",
      daysLeft: 2
    },
    {
      id: 2,
      title: "Income Tax Assessment",
      client: "XYZ Trading Co.",
      date: "2024-01-18",
      priority: "medium",
      daysLeft: 5
    },
    {
      id: 3,
      title: "Audit Report Submission",
      client: "PQR Services Pvt Ltd",
      date: "2024-01-22",
      priority: "high",
      daysLeft: 9
    },
    {
      id: 4,
      title: "TDS Return Filing",
      client: "LMN Enterprises",
      date: "2024-01-25",
      priority: "low",
      daysLeft: 12
    },
    {
      id: 5,
      title: "Annual Compliance",
      client: "DEF Corporation",
      date: "2024-01-30",
      priority: "medium",
      daysLeft: 17
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive";
      case "medium":
        return "bg-warning/10 text-warning";
      case "low":
        return "bg-success/10 text-success";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getDaysLeftColor = (daysLeft: number) => {
    if (daysLeft <= 3) return "text-destructive";
    if (daysLeft <= 7) return "text-warning";
    return "text-muted-foreground";
  };

  return (
    <Card className="p-6 bg-gradient-card shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Upcoming Deadlines</h3>
        <Calendar className="w-5 h-5 text-muted-foreground" />
      </div>
      <div className="space-y-4">
        {deadlines.map((deadline) => (
          <div key={deadline.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium text-foreground text-sm">{deadline.title}</p>
                <Badge className={`text-xs ${getPriorityColor(deadline.priority)}`}>
                  {deadline.priority}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{deadline.client}</p>
              <div className="flex items-center gap-1 mt-1">
                <Clock className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{deadline.date}</span>
              </div>
            </div>
            <div className="text-right">
              <div className={`flex items-center gap-1 ${getDaysLeftColor(deadline.daysLeft)}`}>
                {deadline.daysLeft <= 3 && <AlertTriangle className="w-4 h-4" />}
                <span className="font-medium text-sm">{deadline.daysLeft} days</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};