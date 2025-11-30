
import ResponsiveAppBar from "../../Components/AppBar/ResponsiveAppBar"
import audio_final_blog from "./../../assets/audio_final_blog.mp3"
import pic from "./../../assets/pic.jpg"
import skill from "./../../assets/Skills.png"


import "./HomePage.css"

const skillsData = [
  { category: "🔐 Offensive Security", skills: ["Penetration Testing", "OSINT", "Exploitation", "Vulnerability Assessment", "Red Team Operations", "Exploit Development"] },
  { category: "🛡️ Defensive Security", skills: ["Network Security", "System Hardening", "Security Architecture", "Incident Response", "MITRE ATT&CK", "Security Monitoring"] },
  { category: "💻 Programming & Scripting", skills: ["Python", "JavaScript", "BASH", "PowerShell", "SQL"] },
  { category: "🌐 Web Technologies", skills: ["MERN Stack", "React.js", "Node.js", "Express.js", "HTML/CSS", "Material UI"] },
  { category: "📱 Mobile & Cross-Platform", skills: ["Flutter", "Dart", "Android Development", "Cross-Platform Development"] },
  { category: "🗄️ Database & Backend", skills: ["MongoDB", "MySQL", "Firebase", "Express.js", "Django", "Laravel"] },
  { category: "🔧 Security Tools & Frameworks", skills: ["Docker", "Nginx", "AWS EC2", "GitHub", "Security Testing Tools", "MITRE ATT&CK Framework"] },
  { category: "🚀 Open Source Contributions", skills: ["OWASP ZAP Extension Developer", "Community Contributor", "Security Tools Development", "Bug Bounty", "Vulnerability Disclosure"] },
  { category: "🎓 Certifications & Training", skills: ["OSCP (Enrolled)", "CRTP", "CEH Practical", "Google Cybersecurity", "Practical Ethical Hacking", "MITRE ATT&CK Foundation"] }
];

const projectsData = [
  {
    name: "OWASP ZAP Browser Extension",
    description: "Open source contributor to OWASP ZAP - contributing security enhancements and features to the industry-leading web security testing tool",
    link: "https://github.com/zaproxy/zap-extensions",
    tech: ["JavaScript", "Security", "Open Source", "Web Security"],
    icon: "🔓"
  },
  {
    name: "Social Media Management",
    description: "Full-stack MERN app for social media post generation with media editor, GPT integration & post scheduling",
    link: "https://one.digtl.biz/",
    tech: ["MERN", "GPT API", "Nginx"],
    icon: "📱"
  },
  {
    name: "Learning Management System",
    description: "Coursera-like LMS with admin dashboard, React UI, Node/Express backend & MySQL database",
    link: "https://learning.ibc.media/",
    tech: ["React", "Node.js", "MySQL", "Material UI"],
    icon: "📚"
  },
  {
    name: "MPOS - Point of Sale System",
    description: "Flutter-based POS system with auto-print, admin dashboard & Android kiosk integration",
    link: "https://github.com/Yogi-Codes/MPOS",
    tech: ["Flutter", "PHP", "Laravel"],
    icon: "💳"
  },
  {
    name: "Kalyani VANET",
    description: "Vehicular Ad-hoc Network simulation using OMNET++, VEINS & Sumo simulator on Kalyani map",
    link: "https://github.com/Yogi-Codes/Kalyani-VANET",
    tech: ["OMNET++", "VEINS", "Network Simulation"],
    icon: "🚗"
  },
  {
    name: "KnowIt Portfolio & Blog",
    description: "MERN-based portfolio & personal blog website with Firebase integration",
    link: "https://github.com/Yogi-Codes/KnowIt-App",
    tech: ["MERN", "Firebase", "React Router"],
    icon: "🎯"
  },
  {
    name: "Bookmark App",
    description: "Bookmark manager with beautiful UI, localStorage persistence & intuitive interface",
    link: "https://github.com/Yogi-Codes/BookmarkApp",
    tech: ["React", "localStorage", "CSS3"],
    icon: "🔖"
  },
  {
    name: "The Darkist CTF Box",
    description: "Capture The Flag security challenge using MITRE ATT&CK Framework guidelines",
    link: "https://github.com/Yogi-Codes/The-Darkist-Box",
    tech: ["BASH", "Security", "CTF"],
    icon: "🔐"
  }
];

const HomePage = () => {

    var toggle=true;
    var aud = new Audio(audio_final_blog);

    function play() {
        if (toggle) {
            aud.play();
            toggle=false
        } else {
            aud.pause();
            toggle=true
        }
    }

   
return (<div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}} >

    <ResponsiveAppBar>KnowIt</ResponsiveAppBar>
   
<div style={{display:"flex",justifyContent:"flex-start" , width:"100vw"}}>
 <i  className="butto" style={{backgroundColor:"black",position:"absolute", top:"100px"}}  onClick={play}>&#x266B;</i> 
 </div>
   
