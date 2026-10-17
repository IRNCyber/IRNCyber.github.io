export type ClientFeedbackSlot = {
  client: string;
  status: string;
  quote?: string;
  attribution?: string;
};

// No testimonial is published until a client approves the wording and attribution.
export const clientFeedback: ClientFeedbackSlot[] = [
  { client: "Maa Ganga RO Water Supply", status: "Awaiting client-approved feedback" },
];
