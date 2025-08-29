import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

// Import Lucide React icons
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
} from "lucide-react";

const SignupPage = () => {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="flex justify-center p-4 mt-10">
      <div className="w-full max-w-md">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium">Step {step} of 3</span>
            <span className="text-sm">{Math.round((step / 3) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-600 dark:bg-white rounded-full h-2 overflow-hidden">
            <div
              className="h-2 bg-violet-500 dark:bg-violet-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Signup Card */}
        <div className="signin-card rounded-lg border border-gray-400/60 dark:border-gray-600/80 backdrop-blur-md p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
              <User size={24} />
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Create Account
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {step === 1 && "Enter your basic information"}
              {step === 2 && "Set up your credentials"}
              {step === 3 && "Upload your profile image"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Step 1 */}
            {step === 1 && (
              <div className="signin-step space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-medium block text-gray-700 dark:text-gray-300"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <Input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      className="signin-input border border-gray-400/60 dark:border-gray-600"
                    />
                    {fullName && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
                        <Check size={16} />
                      </div>
                    )}
                  </div>
                </div>
                <Button
                  type="button"
                  onClick={handleNext}
                  disabled={!fullName}
                  className="w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step <ArrowRight size={16} />
                </Button>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="signin-step space-y-4">
                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium block text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={16} />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full pl-9 pr-10 py-2 border border-gray-400/60 dark:border-gray-600"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium block text-gray-700 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock size={16} />
                    </div>
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a password"
                      className="w-full pl-9 pr-10 py-2 border border-gray-400/60 dark:border-gray-600"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={handleNext}
                  disabled={!email || !password}
                  className="w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step <ArrowRight size={16} />
                </Button>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="signin-step space-y-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Profile Image
                </label>
                <Input
                  type="file"
                  className="w-full border border-gray-400/60 dark:border-gray-600"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-black dark:border-white border-t-transparent"></div>
                      Creating account...
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </div>
            )}
          </form>

          {/* Back Button */}
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-4 w-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-sm font-medium flex items-center justify-center gap-2"
            >
              <ArrowLeft size={16} /> Back to previous step
            </button>
          )}

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-gray-900 dark:text-gray-100 font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          .signin-input:focus {
            box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
          }
          .dark .signin-input:focus {
            box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
          }
          .signin-card {
            animation: fadeIn 0.3s ease-out;
          }
          .signin-step {
            animation: slideIn 0.3s ease-out;
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default SignupPage;
