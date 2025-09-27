export interface FAQItem {
  category: string;
  description: string;
}

export const faqData: FAQItem[] = [
  {
    category: "Applied AI",
    description:
      "Beginners to LLMs and generative AI systems who want to gain mastery in the development of LLM-powered applications, chatbots, RAG pipelines and agentic systems. Target audience includes software developers, data professionals, researchers, ML engineers, technical product managers, etc.",
  },
  {
    category: "Machine Learning",
    description:
      "Learners looking to strengthen their foundation in machine learning algorithms, model training, evaluation, and deployment for real-world applications.",
  },
  {
    category: "LLM Engineering",
    description:
      "Those interested in specializing in Large Language Models, prompt engineering, fine-tuning, and advanced architectures for scaling AI-powered systems.",
  },
  {
    category: "Production AI",
    description:
      "For professionals focused on MLOps, deploying AI systems at scale, monitoring, optimization, and ensuring ethical & responsible AI.",
  },
];