<div id="container" style={{backgroundColor:"#0F0F0F", width:"60vw", height:"60vh",zIndex:"0",top:"200px", position:"fixed", overflowY: "scroll",overflowX:"hidden"}}>

{/* PAGE 1 - INTRO (KEEP INTACT) */}
<div style={{display:"flex", justifyContent:"space-evenly",alignItems:"center", flexWrap:"wrap",height:"60vh",width:"60vw", minHeight: "60vh" }} >
<div style={{display:"flex", justifyContent:"space-evenly",alignItems:"center", flexWrap:"wrap",height:"60vh",width:"60vw"}} >
    <div style={{
      alignItems:"flex-start",
      width:"30vw",
      height:"30vh",
      border: "2px solid #4CAF50",
      borderRadius: "8px",
      display:"flex",
      flexDirection: "column",
      justifyContent:"flex-start",
      padding: "15px",
      backgroundColor: "rgba(10, 10, 10, 0.8)",
      boxShadow: "0 0 20px rgba(76, 175, 80, 0.3), inset 0 0 10px rgba(76, 175, 80, 0.05)",
      fontFamily: "Courier New, monospace",
      position: "relative"
    }}>
      <div style={{
        position: "absolute",
        top: "0",
        right: "0",
        width: "12px",
        height: "12px",
        backgroundColor: "#4CAF50",
        borderRadius: "2px",
        margin: "8px"
      }}></div>
      <div style={{color:"#4CAF50", fontSize: "0.85vw", fontWeight: "bold", marginBottom: "8px", letterSpacing: "2px"}}>
        $ kali@yogi-codes
      </div>
      <div style={{color:"#7ec850", fontSize: "0.75vw", marginBottom: "12px", opacity: 0.8}}>
        ~/portfolio
      </div>
      <h1 style={{color:"#4CAF50", className: "text1", margin: "0", fontSize: "1vw", fontWeight: "300", letterSpacing: "1px", marginBottom: "8px"}}>
        ▸ whoami
      </h1>
      <h1 className="text1 t2" style={{color: "#b0e57c", margin: "0", fontSize: "1.8vw", fontWeight: "bold", marginBottom: "8px", textShadow: "0 0 10px rgba(76, 175, 80, 0.4)"}}>
        Anik Ghosh
      </h1>
      <p style={{color:"#7ec850", fontSize: "0.8vw", margin: "4px 0", fontWeight: "500"}}>
        Security Automation Engineer
      </p>
      <p style={{color:"#4CAF50", fontSize: "0.75vw", margin: "0", opacity: 0.8}}>
        @ BreachLock, Inc.
      </p>
      <div style={{
        marginTop: "12px",
        paddingTop: "12px",
        borderTop: "1px solid rgba(76, 175, 80, 0.2)",
        fontSize: "0.7vw",
        color: "#7ec850",
        fontStyle: "italic"
      }}>
        IIIT Kalyani | Cybersecurity & MERN Stack
      </div>
      <div style={{
        marginTop: "auto",
        color: "#4CAF50",
        fontSize: "0.8vw",
        letterSpacing: "2px"
      }}>
        <span className="blinking-cursor2">▌</span>
      </div>
    </div>

    <div style={{position: "relative", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <div style={{
        position: "absolute",
        width: "250px",
        height: "250px",
        borderRadius: "50%",
        background: "radial-gradient(circle at 30% 30%, rgba(76, 175, 80, 0.2), transparent 70%)",
        filter: "blur(20px)"
      }}></div>
      <img src={`${pic}`} alt="pic" className="cropped1" style={{
        position: "relative",
        zIndex: 1,
        boxShadow: "0 0 30px rgba(76, 175, 80, 0.4), inset 0 0 20px rgba(76, 175, 80, 0.1)"
      }} />
    </div>

    <div style={{
      width:"60vw",
      padding: "20px",
      backgroundColor: "rgba(10, 10, 10, 0.6)",
      border: "1px solid rgba(76, 175, 80, 0.1)",
      borderRadius: "8px",
      fontFamily: "Courier New, monospace"
    }}>
      <div style={{color: "#4CAF50", fontSize: "0.8vw", marginBottom: "10px", letterSpacing: "1px"}}>
        $ cat /dev/mind
      </div>
      <div style={{color: "#b0e57c", fontSize: "0.85vw", lineHeight: "1.6", fontWeight: "500"}}>
        <div>🔐 Penetration Testing & Vulnerability Assessment</div>
        <div>🛡️  Security Automation & Incident Response</div>
        <div>💻 Full-Stack Web Development (MERN)</div>
        <div>🎯 OSINT & Security Research</div>
        <div style={{color: "#7ec850", marginTop: "8px", fontSize: "0.75vw", opacity: 0.8}}>
          Powered by Python | JavaScript | BASH | Security Tools
        </div>
      </div>
    </div>

    <div style={{
      alignItems:"center",
      display:"flex",
      justifyContent:"center",
      width:"60vw",
      marginTop: "15px"
    }}>
      <h1 className="text2 blinking-cursor curs" style={{
        color: "#4CAF50",
        margin: 0,
        fontSize: "3vw",
        textShadow: "0 0 20px rgba(76, 175, 80, 0.5)"
      }}>↓</h1>
    </div>
</div>
</div>

{/* PAGE 2 - SKILLS (MODERN REDESIGN) */}
<div style={{minHeight: "60vh", width:"60vw", padding: "40px 20px", backgroundColor: "#0a0a0a"}} className="skills-page">
  <div style={{marginBottom: "30px"}}>
    <h1 style={{color: "#4CAF50", fontSize: "2.5vw", marginBottom: "10px", textShadow: "0 0 10px rgba(76, 175, 80, 0.3)"}}>
      🛠️ Technical Skills
    </h1>
    <div style={{height: "2px", width: "150px", background: "linear-gradient(90deg, #4CAF50, transparent)", marginBottom: "30px"}}></div>
  </div>

  <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px"}}>
    {skillsData.map((skillGroup, idx) => (
      <div key={idx} style={{
        backgroundColor: "rgba(76, 175, 80, 0.05)",
        border: "1px solid rgba(76, 175, 80, 0.2)",
        borderRadius: "8px",
        padding: "15px",
        transition: "all 0.3s ease",
        cursor: "pointer"
      }} 
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(76, 175, 80, 0.1)";
        e.currentTarget.style.boxShadow = "0 0 15px rgba(76, 175, 80, 0.2)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(76, 175, 80, 0.05)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}>
        <h3 style={{color: "#4CAF50", marginBottom: "10px", fontSize: "0.95vw", fontWeight: "600"}}>
          {skillGroup.category}
        </h3>
        <div style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
          {skillGroup.skills.map((skill, sidx) => (
            <span key={sidx} style={{
              backgroundColor: "rgba(76, 175, 80, 0.15)",
              color: "#b0e57c",
              padding: "4px 10px",
              borderRadius: "20px",
              fontSize: "0.75vw",
              border: "1px solid rgba(76, 175, 80, 0.3)",
              fontWeight: "500"
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

{/* PAGE 3 - PROJECTS (MODERN CARD LAYOUT) */}
<div style={{minHeight: "60vh", width:"60vw", padding: "40px 20px", backgroundColor: "#0f0f0f"}} className="projects-page">
  <div style={{marginBottom: "30px"}}>
    <h1 style={{color: "#4CAF50", fontSize: "2.5vw", marginBottom: "10px", textShadow: "0 0 10px rgba(76, 175, 80, 0.3)"}}>
      💻 Featured Projects
    </h1>
    <div style={{height: "2px", width: "150px", background: "linear-gradient(90deg, #4CAF50, transparent)", marginBottom: "30px"}}></div>
  </div>

  <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
    {projectsData.map((project, idx) => (
      <div key={idx} style={{
        backgroundColor: "rgba(76, 175, 80, 0.03)",
        border: "1px solid rgba(76, 175, 80, 0.15)",
        borderRadius: "10px",
        padding: "20px",
        transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(76, 175, 80, 0.08)";
        e.currentTarget.style.boxShadow = "0 0 20px rgba(76, 175, 80, 0.25), inset 0 0 0 1px rgba(76, 175, 80, 0.3)";
        e.currentTarget.style.transform = "translateX(5px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(76, 175, 80, 0.03)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateX(0)";
      }}>
        <div style={{display: "flex", alignItems: "start", gap: "15px"}}>
          <div style={{fontSize: "2.5vw", minWidth: "40px"}}>
            {project.icon}
          </div>
          <div style={{flex: 1}}>
            <a href={project.link} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
              <h3 style={{color: "#4CAF50", marginBottom: "5px", fontSize: "1.1vw", transition: "all 0.3s ease"}}>
                {project.name}
              </h3>
            </a>
            <p style={{color: "#bbb", fontSize: "0.85vw", marginBottom: "10px", lineHeight: "1.5"}}>
              {project.description}
            </p>
            <div style={{display: "flex", flexWrap: "wrap", gap: "6px"}}>
              {project.tech.map((tech, tidx) => (
                <span key={tidx} style={{
                  backgroundColor: "rgba(76, 175, 80, 0.2)",
                  color: "#7ec850",
                  padding: "3px 8px",
                  borderRadius: "4px",
                  fontSize: "0.7vw",
                  border: "0.5px solid rgba(76, 175, 80, 0.4)"
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

</div>

    </div>)

}



export default HomePage;
