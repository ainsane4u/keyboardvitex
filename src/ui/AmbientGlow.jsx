import React from 'react';

export function AmbientGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-white/[0.03] rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/[0.02] rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-white/[0.015] rounded-full blur-[100px] mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay" />
    </div>
  );
}
