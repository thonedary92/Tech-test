export const Status = {
  Interested: "bg-orange-500",
  Qualified: "bg-green-500",
  Referral: "bg-yellow-500",
  UnInterested: "bg-red-500",
};

const structuredData = [
  {
    id: 1,
    contact: {
      name: "John Smith",
      position: "Senior UI/UX Designer",
      campaign: "UI/UX designers in Bangkok",
      receiverImage: "/images/p1.jpeg",
    },
    senderImage: "/images/p2.jpeg",
    leadStatus: "Qualified",
    lastMessage: {
      message: "Hi there! How can I help you today?",
      time: new Date("2024-03-28T18:16:00.000Z"),
      sentVia: "Email",
    },
    messageHistory: [
      {
        message:
          "Thanks for reaching out! I'm interested in learning more about your design services.",
        time: new Date("2024-03-23T18:25:43.511Z"),
        sentBy: "You",
      },
    ],
  },
  {
    id: 2,
    contact: {
      name: "Jane Doe",
      position: "Software Engineer",
      campaign: "Developers in New York",
      receiverImage: "/images/p3.jpeg",
    },
    senderImage: "/images/p2.jpeg",
    leadStatus: "Interested",
    lastMessage: {
      message: "Re: Your inquiry about our engineering positions",
      time: new Date("2024-03-28T16:42:00.000Z"),
      sentVia: "LinkedIn",
    },
    messageHistory: [
      {
        message:
          "I'm very interested in the Software Engineer role advertised on your website.",
        time: new Date("2024-03-23T09:25:43.511Z"),
        sentBy: "Contact",
      },
      {
        message:
          "Thanks for your interest, Jane! We'll be in touch soon to discuss the position further.",
        time: new Date("2024-03-23T12:25:43.511Z"),
        sentBy: "You",
      },
    ],
  },
  {
    id: 3,
    contact: {
      name: "Alice Johnson",
      position: "Product Manager",
      campaign: "Product Managers in San Francisco",
      receiverImage: "/images/p3.jpeg",
    },
    senderImage: "/images/p2.jpeg",
    leadStatus: "UnInterested",
    lastMessage: {
      message: "Thanks, but I'm not currently looking for new opportunities.",
      time: new Date("2024-03-23T13:25:43.511Z"),
      sentVia: "Email",
    },
    messageHistory: [
      {
        message:
          "Hello Alice, I came across your profile and was impressed with your product management experience. Would you be interested in learning more about...",
        time: new Date("2024-03-23T08:25:43.511Z"),
        sentBy: "You",
      },
    ],
  },
  {
    id: 4,
    contact: {
      name: "Michael Brown",
      position: "Software Engineer",
      campaign: "Software Engineers in Silicon Valley",
      receiverImage: "/images/p1.jpeg",
    },
    senderImage: "/images/p2.jpeg",
    leadStatus: "Referral",
    lastMessage: {
      message:
        "Hey [Your Name], just wanted to let you know that I spoke to Michael about the position and he seemed interested. I've forwarded your resume.",
      time: new Date("2024-03-28T14:32:00.000Z"),
      sentBy: "Contact (Colleague)",
    },
    messageHistory: [],
  },
  {
    id: 5,
    contact: {
      name: "Emily Clark",
      position: "Marketing Specialist",
      campaign: "Marketing Professionals in Chicago",
      receiverImage: "/images/p3.jpeg",
    },
    senderImage: "/images/p2.jpeg",
    leadStatus: "Interested",
    messageHistory: [
      {
        message:
          "Hello Alice, I came across your profile and was impressed with your product management experience. Would you be interested in learning more about...",
        time: new Date("2024-03-23T08:25:43.511Z"),
        sentBy: "You",
      },
    ],
  },
];

export default structuredData;
