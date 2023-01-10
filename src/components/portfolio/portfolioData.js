import Image1 from "../../assets/img/portfolio/diligent-1.png";
import Image2 from "../../assets/img/portfolio/nbk-2.png";
import Image3 from "../../assets/img/portfolio/assangedao-3.png";
import Image4 from "../../assets/img/portfolio/barnes-4.png";
import Image5 from "../../assets/img/portfolio/ksfh-5.png";
import Image6 from "../../assets/img/portfolio/gartentraum-6.png";
import Image7 from "../../assets/img/portfolio/atticus-7.png";
import Image8 from "../../assets/img/portfolio/conceptroimageltee-8.png";

const PortfolioData = [
  {
    id: 1,
    type: "html/css project",
    image: Image1,
    tag: ["html/css"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Company website",
        language: "HTML, CSS, Javascript , jquery",
        preview: "kfh.com/home/Personal.html",
        link: "https://www.kfh.com/home/Personal.html",
      },
    ],
  },
  {
    id: 2,
    type: "html/css project",
    image: Image2,
    tag: ["html/css"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "NBK",
        language: "HTML, CSS, Javascript",
        preview: "nbk.com",
        link: "https://www.nbk.com/",
      },
    ],
  },

  {
    id: 3,
    type: "Bootstrap Project",
    image: Image3,
    tag: ["bootstrap"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "AssangeDAO",
        language: "HTML, CSS, Bootstrap",
        preview: "assangedao.org",
        link: "https://assangedao.org/",
      },
    ],
  },

  {
    id: 4,
    type: "ReactJS project",
    image: Image4,
    tag: ["reactjs"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "BARNESJEWELRY",
        language: "HTML, CSS, ReactJS",
        preview: "barnesjewelry.com",
        link: "https://www.barnesjewelry.com",
      },
    ],
  },
  {
    id: 5,
    type: "wordpress project",
    image: Image5,
    tag: ["wordpress"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "KSFH Tuning",
        language: "WordPress",
        preview: "ksfh-tuning.de",
        link: "https://www.ksfh-tuning.de/",
      },
    ],
  },
  {
    id: 6,
    type: "wordpress project",
    image: Image6,
    tag: ["wordpress"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "Gartentraum",
        language: "WordPress",
        preview: "gartentraum.de",
        link: "https://www.gartentraum.de/",
      },
    ],
  },
  {
    id: 7,
    type: "wordpress project",
    image: Image7,
    tag: ["wordpress"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Matt Ludt",
        language: "WordPress",
        preview: "minnesota-nice.co",
        link: "http://minnesota-nice.co/",
      },
    ],
  },
  {
    id: 8,
    type: "wordpress project",
    image: Image8,
    tag: ["wordpress"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "ClicketPixel",
        language: "WordPress",
        preview: "conceptroimageltee.cliketpixel.com",
        link: "https://conceptroimageltee.cliketpixel.com/",
      },
    ],
  },
];

export default PortfolioData;
