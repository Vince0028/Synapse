export function VantaBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      
      {/* Subtle lava lamp blobs - much lower opacity */}
      <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-purple-300 to-violet-400 dark:from-purple-700 dark:to-violet-800 rounded-full filter blur-[100px] opacity-30 dark:opacity-20 animate-lava-1" />
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-pink-300 to-purple-400 dark:from-pink-700 dark:to-purple-800 rounded-full filter blur-[100px] opacity-25 dark:opacity-15 animate-lava-2" />
      <div className="absolute -bottom-40 left-1/4 w-[550px] h-[550px] bg-gradient-to-br from-indigo-300 to-purple-400 dark:from-indigo-700 dark:to-purple-800 rounded-full filter blur-[100px] opacity-25 dark:opacity-15 animate-lava-3" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-violet-300 to-fuchsia-400 dark:from-violet-700 dark:to-fuchsia-800 rounded-full filter blur-[100px] opacity-20 dark:opacity-10 animate-lava-4" />
    </div>
  );
}
