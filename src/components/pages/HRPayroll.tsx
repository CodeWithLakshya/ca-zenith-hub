import { useState } from "react";
import { Users, DollarSign, Calendar, Plus, Search, Download, Eye, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const HRPayroll = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");

  const employees = [
    {
      id: 1,
      name: "CA John Doe",
      position: "Senior Partner",
      department: "Tax Advisory",
      salary: 85000,
      joiningDate: "2019-03-15",
      status: "active",
      email: "john.doe@capro.com",
      phone: "+91 98765 43210"
    },
    {
      id: 2,
      name: "CA Jane Smith",
      position: "Associate Partner", 
      department: "Audit",
      salary: 65000,
      joiningDate: "2020-07-22",
      status: "active",
      email: "jane.smith@capro.com",
      phone: "+91 98765 43211"
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "Senior Associate",
      department: "Compliance",
      salary: 45000,
      joiningDate: "2021-11-10",
      status: "active",
      email: "mike.johnson@capro.com",
      phone: "+91 98765 43212"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      position: "Junior Associate",
      department: "Tax Advisory",
      salary: 28000,
      joiningDate: "2023-02-14",
      status: "active",
      email: "sarah.wilson@capro.com",
      phone: "+91 98765 43213"
    }
  ];

  const payrollData = [
    {
      month: "March 2024",
      totalPayroll: 223000,
      employees: 4,
      processed: true,
      processedDate: "2024-03-31"
    },
    {
      month: "February 2024", 
      totalPayroll: 223000,
      employees: 4,
      processed: true,
      processedDate: "2024-02-29"
    },
    {
      month: "January 2024",
      totalPayroll: 223000,
      employees: 4,
      processed: true,
      processedDate: "2024-01-31"
    }
  ];

  const handleAddEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Employee Added",
      description: "New employee has been successfully added to the system.",
    });
  };

  const handleProcessPayroll = () => {
    toast({
      title: "Payroll Processed",
      description: "Monthly payroll has been processed successfully.",
    });
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-title font-heading text-foreground">HR & Payroll Management</h1>
          <p className="text-muted-foreground mt-2 text-body">Manage employees, payroll, benefits, and HR operations</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleProcessPayroll} variant="outline" className="gap-2">
            <DollarSign className="w-4 h-4" />
            Process Payroll
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Add Employee
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Add New Employee</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddEmployee} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" placeholder="john.doe@capro.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input placeholder="+91 98765 43210" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="position">Position</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="partner">Senior Partner</SelectItem>
                        <SelectItem value="associate-partner">Associate Partner</SelectItem>
                        <SelectItem value="senior-associate">Senior Associate</SelectItem>
                        <SelectItem value="junior-associate">Junior Associate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tax">Tax Advisory</SelectItem>
                        <SelectItem value="audit">Audit</SelectItem>
                        <SelectItem value="compliance">Compliance</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="salary">Monthly Salary</Label>
                    <Input type="number" placeholder="50000" />
                  </div>
                  <div>
                    <Label htmlFor="joiningDate">Joining Date</Label>
                    <Input type="date" />
                  </div>
                </div>
                <Button type="submit" className="w-full">Add Employee</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <span className="font-medium">Total Employees</span>
          </div>
          <p className="text-2xl font-bold mt-2">{employees.length}</p>
          <p className="text-sm text-muted-foreground">Active staff</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-success" />
            <span className="font-medium">Monthly Payroll</span>
          </div>
          <p className="text-2xl font-bold mt-2">₹2.23L</p>
          <p className="text-sm text-muted-foreground">Current month</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-warning" />
            <span className="font-medium">Avg Experience</span>
          </div>
          <p className="text-2xl font-bold mt-2">3.2 yrs</p>
          <p className="text-sm text-muted-foreground">Team average</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <span className="font-medium">Retention Rate</span>
          </div>
          <p className="text-2xl font-bold mt-2">94%</p>
          <p className="text-sm text-muted-foreground">Last 12 months</p>
        </Card>
      </div>

      <Tabs defaultValue="employees" className="w-full">
        <TabsList>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="payroll">Payroll</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="employees" className="space-y-4">
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
            </div>

            <div className="grid gap-4">
              {filteredEmployees.map((employee) => (
                <Card key={employee.id} className="p-4 hover:shadow-medium transition-all duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{employee.name}</h4>
                        <p className="text-sm text-muted-foreground">{employee.position} • {employee.department}</p>
                        <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                          <span>{employee.email}</span>
                          <span>{employee.phone}</span>
                          <span>Joined: {employee.joiningDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-semibold text-foreground">₹{employee.salary.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">Monthly salary</p>
                      </div>
                      <Badge className="bg-success/10 text-success">
                        {employee.status}
                      </Badge>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="payroll" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Payroll History</h3>
            <div className="grid gap-4">
              {payrollData.map((payroll, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-foreground">{payroll.month}</h4>
                    <p className="text-sm text-muted-foreground">
                      {payroll.employees} employees • Processed on {payroll.processedDate}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-semibold text-foreground">₹{payroll.totalPayroll.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Total amount</p>
                    </div>
                    <Badge className="bg-success/10 text-success">Processed</Badge>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="benefits">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Employee Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Health Insurance</h4>
                <p className="text-sm text-muted-foreground">Comprehensive medical coverage</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Provident Fund</h4>
                <p className="text-sm text-muted-foreground">12% employer contribution</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Professional Development</h4>
                <p className="text-sm text-muted-foreground">Annual training allowance</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">HR Reports</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Download className="w-5 h-5" />
                <span>Payroll Summary</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Download className="w-5 h-5" />
                <span>Employee Directory</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Download className="w-5 h-5" />
                <span>Tax Deductions</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Download className="w-5 h-5" />
                <span>Benefits Report</span>
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};