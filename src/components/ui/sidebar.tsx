
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import Button from "./button";

interface SidebarItemProps {
  icon?: React.ReactNode;
  title: string;
  isActive?: boolean;
  isCollapsed?: boolean;
  badge?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  children?: React.ReactNode;
}

interface SidebarProps {
  children: React.ReactNode;
  className?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  position?: "left" | "right";
  mobilePosition?: "left" | "right";
  width?: string;
  collapsedWidth?: string;
  breakpoint?: "sm" | "md" | "lg" | "xl" | "2xl";
}

interface SidebarSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
}

interface SidebarHeaderProps {
  children: React.ReactNode;
  className?: string;
  showCollapseButton?: boolean;
  onCollapseClick?: () => void;
  isCollapsed?: boolean;
}

interface SidebarFooterProps {
  children: React.ReactNode;
  className?: string;
}

// Implementations

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  title,
  isActive = false,
  isCollapsed = false,
  badge,
  onClick,
  href,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = React.Children.count(children) > 0;
  
  const handleToggle = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
    onClick?.();
  };

  const content = (
    <>
      {icon && (
        <div className="sidebar-item-icon">
          {icon}
        </div>
      )}
      
      {!isCollapsed && (
        <div className="sidebar-item-content flex-grow">
          <span className="sidebar-item-title">{title}</span>
        </div>
      )}
      
      {!isCollapsed && badge && (
        <div className="sidebar-item-badge">
          {badge}
        </div>
      )}
      
      {!isCollapsed && hasChildren && (
        <ChevronRight
          className={cn(
            "h-4 w-4 transition-transform",
            isOpen && "transform rotate-90"
          )}
        />
      )}
    </>
  );
  
  const className = cn(
    "flex items-center px-3 py-2 my-1 rounded-md transition-colors",
    "hover:bg-muted/80 focus:outline-none",
    isActive && !hasChildren && "bg-primary text-primary-foreground hover:bg-primary/90",
    isActive && hasChildren && "font-medium",
    isCollapsed && "justify-center py-3"
  );
  
  const itemContent = href ? (
    <a href={href} className={className} onClick={hasChildren ? handleToggle : undefined}>
      {content}
    </a>
  ) : (
    <button onClick={handleToggle} className={cn(className, "w-full text-left")}>
      {content}
    </button>
  );
  
  return (
    <div className="sidebar-item">
      {itemContent}
      
      {hasChildren && !isCollapsed && isOpen && (
        <div className="pl-4 mt-1 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};

const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  children,
  className,
  collapsible = false,
  defaultCollapsed = false,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  
  return (
    <div className={cn("sidebar-section mb-4", className)}>
      {title && (
        <div className="sidebar-section-header">
          {collapsible ? (
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="flex items-center w-full px-3 py-2 text-xs font-medium text-foreground/70 uppercase tracking-wider hover:text-foreground focus:outline-none"
            >
              {title}
              <ChevronRight
                className={cn(
                  "ml-auto h-4 w-4 transition-transform",
                  !isCollapsed && "transform rotate-90"
                )}
              />
            </button>
          ) : (
            <h3 className="px-3 py-2 text-xs font-medium text-foreground/70 uppercase tracking-wider">
              {title}
            </h3>
          )}
        </div>
      )}
      
      <div className={cn(
        "space-y-1",
        isCollapsed && "hidden"
      )}>
        {children}
      </div>
    </div>
  );
};

const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  children,
  className,
  showCollapseButton = false,
  onCollapseClick,
  isCollapsed = false,
}) => {
  return (
    <div className={cn(
      "sidebar-header sticky top-0 z-10 flex items-center justify-between p-3",
      className
    )}>
      <div className={isCollapsed ? "justify-center w-full" : ""}>
        {children}
      </div>
      
      {showCollapseButton && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onCollapseClick}
          className={isCollapsed ? "mx-auto" : ""}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      )}
    </div>
  );
};

const SidebarFooter: React.FC<SidebarFooterProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "sidebar-footer mt-auto p-3 border-t",
      className
    )}>
      {children}
    </div>
  );
};

const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const Sidebar: React.FC<SidebarProps> & {
  Item: typeof SidebarItem;
  Section: typeof SidebarSection;
  Header: typeof SidebarHeader;
  Footer: typeof SidebarFooter;
} = ({
  children,
  className,
  collapsible = true,
  defaultCollapsed = false,
  collapsed,
  onCollapsedChange,
  position = "left",
  mobilePosition = "left",
  width = "16rem",
  collapsedWidth = "4rem",
  breakpoint = "md",
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // controlled or uncontrolled
  const isControlled = collapsed !== undefined;
  const actualIsCollapsed = isControlled ? collapsed : isCollapsed;
  
  useEffect(() => {
    const checkWidth = () => {
      const breakpointValue = parseInt(BREAKPOINTS[breakpoint].replace("px", ""));
      setIsMobile(window.innerWidth < breakpointValue);
    };
    
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [breakpoint]);
  
  const handleToggleCollapse = () => {
    if (isControlled) {
      onCollapsedChange?.(!collapsed);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };
  
  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isMobileOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      
      {/* Mobile Toggle Button */}
      {isMobile && (
        <Button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="fixed top-4 z-50"
          style={{
            [mobilePosition === "left" ? "left" : "right"]: "1rem",
          }}
          variant="outline"
          size="sm"
        >
          {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "sidebar h-full flex flex-col border-r bg-background transition-all duration-300",
          isMobile ? "fixed top-0 bottom-0 z-40" : "relative",
          isMobile && !isMobileOpen && "translate-x-[-100%] translate-y-[-100%]",
          isMobile && mobilePosition === "right" && "right-0 translate-x-[100%]",
          isMobile && mobilePosition === "right" && isMobileOpen && "translate-x-0",
          isMobile && mobilePosition === "left" && "left-0",
          isMobile && mobilePosition === "left" && isMobileOpen && "translate-x-0",
          position === "right" && !isMobile && "border-l border-r-0",
          className
        )}
        style={{
          width: isMobile ? width : actualIsCollapsed ? collapsedWidth : width,
        }}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            if (child.type === SidebarHeader) {
              return React.cloneElement(child as React.ReactElement<SidebarHeaderProps>, {
                showCollapseButton: collapsible && !isMobile,
                onCollapseClick: handleToggleCollapse,
                isCollapsed: actualIsCollapsed,
              });
            }
            
            if (child.type === SidebarItem) {
              return React.cloneElement(child as React.ReactElement<SidebarItemProps>, {
                isCollapsed: actualIsCollapsed,
              });
            }
          }
          return child;
        })}
      </aside>
    </>
  );
};

Sidebar.Item = SidebarItem;
Sidebar.Section = SidebarSection;
Sidebar.Header = SidebarHeader;
Sidebar.Footer = SidebarFooter;

export default Sidebar;
