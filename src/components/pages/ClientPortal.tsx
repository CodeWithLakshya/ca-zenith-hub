import { useState } from "react";
import { Upload, Download, Eye, FileText, Users, Globe, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export const ClientPortal = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const documents = [
    {
      id: 1,
      name: "GST Return - March 2024",
      client: "ABC Industries Ltd.",
      type: "GST Return",
      date: "Mar 15, 2024",
      status: "Pending",
      statusColor: "bg-warning/20 text-warning",
      typeColor: "bg-primary/20 text-primary"
    },
    {
      id: 2,
      name: "Bank Statement - Q1 2024",
      client: "XYZ Trading Co.",
      type: "Bank Statement", 
      date: "Mar 12, 2024",
      status: "Approved",
      statusColor: "bg-success/20 text-success",
      typeColor: "bg-success/20 text-success"
    },
    {
      id: 3,
      name: "Purchase Invoices - Feb 2024",
      client: "PQR Services Pvt Ltd",
      type: "Invoice",
      date: "Mar 10, 2024",
      status: "Under Review",
      statusColor: "bg-primary/20 text-primary",
      typeColor: "bg-warning/20 text-warning"
    },
    {
      id: 4,
      name: "Salary Slips - Q1 2024", 
      client: "LMN Enterprises",
      type: "Payroll",
      date: "Mar 8, 2024",
      status: "Rejected",
      statusColor: "bg-destructive/20 text-destructive",
      typeColor: "bg-destructive/20 text-destructive"
    }
  ];

  const clients = [
    {
      id: 1,
      name: "ABC Industries Ltd.",
      contact: "john@abcindustries.com",
      phone: "+91 98765 43210",
      status: "Active",
      documents: 12,
      lastActivity: "2 hours ago"
    },
    {
      id: 2,
      name: "XYZ Trading Co.",
      contact: "sarah@xyztrading.com", 
      phone: "+91 87654 32109",
      status: "Active",
      documents: 8,
      lastActivity: "1 day ago"
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in pb-20 sm:pb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="text-title">Client Portal & Document Management</h1>
          <p className="text-caption mt-1">
            Secure document sharing and client communication hub
          </p>
        </div>
        <Button onClick={() => toast.success("Upload functionality would open file dialog")}>
          <Upload className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Upload Document</span>
          <span className="sm:hidden">Upload</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        <Card className="bg-gradient-card shadow-soft">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <Upload className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="font-medium text-sm sm:text-base">Total Uploads</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold mt-2">247</p>
            <p className="text-caption">This month</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-soft">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-warning" />
              <span className="font-medium text-sm sm:text-base">Pending</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold mt-2">23</p>
            <p className="text-caption">Awaiting review</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-soft">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
              <span className="font-medium text-sm sm:text-base">Approved</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold mt-2">189</p>
            <p className="text-caption">Ready to process</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-soft">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-destructive" />
              <span className="font-medium text-sm sm:text-base">Active Clients</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold mt-2">47</p>
            <p className="text-caption">Total clients</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="documents" className="w-full">
        <TabsList className="w-full sm:w-auto grid grid-cols-3 sm:flex">
          <TabsTrigger value="documents" className="text-xs sm:text-sm">
            <FileText className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">Documents</span>
          </TabsTrigger>
          <TabsTrigger value="clients" className="text-xs sm:text-sm">
            <Users className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">Clients</span>
          </TabsTrigger>
          <TabsTrigger value="portal" className="text-xs sm:text-sm">
            <Globe className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">Portal</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="documents" className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search documents..." 
                className="pl-10 text-sm sm:text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Documents</SelectItem>
                <SelectItem value="tax">Tax Documents</SelectItem>
                <SelectItem value="audit">Audit Reports</SelectItem>
                <SelectItem value="compliance">Compliance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {documents.map((doc) => (
              <Card key={doc.id} className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-200 group">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className={`p-2 sm:p-3 rounded-lg ${doc.typeColor} group-hover:scale-110 transition-transform duration-200`}>
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <Badge className={doc.statusColor}>{doc.status}</Badge>
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-foreground mb-2 line-clamp-2">{doc.name}</h3>
                  <p className="text-caption mb-3">{doc.client}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
                    <span className="text-caption">{doc.date}</span>
                    <div className="flex gap-1 sm:gap-2">
                      <Button size="sm" variant="outline" className="flex-1 sm:flex-none" onClick={() => toast.success("Download started")}>
                        <Download className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-1" />
                        <span className="hidden sm:inline">Download</span>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 sm:flex-none" onClick={() => toast.success("Opening document viewer")}>
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-1" />
                        <span className="hidden sm:inline">View</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="clients" className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search clients..." 
                className="pl-10 text-sm sm:text-base"
              />
            </div>
            <Button onClick={() => toast.success("Add new client functionality")}>
              <Plus className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Add Client</span>
              <span className="sm:hidden">Add</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {clients.map((client) => (
              <Card key={client.id} className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-200">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-foreground">{client.name}</h3>
                      <p className="text-caption">{client.contact}</p>
                      <p className="text-caption">{client.phone}</p>
                    </div>
                    <Badge className="bg-success/20 text-success">{client.status}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-caption">Documents</p>
                      <p className="font-semibold text-foreground">{client.documents}</p>
                    </div>
                    <div>
                      <p className="text-caption">Last Activity</p>
                      <p className="font-semibold text-foreground">{client.lastActivity}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1" onClick={() => toast.success("Opening client details")}>
                      View Details
                    </Button>
                    <Button size="sm" className="flex-1" onClick={() => toast.success("Opening client documents")}>
                      Documents
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="portal" className="space-y-4 sm:space-y-6">
          <Card className="bg-gradient-card shadow-soft">
            <CardHeader>
              <CardTitle className="text-title">Portal Settings</CardTitle>
              <CardDescription className="text-caption">
                Configure client portal access and permissions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Access Control</h4>
                  <p className="text-caption mb-4">Manage client login and permissions</p>
                  <Button variant="outline" onClick={() => toast.success("Access control settings opened")}>
                    Configure Access
                  </Button>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Notifications</h4>
                  <p className="text-caption mb-4">Set up email and SMS notifications</p>
                  <Button variant="outline" onClick={() => toast.success("Notification settings opened")}>
                    Setup Notifications
                  </Button>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Branding</h4>
                  <p className="text-caption mb-4">Customize portal appearance</p>
                  <Button variant="outline" onClick={() => toast.success("Branding settings opened")}>
                    Customize Portal
                  </Button>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Security</h4>
                  <p className="text-caption mb-4">Configure security settings</p>
                  <Button variant="outline" onClick={() => toast.success("Security settings opened")}>
                    Security Settings
                  </Button>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};