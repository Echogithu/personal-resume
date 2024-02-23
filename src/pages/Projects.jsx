import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        项目{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          经验
        </span>
      </h1>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div class="relative bg-white px-10 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 mx-auto  rounded-lg">
            <div className="lg:w-[800px] w-full" key={project.name}>
              <div className="mt-5 flex flex-row">
                <div className="block-container w-12 h-12 mr-10">
                  <div className={`btn-back rounded-xl ${project.theme}`} />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img
                      src={project.iconUrl}
                      alt="threads"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
                <h4 className="text-2xl font-poppins font-semibold  ">
                  {project.name}
                </h4>
              </div>
              <div className="mt-5 flex flex-col">
                <img
                  src={project.link}
                  alt=""
                  className="object-fill w-full my-4 h-60 sm:h-96 dark:bg-gray-500"
                />
                <p className="mt-2 text-slate-500">{project.description}</p>
              </div>
              {project.live && (
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
