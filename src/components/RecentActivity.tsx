import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, CheckSquare, Users, AlertTriangle, Upload } from "lucide-react";

export const RecentActivity = () => {
  const activities = [
    {
      action: "GST Return Uploaded",
      description: "ABC Industries Ltd. - Monthly GST filing",
      time: "2 hours ago",
      status: "Pending Review",
      statusColor: "bg-warning/20 text-warning",
      iconBg: "bg-primary/20 text-primary",
      icon: Upload
    },
    {
      action: "Tax Computation Completed",
      description: "XYZ Trading Co. - Annual tax calculation",
      time: "4 hours ago",
      status: "Completed",
      statusColor: "bg-success/20 text-success",
      iconBg: "bg-success/20 text-success",
      icon: CheckSquare
    },
    {
      action: "New Client Onboarding",
      description: "PQR Services Pvt Ltd - Registration process",
      time: "6 hours ago",
      status: "In Progress",
      statusColor: "bg-primary/20 text-primary",
      iconBg: "bg-warning/20 text-warning",
      icon: Users
    },
    {
      action: "Compliance Deadline Alert",
      description: "Multiple clients - Due dates approaching",
      time: "8 hours ago",
      status: "Urgent",
      statusColor: "bg-destructive/20 text-destructive",
      iconBg: "bg-destructive/20 text-destructive",
      icon: AlertTriangle
    },
    {
      action: "Bank Reconciliation",
      description: "LMN Enterprises - Monthly statement review",
      time: "1 day ago",
      status: "Reviewed",
      statusColor: "bg-muted text-muted-foreground",
      iconBg: "bg-muted text-muted-foreground",
      icon: FileText
    }
  ];

  return (
    <Card className="bg-gradient-card shadow-soft">
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="text-title">Recent Activity</CardTitle>
        <CardDescription className="text-caption">
          Latest updates and actions across your practice
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div 
              key={index} 
              className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-accent/20 transition-all duration-200 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`p-2 sm:p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-200 ${activity.iconBg}`}>
                <Icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                  <p className="font-medium text-sm sm:text-base lg:text-lg text-foreground truncate">
                    {activity.action}
                  </p>
                  <span className={`text-xs sm:text-sm px-2 py-1 rounded-full flex-shrink-0 ${activity.statusColor}`}>
                    {activity.status}
                  </span>
                </div>
                <p className="text-caption mt-1 truncate">{activity.description}</p>
                <p className="text-caption mt-2">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};