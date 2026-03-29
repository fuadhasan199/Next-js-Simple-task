import React from 'react';

const loading = () => {
    return (
        <div>
             
     
 <div className="min-h-screen flex items-center justify-center `bg-gradient-to-br` from-green-50 via-white to-green-100">

```
  <div className="flex flex-col items-center gap-6">
    
    {/* Animated Circle */}
    <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>

    {/* Text */}
    <h2 className="text-lg font-semibold text-gray-700">
      Loading, please wait...
    </h2>

    {/* Sub text */}
    <p className="text-sm text-gray-500">
      Preparing your smart farming insights 🌱
    </p>

  </div>

</div>







        </div>
    );
};

export default loading;