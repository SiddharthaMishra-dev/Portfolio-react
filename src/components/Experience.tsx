import { useState } from "react";
import experience from "../utils/data";

const Experience = () => {
  const [index, setIndex] = useState(0);
  const handleChange = (id: number) => {
    setIndex(id);
  };
  return (
    <div className="experience text-gray-900 dark:text-gray-200 lg:w-3/4 m-auto  mb-32 rounded-md shadow-sm items-center md:text-left p-10 md:pt-10">
      <h1 className="text-5xl text-center m-5">Experience</h1>
      <div className="w-full overflow-auto flex gap-5  p-0 md:p-5 md:justify-center">
        {experience.map((job, index1) => {
          return (
            <p
              key={index1}
              onClick={() => handleChange(job.id)}
              className={`p-1 text-xl font-semibold cursor-pointer hover:text-sky-500 transition  ${
                job.id === index && "active text-sky-500 "
              }`}
            >
              {job.company}
            </p>
          );
        })}
      </div>
      <div className="job-item p-5 rounded-md mt-5">
        <p className="text-2xl text-sky-500 font-bold">
          <span className=" text-gray-900 dark:text-gray-200">{experience[index].designation}</span>{" "}
          @{experience[index].company}
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-400 text-lg">{experience[index].tenure}</p>
        <article className="mt-2 text-lg space-x-1">{experience[index].description}</article>
      </div>
    </div>
  );
};

export default Experience;
