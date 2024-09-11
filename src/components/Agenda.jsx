import { useState, useEffect } from "react";
import Modal from "./Modal";

import Nav from "./Navbar/Nav";

import Hero from "./HeroSection/Hero";
import Bottom from "./bottonSection/Bottom";

const jsonData = {
  header: {
    logo: "/one.webp",
    navList: ["Summary", "What to Expect", "Agenda", "Speakers", "Sponsors"],
  },
  HeroPage: {
    image: "/public/three.webp",
    text: "hello",
  },
  agenda: [
    {
      time: "08:30 IST",
      sessions: [
        {
          title: "General Session (GEN01-P)",
          time: "08:30-11:25",
          category: "General Session",
          text1: "Opening Performance by our Guest Artists",
          text2: "Welcome & Introduction by Our Host - Mandira Bedi",
          text3: "Welcome Address by our Leadership",
          text4: "Thought Leadership (The Next Now) Session",
          subtext4:
            "Alok Ohrie, President & Managing Director, Dell Technologies India",
          text5: "Thought Leadership (Next Starts Now) Session",
          subtext5:
            "Peter Marrs, President, Asia Pacific & Japan, Dell Technologies",
          text6:
            "Panel Discussion: The Al Transformation: Navigating Challenges, Embracing Opportunities",
          subtext6_1:
            "Vamsi Krishna Ithamraju, CIO, Axis Asset Management Company Limited",
          subtext6_2: "Srikanth Nagaraj, CIO, Honeywell Inc.",
          subtext6_3: "Gyan Pandey, CIO, Voltas Ltd.",
          subtext6_4: "K S Narayanan, CIO, PWC)",
          subtext6_5: "Venkat Sitaram, Enterprise, Dell Technologies",
          subtext6_7: "Moderated by Devina Lason, Editor, ET B2B Verticals",
          text7: "Introduction & Felicitation Nxt Gen Innovators",
          text8: "Closing Remarks | Transition to Expo",
          atend: "In-Person",
        },
      ],
    },

    {
      time: "13:10 IST",
      sessions: [
        {
          title: "Dell AI Factory: Enter the AI era with confidence (AI01-P)",
          time: "13:10-13:40",
          category: "ΑΙ",
          slot: "Theater 1",
          details:
            "The artificial intelligence (AI) revolution is underway. Data usage, demands and AI use cases will reshape industries. The data center must be reinvented to account for AI and deliver value from data, at scale. The Dell AI Factory brings together the necessary building blocks—a focus on data, AI-optimized technologies, open ecosystems, expert services and best practices—all to help organizations accelerate their AI innovation. In this session, we will explore the AI Factory and show how it can support all your AI needs.",
          atend: "In-Person",
        },

        {
          title:
            "Getting Started with Generative Al and the Dell Al Factory with NVIDIA (AI08-P)",
          time: "13:10-13:40",
          category: "ΑΙ",
          slot: "Theater 3",
          details:
            "Join our session to dive into the world of Gen AI and get equipped with insights and skills to apply Gen AI to your business.  We’ll address the challenges of leveraging Large Language Models (LLMs) and how to solve them with Retrieval-Augmented Generation (RAG). We’ll also cover the benefits of NVIDIA AI Enterprise software and the simplification of model packaging and deployment with NVIDIA NIM inference microservices. Lastly, we’ll introduce the Dell AI Factory with NVIDIA, a comprehensive solution integrating software, accelerated compute, and services for implementing Gen AI.",
          atend: "In-Person",
        },

        {
          title:
            "Cutting-edge technology meets sustainability for the Al era (MW04-P)",
          time: "113:10-13:40",
          category: "Modern Workplac...",
          slot: "Theater 2",
          details:
            "Artificial intelligence (AI) is a revolutionary technology that may require massive computational power. A circular approach to product design and recovery is critical. Explore pivotal advancements in circular design through materials innovation, emissions mitigation",
          atend: "In-Person",
        },

        {
          title:
            "Accelerate Al innovation with Dell APEX multicloud by design (MCA01-P)",
          time: "13:10-13:40",
          category: "Multicloud & aaS f...",
          slot: "Theater 4",
          details:
            "Artificial intelligence (AI) is a transformative leap, unlocking new possibilities to revolutionize employee productivity and catalyze business innovation. Taking a multicloud approach is advantageous for piloting and deploying production Generative AI (GenAI) and other AI workloads across private, hybrid and public clouds to meet use-case and model requirements. Learn how the Dell APEX multicloud by design strategy empowers you to bring AI to your data to simplify and accelerate your AI innovation.",
          atend: "In-Person",
        },
      ],
    },

    {
      time: "13:15 IST",
      sessions: [
        {
          title:
            "Dell Learning’s GenAI Foundation Training & Digital Badge Program",
          time: "13:15-15:45",
          category: "ΑΙ",
          slot: "Theater 5",
          text1: "• Understanding the Concepts of AI and ML",
          text2: "• Large Language Model Concepts",
          text3: "• Building an AI Ecosystem",
          text4: "• Dell GenAI Foundations",
          atend: "In-Person",
        },

        {
          title:
            "The Next Generation of Leaders: Passion, Purpose and Leveling the Playing Field",
          time: "13:15-14:15",
          category: "",
          slot: "Theater 6",
          details:
            "Women are shattering glass ceilings and stereotypes more than ever, making their mark as entrepreneurs, founding successful businesses, and rising in the ranks of leadership, but there is still work to be done to overcome challenges and bridge the gaps needed for success. Join us for an engaging panel discussion with trailblazing, inspirational women as we explore how the landscape for women in business is evolving and how to continue to rise in your professional journey. Pull in customized WE Cities datapoints for each city, spotlighting the findings and angling the Q&A around them and the particular needs for that region Pull in data points relevant for women in leadership who aren't necessarily entrepreneurs.",
        },
      ],
    },

    {
      time: "13:40 IST",
      sessions: [
        {
          title:
            "GenAI model development: Best practices for using Meta Llama models with AI (AI03-P)",
          time: "13:40-14:10",
          category: "ΑΙ",
          slot: "Theater 1",
          details:
            "Customized open-source, Generative AI (GenAI) models like Llama 3 are poised to transform nearly every industry. Training Llama 3 models with your businesses' proprietary data empowers you with strategic insights, accelerates workflows, and helps improve the accuracy of your results. In this session, learn best practices for integrating  GPU-accelerated servers like Dell PowerEdge XE9680, Dell Precision workstations and AI devices, along with Dell PowerScale all-flash storage and Dell Open Networking, to enable custom Llama 3-model development in an open ecosystem.",
          atend: "In-Person",
        },

        {
          title:
            "Accelerate AI innovation at the edge with Dell NativeEdge (EDG01-P)",
          time: "13:40-14:10",
          category: "Edge for Al",
          slot: "Theater 3",
          details:
            "Artificial intelligence (AI) at the edge is revolutionizing real-time decision-making and business outcomes. In this session, learn how Dell NativeEdge redefines Edge AI with Zero Trust security and Zero Touch provisioning. Get insights into managing edge resources easily and securely through a single pane of glass. Discover how NativeEdge streamlines operations and strengthens security, making it simpler to manage and expand AI capabilities and other applications at the edge.",
          atend: "In-Person",
        },

        {
          title: "Designing modern data centers purpose-built for AI (MDC01-P)",
          time: "113:40-14:10",
          category: "Modern Data Cent...",
          slot: "Theater 2",
          details:
            "The convergence of multicloud, edge computing, and artificial intelligence (AI) presents transformative prospects for technology-driven organizations. To seize these opportunities, a robust infrastructure foundation is essential for unlocking data potential and ensuring business continuity. Learn how Dell can help you accelerate innovation and simplify AI adoption with a modern data center that’s smart, flexible and resilient to meet the needs of today, tomorrow and whatever comes next.",
          atend: "In-Person",
        },

        {
          title: "Modernizing the Workplace with Dell AI Technologies (MW01-P)",
          time: "13:40-14:10",
          category: "Multicloud & aaS for",
          slot: "Theater 4",
          details:
            "Artificial intelligence (AI) is a transformative leap, unlocking new possibilities to revolutionize employee productivity and catalyze business innovation. Taking a multicloud approach is advantageous for piloting and deploying production Generative AI (GenAI) and other AI workloads across private, hybrid and public clouds to meet use-case and model requirements. Learn how the Dell APEX multicloud by design strategy empowers you to bring AI to your data to simplify and accelerate your AI innovation.",
          atend: "In-Person",
        },
      ],
    },

    {
      time: "14:10 IST",
      sessions: [
        {
          title:
            "Embedding Sustainability in the IT Lifecycle: AI, Circular Design, and Climate Action (AI06-P)",
          time: "14:10-14:40",
          category: "AI",
          slot: "Theater 3",
          details:
            "Hear how Intel® is enabling AI across every enterprise, with an open, standards-based approach that allows you to build and deploy applications on the hardware of your choice – from millions of Intel AI PCs shipped, to our latest Intel® Gaudi® 3 AI accelerator for high performance GenAI training and inference.",
          atend: "In-Person",
        },

        {
          title: "The risks and rewards of AI in cybersecurity (AI04-P)",
          time: "14:10-14:40",
          category: "AI",
          slot: "Theater 1",
          details:
            "Artificial intelligence (AI) promises to deliver tremendous growth, development and profitability to organizations everywhere. From a cybersecurity standpoint, however, AI presents both risks and opportunities. On the one hand, AI has the potential to revolutionize cybersecurity tools, from improved threat detection and predictive capabilities to simplifying the way you interact with your IT environments and strengthen your security posture. Conversely, AI and especially Generative AI (GenAI), can make attacks more sophisticated through enhanced social engineering—and even corrupt the results of AI applications. Join us as we dig into both the risks and rewards of AI and provide actionable strategies to help you maximize the power of AI for cybersecurity.",
          atend: "In-Person",
        },

        {
          title:
            "PowerEdge: Driving core modernization for businesses using AI (MDC02-P)",
          time: "14:10-14:40",
          category: "Modern Data Cent...",
          slot: "Theater 2",
          details:
            "Discover how purpose-built Dell PowerEdge compute platforms can modernize core AI-ready infrastructure, unleashing the performance, manageability, and security gains needed to drive today's demanding workloads. From core data centers to edge to cloud, learn how PowerEdge can accelerate your innovation with artificial intelligence (AI) and deliver greater insights with Generative AI (GenAI) to drive faster business transformation.",
          atend: "In-Person",
        },

        {
          title:
            "Microsoft Session: Revolutionize your workplace: Introducing a new era in AI (MW05-P)",
          time: "14:10-14:40",
          category: "Modern Workplac...",
          slot: "Theater 4",
          details:
            "Join Microsoft for an exciting journey with Copilot and Windows 11 Pro AI PCs!  Discover the keys to strong security, smooth collaboration, and optimal productivity. This session is your opportunity to explore a world where technology and human creativity combine, empowering your team to achieve more. Prepare to change your digital environment and access a future of limitless potential. Don't let this chance pass you by - the future has arrived!",
          atend: "In-Person",
        },
      ],
    },

    {
      time: "14:40 IST",
      sessions: [
        {
          title: "Best practices for building your AI Factory (AI05-P)",
          time: "14:40-15:10",
          category: "ΑΙ",
          slot: "Theater 4",
          details:
            "The possibilities of artificial intelligence (AI) are endless. You need a systematic approach to maximize impact and make the most from your investments. In this session, we’ll explain best practices in the Dell AI Factory to accelerate your progress at every stage, from engagement with your business stakeholders through use case evaluation, solution deployment, adoption and ongoing operations. We’ll also illustrate how Dell Digital, the Dell IT organization, leveraged Dell Services to implement this approach.",
          atend: "In-Person",
        },

        {
          title: "Intel Session: Bringing AI Everywhere (AI07-P)",
          time: "14:40-15:10",
          category: "ΑΙ",
          slot: "Theater 2",
          details:
            "Hear how Intel® is enabling AI across every enterprise, with an open, standards-based approach that allows you to build and deploy applications on the hardware of your choice – from millions of Intel AI PCs shipped, to our latest Intel® Gaudi® 3 AI accelerator for high performance GenAI training and inference.",
          atend: "In-Person",
        },

        {
          title:
            "Primed and ready: Eight new PowerStore advantages for an Al-accelerated world (MDC06-P)",
          time: "14:40-15:10",
          category: "Modern Data Cent...",
          slot: "Theater 3",
          details:
            "Based on Dell's Future-Proof program that offers 5:1 data reduction guarantee based on PowerMax data reduction tools (dedupe and data compression) for open systems storage, August 2023. Actual data reduction rates will vary. Additional terms and conditions apply. See details at: https://www.delltechnologies.com/asset/en-us/products/storage/legal-pricing/future-proof-dr-guarantee-tc.pdf.",
          atend: "In-Person",
        },

        {
          title:
            "Secure, manage and scale your business with cutting-edge technologies (MW03-P)",
          time: "14:40-15:10",
          category: "Modern Workplac...",
          slot: "Theater 1",
          details:
            "With organizations investing in artificial intelligence (AI), it’s more important than ever to ensure device and data security and implement a strategy spanning the complete PC lifecycle. We will discuss how you can simplify and automate endpoint management with intelligent, telemetry-driven device configuration. Learn how you can get foundational security with Dell Trusted Workspace, and invest in the latest PCs and services at no upfront cost with Dell APEX PC-as-a-Service. And we will show you how to reduce the attack surface and unlock valuable capital while staying focused on winning business.",
          atend: "In-Person",
        },
      ],
    },

    {
      time: "15:10 IST",
      sessions: [
        {
          title: "Getting your data ready for AI (AI02-P)",
          time: "15:10-15:40",
          category: "ΑΙ",
          slot: "Theater 1",
          details:
            "If artificial intelligence (AI) is your rocket ship, your data is the fuel. But discovering, accessing and preparing data for AI remains challenging. Many organizations are struggling with data silos, proprietary data formats, lack of secure access and inefficient IT architecture to properly fuel the rocket ship. Join us as we discuss how Dell Data Lakehouse can help you unlock the value of your data and drive innovation into action. We will also talk about our full team of trained AI and industry experts that can help you from the start. From AI strategy development to data preparation and use-case deployment, learn how Dell can help you leverage AI to meet your business needs.",
          atend: "In-Person",
        },

        {
          title:
            "Dell AI-Ready Data Platform: Your AI innovations start here (MDC04-P)",
          time: "15:10-15:40",
          category: "Modern Data Cent...",
          slot: "Theater 2",
          details:
            "You already possess the most critical ingredient to take advantage of artificial intelligence (AI): The diverse, valuable data you store and access every day. This includes the fast-growing category of unstructured data, such as images, videos, documents, and audio. Join us to discover the power of combining AI-optimized storage and data management into one holistic IT strategy using Dell AI-Ready Data Platform. Bring AI to all your data—on-premises, at the edge or in the cloud—all with the highest performance and nearly limitless scale.",
          atend: "In-Person",
        },

        {
          title:
            "Bring AI to your data—from ground to cloud and back—with Dell APEX (MCA03-P)",
          time: "15:10-15:40",
          category: "Multicloud & aas f...",
          slot: "Theater 3",
          details:
            "Artificial intelligence (AI) models are only as good as the data behind them. Data-intensive AI workloads require low latency and high performance, and they must run where data resides—on-premises, across clouds, and at the edge. Join us to hear how the Dell APEX Storage for Public Cloud family brings enterprise-class storage to public clouds. We will discuss how data mobility and a consistent user experience can help you deploy the right resources in the right place based on your unique multicloud AI strategy.",
          atend: "In-Person",
        },

        {
          title:
            "Microsoft Session: Hybrid and Multicloud Innovation with Azure Stack HCI and APEX Cloud Platform (MCA05-P)",
          time: "15:10-15:40",
          category: "Multicloud & aas f...",
          slot: "Theater 4",
          details:
            "Highlighted by Gartner as the leader, Microsoft Azure is a hybrid cloud platform that enables customers to secure and govern their applications across on-premises, multicloud and edge environments. The platform is evolving to meet you where you are in your digital transformation journey, leveraging Dell solutions to run your SQL workloads and container apps and managed data services with Azure Arc. Come and see the latest innovations on AI Integration, Windows Server and SQL Server with features for governance & data utility. Users can use Dell Azure Hybrid solutions such as APEX Cloud Platform for Azure and our other joint solutions  integrated with data-platform capabilities to manage, monitor and secure their data in any Dell Technologies infrastructure.",
        },
      ],
    },
  ],
};

