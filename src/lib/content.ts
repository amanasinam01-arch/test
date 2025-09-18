import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { Octokit } from 'octokit';

const CONTENT_FILE = join(process.cwd(), 'src/data/content.json');

export interface ContentData {
  branding: {
    companyName: string;
    logo: string;
  };
  hero: {
    announcement: string;
    title: string;
    subtitle: string;
    launchDate: string;
    emailPlaceholder: string;
    ctaText: string;
  };
  process: {
    title: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
    legalServices: string[];
    bottomSection: {
      title: string;
      subtitle: string;
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    tiers: Array<{
      name: string;
      price?: number;
      priceText?: string;
      interval: string;
      description: string;
      ctaText: string;
      highlight?: boolean;
    }>;
  };
  bentoGrid: {
    badge: string;
    title: string;
    subtitle: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
  };
  waitlist: {
    badge: string;
    title: string;
    subtitle: string;
    emailPlaceholder: string;
    ctaText: string;
  };
  featureComparison: {
    badge: string;
    title: string;
    subtitle: string;
    competitors: string[];
    bottomCta: {
      title: string;
      subtitle: string;
      ctaText: string;
    };
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  countdownSection: {
    title: string;
    subtitle: string;
    targetDate: string;
  };
  footer: {
    title: string;
    subtitle: string;
    emailPlaceholder: string;
    ctaText: string;
    companyName: string;
    copyright: string;
    location: string;
    links: Array<{
      text: string;
      href: string;
    }>;
  };
}

export async function getContent(): Promise<ContentData> {
  try {
    // Development: Always read fresh from file
    // Production: Read from GitHub or cached file
    const content = JSON.parse(readFileSync(CONTENT_FILE, 'utf-8'));
    console.log('Content loaded from file');
    return content;
  } catch (error) {
    console.error('Failed to load content from file:', error);
    // Default fallback content
    console.log('Using default fallback content');
    const defaultContent: ContentData = {
      branding: { companyName: "DesignBell", logo: "/logo.png" },
      hero: {
        announcement: "🎉 Launching September 25",
        title: "Construction Law Made Simple. Get Paid. Stay Safe. Cut Legal Costs.",
        subtitle: "The first AI-powered legal assistant built for Aussie builders, subcontractors, and tradies.",
        launchDate: "2025-09-25T00:00:00",
        emailPlaceholder: "your.email@domain.com",
        ctaText: "Join the Waitlist Today"
      },
      process: {
        title: "From Problem to Solution in 3 Simple Steps",
        subtitle: "Forget $500/hour lawyer bills. Here's how we protect your business:",
        steps: [
          { title: "Subscribe", description: "Flat monthly fee.\nNo hidden extras." },
          { title: "Request", description: "Ask for contracts, payment claims,\nWHS help, or anything legal." },
          { title: "Receive", description: "Get what you need\nin 24–48 hours." }
        ],
        legalServices: ["Payment Claims (SoP)", "Contract Reviews", "WHS Compliance", "Employment Law"],
        bottomSection: {
          title: "All the Legal Protection You'll Ever Need.\nOne Subscription.",
          subtitle: "It's like having a construction lawyer in your pocket — for less than one site fine."
        }
      },
      pricing: {
        title: "Simple Pricing",
        subtitle: "Choose the plan that fits your business. No hidden fees, no scary lawyer invoices.\nProtect your business today.",
        tiers: [
          { name: "👷 Starter", price: 295, interval: "per month", description: "For sole traders & subbies", ctaText: "Get Started" }
        ]
      },
      bentoGrid: {
        badge: "The Difference",
        title: "We Built This for Construction SMEs —\nNot Big Corporates.",
        subtitle: "Law firms weren't built for tradies. We were. Fast, simple, affordable legal support when you need it most.",
        cards: [
          { title: "World-Class, Every Time", description: "Get expert construction law advice without paying expert rates." },
          { title: "Unlimited Requests", description: "Contracts, claims, compliance — ask as often as you need." },
          { title: "Flat Monthly Fee", description: "No scary lawyer invoices." },
          { title: "Quick Turnarounds", description: "Answers in as little as 48 hours." },
          { title: "Yours to Keep", description: "Every doc we prepare is 100% yours." },
          { title: "Flexible Plans", description: "Pause or upgrade anytime." }
        ]
      },
      waitlist: {
        badge: "🚧 Launching Soon — Join Our Founding Members",
        title: "Join the Waitlist",
        subtitle: "Secure early access, discounted pricing, and peace of mind for your business.",
        emailPlaceholder: "your.email@domain.com",
        ctaText: "Join Waitlist"
      },
      featureComparison: {
        badge: "Feature Comparison",
        title: "Why Choose Us Over Traditional Law Firms?",
        subtitle: "See how we stack up against expensive traditional legal services.",
        competitors: ["Traditional Law", "Online Services", "Construction Legal"],
        bottomCta: {
          title: "Ready to Switch to Smarter Legal Support?",
          subtitle: "Join hundreds of construction professionals who've made the switch.",
          ctaText: "Get Started Today"
        }
      },
      faq: {
        title: "FAQ's",
        items: [
          { question: "What is this?", answer: "Your subscription-based legal assistant for construction SMEs. Powered by AI, backed by real lawyers." }
        ]
      },
      countdownSection: {
        title: "One Subscription. Unlimited Legal Protection.",
        subtitle: "Stop losing sleep over payments, fines, and contracts. Secure your spot today.",
        targetDate: "2025-09-25T00:00:00"
      },
      footer: {
        title: "One Subscription.\nUnlimited Designs.",
        subtitle: "Secure a Founding Member spot.",
        emailPlaceholder: "your.email@domain.com",
        ctaText: "Join Waitlist",
        companyName: "DesignBell",
        copyright: "©2025 DesignBell LLC",
        location: "Headquartered in Wyoming, US",
        links: [
          { text: "Terms of service", href: "#" },
          { text: "Privacy Policy", href: "#" }
        ]
      }
    };
    return defaultContent;
  }
}

// GitHub CMS configuration
const GITHUB_CONFIG = {
  owner: process.env.GITHUB_REPO_OWNER || 'your-username',
  repo: process.env.GITHUB_REPO_NAME || 'designbell-clone', 
  path: 'src/data/content.json',
  branch: 'main'
};

export async function updateContent(content: ContentData): Promise<{ success: boolean; error?: string; message?: string }> {
  try {
    // Only update local file in development
    if (!process.env.VERCEL) {
      writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2));
      console.log('Content saved to local file');
    }
    
    // Always update GitHub API
    if (!process.env.GITHUB_TOKEN) {
      return { 
        success: false, 
        error: 'GitHub token not configured. Set GITHUB_TOKEN environment variable.' 
      };
    }

    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    // Get current file to get SHA (required for updates)
    const { data: currentFile } = await octokit.rest.repos.getContent({
      owner: GITHUB_CONFIG.owner,
      repo: GITHUB_CONFIG.repo,
      path: GITHUB_CONFIG.path,
    });

    // Update file content
    const contentString = JSON.stringify(content, null, 2);
    const contentBase64 = Buffer.from(contentString).toString('base64');

    await octokit.rest.repos.createOrUpdateFileContents({
      owner: GITHUB_CONFIG.owner,
      repo: GITHUB_CONFIG.repo,
      path: GITHUB_CONFIG.path,
      message: `Update CMS content via admin panel - ${new Date().toISOString()}`,
      content: contentBase64,
      sha: Array.isArray(currentFile) ? undefined : currentFile.sha,
      branch: GITHUB_CONFIG.branch,
    });

    console.log('Content updated in GitHub repository');
    
    // Trigger Vercel deployment (optional webhook)
    if (process.env.VERCEL_DEPLOY_HOOK) {
      try {
        await fetch(process.env.VERCEL_DEPLOY_HOOK, { method: 'POST' });
        console.log('Vercel deployment triggered');
      } catch {
        console.log('Failed to trigger deployment, but content was updated');
      }
    }

    return { 
      success: true, 
      message: 'Content updated in GitHub. Site will redeploy automatically.' 
    };

  } catch (error) {
    console.error('GitHub content update error:', error);
    return { 
      success: false, 
      error: 'GitHub update failed: ' + (error instanceof Error ? error.message : 'Unknown error')
    };
  }
}