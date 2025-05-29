import { Briefcase, Code, User } from "lucide-react";
export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl ">
            <h2 className=" text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-2 gap-12 items-center"> 
                <div className="space-y-6"> 
                    <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

                    <p className="text-muted-foreground">
                        I am a passionate web developer with a strong focus on creating engaging and user-friendly digital experiences.
                         My journey in web development has been driven by a love for coding and a desire to bring ideas to life through technology.
                    </p>
                    <p className="text-muted-foreground">
                        With a background in both front-end and back-end development, I enjoy tackling challenges and finding innovative solutions to complex problems.
                        My goal is to continuously learn and grow in this ever-evolving field, while delivering high-quality work that exceeds client expectations.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center text-center">
                    
                        <a href="#contact" className="cosmic-button">
                            {""}
                         Get in Touch
                        </a>

                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 tansition-colors duration-300">
                            Download Resume
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6"> 
                    <div className=" gradient-border p-6 card-hover"> 
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary-10"> 
                                <Code className="h-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development </h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive and interactive websites using modern technologies.
                                    </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary-10"> 
                                <User className="h-6 text-primary"/>
                            </div>
                             <div className="text-left">
                                    <h4 className="font-semibold text-lg"> UI/UX Design </h4>
                                    <p className="text-muted-foreground">
                                        Designing intuitive and visually appealing user interfaces for a seamless user experience.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary-10"> 
                                <Briefcase className="h-6 text-primary"/>
                            </div>
                             <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Preject Management </h4>
                                    <p className="text-muted-foreground">
                                        Leading projects from concept to completion, ensuring timely delivery and client satisfaction.
                                    </p>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
     </section>
    );
    
}