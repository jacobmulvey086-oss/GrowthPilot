import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatRequestBody {
  messages: Message[];
  goal?: string;
  niche?: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { messages, goal, niche }: ChatRequestBody = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages format' }, { status: 400 });
    }

    // OpenAI API key
    const apiKey = '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';

    // Initialize OpenAI client
    const openai = new OpenAI({
      apiKey: apiKey,
    });

    // Build context-aware system prompt
    let systemPrompt = `You are a helpful PathFinder AI assistant specialized in helping people reach their income goals. Your job is to:
- Help users understand and complete their income-generating tasks
- Provide actionable, beginner-friendly advice
- Break down complex tasks into simple, doable steps
- Keep responses brief, friendly, and actionable (2-3 sentences max)
- Use emojis occasionally to be engaging 🚀

Always be supportive, practical, and results-focused.`;

    // Add specific context if goal and niche are provided
    if (goal && niche) {
      systemPrompt += `\n\nCurrent user context:
- Income Goal: ${goal}
- Business Niche: ${niche}

Provide advice specific to ${niche} businesses targeting ${goal}. Reference relevant tools, platforms, and strategies for this exact path:

${getPathSpecificGuidance(goal, niche)}`;
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 250,
    });

    const assistantMessage = completion.choices[0]?.message?.content || "Sorry, I couldn't process that.";

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to get AI response. Please make sure OPENAI_API_KEY is set in your environment.' },
      { status: 500 }
    );
  }
}

// Helper function to provide path-specific guidance
function getPathSpecificGuidance(goal: string, niche: string): string {
  const guidance: Record<string, Record<string, string>> = {
    'Dropshipping': {
      '$1k/mo': 'Focus on: Shopify setup, TikTok trending products, AliExpress suppliers, basic UGC ads, testing with $5-10/day budgets',
      '$5k/mo': 'Focus on: Scaling winning products, email flows (Klaviyo), CBO/ABO testing, upsells, quality suppliers',
      '$10k/mo': 'Focus on: Multi-channel traffic (Google + Meta), UGC creators, influencer seeding, 3PL, multiple SKUs',
    },
    'Content Creation': {
      '$1k/mo': 'Focus on: Choosing niche, creating profile, using ChatGPT for ideas, CapCut for editing, daily posting, email list building',
      '$5k/mo': 'Focus on: Content pillars, brand kit, collaborations, mini digital products ($9-19), media kit for sponsors',
      '$10k/mo': 'Focus on: Flagship course/consulting, newsletter, multi-platform, sponsorships, team (editor), predictable funnel',
    },
    'Digital Products': {
      '$1k/mo': 'Focus on: Pain point research (Reddit), creating templates/checklists in Canva/Notion, Gumroad setup, lead magnets',
      '$5k/mo': 'Focus on: Upsell ladder ($19→$49), affiliate program, paid ads ($10/day), SEO content, email nurturing',
      '$10k/mo': 'Focus on: Flagship product ($99-199), webinar launches, bundles, community/office hours, conversion optimization',
    },
    'Agency/Freelancing': {
      '$1k/mo': 'Focus on: Tight offer (e.g., short-form editing), portfolio with 2 samples, LinkedIn outreach (20/day), first client at $500-1k',
      '$5k/mo': 'Focus on: Industry specialization, case studies, CRM pipeline, retainers, hiring VA/editor, weekly client updates',
      '$10k/mo': 'Focus on: Repeatable offers, team SOPs, content for inbound, partnerships, raised prices, capacity planning',
    },
  };

  return guidance[niche]?.[goal] || 'General business growth strategies for beginners';
}
