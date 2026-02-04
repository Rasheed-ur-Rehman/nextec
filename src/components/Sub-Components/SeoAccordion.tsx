'use client'; // ADD THIS AT THE TOP

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Data {
  question: string;
  answer: string;
}

const SeoAccordion = () => {
  const data: Array<Data> = [
    {
      question: "What is SEO?",
      answer:
        "SEO, or Search Engine Optimization, is the process of improving your website's visibility in search engine results.",
    },
    {
      question: "Why SEO is important for your business?",
      answer:
        "SEO is essential for businesses because it helps increase organic (non-paid) traffic to your site, boost online visibility, and ultimately drive more potential customers to your business.",
    },
    {
      question: "What role do keywords play in SEO?",
      answer:
        "Keywords are words or phrases that users enter into search engines. Proper keyword research and usage are crucial for SEO. They help search engines understand your content and match it with user queries.",
    },
    {
      question: "What are the key elements of on-page SEO?",
      answer:
        "On-page SEO involves optimizing individual web pages to rank higher in search results. Key elements include optimizing titles, meta descriptions, headings, content quality, keyword usage, and image optimization.",
    },
  ];
  
  return (
    <div className="pt-10 sm:pl-10 space-y-3 max-w-sm ">
      {/* NOTE: Only ONE Accordion wrapper for all items */}
      <Accordion type="single" collapsible>
        {data.map((item: Data, index: number) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default SeoAccordion;