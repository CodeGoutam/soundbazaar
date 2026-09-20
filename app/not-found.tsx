import React from "react";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="rounded-md bg-white p-8 shadow-md">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">404</h1>
        <p className="text-lg text-gray-600">Page Not Found</p>
      </div>
    </div>
  );
}
