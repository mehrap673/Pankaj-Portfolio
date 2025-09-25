import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";

export const FeatureSection = (): JSX.Element => {
  const tabItems = [
    { value: "general", label: "General questions", active: true },
    { value: "reviews", label: "Reviews and publications", active: false },
    { value: "partners", label: "For Partners", active: false },
    { value: "clients", label: "For Clients", active: false },
  ];

  const faqItems = [
    {
      id: "item-1",
      question: "What is The GlobalITMarketplace?",
      answer:
        "The Global IT Marketplace is a database of some of the very best in Global IT & SaaS talent. It is a plce to compare your options and find software and provisioners (we like to call them partners!) that are right for your business. It's our mission to save you time, money & effort by giving you access to software providers that meet your budget, timeline and scope.",
      expanded: true,
    },
    {
      id: "item-2",
      question:
        "What makes GlobalITMarketplace different from other comparison platforms?",
      answer: "",
      expanded: false,
    },
    {
      id: "item-3",
      question: "How can I sign up as a partner?",
      answer: "",
      expanded: false,
    },
    {
      id: "item-4",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "",
      expanded: false,
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[342px] items-start gap-2.5 p-8 relative bg-[#eaeaea0d] rounded-[28px] border-[none] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[28px] before:[background:linear-gradient(142deg,rgba(75,95,162,1)_29%,rgba(16,16,16,0)_74%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <div className="flex flex-col items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <Tabs defaultValue="general" className="w-full">
            <div className="flex flex-wrap items-start gap-[12px_16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-wrap w-[184px] items-start gap-[16px_16px] relative">
                {tabItems.map((tab) => (
                  <Button
                    key={tab.value}
                    variant="ghost"
                    className={`relative flex items-center justify-center w-fit h-auto p-0 ${
                      tab.active
                        ? "[font-family:'Manrope',Helvetica] font-bold text-[#efedfd] text-base tracking-[0] leading-6 whitespace-nowrap"
                        : "[font-family:'Manrope',Helvetica] font-normal text-[#efedfd66] text-base tracking-[0] leading-6 whitespace-nowrap"
                    } hover:bg-transparent`}
                  >
                    {tab.label}
                  </Button>
                ))}
              </div>
            </div>

            <TabsContent value="general" className="mt-8">
              <div className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                    <img
                      className="relative w-6 h-6"
                      alt="Vuesax linear"
                      src="/figmaAssets/vuesax-linear-category.svg"
                    />

                    <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#eaeaea] text-xl tracking-[-0.44px] leading-[34px] whitespace-nowrap">
                      Top General Questions
                    </h2>
                  </div>

                  <Accordion
                    type="single"
                    collapsible
                    defaultValue="item-1"
                    className="w-full"
                  >
                    {faqItems.map((item) => (
                      <AccordionItem
                        key={item.id}
                        value={item.id}
                        className="border-b [border-bottom-style:solid] border-transparent [border-image:linear-gradient(90deg,rgba(234,234,234,0.5)_0%,rgba(132,132,132,0.1)_63%)_1]"
                      >
                        <AccordionTrigger className="flex items-center gap-3 pt-0 pb-6 px-0 relative self-stretch w-full flex-[0_0_auto] hover:no-underline [&[data-state=open]]:pt-0 [&[data-state=closed]]:pt-8">
                          <div className="relative flex-1 [font-family:'Manrope',Helvetica] font-bold text-[#eaeaea] text-[15px] tracking-[-0.33px] leading-[normal] text-left">
                            {item.question}
                          </div>
                        </AccordionTrigger>
                        {item.answer && (
                          <AccordionContent className="pb-6">
                            <div className="relative flex items-center justify-center self-stretch font-body-small font-[number:var(--body-small-font-weight)] text-[#efedfdb2] text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                              {item.answer}
                            </div>
                          </AccordionContent>
                        )}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div className="relative flex items-center justify-center self-stretch [font-family:'Manrope',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[21px]">
                  <span className="text-[#efedfdb2]">
                    See all frequently asked questions{" "}
                  </span>

                  <Button
                    variant="link"
                    className="font-bold text-[#1da1f2] p-0 h-auto"
                  >
                    here
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
