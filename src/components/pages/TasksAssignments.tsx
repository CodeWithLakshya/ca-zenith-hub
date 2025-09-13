import { useState } from "react";
import { Plus, Calendar, User, Clock, CheckCircle, AlertTriangle, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export const TasksAssignments = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPriority, setFilterPriority] = useState("all");

  const tasks = [
    {
      id: 1,
      title: "GST Return Filing - ABC Industries",
      description: "Complete and file GST return for Q1 2024",
      assignee: "CA John Doe",
      client: "ABC Industries Ltd.",
      priority: "high",
      status: "in-progress",
      dueDate: "2024-01-20",
      createdDate: "2024-01-10",
      estimatedHours: 8,
      completedHours: 5
    },
    {
      id: 2,
      title: "Tax Computation - XYZ Trading",
      description: "Calculate income tax liability for FY 2023-24",
      assignee: "CA Jane Smith",
      client: "XYZ Trading Co.",
      priority: "medium",
      status: "pending",
      dueDate: "2024-01-25",
      createdDate: "2024-01-12",
      estimatedHours: 12,
      completedHours: 0
    },
    {
      id: 3,
      title: "Audit Documentation Review",
      description: "Review and finalize audit working papers",
      assignee: "CA Mike Johnson",
      client: "PQR Services Pvt Ltd",
      priority: "high",
      status: "completed",
      dueDate: "2024-01-18",
      createdDate: "2024-01-05",
      estimatedHours: 16,
      completedHours: 16
    },
    {
      id: 4,
      title: "Bank Reconciliation",
      description: "Reconcile bank statements for December 2023",
      assignee: "Junior Associate",
      client: "LMN Enterprises",
      priority: "low",
      status: "overdue",
      dueDate: "2024-01-15",
      createdDate: "2024-01-08",
      estimatedHours: 4,
      completedHours: 2
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success/10 text-success";
      case "in-progress":
        return "bg-primary/10 text-primary";
      case "pending":
        return "bg-warning/10 text-warning";
      case "overdue":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "in-progress":
        return <Clock className="w-4 h-4" />;
      case "pending":
        return <Calendar className="w-4 h-4" />;
      case "overdue":
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Task Created",
      description: "New task has been assigned successfully.",
    });
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.assignee.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterPriority === "all" || task.priority === filterPriority;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Tasks & Assignments</h1>
          <p className="text-muted-foreground mt-2">Manage team tasks, deadlines, and project assignments</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Create Task
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Create New Task</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreateTask} className="space-y-4">
              <div>
                <Label htmlFor="title">Task Title</Label>
                <Input placeholder="Enter task title..." />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea placeholder="Describe the task..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="assignee">Assign to</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select assignee" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john">CA John Doe</SelectItem>
                      <SelectItem value="jane">CA Jane Smith</SelectItem>
                      <SelectItem value="mike">CA Mike Johnson</SelectItem>
                      <SelectItem value="junior">Junior Associate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
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
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="priority">Priority</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="estimated">Estimated Hours</Label>
                  <Input type="number" placeholder="8" />
                </div>
              </div>
              <div>
                <Label>Due Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <Button type="submit" className="w-full">Create Task</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-medium">Total Tasks</span>
          </div>
          <p className="text-2xl font-bold mt-2">47</p>
          <p className="text-sm text-muted-foreground">Active assignments</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-warning" />
            <span className="font-medium">In Progress</span>
          </div>
          <p className="text-2xl font-bold mt-2">18</p>
          <p className="text-sm text-muted-foreground">Being worked on</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-success" />
            <span className="font-medium">Completed</span>
          </div>
          <p className="text-2xl font-bold mt-2">156</p>
          <p className="text-sm text-muted-foreground">This month</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <span className="font-medium">Overdue</span>
          </div>
          <p className="text-2xl font-bold mt-2">3</p>
          <p className="text-sm text-muted-foreground">Need attention</p>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search tasks, assignees, clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterPriority} onValueChange={setFilterPriority}>
            <SelectTrigger className="w-40">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priority</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-4">
          {filteredTasks.map((task) => (
            <Card key={task.id} className="p-4 hover:shadow-medium transition-all duration-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-foreground">{task.title}</h4>
                    <Badge className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                    <Badge className={`${getStatusColor(task.status)} flex items-center gap-1`}>
                      {getStatusIcon(task.status)}
                      {task.status.replace("-", " ")}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {task.assignee}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Due: {task.dueDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {task.completedHours}h / {task.estimatedHours}h
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(task.completedHours / task.estimatedHours) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};