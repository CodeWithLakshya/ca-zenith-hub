import { TrendingUp, Users, FileText, Clock, DollarSign, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";

export const DashboardStats = () => {
  const stats = [
    {
      title: "Active Clients",
      value: "147",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "primary"
    },
    {
      title: "Pending Documents",
      value: "23",
      change: "-5%",
      trend: "down",
      icon: FileText,
      color: "warning"
    },
    {
      title: "Due Tasks",
      value: "8",
      change: "2 urgent",
      trend: "urgent",
      icon: Clock,
      color: "destructive"
    },
    {
      title: "Monthly Revenue",
      value: "₹12.5L",
      change: "+18%",
      trend: "up",
      icon: DollarSign,
      color: "success"
    },
    {
      title: "Compliance Status",
      value: "94%",
      change: "+2%",
      trend: "up",
      icon: TrendingUp,
      color: "success"
    },
    {
      title: "AI Red Flags",
      value: "3",
      change: "Needs Review",
      trend: "attention",
      icon: AlertTriangle,
      color: "warning"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary bg-primary/10";
      case "success":
        return "text-success bg-success/10";
      case "warning":
        return "text-warning bg-warning/10";
      case "destructive":
        return "text-destructive bg-destructive/10";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="p-4 sm:p-6 bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1 truncate">{stat.title}</p>
                <p className="text-lg sm:text-2xl font-bold text-foreground">{stat.value}</p>
                <p className={`text-xs mt-1 ${
                  stat.trend === "up" ? "text-success" : 
                  stat.trend === "down" ? "text-destructive" : 
                  stat.trend === "urgent" ? "text-destructive font-medium" :
                  "text-warning"
                }`}>
                  {stat.change}
                </p>
              </div>
              <div className={`p-2 sm:p-3 rounded-lg flex-shrink-0 ${getColorClasses(stat.color)}`}>
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};