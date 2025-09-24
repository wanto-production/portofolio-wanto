'use client';

import { useActionState } from 'react';
import { sendEmailAction } from '@/app/contact/action';

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendEmailAction, undefined)

  return (
    <form action={formAction} className="space-y-4 sm:space-y-6">
      {/* Name & Email Row - Stack on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 sm:px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 sm:px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
            placeholder="your@email.com"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-3 sm:px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
          placeholder="Project discussion, collaboration, etc."
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-3 sm:px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-sm sm:text-base"
          placeholder="Tell me about your project, ideas, or just say hello..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={pending}
          className={`w-full px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-white transition-all duration-300 text-sm sm:text-base
                      ${pending
              ? 'bg-gray-600 cursor-not-allowed'
              : state?.success
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:scale-105'
            }`}
        >
          {pending ? (
            <div className="flex items-center justify-center gap-2 animate-pulse">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="4" stroke="currentColor" strokeDasharray="31.4" strokeDashoffset="0"></circle>
              </svg>
              Sending...
            </div>
          ) : state?.success ? (
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Message Sent!
            </div>
          ) : (
            'Send Message'
          )}
        </button>
      </div>

      {state?.success ? (
        <div className="p-3 sm:p-4 bg-green-600/20 border border-green-600/50 rounded-lg text-green-400 text-xs sm:text-sm">
          Thanks for reaching out! I'll get back to you soon.
        </div>
      ) : state?.error && (
        <div className="p-3 sm:p-4 bg-red-600/20 border border-red-600/50 rounded-lg text-red-400 text-xs sm:text-sm">
          {state.error}
        </div>
      )}
    </form>);
}
