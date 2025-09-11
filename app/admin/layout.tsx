import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSidebar from "@/components/partials/app-sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <nav className="flex items-center justify-between border-b border-b-slate-200 px-5 py-3">
          <div className="flex items-center gap-3">
            <SidebarTrigger />
            <ThemeSwitcher />
          </div>
          <AuthButton />
        </nav>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
