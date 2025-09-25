import React from "react";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex flex-col items-center gap-8 w-full">
      <h1 className="flex items-center justify-center w-full max-w-[324px] [font-family:'Manrope',Helvetica] font-semibold text-[#eaeaea] text-[32px] text-center tracking-[-0.32px] leading-[normal]">
        You have questions? We have answers!
      </h1>

      <div className="flex items-center justify-center w-full max-w-[268px] [font-family:'Manrope',Helvetica] font-normal text-transparent text-sm text-center tracking-[0] leading-[14px]">
        <span className="text-[#efedfdb2]">
          If you don&apos;t find the answer you need, you can{" "}
        </span>

        <span className="font-extrabold text-[#1da1f2]">
          contact us directly
        </span>

        <span className="text-[#efedfdb2]">, or fill out our </span>

        <span className="font-extrabold text-[#1da1f2]">query form.</span>
      </div>
    </header>
  );
};
