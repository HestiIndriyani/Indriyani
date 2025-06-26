// src/pages/home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">Biodata Saya</h1>
        <div className="space-y-2 text-gray-800">
          <p><span className="font-semibold">Nama:</span> Hesti Indriyani</p>
          <p><span className="font-semibold">Tanggal Lahir:</span> 10 Desember 2004</p>
          <p><span className="font-semibold">Alamat:</span> Depok</p>
        </div>
      </div>
    </div>
  );
}