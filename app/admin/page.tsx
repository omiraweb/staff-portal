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

  const totalUsers = await supabase.from("profiles").select("*");
  console.log(totalUsers);

  return (
    <div className="grid grid-cols-4 p-5">
      <Card className="@container/card">
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
          <CardDescription>
            This is the number of users Active on the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-5xl font-bold">100</p>
        </CardContent>
      </Card>
    </div>
  );
}
