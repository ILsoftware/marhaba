import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-gray-900 flex items-center justify-center p-8 overflow-hidden">
      <div className="relative text-center space-y-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.1)_0%,_transparent_70%)] animate-pulse"></div>
        <h1 className="relative text-7xl md:text-9xl font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
          eHealth
          <span className="block text-5xl md:text-7xl mt-2 text-white/90">
            Somalia
          </span>
        </h1>
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
    </div>
  );
}
