import { useState } from "react";
import { Clock, Calendar, Users, CheckCircle, X, Plus, Search, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export const AttendanceManagement = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("march-2024");

  const attendanceData = [
    {
      id: 1,
      employee: "CA John Doe",
      department: "Tax Advisory",
      today: { status: "present", checkIn: "09:15", checkOut: "18:30" },
      thisMonth: { present: 22, absent: 2, late: 1, totalDays: 25 },
      currentStatus: "checked-in"
    },
    {
      id: 2,
      employee: "CA Jane Smith", 
      department: "Audit",
      today: { status: "present", checkIn: "09:00", checkOut: "18:15" },
      thisMonth: { present: 24, absent: 1, late: 0, totalDays: 25 },
      currentStatus: "checked-out"
    },
    {
      id: 3,
      employee: "Mike Johnson",
      department: "Compliance", 
      today: { status: "late", checkIn: "09:45", checkOut: "-" },
      thisMonth: { present: 21, absent: 3, late: 3, totalDays: 25 },
      currentStatus: "checked-in"
    },
    {
      id: 4,
      employee: "Sarah Wilson",
      department: "Tax Advisory",
      today: { status: "absent", checkIn: "-", checkOut: "-" },
      thisMonth: { present: 20, absent: 4, late: 2, totalDays: 25 },
      currentStatus: "absent"
    }
  ];

  const leaveRequests = [
    {
      id: 1,
      employee: "Mike Johnson",
      type: "Sick Leave",
      dates: "March 25-26, 2024",
      days: 2,
      status: "pending",
      reason: "Medical appointment"
    },
    {
      id: 2,
      employee: "Sarah Wilson", 
      type: "Casual Leave",
      dates: "April 1-3, 2024",
      days: 3,
      status: "approved",
      reason: "Personal work"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "present":
        return "bg-success/10 text-success";
      case "absent":
        return "bg-destructive/10 text-destructive";
      case "late":
        return "bg-warning/10 text-warning";
      case "approved":
        return "bg-success/10 text-success";
      case "pending":
        return "bg-warning/10 text-warning";
      case "rejected":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getCurrentStatusColor = (status: string) => {
    switch (status) {
      case "checked-in":
        return "bg-primary/10 text-primary";
      case "checked-out":
        return "bg-success/10 text-success";
      case "absent":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const handleMarkAttendance = () => {
    toast({
      title: "Attendance Marked",
      description: "Your attendance has been recorded successfully.",
    });
  };

  const handleApproveLeave = (id: number) => {
    toast({
      title: "Leave Approved",
      description: "Leave request has been approved successfully.",
    });
  };

  const filteredAttendance = attendanceData.filter(emp =>
    emp.employee.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Attendance Management</h1>
          <p className="text-muted-foreground mt-2">Track employee attendance, working hours, and leave requests</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleMarkAttendance} className="gap-2">
            <Clock className="w-4 h-4" />
            Mark Attendance
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-success" />
            <span className="font-medium">Present Today</span>
          </div>
          <p className="text-2xl font-bold mt-2">3</p>
          <p className="text-sm text-muted-foreground">Out of 4 employees</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <X className="w-5 h-5 text-destructive" />
            <span className="font-medium">Absent Today</span>
          </div>
          <p className="text-2xl font-bold mt-2">1</p>
          <p className="text-sm text-muted-foreground">Sarah Wilson</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-warning" />
            <span className="font-medium">Late Arrivals</span>
          </div>
          <p className="text-2xl font-bold mt-2">1</p>
          <p className="text-sm text-muted-foreground">This week</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-medium">Avg Hours</span>
          </div>
          <p className="text-2xl font-bold mt-2">8.5h</p>
          <p className="text-sm text-muted-foreground">Daily average</p>
        </Card>
      </div>

      <Tabs defaultValue="daily" className="w-full">
        <TabsList>
          <TabsTrigger value="daily">Daily Attendance</TabsTrigger>
          <TabsTrigger value="monthly">Monthly Reports</TabsTrigger>
          <TabsTrigger value="leaves">Leave Requests</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="daily" className="space-y-4">
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search employees..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Today: {new Date().toLocaleDateString()}
              </div>
            </div>

            <div className="grid gap-4">
              {filteredAttendance.map((employee) => (
                <Card key={employee.id} className="p-4 hover:shadow-medium transition-all duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{employee.employee}</h4>
                        <p className="text-sm text-muted-foreground">{employee.department}</p>
                        <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                          <span>Check-in: {employee.today.checkIn}</span>
                          <span>Check-out: {employee.today.checkOut}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-sm font-medium text-foreground">This Month</p>
                        <div className="flex gap-2 mt-1">
                          <span className="text-xs bg-success/10 text-success px-2 py-1 rounded">
                            P: {employee.thisMonth.present}
                          </span>
                          <span className="text-xs bg-destructive/10 text-destructive px-2 py-1 rounded">
                            A: {employee.thisMonth.absent}
                          </span>
                          <span className="text-xs bg-warning/10 text-warning px-2 py-1 rounded">
                            L: {employee.thisMonth.late}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge className={getStatusColor(employee.today.status)}>
                          {employee.today.status}
                        </Badge>
                        <Badge className={getCurrentStatusColor(employee.currentStatus)}>
                          {employee.currentStatus.replace("-", " ")}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="monthly" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Monthly Attendance Report</h3>
              <div className="flex gap-2">
                <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="march-2024">March 2024</SelectItem>
                    <SelectItem value="february-2024">February 2024</SelectItem>
                    <SelectItem value="january-2024">January 2024</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  Export
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {attendanceData.map((employee) => (
                <div key={employee.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-foreground">{employee.employee}</h4>
                    <p className="text-sm text-muted-foreground">{employee.department}</p>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-lg font-bold text-success">{employee.thisMonth.present}</p>
                      <p className="text-xs text-muted-foreground">Present</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-destructive">{employee.thisMonth.absent}</p>
                      <p className="text-xs text-muted-foreground">Absent</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-warning">{employee.thisMonth.late}</p>
                      <p className="text-xs text-muted-foreground">Late</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-primary">
                        {Math.round((employee.thisMonth.present / employee.thisMonth.totalDays) * 100)}%
                      </p>
                      <p className="text-xs text-muted-foreground">Attendance</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="leaves" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Leave Requests</h3>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Apply Leave
              </Button>
            </div>

            <div className="grid gap-4">
              {leaveRequests.map((leave) => (
                <div key={leave.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-foreground">{leave.employee}</h4>
                    <p className="text-sm text-muted-foreground">{leave.type} • {leave.dates}</p>
                    <p className="text-xs text-muted-foreground mt-1">{leave.reason}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="font-medium text-foreground">{leave.days} days</p>
                      <p className="text-xs text-muted-foreground">Duration</p>
                    </div>
                    <Badge className={getStatusColor(leave.status)}>
                      {leave.status}
                    </Badge>
                    {leave.status === "pending" && (
                      <div className="flex gap-1">
                        <Button 
                          onClick={() => handleApproveLeave(leave.id)}
                          size="sm" 
                          variant="outline"
                          className="text-success border-success hover:bg-success/10"
                        >
                          Approve
                        </Button>
                        <Button size="sm" variant="outline" className="text-destructive border-destructive hover:bg-destructive/10">
                          Reject
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Attendance Settings</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Office Start Time</label>
                  <Input type="time" defaultValue="09:00" />
                </div>
                <div>
                  <label className="text-sm font-medium">Office End Time</label>
                  <Input type="time" defaultValue="18:00" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Late Mark After (minutes)</label>
                  <Input type="number" defaultValue="15" />
                </div>
                <div>
                  <label className="text-sm font-medium">Half Day Hours</label>
                  <Input type="number" defaultValue="4" />
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