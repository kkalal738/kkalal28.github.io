import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  ChevronRight,
  Moon,
  Sun,
  Layers,
  Zap,
  Coffee,
  Phone,
  User,
  MessageSquare,
  BadgeCheck,
  Server,
  Cloud,
  GitBranch,
  Settings,
  Box,
  Activity,
  FileCode,
  Trello,
  Monitor,
  ChevronDown,
  Send,
  X,
  Bot,
  Sparkles,
  Sword
} from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:block"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovering ? 1.5 : 1,
        rotate: isHovering ? 45 : 0,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
    >
      <div className="w-full h-full border border-primary/50 bg-primary/10 rounded-sm backdrop-blur-[1px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
    </motion.div>
  );
};

const RESUME_CONTENT = `
KARTIK R KALAL
Pune, Maharashtra, India
Email: kkalal738@gmail.com | Phone: +91 9763162408
LinkedIn: https://www.linkedin.com/in/kartik-kalal-33855411b

PROFESSIONAL SUMMARY
Experienced DevOps & SRE professional with nearly 6 years of expertise in designing, deploying, and managing scalable infrastructure across cloud-native environments, primarily on Google Cloud Platform (GCP). Proven track record in implementing robust CI/CD pipelines, enhancing system reliability, and driving significant cloud cost savings through FinOps best practices.

PROFESSIONAL EXPERIENCE

Senior Consultant DevOps Engineer | Thoughtworks (Jan 2026 - Present)
- Leading Cloud Transformation and DevOps excellence.
- Specializing in Distributed Systems, Cloud Architecture, and FinOps strategies for global enterprise clients.

Senior DevOps Engineer | Egen (Oct 2025 - Jan 2026)
- Focused on building resilient infrastructure and automating deployment pipelines.
- Specialized in Cloud-Native solutions and System Reliability Engineering.

FinOps + DevOps Engineer | Global Payments (Jan 2024 - Oct 2025)
- Designed and implemented an automated VM Autoparking solution using Cloud Functions and Cloud Scheduler, delivering $2.8M+ in recurring savings.
- Built automation to delete idle persistent disks, leading to $350K in cost savings.
- Developed a policy-based automation framework using Cloud Custodian.
- Spearheaded cleanup of unused resources resulting in $2.5M+ in cloud spend reduction.
- Executed rightsizing strategies achieving $850K in additional savings.

Devops/SRE engineer | Vodafone Intelligent solutions (_VOIS) (Jul 2019 - Jan 2024)
- Automated cloud infrastructure provisioning and management using Terraform.
- Monitored and maintained cloud infrastructure to resolve operational issues.
- Developed alerting and monitoring solutions for high availability.
- Implemented cost optimization strategies resulting in $180K reduction.
- Worked extensively with GCP data services including Dataproc, Dataflow, BigQuery, GCS.

CORE SKILLS
- FinOps Tools: Cloud Health, Turbonomics, GCP billing, Asset inventory, Looker Dashboards
- Cloud Platforms: GCP, AWS
- CI/CD: Jenkins, GCP Devops services
- IaC: Terraform, Docker, Kubernetes
- Scripting: Python, Bash

CERTIFICATIONS
- GCP Professional Devops Engineer
- GCP Professional Data Engineer
- GCP Associate Cloud Engineer
- GCP Cloud Digital Leader

EDUCATION
Bachelors of Engineering in Computer Science - Savitribai Phule University (2015 - 2019)
`.trim();

