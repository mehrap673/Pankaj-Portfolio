import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, GithubIcon, TwitterIcon, SendIcon } from "lucide-react";

export const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message (in a real app, you'd handle this properly)
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MailIcon className="w-5 h-5" />,
      label: "Email",
      value: "john@johnportfolio.dev",
      href: "mailto:john@johnportfolio.dev"
    },
    {
      icon: <PhoneIcon className="w-5 h-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPinIcon className="w-5 h-5" />,
      label: "Location",
      value: "San Francisco, CA",
      href: "https://maps.google.com/?q=San+Francisco,CA"
    }
  ];

  const socialLinks = [
    {
      icon: <LinkedinIcon className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/johnportfolio",
      color: "hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400"
    },
    {
      icon: <GithubIcon className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/johnportfolio",
      color: "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      icon: <TwitterIcon className="w-5 h-5" />,
      label: "Twitter",
      href: "https://twitter.com/johnportfolio",
      color: "hover:bg-sky-100 dark:hover:bg-sky-900/30 hover:text-sky-600 dark:hover:text-sky-400"
    }
  ];

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {info.label}
                        </div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Connect with Me
                </h3>
                
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-300 ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Badge variant="secondary" className="mb-2">
                    🟢 Available for freelance projects
                  </Badge>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Currently accepting new projects and collaborations. Let's create something amazing together!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me more about your project or idea..."
                    rows={6}
                    className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <SendIcon className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};