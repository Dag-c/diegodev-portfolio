import { RevealOnScroll } from "./RevealOnScroll";

export const Home = () => {

    const scrollToId = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };    

    return(
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                    Hi. I'm Diego Guillén
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg max-auto">
                    I'm a full-stack developer passionate about solving real-world problems through scalable and maintainable solutions. 
                    I prioritize performance and usability, and I stay current with the latest tech trends.
                </p>
                <div className="flex justify-center space-x-4">
                    <button 
                        onClick={() => scrollToId('projects')} 
                        className="bg-cyan-400 text-white py-3 px-6 rounded font-medium transition relative
                        overflow-hidden hover:-translate-y-0.5 hover: shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                    >
                            View Projects
                    </button>

                    <button 
                    onClick={() => scrollToId('contact')}  
                    className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all 
                        duration-200 hover:-translate-y-0.5 hover: shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                    >
                        Contact me
                    </button>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}