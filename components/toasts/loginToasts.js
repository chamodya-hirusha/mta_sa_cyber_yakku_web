import { toast } from "sonner";

export const showLoginSuccess = () => {
  toast.success("Login successful! Welcome back 🎉", {
    duration: 4000,
    style: {
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      color: '#ffffff',
      border: '1px solid rgba(16, 185, 129, 0.3)',
      boxShadow: '0 10px 40px rgba(16, 185, 129, 0.3)',
    },
  });
};

export const showPasswordSetupWarning = () => {
  toast.warning(
    <div className="flex flex-col gap-3">
      <div className="flex items-start gap-3">
        <div>
          <p className="font-semibold text-base mb-2">Password Setup Required</p>
          <p className="text-sm opacity-90">
            Please go to the game and set your password using:
          </p>
          <code className="block mt-2 p-2 bg-black/20 rounded text-xs">
            /Register [username] [password] [confirm password]
          </code>
        </div>
      </div>
      <button
        onClick={() => toast.dismiss()}
        className="self-end px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm border border-white/30"
      >
        Got it!
      </button>
    </div>,
    {
      duration: Infinity,
      style: {
        background: 'linear-gradient(135deg, #f50b0bff 0%, #b606d9ff 100%)',
        color: '#ffffff',
        border: '1px solid rgba(245, 158, 11, 0.3)',
        boxShadow: '0 10px 40px rgba(245, 158, 11, 0.3)',
        padding: '16px',
        minWidth: '400px',
      },
    }
  );
};

export const showLoginError = (message) => {
  toast.error(
    <div className="flex items-center gap-3">
      <span className="text-2xl">❌</span>
      <div>
        <p className="font-semibold">Login Failed</p>
        <p className="text-sm opacity-90 mt-1">{message}</p>
      </div>
    </div>,
    {
      duration: 5000,
      style: {
        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
        color: '#ffffff',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        boxShadow: '0 10px 40px rgba(239, 68, 68, 0.3)',
      },
    }
  );
};