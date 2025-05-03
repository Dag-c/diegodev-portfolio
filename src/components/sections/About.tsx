import { FaReact, FaHtml5, FaCss3, FaJsSquare, FaAws } from 'react-icons/fa';
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoPython } from "react-icons/io5";
import { SiFlask, SiPhp, SiJsonwebtokens, SiPostgresql, SiGunicorn, SiNginx, SiSqlalchemy, SiJinja } from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";
import { GrMysql } from "react-icons/gr";
import { DiMsqlServer, DiRedis } from "react-icons/di";
import { RevealOnScroll } from './RevealOnScroll';

export const About = () =>{
    const frontSkills = [
        {
            name:"React",
            icon:<FaReact />,
            color:"bg-blue-300/10 text-blue-700 hover:bg-blue-300/20"
        },
        {
            name:"HTML5",
            icon:<FaHtml5 />,
            color:"bg-red-300/10 text-red-700 hover:bg-red-300/20"
        },
        {
            name:"CSS3",
            icon:<FaCss3 />,
            color:"bg-blue-500/10 text-blue-700 hover:bg-blue-500/20"
        },
        {
            name:"TypeScript",
            icon:<BiLogoTypescript />,
            color:"bg-blue-300/10 text-blue-700 hover:bg-blue-300/20"
        },
        {
            name:"TailwindCSS",
            icon:<RiTailwindCssFill />,
            color:"bg-blue-400/10 text-blue-700 hover:bg-blue-400/20"
        },
        {
            name:"JavaScript",
            icon:<FaJsSquare />,
            color:"bg-yellow-500/10 text-yellow-700 hover:bg-yellow-500/20"
        },
        {
          name:"Jinja",
          icon:<SiJinja />,
          color:"bg-red-500/10 text-red-700 hover:bg-red-500/20"
        },
    ]
    const backendSkills = [
        {
            name:"Python",
            icon:<IoLogoPython />,
            color:"bg-blue-400/10 text-blue-700 hover:bg-blue-400/20"
        },
        {
            name:"Flask",
            icon:<SiFlask />,
            color:"bg-gray-400/10 text-gray-700 hover:bg-gray-400/20"
        },
        {
            name:"PHP",
            icon:<SiPhp />,
            color:"bg-violet-400/10 text-violet-700 hover:bg-violet-400/20"
        },
        {
            name:"C#",
            icon:<PiFileCSharp />,
            color:"bg-violet-400/10 text-violet-700 hover:bg-violet-400/20"
        },
        {
            name:"JWT",
            icon:<SiJsonwebtokens />,
            color:"bg-cyan-400/10 text-cyan-700 hover:bg-cyan-400/20"
        },
        {
            name:"MySQL",
            icon:<GrMysql />,
            color:"bg-blue-400/10 text-blue-700 hover:bg-blue-400/20"
        },
        {
            name:"SQLServer",
            icon:<DiMsqlServer />,
            color:"bg-red-400/10 text-red-700 hover:bg-red-400/20"
        },
        {
            name:"PostgreSQL",
            icon:<SiPostgresql />,
            color:"bg-blue-400/10 text-blue-700 hover:bg-blue-400/20"
        },
        {
            name:"Gunicorn",
            icon:<SiGunicorn />,
            color:"bg-green-400/10 text-green-700 hover:bg-green-400/20"
        },
        {
            name:"Redis",
            icon:<DiRedis />,
            color:"bg-red-400/10 text-red-700 hover:bg-red-400/20"
        },
        {
            name:"AWS",
            icon:<FaAws />,
            color:"bg-yellow-400/10 text-yellow-700 hover:bg-yellow-400/20"
        },
        {
            name:"Nginx",
            icon:<SiNginx />,
            color:"bg-green-400/10 text-green-700 hover:bg-green-400/20"
        },
        {
          name:"SQLAlchemy",
          icon:<SiSqlalchemy />,
          color:"bg-red-400/10 text-red-700 hover:bg-red-400/20"
      }
    ]

    return(
        <section id="about" className="min-h-screen flex flex-col items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl w-full px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
      
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>
      
            {/* 🧠 Frontend & Backend Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontSkills.map((tech, key) => (
                    <span
                      key={key}
                      className={`py-1 px-3 rounded-full text-sm flex items-center gap-1 ${tech.color} hover:shadow-md transition-all`}
                    >
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>
              </div>
      
              <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className={`py-1 px-3 rounded-full text-sm flex items-center gap-1 ${tech.color} hover:shadow-md transition-all`}
                    >
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
      
          {/* 🎓 Education & 💼 Work Experience Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">📚 Education</h3>
              <ul className='list-disc list-inside text-gray-300 space-y-2'>
                <li>
                    <strong>Master's Degree in Computer Science</strong>-Tecnológico Nacional de México campus Ciudad Guzmán 
                    | 2017 - 2019
                </li>
                <li>
                    <strong>Bachelor's Degree in Computer Systems Engineering</strong>-Tecnológico Nacional de México campus Ciudad Guzmán 
                    | 2010 - 2015
                </li>
              </ul>
            </div>
      
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className='space-y-4 text-gray-300'>

                <div>
                    <h4 className='font-semibold'>SW-LIMAC | Software Engineer | 2023 - 2024</h4>
                    <p> 
                        At SWLimac, I worked as a software developer focused on backend solutions and system integration. 
                        I developed APIs using C# and .NET 7, created ETL services for automating accounting tasks, 
                        and implemented Python-based control systems. This experience strengthened my skills in software 
                        architecture, SDK integration, and real-world problem solving for business operations.
                    </p>
                </div>

                <div>
                    <h4 className='font-semibold'>Alternatura Produce | Software Engineer | 2020 - 2023</h4>
                    <p> 
                        At Alternatura, I contributed to the development of custom ERP and automation systems for agricultural 
                        operations. I built ERP modules and reporting tools, designed a smart irrigation system using Python 
                        and PLC integration, and developed a point of sale system for internal use. This role enhanced my skills 
                        in data processing, hardware-software integration, and full-stack development using Python, PHP, and 
                        cloud-based databases.
                    </p>
                </div>

              </div>
            </div>
          </div>
        </div>
        </RevealOnScroll>
      </section>
      
    );
}