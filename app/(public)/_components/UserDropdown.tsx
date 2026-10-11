import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSignout } from "@/hooks/use-signout";

import {
  Bolt,
  BookOpen,
  CircleUserRound,
  Home,
  Layers2,
  LayoutDashboard,
  LogOut,
  Pin,
  UserPen,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface iAppProps {
    name: string
    email: string
    image: string
}

export function UserDropdown({email, name, image}: iAppProps) {
    const handleSignOut = useSignout()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={buttonVariants({ variant: "outline", size: "icon" })}
        aria-label="Open account menu"
      >
        <CircleUserRound size={16} strokeWidth={2} aria-hidden="true" />
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="min-w-48" align="end">
        
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex items-start gap-3">
            <img
              src={image}
              alt={name} /* Đã đổi thành {name} thay vì "Avatar" */
              width={32}
              height={32}
              className="shrink-0 rounded-full object-cover" /* Thêm object-cover để ảnh không bị méo */
            />
            <div className="flex min-w-0 flex-col">
              {/* Đã truyền biến {name} và {email} vào đây */}
              <span className="truncate text-sm font-medium text-foreground">
                {name}
              </span>
              <span className="truncate text-xs font-normal text-muted-foreground">
                {email}
              </span>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={"/"} className="flex w-full items-center">
                <Home size={16} strokeWidth={2} className="opacity-60 mr-2" aria-hidden="true" />
                <span>Home</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link href={"/course"} className="flex w-full items-center">
                <BookOpen size={16} strokeWidth={2} className="opacity-60 mr-2" aria-hidden="true" />
                <span>Courses</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link href={"/dashboard"} className="flex w-full items-center">
                <LayoutDashboard size={16} strokeWidth={2} className="opacity-60 mr-2" aria-hidden="true" />
                <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        
        <DropdownMenuSeparator />
    
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut size={16} strokeWidth={2} className="opacity-60 mr-2" aria-hidden="true" />
          <span>Logout</span>
        </DropdownMenuItem>
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
}