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
  FaUbuntu,
  FaVuejs,
} from "react-icons/fa";
import { FaGitlab, FaGolang } from "react-icons/fa6";
import { GrGraphQl, GrHeroku, GrSwift } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { LiaVuejs } from "react-icons/lia";
import { MdOutlineCloud } from "react-icons/md";
import { RiNextjsLine, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAndroidstudio,
  SiBitrise,
  SiCsharp,
  SiErpnext,
  SiExpress,
  SiFlask,
  SiFlutter,
  SiFrappe,
  SiJinja,
  SiKotlin,
  SiMariadb,
  SiMicrosoftazure,
  SiNetlify,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudioappcenter,
  SiXcode,
} from "react-icons/si";
import { TbBrandDjango, TbBrandKotlin } from "react-icons/tb";
import mvc from  "../../assets/image/mvc.png";   
import restapi from "../../assets/image/restapi.png";
import { URLServiceSingle } from "../../routes/url";
import { BsBootstrapFill } from "react-icons/bs";
import { DiRedis } from "react-icons/di";


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
  {
    url: "mobile-app-development",
    link: URLServiceSingle("mobile-app-development"),
    title: "Mobile App Development",
    icon: <CiGlobe size={25} color="var(--primaryColor)" />,
    hero: {
      title: "Building Mobile Apps That Make an Impact",
      subtitle:
        "Custom mobile solutions designed to engage users and drive growth.",
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
      title: "Your Partner in Mobile App Innovation",
      desc: "We specialize in crafting high-quality, user-centric mobile applications tailored to meet the unique needs of your business across various platforms. Whether it’s a robust native app for iOS or Android, or a flexible cross-platform solution, our expert developers are here to bring your vision to life. With a focus on intuitive design and top-notch performance, we build apps that enhance your digital presence and deliver outstanding user experiences. Our mobile app development services are designed to help you reach a wider audience, enhance customer engagement, and drive business growth through innovative and high-quality mobile solutions.",
    },
    offer: [
      {
        title: "Native Mobile App Development",
        desc: "Designing and building powerful, high-performance native apps for iOS using Swift and Objective-C, and Android using Kotlin and Java. Native apps offer superior performance, seamless user experience, and access to platform-specific features, ensuring optimal functionality on each operating system",
      },
      {
        title: "Cross-Platform Development with React Native",
        desc: "Creating cross-platform mobile applications using React Native, which allows us to write a single codebase that runs efficiently on both iOS and Android devices. This approach reduces development time and cost while maintaining a high level of performance and native-like user experience.",
      },
      {
        title: "Hybrid App Development with Flutter",
        desc: "Leveraging Flutter, Google’s open-source UI toolkit, to develop high-quality hybrid mobile apps with a single codebase. Flutter enables rapid development, expressive and flexible UI, and native performance, making it ideal for creating beautiful, responsive, and engaging apps across multiple platforms",
      },
      {
        title: "No-Code/Low-Code Development with Flutterflow",
        desc: "Accelerating the app development process using Flutterflow, a low-code development platform that integrates seamlessly with Flutter. Flutterflow allows for rapid prototyping, easy design iterations, and quick deployment, making it ideal for businesses looking for faster time-to-market without compromising quality.",
      },
      {
        title: "Custom Mobile App Design",
        desc: "Focusing on user-centric design principles to create intuitive and aesthetically pleasing mobile app interfaces that enhance user engagement and satisfaction. We ensure all our designs are optimized for both functionality and appearance, following the latest UI/UX trends and best practices.",
      },
      {
        title: "Backend Integration and API Development",
        desc: "Developing robust backend systems and APIs to support mobile applications, enabling seamless data synchronization, secure communication, and smooth interaction with third-party services and databases.",
      },
      {
        title: "Performance Optimization",
        desc: "Ensuring that all mobile applications are optimized for speed, battery efficiency, and resource usage, providing a smooth and responsive experience even on lower-end devices.",
      },
      {
        title: "App Store Deployment and Maintenance",
        desc: "Managing the complete app lifecycle, from initial deployment on the Apple App Store and Google Play Store to continuous maintenance, updates, and improvements based on user feedback and market trends.",
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
            name: "React Native",
            icon: <FaReact size={40} className="text-primaryColor" />,
          },
          {
            name: "Flutter",
            icon: <SiFlutter size={40} className="text-primaryColor" />,
          },
          {
            name: "Flutterflow",
            icon: <LiaVuejs size={40} className="text-primaryColor" />,
          },
          {
            name: "Swift",
            icon: <GrSwift size={40} className="text-primaryColor" />,
          },
          {
            name: "Objective-C",
            icon: <FaBootstrap size={40} className="text-primaryColor" />,
          },
          {
            name: "Kotlin",
            icon: <SiKotlin size={40} className="text-primaryColor" />,
          },
          {
            name: "Java",
            icon: <FaJava size={40} className="text-primaryColor" />,
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
            name: "Express.js",
            icon: <SiExpress size={40} className="text-primaryColor" />,
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
            name: "RESTful API",
            icon: <img src={restapi} className="h-[37px]" />,
            
          },
          {
            name: "Golang",
            icon: <FaGolang size={40} className="text-primaryColor" />,
          },
        ],
      },
      {
        label: "Platform",
        key: "Platform",
        option: [
          {
            name: "Xcode (iOS)",
            icon: <SiXcode size={40} className="text-primaryColor" />,
          },
          {
            name: "Android Studio",
            icon: <SiAndroidstudio size={40} className="text-primaryColor" />,
          },
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
          {
            name: "App Center",
            icon: <SiVisualstudioappcenter size={40} className="text-primaryColor" />,
          },
          {
            name: "Bitrise",
            icon: <SiBitrise size={40} className="text-primaryColor" />,
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
  {
    url: "enterprise-resource-planning",
    link: URLServiceSingle("enterprise-resource-planning"),
    title: "Enterprise Resource Planning",
    icon: <CiGlobe size={25} color="var(--primaryColor)" />,
    hero: {
      title: "Transforming Business Operations with Tailored ERP and CRM Solutions",
      subtitle:
        "Customized ERPNext implementations to streamline processes and enhance productivity.",
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
      title: "Your Partner in Optimizing Business Efficiency with ERP and CRM Solutions",
      desc: "We offer comprehensive ERP and CRM development services, specializing in customizing and implementing ERPNext, a powerful open-source platform built on the Frappe framework. Our solutions help businesses efficiently manage day-to-day operations by integrating various functions into a single, cohesive system. With a focus on ERPNext, we deliver flexible, cost-effective, and robust solutions that support business growth, improve operational efficiency, and enhance decision-making at all levels of your organization. Whether you need a tailored ERPNext implementation or a custom app built on Frappe, we provide end-to-end services to optimize your processes and ensure seamless management of all business aspects.",
    },
    offer: [
      {
        title: "ERPNext Customization",
        desc: "Tailoring ERPNext to fit your unique business requirements, including custom fields, forms, workflows, and reports. We adapt and enhance the core modules such as Sales, Inventory, Accounting, HR, and Manufacturing to align perfectly with your specific processes and operational needs.",
      },
      {
        title: "Custom App Development on Frappe Framework",
        desc: "Building custom applications on the Frappe framework to extend the capabilities of ERPNext, providing additional functionality and features tailored to your business model. This includes developing specialized modules for industry-specific requirements, creating new integrations, and enhancing the user interface for improved usability.",
      },
      {
        title: "ERP Implementation and Integration",
        desc: "Offering end-to-end ERPNext implementation services, from initial consultation and requirements analysis to deployment, configuration, and user training. We ensure smooth integration with existing systems, such as third-party applications, payment gateways, and e-commerce platforms, for a unified business management solution.",
      },
      {
        title: "CRM Solutions with ERPNext",
        desc: "Enhancing the CRM capabilities of ERPNext to manage customer relationships effectively, track sales and marketing activities, and analyze customer data. We customize CRM modules to suit your sales processes, automate customer communications, and improve lead management and conversion rates.",
      },
      {
        title: "Data Migration and Management",
        desc: "Assisting with data migration from legacy systems to ERPNext, ensuring data integrity, accuracy, and security throughout the process. We provide data cleaning, formatting, and mapping services to ensure a seamless transition to the new ERP system.",
      },
      {
        title: "Workflow Automation",
        desc: "Streamlining business processes by implementing workflow automation in ERPNext, reducing manual tasks, improving efficiency, and minimizing errors. We design and configure automated workflows for various functions like approvals, notifications, and task assignments to enhance productivity.",
      },
      {
        title: "User Training and Support",
        desc: "Providing comprehensive training programs and support services for your team to ensure effective use of ERPNext. Our support services include troubleshooting, system updates, and enhancements, as well as regular maintenance to keep your ERP system running smoothly.",
      },
      {
        title: "Performance Optimization and Scalability",
        desc: "Optimizing the performance of ERPNext to handle large volumes of data and complex transactions efficiently. We ensure that your ERP solution is scalable, capable of growing with your business, and ready to handle future demands.",
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
            name: "Jinja",
            icon: <SiJinja size={40} className="text-primaryColor" />,
          },
          {
            name: "Bootstrap",
            icon: <BsBootstrapFill size={40} className="text-primaryColor" />,
          },
          {
            name: "Vue.js",
            icon: <FaVuejs size={40} className="text-primaryColor" />,
          },
        ],
      },
      {
        label: "Back-End",
        key: "Backend",
        option: [
          {
            name: "Python",
            icon: <FaPython size={40} className="text-primaryColor" />,
          },
          {
            name: "Frappe Framework",
            icon: <SiFrappe size={40} className="text-primaryColor" />,
          },
          {
            name: "MariaDB",
            icon: <SiMariadb size={40} className="text-primaryColor" />,
          },
          {
            name: "Redis",
            icon: <DiRedis size={40} className="text-primaryColor" />,
          },
          {
            name: "GraphQL",
            icon: <GrGraphQl size={40} className="text-primaryColor" />,
          },
          {
            name: "RESTful API",
            icon: <img src={restapi} className="h-[37px]" />,
            
          },
        ],
      },
      {
        label: "Platform",
        key: "Platform",
        option: [
          {
            name: "ERPNext",
            icon: <SiErpnext size={40} className="text-primaryColor" />,
          },
          {
            name: "Frappe",
            icon: <SiFrappe size={40} className="text-primaryColor" />,
          },
          {
            name: "Docker",
            icon: <FaDocker size={40} className="text-primaryColor" />,
          },
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
          {
            name: "Ubuntu",
            icon: <FaUbuntu size={40} className="text-primaryColor" />,
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
  {
    url: "devops",
    link: URLServiceSingle("devops"),
    title: "DevOps",
    icon: <CiGlobe size={25} color="var(--primaryColor)" />,
    hero: {
      title: "Accelerate Your Software Delivery with Expert DevOps Solutions",
      subtitle:
        "Streamline your development and deployment with our comprehensive DevOps services.",
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
      title: "Empower Your Development with Seamless DevOps",
      desc: "We offer end-to-end DevOps services designed to optimize your software development lifecycle. By leveraging cutting-edge tools and best practices, we streamline your development, deployment, and operations, ensuring faster delivery, enhanced quality, and reduced time to market. From CI/CD pipelines and infrastructure management to monitoring, security, and compliance, our solutions enable your teams to collaborate more effectively and achieve continuous improvement. Partner with us to build, deploy, and scale applications with confidence.",
    },
    offer: [
      {
        title: "CI/CD Pipelines",
        desc: "Automating build, test, and deployment workflows with tools like Jenkins, GitLab CI, GitHub Actions, and Azure DevOps.",
      },
      {
        title: "Infrastructure as Code (IaC)",
        desc: "Managing infrastructure with tools such as Terraform, AWS CloudFormation, and Azure Resource Manager (ARM) templates.",
      },
      {
        title: "Containerization and Orchestration",
        desc: "Using Docker for containerization and Kubernetes for orchestration to enable scalable, efficient, and reliable application deployment.",
      },
      {
        title: "Cloud Platforms",
        desc: "Deploying, managing, and scaling applications on AWS, Azure, Google Cloud Platform (GCP), and other cloud environments.",
      },
      {
        title: "Monitoring and Logging",
        desc: "Implementing monitoring, logging, and alerting systems using Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana), and Datadog.",
      },
      {
        title: "Configuration Management",
        desc: "Utilizing tools like Ansible, Chef, and Puppet for configuration management and automated server provisioning.",
      },
      {
        title: "Version Control and Collaboration",
        desc: "Leveraging Git, GitHub, GitLab, and Bitbucket for version control and collaborative development.",
      },
      {
        title: "Security and Compliance",
        desc: "Implementing security best practices, vulnerability assessments, and compliance automation using tools like Snyk, Checkmarx, and Aqua Security.",
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
            name: "Jinja",
            icon: <SiJinja size={40} className="text-primaryColor" />,
          },
          {
            name: "Bootstrap",
            icon: <BsBootstrapFill size={40} className="text-primaryColor" />,
          },
          {
            name: "Vue.js",
            icon: <FaVuejs size={40} className="text-primaryColor" />,
          },
        ],
      },
      {
        label: "Back-End",
        key: "Backend",
        option: [
          {
            name: "Python",
            icon: <FaPython size={40} className="text-primaryColor" />,
          },
          {
            name: "Frappe Framework",
            icon: <SiFrappe size={40} className="text-primaryColor" />,
          },
          {
            name: "MariaDB",
            icon: <SiMariadb size={40} className="text-primaryColor" />,
          },
          {
            name: "Redis",
            icon: <DiRedis size={40} className="text-primaryColor" />,
          },
          {
            name: "GraphQL",
            icon: <GrGraphQl size={40} className="text-primaryColor" />,
          },
          {
            name: "RESTful API",
            icon: <img src={restapi} className="h-[37px]" />,
            
          },
        ],
      },
      {
        label: "Platform",
        key: "Platform",
        option: [
          {
            name: "ERPNext",
            icon: <SiErpnext size={40} className="text-primaryColor" />,
          },
          {
            name: "Frappe",
            icon: <SiFrappe size={40} className="text-primaryColor" />,
          },
          {
            name: "Docker",
            icon: <FaDocker size={40} className="text-primaryColor" />,
          },
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
          {
            name: "Ubuntu",
            icon: <FaUbuntu size={40} className="text-primaryColor" />,
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
