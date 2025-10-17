"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import AddAdminForm from "../forms/add-admin-form";

interface IAddUserDialogProps {
  isOpen: boolean;
  handleDialogOpen: (d: "admin" | "hr" | "employee" | null) => void;
}

const AddAdminUserDialog = ({
  isOpen,
  handleDialogOpen,
}: IAddUserDialogProps) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent onInteractOutside={() => handleDialogOpen(null)}>
        <DialogHeader>
          <DialogTitle>Add Admin User</DialogTitle>
          <DialogDescription>
            Add an admin user to the staff portal platform
          </DialogDescription>
        </DialogHeader>
        <AddAdminForm />
      </DialogContent>
    </Dialog>
  );
};

const AddHrUserDialog = ({ isOpen, handleDialogOpen }: IAddUserDialogProps) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent onInteractOutside={() => handleDialogOpen(null)}>
        <DialogHeader>
          <DialogTitle>Add Hr User</DialogTitle>
          <DialogDescription>
            Add an hr user to the staff portal platform
          </DialogDescription>
        </DialogHeader>
        <AddAdminForm />
      </DialogContent>
    </Dialog>
  );
};

const AddEmployeeUserDialog = ({
  isOpen,
  handleDialogOpen,
}: IAddUserDialogProps) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent onInteractOutside={() => handleDialogOpen(null)}>
        <DialogHeader>
          <DialogTitle>Add Employee User</DialogTitle>
          <DialogDescription>
            Add an employee user to the staff portal platform
          </DialogDescription>
        </DialogHeader>
        <AddAdminForm />
      </DialogContent>
    </Dialog>
  );
};

const AddUserDropdown = () => {
  const [dialogsStatus, setDialogStatus] = useState({
    admin: false,
    hr: false,
    employee: false,
  });

  const handleDialogOpen = (dialog: "admin" | "hr" | "employee" | null) => {
    const newDialogState = {
      admin: dialog === "admin" ? true : false,
      hr: dialog === "hr" ? true : false,
      employee: dialog === "employee" ? true : false,
    };
    setDialogStatus({ ...newDialogState });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Add User</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => handleDialogOpen("admin")}>
            Admin
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDialogOpen("hr")}>
            HR
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDialogOpen("employee")}>
            Employee
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AddAdminUserDialog
        isOpen={dialogsStatus.admin}
        handleDialogOpen={handleDialogOpen}
      />
      <AddHrUserDialog
        isOpen={dialogsStatus.hr}
        handleDialogOpen={handleDialogOpen}
      />
      <AddEmployeeUserDialog
        isOpen={dialogsStatus.employee}
        handleDialogOpen={handleDialogOpen}
      />
    </>
  );
};

export default AddUserDropdown;
