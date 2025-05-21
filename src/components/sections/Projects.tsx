import { FaAws, FaAngular } from 'react-icons/fa';
import { IoLogoPython } from "react-icons/io5";
import { SiFlask, SiPhp, SiJsonwebtokens, SiPostgresql, SiGunicorn, SiNginx, SiQt, SiPandas, SiOpencv, SiSqlalchemy } from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";
import { GrMysql } from "react-icons/gr";
import { DiMsqlServer, DiRedis, DiDotnet } from "react-icons/di";
import { TbSdk, TbFileDatabase } from "react-icons/tb";
import { FaFileCsv } from "react-icons/fa6";
import { RevealOnScroll } from './RevealOnScroll';
import { Link } from 'react-router-dom';


export const Projects = () => {

    const api_ecommercer = [
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
            name:"JWT",
            icon:<SiJsonwebtokens />,
            color:"bg-cyan-400/10 text-cyan-700 hover:bg-cyan-400/20"
        },
        {
            name:"SQLAlchemy",
            icon:<SiSqlalchemy />,
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
        }
        ]
    
    const api_Nomipaq = [
        {
            name:"C#",
            icon:<PiFileCSharp />,
            color:"bg-violet-400/10 text-violet-700 hover:bg-violet-400/20"
        },
        {
            name:"SQLServer",
            icon:<DiMsqlServer />,
            color:"bg-red-400/10 text-red-700 hover:bg-red-400/20"
        },
        {
            name:"CONTPAQi SDK",
            icon:<TbSdk />,
            color:"bg-blue-400/10 text-blue-700 hover:bg-blue-400/20"
        },
        ]
    
    const api_ETL = [
        {
            name:"C#",
            icon:<PiFileCSharp />,
            color:"bg-violet-400/10 text-violet-700 hover:bg-violet-400/20"
        },
        {
            name:"SQLServer",
            icon:<DiMsqlServer />,
            color:"bg-red-400/10 text-red-700 hover:bg-red-400/20"
        },
        {
            name:"CONTPAQi SDK",
            icon:<TbSdk />,
            color:"bg-blue-400/10 text-blue-700 hover:bg-blue-400/20"
        },
        {
            name:"CSV",
            icon:<FaFileCsv />,
            color:"bg-green-400/10 text-green-700 hover:bg-green-400/20"
        },
        ]

    const api_Access_Control = [
        {
            name:"C#",
            icon:<PiFileCSharp />,
            color:"bg-violet-400/10 text-violet-700 hover:bg-violet-400/20"
        },
        {
            name:".NET",
            icon:<DiDotnet />,
            color:"bg-blue-400/10 text-blue-700 hover:bg-blue-400/20"
        },
        {
            name:"Visual Foxpro",
            icon:<TbFileDatabase />,
            color:"bg-orange-400/10 text-orange-700 hover:bg-orange-400/20"
        },
        {
            name:"Python",
            icon:<IoLogoPython />,
            color:"bg-blue-400/10 text-blue-700 hover:bg-blue-400/20"
        },
        {
            name:"PYQT5",
            icon:<SiQt />,
            color:"bg-green-400/10 text-green-700 hover:bg-green-400/20"
        },
        {
            name:"PHP",
            icon:<SiPhp />,
            color:"bg-violet-400/10 text-violet-700 hover:bg-violet-400/20"
        },
        {
            name:"MySQL",
            icon:<GrMysql />,
            color:"bg-blue-400/10 text-blue-700 hover:bg-blue-400/20"
        },
        ]

    const api_Agroll = [
        {
            name:"Python",
            icon:<IoLogoPython />,
            color:"bg-blue-400/10 text-blue-700 hover:bg-blue-400/20"
        },
        {
            name:"Pandas",
            icon:<SiPandas />,
            color:"bg-violet-400/10 text-violet-700 hover:bg-violet-400/20"
        },
        {
            name:"PYQT5",
            icon:<SiQt />,
            color:"bg-green-400/10 text-green-700 hover:bg-green-400/20"
        },
        {
            name:"PHP",
            icon:<SiPhp />,
            color:"bg-violet-400/10 text-violet-700 hover:bg-violet-400/20"
        },
        {
            name:"MySQL",
            icon:<GrMysql />,
            color:"bg-blue-400/10 text-blue-700 hover:bg-blue-400/20"
        },
        {
            name:"AWS",
            icon:<FaAws />,
            color:"bg-yellow-400/10 text-yellow-700 hover:bg-yellow-400/20"
        },
        ]

    const api_Irrigation_System = [
        {
            name:"Python",
            icon:<IoLogoPython />,
            color:"bg-blue-400/10 text-blue-700 hover:bg-blue-400/20"
        },
        {
            name:"Pandas",
            icon:<SiPandas />,
            color:"bg-violet-400/10 text-violet-700 hover:bg-violet-400/20"
        },
        {
            name:"OpenCV",
            icon:<SiOpencv />,
            color:"bg-green-400/10 text-green-700 hover:bg-green-400/20"
        },
        {
            name:"PYQT5",
            icon:<SiQt />,
            color:"bg-green-400/10 text-green-700 hover:bg-green-400/20"
        },
        {
            name:"PHP",
            icon:<SiPhp />,
            color:"bg-violet-400/10 text-violet-700 hover:bg-violet-400/20"
        },
        {
            name:"MySQL",
            icon:<GrMysql />,
            color:"bg-blue-400/10 text-blue-700 hover:bg-blue-400/20"
        },
        {
            name:"AWS",
            icon:<FaAws />,
            color:"bg-yellow-400/10 text-yellow-700 hover:bg-yellow-400/20"
        },
        {
            name:"Angular",
            icon:<FaAngular />,
            color:"bg-red-400/10 text-red-700 hover:bg-red-400/20"
        },
        ]

  return (
    <section 
        id="projects" 
        className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Freatured Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className='p-6 rounded-xl border border-white/10 hover:-translate-1 hover:border-blue-500/30 
                                hover: shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] transition-all'
                >

                    <h3 className='text-xl font-bold mb-2'>E-commerce API with Flask</h3>
                    <p className='text-gray-400 mb-4'>
                        Developed a full-stack e-commerce application with a RESTful API and a user-friendly dashboard. 
                        The project includes CRUD operations for customers, products, and orders, and it's deployed on AWS EC2. 
                        The live dashboard is integrated into my portfolio for testing and demonstration purposes.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {api_ecommercer.map((tech, key) => (
                        <span
                            key={key}
                            className={`py-1 px-3 rounded-full text-sm flex items-center gap-1 ${tech.color} hover:shadow-md transition-all`}
                        >
                            {tech.icon} {tech.name}
                        </span>
                        ))}
                    </div>
                    <div className='flex justify-between items-center'>
                    <Link 
                        to="/dashboard" 
                        className='text-blue-500 hover:text-blue-400 transition-colors my-4'
                    >
                        Go to Dashboard →
                    </Link>
                    </div>
                </div>

                <div className='p-6 rounded-xl border border-white/10 hover:-translate-1 hover:border-blue-500/30 
                                hover: shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] transition-all'
                >

                    <h3 className='text-xl font-bold mb-2'>API for Contpaqi Nomipaq</h3>
                    <p className='text-gray-400 mb-4'>
                    Developed an API in C# and .NET 7 using the Contpaqi SDK to serve user information from Nomipaq. 
                    Enabled integration with external systems without requiring installation on client servers.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {api_Nomipaq.map((tech, key) => (
                        <span
                            key={key}
                            className={`py-1 px-3 rounded-full text-sm flex items-center gap-1 ${tech.color} hover:shadow-md transition-all`}
                        >
                            {tech.icon} {tech.name}
                        </span>
                        ))}
                    </div>
                </div>
                
                <div className='p-6 rounded-xl border border-white/10 hover:-translate-1 hover:border-blue-500/30 
                                hover: shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] transition-all'
                >

                    <h3 className='text-xl font-bold mb-2'>ETL Service for Shopify and CONTPAQi</h3>
                    <p className='text-gray-400 mb-4'>
                        Created a Windows ETL service that processed CSV sales files exported from Shopify. 
                        Transformed and integrated data into Contpaqi via its SDK, automating accounting record updates.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {api_ETL.map((tech, key) => (
                        <span
                            key={key}
                            className={`py-1 px-3 rounded-full text-sm flex items-center gap-1 ${tech.color} hover:shadow-md transition-all`}
                        >
                            {tech.icon} {tech.name}
                        </span>
                        ))}
                    </div>
                </div>

                <div className='p-6 rounded-xl border border-white/10 hover:-translate-1 hover:border-blue-500/30 
                                hover: shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] transition-all'
                >

                    <h3 className='text-xl font-bold mb-2'>Access Control System</h3>
                    <p className='text-gray-400 mb-4'>
                        Implemented a Python-based system to manage access in a sports club. Included a desktop application for 
                        member registration, a server controlling turnstiles and biometric devices, and an API for debt validation.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {api_Access_Control.map((tech, key) => (
                        <span
                            key={key}
                            className={`py-1 px-3 rounded-full text-sm flex items-center gap-1 ${tech.color} hover:shadow-md transition-all`}
                        >
                            {tech.icon} {tech.name}
                        </span>
                        ))}
                    </div>
                </div>

                <div className='p-6 rounded-xl border border-white/10 hover:-translate-1 hover:border-blue-500/30 
                                hover: shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] transition-all'
                >

                    <h3 className='text-xl font-bold mb-2'>Agroll Agricultural ERP</h3>
                    <p className='text-gray-400 mb-4'>
                        Developed ERP modules for managing workers, virtualizing work areas, and generating reports in 
                        a greenhouse environment.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {api_Agroll.map((tech, key) => (
                        <span
                            key={key}
                            className={`py-1 px-3 rounded-full text-sm flex items-center gap-1 ${tech.color} hover:shadow-md transition-all`}
                        >
                            {tech.icon} {tech.name}
                        </span>
                        ))}
                    </div>
                </div>

                <div className='p-6 rounded-xl border border-white/10 hover:-translate-1 hover:border-blue-500/30 
                                hover: shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] transition-all'
                >

                    <h3 className='text-xl font-bold mb-2'>Automated Irrigation System</h3>
                    <p className='text-gray-400 mb-4'>
                        Designed a Python-based system to control irrigation and optimize energy consumption, 
                        reducing costs by 30%. Implemented on a Raspberry Pi 4, controlling a PLC via LAN using 
                        PyComm3, with monitoring through a web dashboard
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {api_Irrigation_System.map((tech, key) => (
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
        </RevealOnScroll>
    </section>
  )
}
