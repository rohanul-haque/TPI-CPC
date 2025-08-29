import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";

const ForgotPasswordPage = () => {
  const [step, setStep] = useState(1);

  // ✅ use 6 digits since text says "6-digit code"
  const [code, setCode] = useState(new Array(6).fill(""));
  const [focusedIndex, setFocusedIndex] = useState(0);
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(Number(element.value)) || element.value === " ") {
      return;
    }
    const newCode = [...code];
    newCode[index] = element.value;
    setCode(newCode);

    if (element.value && index < code.length - 1) {
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = inputRefs.current[index - 1];
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pasteData)) return;

    const newCode = new Array(6).fill("");
    for (let i = 0; i < pasteData.length; i++) {
      newCode[i] = pasteData[i];
    }
    setCode(newCode);

    const lastFullInput = Math.min(pasteData.length - 1, 5);
    if (lastFullInput >= 0) {
      const targetInput = inputRefs.current[lastFullInput];
      if (targetInput) {
        targetInput.focus();
      }
    }
  };

  useEffect(() => {
    const firstInput = inputRefs.current[0];
    if (firstInput) {
      firstInput.focus();
    }
  }, []);

  return (
    <section className="flex justify-center p-4 mt-10">
      <form className="w-full max-w-md mx-auto space-y-6 p-6 rounded-xl border border-gray-300 dark:border-gray-700 backdrop-blur-md shadow-lg">
        {/* Step 1: Email */}
        {step === 1 && (
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-center">
              🔑 Reset Password
            </h1>
            <p className="text-sm text-muted-foreground text-center">
              Enter your email to receive a verification code
            </p>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>
            <Button className="w-full" type="button" onClick={() => setStep(2)}>
              Send Verification Code
            </Button>
          </div>
        )}

        {/* Step 2: OTP Verification */}
        {step === 2 && (
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-center">
              📩 Verify Code
            </h1>
            <p className="text-sm text-muted-foreground text-center">
              Enter the 6-digit code sent to your email
            </p>
            <div className="flex items-center justify-center font-sans p-4">
              <div className="relative z-10">
                <div
                  className="flex justify-center gap-2 sm:gap-3 mb-8"
                  onPaste={handlePaste}
                >
                  {code.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      placeholder="•"
                      onChange={(e) => handleChange(e.target, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onFocus={(e) => {
                        e.target.select();
                        setFocusedIndex(index);
                      }}
                      onBlur={() => setFocusedIndex(-1)}
                      aria-label={`Digit ${index + 1}`}
                      className={`w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-semibold bg-gray-50 dark:bg-[#0D1117] text-gray-900 dark:text-white rounded-lg outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600
                        ${
                          focusedIndex === index
                            ? "border-2 border-blue-500"
                            : "border border-dashed border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
                        }`}
                    />
                  ))}
                </div>
                <p className="text-gray-500 text-sm">
                  Didn&apos;t receive a code?{" "}
                  <button
                    type="button"
                    className="text-blue-600 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-400 font-semibold focus:outline-none focus:underline"
                  >
                    Resend code
                  </button>
                </p>
              </div>
            </div>
            <Button
              className="w-full mt-4"
              type="button"
              onClick={() => setStep(3)}
            >
              Verify & Continue
            </Button>
          </div>
        )}

        {/* Step 3: New Password */}
        {step === 3 && (
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-center">
              🔒 Create New Password
            </h1>
            <p className="text-sm text-muted-foreground text-center">
              Choose a strong password for your account
            </p>
            <div className="grid gap-2">
              <label htmlFor="new-password" className="text-sm font-medium">
                New Password
              </label>
              <Input
                id="new-password"
                type="password"
                placeholder="Enter new password"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="confirm-password" className="text-sm font-medium">
                Confirm Password
              </label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Re-enter new password"
              />
            </div>
            <Button className="w-full" type="submit">
              Reset Password
            </Button>
          </div>
        )}
      </form>
    </section>
  );
};

export default ForgotPasswordPage;
