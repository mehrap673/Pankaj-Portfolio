import React from "react";
import { Badge } from "@/components/ui/badge";

export const ServicesSection = (): JSX.Element => {
  const services = [
    {
      name: "Project Management",
      isActive: true,
    },
    {
      name: "Accounting",
      isActive: false,
    },
    {
      name: "Human Resources",
      isActive: false,
    },
    {
      name: "CRM",
      isActive: false,
    },
    {
      name: "Construction Management",
      isActive: false,
    },
  ];

  return (
    <div className="flex flex-wrap w-full items-center justify-center gap-2 relative">
      {services.map((service, index) => (
        <Badge
          key={index}
          variant="outline"
          className={`h-8 px-4 py-2 rounded-[32px] cursor-pointer transition-all ${
            service.isActive
              ? "bg-[linear-gradient(90deg,rgba(229,156,255,0.36)_0%,rgba(186,156,255,0.36)_50%,rgba(156,178,255,0.36)_100%)] border-transparent"
              : "border-[#ffffff4c] bg-transparent hover:bg-white/5"
          }`}
        >
          <span
            className={`[font-family:'Manrope',Helvetica] font-medium text-sm tracking-[0.14px] leading-5 whitespace-nowrap ${
              service.isActive
                ? "bg-[linear-gradient(90deg,rgba(229,156,255,1)_0%,rgba(186,156,255,1)_50%,rgba(156,178,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]"
                : "text-white"
            }`}
          >
            {service.name}
          </span>
        </Badge>
      ))}
    </div>
  );
};
