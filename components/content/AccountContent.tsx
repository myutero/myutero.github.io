import React from 'react';

const AccountContent: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Account Settings</h1>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <form className="space-y-8 divide-y divide-gray-200">
          {/* Profile Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
              <p className="mt-1 text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p>
            </div>
            <div className="flex items-center space-x-5">
              <img className="h-20 w-20 rounded-full" src="https://picsum.photos/100/100" alt="User avatar" />
              <button type="button" className="px-4 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                Change avatar
              </button>
            </div>
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="full-name" id="full-name" defaultValue="Alex Hartman" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <input type="email" name="email" id="email" defaultValue="alex.hartman@example.com" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
              </div>
            </div>
          </div>

          {/* Password Section */}
          <div className="pt-8 space-y-6">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Password</h3>
              <p className="mt-1 text-sm text-gray-500">Update your password associated with your account.</p>
            </div>
            <div className="grid grid-cols-1 gap-y-6">
              <div>
                {/* FIX: Corrected typo `cla ssName` to `className`. */}
                <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">Current Password</label>
                <input type="password" name="current-password" id="current-password" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
              </div>
              <div>
                {/* FIX: Corrected typo `cla ssName` to `className`. */}
                <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
                <input type="password" name="new-password" id="new-password" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
              </div>
            </div>
          </div>
          
           {/* Account Deletion Section */}
          <div className="pt-8">
            <div>
              <h3 className="text-lg font-medium leading-6 text-red-700">Delete Account</h3>
              <p className="mt-1 text-sm text-gray-500">Once you delete your account, you will lose all data associated with it. This action cannot be undone.</p>
            </div>
            <div className="mt-4">
               <button type="button" className="px-4 py-2 text-sm font-medium rounded-md border border-red-300 bg-red-50 text-red-700 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                Delete my account
              </button>
            </div>
          </div>


          {/* Submit Button */}
          <div className="pt-5">
            <div className="flex justify-end">
              <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                Cancel
              </button>
              <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AccountContent;