"use client";
import { useState } from "react";
import profile from "../../assets/profile.png";
import { Button } from "@/components/ui/button"; // Adjust the path if necessary
import { Input } from "@/components/ui/input"; // Adjust the path if necessary
import Image from "next/image";

const ProfileAdmin = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    email: "user@example.com",
    username: "username123",
    college: "Sample College",
    course: "Software Engineering",
    branch: "Computer Science",
    profileImage: profile,
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileData({ ...profileData, profileImage: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profileData);
    setIsEditing(false);
    // Implement the save logic here, for example, sending the updated profile to the backend
  };

  return (
    <div>
      <h1 className="p-4 text-lg font-semibold">User Information</h1>
      <div className="p-4 flex flex-col justify-between gap-20">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <div className="flex items-center justify-between">
              <div className="w-[50em] space-y-8">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-lg font-medium text-black"
                  >
                    Username
                  </label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    value={profileData.username}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full border-[1px] border-black text-[#797979]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-black700"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={profileData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full border-[1px] border-black text-[#797979]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={profileData.profileImage}
                  alt="Profile Image"
                  width={180}
                  height={180}
                  className="w-[12em] h-[12em] rounded-full border-[4px] border-[#4E73DF]"
                />
                {isEditing && (
                  <div className="mt-4 ">
                    <Input
                    className="w-[18em]"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="college" className="text-lg font-medium text-black">
              College
            </label>
            <Input
              id="college"
              name="college"
              type="text"
              value={profileData.college}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1 block w-full border-[1px] border-black text-[#797979]"
            />
          </div>
          <div className="flex gap-5 w-full justify-between">
            <div className="w-full">
              <label
                htmlFor="course"
                className="block text-lg font-medium text-black"
              >
                Course
              </label>
              <Input
                id="course"
                name="course"
                type="text"
                value={profileData.course}
                onChange={handleChange}
                disabled={!isEditing}
                className="mt-1 block w-full border-[1px] border-black text-[#797979]"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="branch"
                className="block text-lg font-medium text-black"
              >
                Branch
              </label>
              <Input
                id="branch"
                name="branch"
                type="text"
                value={profileData.branch}
                onChange={handleChange}
                disabled={!isEditing}
                className="mt-1 block w-full border-[1px] border-black text-[#797979]"
              />
            </div>
          </div>
        </form>
        <div className="flex items-center space-x-4 mb-6">
          <Button
            onClick={handleEdit}
            className="bg-[#4E73DF] rounded-full text-lg p-6 hover:bg-[#2e59da]"
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </Button>
          {isEditing && (
            <Button
              onClick={handleSubmit}
              className="bg-[#4E73DF] rounded-full text-lg p-6 hover:bg-[#2e59da]"
            >
              Save
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileAdmin;
