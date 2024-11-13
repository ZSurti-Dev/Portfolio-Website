import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Code, Paintbrush, Server, User, Mail, Github, Linkedin } from 'lucide-react';

const FullPortfolioWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = ['home', 'about', 'tech-stack', 'api-development', 'portfolio', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - windowHeight / 2 && 
              scrollPosition < offsetTop + offsetHeight - windowHeight / 2) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md z-50 shadow-md">
        <ul className="flex justify-center space-x-4 p-4">
          {sections.map((section) => (
            <li key={section}>
              <Button
                variant={activeSection === section ? "default" : "ghost"}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="pt-20">
        <Section id="home">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-4">John Doe</h1>
            <h2 className="text-3xl text-gray-600">Full Stack Developer & UX/UI Designer</h2>
          </motion.div>
        </Section>

        <Section id="about">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <motion.img
              src="/api/placeholder/300/300"
              alt="John Doe"
              className="rounded-full w-64 h-64 object-cover mb-8 md:mb-0 md:mr-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm a passionate full stack developer and UX/UI designer with 5 years of experience
              creating beautiful, functional, and user-centered digital experiences. With a
              background in both design and development, I bridge the gap between aesthetics
              and functionality, ensuring that every project I work on is not only visually
              stunning but also technically sound.
            </motion.p>
          </div>
        </Section>

        <Section id="tech-stack">
          <h2 className="text-4xl font-bold mb-8">Tech Stack</h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Python', 'Docker', 'AWS', 'GraphQL'].map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-white rounded-lg shadow-md p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <img src={`/api/placeholder/50/50`} alt={tech} className="mx-auto mb-2" />
                <p className="font-semibold">{tech}</p>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <Section id="api-development">
          <h2 className="text-4xl font-bold mb-8">API Development</h2>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">RESTful API Showcase</h3>
            <p className="text-gray-700 mb-4">
              Explore my latest API project, demonstrating best practices in RESTful design,
              authentication, and documentation.
            </p>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>
                {`
GET /api/users
Authorization: Bearer <token>

Response:
{
  "users": [
    { "id": 1, "name": "Alice", "role": "admin" },
    { "id": 2, "name": "Bob", "role": "user" }
  ],
  "total": 2,
  "page": 1
}
                `}
              </code>
            </pre>
            <Button className="mt-4">View API Documentation</Button>
          </motion.div>
        </Section>

        <Section id="portfolio">
          <h2 className="text-4xl font-bold mb-8">Portfolio</h2>
          <Tabs defaultValue="frontend">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="ux-ui">UX/UI Design</TabsTrigger>
            </TabsList>
            {['frontend', 'backend', 'ux-ui'].map((category) => (
              <TabsContent key={category} value={category}>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {[1, 2, 3].map((project) => (
                    <Card key={project}>
                      <CardHeader>
                        <CardTitle>{`${category.charAt(0).toUpperCase() + category.slice(1)} Project ${project}`}</CardTitle>
                        <CardDescription>Brief project description</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <img src={`/api/placeholder/400/200`} alt={`Project ${project}`} className="w-full h-48 object-cover rounded-md" />
                      </CardContent>
                      <CardFooter>
                        <Button>View Details</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </Section>

        <Section id="contact">
          <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" rows={4} />
                <Button type="submit">Send Message</Button>
              </form>
            </motion.div>
            <motion.div
              className="flex-1 flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-4">
                <p className="flex items-center">
                  <Mail className="mr-2" /> johndoe@example.com
                </p>
                <p className="flex items-center">
                  <Github className="mr-2" /> github.com/johndoe
                </p>
                <p className="flex items-center">
                  <Linkedin className="mr-2" /> linkedin.com/in/johndoe
                </p>
              </div>
            </motion.div>
          </div>
        </Section>
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const Section = ({ id, children }) => (
  <section id={id} className="min-h-screen flex items-center justify-center py-16">
    <div className="container mx-auto px-4">
      {children}
    </div>
  </section>
);

export default FullPortfolioWebsite;
