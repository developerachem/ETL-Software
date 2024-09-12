import { AiOutlineKubernetes } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
import {
  FaAngular,
  FaAws,
  FaBootstrap,
  FaCss3,
  FaDigitalOcean,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaRust,
} from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { GrGraphQl, GrHeroku } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { LiaVuejs } from "react-icons/lia";
import { MdOutlineCloud } from "react-icons/md";
import { RiNextjsLine, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiCsharp,
  SiFlask,
  SiMicrosoftazure,
  SiNetlify,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandDjango, TbBrandKotlin } from "react-icons/tb";
import mvc from "../../assets/image/mvc.png";
import { URLServiceSingle } from "../../routes/url";

const serviceData = [
  {
    url: "web-development",
    link: URLServiceSingle("web-development"),
    title: "Web Development",
    icon: <CiGlobe size={25} color="var(--primaryColor)" />,
    hero: {
      title: "Elevating Your Digital Presence with Dynamic Web Apps",
      subtitle:
        "Innovative web solutions to elevate user experience and accelerate growth.",
      icon: [
        <FaHtml5 color="red" size={22} />,
        <FaCss3 color="red" size={22} />,
        <RiTailwindCssFill color="red" size={22} />,
        <FaJs color="red" size={22} />,
        <RiReactjsFill color="red" size={22} />,
        <SiNodedotjs color="red" size={22} />,
        <CiGlobe color="red" size={22} />,
      ],
    },
    experiences: {
      title: "Your Gateway to Exceptional Web Experiences",
      desc: "We provide comprehensive web application development services using a wide range of modern technologies and frameworks to deliver robust, scalable, and user-friendly solutions. Our web development services cater to diverse industries, offering tailored solutions that enhance user engagement and business growth. We offer web development services using state-of-the-art technology such as Microsoft .NET / C#, .NET Core, ASP.NET MVC, MERN, Node.js, Next JS, Angular, React, HTML5, Bootstrap, CSS3, Javascript and more frameworks/Languages.",
    },
    offer: [
      {
        title: "Front-End Development",
        desc: "Crafting intuitive and responsive user interfaces with HTML5, CSS3, JavaScript, and frameworks like Angular, React, and Vue.js, ensuring cross-browser compatibility and optimal performance on all devices.",
      },
      {
        title: "Back-End Development",
        desc: "uilding secure and efficient server-side applications using Microsoft .NET / C#, .NET Core, Node.js, Express.js, ASP.NET MVC, Python, and Django to handle complex business logic and integrations.",
      },
      {
        title: "Full-Stack Development",
        desc: "Offering end-to-end development using MERN (MongoDB, Express, React, Node.js), MEAN (MongoDB, Express, Angular, Node.js), and other full-stack frameworks to create dynamic and high-performing web applications.",
      },
      {
        title: "API Development and Integration",
        desc: "Developing RESTful and GraphQL APIs for seamless integration with third-party services, microservices, and mobile applications, enabling interoperability and extending functionality.",
      },
      {
        title: "Content Management Systems (CMS)",
        desc: "Creating secure and high-performing e-commerce platforms using technologies like Shopify, WooCommerce, Magento, and custom-built solutions for a seamless shopping experience.",
      },
      {
        title: "Progressive Web Apps (PWA)",
        desc: "Developing Progressive Web Apps that combine the best of web and mobile experiences, providing offline access, fast loading times, and native-like performance.",
      },
      {
        title: "Database Management",
        desc: "Utilizing relational and non-relational databases like SQL Server, MySQL, PostgreSQL, and MongoDB to manage data efficiently and securely.",
      },
      {
        title: "Responsive Design",
        desc: "nsuring that all web applications are responsive and optimized for various devices and screen sizes, delivering a consistent user experience.",
      },
    ],

    technologies: [
      {
        label: "Frontend",
        key: "frontend",
        option: [
          {
            name: "HTML 5",
            icon: <FaHtml5 size={40} className="text-primaryColor" />,
          },
          {
            name: "CSS 3",
            icon: <FaCss3 size={40} className="text-primaryColor" />,
          },
          {
            name: "Javascript",
            icon: <IoLogoJavascript size={40} className="text-primaryColor" />,
          },
          {
            name: "Typescript",
            icon: <SiTypescript size={40} className="text-primaryColor" />,
          },
          {
            name: "React",
            icon: <FaReact size={40} className="text-primaryColor" />,
          },
          {
            name: "Angular",
            icon: <FaAngular size={40} className="text-primaryColor" />,
          },
          {
            name: "Vue.js",
            icon: <LiaVuejs size={40} className="text-primaryColor" />,
          },
          {
            name: "Next.js",
            icon: <RiNextjsLine size={40} className="text-primaryColor" />,
          },
          {
            name: "Bootstrap",
            icon: <FaBootstrap size={40} className="text-primaryColor" />,
          },
          {
            name: "Tailwind CSS",
            icon: <SiTailwindcss size={40} className="text-primaryColor" />,
          },
        ],
      },
      {
        label: "Back-End",
        key: "Backend",
        option: [
          {
            name: "Node JS",
            icon: <FaNodeJs size={40} className="text-primaryColor" />,
          },
          {
            name: "Microsoft .NET / C#",
            icon: <SiCsharp size={40} className="text-primaryColor" />,
          },
          {
            name: "ASP.NET MVC",
            icon: <img src={mvc} className="h-[37px]" />,
          },
          {
            name: "Python",
            icon: <FaPython size={40} className="text-primaryColor" />,
          },
          {
            name: "Django",
            icon: <TbBrandDjango size={40} className="text-primaryColor" />,
          },
          {
            name: "Flask",
            icon: <SiFlask size={40} className="text-primaryColor" />,
          },
          {
            name: "PHP",
            icon: <FaPhp size={40} className="text-primaryColor" />,
          },
          {
            name: "Java",
            icon: <FaJava size={40} className="text-primaryColor" />,
          },
          {
            name: "GraphQL",
            icon: <GrGraphQl size={40} className="text-primaryColor" />,
          },
          {
            name: "Kotlin",
            icon: <TbBrandKotlin size={40} className="text-primaryColor" />,
          },
          {
            name: "Rust",
            icon: <FaRust size={40} className="text-primaryColor" />,
          },
        ],
      },
      {
        label: "Platform",
        key: "Platform",
        option: [
          {
            name: "AWS (Amazon Web Services)",
            icon: <FaAws size={40} className="text-primaryColor" />,
          },
          {
            name: "Azure (Microsoft Azure)",
            icon: <SiMicrosoftazure size={40} className="text-primaryColor" />,
          },
          {
            name: "Google Cloud Platform (GCP)",
            icon: <MdOutlineCloud size={40} className="text-primaryColor" />,
          },
          {
            name: "Heroku",
            icon: <GrHeroku size={40} className="text-primaryColor" />,
          },
          {
            name: "Firebase",
            icon: <IoLogoFirebase size={40} className="text-primaryColor" />,
          },
          {
            name: "Netlify",
            icon: <SiNetlify size={40} className="text-primaryColor" />,
          },
          {
            name: "Vercel",
            icon: <IoLogoVercel size={40} className="text-primaryColor" />,
          },
          {
            name: "DigitalOcean",
            icon: <FaDigitalOcean size={40} className="text-primaryColor" />,
          },
          {
            name: "Docker",
            icon: <FaDocker size={40} className="text-primaryColor" />,
          },
          {
            name: "Kubernetes",
            icon: (
              <AiOutlineKubernetes size={40} className="text-primaryColor" />
            ),
          },
          {
            name: "GitHub",
            icon: <FaGithub size={40} className="text-primaryColor" />,
          },
          {
            name: "GitLab CI/CD",
            icon: <FaGitlab size={40} className="text-primaryColor" />,
          },
        ],
      },
    ],

    faq: [
      {
        title:
          "What is web app development, and why is it important for my business?",
        desc: "Web app development involves creating applications that run on web browsers, enhancing user engagement, accessibility, and business growth.",
      },
      {
        title: "How long does it take to develop a web application?",
        desc: "The development timeline depends on the complexity, features, and specific requirements of the project, typically ranging from a few weeks to several months.",
      },
      {
        title: "What technologies do you use for web app development?",
        desc: "We use modern technologies and frameworks like React, Angular, Vue.js, Node.js, Django, and more, tailored to your project's needs.",
      },
      {
        title:
          "Can you build a custom web application for my unique business requirements?",
        desc: "Yes, we specialize in building custom web applications tailored to your specific business needs and goals.",
      },
      {
        title: "Do you offer mobile responsiveness for web applications?",
        desc: "Yes, all our web applications are designed to be mobile-friendly and responsive across all devices.",
      },
      {
        title: "How do you ensure the security of my web application?",
        desc: "We follow industry best practices for security, including data encryption, regular security audits, and compliance with security standards.",
      },
      {
        title:
          "Will I be able to manage and update my web application after it's developed?",
        desc: "Yes, we provide user-friendly content management systems and offer training and support for managing and updating your web application.",
      },
      {
        title:
          "Can you integrate my web application with other tools or platforms?",
        desc: "Absolutely! We can integrate your web app with various third-party tools, APIs, and platforms as per your business requirements.",
      },
      {
        title: "What is the cost of developing a web application?",
        desc: "The cost depends on the application's complexity, features, and customization. We provide detailed quotes after understanding your specific needs.",
      },
      {
        title:
          "Do you offer ongoing maintenance and support for web applications?",
        desc: "Yes, we provide comprehensive maintenance and support services to ensure your web application remains up-to-date and functions smoothly.",
      },
      {
        title: "How do you handle scalability in web app development?",
        desc: "We design web applications with scalability in mind, allowing for easy expansion of features and handling increased traffic as your business grows.",
      },
      {
        title: "What is the process you follow for web app development?",
        desc: "Our process includes discovery, design, development, testing, deployment, and ongoing support, ensuring a smooth and efficient development lifecycle.",
      },
      {
        title: "Can you help migrate my existing website to a web application?",
        desc: "Yes, we can assist in transforming your existing website into a more dynamic and functional web application.",
      },
      {
        title: "How do you ensure the quality of the web application?",
        desc: "We employ rigorous testing methods, including functional, performance, and security testing, to ensure your web application is robust and reliable.",
      },
    ],
  },
];

export default serviceData;
