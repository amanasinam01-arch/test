'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Modal from './ui/modal';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    setMessage('');
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setMessage('Welcome email sent! Check your inbox.');
        setIsSuccess(true);
        setEmail('');
        // Auto close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setMessage('');
          setIsSuccess(false);
        }, 2000);
      } else {
        setMessage(result.message || 'Something went wrong. Please try again.');
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Join Our Waitlist">
      <div className="text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">🔔</span>
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4">
          Get Early Access
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 mb-8">
          Be among the first to experience our AI-powered legal assistant for construction professionals.
        </p>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 px-4 pr-12 rounded-full bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-gray-400"
              placeholder="Enter your email address"
              required
              disabled={isLoading}
            />
            <button 
              type="submit"
              disabled={isLoading || !email}
              className="absolute right-1 top-1 bottom-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 rounded-full transition-all duration-200 flex items-center gap-1"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span className="text-sm">Join</span>
                  <ChevronRight size={16} />
                </>
              )}
            </button>
          </div>
          
          {/* Message display */}
          {message && (
            <div className={`p-3 rounded-lg text-sm ${
              isSuccess 
                ? 'bg-green-900/30 text-green-300 border border-green-500/30' 
                : 'bg-red-900/30 text-red-300 border border-red-500/30'
            }`}>
              {message}
            </div>
          )}
          
          {/* Benefits */}
          <div className="text-left space-y-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Early access to our platform</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Discounted pricing for life</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Priority support from our team</span>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
