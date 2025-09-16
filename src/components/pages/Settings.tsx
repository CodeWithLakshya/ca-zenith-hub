import { useState } from "react";
import { Settings as SettingsIcon, User, Bell, Shield, Database, Monitor, Mail, Smartphone, Key, Download, Upload, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

export const Settings = () => {
  const { toast } = useToast();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [autoBackup, setAutoBackup] = useState(true);
  const [dataEncryption, setDataEncryption] = useState(true);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
    });
  };

  const handleSaveNotifications = () => {
    toast({
      title: "Notification Settings Updated",
      description: "Your notification preferences have been saved.",
    });
  };

  const handleSaveSecurity = () => {
    toast({
      title: "Security Settings Updated",
      description: "Your security settings have been updated successfully.",
    });
  };

  const handleBackupData = () => {
    toast({
      title: "Backup Started",
      description: "Your data backup has been initiated.",
    });
  };

  const handleImportData = () => {
    toast({
      title: "Import Started",
      description: "Data import process has been initiated.",
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-title font-heading text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-2 text-body">Configure your application preferences, notifications, and account settings</p>
        </div>
      </div>

      <Card className="p-6">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
            <TabsTrigger value="organization">Organization</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <User className="w-5 h-5" />
              <h3 className="text-lg font-semibold">Profile Settings</h3>
            </div>
            
            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input defaultValue="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input defaultValue="Doe" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input type="email" defaultValue="john.doe@caoffice.com" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input defaultValue="+91 9876543210" />
                </div>
                <div>
                  <Label htmlFor="designation">Designation</Label>
                  <Select defaultValue="ca">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ca">Chartered Accountant</SelectItem>
                      <SelectItem value="partner">Partner</SelectItem>
                      <SelectItem value="associate">Associate</SelectItem>
                      <SelectItem value="junior">Junior Associate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  placeholder="Tell us about yourself..."
                  defaultValue="Experienced Chartered Accountant with 10+ years in taxation and audit."
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="ist">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ist">IST (GMT+5:30)</SelectItem>
                      <SelectItem value="utc">UTC (GMT+0)</SelectItem>
                      <SelectItem value="est">EST (GMT-5)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="hi">Hindi</SelectItem>
                      <SelectItem value="mr">Marathi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button type="submit">Save Profile</Button>
            </form>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="w-5 h-5" />
              <h3 className="text-lg font-semibold">Notification Preferences</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                </div>
                <Switch 
                  checked={emailNotifications} 
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Monitor className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive push notifications in browser</p>
                  </div>
                </div>
                <Switch 
                  checked={pushNotifications} 
                  onCheckedChange={setPushNotifications}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">SMS Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive important alerts via SMS</p>
                  </div>
                </div>
                <Switch 
                  checked={smsNotifications} 
                  onCheckedChange={setSmsNotifications}
                />
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="font-medium">Notification Categories</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Task Assignments</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Client Messages</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Deadline Reminders</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">System Updates</span>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Team Chat</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Document Updates</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <Button onClick={handleSaveNotifications}>Save Notification Settings</Button>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5" />
              <h3 className="text-lg font-semibold">Security Settings</h3>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Password Settings</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input type="password" placeholder="Enter current password" />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input type="password" placeholder="Enter new password" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input type="password" placeholder="Confirm new password" />
                </div>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Key className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                </div>
                <Switch 
                  checked={twoFactorAuth} 
                  onCheckedChange={setTwoFactorAuth}
                />
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="font-medium">Session Management</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Current Session</p>
                      <p className="text-sm text-muted-foreground">Chrome on Windows • Mumbai, India</p>
                    </div>
                    <Button variant="outline" size="sm">Active</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Mobile App</p>
                      <p className="text-sm text-muted-foreground">Android App • Last active 2 hours ago</p>
                    </div>
                    <Button variant="outline" size="sm">Revoke</Button>
                  </div>
                </div>
              </div>
              
              <Button onClick={handleSaveSecurity}>Save Security Settings</Button>
            </div>
          </TabsContent>

          <TabsContent value="system" className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-5 h-5" />
              <h3 className="text-lg font-semibold">System Settings</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Automatic Backup</p>
                  <p className="text-sm text-muted-foreground">Automatically backup data daily</p>
                </div>
                <Switch 
                  checked={autoBackup} 
                  onCheckedChange={setAutoBackup}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Data Encryption</p>
                  <p className="text-sm text-muted-foreground">Encrypt sensitive data at rest</p>
                </div>
                <Switch 
                  checked={dataEncryption} 
                  onCheckedChange={setDataEncryption}
                />
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="font-medium">Data Management</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={handleBackupData}
                  >
                    <Download className="w-4 h-4" />
                    Backup Data
                  </Button>
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={handleImportData}
                  >
                    <Upload className="w-4 h-4" />
                    Import Data
                  </Button>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="font-medium">Storage Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <p className="text-sm text-muted-foreground">Total Storage</p>
                    <p className="text-2xl font-bold">500 GB</p>
                  </Card>
                  <Card className="p-4">
                    <p className="text-sm text-muted-foreground">Used Storage</p>
                    <p className="text-2xl font-bold">142 GB</p>
                  </Card>
                  <Card className="p-4">
                    <p className="text-sm text-muted-foreground">Available</p>
                    <p className="text-2xl font-bold">358 GB</p>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="organization" className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Building className="w-5 h-5" />
              <h3 className="text-lg font-semibold">Organization Settings</h3>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Organization Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="orgName">Organization Name</Label>
                    <Input defaultValue="Doe & Associates CA" />
                  </div>
                  <div>
                    <Label htmlFor="regNumber">Registration Number</Label>
                    <Input defaultValue="CA-12345" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea defaultValue="123 Business District, Mumbai, Maharashtra 400001" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input defaultValue="+91 22 1234 5678" />
                  </div>
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input defaultValue="www.doeassociates.com" />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="font-medium">Team Management</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Maximum Users</p>
                    <p className="text-sm text-muted-foreground">Current plan allows up to 50 users</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">12 / 50</p>
                    <p className="text-sm text-muted-foreground">Users active</p>
                  </div>
                </div>
                <Button variant="outline" className="gap-2">
                  <Users className="w-4 h-4" />
                  Manage Team Members
                </Button>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="font-medium">Compliance Settings</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fiscalYear">Fiscal Year</Label>
                    <Select defaultValue="apr-mar">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apr-mar">April - March</SelectItem>
                        <SelectItem value="jan-dec">January - December</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="currency">Default Currency</Label>
                    <Select defaultValue="inr">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inr">Indian Rupee (INR)</SelectItem>
                        <SelectItem value="usd">US Dollar (USD)</SelectItem>
                        <SelectItem value="eur">Euro (EUR)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <SettingsIcon className="w-5 h-5" />
              <h3 className="text-lg font-semibold">Advanced Settings</h3>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">API Configuration</h4>
                <div>
                  <Label htmlFor="apiKey">API Key</Label>
                  <div className="flex gap-2">
                    <Input 
                      type="password" 
                      defaultValue="sk_live_abcd1234efgh5678ijkl"
                      readOnly 
                    />
                    <Button variant="outline">Regenerate</Button>
                  </div>
                </div>
                <div>
                  <Label htmlFor="webhookUrl">Webhook URL</Label>
                  <Input placeholder="https://your-domain.com/webhook" />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="font-medium">Integration Settings</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">GST Portal Integration</p>
                      <p className="text-sm text-muted-foreground">Connect with government GST portal</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Banking Integration</p>
                      <p className="text-sm text-muted-foreground">Auto-sync bank statements</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Email Service</p>
                      <p className="text-sm text-muted-foreground">SMTP configuration for email notifications</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="font-medium">System Maintenance</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="gap-2">
                    <Database className="w-4 h-4" />
                    Clear Cache
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Download className="w-4 h-4" />
                    Export Logs
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Monitor className="w-4 h-4" />
                    System Health
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Upload className="w-4 h-4" />
                    Update System
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};