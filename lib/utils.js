import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Error handling utilities
export class AppError extends Error {
  constructor(message, statusCode = 500, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.name = this.constructor.name;
    
    Error.captureStackTrace(this, this.constructor);
  }
}

// API Error handler
export const handleApiError = (error) => {
  console.error('API Error:', error);
  
  if (error instanceof AppError) {
    return {
      success: false,
      error: error.message,
      statusCode: error.statusCode
    };
  }
  
  // Database connection errors
  if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
    return {
      success: false,
      error: 'Database connection failed. Please try again later.',
      statusCode: 503
    };
  }
  
  // JWT errors
  if (error.name === 'JsonWebTokenError') {
    return {
      success: false,
      error: 'Invalid authentication token.',
      statusCode: 401
    };
  }
  
  if (error.name === 'TokenExpiredError') {
    return {
      success: false,
      error: 'Authentication token has expired.',
      statusCode: 401
    };
  }
  
  // MySQL errors
  if (error.code === 'ER_ACCESS_DENIED_ERROR') {
    return {
      success: false,
      error: 'Database access denied.',
      statusCode: 503
    };
  }
  
  if (error.code === 'ER_BAD_DB_ERROR') {
    return {
      success: false,
      error: 'Database not found.',
      statusCode: 503
    };
  }
  
  // Default error
  return {
    success: false,
    error: 'An unexpected error occurred. Please try again.',
    statusCode: 500
  };
};

// Client-side error handler
export const handleClientError = (error, context = '') => {
  console.error(`Client Error ${context}:`, error);
  
  // Network errors
  if (error.name === 'TypeError' && error.message.includes('fetch')) {
    return 'Network error. Please check your connection and try again.';
  }
  
  // API response errors
  if (error && error.status) {
    const status = error.status;
    switch (status) {
      case 400:
        return 'Invalid request. Please check your input.';
      case 401:
        return 'Authentication failed. Please login again.';
      case 403:
        return 'Access denied. You do not have permission.';
      case 404:
        return 'Resource not found.';
      case 429:
        return 'Too many requests. Please wait and try again.';
      case 500:
        return 'Server error. Please try again later.';
      case 503:
        return 'Service unavailable. Please try again later.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  }
  
  // Generic error message
  if (error && error.message) {
    return error.message;
  }

  // Default client error
  return 'Something went wrong. Please try again.';
};

// Validation utilities
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password && password.length >= 6;
};

export const validateUsername = (username) => {
  return username && username.trim().length >= 3;
};

// Safe JSON parsing
export const safeJsonParse = (jsonString, defaultValue = null) => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('JSON parsing error:', error);
    return defaultValue;
  }
};

// Safe localStorage operations
export const safeLocalStorage = {
  getItem: (key, defaultValue = null) => {
    try {
      if (typeof window === 'undefined') return defaultValue;
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error getting localStorage item ${key}:`, error);
      return defaultValue;
    }
  },
  
  setItem: (key, value) => {
    try {
      if (typeof window === 'undefined') return false;
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error setting localStorage item ${key}:`, error);
      return false;
    }
  },
  
  removeItem: (key) => {
    try {
      if (typeof window === 'undefined') return false;
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing localStorage item ${key}:`, error);
      return false;
    }
  }
};

// Retry utility for failed operations
export const retryOperation = async (operation, maxRetries = 3, delay = 1000) => {
  let lastError;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, delay * (i + 1)));
      }
    }
  }
  
  throw lastError;
};

// Debounce utility
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
