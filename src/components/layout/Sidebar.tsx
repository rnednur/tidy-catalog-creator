import { cn } from "@/lib/utils";
import { ChevronLeft, Database, FolderOpen } from "lucide-react";
import { useState } from "react";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "h-screen bg-background border-r border-border transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h2
          className={cn(
            "font-semibold transition-opacity duration-300",
            isCollapsed && "opacity-0"
          )}
        >
          Catalog Builder
        </h2>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 hover:bg-accent rounded-md transition-colors"
        >
          <ChevronLeft
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              isCollapsed && "rotate-180"
            )}
          />
        </button>
      </div>
      <div className="p-2">
        <div className="space-y-2">
          <NavItem
            icon={Database}
            label="sqlite_c1"
            isCollapsed={isCollapsed}
            isActive
          >
            <NavItem
              icon={FolderOpen}
              label="main"
              isCollapsed={isCollapsed}
              indent
            >
              <NavItem
                icon={FolderOpen}
                label="Goalies"
                isCollapsed={isCollapsed}
                indent={2}
              />
            </NavItem>
          </NavItem>
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isCollapsed: boolean;
  isActive?: boolean;
  indent?: number | boolean;
  children?: React.ReactNode;
}

const NavItem = ({
  icon: Icon,
  label,
  isCollapsed,
  isActive,
  indent = 0,
  children,
}: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const indentLevel = typeof indent === "boolean" ? (indent ? 1 : 0) : indent;

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center gap-2 px-2 py-1.5 rounded-md transition-colors",
          isActive ? "bg-accent" : "hover:bg-accent/50",
          indentLevel && `ml-${indentLevel * 4}`
        )}
      >
        <Icon className="h-4 w-4 shrink-0" />
        <span
          className={cn(
            "text-sm transition-opacity duration-300",
            isCollapsed && "opacity-0"
          )}
        >
          {label}
        </span>
      </button>
      {isOpen && children}
    </div>
  );
};