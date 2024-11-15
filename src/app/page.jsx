"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Experience from "./components/Experience/experience";
import Tag from "./components/Tag/tag";
import Project from "./components/Project/project";
import Certificate from "./components/Certificate/certificate";
import Education from "./components/Education/education";
import Skill from "./components/Skill/skill";
import Link from "next/link";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Homepage() {
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

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  const scrollToAbout = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="flex flex-col items-center gap-24 pt-24 pb-10 px-2 md:px-6 lg:px-36">
        <header className="flex flex-col items-center gap-14">
          <div className="flex flex-col items-center gap-14 sm:w-full md:w-[680px]">
            <div className="relative">
              <Image src="/user/user.jpg" alt="user" width={96} height={96} className="rounded-full object-cover aspect-square border-2 border-primary p-1" />
              <Image src="/icons/Code.png" alt="code" width={32} height={32} className="absolute top-[64px] left-[68px]" />
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
            <Tag link={"https://github.com/"} image={"/tags/github.png"} tag={"GitHub"} />
            <Tag link={"https://html.com/"} image={"/tags/html.png"} tag={"HTML"} />
            <Tag link={""} image={"/tags/css.png"} tag={"CSS"} />
            <Tag link={""} image={"/tags/javascript.png"} tag={"JavaScript"} />
            <Tag link={"https://react.dev/"} image={"/tags/react.png"} tag={"React"} />
            <Tag link={"https://nodejs.org/en"} image={"/tags/nodejs.png"} tag={"NodeJS"} />
            <Tag link={"https://tailwindcss.com/"} image={"/tags/tailwindcss.png"} tag={"Tailwind CSS"} />
          </div>
        </header>
        <button onClick={scrollToAbout}>
          <Image src="/icons/caretdoubledown.png" alt="scroll-button" width={24} height={24} />
        </button>
      </section>

      {/* About Me */}
      <section id="about" className="px-6 py-24 lg:px-36 relative">
        <h2 data-aos="fade-up" className="font-preahvihear font-normal text-4xl text-center mb-6">
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

          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-4 mt-6">
            {/* Education */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-2">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.83902 15.89C6.58235 15.7453 6.37835 15.5486 6.22702 15.3C6.07568 15.0506 6.00002 14.7713 6.00002 14.462V10.585L4.40802 9.70198C4.26268 9.61531 4.15468 9.51264 4.08402 9.39398C4.01335 9.27531 3.97868 9.14398 3.98002 8.99998C3.98135 8.85598 4.01668 8.72464 4.08602 8.60598C4.15535 8.48731 4.26302 8.38464 4.40902 8.29798L11.229 4.57798C11.3504 4.51064 11.4754 4.46264 11.604 4.43398C11.7327 4.40531 11.8647 4.39064 12 4.38998C12.1354 4.38931 12.2677 4.40398 12.397 4.43398C12.5264 4.46398 12.6517 4.51164 12.773 4.57698L20.494 8.76398C20.6353 8.84731 20.742 8.95164 20.814 9.07698C20.8867 9.20298 20.923 9.33898 20.923 9.48498V14.885C20.923 15.0263 20.875 15.145 20.779 15.241C20.683 15.337 20.5644 15.385 20.423 15.385C20.2817 15.385 20.1627 15.337 20.066 15.241C19.9694 15.145 19.9217 15.0263 19.923 14.885V9.56198L18 10.585V14.462C18 14.7713 17.9244 15.0506 17.773 15.3C17.6217 15.5493 17.418 15.746 17.162 15.89L12.777 18.264C12.653 18.334 12.5264 18.3836 12.397 18.413C12.2677 18.4423 12.1354 18.4566 12 18.456C11.8647 18.4553 11.7324 18.441 11.603 18.413C11.4737 18.385 11.347 18.335 11.223 18.263L6.83902 15.89ZM11.769 12.585C11.859 12.6356 11.939 12.661 12.009 12.661C12.0797 12.661 12.16 12.6356 12.25 12.585L18.83 8.99998L12.25 5.43498C12.1607 5.38364 12.0807 5.35798 12.01 5.35798C11.9394 5.35798 11.8594 5.38364 11.77 5.43498L5.17002 8.99998L11.769 12.585ZM11.75 17.417C11.84 17.4683 11.9234 17.494 12 17.494C12.0767 17.494 12.16 17.4683 12.25 17.417L16.712 15.006C16.8147 14.942 16.888 14.8683 16.932 14.785C16.976 14.7016 16.9987 14.5956 17 14.467V11.135L12.783 13.437C12.6584 13.507 12.5317 13.5566 12.403 13.586C12.2757 13.6146 12.1414 13.629 12 13.629C11.8587 13.629 11.724 13.6146 11.596 13.586C11.468 13.5573 11.3417 13.5073 11.217 13.436L7.00002 11.136V14.468C7.00002 14.5706 7.02235 14.6703 7.06702 14.767C7.11168 14.863 7.18535 14.943 7.28802 15.007L11.75 17.417Z"
                    fill="#7127BA"
                  />
                </svg>
                <h6 className="text-primary text-lg font-semibold">Education</h6>
              </div>
              <div className="flex flex-col gap-4">
                <Education educationalInstitution={"SMKN 1 Majalengka"} major={"Software Engineering"} date={"2022 - Present"} />
              </div>
            </div>
            {/* Skills */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-2 mt-2">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.91602 20.192V18.546C1.91602 18.1114 2.03202 17.723 2.26402 17.381C2.49602 17.039 2.82335 16.762 3.24602 16.55C4.05735 16.1427 4.95802 15.8144 5.94802 15.565C6.93802 15.3164 7.92735 15.192 8.91602 15.192C9.90468 15.192 10.8937 15.3164 11.883 15.565C12.8723 15.8137 13.773 16.142 14.585 16.55C15.0077 16.7614 15.335 17.038 15.567 17.38C15.7997 17.7227 15.916 18.1114 15.916 18.546V20.192H1.91602ZM2.91602 19.192H14.916V18.546C14.916 18.2727 14.838 18.0484 14.682 17.873C14.526 17.6977 14.3347 17.549 14.108 17.427C13.482 17.1017 12.6983 16.8147 11.757 16.566C10.815 16.3167 9.86768 16.192 8.91502 16.192C7.96235 16.192 7.01535 16.3167 6.07402 16.566C5.13268 16.8154 4.34902 17.1024 3.72302 17.427C3.49635 17.549 3.30502 17.6977 3.14902 17.873C2.99302 18.049 2.91502 18.2734 2.91502 18.546L2.91602 19.192ZM8.91602 12.962C8.05935 12.962 7.34502 12.676 6.77302 12.104C6.20102 11.532 5.91535 10.7794 5.91602 9.84603H5.70402C5.59202 9.84603 5.50002 9.81003 5.42802 9.73803C5.35535 9.66469 5.31902 9.57269 5.31902 9.46203C5.31902 9.35136 5.35535 9.25936 5.42802 9.18603C5.50068 9.11269 5.59268 9.07636 5.70402 9.07703H5.91502C5.94102 8.57036 6.04768 8.11036 6.23502 7.69703C6.42168 7.28236 6.72535 6.88736 7.14602 6.51203V7.46203C7.14602 7.57336 7.18235 7.66536 7.25502 7.73803C7.32768 7.81003 7.41968 7.84603 7.53102 7.84603C7.64235 7.84603 7.73435 7.81003 7.80702 7.73803C7.87968 7.66603 7.91568 7.57403 7.91502 7.46203V6.15003C8.05235 6.10003 8.20768 6.05603 8.38102 6.01803C8.55435 5.98069 8.73268 5.96203 8.91602 5.96203C9.09935 5.96203 9.27735 5.98069 9.45002 6.01803C9.62268 6.05536 9.77802 6.09936 9.91602 6.15003V7.46203C9.91602 7.57336 9.95202 7.66536 10.024 7.73803C10.0967 7.81003 10.1887 7.84603 10.3 7.84603C10.4113 7.84603 10.5033 7.81003 10.576 7.73803C10.6487 7.66603 10.685 7.57403 10.685 7.46203V6.51203C11.1183 6.88736 11.425 7.28203 11.605 7.69603C11.7863 8.11003 11.8897 8.57036 11.915 9.07703H12.127C12.2383 9.07703 12.3303 9.11336 12.403 9.18603C12.475 9.25803 12.511 9.35003 12.511 9.46203C12.511 9.57403 12.475 9.66603 12.403 9.73803C12.331 9.81003 12.239 9.84603 12.127 9.84603H11.915C11.915 10.7794 11.6293 11.532 11.058 12.104C10.486 12.676 9.77168 12.962 8.91502 12.962M8.91502 11.962C9.49102 11.962 9.96835 11.7724 10.347 11.393C10.7257 11.0144 10.915 10.537 10.915 9.96103H6.91502C6.91502 10.537 7.10468 11.0144 7.48402 11.393C7.86335 11.7717 8.34035 11.9614 8.91502 11.962ZM16.454 14.846L16.381 14.135C16.255 14.1017 16.1237 14.048 15.987 13.974C15.8503 13.9 15.734 13.815 15.638 13.719L14.977 14.008L14.592 13.338L15.181 12.916C15.155 12.84 15.142 12.7707 15.142 12.708V12.302C15.142 12.2454 15.155 12.173 15.181 12.085L14.592 11.662L14.977 10.992L15.638 11.281C15.7307 11.1884 15.846 11.1044 15.984 11.029C16.1227 10.9537 16.255 10.8994 16.381 10.866L16.454 10.154H17.223L17.296 10.866C17.422 10.8994 17.554 10.9537 17.692 11.029C17.83 11.1044 17.9457 11.1884 18.039 11.281L18.7 10.992L19.085 11.662L18.496 12.084C18.522 12.1727 18.535 12.2454 18.535 12.302V12.708C18.535 12.7707 18.522 12.8397 18.496 12.915L19.085 13.339L18.7 14.008L18.038 13.719C17.942 13.815 17.8257 13.9 17.689 13.974C17.5523 14.0474 17.4213 14.1007 17.296 14.134L17.223 14.846H16.454ZM16.838 13.404C17.0893 13.404 17.3027 13.3164 17.478 13.141C17.654 12.965 17.742 12.7514 17.742 12.5C17.742 12.2487 17.6543 12.0354 17.479 11.86C17.3037 11.6847 17.0903 11.5967 16.839 11.596C16.5877 11.5954 16.374 11.6834 16.198 11.86C16.022 12.0367 15.934 12.25 15.934 12.5C15.934 12.75 16.022 12.9634 16.198 13.14C16.374 13.3167 16.5873 13.4047 16.838 13.404ZM18.869 9.42303L18.784 8.64303C18.596 8.60569 18.3977 8.53003 18.189 8.41603C17.981 8.30269 17.8143 8.16403 17.689 8.00003L16.946 8.31203L16.516 7.57303L17.173 7.09303C17.1397 6.99636 17.1163 6.89736 17.103 6.79603C17.0903 6.69469 17.084 6.59603 17.084 6.50003C17.084 6.40403 17.0907 6.30536 17.104 6.20403C17.1173 6.10269 17.1403 6.00403 17.173 5.90803L16.515 5.42703L16.946 4.68903L17.688 5.00003C17.814 4.83603 17.9813 4.69736 18.19 4.58403C18.398 4.47069 18.5963 4.39536 18.785 4.35803L18.869 3.57703H19.731L19.815 4.35703C20.0037 4.39503 20.202 4.47069 20.41 4.58403C20.6187 4.69736 20.7857 4.83603 20.911 5.00003L21.654 4.68803L22.084 5.42703L21.427 5.90703C21.4603 6.00369 21.4837 6.10269 21.497 6.20403C21.509 6.30536 21.515 6.40403 21.515 6.50003C21.515 6.59603 21.5087 6.69469 21.496 6.79603C21.4833 6.89736 21.4603 6.99603 21.427 7.09203L22.085 7.57303L21.654 8.31203L20.912 8.00003C20.786 8.16403 20.619 8.30269 20.411 8.41603C20.2023 8.52936 20.004 8.60469 19.816 8.64203L19.731 9.42303H18.869ZM19.3 7.86603C19.6887 7.86603 20.0133 7.73536 20.274 7.47403C20.5347 7.21336 20.665 6.88869 20.665 6.50003C20.665 6.11136 20.5347 5.78669 20.274 5.52603C20.0133 5.26536 19.6887 5.13503 19.3 5.13503C18.9113 5.13503 18.5867 5.26536 18.326 5.52603C18.0653 5.78669 17.9347 6.11136 17.934 6.50003C17.9333 6.88869 18.064 7.21336 18.326 7.47403C18.588 7.73469 18.9127 7.86536 19.3 7.86603Z"
                    fill="#7127BA"
                  />
                </svg>
                <h6 className="text-primary text-lg font-semibold">Skills</h6>
              </div>
              <ul className="flex flex-col gap-4">
                <Skill skill={"Lorem Ipsum"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum dolorum fugiat blanditiis unde accusamus!"} />
                <Skill skill={"Lorem Ipsum"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum dolorum fugiat blanditiis unde accusamus!"} />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-6 py-24 lg:px-36 relative z-30">
        <h2 data-aos="fade-up" className="font-preahvihear font-normal text-4xl text-center mb-6">
          Experience
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Experience
            image={"/experience/sawala-tech.png"}
            title={"PT. Sawala Inovasi Indonesia"}
            jobTitle={"Frontend Web Developer - Internship"}
            date={"July - November 2024"}
            description={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quis porro ducimus exercitationem minus praesentium, voluptate aperiam a dolores officiis necessitatibus consectetur quod facere nostrum vitae, aspernatur itaque possimus id cupiditate. Pariatur quod neque at molestias eligendi, repudiandae asperiores repellendus similique explicabo praesentium vel cum, placeat sunt, itaque eveniet! Delectus, cum dignissimos!"
            }
          />
          <Experience
            image={"/experience/Esc.png"}
            title={"ESC SMKN 1 Majalengka"}
            jobTitle={"Lead of Documentation"}
            date={"Jan 2024 - Present"}
            description={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quis porro ducimus exercitationem minus praesentium, voluptate aperiam a dolores officiis necessitatibus consectetur quod facere nostrum vitae, aspernatur itaque possimus id cupiditate. Pariatur quod neque at molestias eligendi, repudiandae asperiores repellendus similique explicabo praesentium vel cum, placeat sunt, itaque eveniet! Delectus, cum dignissimos!"
            }
          />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-24 lg:px-36 relative">
        <h2 data-aos="fade-up" className="font-preahvihear font-normal text-4xl text-center mb-6">
          Projects
        </h2>
        <div className="flex flex-col gap-6">
          <Project
            projectName={"Zenlytics - Personal Task"}
            projectImage={"/projects/zenlytics.png"}
            description={
              "This app lets users log in and manage tasks with a title, due date, description, and status. As a frontend developer, I designed a simple, responsive interface with an easy login page, task list, and forms for adding or editing tasks, ensuring smooth navigation and user experience."
            }
            link={process.env.NEXT_PUBLIC_ZENLYTICS}
          />
          <Project
            projectName={"Wander - Simple Travel Blog"}
            projectImage={"/projects/wander.png"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis magnam voluptate, non error dolores facere iste aperiam numquam ducimus. Debitis ad ipsum suscipit deserunt esse sed voluptatum totam eveniet laudantium?"
            }
            link={process.env.NEXT_PUBLIC_WANDER}
          />
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="px-6 py-24 lg:px-36 relative">
        <h2 data-aos="fade-up" className="font-preahvihear font-normal text-4xl text-center mb-6">
          Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Certificate image={"/certificates/nodejsmongodb-gamelab.png"} title={"NodeJS dan MongoDB"} issuer={"Gamelab Indonesia"} date={"September 2024"} link={"https://www.gamelab.id/certificate/GL3347427148"} />
          <Certificate image={"/certificates/fe-fundamentals-myskill.png"} title={"Frontend Fundamentals"} issuer={"MySkill x SGU"} date={"August 2024"} link={"https://drive.google.com/file/d/1MwqJfiCHlP4MAmPyqz9pdtM3PN2Dcys3/view"} />
          <Certificate
            image={"/certificates/uiux-design-fundamentals-myskill.png"}
            title={"UI/UX Design Fundamentals"}
            issuer={"MySkill x SGU"}
            date={"July 2024"}
            link={"https://drive.google.com/file/d/1TaMMxu_Po7ZIs_hXHy9UbjeCvzurJisn/view"}
          />
          <Certificate image={"/certificates/nodejsmysql-gamelab.png"} title={"NodeJS dan MySQL"} issuer={"Gamelab Indonesia"} date={"June 2024"} link={"https://www.gamelab.id/certificate/GL8614824871"} />
          <Certificate image={"/certificates/introtose-revou.png"} title={"Intro to Software Engineering"} issuer={"RevoU"} date={"May 2024"} link={"https://certificates.revou.co/enok-rosanti-certificate-attendance-sefc.pdf"} />
          <Certificate image={"/certificates/htmlcssjs-gamelab.png"} title={"HTML, CSS, dan JavaScript"} issuer={"Gamelab Indonesia"} date={"January 2024"} link={"https://www.gamelab.id/certificate/GL5572132962"} />
        </div>
      </section>

      {/* Contact me */}
      {/* <section id="certificates" className="px-6 py-24 lg:px-36 relative">
        <h2 data-aos="fade-up" className="font-preahvihear font-normal text-4xl text-center mb-6">
          Contact Me
        </h2>
        <form data-aos="fade-up" onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                value={FormData.name}
                onChange={handleChange}
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
                value={FormData.email}
                onChange={handleChange}
                required
                className="w-full h-[50px] mt-2 flex flex-col gap-4 bg-gradient-to-r from-[#130428] via-[#251043] to-[#190634] p-4 rounded-lg border-t-2 border-[#693B93] outline-none text-base text-white font-normal"
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              value={FormData.message}
              onChange={handleChange}
              required
              className="w-full h-[170px] mt-2 flex flex-col gap-4 bg-gradient-to-r from-[#130428] via-[#251043] to-[#190634] p-4 rounded-lg border-t-2 border-[#693B93] outline-none text-base text-white font-normal"
            ></textarea>
          </div>
          <button className="w-[100px] h-[33px] flex items-center justify-center text-white font-medium text-sm text-center bg-[#2C1250] py-3 rounded-lg border border-[#693B93]">Send</button>
        </form>
      </section> */}

      {/* Footer */}
      <footer className="flex flex-col justify-center items-center gap-1 mx-6 lg:mx-28 py-6 border-t border-primary">
        <div className="flex gap-1">
          <Link href="mailto:enokrosanti54@gmail.com?subject=Hello%20There&body=I%20would%20like%20to%20connect%20with%20you.">
            <Image src="/icons/gmail.svg" alt="gmail-icon" width={24} height={24} />
          </Link>
          <Link href={"https://www.instagram.com/e.rsnti__/"}>
            <Image src="/icons/instagram-icon.svg" alt="instagram-icon" width={24} height={24} />
          </Link>
          <Link href={"https://github.com/enokrosanti"}>
            <Image src="/icons/github-icon.svg" alt="github-icon" width={24} height={24} />
          </Link>
          <Link href={"https://www.linkedin.com/in/enok-rosanti/"}>
            <Image src="/icons/linkedin-icon.svg" alt="linkedin-icon" width={24} height={24} />
          </Link>
        </div>
        <p className="text-white text-sm font-normal">© 2024 Enok Rosanti All rights reserved.</p>
      </footer>
    </>
  );
}
