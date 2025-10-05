import React, { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

export const ModernContact = (): JSX.Element => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (!form.current) {
        throw new Error('Form reference is null');
      }

      const result = await emailjs.sendForm(
        'service_r1m5amt',
        'template_dhgiega',
        form.current,
        { publicKey: 'rEKvRon_ZbNQEJ5ql' }
      );
      
      console.log('EmailJS Success:', result);
      setFormData({ name: '', email: '', project: '' });
      alert('✅ Thank you for your message! I\'ll get back to you soon.');
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      alert('❌ Failed to send message. Please try contacting me directly via email or WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/pankaj-mehra-250810279",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/mehrap673",
      label: "GitHub",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/Ipankajmehra",
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:mehrap673@gmail.com",
      label: "Email",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Contact Card */}
        <Card className="glass-card hover:glass-dark transition-all duration-500 animate-fade-up bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl">
          <CardContent className="p-8 lg:p-12 bg-gradient-to-br from-purple-900/10 via-cyan-700/15 to-purple-800/20 rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Section - Headers and Contact Info */}
              <div className="space-y-8">
                {/* Section Header */}
                <div className="animate-fade-up">
                  <Badge variant="secondary" className="glass-card mb-4 px-4 py-2 bg-white/20 backdrop-blur border border-white/30">
                    Get In Touch
                  </Badge>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    Let's Create Something
                    <span className="block bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                      Amazing Together
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    Have a project in mind or want to discuss opportunities? 
                    I'm always excited to collaborate on innovative ideas.
                  </p>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-full glass-card hover:glass-dark flex items-center justify-center transition-all duration-300 hover:scale-110 bg-white/10 backdrop-blur border border-white/20 ${social.color}`}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Section - Contact Form */}
              <div className="lg:pl-8 my-auto">
                <div className="top-8">
                  <h3 className="text-2xl font-semibold mb-6">Write me your project</h3>
                  
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Write your name"
                        className="glass-card border-0 bg-white/10 backdrop-blur focus:bg-white/20 transition-colors border border-white/20 rounded-lg"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Insert your email"
                        className="glass-card border-0 bg-white/10 backdrop-blur focus:bg-white/20 transition-colors border border-white/20 rounded-lg"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="project" className="block text-sm font-medium mb-2">
                        Project *
                      </label>
                      <Textarea
                        id="project"
                        name="project"
                        required
                        value={formData.project}
                        onChange={handleInputChange}
                        placeholder="Write your project"
                        rows={6}
                        className="glass-card border-0 bg-white/10 backdrop-blur focus:bg-white/20 transition-colors resize-none border border-white/20 rounded-lg"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
