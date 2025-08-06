import { Check, X } from "lucide-react";

const PasswordStrengthChecker = ({ password }) => {
  const condition = [
    {
      condition: password.length >= 8,
      message: "At least 8 characters",
    },
    {
      condition: password.match(/[a-z]/),
      message: "At least one lowercase letter",
    },
    {
      condition: password.match(/[A-Z]/),
      message: "At least one uppercase letter",
    },
    {
      condition: password.match(/[0-9]/),
      message: "At least one number",
    },
    {
      condition: password.match(/[^a-zA-Z0-9]/),
      message: "At least one special character",
    },
  ];

  const handleStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) {
      strength++;
    }
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
      strength++;
    }
    if (password.match(/[0-9]/)) {
      strength++;
    }
    if (password.match(/[^a-zA-Z0-9]/)) {
      strength++;
    }
    return strength;
  };

  const passwordStrength = handleStrength(password);

  const getStrengthtext = (passwordStrength) => {
    if (passwordStrength === 4) {
      return "Strong";
    }
    if (passwordStrength === 3) {
      return "Good";
    }
    if (passwordStrength === 2) {
      return "Fair";
    }
    if (passwordStrength === 1) {
      return "Weak";
    }
  };
  const getStrengthColor = (passwordStrength) => {
    if (passwordStrength === 3) return "bg-lime-500";
    if (passwordStrength === 2) return "bg-yellow-600";
    if (passwordStrength === 1) return "bg-red-500";
    return "bg-green-500";
  };

  return (
    <div className="mt-2">
      <div className="mb-1 flex items-center justify-between">
        <h2 className="text-xs text-gray-400">Password Strength</h2>
        <span className="text-xs text-gray-400">
          {getStrengthtext(passwordStrength)}
        </span>
      </div>
      <div className="flex space-x-1">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1/4 rounded-full transition-colors duration-300 ${
              index < passwordStrength
                ? getStrengthColor(passwordStrength)
                : "bg-gray-500"
            }`}
          />
        ))}
      </div>

      <div className="mt-2">
        {condition.map((item) => (
          <div key={item.label} className="flex items-center text-xs">
            {item.condition ? (
              <Check className="size-4 text-green-500 mr-2" />
            ) : (
              <X className="size-4 text-gray-500 mr-2" />
            )}
            <span
              className={item.condition ? "text-green-500" : "text-red-400"}
            >
              {item.message}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PasswordStrengthChecker;
