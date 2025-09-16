import { useState } from "react";
import { Bell, Plus, Search, Filter, Calendar, FileText, AlertCircle, Info, CheckCircle, Eye, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

export const NotificationsCirculars = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [activeTab, setActiveTab] = useState("notifications");

  const notifications = [
    {
      id: 1,
      title: "GST Return Filing Deadline Reminder",
      content: "GST returns for the month of December 2023 are due by January 20, 2024. Please ensure all returns are filed on time.",
      type: "deadline",
      priority: "high",
      date: "2024-01-18",
      read: false,
      category: "Tax Compliance"
    },
    {
      id: 2,
      title: "New Income Tax Rate Notification",
      content: "The Finance Ministry has announced revised income tax slabs effective from FY 2024-25. Please review the updated rates.",
      type: "update",
      priority: "medium",
      date: "2024-01-17",
      read: true,
      category: "Tax Updates"
    },
    {
      id: 3,
      title: "Client Document Upload",
      content: "ABC Industries has uploaded new documents for audit review. Please check the client portal.",
      type: "info",
      priority: "medium",
      date: "2024-01-16",
      read: false,
      category: "Client Updates"
    },
    {
      id: 4,
      title: "System Maintenance Scheduled",
      content: "System maintenance is scheduled for January 21, 2024 from 2:00 AM to 4:00 AM. Services may be temporarily unavailable.",
      type: "alert",
      priority: "low",
      date: "2024-01-15",
      read: true,
      category: "System"
    }
  ];

  const circulars = [
    {
      id: 1,
      title: "Circular 01/2024 - Amendment to GST Registration Process",
      content: "This circular outlines the changes to the GST registration process effective from February 1, 2024. All practitioners must adhere to the new procedures.",
      issuedBy: "CBIC",
      date: "2024-01-18",
      category: "GST",
      attachment: "Circular_01_2024.pdf",
      read: false
    },
    {
      id: 2,
      title: "Circular 45/2023 - TDS Rate Changes for FY 2024-25",
      content: "Updated TDS rates for various sections under the Income Tax Act. Please ensure compliance with the revised rates.",
      issuedBy: "CBDT",
      date: "2024-01-15",
      category: "Income Tax",
      attachment: "Circular_45_2023.pdf",
      read: true
    },
    {
      id: 3,
      title: "Circular 12/2024 - ROC Filing Extension",
      content: "Extension granted for ROC filing deadlines due to technical issues with the MCA portal.",
      issuedBy: "MCA",
      date: "2024-01-12",
      category: "Corporate Law",
      attachment: "Circular_12_2024.pdf",
      read: true
    }
  ];

  const newsletters = [
    {
      id: 1,
      title: "CA Practice Newsletter - January 2024",
      description: "Monthly updates on tax law changes, compliance requirements, and practice management tips.",
      publishDate: "2024-01-01",
      status: "published",
      subscribers: 1250
    },
    {
      id: 2,
      title: "CA Practice Newsletter - December 2023",
      description: "Year-end tax planning strategies and compliance checklist for the upcoming filing season.",
      publishDate: "2023-12-01",
      status: "published",
      subscribers: 1180
    },
    {
      id: 3,
      title: "CA Practice Newsletter - February 2024",
      description: "Draft newsletter covering new audit standards and digital compliance requirements.",
      publishDate: "2024-02-01",
      status: "draft",
      subscribers: 0
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "deadline":
        return <AlertCircle className="w-4 h-4" />;
      case "update":
        return <Info className="w-4 h-4" />;
      case "alert":
        return <Bell className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const handleCreateNotification = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Notification Created",
      description: "Your notification has been sent successfully.",
    });
  };

  const handleCreateNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Newsletter Created",
      description: "Your newsletter has been saved as draft.",
    });
  };

  const handleMarkAsRead = (id: number, type: 'notification' | 'circular') => {
    toast({
      title: "Marked as Read",
      description: `${type === 'notification' ? 'Notification' : 'Circular'} marked as read.`,
    });
  };

  const handleDownload = (filename: string) => {
    toast({
      title: "Download Started",
      description: `Downloading ${filename}...`,
    });
  };

  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || notification.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const filteredCirculars = circulars.filter(circular => {
    const matchesSearch = circular.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         circular.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || circular.category.toLowerCase() === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Notifications & Circulars</h1>
          <p className="text-muted-foreground mt-2">Stay updated with latest notifications, circulars, and newsletters</p>
        </div>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Send className="w-4 h-4" />
                Send Notification
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Send New Notification</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleCreateNotification} className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input placeholder="Notification title..." />
                </div>
                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea placeholder="Notification content..." />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="type">Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="info">Information</SelectItem>
                        <SelectItem value="deadline">Deadline</SelectItem>
                        <SelectItem value="update">Update</SelectItem>
                        <SelectItem value="alert">Alert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
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
                </div>
                <div>
                  <Label htmlFor="recipients">Recipients</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select recipients" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Team Members</SelectItem>
                      <SelectItem value="partners">Partners Only</SelectItem>
                      <SelectItem value="associates">Associates Only</SelectItem>
                      <SelectItem value="custom">Custom Selection</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full">Send Notification</Button>
              </form>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Create Newsletter
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create Newsletter</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleCreateNewsletter} className="space-y-4">
                <div>
                  <Label htmlFor="title">Newsletter Title</Label>
                  <Input placeholder="Enter newsletter title..." />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Input placeholder="Brief description..." />
                </div>
                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea 
                    placeholder="Newsletter content (supports HTML)..." 
                    className="min-h-[200px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="publishDate">Publish Date</Label>
                    <Input type="date" />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tax-updates">Tax Updates</SelectItem>
                        <SelectItem value="compliance">Compliance</SelectItem>
                        <SelectItem value="practice-tips">Practice Tips</SelectItem>
                        <SelectItem value="industry-news">Industry News</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button type="submit" variant="outline" className="flex-1">Save as Draft</Button>
                  <Button type="submit" className="flex-1">Publish Now</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-primary" />
            <span className="font-medium">Notifications</span>
          </div>
          <p className="text-2xl font-bold mt-2">24</p>
          <p className="text-sm text-muted-foreground">5 unread</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-warning" />
            <span className="font-medium">Circulars</span>
          </div>
          <p className="text-2xl font-bold mt-2">18</p>
          <p className="text-sm text-muted-foreground">This month</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <Send className="w-5 h-5 text-success" />
            <span className="font-medium">Newsletters</span>
          </div>
          <p className="text-2xl font-bold mt-2">12</p>
          <p className="text-sm text-muted-foreground">Published</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span className="font-medium">Subscribers</span>
          </div>
          <p className="text-2xl font-bold mt-2">1,250</p>
          <p className="text-sm text-muted-foreground">Active</p>
        </Card>
      </div>

      <Card className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="circulars">Circulars</TabsTrigger>
            <TabsTrigger value="newsletters">Newsletters</TabsTrigger>
          </TabsList>

          <div className="flex flex-col md:flex-row gap-4 mt-6 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-40">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {activeTab === "notifications" ? (
                  <>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="deadline">Deadlines</SelectItem>
                    <SelectItem value="update">Updates</SelectItem>
                    <SelectItem value="alert">Alerts</SelectItem>
                    <SelectItem value="info">Information</SelectItem>
                  </>
                ) : (
                  <>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="gst">GST</SelectItem>
                    <SelectItem value="income tax">Income Tax</SelectItem>
                    <SelectItem value="corporate law">Corporate Law</SelectItem>
                  </>
                )}
              </SelectContent>
            </Select>
          </div>

          <TabsContent value="notifications">
            <ScrollArea className="h-[600px]">
              <div className="space-y-4">
                {filteredNotifications.map((notification) => (
                  <Card key={notification.id} className={`p-4 hover:shadow-medium transition-all duration-200 ${!notification.read ? 'border-primary/50 bg-primary/5' : ''}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {getTypeIcon(notification.type)}
                          <h4 className="font-semibold text-foreground">{notification.title}</h4>
                          {!notification.read && (
                            <Badge className="bg-primary text-primary-foreground">New</Badge>
                          )}
                          <Badge className={getPriorityColor(notification.priority)}>
                            {notification.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{notification.content}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {notification.date}
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {notification.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {!notification.read && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleMarkAsRead(notification.id, 'notification')}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Mark Read
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">Details</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="circulars">
            <ScrollArea className="h-[600px]">
              <div className="space-y-4">
                {filteredCirculars.map((circular) => (
                  <Card key={circular.id} className={`p-4 hover:shadow-medium transition-all duration-200 ${!circular.read ? 'border-primary/50 bg-primary/5' : ''}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="w-4 h-4" />
                          <h4 className="font-semibold text-foreground">{circular.title}</h4>
                          {!circular.read && (
                            <Badge className="bg-primary text-primary-foreground">New</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{circular.content}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {circular.date}
                          </div>
                          <span>Issued by: {circular.issuedBy}</span>
                          <Badge variant="secondary" className="text-xs">
                            {circular.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleDownload(circular.attachment)}
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                        {!circular.read && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleMarkAsRead(circular.id, 'circular')}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Mark Read
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="newsletters">
            <ScrollArea className="h-[600px]">
              <div className="space-y-4">
                {newsletters.map((newsletter) => (
                  <Card key={newsletter.id} className="p-4 hover:shadow-medium transition-all duration-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Send className="w-4 h-4" />
                          <h4 className="font-semibold text-foreground">{newsletter.title}</h4>
                          <Badge className={newsletter.status === 'published' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}>
                            {newsletter.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{newsletter.description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {newsletter.publishDate}
                          </div>
                          <div className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            {newsletter.subscribers} subscribers
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Preview
                        </Button>
                        <Button variant="ghost" size="sm">Edit</Button>
                        {newsletter.status === 'published' && (
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4 mr-1" />
                            Export
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};