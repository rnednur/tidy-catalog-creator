import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-9"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            Docs
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
};