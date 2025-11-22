"use client";

import { useState, useEffect } from "react";
import { History, Loader2, Mail, X } from "lucide-react";

interface Email {
  _id: string;
  targetContext: string;
  subject: string;
  body: string;
  ideas?: string[];
  tone?: string;
  createdAt: string;
}

interface EmailHistoryProps {
  userId: string;
  onSelectEmail: (email: Email) => void;
}

export default function EmailHistory({ userId, onSelectEmail }: EmailHistoryProps) {
  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchEmails();
  }, [userId]);

  const fetchEmails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/email/history?userId=${userId}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch emails");
      }

      setEmails(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
        <div className="flex items-center justify-center">
          <Loader2 className="w-6 h-6 animate-spin text-yellow-600" />
          <span className="ml-2 text-gray-600 font-primary">Loading history...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 rounded-lg p-4 border border-red-200">
        <p className="text-red-600 font-primary">{error}</p>
      </div>
    );
  }

  if (emails.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 text-center">
        <History className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 font-primary">No email history yet. Generate your first email!</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900 font-primary flex items-center gap-2">
          <Mail className="w-6 h-6" />
          Email History
        </h2>
        <span className="text-sm text-gray-500 font-primary">{emails.length} emails</span>
      </div>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {emails.map((email) => (
          <div
            key={email._id}
            onClick={() => onSelectEmail(email)}
            className="p-4 bg-white rounded-lg border border-gray-200 hover:border-yellow-500 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-gray-900 font-primary line-clamp-1">
                {email.subject}
              </h3>
              <span className="text-xs text-gray-500 font-primary whitespace-nowrap ml-2">
                {formatDate(email.createdAt)}
              </span>
            </div>
            <p className="text-sm text-gray-600 font-primary line-clamp-2 mb-2">
              {email.targetContext.substring(0, 100)}...
            </p>
            {email.tone && (
              <span className="inline-block px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded font-primary">
                {email.tone}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

