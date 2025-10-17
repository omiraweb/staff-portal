import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import UsersList from "@/components/admin/usersList";
import AddUserDropdown from "@/components/admin/add-user-dropdown";

export default async function ProtectedPage() {
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

  if (userRole !== "admin") redirect("/");

  const users = await supabase
    .from("user_profiles")
    .select(`*`, { count: "exact" });

  return (
    <div className="p-5">
      <div className="mb-10 flex items-end justify-between">
        <h1 className="mb-10 text-2xl font-bold">Users</h1>
        <AddUserDropdown />
      </div>

      <section>
        <UsersList users={users.data ? users.data : []} />
      </section>
    </div>
  );
}
