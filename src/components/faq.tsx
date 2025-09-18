"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { ContentData } from "@/lib/content";

interface FAQProps {
  content: ContentData;
}

export default function FAQ({ content }: FAQProps) {
  return (
    <section className="py-20 px-4 relative z-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
{content.faq.title}
          </h2>
          <div className="hidden sm:block">
            {/* FAQ Icon */}
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center transform rotate-12">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">?</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="space-y-4"
        >
          {content.faq.items.map((faq, index) => (
            <Accordion.Item
              key={`item-${index + 1}`}
              value={`item-${index + 1}`}
              className="bg-primary/10 border-2 border-white/20 rounded-2xl overflow-hidden hover:border-white/40 transition-all duration-300"
            >
              <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors group">
                <h3 className="text-lg sm:text-xl font-bold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <Plus className="w-6 h-6 text-white group-data-[state=open]:hidden transition-all duration-200" />
                  <Minus className="w-6 h-6 text-white hidden group-data-[state=open]:block transition-all duration-200" />
                </div>
              </Accordion.Trigger>
              <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                <div className="px-6 pb-6">
                  <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
