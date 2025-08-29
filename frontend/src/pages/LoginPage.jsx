import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const togglePassword = () => setPasswordVisible(!passwordVisible);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex justify-center p-4 mt-10">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-md rounded-lg border border-gray-400/60 dark:border-gray-600/80 backdrop-blur-md p-6">
        {/* Header */}
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email and password to login
          </p>
        </div>

        {/* Form Card */}
        <div className="signin-card">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="grid gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium block text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={"border border-gray-400/60 dark:border-gray-600"}
              />
            </div>

            {/* Password */}
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                {" "}
                <label
                  htmlFor="password"
                  className="text-sm font-medium block text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <Link
                  className="text-sm font-medium block underline"
                  to={"/forgot-password"}
                >
                  Forgot your password
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={"border border-gray-400/60 dark:border-gray-600"}
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
                >
                  {passwordVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          {/* Link to Signup */}
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-5">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="hover:underline underline-offset-4 hover:text-primary text-white"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          .signin-card {
            animation: fadeIn 0.3s ease-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

export default LoginPage;
