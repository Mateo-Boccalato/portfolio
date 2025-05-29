import { use, useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    {name: "HTML/CSS", Level: 80, category: "Frontend"},
    {name: "JavaScript", Level: 70, category: "Frontend"},
    {name: "React", Level: 75, category: "Frontend"},
    {name: "Tailwind CSS", Level: 65, category: "Backend"},
    

    //Backend
    {name: "Java", Level: 90, category: "Backend"},
    {name: "Python", Level: 80, category: "Backend"},
    {name: "Node.js", Level: 60, category: "Backend"},

    //Tools
    {name: "Git/Github", Level: 70, category: "Tools"},
    {name: "Cursor", Level: 80, category: "Tools"},
    {name: "N8N" , Level: 70, category: "Tools"},

];

const categories =["all", "Frontend", "Backend", "Tools"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skills) => activeCategory === "all" || skills.category === activeCategory);
        
        
    

    return (
        <section id="skills" className="py-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl ">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                       <button key={key} 
                       onClick ={() => setActiveCategory(category)}
                       className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary textprimary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                       )}
                       >
                        {category}
                       </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skills,key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skills.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                                  style={{width: skills.Level + "%"}}
                                />
                                
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skills.Level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>    
        </section>
    );
}