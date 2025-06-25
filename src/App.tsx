import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  Code,
  ShoppingCart,
  Calendar,
  MapPin,
  ChevronDown,
  Github,
  ExternalLink,
  Terminal,
  Coffee,
  Zap,
  Users,
  Database,
  Globe,
  XIcon
} from "lucide-react"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import avatar from "@/assets/avatar.jpeg"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactForm = z.infer<typeof contactSchema>

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState<Partial<ContactForm>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // const validatedData = contactSchema.parse(formData)
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" })
      setFormErrors({})
      alert("Message sent successfully! I'll get back to you soon.")
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Partial<ContactForm> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            errors[err.path[0] as keyof ContactForm] = err.message
          }
        })
        setFormErrors(errors)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const techStack = [
    { name: "React", color: "border-blue-500 text-blue-400 bg-blue-500/10" },
    { name: "Next.js", color: "border-slate-400 text-slate-300 bg-slate-500/10" },
    { name: "TypeScript", color: "border-blue-600 text-blue-500 bg-blue-600/10" },
    { name: "Tailwind CSS", color: "border-cyan-500 text-cyan-400 bg-cyan-500/10" },
    { name: "Inertia.js", color: "border-purple-500 text-purple-400 bg-purple-500/10" },
    { name: "shadcn/ui", color: "border-slate-500 text-slate-400 bg-slate-500/10" },
    { name: "React Query", color: "border-red-500 text-red-400 bg-red-500/10" },
    { name: "Zustand", color: "border-orange-500 text-orange-400 bg-orange-500/10" },
    { name: "Zod", color: "border-indigo-500 text-indigo-400 bg-indigo-500/10" },
    { name: "Framer Motion", color: "border-pink-500 text-pink-400 bg-pink-500/10" },
    { name: "React Router", color: "border-green-500 text-green-400 bg-green-500/10" },
    { name: "MongoDB", color: "border-green-600 text-green-500 bg-green-600/10" },
    { name: "PostgreSQL", color: "border-blue-700 text-blue-600 bg-blue-700/10" },
    { name: "MySQL", color: "border-orange-600 text-orange-500 bg-orange-600/10" },
    { name: "SEO Optimization", color: "border-yellow-500 text-yellow-400 bg-yellow-500/10" },
    { name: "Performance Optimization", color: "border-emerald-500 text-emerald-400 bg-emerald-500/10" },
    { name: "Responsive Design", color: "border-teal-500 text-teal-400 bg-teal-500/10" },
    { name: "API Integration", color: "border-violet-500 text-violet-400 bg-violet-500/10" },
  ]

  const projects = [
       {
      title: "Scottish Borders Cashmere - Luxury E-commerce",
      description:
        "Premium e-commerce platform for luxury cashmere products with elegant design and smooth shopping experience.",
      tech: ["React", "Next.js", "shadcn/ui", "Framer Motion", "TypeScript"],
      type: "Luxury E-commerce",
      live: "https://scottishborderscashmere.com/",
      features: ["Luxury design", "Product showcase", "Smooth animations", "Premium UX"],
    },
    {
      title: "TG Wayon - Digital Platform",
      description:
        "A comprehensive digital platform built with modern React architecture, featuring responsive design and seamless user experience.",
      tech: ["React", "Zod", "shadcn/ui", "MySQL", "Tailwind CSS", "TypeScript"],
      type: "Web Application",
      live: "https://tgwayon.com/",
      features: ["Responsive design", "Modern UI/UX", "Performance optimized", "SEO friendly"],
    },
    {
      title: "Malla Treks - Tourism Platform",
      description:
        "Tourism and trekking platform showcasing Nepal's beautiful destinations with interactive features and booking capabilities.",
      tech: ["React", "Zod", "shadcn/ui", "React query", "Tailwind CSS", "TypeScript"],
      type: "Tourism Platform",
      live: "https://mallatreks.banil.com.np/",
      features: ["Interactive galleries", "Booking system", "Destination showcase", "Mobile responsive"],
    },
    {
      title: "Two Ace Solutions - Corporate Website",
      description:
        "Professional corporate website with modern design principles, showcasing services and company portfolio.",
      tech: ["React", "TypeScript", "shadcn/ui", "Framer Motion", "Tailwind CSS"],
      type: "Corporate Website",
      live: "https://twoacesolutions.com/",
      features: ["Professional design", "Service showcase", "Contact integration", "Fast loading"],
    },
    {
      title: "Tricot Nepal - E-commerce Platform",
      description:
        "E-commerce platform for textile products with product catalog, shopping cart, and order management system.",
      tech: ["React", "Tailwind CSS", "Zod", "React Query"],
      type: "E-commerce",
      live: "https://tricotnepal.com/",
      features: ["Product catalog", "Shopping cart", "Order management", "Payment integration"],
    },
    {
      title: "Yog Sewa - Wellness Platform",
      description:
        "Wellness and yoga service platform with class scheduling, instructor profiles, and service booking functionality.",
      tech: ["React", "Inertia.js", "Tailwind CSS", "TypeScript"],
      type: "Service Platform",
      live: "https://yogsewa.com/",
      features: ["Class scheduling", "Instructor profiles", "Service booking", "User dashboard"],
    },
 
    {
      title: "Bank Evaluation Management System",
      description:
        "Comprehensive internal software for banks to evaluate building, land, vehicle, plant and machinery assets. Provides fair market value assessment with detailed setback analysis for loan processing.",
      tech: ["React", "Inertia.js", "TypeScript", "Zod", "React Query"],
      type: "Internal Software",
      live: "#",
      features: ["Asset evaluation", "Fair market value calculation", "Setback analysis", "Report generation"],
    },
    {
      title: "Waste Management System",
      description:
        "Internal software solution for waste management operations including route optimization, collection tracking, and resource management with real-time monitoring capabilities.",
      tech: ["React", "TypeScript", "Tailwind CSS", "React Query"],
      type: "Internal Software",
      live: "#",
      features: ["Route optimization", "Collection tracking", "Resource management", "Real-time monitoring"],
    },
  ]

  const experience = [
    {
      year: "Early 2022 - Present",
      title: "Full-Stack React Developer",
      company: "Two Ace Solutions Pvt Ltd",
      description:
        "Leading development of complex web applications, e-commerce platforms, and internal software solutions. Specialized in React ecosystem with focus on performance optimization and user experience. Built all featured projects during this tenure.",
      achievements: [
        "Built 15+ production applications including e-commerce platforms",
        "Developed internal software for banks and waste management",
        "Improved client conversion rates by 40% through optimized UX",
        "Led frontend architecture decisions for multiple projects",
      ],
    },
    {
      year: "Late 2021",
      title: "Software Development Intern",
      company: "Tukisoft",
      description:
        "3-month internship focused on learning industry best practices and working on real-world projects. Gained hands-on experience with modern web development technologies and agile development processes.",
      achievements: [
        "Contributed to live projects using React and modern tools",
        "Learned industry-standard development workflows",
        "Collaborated with senior developers on code reviews",
      ],
    },
    {
      year: "Mid 2021",
      title: "Started Programming Journey",
      company: "Self-taught & College Project",
      description:
        "Began learning web development through documentation and online resources. Built first major project - a Homestay Management System for college, which sparked passion for software development.",
      achievements: [
        "Built Homestay Management System as first major project",
        "Self-taught React, JavaScript, and web development fundamentals",
        "Transitioned from beginner to intern-ready developer in 6 months",
      ],
    },
  ]

  const stats = [
    { label: "Projects Completed", value: "25+", icon: Code },
    { label: "Happy Clients", value: "15+", icon: Users },
    { label: "Years Experience", value: "3+", icon: Calendar },
    { label: "Technologies", value: "20+", icon: Database },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-teal-600/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23334155&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div
          className={`max-w-6xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl transform hover:scale-105 transition-transform duration-300 relative">
              <img
                src={avatar}
                alt="Pradip Gurung"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </div>
            {/* <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-slate-900 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div> */}
          </div>

          <div className="flex items-center justify-center gap-2 mb-4">
            <Terminal className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 font-mono">~/pradip-gurung</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent mb-4">
            Pradip Gurung
          </h1>

          <div className="flex items-center justify-center gap-2 mb-6">
            <Code className="w-5 h-5 text-slate-400" />
            <p className="text-xl md:text-2xl text-slate-300 font-mono"> Front-End Developer</p>
          </div>

          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Crafting exceptional web experiences with modern technologies. Specialized in React ecosystem, e-commerce
            solutions, and custom software development.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Code className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-full border-2 border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
            >
              <Coffee className="w-5 h-5 mr-2" />
              Let's Talk
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown
            className="w-8 h-8 text-slate-400 cursor-pointer hover:text-blue-400 transition-colors"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate frontend developer with 3+ years of experience specializing in React ecosystem. I focus
                on creating exceptional user experiences with modern technologies like React, Next.js, and Inertia.js.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                My journey started in lately 2021, and since then I've been obsessed with creating exceptional digital
                experiences using the latest technologies in the React ecosystem.
              </p>

              <div className="flex items-center gap-4 text-slate-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Based in Nepal 🇳🇵</span>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <Zap className="w-5 h-5 text-blue-400" />
                <span>Available for part time freelance projects</span>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Terminal className="w-6 h-6 text-blue-400" />
                Tech Stack & Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className={`px-4 py-2 border-2 ${tech.color} hover:scale-105 transition-all duration-300 cursor-default`}
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-400 mt-4">Some of my recent work that I'm proud of</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant="secondary"
                      className={`${
                        project.type === "E-commerce"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : project.type === "Custom Software"
                            ? "bg-purple-500/20 text-purple-400 border-purple-500/30"
                            : project.type === "Developer Tool"
                              ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                              : "bg-orange-500/20 text-orange-400 border-orange-500/30"
                      }`}
                    >
                      {project.type === "E-commerce" ? (
                        <ShoppingCart className="w-4 h-4 mr-1" />
                      ) : project.type === "Developer Tool" ? (
                        <Terminal className="w-4 h-4 mr-1" />
                      ) : project.type === "Web Application" ? (
                        <Globe className="w-4 h-4 mr-1" />
                      ) : (
                        <Code className="w-4 h-4 mr-1" />
                      )}
                      {project.type}
                    </Badge>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white p-2" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs bg-slate-700/50 text-slate-300 border-slate-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-slate-400">
                        <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Professional Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-blue-500/50"></div>
                  {index < experience.length - 1 && <div className="w-0.5 h-32 bg-slate-700 mt-4"></div>}
                </div>

                <div className="flex-1 pb-8">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <Badge
                        variant="outline"
                        className="w-fit mt-2 md:mt-0 bg-blue-500/20 text-blue-400 border-blue-500/30"
                      >
                        {exp.year}
                      </Badge>
                    </div>
                    <p className="text-blue-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-slate-300 mb-4">{exp.description}</p>
                    <div className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-2 text-sm text-slate-400">
                          <Zap className="w-3 h-3 text-blue-400" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Build Something Amazing</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-400 mt-4">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors duration-300">
                <CardContent className="px-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <a
                        href="mailto:gprdp07@gmail.com"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        gprdp07@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors duration-300">
                <CardContent className="px-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Phone</h4>
                      <a href="tel:+9779826153033" className="text-green-400 hover:text-green-300 transition-colors">
                        +977 9826153033
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors duration-300">
                <CardContent className="px-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Location</h4>
                      <span className="text-slate-300">Nepal 🇳🇵</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Links */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="px-6">
                  <h4 className="text-white font-medium mb-4">Connect With Me</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/iamprdp-git"target="_blank"

                      className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                    >
                      <Github className="w-5 h-5 text-slate-400 group-hover:text-white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/pradip-gurung-066359200/"
                      target="_blank"
                      className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                    >
                      <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://x.com/gprdp07"
                      className="w-10 h-10  bg-slate-700 hover:bg-white rounded-lg flex items-center justify-center transition-colors duration-300 group"
                    >
                      <XIcon className="w-5 h-5 text-slate-400 group-hover:text-black"/>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  Send Message
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-300">
                        Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                        placeholder="Your name"
                      />
                      {formErrors.name && <p className="text-red-400 text-sm">{formErrors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-300">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                        placeholder="your.email@example.com"
                      />
                      {formErrors.email && <p className="text-red-400 text-sm">{formErrors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-slate-300">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                      placeholder="What's this about?"
                    />
                    {formErrors.subject && <p className="text-red-400 text-sm">{formErrors.subject}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 min-h-[120px]"
                      placeholder="Tell me about your project..."
                    />
                    {formErrors.message && <p className="text-red-400 text-sm">{formErrors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-slate-900 border-t border-slate-700 text-center">
        <p className="text-slate-500">&copy; {new Date().getFullYear()} Pradip Gurung. All rights reserved.</p>
      </footer>
    </div>
  )
}
