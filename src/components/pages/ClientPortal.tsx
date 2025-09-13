import { useState } from "react";
import { Upload, Download, Eye, Clock, CheckCircle, AlertTriangle, Plus, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ClientPortal = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const documents = [
    {
      id: 1,
      name: "GST Return - March 2024",
      client: "ABC Industries Ltd.",
      type: "GST Return",
      uploadDate: "2024-03-15",
      size: "2.4 MB",
      status: "pending",
      submittedBy: "John Client"
    },
    {
      id: 2,
      name: "Bank Statement - Q1 2024",
      client: "XYZ Trading Co.",
      type: "Bank Statement",
      uploadDate: "2024-03-12",
      size: "5.8 MB",
      status: "approved",
      submittedBy: "Sarah Manager"
    },
    {
      id: 3,
      name: "Purchase Invoices - Feb 2024",
      client: "PQR Services Pvt Ltd",
      type: "Invoice",
      uploadDate: "2024-03-10",
      size: "12.1 MB",
      status: "under-review",
      submittedBy: "Mike Finance"
    },
    {
      id: 4,
      name: "Salary Slips - Q1 2024",
      client: "LMN Enterprises",
      type: "Payroll",
      uploadDate: "2024-03-08",
      size: "3.2 MB",
      status: "rejected",
      submittedBy: "Lisa HR"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-success/10 text-success";
      case "pending":
        return "bg-warning/10 text-warning";
      case "under-review":
        return "bg-primary/10 text-primary";
      case "rejected":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "under-review":
        return <Eye className="w-4 h-4" />;
      case "rejected":
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Document Uploaded",
      description: "Your document has been successfully uploaded and is under review.",
    });
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || doc.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Client Portal & Document Management</h1>
          <p className="text-muted-foreground mt-2">Manage client document uploads, reviews, and approvals</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Upload Document
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Upload New Document</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleUpload} className="space-y-4">
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
                <Label htmlFor="type">Document Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gst">GST Return</SelectItem>
                    <SelectItem value="bank">Bank Statement</SelectItem>
                    <SelectItem value="invoice">Invoice</SelectItem>
                    <SelectItem value="payroll">Payroll</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="file">Choose File</Label>
                <Input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx" />
              </div>
              <div>
                <Label htmlFor="notes">Notes (Optional)</Label>
                <Textarea placeholder="Add any additional notes..." />
              </div>
              <Button type="submit" className="w-full">Upload Document</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <Upload className="w-5 h-5 text-primary" />
            <span className="font-medium">Total Uploads</span>
          </div>
          <p className="text-2xl font-bold mt-2">247</p>
          <p className="text-sm text-muted-foreground">This month</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-warning" />
            <span className="font-medium">Pending Review</span>
          </div>
          <p className="text-2xl font-bold mt-2">23</p>
          <p className="text-sm text-muted-foreground">Awaiting action</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-success" />
            <span className="font-medium">Approved</span>
          </div>
          <p className="text-2xl font-bold mt-2">189</p>
          <p className="text-sm text-muted-foreground">Ready for processing</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <span className="font-medium">Requires Action</span>
          </div>
          <p className="text-2xl font-bold mt-2">8</p>
          <p className="text-sm text-muted-foreground">Need revision</p>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search documents, clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-40">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="under-review">Under Review</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="documents" className="w-full">
          <TabsList>
            <TabsTrigger value="documents">All Documents</TabsTrigger>
            <TabsTrigger value="recent">Recent Uploads</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="pending">Pending Review</TabsTrigger>
          </TabsList>
          
          <TabsContent value="documents" className="space-y-4">
            <div className="grid gap-4">
              {filteredDocuments.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Upload className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{doc.name}</h4>
                      <p className="text-sm text-muted-foreground">{doc.client} • {doc.type}</p>
                      <p className="text-xs text-muted-foreground">
                        Uploaded on {doc.uploadDate} by {doc.submittedBy} • {doc.size}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={`${getStatusColor(doc.status)} flex items-center gap-1`}>
                      {getStatusIcon(doc.status)}
                      {doc.status.replace("-", " ")}
                    </Badge>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recent">
            <p className="text-muted-foreground">Recent uploads from the last 7 days...</p>
          </TabsContent>
          
          <TabsContent value="approved">
            <p className="text-muted-foreground">All approved documents ready for processing...</p>
          </TabsContent>
          
          <TabsContent value="pending">
            <p className="text-muted-foreground">Documents awaiting review and approval...</p>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};