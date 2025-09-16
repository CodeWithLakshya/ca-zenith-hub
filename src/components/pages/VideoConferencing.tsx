import { useState } from "react";
import { Video, Camera, Mic, MicOff, Users, Monitor, PhoneOff, Settings, MessageSquare, Plus, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

export const VideoConferencing = () => {
  const { toast } = useToast();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [inCall, setInCall] = useState(false);

  const upcomingMeetings = [
    {
      id: 1,
      title: "Client Review - ABC Industries",
      time: "2:00 PM - 3:00 PM",
      date: "Today",
      participants: ["CA John Doe", "Mr. Sharma", "Ms. Patel"],
      type: "client-meeting"
    },
    {
      id: 2,
      title: "Team Standup",
      time: "10:00 AM - 10:30 AM",
      date: "Tomorrow",
      participants: ["CA John Doe", "CA Jane Smith", "Mike Johnson"],
      type: "team-meeting"
    },
    {
      id: 3,
      title: "Tax Planning Session",
      time: "4:00 PM - 5:00 PM",
      date: "Jan 22",
      participants: ["CA Mike Johnson", "Client XYZ"],
      type: "consultation"
    }
  ];

  const recentMeetings = [
    {
      id: 1,
      title: "Audit Discussion - PQR Ltd",
      duration: "45 mins",
      date: "Yesterday",
      recording: true
    },
    {
      id: 2,
      title: "GST Compliance Training",
      duration: "1h 30m",
      date: "Jan 18",
      recording: true
    },
    {
      id: 3,
      title: "Client Onboarding - New Client",
      duration: "30 mins",
      date: "Jan 17",
      recording: false
    }
  ];

  const handleJoinMeeting = (meetingId: number) => {
    setInCall(true);
    toast({
      title: "Joining Meeting",
      description: "Connecting to the meeting room...",
    });
  };

  const handleEndCall = () => {
    setInCall(false);
    toast({
      title: "Meeting Ended",
      description: "You have left the meeting.",
    });
  };

  const handleScheduleMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Meeting Scheduled",
      description: "Your meeting has been scheduled successfully.",
    });
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    toast({
      title: isMuted ? "Microphone Unmuted" : "Microphone Muted",
      description: isMuted ? "You can now speak" : "Your microphone is muted",
    });
  };

  const toggleVideo = () => {
    setIsVideoOff(!isVideoOff);
    toast({
      title: isVideoOff ? "Camera On" : "Camera Off",
      description: isVideoOff ? "Your camera is now on" : "Your camera is turned off",
    });
  };

  if (inCall) {
    return (
      <div className="h-[calc(100vh-8rem)] flex flex-col bg-background">
        {/* Meeting Header */}
        <div className="p-4 border-b border-border bg-card">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground">Client Review - ABC Industries</h3>
              <p className="text-sm text-muted-foreground">3 participants • Recording</p>
            </div>
            <Badge className="bg-success/10 text-success">Live</Badge>
          </div>
        </div>

        {/* Video Grid */}
        <div className="flex-1 p-4 bg-muted/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
            {/* Main Video */}
            <Card className="col-span-1 md:col-span-2 relative bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                <p className="text-lg font-medium">CA John Doe</p>
                <p className="text-sm text-muted-foreground">Host</p>
              </div>
              {isVideoOff && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Camera className="w-12 h-12 mx-auto mb-2" />
                    <p>Camera is off</p>
                  </div>
                </div>
              )}
            </Card>

            {/* Participant Videos */}
            <div className="space-y-4">
              <Card className="p-4 aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <Avatar className="w-16 h-16 mx-auto mb-2">
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <p className="font-medium">Mr. Sharma</p>
                </div>
              </Card>
              <Card className="p-4 aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <Avatar className="w-16 h-16 mx-auto mb-2">
                    <AvatarFallback>MP</AvatarFallback>
                  </Avatar>
                  <p className="font-medium">Ms. Patel</p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Meeting Controls */}
        <div className="p-4 border-t border-border bg-card">
          <div className="flex items-center justify-center gap-4">
            <Button
              variant={isMuted ? "destructive" : "secondary"}
              size="lg"
              onClick={toggleMute}
              className="rounded-full w-12 h-12 p-0"
            >
              {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </Button>
            <Button
              variant={isVideoOff ? "destructive" : "secondary"}
              size="lg"
              onClick={toggleVideo}
              className="rounded-full w-12 h-12 p-0"
            >
              <Camera className="w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full w-12 h-12 p-0"
            >
              <Monitor className="w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full w-12 h-12 p-0"
            >
              <MessageSquare className="w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full w-12 h-12 p-0"
            >
              <Users className="w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full w-12 h-12 p-0"
            >
              <Settings className="w-5 h-5" />
            </Button>
            <Button
              variant="destructive"
              size="lg"
              onClick={handleEndCall}
              className="rounded-full w-12 h-12 p-0"
            >
              <PhoneOff className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-title font-heading text-foreground">Video Conferencing</h1>
          <p className="text-muted-foreground mt-2 text-body">Schedule and manage video meetings with clients and team members</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Schedule Meeting
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Schedule New Meeting</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleScheduleMeeting} className="space-y-4">
              <div>
                <Label htmlFor="title">Meeting Title</Label>
                <Input placeholder="Enter meeting title..." />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea placeholder="Meeting agenda and details..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input type="time" />
                </div>
              </div>
              <div>
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="90">1.5 hours</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="participants">Participants</Label>
                <Textarea placeholder="Enter email addresses separated by commas..." />
              </div>
              <Button type="submit" className="w-full">Schedule Meeting</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card className="p-6 bg-gradient-card">
          <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Button 
              className="w-full gap-2 bg-primary hover:bg-primary/90"
              onClick={() => handleJoinMeeting(0)}
            >
              <Video className="w-4 h-4" />
              Start Instant Meeting
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <Plus className="w-4 h-4" />
              Join Meeting
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <Calendar className="w-4 h-4" />
              Schedule for Later
            </Button>
          </div>
        </Card>

        {/* Meeting Stats */}
        <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4 bg-gradient-card">
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5 text-primary" />
              <span className="font-medium">Total Meetings</span>
            </div>
            <p className="text-2xl font-bold mt-2">127</p>
            <p className="text-sm text-muted-foreground">This month</p>
          </Card>
          <Card className="p-4 bg-gradient-card">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-warning" />
              <span className="font-medium">Meeting Hours</span>
            </div>
            <p className="text-2xl font-bold mt-2">84h</p>
            <p className="text-sm text-muted-foreground">This month</p>
          </Card>
          <Card className="p-4 bg-gradient-card">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-success" />
              <span className="font-medium">Participants</span>
            </div>
            <p className="text-2xl font-bold mt-2">45</p>
            <p className="text-sm text-muted-foreground">Unique attendees</p>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Meetings */}
        <Card className="p-6">
          <h3 className="font-semibold text-foreground mb-4">Upcoming Meetings</h3>
          <ScrollArea className="h-[400px]">
            <div className="space-y-4">
              {upcomingMeetings.map((meeting) => (
                <Card key={meeting.id} className="p-4 hover:shadow-medium transition-all duration-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{meeting.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{meeting.date} • {meeting.time}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {meeting.participants.length} participants
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {meeting.participants.slice(0, 3).map((participant, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {participant}
                          </Badge>
                        ))}
                        {meeting.participants.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{meeting.participants.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="gap-2"
                      onClick={() => handleJoinMeeting(meeting.id)}
                    >
                      <Video className="w-4 h-4" />
                      Join
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </Card>

        {/* Recent Meetings */}
        <Card className="p-6">
          <h3 className="font-semibold text-foreground mb-4">Recent Meetings</h3>
          <ScrollArea className="h-[400px]">
            <div className="space-y-4">
              {recentMeetings.map((meeting) => (
                <Card key={meeting.id} className="p-4 hover:shadow-medium transition-all duration-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{meeting.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{meeting.date} • {meeting.duration}</p>
                      {meeting.recording && (
                        <Badge className="bg-success/10 text-success mt-2">
                          Recording Available
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {meeting.recording && (
                        <Button variant="outline" size="sm">
                          <Video className="w-4 h-4 mr-1" />
                          Watch
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">Details</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
};