"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { handleClientError, validateUsername, validatePassword, safeLocalStorage } from "@/lib/utils";

export default function LoginPopup({ isOpen, onClose, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const trimmedUsername = username.trim();
    
    // Client-side validation
    if (!trimmedUsername || !password.trim()) {
      setError("Please enter both username and password");
      return;
    }

    if (!validateUsername(trimmedUsername)) {
      setError("Username must be at least 3 characters long");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
      const res = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: trimmedUsername, password }),
      });
      
      if (!res.ok) {
        // Try to get a JSON error message from the server, otherwise use status text
        const errorData = await res.json().catch(() => ({}));
        const errorMessage = errorData?.error || res.statusText || `Request failed with status ${res.status}`;
        const apiError = new Error(errorMessage);
        apiError.status = res.status;
        throw apiError;
      }

      const data = await res.json();

      if (data.success) {
        // Store token and user data using safe localStorage operations
        if (data.user) {
          safeLocalStorage.setItem('user', data.user);
        }
        if (data.token) {
          safeLocalStorage.setItem('token', data.token);
        }

        onLogin(data.user);
        setUsername("");
        setPassword("");
        onClose();
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (error) {
      const errorMessage = handleClientError(error, 'Login');
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
<Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="
          sm:max-w-md rounded-2xl p-8 shadow-2xl border transition-all duration-300 
          bg-[rgb(var(--bg-color)/1)]
          border-[rgb(var(--border-color)/0.3)]
          shadow-[0_0_25px_rgb(var(--shadow-color)/0.15)]
        "
        aria-describedby="login-dialog-description"
      >
        <DialogHeader>
          <DialogTitle className="text-[rgb(var(--text-color)/1)] text-2xl font-bold">
            Member Login
          </DialogTitle>
          <DialogDescription id="login-dialog-description" className="text-[rgb(var(--text-color)/0.7)]">
            Enter your credentials to continue.
          </DialogDescription>
          <DialogClose asChild>
            <Button
              variant="ghost"
              className="absolute top-3 right-3 text-[rgb(var(--accent-color)/0.8)] hover:text-[rgb(var(--text-color)/1)] transition"
            >
              ✕
            </Button>
          </DialogClose>
        </DialogHeader>

        <form onSubmit={handleLogin} className="mt-4 space-y-4">
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="
              bg-[rgb(var(--bg-color)/0.5)] 
              border border-[rgb(var(--border-color)/0.2)] 
              text-[rgb(var(--text-color)/1)] 
              placeholder-[rgb(var(--accent-color)/0.4)] 
              focus:ring-2 focus:ring-[rgb(var(--accent-color)/0.8)] 
              focus:border-[rgb(var(--accent-color)/0.8)]
            "
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              bg-[rgb(var(--bg-color)/0.5)] 
              border border-[rgb(var(--border-color)/0.2)] 
              text-[rgb(var(--text-color)/1)] 
              placeholder-[rgb(var(--accent-color)/0.4)] 
              focus:ring-2 focus:ring-[rgb(var(--accent-color)/0.8)] 
              focus:border-[rgb(var(--accent-color)/0.8)]
            "
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button
            type="submit"
            disabled={isLoading}
            className="
              w-full py-3 
              bg-[rgb(var(--accent-color)/1)]
              hover:bg-[rgb(var(--accent-color)/0.8)]
              text-[rgb(var(--text-color)/1)]
              font-bold rounded-lg 
              transition-all shadow-lg 
              hover:shadow-[0_0_15px_rgb(var(--shadow-color)/0.4)]
            "
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>

  );
}
