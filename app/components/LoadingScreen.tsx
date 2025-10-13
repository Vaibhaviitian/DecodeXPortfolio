export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-purple-500/30 rounded-full animate-spin border-t-purple-500"></div>
        <div className="absolute inset-0 w-20 h-20 border-4 border-blue-500/30 rounded-full animate-ping"></div>
      </div>
      <div className="ml-4 text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
        Loading...
      </div>
    </div>
  )
}
