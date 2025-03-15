const animationDuration = 2;
export const variants = {
  initial: { pathLength: 0, strokeOpacity: 1, fillOpacity: 0 },
  animate: {
    pathLength: 1,
    strokeOpacity: 0,
    fillOpacity: 1,
    transition: {
      duration: animationDuration,
      ease: "easeInOut",
      strokeOpacity: {
        delay: animationDuration,
      },
      fillOpacity: {
        delay: animationDuration,
      },
    },
  },
};

export const socialIcon = [
  {
    id: 1,
    path: "M12 2.04C6.48 2.04 2 6.52 2 12.04c0 4.86 3.44 8.89 8 9.75v-6.9h-2.4v-2.85h2.4v-2.2c0-2.38 1.45-3.7 3.58-3.7 1.02 0 2.1.18 2.1.18v2.3h-1.19c-1.17 0-1.53.72-1.53 1.46v1.96h2.6l-.42 2.85h-2.18v6.9c4.56-.86 8-4.89 8-9.75 0-5.52-4.48-10-10-10z",
  },
  {
    id: 2,
    path: "M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.55v-1.94c-3.2.69-3.87-1.54-3.87-1.54-.53-1.37-1.3-1.73-1.3-1.73-1.07-.74.08-.73.08-.73 1.18.08 1.8 1.2 1.8 1.2 1.05 1.79 2.76 1.28 3.43.98.1-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.3 1.2-3.1-.12-.3-.52-1.52.12-3.17 0 0 .97-.31 3.2 1.18.92-.26 1.91-.4 2.89-.4.98 0 1.97.14 2.89.4 2.22-1.5 3.2-1.18 3.2-1.18.64 1.65.24 2.87.12 3.17.75.8 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.79 1.05.79 2.12v3.14c0 .3.21.65.8.55 4.57-1.53 7.86-5.85 7.86-10.95C23.5 5.65 18.35.5 12 .5z",
  },
  {
    id: 3,
    path: "M12 1.5C6.2 1.5 1.5 6.2 1.5 12c0 2.3.7 4.5 2 6.4L2 22.5l4.2-1.1c1.7 1 3.6 1.6 5.8 1.6 5.8 0 10.5-4.7 10.5-10.5S17.8 1.5 12 1.5zm0 19c-1.9 0-3.7-.5-5.3-1.4l-.4-.3-2.5.7.7-2.4-.3-.4C3.5 15 3 13.5 3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9zm4.1-6.7c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.6.1s-.7.7-.9.9c-.2.2-.3.2-.6.1s-1.1-.4-2.1-1.3c-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.4.1-.5l.5-.6c.1-.1.2-.3.3-.4s0-.3 0-.4c-.1-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.6c-.2 0-.4 0-.5.2-.2.2-.7.7-.7 1.7s.8 2 1 2.1c.1.1 1.5 2.2 3.7 3 2.2.8 2.2.5 2.6.5s1.3-.5 1.5-1 .2-1 .1-1.1c-.1-.1-.3-.2-.5-.3z",
    phonePath:
      "M16.5 6.5c-.2-.2-.4-.3-.7-.3h-1.1c-.3 0-.5.1-.7.3s-.3.4-.3.7c0 .3.1.5.3.7l.9.9c-.4.9-1 1.7-1.7 2.4-.7.7-1.5 1.3-2.4 1.7l-.9-.9c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3l-1.1 1.1c-.2.2-.3.4-.3.7s.1.5.3.7l1.4 1.4c.5.5 1.1.8 1.8.8 2.6 0 5.1-1 7-2.9 1.9-1.9 2.9-4.4 2.9-7 0-.7-.3-1.3-.8-1.8l-1.4-1.4z",
  },

  {
    id: 4,
    path: "M4.98 3.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm.02 3H.96v14h4.04V6.5zm7.95 0h-3.98v14h3.98v-7c0-1.8 1.46-3.25 3.25-3.25s3.25 1.46 3.25 3.25v7h3.98v-7c0-4.16-3.38-7.5-7.5-7.5s-7.5 3.34-7.5 7.5v7z",
  },
];

// Numbers Section

