'use client';

import { useFormState } from 'react-dom';

async function submitForm(prevState: any, formData: FormData) {
  // Add your email service integration here
  return {
    message: 'Thank you for your message! We will get back to you soon.',
  };
}

export default function ContactPage() {
  const [state, formAction] = useFormState(submitForm, null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Contact Us</h1>
        <form action={formAction} className="max-w-xl space-y-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
          {state?.message && (
            <p className="text-green-600 dark:text-green-400 mt-4">{state.message}</p>
          )}
        </form>
      </main>
    </div>
  );
}