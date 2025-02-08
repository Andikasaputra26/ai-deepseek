"use client";

import { useState } from "react";
import { ChatSidebar } from "@/components/ChatSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import ChatPage from "@/app/pages/ChatPage"; 

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <SidebarProvider open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <div className="flex h-screen bg-background w-full">
        <ChatSidebar />

        {pathname.startsWith("/thread/") && <ChatPage />}
      </div>
    </SidebarProvider>
  );
}
