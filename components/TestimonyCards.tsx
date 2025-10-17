import React from "react";
import "@/style/TestimonyCards.scss";
import { Quote } from "lucide-react";

interface TestimonyCardsProps {
  name: string;
  role: string;
  testimony: string;
}

export const TestimonyCards = ({ name, role, testimony }: TestimonyCardsProps) => {
  return (
    <div className="testimony-cards" data-aos="fade-up">
      <div className="quote-icon">
        <Quote size={28} strokeWidth={1.5} />
      </div>
      <p className="testimony">&quot;{testimony}&quot;</p>
      <div className="author">
        <h2>{name}</h2>
        <h3>{role}</h3>
      </div>
    </div>
  );
};