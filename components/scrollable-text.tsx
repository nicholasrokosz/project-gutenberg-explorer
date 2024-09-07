'use client'

import { ScrollArea } from "@/components/ui/scroll-area"

interface ScrollableTextProps {
  text: string;
  title?: string;
}

export function ScrollableText({ 
  text = "No content provided.", 
  title = "Scrollable Text" 
}: ScrollableTextProps) {
  return (
    <div className="w-full max-w-md mx-auto p-4 bg-background rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-primary">{title}</h2>
      <ScrollArea className="h-[300px] rounded-md border p-4">
        <div className="text-sm text-foreground">
          {text.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

// Example usage
const longText = `Deep in the heart of an ancient woodland, where sunlight filtered through a canopy of emerald leaves, there lay a hidden realm known as the Enchanted Forest. This mystical place was home to creatures both magical and mundane, existing in harmony with the pulsing life force of the forest itself. Towering oak trees, their bark etched with glowing runes, stood as silent sentinels guarding long-forgotten secrets. Delicate fairy rings dotted clearings carpeted with soft moss, while luminescent mushrooms cast an otherworldly glow in the deepest shadows.

Whispers of an old magic lingered in the air, carried on breezes that seemed to speak in hushed tones. Those who wandered these paths often spoke of encounters with mischievous sprites, wise talking animals, and even the occasional unicorn glimpsed through the mist. At the heart of the forest stood an ancient willow tree, its drooping branches swaying gently to an unheard melody. It was said that this tree held the spirit of the forest within its roots, and those pure of heart could sometimes hear its gentle whispers of wisdom.

As day turned to night, the Enchanted Forest transformed. Fireflies danced in intricate patterns, illuminating the darkness with their soft, pulsing light. Nocturnal creatures emerged from their daytime slumbers, adding their voices to the symphony of the forest night.`;

// Render the component with the long text
export function Example() {
  return <ScrollableText text={longText} title="The Enchanted Forest" />;
}