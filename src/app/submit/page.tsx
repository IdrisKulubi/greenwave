"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Leaf, ArrowLeft, Upload } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SubmitArticlePage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate submission delay
    setTimeout(() => {
      setSubmitting(false);
      // Show success message or redirect
      router.push("/submit/success");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 py-12">
          <Button 
            variant="ghost" 
            className="mb-8 text-slate-600 hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400"
            onClick={() => router.back()}
          >
            <ArrowLeft size={16} className="mr-2" /> Back
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="max-w-3xl mx-auto mb-10 text-center">
              <Leaf className="h-12 w-12 mx-auto mb-4 text-emerald-600 dark:text-emerald-400" />
              <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                Submit Your Article
              </h1>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Share your insights on sustainability and environmental topics. Selected articles will be transformed into immersive audio podcasts for our listeners.
              </p>
            </div>

            <Card className="max-w-3xl mx-auto border-emerald-100 dark:border-emerald-900/50">
              <CardHeader>
                <CardTitle>Article Submission Form</CardTitle>
                <CardDescription>
                  Fill in the details below to submit your article for consideration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Article Title</Label>
                    <Input 
                      id="title" 
                      placeholder="Enter a compelling title for your article" 
                      required 
                      className="focus-visible:ring-emerald-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Full name" 
                        required 
                        className="focus-visible:ring-emerald-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="email@example.com" 
                        required 
                        className="focus-visible:ring-emerald-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="climate">Climate</SelectItem>
                        <SelectItem value="energy">Energy</SelectItem>
                        <SelectItem value="conservation">Conservation</SelectItem>
                        <SelectItem value="pollution">Pollution</SelectItem>
                        <SelectItem value="biodiversity">Biodiversity</SelectItem>
                        <SelectItem value="sustainability">Sustainability</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="summary">Article Summary</Label>
                    <Textarea 
                      id="summary" 
                      placeholder="Provide a brief summary of your article (150-200 words)" 
                      required 
                      className="min-h-[100px] focus-visible:ring-emerald-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="file">Upload Article (PDF, DOC, or DOCX)</Label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md border-slate-300 dark:border-slate-700">
                      <div className="space-y-2 text-center">
                        <Upload className="mx-auto h-12 w-12 text-slate-400" strokeWidth={1} />
                        <div className="flex text-sm text-slate-600 dark:text-slate-400">
                          <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300 focus-within:outline-none">
                            <span>Upload a file</span>
                            <input 
                              id="file-upload" 
                              name="file-upload" 
                              type="file" 
                              className="sr-only" 
                              accept=".pdf,.doc,.docx"
                              onChange={(e) => e.target.files && setFile(e.target.files[0])}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-500">
                          PDF, DOC, or DOCX up to 10MB
                        </p>
                        {file && (
                          <p className="text-sm text-emerald-600 dark:text-emerald-400">
                            Selected: {file.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
                <Button 
                  onClick={handleSubmit}
                  className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit Article"}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 