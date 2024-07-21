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

const initialBlogs = [
  {
    id: "1",
    title: "Blog 1",
    author: "Author 1",
    status: "pending",
  },
  {
    id: "2",
    title: "Blog 2",
    author: "Author 2",
    status: "approved",
  },
  {
    id: "3",
    title: "Blog 3",
    author: "Author 3",
    status: "rejected",
  },
];

const BlogsPage = () => {
  const [blogData, setBlogData] = useState(initialBlogs);
  const [blogToDelete, setBlogToDelete] = useState(null);

  const handleApproveReject = (blogId, status) => {
    const updatedBlogs = blogData.map((blog) =>
      blog.id === blogId ? { ...blog, status: status } : blog
    );
    setBlogData(updatedBlogs);
  };

  const handleDelete = () => {
    const updatedBlogs = blogData.filter((blog) => blog.id !== blogToDelete);
    setBlogData(updatedBlogs);
    setBlogToDelete(null);
    // Perform delete operation, e.g., API call to delete blog
  };

  const openDialog = (blogId) => {
    setBlogToDelete(blogId);
  };

  const closeDialog = () => {
    setBlogToDelete(null);
  };

  return (
    <div className="max-h-[100vh] w-[100%] p-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold p-4">Blogs</h1>
        <Button className="rounded-full">Create New Blog</Button>
      </div>
      <div className="flex flex-col justify-between gap-20 rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">S.No</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogData.map((blog, index) => (
              <TableRow key={blog.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="font-medium">{blog.title}</TableCell>
                <TableCell>{blog.author}</TableCell>
                <TableCell>
                  {blog.status === "pending" && (
                    <div className="space-x-2">
                      <Button
                        onClick={() => handleApproveReject(blog.id, "approved")}
                        className="bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600"
                      >
                        Approve
                      </Button>
                      <Button
                        onClick={() => handleApproveReject(blog.id, "rejected")}
                        className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600"
                      >
                        Reject
                      </Button>
                    </div>
                  )}
                  {blog.status === "approved" && (
                    <span className="px-2 py-1 rounded bg-green-500 text-white">
                      Approved
                    </span>
                  )}
                  {blog.status === "rejected" && (
                    <span className="px-2 py-1 rounded bg-red-500 text-white">
                      Rejected
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  <div>
                    <Link
                      href={`/edit/${blog.id}`}
                      className="rounded-bl-full rounded-tl-full bg-blue-500 text-white p-3 hover:bg-blue-600 border-r-[0.5px] border-white"
                    >
                      Edit
                    </Link>
                    <Link
                      href={`/view/${blog.id}`}
                      className="p-3 rounded-tr-full rounded-br-full bg-blue-500 text-white hover:bg-blue-600 border-l-[0.5px] border-white"
                    >
                      View
                    </Link>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          onClick={() => openDialog(blog.id)}
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
                          Are you sure you want to delete this blog? This action
                          cannot be undone.
                        </DialogDescription>
                        <DialogFooter>
                          <Button onClick={closeDialog} variant="secondary">
                            Cancel
                          </Button>
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
      </div>
    </div>
  );
};

export default BlogsPage;
