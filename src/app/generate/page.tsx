"use client";

import { useState, useEffect, useRef } from "react";
import { Rocket, Copy, Check, Loader2, FileText, User, Sparkles, Upload, X, History } from "lucide-react";
import Navbar from "../components/common/navbar";
import { useAuth } from "@/lib/auth-context";
import EmailHistory from "../components/email-history";

interface EmailResult {
  _id: string;
  subject: string;
  body: string;
  ideas?: string[];
  tone?: string;
}

export default function GeneratePage() {
  const { user, saveResume } = useAuth();
  const [targetContext, setTargetContext] = useState("");
  const [senderResume, setSenderResume] = useState("");
  const [tone, setTone] = useState("Professional");
  const [loading, setLoading] = useState(false);
  const [emailResult, setEmailResult] = useState<EmailResult | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load saved resume when user logs in
  useEffect(() => {
    if (user?.savedResume) {
      setSenderResume(user.savedResume);
    }
  }, [user]);

  const handleGenerate = async () => {
    if (!targetContext.trim() || !senderResume.trim()) {
      setError("Please fill in both fields");
      return;
    }

    setLoading(true);
    setError("");
    setEmailResult(null);

    try {
      const response = await fetch("/api/email/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          targetContext,
          senderResume,
          tone,
          userId: user?._id || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to generate email");
      }

      setEmailResult(data);
      
      // Save resume if user is logged in
      if (user && senderResume.trim()) {
        await saveResume(senderResume);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
      "text/plain",
    ];
    const validExtensions = [".pdf", ".docx", ".doc", ".txt"];
    const fileName = file.name.toLowerCase();

    if (
      !validTypes.includes(file.type) &&
      !validExtensions.some((ext) => fileName.endsWith(ext))
    ) {
      setError("Please upload a PDF, DOCX, DOC, or TXT file");
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError("File size must be less than 10MB");
      return;
    }

    setUploading(true);
    setError("");
    setUploadedFileName(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload/resume", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to upload file");
      }

      setSenderResume(data.text);
      setUploadedFileName(data.fileName);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred while uploading");
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleRemoveFile = () => {
    setSenderResume("");
    setUploadedFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && fileInputRef.current) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      fileInputRef.current.files = dataTransfer.files;
      handleFileUpload({ target: { files: dataTransfer.files } } as any);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 font-primary">
              Generate Your Perfect Email
            </h1>
            {user && (
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <History className="w-5 h-5" />
                <span className="font-primary">History</span>
              </button>
            )}
          </div>
          <p className="text-xl text-gray-600 font-primary max-w-2xl mx-auto">
            Provide your target context and resume to create a personalized email
          </p>
          {user && (
            <p className="text-sm text-gray-500 font-primary mt-2">
              Your resume is saved and will be automatically loaded
            </p>
          )}
        </div>

        {showHistory && user && (
          <div className="mb-8">
            <EmailHistory userId={user._id} onSelectEmail={(email) => {
              setTargetContext(email.targetContext || "");
              setEmailResult({
                _id: email._id,
                subject: email.subject,
                body: email.body,
                ideas: email.ideas,
                tone: email.tone,
              });
              setShowHistory(false);
            }} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Input Form */}
          <div className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-900 font-primary mb-3">
                <FileText className="w-5 h-5 text-yellow-600" />
                Target Context
              </label>
              <p className="text-sm text-gray-500 font-primary mb-2">
                Job Description, client brief, or target company profile
              </p>
              <textarea
                value={targetContext}
                onChange={(e) => setTargetContext(e.target.value)}
                placeholder="Paste the job description, client brief, or company profile here..."
                className="w-full h-64 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 font-primary text-gray-900 resize-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-900 font-primary mb-3">
                <User className="w-5 h-5 text-yellow-600" />
                Your Resume/Profile
              </label>
              <p className="text-sm text-gray-500 font-primary mb-2">
                Upload your resume file or paste your background, skills, and accomplishments
              </p>

              {/* File Upload Area */}
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="mb-4 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-yellow-500 transition-colors cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.docx,.doc,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                {uploading ? (
                  <div className="flex flex-col items-center">
                    <Loader2 className="w-8 h-8 text-yellow-600 animate-spin mb-2" />
                    <p className="text-sm text-gray-600 font-primary">Processing file...</p>
                  </div>
                ) : uploadedFileName ? (
                  <div className="flex items-center justify-between bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-yellow-600" />
                      <span className="text-sm font-primary text-gray-900">{uploadedFileName}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveFile();
                      }}
                      className="text-gray-500 hover:text-red-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 font-primary mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 font-primary">
                      PDF, DOCX, DOC, or TXT (max 10MB)
                    </p>
                  </div>
                )}
              </div>

              {/* Text Area for Manual Input */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-500 font-primary">Or paste manually:</p>
                  {senderResume && (
                    <button
                      onClick={() => {
                        setSenderResume("");
                        setUploadedFileName(null);
                      }}
                      className="text-xs text-gray-500 hover:text-red-600 font-primary"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <textarea
                  value={senderResume}
                  onChange={(e) => {
                    setSenderResume(e.target.value);
                    if (uploadedFileName) {
                      setUploadedFileName(null);
                    }
                  }}
                  placeholder="Paste your resume, CV, or professional profile here..."
                  className="w-full h-64 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 font-primary text-gray-900 resize-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-900 font-primary mb-3">
                Tone
              </label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 font-primary text-gray-900"
              >
                <option value="Professional">Professional</option>
                <option value="Formal">Formal</option>
                <option value="Enthusiastic">Enthusiastic</option>
                <option value="Direct">Direct</option>
                <option value="Friendly">Friendly</option>
              </select>
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-gray-900 font-semibold rounded-lg text-lg font-primary transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Email
                </>
              )}
            </button>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 font-primary">{error}</p>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="space-y-6">
            {emailResult ? (
              <>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 font-primary">Generated Email</h2>
                    <button
                      onClick={() => copyToClipboard(`${emailResult.subject}\n\n${emailResult.body}`)}
                      className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-primary text-green-600">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-gray-600" />
                          <span className="text-sm font-primary text-gray-600">Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 font-primary mb-2">
                        Subject:
                      </label>
                      <div className="p-4 bg-white border border-gray-200 rounded-lg">
                        <p className="text-gray-900 font-primary">{emailResult.subject}</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 font-primary mb-2">
                        Body:
                      </label>
                      <div className="p-4 bg-white border border-gray-200 rounded-lg">
                        <p className="text-gray-900 font-primary whitespace-pre-wrap leading-relaxed">
                          {emailResult.body}
                        </p>
                      </div>
                    </div>

                    {emailResult.ideas && emailResult.ideas.length > 0 && (
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 font-primary mb-2">
                          Additional Ideas:
                        </label>
                        <ul className="list-disc list-inside space-y-2 p-4 bg-white border border-gray-200 rounded-lg">
                          {emailResult.ideas.map((idea, index) => (
                            <li key={index} className="text-gray-900 font-primary">
                              {idea}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-gray-50 rounded-lg p-12 border border-gray-200 flex flex-col items-center justify-center h-full min-h-[400px]">
                <Rocket className="w-16 h-16 text-gray-400 mb-4" />
                <p className="text-gray-500 font-primary text-lg text-center">
                  Fill in the form and click &quot;Generate Email&quot; to create your personalized email
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

