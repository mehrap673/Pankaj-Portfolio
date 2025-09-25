import React from "react";

export const BackgroundPattern = (): JSX.Element => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {/* Main background gradients */}
      <img
        className="absolute top-[calc(50.00%_-_1501px)] left-[calc(50.00%_-_195px)] w-[390px] h-[1010px] opacity-80 dark:opacity-100"
        alt="Background pattern"
        src="/figmaAssets/bg2.png"
      />
      
      {/* Secondary pattern elements */}
      <div className="absolute top-[calc(50.00%_-_4382px)] left-[calc(50.00%_-_424px)] w-[849px] h-[534px]">
        <img
          className="absolute top-0 left-[calc(50.00%_-_195px)] w-[390px] h-[534px] opacity-60 dark:opacity-100"
          alt="Pattern element"
          src="/figmaAssets/group-47274.png"
        />
        <img
          className="absolute top-[234px] left-[calc(50.00%_-_195px)] w-[390px] h-44 opacity-40 dark:opacity-70"
          alt="Ellipse pattern"
          src="/figmaAssets/ellipse-75.png"
        />
      </div>
      
      {/* Additional pattern elements for different sections */}
      <img
        className="absolute top-[2000px] left-[calc(50.00%_-_195px)] w-[390px] h-[446px] opacity-30 dark:opacity-60"
        alt="Pattern accent"
        src="/figmaAssets/group-38616.png"
      />
      
      <img
        className="absolute top-[3000px] left-[calc(50.00%_-_195px)] w-[390px] h-[860px] opacity-20 dark:opacity-50"
        alt="Background texture"
        src="/figmaAssets/background-image.png"
      />
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute top-[500px] left-[calc(50.00%_-_796px)] w-[1593px] h-[655px] rounded-[400px_400px_200px_200px] 
                      bg-gradient-radial from-transparent via-gray-300/20 to-gray-900/30 
                      dark:from-transparent dark:via-gray-600/20 dark:to-[#000002]/60" />
                      
      {/* Light mode overlay to soften the pattern */}
      <div className="absolute inset-0 bg-white/70 dark:bg-transparent transition-colors duration-300" />
    </div>
  );
};