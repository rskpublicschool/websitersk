export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 bg-white rounded-full animate-pulse shadow-lg" />
          <div className="absolute inset-0 flex items-center justify-center p-2">
            <img 
              src="/logo RSK best shcool in dehri rohtas.png" 
              alt="RSK Public School Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>

        {/* Loading Text */}
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}

