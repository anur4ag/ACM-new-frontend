"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const initialAnnouncements = [
  {
    id: "1",
    title: "Announcement 1",
    upload_date: "2024-07-10",
  },
  {
    id: "2",
    title: "Announcement 2",
    upload_date: "2024-07-09",
  },
];

const AnnouncementPage = () => {
  const [announcements, setAnnouncements] = useState(initialAnnouncements);
  const [announcementToDelete, setAnnouncementToDelete] = useState(null);

  const handleDelete = () => {
    const updatedAnnouncements = announcements.filter(
      (announcement) => announcement.id !== announcementToDelete
    );
    setAnnouncements(updatedAnnouncements);
    setAnnouncementToDelete(null);
    // Perform delete operation, e.g., API call to delete announcement
  };

  const openDialog = (announcementId) => {
    setAnnouncementToDelete(announcementId);
  };

  const closeDialog = () => {
    setAnnouncementToDelete(null);
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-h-[100vh] w-full p-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold p-4">Announcements</h1>
        <Button className="rounded-full">Create New Announcement</Button>
      </div>
      <div className="flex flex-col justify-between gap-20 rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">S.No</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Upload Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {announcements.map((announcement, index) => (
              <TableRow key={announcement.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="font-medium">
                  {announcement.title}
                </TableCell>
                <TableCell>{announcement.upload_date}</TableCell>
                <TableCell>
                  <div className="space-x-2">
                    <Button className="rounded-full">
                      <Link
                        href={`/edit/${announcement.id}`}
                      >
                        Edit
                      </Link>
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          onClick={() => openDialog(announcement.id)}
                          className="text-white bg-red-500 hover:bg-red-600 rounded-full"
                        >
                          Delete
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Confirm Deletion</DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
                          Are you sure you want to delete this announcement?
                          This action cannot be undone.
                        </DialogDescription>
                        <DialogFooter>
                          <DialogClose>
                            <Button onClick={closeDialog} variant="secondary">
                              Cancel
                            </Button>
                          </DialogClose>
                          <Button onClick={handleDelete} variant="destructive">
                            Delete
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-6 text-gray-500">Current Date: {currentDate}</div>
      </div>
    </div>
  );
};

export default AnnouncementPage;
