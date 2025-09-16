import { useState } from "react";
import { MessageSquare, Users, Plus, Search, Send, Phone, Video, MoreVertical, Hash, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

export const TeamChat = () => {
  const { toast } = useToast();
  const [selectedChannel, setSelectedChannel] = useState("general");
  const [newMessage, setNewMessage] = useState("");

  const channels = [
    { id: "general", name: "General", type: "public", members: 4, unread: 0 },
    { id: "tax-team", name: "Tax Team", type: "private", members: 2, unread: 3 },
    { id: "audit-team", name: "Audit Team", type: "private", members: 2, unread: 1 },
    { id: "client-updates", name: "Client Updates", type: "public", members: 4, unread: 0 },
    { id: "compliance", name: "Compliance", type: "private", members: 3, unread: 0 }
  ];

  const directMessages = [
    { id: "john", name: "CA John Doe", status: "online", unread: 0 },
    { id: "jane", name: "CA Jane Smith", status: "away", unread: 2 },
    { id: "mike", name: "Mike Johnson", status: "offline", unread: 0 },
    { id: "sarah", name: "Sarah Wilson", status: "online", unread: 1 }
  ];

  const messages = [
    {
      id: 1,
      sender: "CA John Doe",
      content: "Good morning team! Don't forget we have the client review meeting at 2 PM today.",
      timestamp: "09:15 AM",
      avatar: "JD"
    },
    {
      id: 2,
      sender: "CA Jane Smith",
      content: "Thanks for the reminder! I've prepared the audit findings document.",
      timestamp: "09:18 AM",
      avatar: "JS"
    },
    {
      id: 3,
      sender: "Mike Johnson",
      content: "I'll share the compliance checklist before the meeting.",
      timestamp: "09:20 AM",
      avatar: "MJ"
    },
    {
      id: 4,
      sender: "Sarah Wilson",
      content: "Perfect! Should I prepare the tax implications summary as well?",
      timestamp: "09:22 AM",
      avatar: "SW"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-success";
      case "away":
        return "bg-warning";
      case "offline":
        return "bg-muted";
      default:
        return "bg-muted";
    }
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    toast({
      title: "Message Sent",
      description: "Your message has been sent to the channel.",
    });
    
    setNewMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex bg-background overflow-hidden">
      {/* Sidebar */}
      <div className="w-full md:w-80 border-r border-border flex flex-col hidden md:flex">
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Team Communication</h2>
            <Button size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              New
            </Button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search conversations..." className="pl-10" />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-4">
            {/* Channels */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4" />
                Channels
              </h3>
              <div className="space-y-1">
                {channels.map((channel) => (
                  <div
                    key={channel.id}
                    onClick={() => setSelectedChannel(channel.id)}
                    className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${
                      selectedChannel === channel.id 
                        ? "bg-primary/10 text-primary" 
                        : "hover:bg-muted/50 text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {channel.type === "private" ? (
                        <Lock className="w-4 h-4" />
                      ) : (
                        <Hash className="w-4 h-4" />
                      )}
                      <span className="text-sm font-medium">{channel.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{channel.members}</span>
                      {channel.unread > 0 && (
                        <Badge className="bg-destructive text-destructive-foreground text-xs h-5 w-5 p-0 flex items-center justify-center">
                          {channel.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Direct Messages */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Direct Messages
              </h3>
              <div className="space-y-1">
                {directMessages.map((dm) => (
                  <div
                    key={dm.id}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="text-xs">
                            {dm.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div 
                          className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${getStatusColor(dm.status)}`}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-foreground">{dm.name}</span>
                    </div>
                    {dm.unread > 0 && (
                      <Badge className="bg-destructive text-destructive-foreground text-xs h-5 w-5 p-0 flex items-center justify-center">
                        {dm.unread}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Hash className="w-5 h-5" />
                {channels.find(c => c.id === selectedChannel)?.name || "General"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {channels.find(c => c.id === selectedChannel)?.members} members
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Video className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Users className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="flex items-start gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback>{message.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-foreground">{message.sender}</span>
                    <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                  </div>
                  <p className="text-sm text-foreground">{message.content}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t border-border">
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <Textarea
                placeholder={`Message #${channels.find(c => c.id === selectedChannel)?.name || "general"}`}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="min-h-[60px] resize-none"
              />
            </div>
            <Button 
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="gap-2"
            >
              <Send className="w-4 h-4" />
              Send
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
            <span>Press Enter to send, Shift+Enter for new line</span>
          </div>
        </div>
      </div>

      {/* Member List (Optional - can be toggled) */}
      <div className="w-64 border-l border-border p-4 bg-muted/20 hidden lg:block">
        <h3 className="font-medium text-foreground mb-4 flex items-center gap-2">
          <Users className="w-4 h-4" />
          Members
        </h3>
        <div className="space-y-2">
          {directMessages.map((member) => (
            <div key={member.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
              <div className="relative">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="text-xs">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div 
                  className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${getStatusColor(member.status)}`}
                ></div>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{member.name}</p>
                <p className="text-xs text-muted-foreground capitalize">{member.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};