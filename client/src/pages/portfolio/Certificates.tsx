import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AwardIcon, ExternalLinkIcon, CalendarIcon, VerifiedIcon } from "lucide-react";

export const Certificates = (): JSX.Element => {
  const certificatesData = [
    {
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      issueDate: "January 2024",
      expiryDate: "January 2027",
      credentialId: "AWS-SAP-2024-001234",
      image: "/figmaAssets/group-336.png",
      verificationUrl: "https://aws.amazon.com/verify/cert123",
      skills: ["Cloud Architecture", "AWS Services", "DevOps", "Security"],
      status: "Active"
    },
    {
      title: "Google Professional Cloud Developer",
      issuer: "Google Cloud",
      issueDate: "November 2023",
      expiryDate: "November 2025",
      credentialId: "GCP-PCD-2023-567890",
      image: "/figmaAssets/group-38609.png",
      verificationUrl: "https://google.com/verify/cert456",
      skills: ["GCP", "Kubernetes", "Docker", "CI/CD"],
      status: "Active"
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      issueDate: "September 2023",
      expiryDate: "September 2025",
      credentialId: "MS-AZ204-2023-111222",
      image: "/figmaAssets/ipad-mockup-1.png",
      verificationUrl: "https://microsoft.com/verify/cert789",
      skills: ["Azure", "C#", "ASP.NET", "Cloud Computing"],
      status: "Active"
    },
    {
      title: "Kubernetes Certified Application Developer",
      issuer: "Cloud Native Computing Foundation",
      issueDate: "July 2023",
      expiryDate: "July 2025",
      credentialId: "CKAD-2023-333444",
      image: "/figmaAssets/frame-38621.png",
      verificationUrl: "https://cncf.io/verify/cert012",
      skills: ["Kubernetes", "Container Orchestration", "YAML", "Helm"],
      status: "Active"
    },
    {
      title: "MongoDB Certified Developer Associate",
      issuer: "MongoDB Inc.",
      issueDate: "May 2023",
      expiryDate: "May 2025",
      credentialId: "MDB-DEV-2023-555666",
      image: "/figmaAssets/group-47274.png",
      verificationUrl: "https://mongodb.com/verify/cert345",
      skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation"],
      status: "Active"
    },
    {
      title: "Certified ScrumMaster (CSM)",
      issuer: "Scrum Alliance",
      issueDate: "March 2023",
      expiryDate: "March 2025",
      credentialId: "CSM-2023-777888",
      image: "/figmaAssets/background-image.png",
      verificationUrl: "https://scrumalliance.org/verify/cert678",
      skills: ["Agile", "Scrum", "Project Management", "Team Leadership"],
      status: "Active"
    }
  ];

  const handleVerify = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certificates" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certificates & Credentials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications that validate my expertise across various technologies and methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert, index) => (
            <Card key={index} className="group bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 flex items-center justify-center rounded-t-lg overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover rounded transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="absolute top-4 right-4">
                  <Badge className={`${cert.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'} text-white`}>
                    {cert.status}
                  </Badge>
                </div>

                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <AwardIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {cert.issuer}
                </p>

                <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span>Expires: {cert.expiryDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <VerifiedIcon className="w-4 h-4" />
                    <span className="text-xs font-mono">{cert.credentialId}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.slice(0, 3).map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {cert.skills.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{cert.skills.length - 3} more
                    </Badge>
                  )}
                </div>

                <Button
                  onClick={() => handleVerify(cert.verificationUrl)}
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors"
                >
                  <ExternalLinkIcon className="w-4 h-4 mr-2" />
                  Verify Certificate
                </Button>
              </CardContent>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/30 rounded-lg transition-all duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">12+</div>
              <div className="text-gray-600 dark:text-gray-300">Active Certifications</div>
            </div>
            <div className="p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300">Verification Rate</div>
            </div>
            <div className="p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">5</div>
              <div className="text-gray-600 dark:text-gray-300">Technology Areas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};