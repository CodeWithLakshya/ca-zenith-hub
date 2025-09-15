import { Bell, Search, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const DashboardHeader = () => {
  return (
    <header className="bg-card border-b border-border px-3 sm:px-6 py-3 sm:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
          <h1 className="text-lg sm:text-2xl font-bold text-foreground truncate">CA Practice Dashboard</h1>
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search clients, tasks, documents..." 
              className="pl-10 w-60 lg:w-80"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-1 sm:gap-3">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="w-4 h-4" />
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full"></span>
          </Button>
          
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Settings className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-2 sm:gap-3 ml-1 sm:ml-3 pl-1 sm:pl-3 border-l border-border">
            <div className="text-right hidden lg:block">
              <p className="text-sm font-medium text-foreground">CA John Doe</p>
              <p className="text-xs text-muted-foreground">Senior Partner</p>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};