const handleDownloadResume = () => {
  const blob = new Blob([RESUME_CONTENT], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Kartik_Kalal_Resume.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const Navbar = ({ isDark, toggleDark }: { isDark: boolean, toggleDark: () => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass dark:bg-background/60 bg-white/40 border-b border-primary/10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
          <span className="text-primary-foreground font-bold text-sm">KK</span>
        </div>
        <span className="font-mono font-medium tracking-tight text-foreground">kartik.kalal</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#experience" className="hover:text-primary transition-colors relative group">
          Experience
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
        </a>
        <a href="#projects" className="hover:text-primary transition-colors relative group">
          Projects
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
        </a>
        <a href="#contact" className="hover:text-primary transition-colors relative group">
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
        </a>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={toggleDark} className="hover:bg-primary/10 text-primary">
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>
        <Button variant="outline" size="sm" className="hidden sm:flex border-primary/20 hover:bg-primary/10 text-primary font-bold" onClick={handleDownloadResume}>
          Resume
        </Button>
      </div>
    </nav>
  );
};

const SectionArrow = ({ href }: { href: string }) => {
  return (
    <div className="flex justify-center py-12 relative">
      <motion.a
        href={href}
        initial={{ y: 0, opacity: 0.4 }}
        whileHover={{ opacity: 1, scale: 1.2 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="group flex flex-col items-center -space-y-3 text-primary no-underline cursor-pointer"
      >
        <ChevronDown className="w-8 h-8 stroke-[1.5px]" />
        <ChevronDown className="w-8 h-8 stroke-[1.5px] opacity-40" />
      </motion.a>
    </div>
  );
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<{ role: 'bot' | 'user', content: string, action?: string }[]>([
    { role: 'bot', content: "Yo! I'm Naruto, your guide here. Believe it! How can I help you navigate my world today? 🍥" }
  ]);
  const [input, setInput] = useState('');
  const scrollEndRef = React.useRef<HTMLDivElement>(null);

  const genAI = React.useMemo(() => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return null;
    return new (GoogleGenAI as any)(apiKey);
  }, []);

  useEffect(() => {
    if (isOpen && scrollEndRef.current) {
      const timeoutId = setTimeout(() => {
        scrollEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isTyping) return;

    const userMessage = { role: 'user' as const, content: text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      if (!genAI) {
        throw new Error("API Key missing");
      }

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      const systemPrompt = `You are Naruto Uzumaki, the protagonist of the Naruto series. 
      You are acting as a guide for Kartik Kalal's portfolio website. 
      Your personality: Energetic, determined, optimistic, and you often say "Believe it!" (or "Dattebayo!").
      
      Knowledge about Kartik:
      - He is a Senior DevOps Engineer at Thoughtworks.
      - He is a GCP Certified Associate Cloud Engineer and Cloud Digital Leader.
      - He has 5+ years of experience in cloud infrastructure, automation, and CI/CD.
      - He loves building scalable systems and exploring new technologies.
      - His projects include "CloudScale Pro", "AutoDeploy Engine", and "SecureVault".
      - He is based in Pune, India.
      
      Instructions:
      - Keep responses concise and in character.
      - If asked about Kartik's work, experience, or contact info, guide them to the relevant sections of the page.
      - Use emojis like 🍥, 🦊, 🤜🤛, ⚡.
      - If you don't know something, tell them to contact Kartik directly.`;

      const chat = model.startChat({
        history: messages.map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }],
        })),
        generationConfig: {
          maxOutputTokens: 200,
        },
      });

      const result = await chat.sendMessage(`${systemPrompt}\n\nUser: ${text}`);
      const response = await result.response;
      const responseText = response.text();

      setMessages(prev => [...prev, { role: 'bot', content: responseText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      // Fallback to mock logic if API fails
      setTimeout(() => {
        const query = text.toLowerCase();
        let fallbackContent = "That's a tough one! I don't have that info here, but you can send a direct message to Kartik. He's the real Hokage here! 🦊";
        
        if (query.includes('connect') || query.includes('contact')) {
          fallbackContent = "Want to team up? Head over to the contact section and let's start our mission! 🤜🤛";
        } else if (query.includes('work') || query.includes('project')) {
          fallbackContent = "Check out my Jutsu! I mean, my projects. They're all right here in the Selected Works section. ⚡";
        }
        
        setMessages(prev => [...prev, { role: 'bot', content: fallbackContent }]);
      }, 600);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] h-[500px] max-h-[calc(100vh-120px)] bg-card border border-primary/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden glass"
          >
            {/* Header */}
            <div className="p-4 border-b border-primary/10 bg-primary/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=200&auto=format&fit=crop" 
                    alt="Naruto" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Naruto Bot</h4>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Online</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full hover:bg-primary/10">
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4 min-h-0">
              <div className="space-y-4 pb-4">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: msg.role === 'bot' ? -10 : 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === 'bot' 
                        ? 'bg-secondary/50 text-foreground rounded-tl-none border border-primary/10' 
                        : 'bg-primary text-primary-foreground rounded-tr-none shadow-md shadow-primary/20'
                    }`}>
                      {msg.content}
                      {msg.action && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {msg.action === 'contact' && (
                            <Button variant="outline" size="sm" className="h-7 text-[10px] rounded-full bg-background/50 border-primary/30 hover:bg-primary hover:text-white transition-all" nativeButton={false} render={<a href="#contact" />}>
                              Go to Contact
                            </Button>
                          )}
                          {msg.action === 'projects' && (
                            <Button variant="outline" size="sm" className="h-7 text-[10px] rounded-full bg-background/50 border-primary/30 hover:bg-primary hover:text-white transition-all" nativeButton={false} render={<a href="#projects" />}>
                              View Projects
                            </Button>
                          )}
                          {msg.action === 'experience' && (
                            <Button variant="outline" size="sm" className="h-7 text-[10px] rounded-full bg-background/50 border-primary/30 hover:bg-primary hover:text-white transition-all" nativeButton={false} render={<a href="#experience" />}>
                              See Experience
                            </Button>
                          )}
                          {msg.action === 'resume' && (
                            <Button variant="outline" size="sm" className="h-7 text-[10px] rounded-full bg-background/50 border-primary/30 hover:bg-primary hover:text-white transition-all" onClick={handleDownloadResume}>
                              Download Resume
                            </Button>
                          )}
                          {msg.action === 'get-in-touch' && (
                            <ContactModal>
                              <Button variant="outline" size="sm" className="h-7 text-[10px] rounded-full bg-background/50 border-primary/30 hover:bg-primary hover:text-white transition-all">
                                Get in Touch
                              </Button>
                            </ContactModal>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-secondary/50 border border-primary/10 p-3 rounded-2xl rounded-tl-none flex gap-1">
                      <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </motion.div>
                )}
                <div ref={scrollEndRef} />
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-primary/10 bg-primary/5 flex gap-2">
              <Input 
                placeholder="Ask me anything..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="rounded-full bg-background/50 border-primary/20 focus-visible:ring-primary"
              />
              <Button size="icon" onClick={() => handleSend()} className="rounded-full shrink-0 shadow-lg shadow-primary/20">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-primary shadow-2xl shadow-primary/40 flex items-center justify-center border-2 border-white/20 relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary/50" />
        <motion.div
          animate={{ rotate: isOpen ? 135 : 45 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative z-10"
        >
          <Sword className="w-8 h-8 text-primary-foreground drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
        </motion.div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse z-20" />
      </motion.button>
    </div>
  );
};

const ContactModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger render={children} />
      <DialogContent className="sm:max-w-[500px] rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold">Get in Touch</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill out the form below and I'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input id="name" placeholder="Your Name" className="pl-10 rounded-xl" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input id="email" type="email" placeholder="email@example.com" className="pl-10 rounded-xl" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact">Contact Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input id="contact" placeholder="+91 9823415245" className="pl-10 rounded-xl" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Why are you reaching out?</Label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Textarea id="message" placeholder="Tell me more..." className="pl-10 min-h-[100px] rounded-xl" />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Button type="submit" className="rounded-full px-8">Send Message</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Hero = () => {
  return (
    <section id="about" className="relative pt-40 pb-32 px-6 overflow-hidden">
      {/* Dynamic Background Elements for Light Mode */}
      <div className="absolute inset-0 -z-10 overflow-hidden dark:hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[45%] h-[45%] rounded-full bg-secondary/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-indigo-400/20 blur-[120px]" 
        />
        
        {/* "Live Photo" Background Effect */}
        <div className="absolute inset-0 opacity-10">
          <motion.img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground dark:text-muted-foreground text-primary/80 font-bold">
            Available for new projects
          </span>
        </div>
        
        <h1 className="text-6xl md:text-[10rem] font-heading font-bold leading-[0.85] tracking-tighter mb-12">
          Kartik <br />
          <span className="text-muted-foreground/20 dark:text-muted-foreground/20 text-primary/10">Kalal.</span>
        </h1>

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <p className="text-2xl md:text-3xl font-light leading-tight tracking-tight text-foreground/90">
              Senior Consultant <span className="font-medium underline decoration-primary/30 underline-offset-8">DevOps Engineer</span> at Thoughtworks. 
              Specializing in Distributed Systems and Cloud Architecture. Expert in Cloud Cost Optimization and FinOps with a continuous learning mindset and an AI-first approach.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col justify-end gap-6">
            <p className="text-muted-foreground text-sm max-w-xs dark:text-muted-foreground text-foreground/70">
              Based in Pune, Maharashtra, India. Working with global teams to solve complex problems through technology and design.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="rounded-full px-6 font-mono text-[10px] uppercase tracking-wider border-primary/20 hover:bg-primary/10" nativeButton={false} render={<a href="https://www.linkedin.com/in/kartik-kalal-33855411b" target="_blank" rel="noopener noreferrer" />}>
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="rounded-full px-6 font-mono text-[10px] uppercase tracking-wider border-primary/20 hover:bg-primary/10" nativeButton={false} render={<a href="https://github.com" target="_blank" rel="noopener noreferrer" />}>
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

interface BentoFlipItemProps {
  key?: React.Key;
  item: {
    title: string;
    description: string;
    icon: React.ReactNode;
    className: string;
    backContent?: React.ReactNode;
  };
}

const BentoFlipItem = ({ item }: BentoFlipItemProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`relative perspective-1000 cursor-pointer group h-full ${item.className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative h-full w-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped && item.backContent ? 180 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Front */}
        <div className="absolute inset-0 h-full w-full backface-hidden rounded-3xl border border-primary/10 bg-card p-8 flex flex-col justify-between overflow-hidden dark:bg-card bg-white/80 dark:border-primary/10 border-primary/20 shadow-xl shadow-primary/5">
          <div className="p-3 bg-primary/10 rounded-2xl w-fit border border-primary/20 text-primary shadow-inner shadow-primary/20">
            {item.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 tracking-tight font-sans dark:text-foreground text-primary">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-sans dark:text-muted-foreground text-foreground/70">{item.description}</p>
          </div>
          {/* Light Mode Accent */}
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl dark:hidden" />
        </div>

        {/* Back */}
        {item.backContent && (
          <div 
            className="absolute inset-0 h-full w-full backface-hidden rounded-3xl border border-primary/30 bg-card p-8 flex flex-col overflow-hidden"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-primary/20 pb-2 font-mono dark:text-primary text-primary/80">{item.title}</h3>
            <ScrollArea className="h-full pr-4">
              <div className="font-sans text-sm leading-relaxed dark:text-foreground/90 text-foreground/80 pb-10">
                {item.backContent}
              </div>
            </ScrollArea>
          </div>
        )}
      </motion.div>
    </div>
  );
};

const BentoGrid = () => {
  const expertiseData = [
    { category: "FinOps Tools", items: "CloudHealth, Turbonomics, GCP Billing, Asset Inventory, Active Assist, Looker Dashboards" },
    { category: "Cloud Platforms", items: "GCP, AWS" },
    { category: "Version Control", items: "Git, GitHub" },
    { category: "CI/CD Tools", items: "Jenkins, GCP DevOps Services" },
    { category: "Config Management", items: "Terraform" },
    { category: "Containerization", items: "Docker, Kubernetes" },
    { category: "IaC", items: "Terraform" },
    { category: "Monitoring & Logging", items: "GCP Logging, Monitoring" },
    { category: "Scripting", items: "Python, Bash Script" },
    { category: "Issue Tracking", items: "Rally, Jira" },
    { category: "Operating Systems", items: "Linux, Unix, Windows, MacOS" }
  ];

  const certifications = [
    "KCNA: Kubernetes and Cloud Native Associate",
    "GCP Generative AI Leader",
    "GCP ACE: Associate Cloud Engineer",
    "GCP Cloud DevOps: Professional Cloud DevOps Engineer",
    "GCP CDL: Cloud Digital Leader"
  ];

  const items = [
    {
      title: "Technical Stack",
      description: "Cloud-native, DevOps, and FinOps expertise with an AI-first approach.",
      icon: <Terminal className="w-6 h-6" />,
      className: "md:col-span-2 md:row-span-2",
      backContent: (
        <div className="space-y-4">
          {expertiseData.map((skill, i) => (
            <div key={i}>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 font-mono">{skill.category}</h4>
              <p className="text-xs leading-relaxed font-medium font-sans">{skill.items}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Philosophy",
      description: "Clean code, TDD, and Domain-Driven Design.",
      icon: <Code2 className="w-6 h-6" />,
      className: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Current Focus",
      description: "Building strategy for AWS, AI adoption, and architectural designs.",
      icon: <Cpu className="w-6 h-6" />,
      className: "md:col-span-1 md:row-span-1",
      backContent: (
        <div className="space-y-4">
          <p className="text-xs leading-relaxed font-sans">
            My current focus is on building a new strategy towards mastering emerging technologies and optimizing cloud ecosystems:
          </p>
          <ul className="space-y-2">
            {[
              "Learning new technologies like AWS",
              "Adoption of AI-first methodologies",
              "Exploring advanced FinOps strategies",
              "Deep diving into Architectural Designs"
            ].map((point, i) => (
              <li key={i} className="flex gap-2 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                <span className="text-xs font-medium font-sans">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: "Certifications",
      description: "KCNA, GCP GenAI Leader, GCP ACE, GCP DevOps, GCP CDL.",
      icon: <BadgeCheck className="w-6 h-6" />,
      className: "md:col-span-1 md:row-span-1",
      backContent: (
        <div className="space-y-3">
          {certifications.map((cert, i) => (
            <div key={i} className="flex gap-2 items-start">
              <BadgeCheck className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary" />
              <p className="text-[10px] leading-tight font-medium font-sans">{cert}</p>
            </div>
          ))}
        </div>
      )
    },
  ];

  return (
    <section className="px-6 py-32 max-w-6xl mx-auto">
      <div className="bento-grid">
        {items.map((item, i) => (
          item.backContent ? (
            <BentoFlipItem key={i} item={item} />
          ) : (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`p-8 rounded-3xl border border-primary/10 flex flex-col justify-between bg-card/50 backdrop-blur-sm ${item.className}`}
            >
              <div className="p-3 bg-primary/10 rounded-2xl w-fit border border-primary/20 text-primary">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 tracking-tight font-sans">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans">{item.description}</p>
              </div>
            </motion.div>
          )
        ))}
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "Thoughtworks",
      role: "Senior Consultant DevOps Engineer",
      period: "Jan 2026 — Present",
      description: "Leading Cloud Transformation and DevOps excellence. Specializing in Distributed Systems, Cloud Architecture, and FinOps strategies for global enterprise clients.",
      tags: ["DevOps", "Cloud Architecture", "FinOps", "Distributed Systems"]
    },
    {
      company: "Egen",
      role: "Senior DevOps Engineer",
      period: "Oct 2025 — Jan 2026",
      description: "Focused on building resilient infrastructure and automating deployment pipelines. Specialized in Cloud-Native solutions and System Reliability Engineering.",
      tags: ["GCP", "Kubernetes", "Terraform", "CI/CD"]
    },
    {
      company: "Global Payments Inc.",
      role: "FinOps + DevOps Engineer",
      period: "Jan 2024 — Oct 2025",
      description: "Implemented an automated VM Autoparking solution delivering $2.8M+ in recurring savings. Built automation to delete idle disks leading to $350K in savings. Developed a policy-based framework using Cloud Custodian for governance and cost control.",
      tags: ["GCP", "Python", "Cloud Custodian", "FinOps"]
    },
    {
      company: "VOIS",
      role: "Devops/SRE engineer",
      period: "Jul 2019 — Jan 2024",
      description: "Automated cloud infrastructure using Terraform. Managed GCP data services including Dataproc and BigQuery. Implemented cost optimization strategies resulting in $180K reduction and improved system reliability through SRE practices.",
      tags: ["Terraform", "GCP", "SRE", "BigQuery"]
    }
  ];

  return (
    <section id="experience" className="px-6 py-32 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground sticky top-24">
            Professional Path
          </h2>
        </div>
        <div className="md:col-span-8 space-y-24">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6">
                <h3 className="text-3xl font-bold tracking-tight dark:text-foreground text-primary">{exp.role}</h3>
                <span className="text-sm font-mono text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-xl font-medium text-foreground/80 mb-4 dark:text-foreground/80 text-foreground">{exp.company}</p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl dark:text-muted-foreground text-foreground/70">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {exp.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono uppercase tracking-widest dark:text-muted-foreground/60 text-primary/70 border dark:border-muted-foreground/20 border-primary/20 bg-primary/5 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  key?: React.Key;
  project: {
    title: string;
    details: string;
    image: string;
    tags: string[];
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[300px] w-full perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative h-full w-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className="absolute inset-0 h-full w-full backface-hidden rounded-3xl overflow-hidden border border-primary/10 bg-card dark:bg-card bg-white/80 shadow-lg shadow-primary/5">
          <img 
            src={project.image} 
            alt={project.title} 
            className="object-cover w-full h-1/2 transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
            referrerPolicy="no-referrer"
          />
          <div className="p-8 relative">
            <h3 className="text-xl font-sans font-bold mb-2 tracking-tight dark:text-foreground text-primary">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span key={tag} className="text-[10px] font-mono uppercase text-primary font-bold bg-primary/5 px-2 py-0.5 rounded">
                  #{tag}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 italic font-medium font-sans dark:text-muted-foreground text-foreground/60">Click to flip for details</p>
            {/* Light Mode Accent */}
            <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-secondary/10 rounded-full blur-xl dark:hidden" />
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 h-full w-full backface-hidden rounded-3xl border border-primary/30 bg-card p-8 flex flex-col overflow-hidden"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-primary/20 pb-2 font-mono text-primary">{project.title}</h3>
          <ScrollArea className="h-full pr-4">
            <div className="font-sans text-sm leading-relaxed text-foreground/90 pb-10">
              {project.details}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary" className="text-[9px] uppercase font-mono bg-primary/10 text-primary border-primary/20">
                  {tag}
                </Badge>
              ))}
            </div>
          </ScrollArea>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AutoPark VM",
      details: "Using GCP Scheduler, Cloud Functions, and a Python script, VMs with specific labels are automatically parked based on label values for start and stop time. This optimizes Cloud Resource usage and reduces costs significantly.",
      image: "https://picsum.photos/seed/cloud-server/1200/800",
      tags: ["GCP", "Python", "FinOps"],
    },
    {
      title: "Automatic Disk Deletion",
      details: "Using GCP Scheduler, Cloud Functions, and Python, idle disks with specific labels are identified and deleted. Before deletion, a snapshot is taken with a date-stamped name to preserve data, and notifications are sent to the owner.",
      image: "https://picsum.photos/seed/data-storage/1200/800",
      tags: ["GCP", "Automation", "Cost Optimization"],
    },
    {
      title: "Cloud Custodian VM",
      details: "A VM with Cloud Custodian installed using YAML-based scripts to cater to diverse FinOps and Governance use cases: AutoParking, idle resource deletion, and identifying buckets without versioning using labels.",
      image: "https://picsum.photos/seed/cyber-security/1200/800",
      tags: ["Cloud Custodian", "YAML", "Governance"],
    }
  ];

  return (
    <section id="projects" className="relative px-6 py-32 max-w-6xl mx-auto overflow-hidden">
      {/* Light Mode Background Accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden dark:hidden">
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] rounded-full bg-secondary/10 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-heading font-bold flex items-center gap-4 dark:text-foreground text-primary">
          <Zap className="w-8 h-8 text-primary animate-pulse" />
          Selected Works
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="px-6 py-20 border-t border-border dark:bg-background bg-primary/5 relative overflow-hidden">
      {/* Light Mode Accent */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 dark:hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-heading font-bold mb-6 dark:text-foreground text-primary">
            Let's build something <span className="italic text-secondary">extraordinary</span> together.
          </h2>
          <div className="space-y-4 mb-8">
            <p className="text-muted-foreground text-lg dark:text-muted-foreground text-foreground/70">
              Currently based in India, working globally. Always open to discussing 
              interesting projects or technical challenges.
            </p>
            <div className="space-y-2 font-mono text-sm dark:text-foreground text-primary/80">
              <p className="flex items-center gap-2"><User className="w-4 h-4" /> Kartik Kalal</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 9763162408</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> whysohard@gmail.com</p>
            </div>
          </div>
          <ContactModal>
            <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
              Get in touch
            </Button>
          </ContactModal>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="flex gap-8 text-sm font-mono dark:text-foreground text-primary/70">
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/kartik-kalal-33855411b" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
          <div className="text-right mt-12 md:mt-0">
            <p className="text-sm text-muted-foreground flex items-center gap-2 justify-end dark:text-muted-foreground text-foreground/60">
              Built with <Coffee className="w-3 h-3 text-secondary" /> by Kartik Kalal
            </p>
            <p className="text-[10px] text-muted-foreground/50 mt-1 uppercase tracking-widest">
              © 2026 — ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground transition-colors duration-300 cursor-none">
      <CustomCursor />
      <Navbar isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
      
      <main>
        <Hero />
        <SectionArrow href="#experience" />
        <Separator className="max-w-6xl mx-auto opacity-50 dark:bg-border bg-gradient-to-r from-transparent via-primary/50 to-transparent h-[1px]" />
        <BentoGrid />
        <Experience />
        <SectionArrow href="#projects" />
        <Projects />
        <SectionArrow href="#contact" />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}
