interface ExperienceType {
  id: number;
  company: string;
  tenure: string;
  description: string;
  designation: string;
  image?: string;
}

const experience: ExperienceType[] = [
  {
    id: 0,
    company: "Postman",
    designation: "Postman Student Leader",
    tenure: "January 2023 - Present",
    description:
      "Organise Events to increase API Literacy in Faculty of Engineering and Technology University of Lucknow.Hosted API 101 session online in which students learn about API's and got handson working with Postman and how to test particular API.1",
    image: "",
  },
  {
    id: 1,
    designation: "Member",
    company: "Coding Connoiseur",
    tenure: "March 2022 - Present",
    image: "",
    description:
      "Tech Team Member. My day to day task involve updating website, managing mails ,forms and mainly organising backend.We have hosted Code Fiesta, 3 day tech event with numerous challenges and quizez.Apart from this, we host may seminars and coding competition on monthly basis to foster coding culture in the college.",
  },
  {
    id: 2,
    designation: "Reactjs Intern",
    company: "TechBRJ",
    tenure: "July 2023 - Present",
    image: "",
    description:
      "My day-to-day task include creating full frontend of the websites for the client. Build different components that fetches data from the API. I have to ensure that each API call should be made with proper error handling. Also , I have to optimize the websites with different React technologies for better performance.",
  },
  {
    id: 3,
    designation: "Reactjs Intern",
    company: "Brainlox",
    tenure: "March 2023 - July 2023",
    image: "",
    description:
      "Built new react components in brainlox.ai website.Work with nextjs website. Also integrate API to the frontend of the website to establish proper flow of data. Built components that fetches data from the API and dynamically changes data in the website. Work on ChatGPT plugin , building chat UI for API",
  },
  {
    id: 4,
    designation: "Frontend Intern",
    company: "EVE",
    tenure: "February 2023 - March 2023",
    image: "",
    description:
      "Work on React website and live production website . Design various pages of the websites. Opt best practices to increase SEO and faster reloading of the pages. My job also includes checking the codes from other branches and merging in the main branch so that website doesn't break.",
  },
];
export default experience;
