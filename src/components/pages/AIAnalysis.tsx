import { useState } from "react";
import { Brain, Upload, FileText, AlertTriangle, CheckCircle, TrendingUp, DollarSign, BarChart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

export const AIAnalysis = () => {
  const { toast } = useToast();
  const [analysisProgress, setAnalysisProgress] = useState(0);

  const analysisReports = [
    {
      id: 1,
      client: "ABC Industries Ltd.",
      analysisDate: "2024-03-15",
      status: "completed",
      redFlags: 3,
      score: 78,
      findings: [
        { type: "warning", issue: "Unusual cash transactions detected", severity: "medium" },
        { type: "error", issue: "Missing GST reconciliation", severity: "high" },
        { type: "info", issue: "Expense categorization inconsistency", severity: "low" }
      ]
    },
    {
      id: 2,
      client: "XYZ Trading Co.",
      analysisDate: "2024-03-12",
      status: "completed", 
      redFlags: 0,
      score: 94,
      findings: [
        { type: "success", issue: "All financial records are consistent", severity: "info" }
      ]
    },
    {
      id: 3,
      client: "PQR Services Pvt Ltd",
      analysisDate: "2024-03-10",
      status: "processing",
      redFlags: 1,
      score: 85,
      findings: [
        { type: "warning", issue: "Bank reconciliation pending", severity: "medium" }
      ]
    }
  ];

  const automatedTasks = [
    { task: "Bank Reconciliation", completed: 156, total: 160, percentage: 97.5 },
    { task: "Opening Balance Verification", completed: 142, total: 150, percentage: 94.7 },
    { task: "Expense Classification", completed: 203, total: 210, percentage: 96.7 },
    { task: "GST Compliance Check", completed: 89, total: 95, percentage: 93.7 },
    { task: "Income Tax Computation", completed: 78, total: 82, percentage: 95.1 }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 70) return "text-warning";
    return "text-destructive";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success/10 text-success";
      case "processing":
        return "bg-primary/10 text-primary";
      case "failed":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getFindingIcon = (type: string) => {
    switch (type) {
      case "error":
        return <AlertTriangle className="w-4 h-4 text-destructive" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-warning" />;
      case "success":
        return <CheckCircle className="w-4 h-4 text-success" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-primary" />;
    }
  };

  const handleStartAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate analysis progress
    setAnalysisProgress(0);
    const interval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          toast({
            title: "Analysis Complete",
            description: "AI analysis has been completed successfully. Review the findings in the reports section.",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI-Powered Financial Analysis</h1>
          <p className="text-muted-foreground mt-2">Upload ledgers and business descriptions for automated analysis and red flag detection</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              New Analysis
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Start AI Analysis</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleStartAnalysis} className="space-y-4">
              <div>
                <Label htmlFor="client">Client</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select client" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="abc">ABC Industries Ltd.</SelectItem>
                    <SelectItem value="xyz">XYZ Trading Co.</SelectItem>
                    <SelectItem value="pqr">PQR Services Pvt Ltd</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="ledger">Upload Ledger</Label>
                <Input type="file" accept=".xlsx,.xls,.csv" />
              </div>
              <div>
                <Label htmlFor="business">Business Description</Label>
                <Textarea placeholder="Describe the client's business, industry, and key operations..." />
              </div>
              <div>
                <Label htmlFor="period">Analysis Period</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="q1-2024">Q1 2024</SelectItem>
                    <SelectItem value="q4-2023">Q4 2023</SelectItem>
                    <SelectItem value="fy-2023">FY 2023-24</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full">Start AI Analysis</Button>
              {analysisProgress > 0 && analysisProgress < 100 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Analysis Progress</span>
                    <span>{analysisProgress}%</span>
                  </div>
                  <Progress value={analysisProgress} />
                </div>
              )}
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            <span className="font-medium">Analyses Run</span>
          </div>
          <p className="text-2xl font-bold mt-2">127</p>
          <p className="text-sm text-muted-foreground">This month</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <span className="font-medium">Red Flags</span>
          </div>
          <p className="text-2xl font-bold mt-2">12</p>
          <p className="text-sm text-muted-foreground">Need attention</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-success" />
            <span className="font-medium">Avg Score</span>
          </div>
          <p className="text-2xl font-bold mt-2">86%</p>
          <p className="text-sm text-muted-foreground">Compliance rate</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <BarChart className="w-5 h-5 text-warning" />
            <span className="font-medium">Auto Tasks</span>
          </div>
          <p className="text-2xl font-bold mt-2">668</p>
          <p className="text-sm text-muted-foreground">Completed</p>
        </Card>
      </div>

      <Tabs defaultValue="reports" className="w-full">
        <TabsList>
          <TabsTrigger value="reports">Analysis Reports</TabsTrigger>
          <TabsTrigger value="automated">Automated Tasks</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="reports" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Analysis Reports</h3>
            <div className="grid gap-4">
              {analysisReports.map((report) => (
                <Card key={report.id} className="p-4 hover:shadow-medium transition-all duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-foreground">{report.client}</h4>
                      <p className="text-sm text-muted-foreground">Analyzed on {report.analysisDate}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                      <div className="text-center">
                        <p className={`text-lg font-bold ${getScoreColor(report.score)}`}>
                          {report.score}%
                        </p>
                        <p className="text-xs text-muted-foreground">Score</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-destructive" />
                      <span className="text-sm font-medium">{report.redFlags} Red Flags Found</span>
                    </div>
                    
                    {report.findings.map((finding, index) => (
                      <div key={index} className="flex items-start gap-3 p-2 rounded bg-muted/50">
                        {getFindingIcon(finding.type)}
                        <div className="flex-1">
                          <p className="text-sm text-foreground">{finding.issue}</p>
                          <Badge className={`text-xs mt-1 ${
                            finding.severity === "high" ? "bg-destructive/10 text-destructive" :
                            finding.severity === "medium" ? "bg-warning/10 text-warning" :
                            "bg-muted text-muted-foreground"
                          }`}>
                            {finding.severity} priority
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button variant="ghost" size="sm">Download Report</Button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="automated" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Automated Task Performance</h3>
            <div className="grid gap-4">
              {automatedTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{task.task}</h4>
                    <p className="text-sm text-muted-foreground">
                      {task.completed} of {task.total} completed
                    </p>
                    <div className="mt-2">
                      <Progress value={task.percentage} className="h-2" />
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-lg font-bold text-foreground">{task.percentage.toFixed(1)}%</p>
                    <p className="text-xs text-muted-foreground">Success rate</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="insights">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">AI-Generated Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-success" />
                    <h4 className="font-medium">Positive Trends</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Improved cash flow management across clients</li>
                    <li>• Better GST compliance rates this quarter</li>
                    <li>• Reduced processing time by 32%</li>
                  </ul>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <h4 className="font-medium">Cost Savings</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AI automation has saved approximately ₹2.8L in manual processing costs this quarter.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-warning" />
                    <h4 className="font-medium">Areas for Improvement</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Bank reconciliation delays in 15% of cases</li>
                    <li>• Missing supporting documents for large transactions</li>
                    <li>• Inconsistent expense categorization</li>
                  </ul>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-5 h-5 text-primary" />
                    <h4 className="font-medium">Recommendations</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Implement automated reminder system for document collection and enhance expense classification rules.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">AI Analysis Settings</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Alert Thresholds</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>High Risk Score (%)</Label>
                    <Input type="number" defaultValue="30" />
                  </div>
                  <div>
                    <Label>Medium Risk Score (%)</Label>
                    <Input type="number" defaultValue="60" />
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Automated Tasks</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked />
                    <span className="text-sm">Enable bank reconciliation automation</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked />
                    <span className="text-sm">Auto-categorize expenses</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked />
                    <span className="text-sm">Generate compliance alerts</span>
                  </label>
                </div>
              </div>
              
              <Button>Save Settings</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};