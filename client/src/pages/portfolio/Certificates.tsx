import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar, CheckCircle, Eye, X, Medal } from "lucide-react";
import certificatesData from "../../data/certificates";

interface Certificate {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate: string;
  credentialId: string;
  image: string;
  verificationUrl: string;
  skills: string[];
  status: string;
  type: "certificate" | "badge";
}

// Separate component for each certificate card with its own hook
const CertificateCard = ({ 
  cert, 
  index, 
  openModal,
  isVisible
}: { 
  cert: Certificate; 
  index: number; 
  openModal: (cert: Certificate) => void;
  isVisible: boolean;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleVerify = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Card
      ref={ref}
      className={`group bg-gray-800/90 dark:bg-gray-900/90 backdrop-blur-sm border-gray-700/50 dark:border-gray-600/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]
        ${isInView && isVisible ? "animate-fade-up" : "opacity-0"}`}
      style={{ 
        animationDelay: `${index * 100}ms`,
        transition: 'opacity 0.5s ease, transform 0.5s ease'
      }}
    >
      <div className="relative">
        <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-4 flex items-center justify-center rounded-t-lg overflow-hidden">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover rounded transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="absolute top-3 lg:top-5 sm:top-4 lg:right-5 right-3 sm:right-4">
          <Badge
            className={`${
              cert.status === "Active" ? "bg-green-500" : "bg-yellow-500"
            } text-white text-xs sm:text-sm`}
          >
            {cert.status}
          </Badge>
        </div>

        <div className="absolute lg:top-5 lg:left-5 top-5 sm:top-4 left-5 sm:left-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full flex items-center justify-center">
            {cert.type === "certificate" ? (
              <Award className="w-5 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
            ) : (
              <Medal className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 dark:text-cyan-400" />
            )}
          </div>
        </div>
      </div>

      <CardContent className="p-4 sm:p-5 md:p-6">
        <h3 className="text-base sm:text-lg font-bold text-white dark:text-gray-100 mb-2 line-clamp-2 leading-tight">
          {cert.title}
        </h3>

        <p className="text-sm sm:text-base text-purple-400 dark:text-purple-300 font-medium mb-3">
          {cert.issuer}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {cert.skills.slice(0, 3).map((skill, idx) => (
            <Badge
              key={idx}
              variant="secondary"
              className="text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30"
            >
              {skill}
            </Badge>
          ))}
          {cert.skills.length > 3 && (
            <Badge
              variant="secondary"
              className="text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30"
            >
              +{cert.skills.length - 3}
            </Badge>
          )}
        </div>

        {cert.type === "certificate" ? (
          <Button
            onClick={() => openModal(cert)}
            variant="outline"
            size="sm"
            className="w-full bg-transparent border-gray-600 text-gray-300 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-white transition-colors text-sm"
          >
            <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            View Certificate
          </Button>
        ) : (
          <Button
            onClick={() => cert.verificationUrl && handleVerify(cert.verificationUrl)}
            variant="outline"
            size="sm"
            className="w-full bg-transparent border-gray-600 text-gray-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-white transition-colors text-sm"
          >
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            View Badge
          </Button>
        )}
      </CardContent>

      <div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/30 rounded-lg transition-all duration-300 pointer-events-none" />
    </Card>
  );
};

