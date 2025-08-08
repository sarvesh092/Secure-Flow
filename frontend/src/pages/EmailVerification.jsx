import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { verifyEmail } from "../store/action/auth-action";
import toast from "react-hot-toast";

const CODE_LENGTH = 6;
const RESEND_INTERVAL = 15;

const EmailVerification = () => {
  const [code, setCode] = useState(Array(CODE_LENGTH).fill(""));
  const [timer, setTimer] = useState(RESEND_INTERVAL);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Countdown timer effect
  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(timerId);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const updatedCode = [...code];

    if (value.length > 1) {
      const pasted = value.slice(0, CODE_LENGTH).split("");
      for (let i = 0; i < CODE_LENGTH; i++) {
        updatedCode[i] = pasted[i] || "";
      }
      setCode(updatedCode);
      const nextIndex = updatedCode.findIndex((digit) => digit === "");
      inputRefs.current[
        nextIndex === -1 ? CODE_LENGTH - 1 : nextIndex
      ]?.focus();
    } else {
      updatedCode[index] = value;
      setCode(updatedCode);
      if (value && index < CODE_LENGTH - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    setIsLoading(true);

    try {
      await dispatch(verifyEmail({ code: verificationCode }));
      navigate("/");
      setIsLoading(false);
      toast.success("Email verified successfully");
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      toast.error(err.message || "Verification failed");
    }
  };

  const handleResend = async () => {
    try {
      // await resendOtp();
      setTimer(RESEND_INTERVAL);
      toast.success("OTP resent successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to resend OTP");
    }
  };

  return (
    <div className="max-w-md w-full mx-auto bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-sky-400 to-cyan-500 text-transparent bg-clip-text">
          Verify Your Email
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Enter the 6-digit code sent to your email address.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-between">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                pattern="\d*"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-2xl font-bold bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none"
              />
            ))}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoading || code.some((digit) => !digit)}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-blue-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-colors duration-200"
          >
            {isLoading ? "Verifying..." : "Verify Email"}
          </motion.button>

          {/* Resend OTP Section */}
          <div className="text-center mt-4">
            {timer > 0 ? (
              <p className="text-gray-400 text-sm">
                Resend code in <span className="font-semibold">{timer}s</span>
              </p>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="text-sm font-medium text-cyan-400 hover:underline"
              >
                Resend Code
              </button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default EmailVerification;
