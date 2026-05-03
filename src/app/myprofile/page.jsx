'use client'

import { authClient } from '@/lib/auth-client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';

export default function MyProfile() {
  const [user, setUser] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await authClient.getSession();
      setUser(data?.user);

      setName(data?.user?.name || "");
      setImage(data?.user?.image || "");
    };

    fetchUser();
  }, []);

  if (!user) {
    return <p className="p-5 text-center">Loading...</p>;
  }

  const handleSave = () => {
    // frontend state update (demo purpose)
    setUser({
      ...user,
      name,
      image,
    });

    setIsEdit(false);

    // ⚠️ Real project এ এখানে backend update API call করতে হবে
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-yellow-100 p-5">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">

        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          {user.image ? (
            <Image
              src={user.image}
              alt="profile"
              width={100}
              height={100}
              className="rounded-full border-4 border-orange-400 object-cover"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
             <FaUser />
            </div>
          )}
        </div>

        {/* VIEW MODE */}
        {!isEdit && (
          <>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>

            <button
              onClick={() => setIsEdit(true)}
              className="mt-5 w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500"
            >
              Edit Profile
            </button>
          </>
        )}

        {/* EDIT MODE */}
        {isEdit && (
          <div className="space-y-3 text-left mt-4">

            <div>
              <label className="text-sm font-semibold">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Image URL</label>
              <input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={handleSave}
                className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600"
              >
                Save
              </button>

              <button
                onClick={() => setIsEdit(false)}
                className="flex-1 bg-gray-400 text-white py-2 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}