import logos from "./companyLogos";

const stocks = [
  {
    id: 1,
    symbol: "AAPL",
    company: "Apple Inc.",
    logo: logos.AAPL,
    price: 212.45,
    change: "+1.25%",
    sector: "Technology",
    marketCap: "3.2T",
    peRatio: "34.8",
    high52: 237.49,
    low52: 164.08,
    description:
      "Apple Inc. designs and develops smartphones, computers, tablets, wearables, and digital services."
  },

  {
    id: 2,
    symbol: "MSFT",
    company: "Microsoft Corporation",
    logo: logos.MSFT,
    price: 503.18,
    change: "+0.84%",
    sector: "Technology",
    marketCap: "3.7T",
    peRatio: "38.2",
    high52: 506.78,
    low52: 344.77,
    description:
      "Microsoft develops software, cloud services, operating systems, and productivity applications."
  },

  {
    id: 3,
    symbol: "GOOGL",
    company: "Alphabet Inc.",
    logo: logos.GOOGL,
    price: 193.27,
    change: "-0.56%",
    sector: "Technology",
    marketCap: "2.3T",
    peRatio: "27.1",
    high52: 207.05,
    low52: 120.21,
    description:
      "Alphabet is the parent company of Google and operates businesses across search, advertising, cloud, and technology."
  },

  {
    id: 4,
    symbol: "AMZN",
    company: "Amazon.com Inc.",
    logo: logos.AMZN,
    price: 239.61,
    change: "+1.12%",
    sector: "E-Commerce",
    marketCap: "2.5T",
    peRatio: "36.7",
    high52: 242.52,
    low52: 151.61,
    description:
      "Amazon operates e-commerce, cloud computing, digital streaming, and other technology businesses."
  },

  {
    id: 5,
    symbol: "TSLA",
    company: "Tesla Inc.",
    logo: logos.TSLA,
    price: 316.06,
    change: "-1.82%",
    sector: "Automobile",
    marketCap: "1.0T",
    peRatio: "175.4",
    high52: 488.54,
    low52: 214.25,
    description:
      "Tesla develops electric vehicles, energy storage products, and renewable energy solutions."
  },

  {
    id: 6,
    symbol: "NVDA",
    company: "NVIDIA Corporation",
    logo: logos.NVDA,
    price: 159.34,
    change: "+2.91%",
    sector: "Semiconductors",
    marketCap: "3.9T",
    peRatio: "51.6",
    high52: 212.19,
    low52: 86.62,
    description:
      "NVIDIA designs graphics processors, artificial intelligence hardware, and accelerated computing platforms."
  },

  {
    id: 7,
    symbol: "META",
    company: "Meta Platforms Inc.",
    logo: logos.META,
    price: 735.62,
    change: "+1.76%",
    sector: "Technology",
    marketCap: "1.8T",
    peRatio: "29.4",
    high52: 796.25,
    low52: 442.65,
    description:
      "Meta develops social networking platforms and technologies focused on digital communication and virtual experiences."
  },

  {
    id: 8,
    symbol: "NFLX",
    company: "Netflix Inc.",
    logo: logos.NFLX,
    price: 1184.32,
    change: "+0.93%",
    sector: "Entertainment",
    marketCap: "505B",
    peRatio: "50.2",
    high52: 1341.15,
    low52: 677.33,
    description:
      "Netflix provides subscription-based entertainment and streaming services to users around the world."
  },

  {
    id: 9,
    symbol: "AMD",
    company: "Advanced Micro Devices",
    logo: logos.AMD,
    price: 164.28,
    change: "-0.74%",
    sector: "Semiconductors",
    marketCap: "267B",
    peRatio: "97.3",
    high52: 187.28,
    low52: 76.48,
    description:
      "AMD develops high-performance processors, graphics products, and computing technologies."
  },

  {
    id: 10,
    symbol: "INTC",
    company: "Intel Corporation",
    logo: logos.INTC,
    price: 24.83,
    change: "-1.35%",
    sector: "Semiconductors",
    marketCap: "108B",
    peRatio: "N/A",
    high52: 37.16,
    low52: 17.67,
    description:
      "Intel develops processors, computing platforms, and semiconductor technologies."
  },

  {
    id: 11,
    symbol: "WMT",
    company: "Walmart Inc.",
    logo: logos.WMT,
    price: 98.42,
    change: "+0.61%",
    sector: "Retail",
    marketCap: "790B",
    peRatio: "41.5",
    high52: 105.30,
    low52: 65.45,
    description:
      "Walmart operates a global retail business through stores and e-commerce platforms."
  },

  {
    id: 12,
    symbol: "JPM",
    company: "JPMorgan Chase & Co.",
    logo: logos.JPM,
    price: 295.84,
    change: "+1.08%",
    sector: "Financial Services",
    marketCap: "820B",
    peRatio: "14.1",
    high52: 305.79,
    low52: 188.46,
    description:
      "JPMorgan Chase provides banking, financial services, investment banking, and asset management."
  },

  {
    id: 13,
    symbol: "V",
    company: "Visa Inc.",
    logo: logos.V,
    price: 341.76,
    change: "+0.47%",
    sector: "Financial Services",
    marketCap: "680B",
    peRatio: "33.2",
    high52: 353.08,
    low52: 252.70,
    description:
      "Visa operates a global digital payments network connecting consumers, businesses, banks, and governments."
  },

  {
    id: 14,
    symbol: "MA",
    company: "Mastercard Incorporated",
    logo: logos.MA,
    price: 568.42,
    change: "+1.14%",
    sector: "Financial Services",
    marketCap: "520B",
    peRatio: "39.7",
    high52: 601.77,
    low52: 428.86,
    description:
      "Mastercard operates a global payments technology network supporting digital transactions."
  },

  {
    id: 15,
    symbol: "KO",
    company: "The Coca-Cola Company",
    logo: logos.KO,
    price: 79.63,
    change: "+0.32%",
    sector: "Consumer Goods",
    marketCap: "343B",
    peRatio: "25.6",
    high52: 82.69,
    low52: 62.28,
    description:
      "Coca-Cola produces and distributes beverages and consumer products around the world."
  },

  {
    id: 16,
    symbol: "PEP",
    company: "PepsiCo Inc.",
    logo: logos.PEP,
    price: 143.27,
    change: "-0.48%",
    sector: "Consumer Goods",
    marketCap: "197B",
    peRatio: "18.9",
    high52: 177.50,
    low52: 127.81,
    description:
      "PepsiCo produces beverages, snacks, and food products sold across global markets."
  },

  {
    id: 17,
    symbol: "ORCL",
    company: "Oracle Corporation",
    logo: logos.ORCL,
    price: 249.52,
    change: "+1.63%",
    sector: "Technology",
    marketCap: "710B",
    peRatio: "52.1",
    high52: 256.43,
    low52: 118.14,
    description:
      "Oracle provides enterprise software, databases, cloud infrastructure, and technology services."
  },

  {
    id: 18,
    symbol: "IBM",
    company: "IBM Corporation",
    logo: logos.IBM,
    price: 278.64,
    change: "+0.72%",
    sector: "Technology",
    marketCap: "260B",
    peRatio: "42.8",
    high52: 283.22,
    low52: 157.95,
    description:
      "IBM provides enterprise technology, cloud computing, artificial intelligence, and consulting services."
  },

  {
    id: 19,
    symbol: "ADBE",
    company: "Adobe Inc.",
    logo: logos.ADBE,
    price: 352.18,
    change: "-1.04%",
    sector: "Technology",
    marketCap: "145B",
    peRatio: "21.7",
    high52: 587.75,
    low52: 332.01,
    description:
      "Adobe develops creative, document management, digital media, and digital experience software."
  },

  {
    id: 20,
    symbol: "MCD",
    company: "McDonald's Corporation",
    logo: logos.MCD,
    price: 306.74,
    change: "+0.39%",
    sector: "Consumer Services",
    marketCap: "220B",
    peRatio: "27.9",
    high52: 326.32,
    low52: 246.74,
    description:
      "McDonald's operates a global network of restaurants and franchises serving food and beverages."
  },

  {
    id: 21,
    symbol: "CRM",
    company: "Salesforce Inc.",
    logo: logos.CRM,
    price: 247.85,
    change: "+1.21%",
    sector: "Technology",
    marketCap: "235B",
    peRatio: "40.6",
    high52: 369.00,
    low52: 233.68,
    description:
      "Salesforce provides cloud-based customer relationship management and enterprise software solutions."
  },

  {
    id: 22,
    symbol: "DIS",
    company: "The Walt Disney Company",
    logo: logos.DIS,
    price: 111.38,
    change: "-0.67%",
    sector: "Entertainment",
    marketCap: "202B",
    peRatio: "29.8",
    high52: 124.60,
    low52: 80.10,
    description:
      "Disney operates entertainment, media, streaming, theme park, and consumer products businesses."
  }
];

export default stocks;