export const Numbers = [
  { id: 1, number: 30, title: "Created projects" },
  { id: 2, number: 20, title: "Projects" },
  { id: 3, number: 3, title: "Happy Clints" },
  { id: 4, number: 6, title: "Month" },
];

// Services section

export const Services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Complete Step-by-Step Guide to Building a Stunning Personal Portfolio Website with React, Vite, Tailwind CSS ,framer motion and three js ",
  },
  {
    id: 1,
    title: "Web Development",
    description:
      "Complete Step-by-Step Guide to Building a Stunning Personal Portfolio Website with React, Vite, Tailwind CSS ,framer motion and three js ",
  },
  {
    id: 1,
    title: "Web Development",
    description:
      "Complete Step-by-Step Guide to Building a Stunning Personal Portfolio Website with React, Vite, Tailwind CSS ,framer motion and three js ",
  },
];

// Skills Sections

export const skills = [
  {
    skill: "HTML",
    percentage: 100,
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlxUBrZ1Ml63XHO-KR2WenziEgQoOQH1-CW-i5ZLom3RG_tBgBt3aeorAC6CjgQrdSY7U&usqp=CAU",
  },
  {
    skill: "CSS",
    percentage: 60,
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQulnz6YBuAJR2Mhu23faS3DfvtdhVtJEfcht_A0K3bCUFCnaSe_NtM5eY_O_MMnTmRm6c&usqp=CAU",
  },
  {
    skill: "Tailwind",
    percentage: 80,
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
  },
  {
    skill: "React",
    percentage: 40,
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256",
  },
  {
    skill: "Next.js",
    percentage: 50,
    icon: "https://cdn.brandfetch.io/nextjs.org/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed",
  },
];

// Experience and Education

export const experience = [
  {
    id: 1,
    title: "SEO Specialist",
    company: "Tech-Que IT",
    year: "2021-2023",
    description:
      " Tech-Que is a dynamic and innovative technology company that provides a full suite of web-based services to clients looking to establish or enhance their online presence. ",
    icon: "https://media.licdn.com/dms/image/v2/C560BAQGTeNlec7rXfA/company-logo_200_200/company-logo_200_200/0/1675246556111/tech_queit_logo?e=2147483647&v=beta&t=2NriuLQd80DadWwvYfWcgKOBzNRbtRpEruMAt-PnSHo",
  },
  {
    id: 1,
    title: "SEO Specialist",
    company: "Z3 Corporation",
    year: "2023-2024",
    description:
      " Tech-Que is a dynamic and innovative technology company that provides a full suite of web-based services to clients looking to establish or enhance their online presence. ",
    icon: "https://media.licdn.com/dms/image/v2/C560BAQGTeNlec7rXfA/company-logo_200_200/company-logo_200_200/0/1675246556111/tech_queit_logo?e=2147483647&v=beta&t=2NriuLQd80DadWwvYfWcgKOBzNRbtRpEruMAt-PnSHo",
  },
 
];

export const education = [
  {
    id: 1,
    degree: "Norther College Bangladesh",
    institution: "Tech-Que IT",
    year: "2021-2023",
    details:
      " Tech-Que is a dynamic and innovative technology company that provides a full suite of web-based services to clients looking to establish or enhance their online presence. ",
    icon: "https://media.licdn.com/dms/image/v2/C560BAQGTeNlec7rXfA/company-logo_200_200/company-logo_200_200/0/1675246556111/tech_queit_logo?e=2147483647&v=beta&t=2NriuLQd80DadWwvYfWcgKOBzNRbtRpEruMAt-PnSHo",
  },
  {
    id: 1,
    degree: "Southeast University",
    institution: "Tech-Que IT",
    year: "2021-2023",
    details:
      " Tech-Que is a dynamic and innovative technology company that provides a full suite of web-based services to clients looking to establish or enhance their online presence. ",
    icon: "https://media.licdn.com/dms/image/v2/C560BAQGTeNlec7rXfA/company-logo_200_200/company-logo_200_200/0/1675246556111/tech_queit_logo?e=2147483647&v=beta&t=2NriuLQd80DadWwvYfWcgKOBzNRbtRpEruMAt-PnSHo",
  },
];
