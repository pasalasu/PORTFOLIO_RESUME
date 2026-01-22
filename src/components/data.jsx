import { MdOutlineWeb } from "react-icons/md";
import { FaLaptopCode, FaMobileAlt, FaCamera   } from "react-icons/fa";
import testimonial1 from "../assets/girl.png"
import testimonial2 from "../assets/boy.png"
import Digital from "../assets/Digital.png"
import Clothify from "../assets/Clothify.png"
import Nike from "../assets/Nike.png"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faSchool,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: 'rgba(205, 243, 33, 1)', color: '#fff' },
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};

export const service = [
    {
        title:"Web Design",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <MdOutlineWeb/>
    },
    {
        title:"Web Development",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <FaLaptopCode/>
    },
    {
        title:"Mobile Apps",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <FaMobileAlt/>
    },
    {
        title:"Photography",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <FaCamera/>
    },
]

export const testimonials = [
    {
        name:"sailu",
        para:"pasala Suresh is a highly talented website developer! He understands requirements well and creates clean, user-friendly websites. Great work and highly recommended! ",
        img: testimonial1
    },
    {
        name:"sivakumar",
        para:"pasala Suresh is an excellent website developer! He is skilled, professional, and delivers fast, responsive websites. Highly recommended!",
        img: testimonial2
    },
   
]

export const timeline = [
    {
      icon: workIcon,
      date: '2024 - present',
      title: 'Neolync',
      subtitle: 'Developer',
      desc: 'Python Developer is responsible for designing, developing, testing, and maintaining software applications using Python. The role involves working on backend systems, APIs, databases, and integrations while ensuring performance, scalability, and security',
    },
    {
      icon: workIcon,
      date: '2023 - 2024',
      title: 'Dixon',
      subtitle: 'Quality',
      desc: 'A"Quality Specialist Manufacturer" typically refers to a company that focuses on producing goods while maintaining high standards of quality control throughout the manufacturing process. This involves a commitment to ensuring that products meet specific quality benchmarks, regulations, and customer expectations.',
    },
    {
      icon: workIcon,
      date: '2021 - 2022',
      title: 'TEN: HR Consulting',
      subtitle: ' Human Resources Internship',
      desc: 'Completed an HR Internship, gaining hands-on experience in talent acquisition, employee engagement, payroll basics, and HR policies.',
    },
    {
      icon: workIcon,
      date: '2021 - 2022',
      title: 'Hiremi',
      subtitle: 'Human Resources Intern',
      desc: 'Completed an HR Internship, gaining hands-on experience in talent acquisition, employee engagement, payroll basics, and HR policies.',
    },
    {
      icon: schoolIcon,
      date: '2019-2023',
      title: 'Bachelor of Computer Applicattion (B.com)',
      subtitle: 'Dr K.R.C Degree College',
      desc: 'Completed B.Com (Computer Applications) with a combination of commerce and computer science, gaining knowledge in accounting, finance, and software applications.',
    },
    {
      icon: schoolIcon,
      date: '2017-2019',
      title: 'Higher Secondary (HS)',
      subtitle: 'Dr K.R.C Degree college',
      desc: 'Completed Higher Secondary (Intermediate) with a focus on core subjects, developing analytical thinking, subject knowledge, and academic discipline.',
    },
    {
      icon: schoolIcon,
      date: '2016-2017',
      title: ' 10th',
      subtitle: 'Z.P.P.HSCHOOL',
      desc: 'Completed 10th Class (SSC) with a strong foundation in Mathematics, Science, and English, developing basic analytical, communication, and problem-solving skills.',
    },
    { icon: starIcon },
  ];

export const projects = [
    {
      title: "Linkedin",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
      techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind"],
      link: "https://www.linkedin.com/in/pasala-suresh-9437b61a5/",
      github: 'https://github.com/pasalasu',
      image: Digital,
    },
    {
      title: "Instgram",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
      techStack: ["React", "Node.js", "MongoDB", "shadcn UI"],
      link: "https://www.instagram.com/suresh_p_a_s_a_l_a_1903?igsh=cXZmbHMxcWswc2xu",
      github: 'https://github.com/pasalasu',
      image: Nike, 
    },
    {
      title: "Application",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
      techStack: ["Next.js", "MongoDB", "Clerk Authentication"],
      link: "https://pasalasu.github.io/pasala_suresh_1903/MY_PORTFOLIO/",
      github: 'https://github.com/pasalasu/MY-APPLICATION',
      image: Clothify, 
    },
  ];