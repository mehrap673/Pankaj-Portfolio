import React from "react";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { FeatureSection } from "./sections/FeatureSection";
import { FooterSection } from "./sections/FooterSection";
import { GallerySection } from "./sections/GallerySection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const ElementLandingPage = (): JSX.Element => {
  return (
    <div className="relative w-full min-h-screen bg-[#000002] overflow-hidden">
      <img
        className="absolute top-[calc(50.00%_-_1501px)] left-[calc(50.00%_-_195px)] w-[390px] h-[1010px]"
        alt="Bg"
        src="/figmaAssets/bg2.png"
      />

      <div className="absolute top-[calc(50.00%_-_4382px)] left-[calc(50.00%_-_424px)] w-[849px] h-[534px]">
        <img
          className="absolute top-0 left-[calc(50.00%_-_195px)] w-[390px] h-[534px]"
          alt="Group"
          src="/figmaAssets/group-47274.png"
        />

        <img
          className="absolute top-[234px] left-[calc(50.00%_-_195px)] w-[390px] h-44"
          alt="Ellipse"
          src="/figmaAssets/ellipse-75.png"
        />
      </div>

      <img
        className="absolute top-[7323px] left-[calc(50.00%_-_195px)] w-[390px] h-[446px]"
        alt="Group"
        src="/figmaAssets/group-38616.png"
      />

      <img
        className="absolute top-[4994px] left-[calc(50.00%_-_195px)] w-[390px] h-[860px]"
        alt="Background image"
        src="/figmaAssets/background-image.png"
      />

      <div className="absolute top-[7396px] left-[calc(50.00%_-_850px)] w-[3356px] h-[1694px]">
        <img
          className="absolute top-[-71px] left-[655px] w-[390px] h-[1835px]"
          alt="Ellipse"
          src="/figmaAssets/ellipse-8.png"
        />

        <img
          className="absolute top-[213px] left-[calc(50.00%_-_961px)] w-[258px] h-[654px]"
          alt="Box game"
          src="/figmaAssets/box-game.png"
        />

        <img
          className="absolute top-[-2808px] left-[-901px] w-[947px] h-[890px]"
          alt="Group"
          src="/figmaAssets/group-38620.png"
        />
      </div>

      <img
        className="absolute top-[1690px] left-[calc(50.00%_-_195px)] w-[390px] h-[1356px]"
        alt="Frame"
        src="/figmaAssets/frame-38621.png"
      />

      <div className="absolute top-[929px] left-[calc(50.00%_-_796px)] w-[1593px] h-[661px]">
        <img
          className="absolute top-px left-[calc(50.00%_-_195px)] w-[390px] h-[661px]"
          alt="Image"
          src="/figmaAssets/image.png"
        />

        <div className="absolute top-px left-[calc(50.00%_-_796px)] w-[1593px] h-[655px] rounded-[400px_400px_200px_200px] [background:radial-gradient(50%_50%_at_51%_31%,rgba(255,255,255,0)_6%,rgba(86,86,86,1)_37%,rgba(0,0,2,1)_78%)]" />
      </div>

      <div className="flex flex-col w-[390px] items-center gap-2 absolute top-0 left-0">
        <div className="flex items-center justify-between px-6 py-7 relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="relative w-[115.18px] h-11"
            alt="Group"
            src="/figmaAssets/group.png"
          />

          <div className="inline-flex h-12 items-center gap-7 relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-[110px] p-6 relative self-stretch flex-[0_0_auto] bg-[#eaeaea0d] rounded-[56px] border-[none] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[56px] before:[background:linear-gradient(142deg,rgba(75,95,162,1)_29%,rgba(16,16,16,0)_74%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
              <img
                className="relative w-[22px] h-[22px] mt-[-11.00px] mb-[-11.00px]"
                alt="Menu icons UIA"
                src="/figmaAssets/menu-icons-uia.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full relative">
        <HeaderSection />

        <HeroSection />

        <NavigationSection />

        <div className="flex w-[342px] h-[34px] items-center justify-between mx-auto my-4">
          <img
            className="relative w-[75px] h-6 object-cover"
            alt="Image"
            src="/figmaAssets/image-11.png"
          />

          <img
            className="relative w-[63.85px] h-[18.36px]"
            alt="Layer"
            src="/figmaAssets/layer1.png"
          />

          <img
            className="relative w-[90.14px] h-[11.3px]"
            alt="Layer"
            src="/figmaAssets/layer-x0020-1.png"
          />

          <img
            className="relative w-[37.69px] h-[15.54px]"
            alt="Group"
            src="/figmaAssets/group-47277.png"
          />
        </div>

        <AboutSection />

        <div className="flex items-center justify-center w-[336px] h-[88px] mx-auto [font-family:'Manrope',Helvetica] font-semibold text-[#eaeaea] text-[32px] text-center tracking-[-0.32px] leading-[normal]">
          Discover top-viewed software solutions
        </div>

        <ServicesSection />

        <div className="inline-flex items-center gap-2 mx-auto my-4">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#19a6ff] text-[13px] text-center tracking-[0] leading-[25px] whitespace-nowrap">
            See all software solutions
          </div>

          <img
            className="relative w-5 h-5"
            alt="Arrow back"
            src="/figmaAssets/arrow-back.svg"
          />
        </div>

        <div className="w-[456px] h-px bg-[linear-gradient(90deg,rgba(243,238,255,0.12)_0%,rgba(243,238,255,0)_100%)] mx-auto" />

        <MainContentSection />

        <TestimonialsSection />

        <div className="flex w-[390px] items-center justify-between mx-auto my-4">
          <img
            className="relative w-6 h-6"
            alt="Arrow back ios"
            src="/figmaAssets/arrow-back-ios.svg"
          />

          <img
            className="relative w-6 h-6"
            alt="Arrow forward ios"
            src="/figmaAssets/arrow-forward-ios.svg"
          />
        </div>

        <div className="flex w-[140px] h-5 items-center justify-center gap-[312px] mx-auto my-4">
          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <div className="relative w-2.5 h-2.5 bg-[#ffffffb2] rounded-[5px]" />

            <div className="relative w-2.5 h-2.5 bg-[#70707080] rounded-[5px]" />

            <div className="relative w-2.5 h-2.5 bg-[#70707080] rounded-[5px]" />
          </div>
        </div>

        <FeatureSection />

        <GallerySection />

        <ContactSection />

        <FooterSection />
      </div>

      <img
        className="absolute top-0 left-0 w-[390px] h-[760px] pointer-events-none"
        alt="Group"
        src="/figmaAssets/group-38622.png"
      />
    </div>
  );
};
