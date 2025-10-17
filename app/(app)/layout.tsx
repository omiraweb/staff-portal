import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSidebar from "@/components/partials/app-sidebar";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  const userRole = data.claims.user_role || undefined;
  if (!userRole) {
    await supabase.auth.signOut();
    redirect("/auth/login");
  }

  return (
    <SidebarProvider>
      <AppSidebar userRole={userRole} />
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