function Agenda() {
  // const [agenda, setAgenda] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [agenda, setAgenda] = useState(jsonData.agenda);

  // Function to generate or retrieve a session ID
  const getSessionId = () => {
    let sessionId = localStorage.getItem("sessionId");
    if (!sessionId) {
      // Generate a random session ID, e.g., UUID or any other method that ensures uniqueness
      sessionId = "xxxx-xxxx-xxxx-xxxx".replace(/[x]/g, () =>
        ((Math.random() * 16) | 0).toString(16)
      );
      localStorage.setItem("sessionId", sessionId);
    }
    return sessionId;
  };

  useEffect(() => {
    // fetch("./agenda.json")
    //   .then((response) => response.json())
    //   .then((data) => setAgenda(data.agenda));

    // Record page visit
    const recordVisit = async () => {
      const sessionId = getSessionId();
      try {
        const response = await fetch(
          "https://seal-app-6kpbu.ondigitalocean.app/api/visits",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              page: "agenda", // Assuming 'Home' is the identifier for this page
              sessionId: sessionId, // Send the session ID with the request
            }),
          }
        );

        const jsonResponse = await response.json();
        console.log("Visit recorded:", jsonResponse);
      } catch (error) {
        console.error("Error recording visit:", error);
      }
    };

    recordVisit();
  }, []);

  const handleSessionClick = (session) => {
    setSelectedSession(session);
  };

  return (
    <div className="w-screen flex justify-center items-center flex-col">
      <Nav />
      <Hero />
      <Bottom />

      <div className="lg:w-[70%] justify-center flex items-center flex-col">
        {/* search bar */}
        {/* <div className="flex justify-center items-center flex-col md:flex-row gap-2 md:justify-between px-8 py-4 w-full">
          <div className="bg-[#3FCDD9] w-[95%] flex items-center justify-center py-[4px] md:w-[120px]">
            <button>Filters</button>
          </div>
          <div className="flex items-center gap-2 border w-[95%] py-[7px] px-1 border-[#CBEEFF] md:w-[250px]">
            <BiSearch />
            <input type="text" placeholder="search" />
          </div>
        </div> */}

        {/* next */}
        <div className=" flex justify-center items-center flex-col w-full">
          <h2 className="text-left w-[95%] my-2">12 September 2024</h2>
          {agenda.map((slot, index) => (
            <div
              key={index}
              className="w-[95%] flex items-center justify-center flex-col mb-6 md:flex-row md:items-start md:justify-start"
            >
              <div className="w-full flex items-start flex-col justify-center md:w-[13%]">
                <h2 className="text-left py-2 text:[15px] lg:text-[20px] pl-2">
                  {slot.time}
                </h2>
              </div>

              <div className="w-[95%] flex flex-col gap-6">
                {slot.sessions.map((session, idx) => (
                  <div
                    key={idx}
                    className="session-card border border-[#CBEEFF] w-full flex items-start flex-col justify-center pl-3 py-3 "
                    onClick={() => handleSessionClick(session)}
                  >
                    <h3 className="font-bold text-[#444] text-[18px]">
                      {session.title}
                    </h3>
                    <h4 className="font-normal text-[14px] text-[#444] mt-2">
                      {session.time}
                    </h4>
                    <p className="text-[14px] font-normal bg-[#CBEEFF] px-4 py-1 rounded-full text-center mt-2">
                      {session.category}
                    </p>
                    <p className="text-[14px] mt-2 font-normal">
                      {session.slot}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {selectedSession && (
            <Modal
              session={selectedSession}
              onClose={() => setSelectedSession(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Agenda;
