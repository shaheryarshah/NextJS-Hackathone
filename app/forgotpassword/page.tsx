import Head from 'next/head';

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Create Password</title>
      </Head>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Create a New Password</h2>
        <p className="text-sm text-center text-gray-500">
          Password length minimum required 8 characters.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Enter Your Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-pink-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              required
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-pink-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-green-500 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
          >
            Confirm
          </button>
          <p className="text-sm text-center text-gray-500">
            <a href="#" className="text-pink-500 hover:underline">
              Forgot your password?
            </a>
          </p>
          <p className="text-sm text-center text-gray-500">
            Don&apos;t have an account?{' '}
            <a href="/signup" className="text-pink-500 hover:underline">
              Create an account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
