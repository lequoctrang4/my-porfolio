export const designs = [
  { id: "studio", name: "Studio", label: "01", description: "Clean lines. Thoughtful details." },
  { id: "pixel", name: "Pixel", label: "02", description: "Small pixels. Big possibilities." },
  { id: "terminal", name: "Terminal", label: "03", description: "Built from the command line." },
] as const;

export type Design = (typeof designs)[number]["id"];
