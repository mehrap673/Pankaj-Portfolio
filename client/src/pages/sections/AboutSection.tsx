import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const companyData = [
  {
    id: 1,
    name: "TechNinja",
    rating: "5.0",
    location: "Keszthely, Hungary",
    employees: "15-30 employees",
    avgProject: "Avg project $750",
    completedProjects: "24 completed projects",
    badges: ["Great Communication", "Quick Delivery"],
    starIcon: "/figmaAssets/star-rate.svg",
    exportIcon: "/figmaAssets/vuesax-linear-export.svg",
  },
  {
    id: 2,
    name: "TechNinja",
    rating: "5.0",
    location: "Keszthely, Hungary",
    employees: "15-30 employees",
    avgProject: "Avg project $750",
    completedProjects: "24 completed projects",
    badges: ["Great Communication", "Quick Delivery"],
    starIcon: "/figmaAssets/star-rate-1.svg",
    exportIcon: "/figmaAssets/vuesax-linear-export.svg",
  },
  {
    id: 3,
    name: "TechNinja",
    rating: "5.0",
    location: "Keszthely, Hungary",
    employees: "15-30 employees",
    avgProject: "Avg project $750",
    completedProjects: "24 completed projects",
    badges: ["Great Communication", "Quick Delivery"],
    starIcon: "/figmaAssets/star-rate-1.svg",
    exportIcon: "/figmaAssets/vuesax-linear-export-1.svg",
  },
];

const infoItems = [
  {
    icon: "/figmaAssets/vuesax-linear-location.svg",
    key: "location",
  },
  {
    icon: "/figmaAssets/vuesax-linear-profile-2user.svg",
    key: "employees",
  },
  {
    icon: "/figmaAssets/vuesax-linear-dollar-square.svg",
    key: "avgProject",
  },
  {
    icon: "/figmaAssets/checkmark.svg",
    key: "completedProjects",
  },
];

export const AboutSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-6 relative">
      {companyData.map((company) => (
        <Card
          key={company.id}
          className="w-full bg-[#ffffff05] rounded-[20px] border-[none] backdrop-blur-[37.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(37.5px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[20px] before:[background:linear-gradient(142deg,rgba(64,64,64,1)_15%,rgba(16,16,16,0)_63%,rgba(64,64,64,0.25)_98%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
        >
          <CardContent className="flex flex-col items-start gap-6 p-6">
            <header className="w-full">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-[43px]">
                  <div className="w-8 h-8 bg-[#d9d9d9] rounded-md relative">
                    <div className="absolute top-[3px] left-1 h-[26px] flex items-center justify-center [font-family:'Suisse_Int'l-Bold',Helvetica] font-bold text-black text-xs text-center tracking-[0.12px] leading-[12.8px]">
                      LO
                      <br />
                      GO
                    </div>
                  </div>
                  <h3 className="[font-family:'Manrope',Helvetica] font-semibold text-white text-lg tracking-[0] leading-[25px] whitespace-nowrap">
                    {company.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1">
                  <img
                    className="w-5 h-5"
                    alt="Star rate"
                    src={company.starIcon}
                  />
                  <span className="[font-family:'Manrope',Helvetica] font-normal text-[#eaeaeab2] text-sm tracking-[0.14px] leading-[normal]">
                    {company.rating}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-1.5">
                {company.badges.map((badgeText, index) => (
                  <Badge
                    key={index}
                    className="h-6 bg-[#c5f2d31a] rounded-md px-2 py-1 [font-family:'Manrope',Helvetica] font-medium text-[#1dffbf] text-xs tracking-[-0.12px] leading-[18px] hover:bg-[#c5f2d31a]"
                  >
                    {badgeText}
                  </Badge>
                ))}
              </div>
            </header>

            <div className="flex flex-col items-start justify-center gap-3 w-full">
              {infoItems.map((item, index) => (
                <div key={index} className="flex items-center gap-1.5">
                  <img className="w-4 h-4" alt="Info icon" src={item.icon} />
                  <span className="[font-family:'Manrope',Helvetica] font-medium text-[#d6d6d6] text-[13px] tracking-[0] leading-[18px] whitespace-nowrap">
                    {company[item.key as keyof typeof company]}
                  </span>
                </div>
              ))}
            </div>

            <Button className="w-full h-auto flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-[10px] bg-[linear-gradient(90deg,rgba(229,156,255,0.36)_0%,rgba(186,156,255,0.36)_50%,rgba(156,178,255,0.36)_100%)] hover:bg-[linear-gradient(90deg,rgba(229,156,255,0.36)_0%,rgba(186,156,255,0.36)_50%,rgba(156,178,255,0.36)_100%)]">
              <span className="bg-[linear-gradient(90deg,rgba(229,156,255,1)_0%,rgba(186,156,255,1)_50%,rgba(156,178,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Manrope',Helvetica] font-medium text-transparent text-[13px] tracking-[0] leading-[normal]">
                See more
              </span>
              <img
                className="w-4 h-4"
                alt="Export icon"
                src={company.exportIcon}
              />
            </Button>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
