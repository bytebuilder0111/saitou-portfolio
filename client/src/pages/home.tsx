import { motion } from "framer-motion";
import { 
  MapPin, 
  Mail, 
  Github, 
  Linkedin, 
  Globe, 
  Download, 
  ExternalLink,
  Code,
  Database,
  Server,
  Cpu,
  Smartphone,
  Monitor,
  Layout,
  Terminal,
  BarChart3,
  Zap,
  Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

// Assets
import avatarImage from "@assets/generated_images/professional_headshot_of_a_japanese_male_software_engineer.png";
import heroBg from "@assets/generated_images/subtle_light_tech_abstract_background.png";
import healthcareImg from "@assets/stock_images/healthcare_data_anal_f4bf1d81.jpg";
import chatbotImg from "@assets/stock_images/ai_chatbot_automatio_203ad61f.jpg";
import logisticsImg from "@assets/stock_images/logistics_delivery_t_f0b43fde.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const scaleInUp = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

const rotateInUp = {
  hidden: { opacity: 0, rotateX: -20, y: 30 },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const hoverScale = {
  whileHover: { scale: 1.05, transition: { duration: 0.3 } }
};

const hoverLift = {
  whileHover: { y: -8, transition: { duration: 0.3 } }
};

const SectionHeading = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-12">
    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">{subtitle}</h3>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight">SH.</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#skills" className="hover:text-black transition-colors">Skills</a>
            <a href="#experience" className="hover:text-black transition-colors">Experience</a>
            <a href="#projects" className="hover:text-black transition-colors">Projects</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </div>
          <Button className="rounded-none bg-black text-white hover:bg-transparent hover:text-black hover:border-black border border-transparent transition-all duration-300">
            Hire Me
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <motion.div variants={fadeInUp} className="w-full md:w-1/2 text-center md:text-left">
              <div className="inline-block mb-4 px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold tracking-widest uppercase">
                Senior Software Engineer
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
                Saitou<br/>Haruki
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Python • JavaScript • C# • PHP • AWS
                <br/>
                <span className="text-slate-400 text-base mt-2 block">
                  ⚡ 30% Performance Boost Across Full Stack
                </span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                  <Button size="lg" onClick={() => { document.getElementById("experience")?.scrollIntoView({ behavior: "smooth }); }} className="rounded-none bg-black text-white hover:bg-transparent hover:text-black hover:border-black border border-transparent transition-all duration-300 px-8 h-12 text-base">
                    View Experience
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                  <Button size="lg" variant="outline" onClick={() => { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth }); }} className="rounded-none border-slate-300 hover:bg-transparent hover:text-black hover:border-black transition-all duration-300 px-8 h-12 text-base">
                    Contact Me
                  </Button>
                </motion.div>
              </div>
              
              <div className="mt-12 flex items-center justify-center md:justify-start gap-6 text-slate-400">
                <MapPin size={20} />
                <span className="text-sm font-medium text-slate-500">Shinjuku, Tokyo, Japan</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
                <div className="absolute inset-0 border-2 border-slate-200 translate-x-4 translate-y-4 z-0" />
                <img 
                  src={avatarImage} 
                  alt="Saitou Haruki" 
                  className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 z-10 shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <SectionHeading subtitle="About" title="Crafting Solutions That Scale" />
            
            <div className="prose prose-lg text-slate-600 leading-relaxed">
              <p className="mb-6">
                I'm a Senior Software Engineer with 5+ years of experience working across the full stack in SaaS, healthcare, and fintech. I enjoy taking complex problems and turning them into simple, reliable solutions that feel good to use.
              </p>
              <p className="mb-6">
                Whether I'm working on backend services, frontend features, or cloud infrastructure, I focus on clean, maintainable code and products that scale smoothly.
              </p>
              <p>
                Across two major companies, I've helped ship new features, improve performance, and modernize legacy systems. I've built APIs, optimized databases, created user-facing interfaces, and worked on cloud deployments. I like collaborating with product, design, and other engineers to move projects forward.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <SectionHeading subtitle="Expertise" title="Skills & Technologies" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                {
                  title: "Frontend",
                  icon: Monitor,
                  skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"]
                },
                {
                  title: "Backend",
                  icon: Server,
                  skills: ["Python", "Django", "FastAPI", "Node.js", "PHP (Laravel)"]
                },
                {
                  title: "Database",
                  icon: Database,
                  skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite"]
                },
                {
                  title: "Cloud",
                  icon: Cpu,
                  skills: ["AWS", "Docker", "Git", "CI/CD", "Linux"]
                }
              ].map((category, i) => (
                <motion.div key={i} variants={fadeInUp} className="space-y-6">
                  <motion.div className="flex items-center gap-3 mb-4" whileHover={{ x: 8 }} transition={{ duration: 0.3 }}>
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                      <category.icon size={24} className="text-slate-900" />
                    </motion.div>
                    <h4 className="font-bold text-xl">{category.title}</h4>
                  </motion.div>
                  <ul className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <motion.li 
                        key={skill} 
                        className="flex items-center gap-3 text-slate-600 border-b border-slate-100 pb-2 cursor-pointer"
                        whileHover={{ x: 6, color: "#000" }}
                        transition={{ duration: 0.2 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ transitionDelay: `${idx * 0.05}s` }}
                      >
                        <motion.div className="w-1.5 h-1.5 bg-slate-300 rounded-full" whileHover={{ scale: 1.5 }} />
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <SectionHeading subtitle="Career" title="Experience & Education" />

            <div className="space-y-12 border-l-2 border-slate-200 pl-8 md:pl-12 relative">
              {[
                {
                  company: "Fusic Inc.",
                  role: "Senior Software Engineer",
                  period: "Sep 2022 - Present",
                  desc: [
                    "Built and maintained scalable full-stack applications for healthcare clients.",
                    "Integrated OpenAI models into customer support platforms, reducing workload by 40%.",
                    "Improved client reporting accuracy by 30% through new visualization dashboards."
                  ]
                },
                {
                  company: "Future Spirits Co., Ltd.",
                  role: "Backend Developer",
                  period: "Oct 2019 - Aug 2022",
                  desc: [
                    "Developed full stack solutions for logistics applications.",
                    "Improved API throughput by 25% through refactoring and caching.",
                    "Built ETL processes handling 2M+ records monthly."
                  ]
                },
                {
                  company: "Tokyo University of Technology",
                  role: "Bachelor's Degree, Computer Science",
                  period: "Aug 2014 - May 2018",
                  desc: [
                    "Comprehensive training in core CS principles, algorithms, and data structures.",
                    "Capstone project: Web-based data visualization platform."
                  ]
                }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="relative" whileHover="hover">
                  <motion.div className="absolute -left-[41px] md:-left-[57px] top-2 w-5 h-5 bg-white border-4 border-slate-300 rounded-full" whileHover={{ scale: 1.4 }} transition={{ duration: 0.3 }} />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{item.company}</h3>
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">{item.period}</span>
                  </div>
                  
                  <h4 className="text-lg font-medium text-slate-700 mb-4">{item.role}</h4>
                  
                  <ul className="space-y-2">
                    {item.desc.map((point, j) => (
                      <li key={j} className="text-slate-600 leading-relaxed flex gap-3">
                        <span className="text-slate-300 mt-1.5">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <SectionHeading subtitle="Portfolio" title="Featured Projects" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "YourWorld",
                  category: "Healthcare Platform",
                  desc: "Healthcare data management and analytics platform for patient tracking and medical data visualization.",
                  tags: ["Data Analytics", "Healthcare", "Cloud"],
                  image: healthcareImg,
                  url: "https://www.yourworld.co"
                },
                {
                  title: "ServisBot",
                  category: "Customer Service",
                  desc: "AI-powered customer service chatbot for automated support and intelligent query handling.",
                  tags: ["AI", "Chatbot", "Automation"],
                  image: chatbotImg,
                  url: "https://servisbot.com/customer-service/m/"
                },
                {
                  title: "Ramco Logistics",
                  category: "Logistics Software",
                  desc: "Integrated logistics management system for 3PLs, courier services, and supply chain operations.",
                  tags: ["Logistics", "SaaS", "Supply Chain"],
                  image: logisticsImg,
                  url: "https://www.ramco.com/products/logistics-software/"
                }
              ].map((project, i) => (
                <motion.div key={i} variants={scaleInUp} whileHover={{ y: -12, transition: { duration: 0.3 } }}>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                    <motion.div className="h-64 w-full mb-6 relative overflow-hidden border border-slate-100 flex items-center justify-center" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                      <motion.img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }} />
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300" />
                    </motion.div>
                    
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                      {project.category}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                      {project.title}
                      <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {project.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="rounded-none bg-slate-100 text-slate-600 font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-20">
              <motion.h3 variants={fadeInUp} className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Get in Touch</motion.h3>
              <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
                Let's Work<br/>Together
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                I'm always excited about new challenges and opportunities. Reach out and let's create something amazing together.
              </motion.p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div 
                variants={slideInLeft}
                whileHover={{ y: -8 }}
                className="bg-slate-50 border border-slate-200 p-10 flex items-start gap-6"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.6 }} className="flex-shrink-0 w-16 h-16 bg-slate-900 text-white flex items-center justify-center">
                  <Mail size={28} />
                </motion.div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Email</h4>
                  <a href="mailto:saitouharuki1031@gmail.com" className="text-slate-600 hover:text-black transition-colors font-medium">
                    saitouharuki1031@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                variants={slideInRight}
                whileHover={{ y: -8 }}
                className="bg-slate-50 border border-slate-200 p-10 flex items-start gap-6"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.6 }} className="flex-shrink-0 w-16 h-16 bg-slate-900 text-white flex items-center justify-center">
                  <MapPin size={28} />
                </motion.div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Location</h4>
                  <p className="text-slate-600 font-medium">
                    Shinjuku, Tokyo<br/>Japan
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form Section */}
            <motion.div variants={fadeInUp} className="bg-slate-900 text-white p-12 md:p-16">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold mb-2">Send Me a Message</h3>
                <p className="text-slate-400 mb-12">I'll get back to you as soon as possible.</p>

                <motion.form className="space-y-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div className="space-y-2" variants={fadeInUp}>
                      <motion.label className="text-sm font-bold uppercase tracking-wider text-slate-300" whileHover={{ x: 4 }}>Full Name</motion.label>
                      <motion.div whileHover={{ boxShadow: "0 0 30px rgba(255,255,255,0.1)" }} transition={{ duration: 0.3 }}>
                        <Input 
                          placeholder="Your name" 
                          className="bg-slate-800 border-slate-700 text-white placeholder-slate-500 rounded-none h-12 focus:ring-0 focus:border-white focus:bg-slate-700 transition-all" 
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div className="space-y-2" variants={fadeInUp}>
                      <motion.label className="text-sm font-bold uppercase tracking-wider text-slate-300" whileHover={{ x: 4 }}>Email Address</motion.label>
                      <motion.div whileHover={{ boxShadow: "0 0 30px rgba(255,255,255,0.1)" }} transition={{ duration: 0.3 }}>
                        <Input 
                          placeholder="your@email.com" 
                          className="bg-slate-800 border-slate-700 text-white placeholder-slate-500 rounded-none h-12 focus:ring-0 focus:border-white focus:bg-slate-700 transition-all" 
                        />
                      </motion.div>
                    </motion.div>
                  </div>

                  <motion.div className="space-y-2" variants={fadeInUp}>
                    <motion.label className="text-sm font-bold uppercase tracking-wider text-slate-300" whileHover={{ x: 4 }}>Subject</motion.label>
                    <motion.div whileHover={{ boxShadow: "0 0 30px rgba(255,255,255,0.1)" }} transition={{ duration: 0.3 }}>
                      <Input 
                        placeholder="What's this about?" 
                        className="bg-slate-800 border-slate-700 text-white placeholder-slate-500 rounded-none h-12 focus:ring-0 focus:border-white focus:bg-slate-700 transition-all" 
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div className="space-y-2" variants={fadeInUp}>
                    <motion.label className="text-sm font-bold uppercase tracking-wider text-slate-300" whileHover={{ x: 4 }}>Message</motion.label>
                    <motion.div whileHover={{ boxShadow: "0 0 30px rgba(255,255,255,0.1)" }} transition={{ duration: 0.3 }}>
                      <Textarea 
                        placeholder="Tell me more about your project..." 
                        className="bg-slate-800 border-slate-700 text-white placeholder-slate-500 rounded-none min-h-[150px] focus:ring-0 focus:border-white focus:bg-slate-700 transition-all resize-none" 
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <motion.button 
                      whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(255,255,255,0.2)" }} 
                      whileTap={{ scale: 0.97 }} 
                      className="w-full h-14 rounded-none bg-white text-slate-900 hover:bg-slate-100 border-2 border-white font-bold text-lg transition-all duration-300"
                    >
                      Send Message
                    </motion.button>
                  </motion.div>
                </motion.form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