export const Certificates = (): JSX.Element => {
  const blobRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  const [displayCount, setDisplayCount] = useState(6);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeTab, setActiveTab] = useState<"certificate" | "badge">("certificate");
  const [isExpanding, setIsExpanding] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;

      blobRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const filteredData = certificatesData.filter((item) => item.type === activeTab);

  // Smooth expansion animation
  useEffect(() => {
    if (showAll && displayCount < filteredData.length) {
      setIsExpanding(true);
      const interval = setInterval(() => {
        setDisplayCount((prev) => {
          const next = Math.min(prev + 3, filteredData.length);
          if (next >= filteredData.length) {
            clearInterval(interval);
            setIsExpanding(false);
          }
          return next;
        });
      }, 150);
      
      return () => clearInterval(interval);
    } else if (!showAll) {
      setDisplayCount(6);
      setIsExpanding(false);
    }
  }, [showAll, filteredData.length]);

  const displayedItems = filteredData.slice(0, displayCount);

  const handleVerify = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openModal = (cert: Certificate): void => {
    setSelectedCert(cert);
  };

  const closeModal = (): void => {
    setSelectedCert(null);
  };

  const handleViewAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
    // Smooth scroll to certificates section
    const section = document.getElementById('certificates');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const certificatesCount = certificatesData.filter((item) => item.type === "certificate").length;
  const badgesCount = certificatesData.filter((item) => item.type === "badge").length;

  return (
    <>
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .hero-blob {
          background: linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2));
          border-radius: 50%;
          filter: blur(80px);
          position: absolute;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 0.6s ease forwards;
        }

        @keyframes slideDown {
          from {
            max-height: 0;
            opacity: 0;
          }
          to {
            max-height: 1000px;
            opacity: 1;
          }
        }
      `}</style>

      <section
        id="certificates"
        className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black dark:from-black dark:via-gray-950 dark:to-slate-950"
      >
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="hero-blob animate-blob w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 top-10 left-10 sm:top-20 sm:left-20" />
          <div
            className="hero-blob animate-blob w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bottom-10 right-10 sm:bottom-20 sm:right-20"
            style={{ animationDelay: "5s" }}
          />
          <div
            className="hero-blob animate-blob w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ animationDelay: "10s" }}
          />

          <div
            ref={blobRef}
            className="hidden lg:block w-32 h-32 xl:w-40 xl:h-40 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-3xl transition-transform duration-300 ease-out"
            style={{ position: "absolute", top: "50%", left: "50%" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 sm:mb-4">
              Certificates & Badges
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 dark:text-gray-400 max-w-2xl mx-auto px-4">
              Professional certifications and badges that validate my expertise across various
              technologies.
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="inline-flex bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full p-1 sm:p-1.5">
              <button
                onClick={() => {
                  setActiveTab("certificate");
                  setShowAll(false);
                }}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                  activeTab === "certificate"
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/50"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Certificates</span>
                <Badge className="bg-white/20 text-white text-xs">{certificatesCount}</Badge>
              </button>
              <button
                onClick={() => {
                  setActiveTab("badge");
                  setShowAll(false);
                }}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                  activeTab === "badge"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <Medal className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Badges</span>
                <Badge className="bg-white/20 text-white text-xs">{badgesCount}</Badge>
              </button>
            </div>
          </div>

          {/* Grid with smooth transition */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-500"
            style={{ 
              minHeight: isExpanding ? `${Math.ceil(displayCount / 3) * 400}px` : 'auto'
            }}
          >
            {displayedItems.map((cert, index) => (
              <CertificateCard
                key={`${cert.credentialId}-${index}`}
                cert={cert}
                index={index}
                openModal={openModal}
                isVisible={index < displayCount}
              />
            ))}
          </div>

          {/* View All / Show Less Buttons */}
          {!showAll && filteredData.length > 6 && (
            <div className="text-center mt-8 sm:mt-12">
              <Button
                onClick={handleViewAll}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                View All {activeTab === "certificate" ? "Certificates" : "Badges"} ({filteredData.length})
              </Button>
            </div>
          )}

          {showAll && displayCount >= filteredData.length && (
            <div className="text-center mt-8 sm:mt-12">
              <Button
                onClick={handleShowLess}
                variant="outline"
                className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 text-sm sm:text-base transition-all duration-300"
              >
                Show Less
              </Button>
            </div>
          )}

          {/* Loading indicator when expanding */}
          {isExpanding && (
            <div className="text-center mt-6">
              <div className="inline-flex items-center gap-2 text-purple-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          )}
        </div>

        {/* Certificate Modal */}
        {selectedCert && selectedCert.type === "certificate" && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-up">
            <div className="bg-gray-900 dark:bg-gray-950 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gray-700">
              <div className="flex justify-between items-start p-4 sm:p-6 border-b border-gray-700 dark:border-gray-600">
                <div className="flex-1 pr-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-gray-100 leading-tight">
                    {selectedCert.title}
                  </h3>
                  <p className="text-sm sm:text-base text-purple-400 dark:text-purple-300 font-medium mt-1 sm:mt-2">
                    {selectedCert.issuer}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-800 dark:hover:bg-gray-900 rounded-full transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 dark:text-gray-500" />
                </button>
              </div>

              <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto">
                <div className="mb-4 sm:mb-6">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-400 dark:text-gray-500">
                        Issued: {selectedCert.issueDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <Badge
                        className={`${
                          selectedCert.status === "Active" ? "bg-green-500" : "bg-yellow-500"
                        } text-white text-xs`}
                      >
                        {selectedCert.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {selectedCert.verificationUrl && (
                <div className="p-4 sm:p-6 border-t border-gray-700 dark:border-gray-600">
                  <Button
                    onClick={() => handleVerify(selectedCert.verificationUrl)}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm sm:text-base"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verify Certificate
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
};
