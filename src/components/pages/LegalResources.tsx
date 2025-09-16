import { useState } from "react";
import { BookOpen, Search, Filter, Download, Plus, FileText, Scale, Gavel, Users, Star, Calendar, Eye, Tag } from "lucide-react";
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

export const LegalResources = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("acts");

  const acts = [
    {
      id: 1,
      title: "Income Tax Act, 1961",
      description: "Complete text of the Income Tax Act with latest amendments",
      category: "Tax Law",
      lastUpdated: "2024-01-15",
      size: "2.5 MB",
      format: "PDF",
      downloads: 1250,
      isFavorite: true,
      tags: ["Tax", "Income", "Assessment"]
    },
    {
      id: 2,
      title: "Companies Act, 2013",
      description: "Comprehensive guide to company law and corporate governance",
      category: "Corporate Law",
      lastUpdated: "2024-01-10",
      size: "3.2 MB",
      format: "PDF",
      downloads: 980,
      isFavorite: false,
      tags: ["Corporate", "Governance", "Directors"]
    },
    {
      id: 3,
      title: "Goods and Services Tax Act, 2017",
      description: "GST law with rules, notifications and clarifications",
      category: "Tax Law",
      lastUpdated: "2024-01-18",
      size: "1.8 MB",
      format: "PDF",
      downloads: 2100,
      isFavorite: true,
      tags: ["GST", "Tax", "Supply"]
    },
    {
      id: 4,
      title: "Foreign Exchange Management Act, 1999",
      description: "FEMA provisions for foreign exchange transactions",
      category: "FEMA",
      lastUpdated: "2023-12-20",
      size: "1.2 MB",
      format: "PDF",
      downloads: 450,
      isFavorite: false,
      tags: ["FEMA", "Foreign Exchange", "RBI"]
    }
  ];

  const rules = [
    {
      id: 1,
      title: "Income Tax Rules, 1962",
      description: "Detailed rules and procedures under Income Tax Act",
      category: "Tax Rules",
      lastUpdated: "2024-01-12",
      size: "4.1 MB",
      format: "PDF",
      downloads: 850,
      parentAct: "Income Tax Act, 1961"
    },
    {
      id: 2,
      title: "Companies (Incorporation) Rules, 2014",
      description: "Rules for company incorporation and registration",
      category: "Corporate Rules",
      lastUpdated: "2024-01-08",
      size: "890 KB",
      format: "PDF",
      downloads: 620,
      parentAct: "Companies Act, 2013"
    },
    {
      id: 3,
      title: "Central Goods and Services Tax Rules, 2017",
      description: "CGST rules and procedures for implementation",
      category: "GST Rules",
      lastUpdated: "2024-01-16",
      size: "2.3 MB",
      format: "PDF",
      downloads: 1400,
      parentAct: "CGST Act, 2017"
    }
  ];

  const notifications = [
    {
      id: 1,
      title: "Notification 14/2024-Central Tax",
      description: "Amendment to GST return filing due dates",
      issuingAuthority: "CBIC",
      dateIssued: "2024-01-18",
      category: "GST",
      urgency: "high",
      size: "156 KB",
      format: "PDF"
    },
    {
      id: 2,
      title: "Notification 02/2024-Income Tax",
      description: "Updated ITR forms for AY 2024-25",
      issuingAuthority: "CBDT",
      dateIssued: "2024-01-15",
      category: "Income Tax",
      urgency: "medium",
      size: "234 KB",
      format: "PDF"
    },
    {
      id: 3,
      title: "Notification 01/2024-Companies",
      description: "Relaxation in filing requirements for small companies",
      issuingAuthority: "MCA",
      dateIssued: "2024-01-10",
      category: "Corporate",
      urgency: "medium",
      size: "189 KB",
      format: "PDF"
    }
  ];

  const caseLaws = [
    {
      id: 1,
      title: "CIT v. Hindustan Lever Ltd.",
      court: "Supreme Court",
      year: "2023",
      citation: "2023 SCC 145",
      category: "Income Tax",
      keywords: ["Transfer Pricing", "ALP", "Benchmarking"],
      summary: "Landmark judgment on transfer pricing methodology and arm's length principle",
      importance: "high",
      downloads: 890
    },
    {
      id: 2,
      title: "Union of India v. Azadi Bachao Andolan",
      court: "Supreme Court",
      year: "2022",
      citation: "2022 SCC 67",
      category: "Tax Treaty",
      keywords: ["DTAA", "Tax Avoidance", "Beneficial Ownership"],
      summary: "Important ruling on tax treaty interpretation and beneficial ownership",
      importance: "high",
      downloads: 1200
    },
    {
      id: 3,
      title: "ABC Pvt. Ltd. v. ACIT",
      court: "High Court",
      year: "2023",
      citation: "2023 HC 234",
      category: "Assessment",
      keywords: ["Reopening", "Section 148", "Reasons"],
      summary: "Guidelines for reopening of assessment under Section 148",
      importance: "medium",
      downloads: 450
    }
  ];

  const handleDownload = (resourceName: string) => {
    toast({
      title: "Download Started",
      description: `Downloading ${resourceName}...`,
    });
  };

  const handleAddResource = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Resource Added",
      description: "New legal resource has been added to the database.",
    });
  };

  const toggleFavorite = (id: number) => {
    toast({
      title: "Favorites Updated",
      description: "Resource added to/removed from favorites.",
    });
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
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

  const getImportanceColor = (importance: string) => {
    switch (importance) {
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

  const filteredContent = {
    acts: acts.filter(act => {
      const matchesSearch = act.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           act.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           act.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesFilter = filterCategory === "all" || act.category === filterCategory;
      return matchesSearch && matchesFilter;
    }),
    rules: rules.filter(rule => {
      const matchesSearch = rule.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           rule.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterCategory === "all" || rule.category === filterCategory;
      return matchesSearch && matchesFilter;
    }),
    notifications: notifications.filter(notification => {
      const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           notification.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterCategory === "all" || notification.category === filterCategory;
      return matchesSearch && matchesFilter;
    }),
    caseLaws: caseLaws.filter(caselaw => {
      const matchesSearch = caselaw.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           caselaw.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           caselaw.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesFilter = filterCategory === "all" || caselaw.category === filterCategory;
      return matchesSearch && matchesFilter;
    })
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Legal Resources Bank</h1>
          <p className="text-muted-foreground mt-2">Comprehensive repository of acts, rules, notifications, and case laws</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Add Resource
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Add New Legal Resource</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddResource} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input placeholder="Enter resource title..." />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea placeholder="Brief description..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="type">Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="act">Act</SelectItem>
                      <SelectItem value="rule">Rule</SelectItem>
                      <SelectItem value="notification">Notification</SelectItem>
                      <SelectItem value="circular">Circular</SelectItem>
                      <SelectItem value="caselaw">Case Law</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tax-law">Tax Law</SelectItem>
                      <SelectItem value="corporate-law">Corporate Law</SelectItem>
                      <SelectItem value="fema">FEMA</SelectItem>
                      <SelectItem value="securities">Securities Law</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="file">Upload File</Label>
                <Input type="file" accept=".pdf,.doc,.docx" />
              </div>
              <Button type="submit" className="w-full">Add Resource</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-primary" />
            <span className="font-medium">Acts</span>
          </div>
          <p className="text-2xl font-bold mt-2">45</p>
          <p className="text-sm text-muted-foreground">Available</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-warning" />
            <span className="font-medium">Rules</span>
          </div>
          <p className="text-2xl font-bold mt-2">128</p>
          <p className="text-sm text-muted-foreground">Documents</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <Gavel className="w-5 h-5 text-success" />
            <span className="font-medium">Case Laws</span>
          </div>
          <p className="text-2xl font-bold mt-2">350</p>
          <p className="text-sm text-muted-foreground">Judgments</p>
        </Card>
        <Card className="p-4 bg-gradient-card">
          <div className="flex items-center gap-2">
            <Download className="w-5 h-5 text-accent" />
            <span className="font-medium">Downloads</span>
          </div>
          <p className="text-2xl font-bold mt-2">15.2K</p>
          <p className="text-sm text-muted-foreground">This month</p>
        </Card>
      </div>

      <Card className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="acts">Acts</TabsTrigger>
            <TabsTrigger value="rules">Rules</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="caselaws">Case Laws</TabsTrigger>
          </TabsList>

          <div className="flex flex-col md:flex-row gap-4 mt-6 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search legal resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Tax Law">Tax Law</SelectItem>
                <SelectItem value="Corporate Law">Corporate Law</SelectItem>
                <SelectItem value="FEMA">FEMA</SelectItem>
                <SelectItem value="Securities">Securities Law</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <TabsContent value="acts">
            <ScrollArea className="h-[600px]">
              <div className="grid gap-4">
                {filteredContent.acts.map((act) => (
                  <Card key={act.id} className="p-4 hover:shadow-medium transition-all duration-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Scale className="w-4 h-4" />
                          <h4 className="font-semibold text-foreground">{act.title}</h4>
                          {act.isFavorite && (
                            <Star className="w-4 h-4 text-warning fill-current" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{act.description}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {act.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            Updated: {act.lastUpdated}
                          </div>
                          <span>Size: {act.size}</span>
                          <span>Format: {act.format}</span>
                          <div className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            {act.downloads} downloads
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {act.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => toggleFavorite(act.id)}
                        >
                          <Star className={`w-4 h-4 ${act.isFavorite ? 'text-warning fill-current' : ''}`} />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Preview
                        </Button>
                        <Button 
                          size="sm"
                          onClick={() => handleDownload(act.title)}
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="rules">
            <ScrollArea className="h-[600px]">
              <div className="grid gap-4">
                {filteredContent.rules.map((rule) => (
                  <Card key={rule.id} className="p-4 hover:shadow-medium transition-all duration-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="w-4 h-4" />
                          <h4 className="font-semibold text-foreground">{rule.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{rule.description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            Updated: {rule.lastUpdated}
                          </div>
                          <span>Size: {rule.size}</span>
                          <span>Parent: {rule.parentAct}</span>
                          <div className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            {rule.downloads} downloads
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {rule.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Preview
                        </Button>
                        <Button 
                          size="sm"
                          onClick={() => handleDownload(rule.title)}
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="notifications">
            <ScrollArea className="h-[600px]">
              <div className="grid gap-4">
                {filteredContent.notifications.map((notification) => (
                  <Card key={notification.id} className="p-4 hover:shadow-medium transition-all duration-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="w-4 h-4" />
                          <h4 className="font-semibold text-foreground">{notification.title}</h4>
                          <Badge className={getUrgencyColor(notification.urgency)}>
                            {notification.urgency}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{notification.description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            Issued: {notification.dateIssued}
                          </div>
                          <span>By: {notification.issuingAuthority}</span>
                          <span>Size: {notification.size}</span>
                          <Badge variant="secondary" className="text-xs">
                            {notification.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Preview
                        </Button>
                        <Button 
                          size="sm"
                          onClick={() => handleDownload(notification.title)}
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="caselaws">
            <ScrollArea className="h-[600px]">
              <div className="grid gap-4">
                {filteredContent.caseLaws.map((caselaw) => (
                  <Card key={caselaw.id} className="p-4 hover:shadow-medium transition-all duration-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Gavel className="w-4 h-4" />
                          <h4 className="font-semibold text-foreground">{caselaw.title}</h4>
                          <Badge className={getImportanceColor(caselaw.importance)}>
                            {caselaw.importance}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{caselaw.summary}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {caselaw.keywords.map((keyword, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>Court: {caselaw.court}</span>
                          <span>Year: {caselaw.year}</span>
                          <span>Citation: {caselaw.citation}</span>
                          <div className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            {caselaw.downloads} downloads
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {caselaw.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Read
                        </Button>
                        <Button 
                          size="sm"
                          onClick={() => handleDownload(caselaw.title)}
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
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