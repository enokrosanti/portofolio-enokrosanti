"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Tag from "./components/Tag/tag";
import Experience from "./components/Experience/experience";
import Project from "./components/Project/project";
import Certificate from "./components/Certificate/certificate";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToAbout = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <>
      {/* Header */}
      <section className="flex flex-col items-center gap-20 pt-24 pb-10 px-2 md:px-6 lg:px-36">
        <header className="flex flex-col items-center gap-14">
          <div className="flex flex-col items-center gap-14 sm:w-full md:w-[680px]">
            <div className="relative cursor-pointer">
              <Image src="/assets/images/user/user.jpg" alt="user" width={96} height={96} className="rounded-full object-cover aspect-square border-2 border-primary p-1" />
              <Image src="/assets/icons/Code.png" alt="code" width={32} height={32} className="absolute top-[64px] left-[68px]" />
            </div>
            <div className="flex flex-col gap-5 sm:w-full md:w-[680px]">
              <div className="flex flex-col gap-2">
                <p className="text-xl font-normal text-white text-center w-full sm:w-[90%] md:w-[680px] font-preahvihear">
                  Hello World! I&lsquo;m <span className="text-primary">Enok Rosanti</span> as
                </p>
                <h1 className="font-bold text-lightGrey text-center text-3xl sm:text-4xl md:text-5xl w-full sm:w-[90%] md:w-[680px] font-preahvihear">Frontend Developer</h1>
              </div>
              <p className="text-darkGrey font-normal text-sm text-center w-full sm:w-[90%] md:w-[680px] px-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam laudantium ducimus nihil optio nisi, praesentium velit aliquid at repellendus, explicabo voluptatem illum adipisci delectus impedit?{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Tag link={"https://html.com/"} image={"/assets/images/tags/html.png"} tag={"HTML"} />
            <Tag link={""} image={"/assets/images/tags/css.png"} tag={"CSS"} />
            <Tag link={""} image={"/assets/images/tags/javascript.png"} tag={"JavaScript"} />
            <Tag link={"https://react.dev/"} image={"/assets/images/tags/react.png"} tag={"React"} />
            <Tag link={"https://nextjs.org/"} image={"/assets/images/tags/nextjs.webp"} tag={"NextJS"} />
            <Tag link={"https://tailwindcss.com/"} image={"/assets/images/tags/tailwindcss.png"} tag={"Tailwind CSS"} />
            <Tag link={"https://nodejs.org/en"} image={"/assets/images/tags/nodejs.png"} tag={"NodeJS"} />
          </div>
        </header>
        <button onClick={scrollToAbout} className="hidden lg:block">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27.0612 15.9386C27.201 16.078 27.312 16.2436 27.3877 16.4259C27.4634 16.6082 27.5024 16.8037 27.5024 17.0011C27.5024 17.1986 27.4634 17.394 27.3877 17.5764C27.312 17.7587 27.201 17.9243 27.0612 18.0636L17.0612 28.0636C16.9218 28.2035 16.7563 28.3144 16.5739 28.3901C16.3916 28.4658 16.1961 28.5048 15.9987 28.5048C15.8013 28.5048 15.6058 28.4658 15.4235 28.3901C15.2411 28.3144 15.0756 28.2035 14.9362 28.0636L4.9362 18.0636C4.79667 17.9241 4.68599 17.7585 4.61047 17.5762C4.53496 17.3939 4.49609 17.1985 4.49609 17.0011C4.49609 16.8038 4.53496 16.6084 4.61047 16.4261C4.68599 16.2438 4.79667 16.0782 4.9362 15.9386C5.07573 15.7991 5.24137 15.6884 5.42367 15.6129C5.60598 15.5374 5.80137 15.4985 5.9987 15.4985C6.19602 15.4985 6.39141 15.5374 6.57372 15.6129C6.75602 15.6884 6.92167 15.7991 7.0612 15.9386L15.9999 24.8749L24.9387 15.9349C25.0782 15.7957 25.2439 15.6853 25.4261 15.6102C25.6083 15.535 25.8036 15.4965 26.0007 15.4968C26.1978 15.4972 26.393 15.5364 26.5749 15.6122C26.7569 15.688 26.9221 15.7989 27.0612 15.9386ZM14.9362 18.0636C15.0756 18.2035 15.2411 18.3144 15.4235 18.3901C15.6058 18.4658 15.8013 18.5048 15.9987 18.5048C16.1961 18.5048 16.3916 18.4658 16.5739 18.3901C16.7563 18.3144 16.9218 18.2035 17.0612 18.0636L27.0612 8.06364C27.2007 7.92411 27.3114 7.75846 27.3869 7.57616C27.4624 7.39385 27.5013 7.19846 27.5013 7.00114C27.5013 6.80381 27.4624 6.60842 27.3869 6.42612C27.3114 6.24381 27.2007 6.07817 27.0612 5.93864C26.9217 5.79911 26.756 5.68843 26.5737 5.61291C26.3914 5.5374 26.196 5.49854 25.9987 5.49854C25.8014 5.49854 25.606 5.5374 25.4237 5.61291C25.2414 5.68843 25.0757 5.79911 24.9362 5.93864L15.9999 14.8749L7.0612 5.93864C6.7794 5.65684 6.39721 5.49854 5.9987 5.49854C5.60018 5.49854 5.21799 5.65684 4.9362 5.93864C4.6544 6.22043 4.49609 6.60262 4.49609 7.00114C4.49609 7.39965 4.6544 7.78184 4.9362 8.06364L14.9362 18.0636Z"
              fill="#878EA1"
            />
          </svg>
        </button>
      </section>

      {/* About Me */}
      <section id="about" className="px-6 py-24 lg:px-36 relative">
        <h2 data-aos="fade-up" className="font-preahvihear text-white font-normal text-4xl text-center mb-6">
          About Me
        </h2>
        <div data-aos="fade-up" className="relative bg-custom-radial p-6 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-custom-radial blur-lg rounded-xl -z-10"></div>
          <h4 className="font-preahvihear font-normal text-white text-xl mb-4">
            Im Enok Rosanti, as <span className="text-primary font-normal text-xl">Frontend Developer</span>
          </h4>
          <p className="text-grey font-normal text-base">
            I am a budding Frontend Developer with a fair amount of knowledge in this field. Although still in the early stages, I have already created some simple projects that help me understand and apply basic concepts such as HTML, CSS,
            JavaScript, as well as modern frameworks such as Next.js and Tailwind CSS. I continue to learn and explore new technologies while honing my skills through practical projects. As an evolving developer, I am committed to
            continuously improving my skills and am ready to take on bigger challenges in the future.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-6 py-24 lg:px-36 relative z-30">
        <h2 data-aos="fade-up" className="font-preahvihear text-white font-normal text-4xl text-center mb-6">
          Experience
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Experience
            image={"/assets/images/experience/sawala-tech.png"}
            title={"PT. Sawala Inovasi Indonesia"}
            jobTitle={"Frontend Web Developer - Internship"}
            date={"July - November 2024"}
            description={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quis porro ducimus exercitationem minus praesentium, voluptate aperiam a dolores officiis necessitatibus consectetur quod facere nostrum vitae, aspernatur itaque possimus id cupiditate. Pariatur quod neque at molestias eligendi, repudiandae asperiores repellendus similique explicabo praesentium vel cum, placeat sunt, itaque eveniet! Delectus, cum dignissimos!"
            }
          />
          <Experience
            image={"/assets/images/experience/Esc.png"}
            title={"ESC SMKN 1 Majalengka"}
            jobTitle={"Lead of Documentation"}
            date={"Jan 2024 - Now"}
            description={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quis porro ducimus exercitationem minus praesentium, voluptate aperiam a dolores officiis necessitatibus consectetur quod facere nostrum vitae, aspernatur itaque possimus id cupiditate. Pariatur quod neque at molestias eligendi, repudiandae asperiores repellendus similique explicabo praesentium vel cum, placeat sunt, itaque eveniet! Delectus, cum dignissimos!"
            }
          />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-24 lg:px-36 relative">
        <h2 data-aos="fade-up" className="font-preahvihear text-white font-normal text-4xl text-center mb-6">
          Projects
        </h2>
        <div className="flex flex-col gap-6">
          <Project
            projectName={"Zenlytics - Personal Task"}
            projectImage={"/assets/images/projects/zenlytics.png"}
            description={
              "This app lets users log in and manage tasks with a title, due date, description, and status. As a frontend developer, I designed a simple, responsive interface with an easy login page, task list, and forms for adding or editing tasks, ensuring smooth navigation and user experience."
            }
            link={"https://aplikasi-personal-task.vercel.app/"}
          />
          <Project
            projectName={"Wander - Simple Travel Blog"}
            projectImage={"/assets/images/projects/wander.png"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis magnam voluptate, non error dolores facere iste aperiam numquam ducimus. Debitis ad ipsum suscipit deserunt esse sed voluptatum totam eveniet laudantium?"
            }
            link={"https://sawala-blog.vercel.app"}
          />
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="px-6 py-24 lg:px-36 relative">
        <h2 data-aos="fade-up" className="font-preahvihear text-white font-normal text-4xl text-center mb-6">
          Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Certificate image={"/assets/images/certificates/nodejsmongodb-gamelab.png"} title={"NodeJS dan MongoDB"} issuer={"Gamelab Indonesia"} date={"September 2024"} link={"https://www.gamelab.id/certificate/GL3347427148"} />
          <Certificate
            image={"/assets/images/certificates/fe-fundamentals-myskill.png"}
            title={"Frontend Fundamentals"}
            issuer={"MySkill x SGU"}
            date={"August 2024"}
            link={"https://drive.google.com/file/d/1MwqJfiCHlP4MAmPyqz9pdtM3PN2Dcys3/view"}
          />
          <Certificate
            image={"/assets/images/certificates/uiux-design-fundamentals-myskill.png"}
            title={"UI/UX Design Fundamentals"}
            issuer={"MySkill x SGU"}
            date={"July 2024"}
            link={"https://drive.google.com/file/d/1TaMMxu_Po7ZIs_hXHy9UbjeCvzurJisn/view"}
          />
          <Certificate image={"/assets/images/certificates/nodejsmysql-gamelab.png"} title={"NodeJS dan MySQL"} issuer={"Gamelab Indonesia"} date={"June 2024"} link={"https://www.gamelab.id/certificate/GL8614824871"} />
          <Certificate
            image={"/assets/images/certificates/introtose-revou.png"}
            title={"Intro to Software Engineering"}
            issuer={"RevoU"}
            date={"May 2024"}
            link={"https://certificates.revou.co/enok-rosanti-certificate-attendance-sefc.pdf"}
          />
          <Certificate image={"/assets/images/certificates/htmlcssjs-gamelab.png"} title={"HTML, CSS, dan JavaScript"} issuer={"Gamelab Indonesia"} date={"January 2024"} link={"https://www.gamelab.id/certificate/GL5572132962"} />
        </div>
      </section>

      {/* Contact me */}
      <section id="contact" className="px-6 py-24 lg:px-36 relative">
        <h2 data-aos="fade-up" className="font-preahvihear font-normal text-white text-4xl text-center mb-6">
          Contact Me
        </h2>
        <form data-aos="fade-up" className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full">
              <label htmlFor="name" className="text-white font-medium text-lg">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                required
                className="w-full h-[50px] mt-2 flex flex-col gap-4 bg-gradient-to-r from-[#130428] via-[#251043] to-[#190634] p-4 rounded-lg border-t-2 border-[#693B93] outline-none text-base text-white font-normal"
              />
            </div>
            <div className="w-full">
              <label htmlFor="name" className="text-white font-medium text-lg">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="name"
                placeholder="example@gmail.com"
                required
                className="w-full h-[50px] mt-2 flex flex-col gap-4 bg-gradient-to-r from-[#130428] via-[#251043] to-[#190634] p-4 rounded-lg border-t-2 border-[#693B93] outline-none text-base text-white font-normal"
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="message" className="text-white font-medium text-lg">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
              className="w-full h-[170px] mt-2 flex flex-col gap-4 bg-gradient-to-r from-[#130428] via-[#251043] to-[#190634] p-4 rounded-lg border-t-2 border-[#693B93] outline-none text-base text-white font-normal"
            ></textarea>
          </div>
          <button className="w-[100px] h-[33px] flex items-center justify-center text-white font-medium text-sm text-center bg-[#2C1250] py-3 rounded-lg border border-[#693B93]">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="flex flex-col justify-center items-center gap-1 mx-6 lg:mx-28 py-6 border-t border-primary">
        <div className="flex gap-1">
          <Link href="mailto:enokrosanti54@gmail.com?subject=Hello%20There&body=I%20would%20like%20to%20connect%20with%20you.">
            <Image src="/assets/icons/gmail.svg" alt="gmail-icon" width={24} height={24} />
          </Link>
          <Link href={"https://www.instagram.com/e.rsnti__/"}>
            <Image src="/assets/icons/instagram-icon.svg" alt="instagram-icon" width={24} height={24} />
          </Link>
          <Link href={"https://github.com/enokrosanti"}>
            <Image src="/assets/icons/github-icon.svg" alt="github-icon" width={24} height={24} />
          </Link>
          <Link href={"https://www.linkedin.com/in/enok-rosanti/"}>
            <Image src="/assets/icons/linkedin-icon.svg" alt="linkedin-icon" width={24} height={24} />
          </Link>
        </div>
        <p className="text-white text-sm font-normal">© 2024 Enok Rosanti All rights reserved.</p>
      </footer>
    </>
  );
}
