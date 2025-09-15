import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export const UpcomingDeadlines = () => {
  const deadlines = [
    {
      task: "GST Return Filing",
      client: "ABC Industries Ltd.",
      date: "Jan 15",
      daysLeft: "2 days left",
      urgency: "bg-destructive/20 text-destructive",
      statusColor: "bg-destructive"
    },
    {
      task: "Income Tax Assessment",
      client: "XYZ Trading Co.",
      date: "Jan 18",
      daysLeft: "5 days left",
      urgency: "bg-warning/20 text-warning",
      statusColor: "bg-warning"
    },
    {
      task: "Audit Report Submission",
      client: "PQR Services Pvt Ltd",
      date: "Jan 22",
      daysLeft: "9 days left",
      urgency: "bg-primary/20 text-primary",
      statusColor: "bg-primary"
    },
    {
      task: "TDS Return Filing",
      client: "LMN Enterprises",
      date: "Jan 25",
      daysLeft: "12 days left",
      urgency: "bg-success/20 text-success",
      statusColor: "bg-success"
    },
    {
      task: "Annual Compliance",
      client: "DEF Corporation",
      date: "Jan 30",
      daysLeft: "17 days left",
      urgency: "bg-muted text-muted-foreground",
      statusColor: "bg-muted"
    }
  ];

  return (
    <Card className="bg-gradient-card shadow-soft">
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="text-title">Upcoming Deadlines</CardTitle>
        <CardDescription className="text-caption">
          Critical dates requiring attention
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        {deadlines.map((deadline, index) => (
          <div 
            key={index} 
            className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-accent/20 transition-all duration-200 group animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`p-2 sm:p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-200 ${deadline.urgency}`}>
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                <h4 className="font-medium text-sm sm:text-base lg:text-lg text-foreground truncate">
                  {deadline.task}
                </h4>
                <span className="text-caption">{deadline.date}</span>
              </div>
              <p className="text-caption mt-1 truncate">{deadline.client}</p>
              <div className="flex items-center gap-2 mt-2">
                <div className={`w-2 h-2 rounded-full ${deadline.statusColor}`}></div>
                <span className="text-caption">{deadline.daysLeft}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};