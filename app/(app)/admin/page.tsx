import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

  const totalUsers = await supabase
    .from("profiles")
    .select("id", { count: "exact" });

  const totalHrUsers = await supabase
    .from("profiles")
    .select("id", { count: "exact" })
    .eq("role", "hr");

  const employeeUsers = await supabase
    .from("profiles")
    .select("id", { count: "exact" })
    .eq("role", "employee");

  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      <Card>
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
          <CardDescription>
            This is the number of users Active on the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-5xl font-bold">{totalUsers.count}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>HR Users</CardTitle>
          <CardDescription>
            This is the number of hr users on the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-5xl font-bold">{totalHrUsers.count}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Employee Users</CardTitle>
          <CardDescription>
            This is the number of employee users on the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-5xl font-bold">{employeeUsers.count}</p>
        </CardContent>
      </Card>
    </div>
  );
}
