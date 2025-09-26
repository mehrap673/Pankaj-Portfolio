import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MailIcon, LinkedinIcon, GithubIcon, TwitterIcon, SendIcon, MapPinIcon, CalendarIcon } from "lucide-react";

export const ModernContact = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: <LinkedinIcon className="w-5 h-5" />,
      href: "https://linkedin.com/in/johnportfolio",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: <GithubIcon className="w-5 h-5" />,
      href: "https://github.com/johnportfolio",
      label: "GitHub",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      icon: <TwitterIcon className="w-5 h-5" />,
      href: "https://twitter.com/johnportfolio",
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    {
      icon: <MailIcon className="w-5 h-5" />,
      href: "mailto:john@johnportfolio.dev",
      label: "Email",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="space-section space-container">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge variant="secondary" className="glass-card mb-4 px-4 py-2">
            Get In Touch
          </Badge>
          <h2 className="text-heading-2 mb-6">
            Let's Create Something
            <span className="block bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'm always excited to collaborate on innovative ideas.
          </p>
        </div>

        {/* Main Contact Card */}
        <Card className="glass-card hover:glass-dark transition-all duration-500 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <CardContent className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-heading-5 mb-6">Let's Talk</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                        <MailIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">Email</div>
                        <a 
                          href="mailto:john@johnportfolio.dev" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          john@johnportfolio.dev
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                        <MapPinIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">Location</div>
                        <div className="text-muted-foreground">San Francisco, CA</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                        <CalendarIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">Response Time</div>
                        <div className="text-muted-foreground">Usually within 24 hours</div>
                      </div>
                    </div>
                  </div>
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
                        className={`w-12 h-12 rounded-full glass-card hover:glass-dark flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="font-medium text-green-700 dark:text-green-400">Available for new projects</div>
                      <div className="text-sm text-green-600 dark:text-green-300">Open to full-time and freelance opportunities</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-heading-6 mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      placeholder="Your full name"
                      className="glass-card border-0 bg-surface-muted/50 focus:bg-surface-elevated/50 transition-colors"
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
                      placeholder="your.email@example.com"
                      className="glass-card border-0 bg-surface-muted/50 focus:bg-surface-elevated/50 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                      className="glass-card border-0 bg-surface-muted/50 focus:bg-surface-elevated/50 transition-colors resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-magnetic animate-magnetic"
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
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <Card className="glass-card hover:glass-dark transition-all duration-300 cursor-pointer group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <CalendarIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Schedule a Call</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Book a 30-minute discovery call to discuss your project
              </p>
              <Button variant="outline" className="glass-card animate-magnetic">
                Book Now
              </Button>
            </CardContent>
          </Card>
          
          <Card className="glass-card hover:glass-dark transition-all duration-300 cursor-pointer group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MailIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Download Resume</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Get a detailed overview of my experience and skills
              </p>
              <Button variant="outline" className="glass-card animate-magnetic">
                Download PDF
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};