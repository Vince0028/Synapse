import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Lightbulb, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SuggestWebsiteProps {
    className?: string;
}

export function SuggestWebsite({ className }: SuggestWebsiteProps) {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        websiteName: "",
        websiteUrl: "",
        description: "",
        senderEmail: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Call our serverless function which proxies to Brevo
            const response = await fetch("/api/send-suggestion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    websiteName: formData.websiteName,
                    websiteUrl: formData.websiteUrl,
                    description: formData.description || "No description provided",
                    senderEmail: formData.senderEmail,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus("success");
                setFormData({ websiteName: "", websiteUrl: "", description: "", senderEmail: "" });
                setTimeout(() => {
                    setOpen(false);
                    setSubmitStatus("idle");
                }, 2000);
            } else {
                throw new Error("Failed to send");
            }
        } catch (error) {
            console.error("Error sending suggestion:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className={cn(
                        "w-full justify-start gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border-purple-500/20 text-foreground",
                        className
                    )}
                >
                    <Lightbulb className="h-4 w-4 text-yellow-500" />
                    <span>Suggest a Website</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-yellow-500" />
                        Suggest a Website
                    </DialogTitle>
                    <DialogDescription>
                        Know a great tool or resource? Share it with us and we'll consider adding it to Synapse!
                    </DialogDescription>
                </DialogHeader>

                {submitStatus === "success" ? (
                    <div className="flex flex-col items-center justify-center py-8 gap-4">
                        <CheckCircle className="h-16 w-16 text-green-500" />
                        <p className="text-lg font-medium text-green-600">Thank you!</p>
                        <p className="text-sm text-muted-foreground text-center">
                            Your suggestion has been sent. We'll review it soon!
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div className="space-y-2">
                            <Label htmlFor="websiteName">Website Name *</Label>
                            <Input
                                id="websiteName"
                                name="websiteName"
                                placeholder="e.g., Awesome Tool"
                                value={formData.websiteName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="websiteUrl">Website URL *</Label>
                            <Input
                                id="websiteUrl"
                                name="websiteUrl"
                                type="url"
                                placeholder="https://example.com"
                                value={formData.websiteUrl}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                placeholder="What does this tool do? Why should we add it?"
                                value={formData.description}
                                onChange={handleChange}
                                rows={3}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="senderEmail">Your Email *</Label>
                            <Input
                                id="senderEmail"
                                name="senderEmail"
                                type="email"
                                placeholder="your@email.com"
                                value={formData.senderEmail}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {submitStatus === "error" && (
                            <div className="flex items-center gap-2 p-3 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">
                                <AlertCircle className="h-4 w-4" />
                                <span className="text-sm">Failed to send. Please try again.</span>
                            </div>
                        )}

                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="mr-2 h-4 w-4" />
                                    Send Suggestion
                                </>
                            )}
                        </Button>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}
