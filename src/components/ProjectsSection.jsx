import { ArrowRight, ExternalLink, Github,  } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Surf Trackz",
        description: "A web app for forecasting your next surf session at any surf spot in the world.",
        image: "/projects/project1.png",
        tags: ["React", "Node.js", "CSS"],
        githubUrl: "https://github.com/Mateo-Boccalato/Surf-trackz.git",
    }
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl"> 
                <h2 className="text-3xl  md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and creativity. Each project is a testament to my passion for coding and problem-solving.
                </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                    <div className="h-48 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/> 
                    </div>

                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span className="px-2 py-2 text-xs font-medium border rounded-full bg-primary opacity-85 text-secondary-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-1.5">{project.title}</h3>
                    <p className="text-muted-foreground text-small mb-4"> {project.description}</p>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                            <a href={project.githubUrl} className="text-foregound/80 hover:text-primary transition-colors duration-300" target="_blank">
                                <Github size={20}/>
                            </a>
                        </div>

                    </div>
                </div>
                ))}
            </div>

                <div classMame="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Mateo-Boccalato" target="_blank">
                        Check out my GitHub <ArrowRight size={16} />
                    </a>

                </div>

            </div>
        </section>
    );
}