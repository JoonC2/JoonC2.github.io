import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Working on Becoming an Innovator
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            My journey in coding has been inspired by innovation.  
            I made this website using frameworks like React.js and Next.js. 
            
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl">
            Currently : Student <sub className="font-semibold text-base"></sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-3xl">
            Major: Computer Science and Statistics{" "}
            <sub className="font-semibold text-base"></sub>
          </p>
        </ItemLayout>


       

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=anaconda,arduino,bash,cs,cpp,css,firebase,git,github,html,ai,java,js,linux,lua,nextjs,npm,notion,powershell,py,pytorch,r,react,robloxstudio,sklearn,tailwind,threejs,ubuntu,unreal,vim,visualstudio,vscode,`}
            alt="Jonathan Choi"
            loading="lazy"
          />
        </ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;
