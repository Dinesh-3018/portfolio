import React from "react";
import ArrowIcon from "../../../../public/Admin/Arrow";

export default function Details() {
  const tasks = [
    {
      text: "Served as a freelance front-end developer for an advertising company, utilizing React.js, Tailwind CSS, and Redux",
      keywords: ["React.js", "Tailwind CSS", "Redux", "freelance", "advertising company"],
    },
    {
      text: "Developed an emerging front-end web app for a business card development platform for the same company.",
      keywords: ["business card development", "front-end web app", "platform"],
    },
    {
      text: "Worked on enhancing user experience and design, ensuring high performance and responsiveness in web applications.",
      keywords: ["user experience", "design", "performance", "responsiveness"],
    },
  ];

  return (
    <>
      <div className="flex max-w-xl flex-col space-y-5 px-4 md:px-0">
        <div className="spacey-y-2 flex flex-col">
          {/* Title */}
          <span className="font-Arimo text-sm tracking-wide text-gray-100 sm:text-lg">
            Freelance Front-End Developer{" "}
            <span className="text-AAsecondary">for various projects</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jun 2023 - Jan 2024</span>
          <h1>Check out my github</h1>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://github.com/DineshG-AIDS", "_blank")}
          >
            Github
          </span>
        </div>
        <div className="flex flex-col space-y-4 text-xs sm:text-sm">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 flex-none text-AAsecondary"} />
                <span
                  className="text-xs text-gray-500 sm:text-sm"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export const getTasksTextWithHighlightedKeyword = (text: string, keyword: string[] | []) => {
  if (keyword.length > 0) {
    const regex = new RegExp(keyword.join("|"), "gi");
    return text.replace(regex, (match) => `<span class="text-AAsecondary">${match}</span>`);
  }
  return text;
};
