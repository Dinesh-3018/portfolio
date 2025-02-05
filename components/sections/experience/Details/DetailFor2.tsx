import React from "react";
import ArrowIcon from "../../../../public/Admin/Arrow";

export default function DetailsForSaptang() {
  const tasks = [
    {
      text: "Working as a Software Engineer Intern at Saptang Labs, developed a Telegram messaging monitoring web app to ensure seamless communication tracking.",
      keywords: [
        "Software Engineer Intern",
        "Saptang Labs",
        "Telegram messaging",
        "monitoring web app",
        "real-time analytics",
      ],
    },
    {
      text: "At Saptang Labs, contributed to the development of a platform suite web app, focusing on creating a scalable and modular architecture to support various business needs.",
      keywords: [
        "platform suite",
        "web app",
        "scalable architecture",
        "modular design",
        "business solutions",
      ],
    },
    {
      text: "Contributed to setting up the architecture for micro front-end development, ensuring scalability and modularity across different products.",
      keywords: ["micro front-end", "architecture", "scalability", "modularity"],
    },
  ];

  return (
    <>
      <div className="flex max-w-xl flex-col space-y-5 px-4 md:px-0">
        <div className="spacey-y-2 flex flex-col">
          <span className="font-Arimo text-sm tracking-wide text-gray-100 sm:text-lg">
            Software Development Engineer Intern
          </span>
          <span className="font-mono text-xs text-gray-500">Jan 2024 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://www.saptang.com/", "_blank")}
          >
            www.saptang.com
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
