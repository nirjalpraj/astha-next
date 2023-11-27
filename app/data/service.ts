export interface service {
  image: string;
  title: string;
  desc: string;
  benefits: {
    first: string;
    second: string;
  };
}

export const serviceHome: service[] = [
  {
    image: "/saving.jpg",
    title: "Saving Service",
    desc: "We can get you prequalified online so you can make an offer with confidence that it will get accepted.",
    benefits: {
      first: "Get Your Offer Accepted",
      second: "Knowing Your Buying Range",
    },
  },
  {
    image: "/loan.jpg",
    title: "Loan Service",
    desc: "Our team will use our expertise to make sure your loan gets funded fast! We make funding a breeze.",
    benefits: {
      first: "Hassle Free Funding",
      second: "Get Your Dream House",
    },
  },
  {
    image: "/others.jpg",
    title: "Other Service",
    desc: "We can get you prequalified online so you can make an offer with confidence that it will get accepted.",
    benefits: {
      first: "Shop Multiple Lenders",
      second: "Lower rates, Lower Payments",
    },
  },
];
