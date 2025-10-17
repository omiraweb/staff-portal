import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";
import moment from "moment";

interface UsersListProps {
  users: {
    id: string;
    name: string;
    role: string;
    email: string;
    email_confirmed_at: string;
    is_email_confirmed: boolean;
    user_role: string;
    created_at: string;
    updated_at: string;
  }[];
}

const UsersList = ({ users }: UsersListProps) => {
  return (
    <div className="w-full overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="pl-4">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Email verifed</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Joined</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users &&
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="pl-4">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  {user.is_email_confirmed ? (
                    <Badge variant="secondary">Verified</Badge>
                  ) : (
                    <Badge variant="destructive">Not verfied</Badge>
                  )}
                </TableCell>
                <TableCell>{user.role.toUpperCase()}</TableCell>
                <TableCell>
                  {moment(user.created_at)
                    .utcOffset("+05:30")
                    .format("MMMM Do YYYY, h:mm:ss a")}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersList;
