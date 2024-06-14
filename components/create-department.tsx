"use client";

import { CircleX, Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { Badge } from "./ui/badge";

const CreateDepartment = () => {
  const [invites, setInvites] = useState<string[]>([]);
  const [email, setEmail] = useState("");

  const handleAddInvite = () => {
    if (email && invites.length < 5) {
      setInvites((prevInvites) => [...prevInvites, email]);
      setEmail("");
    }
  };

  const handleRemoveInvite = (index: number) => {
    setInvites((prevInvites) => prevInvites.filter((_, i) => i !== index));
  };

  const handleCloseDialog = () => {
    setInvites([]);
    setEmail("");
  };

  return (
    <Dialog onOpenChange={handleCloseDialog}>
      <DialogTrigger asChild>
        <Button>Add department</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new department</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col mb-4">
            <Label htmlFor="name" className="text-left mb-3">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter department name"
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="username" className="text-left mb-3">
              Invite members
            </Label>
            <div className="grid grid-cols-5">
              <Input
                id="email"
                value={email}
                placeholder="Enter email address"
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-4"
              />
              <Button
                className="text-xs col-span-1 mx-2"
                onClick={handleAddInvite}
                disabled={invites.length >= 5}
              >
                <Plus />
              </Button>
            </div>
            <div className="mt-3">
              {invites.map((invite, index) => (
                <div key={index} className="flex flex-row items-center mb-1">
                  <Badge>
                    <p className="mr-1">{invite}</p>
                    <Button size="xs" onClick={() => handleRemoveInvite(index)}>
                      <CircleX size={12} />
                    </Button>
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateDepartment;
