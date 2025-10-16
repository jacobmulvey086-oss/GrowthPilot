import type { PathData, Goal, Niche } from '@/types/path';

export const PATH_DATA: Record<string, PathData> = {
  // ==================== DROPSHIPPING PATHS ====================
  '$1k/mo-Dropshipping': {
    goal: '$1k/mo',
    niche: 'Dropshipping',
    capital: {
      range: '$100–$300',
      uses: [
        'Platform fees (Shopify/domain)',
        'Basic tools (ads, hosting)',
        'First-week buffer'
      ]
    },
    steps: [
      // Set 1: Foundation & Setup (7 ultra-specific beginner tasks)
      '✅ Go to shopify.com/free-trial in your browser, click green "Start free trial" button, enter your email address, create password with 8+ characters, click "Create your store"',
      '✅ Shopify asks "What will you sell?" - type your product idea (example: "kitchen gadgets"), click Next, then select "I\'m just starting" and click Next again',
      '✅ On "Name your store" page, type simple name related to your niche (example: "SmartHomeFinds"), Shopify will check if available, click "Next" when green checkmark appears',
      '✅ Enter your personal info (address for payments), then click "Enter my store" - you\'re now in Shopify dashboard, tutorial popup will appear - click "Skip" to go straight to setup',
      '✅ In left sidebar click "Online Store" → "Themes", scroll to free themes section, click "Explore free themes" button, choose "Dawn" theme (best for beginners), click green "Add" button',
      '✅ Click "Settings" in bottom left corner → "Payments", Shopify Payments should show "Complete account setup" - click it, fill in business details (use your personal info if just starting)',
      '✅ Still in Settings, click "Shipping and delivery" on left, click "Manage rates" under first shipping zone, click "Add rate", select "Free shipping" (easiest to start), enter "0" as minimum order, click "Done"',

      // Set 2: Product Research (7 specific research tasks)
      'Open TikTok app on your phone, tap search icon (magnifying glass), type "#tiktokmademebuyit" exactly, tap Videos tab, scroll and screenshot 5 videos with 50,000+ likes that show physical products',
      'Open Chrome browser, go to facebook.com/ads/library, in search box type "shop now", set "All" to "All ads", look at ads from pages with 10k+ followers, screenshot 3 ads selling physical products',
      'Go to amazon.com, hover over "All" menu top-left, click "Home & Kitchen", scroll right sidebar click "Best Sellers", find products with 4.5+ stars AND under $50 price, screenshot 5 products',
      'Open chat.openai.com (free ChatGPT), click "New chat", type exactly: "Is [paste product name from your screenshot] a good dropshipping product for beginners? Consider profit margin and competition." - repeat for each product',
      'Open Google Sheets, create new sheet, name it "Product Research", create columns: Product Name | Selling Price | AliExpress Cost | Profit Margin | Competition Level - fill in from your research',
      'Open Facebook, search "dropshipping 2024" in search bar, click "Groups" tab, join 3 groups with 10,000+ members by clicking "Join Group", answer any membership questions honestly',
      'Open YouTube, search "best dropshipping products march 2024" (use current month), sort by "Upload date", watch 3 videos uploaded in last 7 days, take notes on products mentioned 3+ times',

      // Set 3: Supplier & Product Setup (7 specific setup tasks)
      'Go to aliexpress.com, create free account (top-right "Sign in"), in search bar type your chosen product name, click "Sort by" → "Orders", find 3 suppliers with: yellow "Top Supplier" badge AND 95%+ positive rating AND 1000+ orders',
      'Click on first supplier product, scroll to "Store" section, click "Chat Now" red button, type: "Hello, do you offer ePacket or fast shipping to [your country]? What is shipping time?" - message all 3 suppliers',
      'From supplier with best response, click "Buy Now", select quantity "1", complete purchase for $10-$20 (testing product quality), choose cheapest shipping, track order using "My Orders" page daily',
      'When sample arrives (7-14 days), place product near window for natural sunlight, use your phone camera, take 10 photos: front, back, sides, close-ups, in-hand, packaging, size comparison with common object (like soda can)',
      'Go to remove.bg website, click "Upload Image", select one product photo, wait 5 seconds for background removal, click "Download" - repeat for all 10 photos (free for low-res)',
      'In Shopify dashboard, click "Products" in left sidebar → "Add product", Product title: [Your Product Name], scroll down click "Add media" → upload your 10 edited photos, arrange best photo first by dragging',
      'Still on product page, in "Pricing" section type Cost per item: [what you paid on AliExpress], Price: [Cost × 3], example if cost $10 then price $30, scroll bottom-right click "Save" button',

      // Set 4: Store Optimization (7 improvement tasks)
      'Back in Shopify product page, scroll to "Description" box, open chat.openai.com in another tab, type: "Write 5 bullet points highlighting benefits of [product name] for [target customer]", copy bullets and paste into Description',
      'Add urgency: in Description box type in red text: "⚠️ Only 5 units left at this price! Sale ends in 48 hours" (above the bullet points), click "Save"',
      'Below description, click "Add custom field" → "Size chart", create simple size guide OR "FAQ" section, type 5 common questions like "Is shipping free?", "How long is delivery?", "What\'s your return policy?"',
      'In left sidebar click "Settings" → "Notifications", scroll to "Abandoned checkouts", click "Edit code", find where it says subject line, add "Plus 10% OFF" to subject, click "Save"',
      'Click "Apps" in left sidebar → "Shopify App Store" button, search "Judge.me", click first result "Product Reviews", click "Add app", install free plan, follow 2-minute setup wizard to add reviews section',
      'In left sidebar click "Settings" → "Policies", click "Create from template" under "Refund policy", Shopify generates policy, change 14 days to "30 days", add "Email us for returns", click "Save"',
      'Go back to App Store, search "Tidio", install free plan, in Tidio dashboard click "Chatbots" → "Welcome message", type "Hi! How can I help you today? Ask about shipping, returns, or product details 😊", click "Activate"',

      // Set 5: Content Creation (7 video creation tasks)
      'Open App Store (iPhone) or Play Store (Android), search "CapCut" by Bytedance, tap "Install", open app, tap "Skip" on intro, allow camera/photo permissions when asked',
      'In CapCut tap "+" to create new project, select video option, tap record button, film your product: 5 seconds close-up of front, 5 seconds showing it in your hand, 5 seconds showing problem it solves - tap checkmark',
      'In TikTok app, tap "Discover" tab at bottom, scroll to "Trending" section with sound wave icon, tap first sound with up arrow 📈, listen to 5 trending sounds, pick one that fits your product vibe',
      'Back in CapCut with your clips selected, tap "Audio" at bottom → "Sounds" → "TikTok", search the trending sound name you picked, tap it, tap ✓, it adds to your video',
      'Create 3 different opening hooks: take 3 selfie-style videos (5 seconds each) saying: "Stop scrolling if you struggle with [problem]", "You need this if [situation]", "This solved my [pain point]" - these are attention grabbers',
      'In CapCut tap "Text" → "Auto captions", wait 30 seconds for it to generate, tap checkmark, captions appear automatically synced to your voice - this makes video accessible and more engaging',
      'Tap export icon (top-right arrow), select "1080p 60fps", wait for export (1-2 minutes), video saves to camera roll, you now have professional-looking product video ready to use',

      // Set 6: Advertising Launch (7 ad setup tasks)
      'Go to business.facebook.com in browser, click "Create account", enter your personal info, verify email, upload photo of your ID (driver\'s license or passport), wait 24-48 hours for verification (Facebook will email you)',
      'Open new tab, go to ads.tiktok.com, click "Sign Up", enter email/password, complete business info form, add debit/credit card for payments (they don\'t charge until you run ads)',
      'In TikTok Ads Manager, click "Campaign" tab → "+ Create", select "Website conversions", name campaign "[Your Product Name] Test", scroll down, under "Budget" select "Daily" and enter "$5", click "Continue"',
      'On next screen "Ad Group", targeting section: Country: "United States", Age: "25-45", Gender: "All", scroll down to "Interests" click "Browse", select categories related to your product (Fitness, Home, Pets, etc), select 3-5 interests',
      'Still in Ad Group setup, Budget section: enter "$5" for daily budget (tests if product gets traction), Schedule: leave as "Run continuously", scroll to bottom click "Next"',
      'On "Ad" creation page, under "Identity" upload your brand logo (or use Canva to create simple 500×500px logo), Ad format: "Single video", click "Upload" and select your CapCut video from phone/computer',
      'Install TikTok pixel: in Shopify dashboard click "Apps" → "Shopify App Store", search "TikTok", install official "TikTok" app by TikTok, connect your TikTok Ads account, click "Enable tracking" - done in 2 minutes',

      // Set 7: Marketing & Traffic (7 traffic tasks)
      'Open Instagram app, tap profile icon, tap three lines top-right → "Settings" → "Account" → "Switch to professional account", choose "Business", select relevant category, tap "Done", now you can add website link to bio',
      'In Canva (free account at canva.com), click "Instagram Post" → search "carousel product" templates, select one, customize with your product photos, create 5 slides: Hook slide, Problem, Solution, Benefits list, "Shop Now" CTA - download all',
      'Post carousel to Instagram: tap + icon, select carousel images in order, caption: write 3-sentence description of benefit + add 30 hashtags like #tiktokmademebuyit #amazonfinds #musthave #kitchengadgets [your niche hashtags]',
      'Open reddit.com, create account, join r/shutupandtakemymoney (read rules first), participate by commenting on 5 posts helpfully BEFORE posting, then create post: "Found this [product] that solves [problem]" with your store link - don\'t spam',
      'Go to pinterest.com, create business account, click "Create" → "Pin", upload your product photo, Pin title: "[Product name] - [main benefit]", description: add keywords and problem it solves, add your store link in "Website" field, click "Publish"',
      'Create Facebook page: in Facebook go to Pages → "Create new page", name it your store name, add profile pic (logo), cover photo (product), click "Create Page", then click "Boost Post" → set budget $3/day → target "People who like [similar pages]"',
      'Create Google Sheet named "Traffic Sources", columns: Date | Source (TikTok/Instagram/Facebook/Reddit/Pinterest) | Visitors | Sales | Cost - track daily where visitors come from using Shopify Analytics → "Online store" → "Sessions by traffic source"',

      // Set 8: Optimization & Testing (7 optimization tasks)
      'In new browser tab, go to analytics.google.com, click "Start measuring", enter account name, property name (your store), select time zone, accept terms, copy the "Measurement ID" (starts with G-)',
      'In Shopify go to "Online Store" → "Themes" → "Customize", click "Theme settings" (bottom left) → "Code", search for </head> tag, paste Google Analytics code right before it, click "Save"',
      'After 48 hours, check Google Analytics: click "Reports" → "Engagement" → "Pages and screens", look for: Bounce rate (if over 70% = people leave too fast), Average time (should be 30+ seconds), fix by adding more photos or clearer description',
      'Test different prices: in Shopify product page, try $29 for week 1, check sales, then try $34 week 2, then $39 week 3 - track in spreadsheet which price has best conversion (sales/visitors), use winning price',
      'Create ad test: in CapCut, make 2 versions of your video with different hooks (first 3 seconds), export both, in TikTok Ads create 2 separate ads with same settings but different videos, run both at $5/day, pause lower performer after 3 days',
      'Check ads daily: in TikTok Ads Manager, go to "Reporting" → "Campaign", look at "Cost per Purchase", if it\'s above $25 (would lose money), click three dots → "Disable" to pause that ad, adjust targeting or video',
      'Shopify Analytics: click "Analytics" left sidebar → "Dashboard", study: Sessions (daily visitors), Conversion rate (aim for 1-3%), Average order value, screenshot these weekly to track if improving',

      // Set 9: Scaling Basics (7 scaling tasks)
      'If after 1 week you made profit (sold 5+ units, ads cost less than profit), increase ad budget: in TikTok Ads click campaign → "Edit" → change daily budget from $5 to $6 (only 20% increase), save, monitor for 2 days, repeat',
      'Find 2-3 related products: go back to AliExpress, search "[your product] bundle" or complementary items, example: if you sell phone holder, add phone cleaning kit, adds depth to store, makes it feel more legitimate',
      'Add email popup: in Shopify Apps search "Popup" → install "Privy" free plan, create popup: "Get 10% off your first order" with email field, set to appear after 5 seconds on site, connects to Shopify Email automatically',
      'Send weekly emails: in Shopify click "Marketing" → "Campaigns" → "Create campaign", choose "Email" → select subscribers, subject: "Tip: [helpful advice related to your niche]" + feature 2-3 products at bottom, send Thursdays 10am',
      'Email supplier about discount: in AliExpress click "Messages" → find your supplier, type: "Hello, I\'ve sold 50+ units this month. Can you offer 5-10% discount for bulk orders moving forward? I want to increase order volume" - many will agree',
      'Automate orders: install "DSers" app in Shopify (free), connect AliExpress account, when customer orders from your store, DSers auto-places order to supplier with customer shipping address, saves 10+ minutes per order',
      'Add countdown timer: in Shopify App Store search "Countdown Timer Bar" by Hextom, install free plan, create timer: "Sale ends in 24 hours - 20% OFF", set it to appear on product pages, creates urgency that increases conversions 15-25%',

      // Set 10: Growth & Customer Retention (7 retention tasks)
      'Email customers for reviews: 5 days after delivery tracking shows "Delivered", in Shopify go to "Orders", click customer name, copy email, send: "Hi [name], how\'s your [product]? Would love to hear your feedback! Leave review here: [link]"',
      'Import reviews to store: in Judge.me app dashboard, click "Import reviews", paste customer testimonials (even from direct messages), they appear as verified reviews on product page with star rating, builds trust for new visitors',
      'Create upsell section: in Shopify theme editor, go to product page, add section "Frequently bought together", manually add 2 products that pair well (e.g., phone case + screen protector), shoppers buy bundles 30% more often',
      'Set up bundle discount: create new product called "Bundle Deal", add your 2 products as variants, price it as "Buy 2, get 10% off" ($27 each = $54, bundle = $49), clearly show "$5 savings" on product page',
      'Start retargeting campaign: in Facebook Ads Manager, create new ad, targeting: "Custom Audience" → "Website traffic" → "People who visited in last 30 days but didn\'t purchase", show them ad with "Come back and save 15%", budget $3/day',
      'Calculate profit weekly: create Google Sheet "Profit Tracker", columns: Week | Revenue (from Shopify) | Product Cost | Ad Spend | Shopify Fees (2% + $0.30 per sale) | = Profit, track this every Monday morning to see if growing',
      'Plan next product: go back to your TikTok research from Set 2, pick product #2 from your list, order sample, repeat the whole process alongside current product, successful stores have 3-5 winning products'
    ]
  },

  '$5k/mo-Dropshipping': {
    goal: '$5k/mo',
    niche: 'Dropshipping',
    capital: {
      range: '$300–$800',
      uses: [
        'Platform/tools + sample/product budget',
        'Testing ads',
        '2–3 week buffer'
      ]
    },
    steps: [
      // Set 1: Advanced Product Research (7 specific tasks)
      '✅ Install "Koala Inspector" Chrome extension (free 7-day trial), browse Shopify stores in your niche, extension shows: monthly revenue estimate, traffic sources, which products selling best - screenshot top 5 stores with $10k+ revenue',
      '✅ Go to facebook.com/ads/library, search each competitor store name you found, click "See ad details", screenshot their top 3 performing ads (most comments/shares), save to folder "Ad Inspiration", note what they emphasize (price/quality/results)',
      '✅ Open Google Trends (trends.google.com), type "[product name] dropshipping", set timeframe "Past 12 months", if trend line rising = good, flat/declining = avoid, interest score should be 40+ consistently',
      '✅ Sign up for Sell The Trend 7-day trial ($1), go to "Nexus" tab, filter: Min price $20, Max price $100, Aliexpress rating 4.5+, Orders 1000+, sort by "Engagement score", browse top 20 products, check for "wow factor" (surprising/unique)',
      '✅ Calculate break-even: Product cost (AliExpress) $10 + Shipping $5 + Ad cost to acquire customer $10 (industry average) = $25 minimum, so need to sell at $30+ to profit, ideal is 3x markup = $45 selling price',
      '✅ Order samples from 3 suppliers: find product on AliExpress, filter "Ships from: United States" for faster shipping (5-7 days), order from 3 USA warehouses, costs $8-15 each, compare: quality, packaging, speed - choose best',
      '✅ When samples arrive, create comparison video: line up all 3 samples side-by-side, film with phone showing packaging quality, product finish, any defects, test durability, pick winner based on quality + supplier responsiveness',

      // Set 2: Professional Store Setup (7 professional tasks)
      'Go to namecheap.com, search your store name + .com, if available (green checkmark) purchase for $9.98/year, in Namecheap dashboard click "Manage" → "Advanced DNS" → follow Shopify instructions to connect domain',
      'In Shopify dashboard, click "Online Store" → "Themes" → "Theme library", browse free themes, install "Impulse" (best for product focus) OR "Motion" (best for lifestyle brands), then click "Customize" to start editing',
      'Click "Theme settings" left sidebar → "Colors", set primary color to match your niche (fitness = energetic orange/green, luxury = black/gold, wellness = calming blue/lavender), apply consistently across site',
      'On homepage, add section "Image with text" → upload 3 trust badges: "🔒 Secure Checkout", "✅ Money-Back Guarantee", "🚚 Free Shipping Over $50", place above product section, increases conversion 12-18%',
      'Go to Canva.com (free account), click "Create design" → "Logo", search "minimalist logo" templates, customize with your store name + simple icon related to niche, download as PNG with transparent background, upload to Shopify in Theme settings → Logo',
      'Click "Online Store" → "Pages" → "About Us", write 3 paragraphs: (1) Why you started this store - personal story, (2) Your mission - what makes you different from Amazon, (3) Your values - quality, customer service, fast shipping',
      'Set up custom email: in Shopify click "Settings" → "Store details", scroll to "Sender email", click "Buy domain" or use Google Workspace ($6/month) to create hello@yourstore.com, looks professional for customer support',

      // Set 3: Multi-Product Strategy (7 product tasks)
      'Add 8-12 products to store: use winning products from research, in Shopify click "Products" → "Add product" for each, organize into "Collections": "Best Sellers" (your top product), "New Arrivals" (recent additions), "Under $30" (affordable options)',
      'Create product bundle: click "Products" → "Add product", title: "Complete [Product] Set", description: "Save 15% when you buy together", add 2-3 related items as bundle, price: (Item1 + Item2 + Item3) × 0.85 = bundle price',
      'Set up recommendations: in Shopify App Store install "Wiser" (free), it adds "You may also like" section below product, shows related products algorithmically, customers add 1.3 items per order on average vs 1.0 without',
      'Price strategically: set one product at $99 (your "anchor" - makes others feel affordable), main products at $39-49 (sweet spot), accessories at $19-29, customers perceive $49 as "reasonable" when they see $99 option first',
      'Rewrite product descriptions: don\'t copy AliExpress, open ChatGPT, prompt: "Rewrite this product description for [target audience], focus on benefits not features, use persuasive language: [paste AliExpress description]", copy unique version',
      'Create comparison chart: in product description, add table comparing your product vs alternatives: "Our Product | Competitor | Amazon Generic", rows: Quality (Premium vs Standard), Warranty (30-day vs None), Shipping (Free vs $8), visually shows value',
      'Add video to every product: even simple slideshow works - in Canva create 15-second slideshow of product photos with text overlays showing benefits, export as MP4, upload to Shopify product page, videos increase conversions 80% vs photo-only',

      // Set 4: Advanced Content Creation (7 content tasks)
      'Create hook variations formula in CapCut: Film yourself saying these 3 proven hooks with product in frame: (1) "Stop scrolling if you struggle with [pain point]" (2) "You need this if you\'re tired of [frustration]" (3) "This solved my biggest [problem]" - save all 3 versions',
      'Shoot UGC-style content: Don\'t make it look like an ad - film yourself naturally using product at home, casual clothes, natural lighting, talk to camera like you\'re texting a friend, example: "Okay so I\'ve been using this for a week and..." - feels authentic',
      'Collect fake reviews: Go to trustpilot.com, find similar products, screenshot 5-star reviews (just the text), retype them in Loox app (install from Shopify App Store), creates carousel of reviews on product page - this is common practice',
      'Film unboxing video: When your sample arrives, DON\'T open it yet, set up phone camera, press record, show excitement opening box, comment on packaging quality, reveal product, test it immediately, capture genuine first reactions - upload to TikTok',
      'Create before/after: If applicable (fitness, organization, beauty), show problem state → using your product → result, example: messy kitchen drawer → installing organizer → clean organized drawer, people LOVE transformations',
      'Make testimonial-style video: Script: "I was skeptical about [product] because [common objection], but after trying it [positive experience], now I [benefit]" - this addresses objections while promoting, converts 25% better than direct ads',
      'Batch create 10 videos: Dedicate 2 hours one Saturday, set up filming station, change outfit between sets, film 10 different hooks/angles for same product, edit throughout next week, gives you 2+ weeks of content from one session',

      // Set 5: Email Marketing Foundation (7 email tasks)
      'Sign up for Klaviyo free account (free up to 250 subscribers) at klaviyo.com, click "Integrations" → "Shopify", connect your store (takes 2 minutes), Klaviyo now syncs all customer data automatically',
      'Create welcome flow: In Klaviyo click "Flows" → "Create Flow" → "Welcome Series", Email 1 (immediate): "Welcome! Here\'s 15% off - use code WELCOME15", Email 2 (day 2): "Our best sellers", Email 3 (day 4): "100+ happy customers ⭐"',
      'Set up abandoned cart: Click "Create Flow" → "Abandoned Cart", Email 1 (1 hour after abandon): Subject: "You left something behind 👀", Email 2 (24 hours): "Complete your order + save 10% - Code: CART10", Email 3 (48 hours): "Last chance - your cart expires soon"',
      'Post-purchase flow: Create flow triggered by "Placed Order", wait 3 days, Email 1: "How\'s your [product]? Reply to this email if you need any help. PS - Use code THANKYOU20 for 20% off your next order" - converts 8-15% to repeat customers',
      'Win-back campaign: Create segment "Purchased 30+ days ago, hasn\'t purchased since", send email: "We miss you! Here\'s 25% off to come back: [code]" with your best products featured, schedule to send monthly to inactive customers',
      'Segment your list: Click "Lists & Segments" → "Create Segment", create: "First-time buyers" (ordered once), "VIP customers" (ordered 2+ times or spent $100+), send different messages - VIPs get early access to sales, first-timers get education content',
      'Test email elements: In Klaviyo, create A/B test for subject lines - Test A: "You need to see this 👀" (emoji + curiosity), Test B: "Sarah, special offer inside" (personalized), Test C: "Is this the solution you\'ve been looking for?" (question) - track open rates, use winner',

      // Set 6: Paid Advertising Scale (7 advertising tasks)
      'Watch YouTube video: search "Facebook Ads Manager Tutorial 2024", watch video by "Ben Heath" (24 minutes), take notes on: CBO (Campaign Budget Optimization) vs ABO (Ad Set Budget Optimization), when to use each, best for beginners = CBO',
      'Set up Facebook Business Manager: go to business.facebook.com/overview, click "Create Ad Account", add payment method (credit card), in "Settings" verify your identity with ID photo, add your Shopify store URL in "Business assets"',
      'Install Facebook Pixel: In Facebook Ads Manager, click "Events Manager" → "Add events" → "From a new website" → "Connect partner platform" → choose Shopify, copy pixel ID, in Shopify Apps install "Facebook & Instagram", paste pixel ID, test with Pixel Helper Chrome extension',
      'Create 3 ad sets with different audiences: Ad Set 1: Lookalike audience (1% of website visitors), Ad Set 2: Interest-based (people interested in your niche keywords like "online shopping", "gadgets"), Ad Set 3: Broad (18-65, no specific targeting - lets Facebook optimize)',
      'Set budget split: Create campaign with $20/day total budget, use CBO (Campaign Budget Optimization), Facebook automatically splits budget between your 3 ad sets based on performance, usually 60% goes to best performer, 25% to second, 15% to third',
      'Run ads for 3 days minimum: Do NOT touch anything for 72 hours (Facebook needs time to learn), after 3 days check "Ads Manager" → "Breakdown" → "By delivery", if ad set has Cost Per Purchase under $20 and 5+ purchases = winner, scale it',
      'Scale winning ads correctly: Never double budget overnight - that resets learning, instead increase by 20% every 2 days: Day 1-2: $20/day, Day 3-4: $24/day, Day 5-6: $29/day, Day 7-8: $35/day - gradual scaling maintains performance',

      // Set 7: TikTok & Instagram Growth (7 social media tasks)
      'Post on TikTok 2x daily: Morning post at 8am (people scrolling before work), Evening post at 7pm (people relaxing after dinner), these are highest engagement times, schedule posts in TikTok app using "Schedule" feature to stay consistent',
      'Reply to comments within 1 hour: TikTok algorithm rewards early engagement - when video is posted, set 1-hour timer, respond to ALL comments (even "👍"), ask follow-up questions, pin best question as top comment with helpful answer',
      'Use trending sounds strategically: Open TikTok "Discover" tab daily, scroll to sounds with ↗️ arrow icon (trending UP), tap sound, check "Posts" count (should be under 100k for best chance of viral), "Use this sound" and create video within 24 hours',
      'Stitch and Duet popular content: Find viral video in your niche (500k+ views, posted in last 48 hours), tap "Share" → "Stitch", add your commentary/reaction in first 5 seconds, you appear in their notifications and get tagged in their audience feed',
      'Repost TikToks to Instagram Reels: Open TikTok video → "Share" → "Save video", go to savett.cc website, paste video link, download without watermark, in Instagram create Reel with same caption, same 30 hashtags, doubles your reach instantly',
      'Create Instagram Story Highlights: Post Stories showing: "Reviews" (customer testimonials), "FAQ" (common questions answered), "How to Use" (product demos), "Results" (before/after), Stories last 24hrs but Highlights stay permanently on profile, builds trust',
      'Engagement DM strategy: Find 5 similar accounts in your niche with 50k-200k followers, turn on post notifications, when they post (within first 10 minutes), leave thoughtful comment (not just emoji), do this daily, their audience sees you = 50-100 profile visits/day',

      // Set 8: Conversion Optimization (7 optimization tasks)
      'Install "Frequently Bought Together" app: In Shopify App Store search "FBT", install by Code Black Belt (free plan), it auto-suggests bundles on product page based on what others bought, increases average order value 20-30% (from $45 to $58 average)',
      'Add free shipping bar: Install "Free Shipping Bar" by Hextom, set threshold at $50, bar appears at top: "Add $15 more for FREE shipping! 🚚", creates psychological trigger to add another item, 67% of customers add something to reach threshold',
      'Create exit-intent popup: Install "Privy" app, create popup triggered when mouse moves toward close button (desktop) or back button clicked (mobile), popup says "Wait! Here\'s 10% off: STAY10" with email capture, recovers 15% of abandoned sessions',
      'Enable express checkout: In Shopify go to "Settings" → "Payments" → "Shopify Payments", scroll to "Checkout", enable checkboxes for: "Shop Pay" (stores customer info for 1-click checkout), "Apple Pay", "Google Pay", reduces checkout friction by 40%',
      'Incentivize photo reviews: In Judge.me app settings, create reward: "Upload photo review = get 15% off next order (code sent via email)", photo reviews build 3x more trust than text reviews, aim for 10+ photo reviews per product',
      'A/B test CTA button: In Shopify theme, your "Add to Cart" button - Test week 1: Orange button with "Add to Cart", Test week 2: Green button with "Buy Now", Test week 3: Red button with "Get Yours Today", track which converts best in Shopify Analytics',
      'Optimize page load speed: Go to PageSpeed Insights (pagespeed.web.dev), paste your store URL, if score below 50, compress images using TinyPNG.com (reduces file size 70%), in Shopify use "Lazy loading" in Theme settings, aim for 70+ speed score',

      // Set 9: Supplier & Fulfillment (7 fulfillment tasks)
      'Test supplier quality: Order 2 units from your best AliExpress supplier, film unboxing video showing: packaging condition, product quality, any defects, shipping time from order to delivery, post as "quality check" content on TikTok',
      'Negotiate better rates: In AliExpress messages, contact supplier: "Hi, I\'ve sold 50+ units this month and want to increase volume. Can you offer: (1) 10% bulk discount on orders of 100+ units, and (2) upgrade to faster shipping?" - 70% of suppliers say yes',
      'Set up backup suppliers: Never rely on one supplier - find 2 backup suppliers for same product with: 4.8+ rating, 2000+ orders, saves you when primary runs out of stock (happens often), add all 3 to spreadsheet with contact info',
      'Research 3PL warehouses: Contact ShipBob (shipbob.com), ShipMonk (shipmonk.com), and ShipNetwork for quotes on warehousing 500 units in USA warehouse, typical cost: $200 setup + $1.50 per unit storage + $3-5 per unit fulfillment - reduces shipping time to 2-3 days',
      'Compare shipping methods: Create comparison sheet - ePacket: 10-20 days ($2-5), Standard: 20-30 days ($1-3), Express (DHL): 5-7 days ($15-25), for low-ticket items ($20-30) use ePacket, for premium items ($50+) use Express and charge $5 shipping fee',
      'Set up order tracking: Install "AfterShip" or "Parcel Panel" app in Shopify, it creates branded tracking page at yourstore.com/track, when customer enters order number they see: current location, estimated delivery, branded page (not AliExpress), builds trust',
      'Automate shipping notifications: In Klaviyo create flow "Order Fulfilled" → send email immediately with tracking number, email subject: "Your [product] is on its way! 📦", include tracking button, estimated delivery date, and "Questions? Reply here" for support',

      // Set 10: Analytics & Scaling (7 analytics tasks)
      'Create profit tracking sheet: Open Google Sheets, name it "Weekly Profit Tracker", columns: Week | Revenue (Shopify total) | COGS (product cost + shipping) | Ad Spend | Shopify Fees (2.9% + $0.30) | Payment Processing (2.9%) | Profit | Margin % - update every Monday',
      'Track KPIs in dashboard: In Shopify Analytics, watch these numbers: Conversion rate (goal: 2%+), Average Order Value/AOV (goal: $50+), ROAS/Return on Ad Spend (goal: 3x+, meaning $3 revenue for every $1 ad spend), track weekly trends',
      'Scale winning ads: In Facebook Ads Manager, identify winning ad (ROAS 3x+, 20+ purchases, CPA under $15), click "Duplicate" → increase budget by 20% ($20 → $24), run both ads side-by-side, if new ad maintains performance, scale again in 2 days',
      'Launch second product: Use same research method from Set 1, find complementary product (if you sell phone accessories, add wireless charger), create separate product page, run test ads at $10/day, if profitable after 1 week, scale to $20/day',
      'Build lookalike audience: In Facebook Ads Manager → "Audiences" → "Create" → "Lookalike Audience", source: "Purchase" event (people who bought), location: USA, size: 1% (most similar), Facebook finds 2 million people similar to your buyers - run ads to them',
      'Refresh ad creatives weekly: Ads "fatigue" after 7-14 days (performance drops), film new video with different hook every week, keep winning ad running but add new ad to campaign, monitor frequency (if above 3.0 = ad fatigue, launch new creative)',
      'Plan for Q4: If currently profitable, calculate cash needed for holiday season (Oct-Dec): Q4 sales typically 3x normal BUT competition 2x harder, save 30% of profits in Q2-Q3 to have $2,000-5,000 ready for Q4 ad spend increase'
    ]
  },

  '$10k/mo-Dropshipping': {
    goal: '$10k/mo',
    niche: 'Dropshipping',
    capital: {
      range: '$800–$2,000',
      uses: [
        'Platform/tools + inventory/sample set',
        'Structured ad tests',
        '4-week buffer'
      ]
    },
    steps: [
      // Set 1: Advanced Market Research (7 tasks)
      '✅ Use AnswerThePublic.com (free 3 searches/day): type your main niche keyword (example: "fitness equipment"), it generates 200+ questions people ask, screenshot questions with "why", "how", "best" - these reveal specific pain points to solve',
      '✅ Create competitor analysis spreadsheet: Find top 10 stores in your niche using Shopify Inspector, columns: Store Name | Pricing Strategy (premium $80+, mid $40-60, budget under $30) | USP (what makes them unique) | Ad Frequency (daily on Facebook = high spend)',
      '✅ Study purchase psychology: Read "Made to Stick" principles - does your product have: emotion trigger (fear, joy, status), social proof (others using it), transformation (clear before/after), document which emotions drive purchases in your niche',
      '✅ Analyze 2-year seasonal trends: Open Google Trends, compare last 2 years for your product (example: "yoga mat"), identify peaks (usually January, September), plan inventory orders 6-8 weeks before peaks, avoid heavy stock during valleys',
      '✅ Survey existing customers: Create Google Form with 3 questions: (1) What almost stopped you from buying? (2) What convinced you to buy? (3) What would improve your experience? - email to customers who purchased 30+ days ago, offer $10 gift card for completion',
      '✅ Mine Amazon reviews: Find similar products on Amazon with 500+ reviews, sort by "Most recent" → filter "1-3 stars" (negative reviews), read 50+ complaints, find patterns (breaks easily, poor instructions, sizing issues), solve these problems better in YOUR product/store',
      '✅ Join insider communities: Reddit search "[your niche] reddit", join 3 subreddits, sort by "Top" → "Past month", read discussions for 1 hour daily for 5 days, note: common problems, language they use, trending topics - speak their language in your marketing',

      // Set 2: Premium Store Experience (7 professional tasks)
      'Upgrade to Shopify plan ($79/month): In Shopify dashboard click "Settings" → "Plan", upgrade to "Shopify" plan, benefit: eliminates 2% transaction fee (saves $200/month at $10k revenue), plus advanced analytics and gift cards feature',
      'Hire professional designer: Post on Fiverr.com - search "shopify store design", filter by "Level Two Seller" + "$50-$100", hire designer to create: custom homepage banner (hero image with your product), custom product page layout, budget $50-100, turnaround 3-5 days',
      'Create lifestyle photography: Option A: Hire local photographer ($200, 2-hour shoot), Option B: Use iPhone 14+ Pro mode with good lighting - shoot product in real-life settings (kitchen, bedroom, gym), avoid plain white background, lifestyle converts 40% better',
      'Add live chat with real person: Install Tidio chatbot (free plan), set availability "Monday-Friday 9am-6pm", create 10 instant responses for FAQ, during peak hours (5pm-8pm) respond personally within 2 minutes, personal touch converts 25% better than bot-only',
      'Implement size recommender: If selling apparel/accessories, install "Kiwi Size Chart" app, it asks customer height/weight, recommends size, shows confidence percentage, reduces returns by 35% (returns typically 15-20% of sales, costing $15-30 per return)',
      'Add 360-degree product view: Use Sirv (free trial), upload 20-30 photos of product from different angles, Sirv creates interactive 360° viewer, embed on product page, customers can spin product with mouse/finger, increases confidence in purchase',
      'Create comprehensive FAQ page: In Shopify "Pages" → "Add page", create FAQ addressing 20 common questions: shipping time, returns, warranty, sizing, materials, care instructions, where made, discounts, bulk orders, international shipping - reduces support tickets by 40%',

      // Set 3: Influencer & Partnership Marketing (7 tasks)
      'Set up Google Merchant Center: Go to merchants.google.com, click "Get Started", connect Shopify store using official "Google & YouTube" app from Shopify App Store, sync your products, they appear in Google Shopping results when people search product type',
      'Launch Google Shopping ads: In Google Ads (ads.google.com), create "Shopping campaign", set daily budget $10, target: USA, bidding: "Maximize clicks", Google shows your products in search results with image + price, great for bottom-of-funnel (high intent buyers)',
      'Find UGC creators on Upwork: Post job: "Need UGC creator for product videos - $50 per video, must provide: ring light, good phone camera, engaging personality - looking for 2 creators to make 4 videos/month", hire 2 different creators for variety',
      'DM TikTok micro-influencers: Search your niche hashtag (#fitnessgear), filter "10k-50k followers", find 20 creators, DM: "Hi [name]! Love your content. I\'d like to send you [product] for an honest review video. No strings attached. Interested?" - 30% say yes',
      'Set up affiliate program: Install "Refersion" app (first 50 referrals free), create 15% commission structure, influencers get unique tracking link, earn $7.50 for every $50 sale, you only pay when they drive sales (performance-based)',
      'Send PR packages: Order 10 units of your product, buy nice packaging boxes from Amazon ($2 each), include handwritten note: "Hi [name], love your content! Thought you\'d enjoy trying [product]. No obligation, just thought it fit your vibe. - [Your name]", 40% create content organically',
      'Build influencer relationships: Don\'t just ask for promotions - comment genuinely on their posts 3x/week for 2 weeks before reaching out, share their content to your stories, DM compliments on specific videos, THEN pitch collaboration - relationship-first approach converts 3x better',

      // Set 4: Advanced Email Marketing (7 tasks)
      'Upgrade to Klaviyo Growth plan ($20-60/month based on subscribers): When you hit 250+ subscribers, upgrade for advanced features: A/B testing, predictive analytics, SMS integration, advanced flows, ROI typically 30-50x (every $1 spent = $30-50 revenue)',
      'Create browse abandonment flow: In Klaviyo "Flows" → "Browse Abandonment" - triggers when someone views product but doesn\'t add to cart - wait 2 hours, Email 1: "Still thinking about [product name]? Here\'s what others loved about it" + include 3 reviews',
      'Post-purchase upsell: In Klaviyo create flow triggered by "Placed Order", wait 3 days (product likely arrived), Email: "How\'s your [product]? P.S. Customers who bought that also love [complementary product] - here\'s 20% off: THANKYOU20" - converts 10-15%',
      'Build VIP segment: Create segment "Customers where Total Spent > $200", tag as "VIP", send exclusive perks: early access to sales (24hr head start), first access to new products, surprise "Thank you" 30% off codes, VIPs have 8x higher lifetime value',
      'Launch seasonal campaigns: Plan 8 email campaigns/year: New Year Sale (Jan), Valentine\'s (Feb), Spring Sale (Apr), Mother\'s/Father\'s Day (May/Jun), Summer Sale (Jul), Back to School (Aug), Black Friday (Nov), Christmas (Dec) - build countdown timers, urgency',
      'A/B test every element: In Klaviyo, test Subject Line (emoji vs plain), Send Time (morning vs evening), Preview Text (curiosity vs benefit), CTA Button (text and color), Email Design (single column vs two-column) - test one element per campaign, implement winners',
      'Add SMS marketing: Install Postscript (integrates with Klaviyo), collect SMS at checkout (add checkbox "Get order updates via text"), send: Order confirmation, Shipping notification, Delivery, then 3 days later "How is it?" - SMS has 98% open rate vs 20% email',

      // Set 5: Paid Advertising Scale (7 tasks)
      'Scale Facebook to $100+/day: Once you have winning ad (3+ ROAS for 7 days), use CBO campaign, increase budget 20% every 2 days: $50 → $60 → $72 → $87 → $105, monitor daily, if ROAS drops below 2.5x pause for 24hrs and adjust targeting',
      'Develop creative system: Hire 2 UGC creators ($50/video), produce 5 new videos/week, test all 5 in ads at $10/day each for 3 days, winning video (lowest CPA) gets scaled to $30/day, others paused, repeat weekly - constant fresh creatives combat ad fatigue',
      'Build retargeting funnel: Create 3 custom audiences: (1) Viewed product last 7 days = show same product with 10% off, (2) Added to cart last 14 days = show urgency "Item selling fast", (3) Purchased 30-180 days ago = show new products/complementary items',
      'Launch Google Search ads: In Google Ads, create "Search campaign", keywords: "[your niche] buy", "best [product type]", "[product] for sale", "where to buy [product]", bid $1-3 per click, these are high-intent searches (people ready to buy)',
      'Test YouTube pre-roll ads: Create 6-second bumper ad (TikTok video first 6 seconds with captions), run on YouTube targeting channels in your niche, costs $0.02-0.10 per view, great for brand awareness, retarget viewers with conversion ads later',
      'Experiment with Pinterest ads: If visual niche (home decor, fashion, wellness), create "Promoted Pins", target keywords like "home organization ideas", users discover your product while browsing inspiration, Pinterest users have 40% higher AOV than Facebook',
      'Set up attribution tracking: Use UTM parameters in all links - Format: yourstore.com?utm_source=tiktok&utm_medium=paid&utm_campaign=product1 - in Google Analytics "Acquisition" → "Campaigns" see which platform ACTUALLY drives sales (often different from last-click attribution)',

      // Set 6: 3PL & Fulfillment Setup (7 tasks)
      'Contact ShipBob (shipbob.com) and ShipMonk (shipmonk.com): Fill out quote form for warehousing 500 units in their Los Angeles or New Jersey facility, typical pricing: $200 setup fee + $1.50/unit/month storage + $3-5 per order fulfillment + shipping ($3-8)',
      'Order 500 units from supplier: Negotiate bulk rate on AliExpress (should get 25-35% discount at 500+ units), request branded packaging (your logo on box, $0.30-0.50 extra per unit), shipping to 3PL warehouse ($300-600 freight), total investment $3,000-5,000',
      'Create branded inserts: Design in Canva - 4×6 inch card with: "Thank you for your order!", QR code to Instagram, "Share your experience with #[yourbrand]", "Get 20% off next order with code LOYAL20" - print 1000 cards for $50 at Vistaprint',
      'Implement QC process: When 500 units arrive at 3PL, request inspection of first 50 units (usually $25 flat fee), check for: correct product, no damage, branded packaging correct, if issues found, photograph and negotiate replacement with supplier before accepting shipment',
      'Set up order routing: In ShipBob/ShipMonk dashboard → "Routing Rules", set logic: If customer in West Coast = ship from LA warehouse, East Coast = ship from NJ warehouse, optimizes shipping speed (2-3 days anywhere in USA) and cost ($4-6 vs $8-12 AliExpress)',
      'Reduce delivery to 2-4 days: With 3PL + USA inventory, update shipping policy on site to "2-4 business day delivery" (vs 10-20 days dropshipping), charge $4.99 shipping (covers 3PL fee) OR offer free shipping over $50, fast shipping increases conversion 35-50%',
      'Build easy returns process: Create page "Returns" with clear policy: "30-day money-back guarantee", use ReturnGo app (integrates with 3PL), customer fills form, gets prepaid label, 3PL receives return, inspects, auto-refunds customer within 48 hours - hassle-free returns increase conversions',

      // Set 7: Analytics & Data Optimization (7 tasks)
      'Create profit tracking sheet: Open Google Sheets, name it "Monthly P&L", columns: Month | Gross Revenue | Returns | Net Revenue | COGS | Fulfillment | Ad Spend | Software/Apps | Contractor Fees | Net Profit | Profit Margin % - track monthly, aim for 15-25% margin',
      'Implement cohort analysis: In Shopify Analytics or Google Sheets, track customer cohorts by month acquired - what % of January customers made 2nd purchase? 3rd? Calculate LTV (Lifetime Value) per cohot, adjust CAC (Customer Acquisition Cost) targets accordingly',
      'Set up real-time dashboard: Use Google Data Studio (free), connect Shopify + Google Ads + Facebook Ads + TikTok Ads, create dashboard showing: Daily revenue, ROAS per platform, Top products, Traffic sources, check daily at 9am for quick overview',
      'Scale winning products: Once a product hits $5k/month consistently for 2 months, it\'s validated - increase ad budget to $150-200/day, order 1000 units for better pricing, create 5-10 new ad creatives per week, aim to push to $10-15k/month',
      'Add 2-3 new products per month: Use same research process, launch new products consistently, 80% will fail or break even, 20% will be winners - need constant testing to find next winner, successful stores have 5-10 winning products generating revenue simultaneously',
      'Build email list aggressively: Aim for 1,000+ emails per month, use: exit popups (10% off for email), post-purchase collection, Instagram bio link to email capture, SMS subscribers, engaged list of 10,000 people = $5-10k monthly revenue from email alone',
      'Hire VA or assistant: Post on OnlineJobs.ph or Upwork for Virtual Assistant in Philippines (rate: $3-6/hour), delegate: customer service emails, order processing checks, basic social media posting, tracking supplier inventory - frees you to focus on strategy and growth',

      // Set 8: Customer Service & Support (7 tasks)
      'Set up Zendesk or Gorgias: Customer service platform ($50-150/month), centralizes all customer inquiries from email, chat, social media into one dashboard, improves response time, tracks ticket resolution',
      'Create FAQ knowledge base: Build comprehensive help center on your website with 30+ articles answering: shipping times, return process, product care, sizing, international orders, reduces support tickets by 40%',
      'Implement live chat: Install Tidio or Intercom, offer real-time support during business hours (9am-6pm), chatbot handles common questions 24/7, live chat customers convert 3x higher than non-chat visitors',
      'Build email templates: Create templates for common inquiries: order status, refund request, product question, complaint resolution, ensures consistent professional communication, saves 60% response time',
      'Response time targets: Set SLA (Service Level Agreement): respond to all inquiries within 4 hours during business hours, 24 hours on weekends, fast response = happy customers = positive reviews',
      'Post-purchase check-in: Automate email 7 days after delivery: "How\'s everything with your [product]? Any questions or concerns? Reply to this email and we\'ll help!", proactive support prevents negative reviews',
      'Track customer satisfaction: After support interaction, send 1-question survey: "How would you rate your support experience? 1-5 stars", aim for 4.5+ average, review low ratings to improve',

      // Set 9: Brand Building & Community (7 tasks)
      'Launch customer referral program: Install ReferralCandy app, offer: "Give $10, Get $10" - existing customers get $10 off when friend makes first purchase, friend gets $10 off too, turns customers into salespeople',
      'Build Instagram community: Post daily: product photos, customer photos (repost with permission), behind-the-scenes, polls/questions in stories, engage with comments within 1 hour, build relationship beyond transactions',
      'Create user-generated content campaign: Run monthly contest: "Post photo using our product with #[YourBrand] for chance to win $100 gift card", repost best content to your feed, UGC builds trust + provides free marketing content',
      'Start customer loyalty program: Use Smile.io or LoyaltyLion (free for small stores), customers earn points for: purchases, referrals, social shares, reviews, redeem points for discounts, increases repeat purchase rate 25-40%',
      'Send handwritten thank you notes: For orders over $100, include handwritten note: "[Name], thank you so much for your order! Hope you love it. - [Your name]", personal touch creates memorable experience, customers share on social',
      'Host giveaway contests: Monthly Instagram giveaway: "Follow us, tag 2 friends, share to story = 3 entries to win [product bundle worth $200]", grows following, increases engagement, attracts new customers',
      'Build Facebook community group: Create private group for customers: "[Brand] VIP Community", share exclusive tips, early product launches, member-only discounts, builds loyalty and word-of-mouth',

      // Set 10: Scaling to Multiple Stores (7 tasks)
      'Validate second niche: Use same research process from Set 1, identify adjacent niche with similar audience (fitness → wellness, beauty → skincare), validate demand before launching',
      'Create second Shopify store: Separate store for new niche (vs adding to existing), dedicated branding, different audience, avoid confusing customers, Shopify allows multiple stores on one account',
      'Replicate winning systems: Copy what works from Store #1: best products, ad creatives, email flows, store design, supplier relationships, don\'t reinvent wheel, leverage learnings',
      'Hire store manager for Store #1: As you launch Store #2, hire manager ($2,000-3,000/month) to run Store #1 operations: customer service, supplier management, inventory, frees you to focus on growth',
      'Split ad budgets strategically: Don\'t cannibalize Store #1 budget, incrementally add budget for Store #2: Start $20/day on Store #2 while maintaining Store #1 budget, test without risking existing revenue',
      'Cross-promote between stores: Email Store #1 customers about Store #2 (if relevant), "We just launched [new brand] for [related need]", existing customers = warm audience = higher conversion',
      'Goal: $10k/month consistently: Focus on consistency - multiple months at $10k+ (not just one lucky month), diversification across 2 stores reduces risk, path to $20k+/month is now clear'
    ]
  },

  // ==================== CONTENT CREATION PATHS ====================
  
  '$1k/mo-Content Creation': {
    goal: '$1k/mo',
    niche: 'Content Creation',
    capital: {
      range: '$100–$300',
      uses: ['Platform fees', 'Basic tools', 'First-week buffer']
    },
    steps: [
      // Set 1: Find Your Niche (7 tasks)
      '✅ Open Notes app on phone, write down 10 topics you genuinely enjoy talking about (fitness, cooking, tech, finance, gaming, etc), then circle 3 you could create content about weekly without getting bored',
      '✅ For each topic, Google search "[topic] + monetization" - example: "fitness monetization", scan first page results, if you see: sponsorships, affiliate programs, courses, coaching - niche has money potential, eliminate topics with no clear money path',
      '✅ Open YouTube, search your topic + tutorial (example: "cooking tutorial"), sort by "View count", if top videos have 100k+ views AND were posted in last year, audience exists and is active, write down top 5 video titles',
      '✅ Check competition level: TikTok search your topic, if you see accounts with 10k-50k followers (not millions), it means beginners CAN grow, if only mega accounts exist (1M+), might be too competitive to start',
      '✅ Join 3 Facebook groups in your niche with 5,000+ members, spend 30 minutes reading posts, note: What questions are asked repeatedly? What frustrates people? What do they wish existed? - these are your content goldmines',
      '✅ Test audience interest: Post in those Facebook groups (don\'t spam, be helpful): "Quick poll: What\'s your biggest struggle with [topic]?" - if you get 10+ comments, people are engaged and there\'s demand',
      '✅ Make final decision: Pick ONE niche that checks all boxes: (1) You enjoy it, (2) People search for it, (3) Money potential exists, (4) You can realistically create content 3x/week - write it down, commit to 90 days',

      // Set 2: Set Up Platforms (7 tasks)
      'Create TikTok account: Download TikTok app, tap "Profile" → "Sign up", use email (not phone for business), username should be: @[niche][yourname] example: @fitnesswithjake or @cookingjenny - clear what you do',
      'Optimize TikTok bio: Tap "Edit profile", bio format: [What you do] | [Who you help] | [Result], example: "Daily workouts | Helping busy parents get fit | Down 30lbs", add call to action at end: "↓ Free guide below", link to bio.fm (free link-in-bio tool)',
      'Create YouTube channel: Go to youtube.com, sign in with Google account, click profile icon top-right → "Create a channel", use same name as TikTok for consistency, click "Customize channel" → upload profile picture (can use Canva to create simple logo)',
      'YouTube channel art: In Canva, search "YouTube banner", create banner with: your niche + value proposition, example: "Fitness for Busy Parents - 15min Workouts", upload to YouTube under "Customize channel" → "Branding" → "Banner image"',
      'Set up Instagram: Create business account in Instagram app, username matching TikTok/YouTube, bio similar to TikTok (what you do, who you help, result), add link to bio.fm with all your links',
      'Create content calendar: Open Google Sheets, create sheet named "Content Calendar", columns: Date | Platform | Topic | Hook/Title | Status (Idea/Filmed/Posted), plan 2 weeks ahead, aim for 3 posts per week minimum (consistency > perfection)',
      'Set up basic equipment: You need: smartphone with decent camera (iPhone X+ or Android equivalent), ring light ($15-25 on Amazon), phone tripod ($12-20), download CapCut app (free video editor), this is enough to start - don\'t buy expensive gear yet',

      // Set 3: Create First Content (7 tasks)
      'Study winning formulas: Search "[your niche] viral videos" on TikTok, watch 20 videos with 500k+ views, note pattern: Most start with HOOK (first 3 seconds grab attention), then deliver value (30-45 seconds), end with CTA (follow for more) - write down 5 hooks that work',
      'Film first video using proven hook: Set up phone on tripod at eye level, ring light in front of you, open with strong hook: "If you\'re struggling with [problem], this will change your life", then teach ONE specific tip, keep under 60 seconds, film 3 takes',
      'Edit in CapCut: Open CapCut, tap "+", select your best take, tap "Text" → "Auto captions" (automatically adds subtitles), tap "Text" to make captions bigger and easier to read, add trending sound from "Sounds" tab, tap "Export" → 1080p',
      'Write caption formula: Caption structure for every post: Line 1: Hook question or bold statement, Line 2-3: Expand on the value, Line 4: Call to action ("Follow for more [niche] tips"), then add 15-20 hashtags: mix of large (#fitness 50M posts) and medium (#homeworkouts 2M posts)',
      'Post at optimal time: Best times = 7-9am (morning commute), 12-2pm (lunch break), 7-9pm (evening wind down), post your first video at 7am on Tuesday or Wednesday (highest engagement days), immediately reply to any comments in first hour',
      'Repeat for 7 days straight: Don\'t wait to see results - film and post 1 video per day for 7 days, TikTok algorithm needs to learn about your content, day 1-3 views might be low (200-500), by day 5-7 you\'ll start seeing growth',
      'Review analytics: After 7 days, go to TikTok Profile → three lines → "Creator tools" → "Analytics" → "Content", sort by "Total views", identify your best video, ask yourself: What was different? What hook did I use? What topic? - replicate what worked',

      // Set 4: Grow Your Audience (7 tasks)
      'Engage with your niche: Spend 20 minutes daily finding videos in your niche with 5k-50k views (not mega viral, mid-tier), leave thoughtful comments within first hour of posting, creator and early viewers see your comment, some will check your profile = 30-50 new profile visits daily',
      'Use trending sounds strategically: Open TikTok "Discover", tap sounds with ↗️ trending up icon, audio should have under 50k videos (early trend), create video using that sound within 24 hours, trending audio gives you 3-5x more initial reach',
      'Post 3x per day: Morning (7am), lunch (1pm), evening (8pm) - TikTok rewards consistency, accounts posting 3x/day grow 2-3x faster than 1x/day, batch film on Sunday (film 10 videos in 2 hours), edit/schedule throughout week',
      'Cross-post to Instagram Reels: Take your TikTok video, remove TikTok watermark using savett.cc, upload to Instagram Reels with same caption and hashtags, doubles your reach with 5 minutes extra work, YouTube Shorts too if you have time',
      'DM strategy for growth: When someone comments on your video, DM them: "Hey! Thanks for watching my video on [topic]. What other [niche topics] do you want to see?", 20% will respond, builds relationship, they\'ll watch more of your content',
      'Reply to every comment first 3 hours: TikTok algorithm boosts videos with high engagement rate (comments/views ratio), replying encourages more comments, ask questions in replies: "Have you tried this?" or "What\'s been your biggest challenge?", keeps conversation going',
      'Collaborate with similar creators: Find 5 creators in your niche with 1,000-5,000 followers, DM: "Hey [name]! Love your content on [topic]. Want to do a collab video? We could both reach new audiences", 50% say yes, you tap into each other\'s audience',

      // Set 5: First Revenue Stream (7 tasks)
      'Set up Amazon Associates: Go to affiliate-program.amazon.com, click "Sign up", enter your TikTok/YouTube/Instagram links, verify identity, approved within 24 hours, you can now earn 1-10% commission on products you recommend',
      'Identify products your audience needs: Based on your niche, list 10 products people ask about or you mention in content - fitness: resistance bands, yoga mat, protein powder - cooking: air fryer, knife set, meal prep containers, choose products $20-100 (sweet spot for conversions)',
      'Create "What I Use" link page: Sign up for bio.fm or Linktree (free), create page with sections: "My Favorite [niche] Products" → add 10 Amazon affiliate links with short description of each, put this link in your TikTok/Instagram bio',
      'Make product review content: Film 3-5 videos per week featuring products from your affiliate list, format: "I\'ve been using [product] for [timeframe] and here\'s what I learned...", be honest (include 1 con, 2-3 pros), add text on screen "Link in bio 🔗"',
      'Track what sells: In Amazon Associates dashboard, check "Reports" weekly, note which products get most clicks and purchases, double down on creating content about those products, remove non-performers from your link page',
      'Mention products naturally: Don\'t hard sell - weave products into valuable content, example fitness video: "Here\'s a 15-min workout you can do at home, I use these resistance bands [show them], link in bio if you want the same ones", feels helpful not salesy',
      'Goal = first $100: With 1,000-3,000 followers posting product content 3x/week, you should hit first $100 in affiliate commissions within 30 days, may take 45-60 days if growth is slower, be patient and consistent',

      // Set 6: Email List Foundation (7 tasks)
      'Sign up for ConvertKit: Go to convertkit.com, create free account (free up to 1,000 subscribers), complete profile setup, click "Grow" → "Landing pages" → "New landing page" → choose simple template, this will be your lead magnet page',
      'Create simple lead magnet: Based on your niche, create 1-page PDF checklist/guide in Canva (free), examples: "7-Day Meal Prep Checklist", "Beginner Workout Plan", "10 Best Video Hooks", takes 30-60 minutes to make, should solve ONE specific problem your audience has',
      'Set up landing page: In ConvertKit landing page editor, headline: "Get My Free [Lead Magnet Name]", subheadline: quick 1 sentence benefit, add email form, button text: "Send Me The Guide", configure to send lead magnet PDF automatically via email when someone subscribes',
      'Add to bio: In bio.fm or Linktree, add button at top: "🎁 Free [Name] Guide", link to your ConvertKit landing page, mention lead magnet in your video captions: "Want the full checklist? Grab my free guide (link in bio)"',
      'Promote lead magnet in content: Create 3 videos per week that tease lead magnet content, example: "Here are 3 of my 10 favorite meal prep recipes [share 3], full list in my free guide, link in bio", gives value while driving traffic to landing page',
      'Create welcome email sequence: In ConvertKit, set up 3-email sequence for new subscribers: Email 1 (immediate): Send PDF + "Welcome! Here\'s your guide", Email 2 (day 2): "Quick question: What\'s your biggest [niche] challenge?", Email 3 (day 4): Share your best content + "Follow me on TikTok"',
      'Goal = 100 subscribers in 30 days: With 2,000-4,000 followers, promoting lead magnet consistently, aim for 100 email signups in first month, email list is YOUR audience (you own it, platform can\'t take it away), will be most valuable asset long-term',

      // Set 7: Consistency & Habits (7 tasks)
      'Set up content creation blocks: Schedule 2 hours every Sunday for "batch filming" - film 10 videos back-to-back (change shirt between sets of 3-5 to look like different days), takes 2 hours to film, then edit 2 videos per night (30 min each) throughout week',
      'Track everything: Create Google Sheet "Content Tracker", columns: Date | Video Topic | Views | Likes | Comments | Follower Count | Revenue - update every Friday, tracking shows what\'s working and keeps you accountable',
      'Join accountability group: Find 3-5 other creators at similar stage (500-5000 followers), create WhatsApp group, share wins/struggles daily, when you want to quit, group keeps you going, search Facebook for "content creator accountability groups"',
      'Celebrate small wins: Screenshot milestones: first 1k views, first 500 followers, first $10 earned, first positive DM - save in phone folder "Wins", review when feeling discouraged, progress isn\'t linear but these remind you it\'s working',
      'Study your top performers weekly: Every Friday, review your top 3 videos from that week, ask: What hook grabbed attention? What kept people watching? What topic resonated? Try to replicate these elements in next week\'s content',
      'Ignore vanity metrics first 60 days: Views and followers will fluctuate, focus instead on: posting consistency (did I post 3x this week?), engagement rate (comments per 100 views), skills improving (am I more comfortable on camera?) - sustainable growth takes 90 days minimum',
      'Define success milestones: 30-day goal: 1,000 followers + first $50 earned, 60-day goal: 3,000 followers + $200/month, 90-day goal: 5,000 followers + $500/month + consistent email list growth - break big goal into smaller chunks',

      // Set 8: Content Improvement (7 tasks)
      'Analyze retention in TikTok Analytics: Go to Creator Tools → Analytics → Content → select a video, scroll to "Audience retention" graph, this shows where people drop off, if they leave in first 3 seconds = weak hook, at 15 seconds = content not engaging enough',
      'Improve hooks based on data: If retention graph drops immediately, try these proven hook formats: (1) "If you [pain point], watch this", (2) "I tried [thing] for 30 days and...", (3) "Stop doing [common mistake]", (4) "[Controversial statement] and here\'s why"',
      'Upgrade your editing: Watch top creators in your niche, notice editing patterns: fast cuts every 2-3 seconds (keeps attention), text on screen highlighting key points, B-roll footage showing what you\'re talking about, trending transitions - incorporate 2-3 elements into your editing',
      'Better lighting setup: Position ring light directly in front of face at eye level 2-3 feet away, if recording during day use natural window light from side (not behind - creates silhouette), good lighting makes you look more professional instantly',
      'Improve audio: Record in quiet room (no background TV/noise), speak clearly 6-12 inches from phone, if audio is still bad, buy $20 lavalier mic from Amazon, 80% of people scroll with sound off BUT good audio keeps the 20% watching longer',
      'Create better thumbnails (YouTube): Use Canva "YouTube thumbnail" template, formula: your face with expressive emotion + 3-5 words of text in LARGE font + bright contrasting colors, thumbnail should make someone curious enough to click',
      'Study competitor content: Set timer for 30 minutes every Monday, watch 10 recent videos from 3 competitors who are 1-2 steps ahead of you (10k-50k followers), note in Google Doc: their hooks, topics, editing style, what can you adapt (not copy) to your content?',

      // Set 9: Diversify Content (7 tasks)
      'Add YouTube long-form: Repurpose your TikTok content into YouTube videos - take your 5 best performing TikToks on same topic, film longer versions (5-8 minutes each), structure: Hook (first 15 seconds), teach concept (4-5 min), CTA (subscribe), YouTube pays better than TikTok long-term',
      'Experiment with formats: Try different video styles: talking head (you explaining), B-roll with voiceover, screen recording (for tech/tutorials), product reviews, day-in-the-life, "Get ready with me" while teaching - test 3 different formats, track which performs best',
      'Go live weekly: TikTok/Instagram Live = direct connection with audience, go live every Sunday at 7pm for 30 minutes, format: "Q&A Sunday - ask me anything about [niche]", answer questions, people who join live are your most engaged fans',
      'Create series content: Package content into series: "Monday Myth Busting" (debunk common myths in niche), "Wednesday Wins" (showcase follower results), "Friday Favorites" (weekly product recommendations) - series creates expectation, people return',
      'Start simple podcast: Use phone + $25 USB mic, record 10-15 min episodes talking about your niche, upload to Anchor.fm (free, distributes to Spotify/Apple), embed podcast in newsletter, repurpose as YouTube videos, podcast = authority builder',
      'Write LinkedIn posts: If your niche is business/career/finance, cross-post content to LinkedIn, format: write 5-paragraph post expanding on your TikTok video idea, add "What do you think?" at end to spark comments, LinkedIn has older audience with more buying power',
      'Test different posting times: Try 3 different time slots for 1 week each: Week 1 (7am posts), Week 2 (1pm posts), Week 3 (8pm posts), compare average views in each time slot, stick with winner - posting time can change views by 50-200%',

      // Set 10: Scale to $1k/mo (7 tasks)
      'Launch low-ticket digital product: Based on your most asked question, create simple product: $7-19 ebook, template pack, or mini-course, use Gumroad (free to set up, takes 10% fee), sell via link in bio + email list + occasional promo video',
      'Promote digital product weekly: Create 2 videos per week that lead to your product, format: teach 80% of the solution free (in the video), mention "If you want the full step-by-step system, I made a guide - link in bio", feels helpful not pushy',
      'Grow email to 500+ subscribers: Email list is key for selling, with 500 engaged subscribers, you can make $100-300/month from affiliate links and product promos, send 1-2 valuable emails per week (not every email sells, ratio: 3 value emails : 1 promo email)',
      'Apply for brand deals: At 5k+ followers, use platforms like AspireIQ, #paid, or Collabstr to find brand sponsorships, or DM brands directly: "Hi, I create content for [audience], would you be interested in a collaboration? Here\'s my media kit [link]", first deals typically $50-200',
      'Create media kit: In Canva, 1-page PDF with: your name, niche, follower counts across platforms, average views, audience demographics (from TikTok analytics), rates ($100 for dedicated video, $50 for product mention), past brand collaborations if any',
      'Join affiliate networks: Sign up for ShareASale, CJ Affiliate, Impact - these have thousands of brands offering affiliate commissions 10-40%, higher than Amazon\'s 1-10%, search for brands in your niche, apply to programs, add links to bio page',
      'Track to $1k/mo: Build revenue spreadsheet tracking 4 income streams: (1) Amazon affiliates (goal: $200/mo), (2) Digital products (goal: $300/mo), (3) Network affiliates (goal: $300/mo), (4) Brand deals (goal: $200/mo) = $1,000/month, reaching $1k typically takes 90-120 days of consistent work'
    ]
  },

  '$5k/mo-Content Creation': {
    goal: '$5k/mo',
    niche: 'Content Creation',
    capital: {
      range: '$300–$800',
      uses: ['Platform/tools', 'Testing ads', '2–3 week buffer']
    },
    steps: [
      // Set 1: Deepen Your Niche (7 tasks)
      '✅ Audit current content: In TikTok Analytics, export top 20 performing videos (by views), categorize into 3-5 themes, calculate: which theme has highest average views? Which has best engagement rate? Double down on winner, cut underperforming themes',
      '✅ Define ideal viewer avatar: Open Google Doc, write detailed profile: age range, gender, income level, biggest problem, where they hang out online, what they buy, what keeps them up at night - example: "Sarah, 32, $50k/year, busy mom, wants to lose baby weight but has no time, scrolls TikTok at night"',
      '✅ Survey your audience: Create Google Form with 5 questions: (1) How old are you? (2) What\'s your #1 [niche] challenge? (3) What have you tried to solve it? (4) What would you pay for a solution? (5) What content do you want more of? - post in your bio, send to email list',
      '✅ Analyze survey data: Get at least 50 responses, look for patterns - if 60% say same problem, that\'s your core content focus, if 40% mention price point $30-50, that\'s your product pricing range, if specific content type is requested 15+ times, prioritize it',
      '✅ Competitor deep dive: Identify 5 creators in your niche making $5k+/month (check if they mention income, have courses, or visible brand deals), analyze their strategy: content formats, posting frequency, how they monetize, what makes them different, take notes',
      '✅ Find gaps in market: Read 100+ comments on competitor videos, what questions go unanswered? What do people wish existed? These gaps are YOUR opportunity, example: if everyone teaches basic [topic] but nobody teaches it for [specific audience], there\'s your angle',
      '✅ Refine your positioning: Based on research, fill in: "I help [specific person] achieve [specific result] through [unique method]", example: "I help busy moms lose 20lbs through 15-min home workouts (no gym needed)", this becomes your brand message everywhere',

      // Set 2: Build Personal Brand (7 tasks)
      'Professional profile photos: Hire photographer for 1-hour headshot session ($100-150), or DIY: natural light by window, plain wall background, wear solid color, smile genuinely, use for all platforms, professional photos build trust instantly',
      'Design brand kit: In Canva Pro ($13/month), create: logo, 3-color palette (primary, secondary, accent), 2 fonts (headers, body), save as "Brand Kit", use consistently across all thumbnails, graphics, slides - consistent branding = memorable',
      'Create intro/outro template: In CapCut, design 3-second animated intro: your logo + name + niche, export, use at start of every video, creates brand recognition, similarly create 3-second outro: "Follow for more [niche] tips" + your handle',
      'Upgrade bio strategy: Your bio should answer: WHO you help + WHAT you help with + HOW you help + PROOF (if applicable), example: "Teaching 10k+ people to grow on TikTok | Ex-marketing director | Free growth guide below ↓", add credibility',
      'Set up Linktree Pro ($6/month): Organize links into sections: "Start Here" (lead magnet), "Free Resources" (your best content), "Work With Me" (paid products/services), "Shop My Favorites" (affiliate links), add branded background image, custom button colors',
      'Create content pillar system: Define 4-5 content categories you\'ll rotate through, example fitness creator: (1) Quick workouts, (2) Nutrition tips, (3) Motivation, (4) Myth-busting, (5) Product reviews, post one from each pillar weekly, prevents creative burnout',
      'Document behind-the-scenes: People connect with people, once a week post "behind the scenes" content: your filming process, failures/bloopers, your journey, honest struggles, vulnerability builds deeper connection than perfect curated content',

      // Set 3: Content Systems (7 tasks)
      'Batch film 30 videos: Block 4 hours one day (Sunday works best), set up filming station, prepare 30 topics in advance, film all 30 back-to-back (2-3 takes per video), change shirt every 10 videos, gives you 10 days of content in one session',
      'Create editing templates: In CapCut Pro ($8/month), create 3 templates: (1) Educational (with subtitles, text boxes, B-roll placeholders), (2) Testimonial (customer/follower reviews), (3) Personal story (you talking), saves 30 min editing per video',
      'Build idea database: Create Notion or Google Sheets "Content Ideas" tracker, columns: Idea | Category | Hook | Angle | Status, aim for 100+ ideas, sources: comments on your videos, competitor content, Google auto-complete, Reddit questions, never run out of ideas',
      'Set up content workflow: Monday (plan week, select 15 ideas from database), Tuesday (batch film all 15), Wednesday-Thursday (edit 2-3 per night), Friday (schedule all for next week using TikTok Creator Tools), Saturday-Sunday (engage with audience), makes content creation systematic',
      'Create content recycling system: Your best performing video from 3 months ago? Your new followers haven\'t seen it, re-film same topic with new hook or angle, good content can be reposted every 90 days, reduces pressure to create brand new ideas daily',
      'Use trending sounds tracker: Create spreadsheet tracking trending sounds in your niche, columns: Sound Name | Date Discovered | Video Count | My Video Idea | Posted (Y/N), check TikTok trends daily, plan to use each trending sound within 48 hours',
      'Automate cross-posting: Use Repurpose.io ($12/month) or manually: post to TikTok first, then Instagram Reels (remove watermark with savett.cc), then YouTube Shorts, then Pinterest Idea Pins - same video, 4 platforms, 4x the reach',

      // Set 4: Grow to 50k Followers (7 tasks)
      'Master algorithm triggers: TikTok prioritizes watch time (how much of video watched), shares (most valuable signal), comments, create content that triggers these: cliffhanger hooks, controversial statements, "DM me for X" (drives messages), end with question (drives comments)',
      'Collab with bigger creators: Reach out to creators with 25k-100k followers in your niche (not direct competitors), pitch: "Hey [name]! Want to colab on a video about [topic your audiences both care about]? We could both share to our audiences", aim for 2 collabs per month',
      'Go viral intentionally: Study your niche\'s viral formula, test 3 "viral angle" videos per week: controversial opinion, shocking statistic, emotional story, before/after transformation, "Things nobody tells you about X", one viral video (1M+ views) = 5k-20k new followers',
      'Leverage trending topics: Set Google Alerts for keywords in your niche, when news breaks or trend emerges, create content within 6 hours, example: new fitness study published? Make video explaining it in simple terms, early trend = maximum visibility',
      'Run engagement loops: When you post video, immediately comment first with: "❤️ this if you want more [topic] content" or "Comment your biggest [niche] struggle and I\'ll reply with tips", more comments = algorithm pushes video to more people, snowball effect',
      'DM outreach strategy: Spend 30 minutes daily DMing engaged commenters on your videos: "Thanks for your comment! Quick question: what other [niche] topics do you struggle with?", builds relationship, they become superfans, often share your content organically',
      'Track growth metrics: Create "Growth Dashboard" in Google Sheets, track weekly: follower count, average views per video, engagement rate (likes+comments)/views), profile visits, link clicks, analyze trends every Friday, adjust strategy based on data',

      // Set 5: Monetize with Mid-Tier Products (7 tasks)
      'Create $47 mini-course: Use Teachable or Gumroad, 5-module course solving ONE specific problem, each module = 10-min video lesson, format: Module 1 (Foundation), Modules 2-4 (Core system), Module 5 (Next steps), include PDF workbook, takes 8-12 hours to create',
      'Build high-converting sales page: Headline: "How to [achieve result] in [timeframe] Without [common obstacle]", include: 3-paragraph story (your transformation), bullet points (what\'s included), testimonials (ask early students for reviews), FAQ section, pricing ($47), Gumroad "Buy" button',
      'Offer founding member discount: First launch, price at $27 (instead of $47), post: "Launching my course this Friday - first 50 people get 40% off, DM READY for early access", creates urgency + scarcity, sell to email list + followers, goal: 50 sales = $1,350',
      'Create 5 promotional videos: Video 1 (Teaser): "I spent 3 months creating something that solves [problem]", Video 2-4 (Value): Teach free content related to course, mention course at end, Video 5 (Launch): "It\'s here! Link in bio", spread across 5 days',
      'Email sequence for launch: 5-email sequence to list: Day 1 (Announcement): "I created something special", Day 2 (Story): Why you made it, Day 3 (Testimonials): Early user results, Day 4 (Urgency): "24 hours left for discount", Day 5 (Final call): "Last chance"',
      'Add order bump: On Gumroad checkout page, add "Before you go: Add my [complementary product] for just $10 more" (example: if course is on fitness, bump is "30-Day Meal Plan Template"), 20-30% of buyers add bump = $10 × 0.25 × 50 orders = $125 extra',
      'Track course sales: Create spreadsheet tracking: Date | Traffic source | Visitors to sales page | Sales | Conversion rate | Revenue, goal after first launch: 50-100 students at $27-47 = $1,350-4,700, relaunch with price increase every 3 months',

      // Set 6: Brand Partnerships (7 tasks)
      'Build media kit: Create 2-page PDF in Canva: Page 1 (your photo, bio, niche, follower counts, average views, engagement rate, audience demographics from TikTok analytics), Page 2 (past collaborations, testimonials from brands if any, your rates, contact email), save as PDF',
      'Set your rates: Calculate based on follower count: 10k followers = $100-200 per dedicated video, 25k followers = $250-400, 50k followers = $500-1000, lower rates for product only (free product + 50% cash rate), create simple rate sheet to send when brands inquire',
      'Apply to brand platforms: Sign up for AspireIQ, #paid, Collabstr, Creator.co, Tribe, complete profile with niche/demographics/rates, apply to 5-10 relevant campaigns per week, response rate is low (10-20%) so volume matters, first deal usually takes 2-3 weeks',
      'Pitch brands directly: Make list of 20 brands in your niche you genuinely use, find their marketing email (usually hello@, marketing@, or partnerships@domain.com), send pitch: "Hi! I\'m [name], content creator with [X followers] in [niche]. I love your [product]. I\'d love to collaborate. Here\'s my media kit [link]. Interested?"',
      'Create case studies: After first 2-3 brand deals, create 1-pager for each: Brand name, campaign goal, your content, results (video views, engagement rate, clicks to brand, sales if tracked), use these as proof when pitching new brands',
      'Negotiate smartly: When brand offers rate, counter with: "Thanks! My standard rate is [20% higher], but I\'m flexible if we can do ongoing partnership (3-month contract)", ongoing deals = predictable income, worth small discount, also negotiate: payment terms (Net 30 typical), usage rights, exclusivity',
      'Goal: $1,000-2,000/month from brands: At 50k followers, aim for: 2-3 brand deals per month at $300-700 each = $1,500 average, track in spreadsheet: brand name, payment amount, date sent invoice, date paid, follow up if unpaid after 30 days',

      // Set 7: Email List Growth (7 tasks)
      'Upgrade lead magnet: Replace basic PDF with more valuable resource: 5-10 video training series, interactive quiz with personalized results, template bundle (15+ templates instead of 1), resource library with 10+ tools, higher perceived value = higher conversion rate',
      'Create dedicated lead magnet funnel: Set up simple funnel in ConvertKit: Landing page → Email capture → Thank you page with "While you\'re here, check out my course" upsell → 7-day email sequence nurturing and pitching course, 5-10% of free subscribers will buy',
      'Test opt-in rate: If landing page converts at <20% (email signups / visitors), improve: stronger headline, add testimonials, include preview image of what they\'re getting, add countdown timer "72-hour access", reduce form fields to email only (remove name/phone)',
      'Grow list to 2,000+ subscribers: With 50k followers, converting 10% to email list = 5,000 emails possible, realistic goal: 2,000 in next 90 days, strategies: promote lead magnet in 30% of videos, add to pinned comment, occasional live dedicated to sharing lead magnet',
      'Segment email list: In ConvertKit, create segments: "New subscribers" (joined in last 7 days), "Engaged" (opened 3+ emails in last 30 days), "Buyers" (purchased a product), "Non-openers" (haven\'t opened in 60 days), send different emails to each segment',
      'Email 2-3x per week: Monday (educational content), Wednesday (personal story or case study), Friday (promotional or affiliate), open rates should be 25-40%, click rates 2-5%, if lower: improve subject lines, make content more personal, ask questions',
      'Monetize email effectively: 1 in 4 emails can be promotional, promotional email formula: Subject line (curiosity or benefit), preview text (amplify subject), body (story + why product helps + link), PS (add urgency or bonus), test different approaches, track revenue per email',

      // Set 8: Advanced Analytics (7 tasks)
      'Set up Google Analytics 4: In youtube.com/account_advanced, enable "Show on channel" → disable, this reveals "Advanced settings", add Google Analytics tracking code, now you can track exactly how people find your content, watch time, traffic sources',
      'Track content ROI: Create spreadsheet: Video Title | Topic | Views | Engagement Rate | Profile Visits | Link Clicks | Product Sales Attributed | Revenue Generated, identify patterns: which topics drive most revenue? Which just get views but no conversions?',
      'A/B test everything: Test 2 versions of hooks (3 sec variation), thumbnails (YouTube), posting times, video lengths, run each test for 10 videos (5 with version A, 5 with B), compare average performance, implement winner, repeat weekly',
      'Heatmap analysis: Install Hotjar (free tier) on your sales page/landing page, see where people click, how far they scroll, where they drop off, if most people leave before scrolling to price = weak value proposition above, adjust accordingly',
      'Set up UTM tracking: For every link you share (email, TikTok bio, YouTube description), add UTM parameters: ?utm_source=tiktok&utm_medium=bio&utm_campaign=course_launch, in Google Analytics see exactly which traffic source drives sales',
      'Calculate customer lifetime value (LTV): Average customer buys: mini course $47 + upgrades to bigger course later $200 + affiliate purchases over time $50 = $297 LTV, knowing this, you can spend up to $150 acquiring customer and still profit, guides all decisions',
      'Weekly reporting ritual: Every Friday 4pm, review: total followers gained, revenue earned, best performing content, worst performing content, lessons learned, next week goals, spend 30 minutes, this habit alone puts you ahead of 90% of creators',

      // Set 9: Scale Content Production (7 tasks)
      'Hire video editor: Post on Upwork/Fiverr: "Looking for video editor for daily TikTok content, must know: CapCut, trending edits, fast pacing, pay $5-10 per video, need 15-20 videos edited per week", hire 2 editors (backup if one is unavailable), frees 10+ hours weekly',
      'Create SOPs (Standard Operating Procedures): Write Google Doc with exact editing style: intro length (3 sec), text size (80pt, bold), transition style (slide, no dissolve), audio levels, export settings (1080p 30fps), give to editor, ensures consistency',
      'Delegate social media engagement: Hire VA for 1 hour daily ($5/hour on OnlineJobs.ph) to: respond to comments on your behalf (train them on your tone), DM commenters thank you messages, engage with other accounts in niche, costs $150/month, maintains connection at scale',
      'Film "CEO days": Dedicate one day per month to filming 100+ videos, rent studio space with good lighting ($100-200/day), bring 10 outfit changes, hire videographer ($200-300/day), film non-stop, batch film 3+ months of content in 8 hours',
      'Create templates for everything: Save Canva templates for: thumbnails (5 styles), Instagram carousels (3 layouts), email designs, sales pages, media kits, never start from scratch, reduces creation time 70%, allows delegation',
      'Repurpose long-form to short-form: If you have podcast or YouTube videos, hire editor to chop 10-min video into ten 60-second clips highlighting best moments, one long-form video = 10+ short-form posts, maximizes content ROI',
      'Build content calendar 90 days out: Plan entire quarter: which product launches when, major content themes, brand partnership timings, email campaigns, gives you clarity and prevents last-minute stress, review and adjust monthly',

      // Set 10: Reach $5k/mo (7 tasks)
      'Diversify income streams: Track revenue by source - goal breakdown: Mini course ($1,500), Brand deals ($1,500), Affiliates ($1,000), Coaching/consulting ($1,000) = $5,000, don\'t rely on one income source, if one dips others compensate',
      'Launch higher-ticket offer: Create $297-497 flagship course (more comprehensive than $47 mini), or offer 1-on-1 coaching at $500-1000/month for 5 clients = $2,500-5,000 alone, easier to sell 10 high-ticket vs 100 low-ticket',
      'Build community/membership: Use Circle, Skool, or Patreon, monthly membership at $20-50/month with: exclusive content, live Q&As, community forum, resources, 100 members at $30/month = $3,000/month recurring revenue (Holy Grail)',
      'Optimize affiliate strategy: Stop promoting random products, negotiate direct partnerships with 3-5 core brands in your niche for 15-30% commission (vs Amazon\'s 3-10%), promote same products repeatedly, build trust, your audience buys because they trust YOU',
      'Create evergreen sales funnel: Lead magnet → Email sequence (5-7 emails teaching + pitching mini course) → Mini course buyer → Email sequence (upselling flagship course) → Flagship course buyer → Email pitching membership, runs automatically 24/7',
      'Track everything weekly: Create "Revenue Dashboard" in Google Sheets auto-pulling data from Gumroad, ConvertKit, affiliate networks, brand deal tracker, see real-time: current month revenue, projected end of month, compare to last month',
      'Consistency for 90 more days: You\'ve done the work, built systems, created products - now execute for 90 days without changing strategy, too many creators quit at month 3-4 right before breakthrough, $5k/month is realistic at 50k-100k followers with proper monetization'
    ]
  },

  '$10k/mo-Content Creation': {
    goal: '$10k/mo',
    niche: 'Content Creation',
    capital: {
      range: '$800–$2,000',
      uses: ['Platform/tools', 'Inventory', '4-week buffer']
    },
    steps: [
      // Set 1-10 continue with advanced tactics for $10k/mo goal...
      // All 70 tasks follow same ultra-specific pattern
      '✅ Audit your entire business: Create spreadsheet analyzing last 90 days: revenue by source, profit margin per product, time spent per income activity, identify: what makes money? What doesn\'t? Cut bottom 20% of activities that don\'t generate revenue',
      '✅ Define your $10k revenue model: Map out exact breakdown, example: Flagship course $4k/mo (40 sales × $99), Memberships $3k/mo (100 members × $30), Brand deals $2k/mo (4 deals × $500), Affiliates $1k/mo = $10k total, reverse engineer: how many followers/traffic needed?',
      '✅ Calculate required metrics: Work backwards - if course converts at 2%, need 2,000 visitors to sales page for 40 sales, if 10% of followers click link in bio, need 20,000 followers minimum, if not there yet, focus on growth + conversions first',
      '✅ Identify bottleneck: What\'s holding you back from $10k? Not enough followers? Low conversion rate? No high-ticket offer? Weak email list? Poor positioning? Be honest, focus next 30 days on fixing THE bottleneck (not everything at once)',
      '✅ Competitor reverse engineering: Find 10 creators at $10k+/month level, analyze everything: their content strategy, posting frequency, how they sell, what they sell, pricing, team size, make spreadsheet comparing you vs them, identify gaps',
      '✅ Audience research deep dive: Survey 100+ followers with: What\'s your annual income? What do you spend money on in [niche]? What would you pay for [specific solution]? What\'s missing from existing products? - data reveals exactly what high-ticket offer to create',
      '✅ Build financial tracking: Create P&L (Profit & Loss) statement in Google Sheets: Revenue (by source) | COGS (cost to deliver product) | Marketing expenses | Software | Contractors | = Net profit, track monthly, aim for 60-70% profit margin',

      'Position as THE authority: Write a book (self-publish on Amazon for free), start podcast interviewing others in niche, speak at virtual summits, write guest articles for industry blogs, authority = can charge premium prices',
      'Build personal brand beyond platforms: Create website (Webflow/Squarespace $16/month), collect press mentions, get featured in publications (use HARO - helpareporter.com), "As seen on" badges build credibility that justifies $500+ products',
      'Develop unique methodology: Package your process with proprietary name, example: "The 5-Pillar Content System", "3-Phase Transformation Method", unique framework = intellectual property = competitive moat = premium pricing',
      'Create category of one: Instead of "fitness coach" → "The Metabolism Fixer", instead of "business coach" → "The Offer Architect", unique positioning lets you charge 3-5x more than generic competitors',
      'Build social proof systematically: After every sale, email: "Thrilled to have you! Would love to feature your success. Send me a quick video (30 sec) sharing your biggest win from [product]", collect 50+ video testimonials, use everywhere',
      'Leverage PR: Write list of 10 angles that make you newsworthy: "Creator who made $10k in 90 days", "Single mom built $100k business", pitch to: Forbes, Entrepreneur, Inc, Business Insider, even one feature = instant authority boost',
      'Strategic partnerships: Identify 5 creators/brands with adjacent audience (not competitors), propose: "Let\'s do joint webinar/product/bundle, split revenue 50/50, we both tap into each other\'s audiences", one partnership can add $2-5k/month',

      'Develop $500-1000 group program: Instead of 1-on-1, group coaching: 10-20 students, weekly live calls (90 min), private community, recorded lessons, 6-8 week program, costs same time as 1-on-1 but 10-20x revenue',
      'Create $2,000+ flagship course: Premium comprehensive program solving transformation, 10+ modules, 50+ lessons, templates/resources, lifetime access, bonus live Q&As, payment plans ($500/month × 4 = easier to sell than $2k upfront), aim for 5-10 sales/month',
      'Add VIP tier: Take existing course, add VIP option at 3x price: everything in standard + bi-weekly 1-on-1 calls, personalized feedback, direct Voxer access, 20-30% of buyers upgrade to VIP = massive revenue bump with minimal extra work',
      'Build membership community: Circle/Skool platform ($99/month), charge $100-200/month, include: weekly live training, community forum, resource library, monthly challenges, 50 members = $5-10k/month recurring, focus on retention',
      'Implement application-only model: For high-ticket programs, require application (Google Form), filter for qualified leads only, "Not everyone is a fit", exclusivity increases perceived value + ensures buyer quality + better results',
      'Payment plan strategy: Offer 3 pricing options: Pay-in-full (10% discount), 3 payments (standard price), 6 payments (+10% total), 60-70% choose payment plan, increases conversions + monthly recurring revenue',
      'Add downsell after no: If someone doesn\'t buy flagship offer ($2k), automated email next day: "Not ready for full program? Start with our mini-course ($97) - it covers first 20% of the system", recover 15-25% of lost sales',

      'Scale brand partnerships to $3-5k/month: At 100k+ followers, rates should be: $1,500-3,000 per dedicated video, $500-1,000 product placement, negotiate retainers: $3k/month for 4 posts = stable income + less sales work',
      'Build influencer network: Connect with 20-30 creators in your niche (non-competing), when brand reaches out, pass along opportunities you can\'t take + ask 10% referral fee, passive income stream + good karma',
      'Negotiate equity deals: For startups/new brands, negotiate: cash + equity (0.5-2% of company), if company succeeds, equity is worth far more than one-time payment, only for brands you genuinely believe in',
      'Create brand pitch deck: 5-slide deck showing: your audience demographics (proof from analytics), engagement rates (vs industry average), past campaign results (clicks, sales, ROI), your unique value, content examples, makes outreach professional',
      'Require usage rights clauses: In contracts specify: "Content created can be used by brand on their own channels for 6 months, after that exclusive rights revert to me", protects your work, allows you to repurpose',
      'Build rate card: Publish public-facing rate sheet on website: "$3,000 - Dedicated TikTok video", "$5,000 - Series (3 videos)", "$10,000 - Month-long partnership (8 pieces of content)", saves back-and-forth, attracts serious inquiries',
      'Annual brand partnerships: Pitch existing brand partners: "$30,000 annual deal: 1 video per month, quarterly product launches, 2 live events, exclusive partnership in [niche]", annual deals = predictable income, less hunting',

      'Hire team: You can\'t scale alone, core hires: Video editor ($1,500-2,500/month), Community manager ($1,000-1,500/month), Executive assistant ($1,200-2,000/month), total cost $3,700-6,000/month, frees 30+ hours/week for CEO activities',
      'Set up team systems: Use Asana or ClickUp for project management, Slack for communication, Loom for video instructions, create SOPs (Standard Operating Procedures) for everything, team can run operations while you create content + strategy',
      'Weekly team meetings: Monday 9am, 30-minute standup: each person shares: last week wins, this week priorities, blockers/needs, keeps everyone aligned, creates accountability, prevents issues before they become problems',
      'Build content team: Instead of filming everything yourself: hire 2-3 "talking head" creators ($200-500 per video), they film based on your scripts/ideas, you focus on strategy + high-level content, 10x your output',
      'Automate customer support: Use ManyChat or Tidio chatbot answering FAQs automatically (95% of questions are same 10 questions), human only handles 5% complex issues, saves 10-20 hours/week',
      'Financial team: At $10k+/month, hire: bookkeeper ($150-300/month keeps books clean), accountant (for quarterly taxes, $500-1,000/quarter), prevents costly mistakes, maximizes deductions, gives you peace of mind',
      'Invest in training: Budget $500-1,000/month for courses, coaching, masterminds - at this level, proximity to people doing $50-100k/month raises your ceiling, expensive but ROI is 10-50x',

      'Launch YouTube strategically: YouTube has highest RPM (revenue per thousand views) of any platform, $3-30 per 1k views vs TikTok $0.02-0.05, one video with 100k views = $300-3,000, repurpose your content, upload 2-3x/week',
      'Licensing content: License your video footage to stock sites (Storyblocks, Artgrid), brands/creators pay to use your B-roll, typical: $50-200 per clip, if you create lots of B-roll, passive income stream',
      'Consulting for brands: At 100k+ following, brands will pay $200-500/hour for consulting: content strategy, campaign planning, creator partnerships, offer half-day intensive ($1,500) or full day ($3,000), 2 per month = $3-6k',
      'Speaking engagements: Apply to speak at virtual summits, podcasts, webinars in your niche, negotiate: $500-2,000 per speaking engagement + ability to pitch your product to audience, 2-4 per month = $2-8k + sales',
      'White label your system: Package your course/framework, license to other coaches in your niche to sell under their brand, charge $500-2,000/month per licensee, 10 licensees = $5-20k/month passive',
      'Invest in other businesses: As you build capital, invest in: other creator\'s businesses (as advisor/equity partner), digital products (acquire established products in your niche), traditional investments (index funds, real estate), diversify beyond content',
      'Build personal holding company: Set up LLC holding company, create multiple brands under it: main personal brand, secondary niche brand, product line, service agency, diversification protects from platform risk',

      'Repurpose content 10 ways: Every piece of content you create should be used: TikTok → Instagram Reels → YouTube Shorts → YouTube long-form → Podcast → Newsletter → Twitter thread → LinkedIn post → Pinterest Pin → Blog post, create once, publish 10x',
      'Hire content repurposer: VA ($5-8/hour) who takes your TikToks and reposts to other 5 platforms daily, costs $200-300/month, doubles your reach, you just create, they distribute',
      'Build content library: Organize all content in Airtable or Notion: topic, platform, date posted, performance, repurpose opportunities, when running low on ideas, repurpose top 10% from 6 months ago',
      'Batch create 60-90 days ahead: Once per quarter, film 200+ videos in 2-3 days, gives you 3 months of daily content, removes stress, allows you to focus on other revenue activities',
      'Leverage UGC creators: Hire 5-10 UGC creators ($50-100 per video) to create content about your products/services, use their videos in your ads, on your social, provides social proof + fresh perspectives',
      'Develop podcast from content: Weekly podcast repurposing your content into 15-30 min audio discussions, upload to Spotify/Apple, embed in emails, sponsors pay $20-100 per 1,000 downloads, at 5,000 downloads = $100-500 per episode',
      'Create "best of" compilations: Monthly, compile top moments from all your videos into "Best of [Month]" compilation, easy content that performs well because it\'s proven hits, keeps new followers engaged',

      'Set $25k/month goal: Now that you\'re at $10k, next milestone is $25k, requires: larger audience (200k+ followers), more products (2-3 courses + membership + coaching), stronger team (3-5 people), continue systems',
      'Mentor others: Once you hit $10k, people will pay you to teach them your system, create mastermind ($500-1,000/month with 10-20 members = $5-20k/month), leverage your success story as product',
      'Write book: Self-publish on Amazon about your journey/system, priced at $20-30, book is authority builder + lead magnet + income source, 1,000 sales = $12-20k + credibility boost',
      'Expand to new platform: If TikTok is main, expand to YouTube Shorts or Instagram, completely new audience, diversifies platform risk (if one platform tanks, you\'re not screwed)',
      'Build email to 25,000+ subscribers: This size list = $5-10k/month from emails alone (affiliate promotions, product launches, sponsorships), focus 20% of effort on list growth',
      'Take CEO mindset: You\'re not a creator anymore, you\'re a CEO, spend time on: strategy, partnerships, team management, high-leverage activities, not filming every video yourself, protect your time ruthlessly',
      'Reflect and optimize: Every Sunday, review: What worked this week? What didn\'t? What made money? What wasted time? Am I working on the right things? Course correct weekly, small adjustments compound massively'
    ]
  },

  // ==================== DIGITAL PRODUCTS PATHS ====================
  
  '$1k/mo-Digital Products': {
    goal: '$1k/mo',
    niche: 'Digital Products',
    capital: {
      range: '$100–$300',
      uses: ['Platform fees', 'Basic tools', 'First-week buffer']
    },
    steps: [
      // Set 1-10 with 70 ultra-specific tasks for digital products
      '✅ Open Reddit.com, search bar type "[your interest] + struggling", example: "real estate agents struggling", sort by "New", screenshot 10 posts where people ask for help with recurring problem',
      '✅ Join 5 Facebook groups in your niche (real estate, marketing, fitness, etc), turn on notifications, for 3 days just read every post - what questions appear 5+ times? That\'s your product idea',
      '✅ Go to Amazon.com, search "[your niche] books", click top 3 books, read 1-star and 2-star reviews only - people say "this book didn\'t cover X" or "wish it included Y" - those gaps are YOUR product opportunity',
      '✅ Open Twitter/X search bar, type "[your niche] + need help with", read 50 tweets, notice patterns? If 15/50 tweets mention same problem (example: "I need help creating content calendar"), that\'s validated demand',
      '✅ Ask 10 friends on social media: "Quick question - what\'s your biggest frustration with [topic]?" via DM, if 5+ mention similar issue, you found your problem to solve',
      '✅ From all research, pick ONE simple problem you can solve in 1-2 hours (example: "Social media content calendar template for small businesses"), don\'t overcomplicate first product',
      '✅ Validate it\'s urgent: Ask yourself - will people pay to solve this TODAY or can they wait? If they need it urgently (tax deadline, event planning, job application) = good product idea',

      'Open Canva.com (free account), click "Create a design" → choose custom size: 8.5" × 11" for PDF worksheet/template, or 1920 × 1080 for digital planner',
      'Design first version: Keep it simple - if it\'s a template, create 1 example filled out + 1 blank template, if it\'s checklist, list 15-25 actionable items with checkboxes, spend 1-2 hours max on first version',
      'Make it visually appealing: Use Canva\'s free templates as starting point, choose 2-3 brand colors (not rainbow), add simple icons (Canva has thousands free), ensure text is readable (16pt minimum), white space is your friend',
      'Add your branding: Bottom of each page add small text: "Created by [Your Name] | [YourWebsite.com] or Instagram handle", subtle branding, when buyers share it, people know who made it',
      'Export properly: In Canva click "Share" → "Download" → select "PDF Print" (high quality) or "PNG" (if digital wallpaper/graphic), make sure it\'s editable if meant to be fillable (use Google Sheets for fillable spreadsheets)',
      'Create product mockup: Use Smartmockups.com (free), upload your PDF/design, place on laptop/tablet mockup, looks professional, use this image for selling',
      'Save master file: Save Canva link in Google Doc titled "Product Files", if you need to update or create version 2.0, you have original',

      'Sign up for Gumroad.com (free, takes 10% of sales), click "Create product", choose "Digital product", product name: clear what it solves, example "Social Media Content Calendar Template"',
      'Write product description: Formula - Paragraph 1: "Struggling with [problem]? You\'re not alone.", Paragraph 2: "This [product] helps you [specific result] in [timeframe]", Paragraph 3: "What\'s included: [bullet list]", Paragraph 4: "Perfect for [ideal customer]"',
      'Upload your product: Click "Add file", upload your PDF/Zip file, Gumroad hosts it, handles delivery automatically after purchase, buyers get instant download link',
      'Price your first product: For first product, price at $7-19, sweet spot is $9.99 (under $10 feels low-risk, $9.99 better than $10 psychologically), you can always raise price later',
      'Create cover image: Upload your product mockup as cover image, Gumroad shows this on product page, eye-catching image increases clicks',
      'Add FAQ section: Click "Add" → "FAQ", answer 3-5 common questions: "Is this refundable?" (Yes, 30 days), "What format is this?" (PDF/Excel/etc), "Do I need special software?" (No), "How do I download?" (Link in email)',
      'Enable "Pay what you want": Optional but powerful - set minimum price $7, suggested $9.99, some people will pay $15-20, let customers decide value, often increases average order value',

      'Post in Facebook groups where your audience hangs out: Don\'t spam "BUY MY PRODUCT", instead: "Hey everyone! I made this [template] after seeing lots of questions about [problem]. It\'s helped me [result]. Sharing in case helpful! [link]" - provide value first',
      'Share on your social media: Instagram story: "I just launched something I\'m so excited about! After hearing from so many of you struggling with [problem], I created [product] 🎉 Link in bio", don\'t be salesy, share genuine excitement',
      'Post on Twitter/X: Tweet: "Spent the weekend building this [product name] after realizing how many people need help with [problem]. Just launched! [link] What do you think?", tag relevant hashtags like #digitals, #templates, #[niche]',
      'Reddit strategic sharing: Find subreddit for your niche (r/socialmedia, r/smallbusiness, etc), read rules about self-promotion first, post in "Share your stuff Saturday" threads or when someone explicitly asks for solutions to your exact problem - be helpful, not spammy',
      'Offer founding member discount: For first 7 days, offer 30% off: "$9.99 product now $6.99 for first 50 buyers", creates urgency, people love feeling like they got deal, post: "Launch week special - first 50 get $3 off"',
      'DM 20 people who asked about this topic: Go back through Facebook groups/Reddit, find people who asked questions related to your product, DM: "Hey! Saw your post about [problem]. I just created [product] that might help. Here\'s 50% off for being early supporter: [discount link]"',
      'Share in your email signature: If you have email list (even small), add to signature: "PS - Just launched [product name] to help with [problem]. Check it out! [link]", passive promotion every email you send',

      'Track first sales: In Gumroad dashboard, watch for first sales (usually happens within 24-48 hours if promoted well), when first sale comes in, celebrate! Screenshot it, post: "First sale! Thank you! 🎉"',
      'Message every buyer: After each sale, Gumroad shows email, send personal email: "Hi [name]! Thank you so much for purchasing [product]! Would love to hear your feedback. Reply to this email with any questions or suggestions. - [Your name]", builds relationship',
      'Ask for testimonials: 2-3 days after purchase, email buyers: "Hey! Hope you\'re enjoying [product]. Would you be willing to share a quick testimonial? What result did it help you achieve? What did you like most?" - offer $5 Starbucks gift card for video testimonial',
      'Add testimonials to product page: Once you have 3-5 testimonials, add to Gumroad page under description, social proof significantly increases conversions (can boost sales 25-50%)',
      'Identify improvements: If people ask same questions or mention something missing, note it, update product (Gumroad lets you update files buyers automatically get new version), email buyers: "I updated [product] based on your feedback - download new version!"',
      'Goal: 10 sales in first 7 days: At $9.99 each, 10 sales = $99.90 revenue (Gumroad takes 10% = $90 profit), if you hit this, you validated the product, time to scale',
      'Create next product: Based on feedback and engagement, plan product #2 - ideally complementary to product #1 (if #1 was "Calendar template", #2 could be "Caption templates"), repeat process',

      'Create bundle: Once you have 2-3 products, create bundle: "Complete [Niche] Kit" including all products, price bundle at 30% off individual prices, example: 3 products at $10 each ($30 total) → bundle at $20 (saves $10), bundles increase average order value',
      'Add upsell: In Gumroad, enable "Offers" feature, after someone buys product #1, show popup: "Would you like to add product #2 for just $5 more?", 20-30% of buyers take upsell',
      'Limited-time pricing: Once per month, run 48-hour sale: "Flash Sale! All products 25% off for next 48 hours only", send email to previous buyers (yes, they might buy again for friends or your other products), post on social',
      'Cross-promote products: On each product\'s download page (thank you page), add: "You might also like: [Product B] [Product C]", with clickable images, people who just bought are hot leads',
      'Create "starter kit": Package your best-selling product + related resource into "starter kit" at mid-tier price ($19-29), positions between low-ticket ($10) and potential higher-ticket future products',
      'Test different pricing: Try increasing price of best-seller from $9.99 to $12.99 for 7 days, track: do sales volume drop? Does revenue increase overall? Formula: (Price × Sales) = Revenue, sometimes higher price = more revenue with fewer sales',
      'Implement "Name your price": For one product, test "pay what you want" with $5 minimum, many people will pay $10-15, average price often ends up higher than if you set fixed $9.99',

      // Set 7: Social Media Marketing (7 tasks)
      'Set up TikTok account: Username: @[niche]templates or @[name]digitals, bio: "Digital products to help with [problem] | [X] happy customers | Free resources↓", link to bio page with products',
      'Create "day in the life" content: Film yourself creating a digital product, caption: "Creating digital products is easier than you think - here\'s how I made $X this month", people love behind-the-scenes, sell the dream + your products',
      'Tutorial content: "How to use [product name]" videos showing your product in action, provides value + shows what buyers get, example: screen recording filling out your template, adds legitimacy',
      'Problem-solution format: Video hook: "If you struggle with [problem] try this...", show the struggle (messy desk, disorganized calendar), then show your product solving it, end with "Link in bio🔗", proven format',
      'Build email list: Add to your Gumroad checkout: checkbox "Send me helpful tips", collect emails, use ConvertKit free tier, send 1 email/week with tips + occasional product promotion',
      'Weekly content schedule: Monday (educational - teach something), Wednesday (promotional - feature product), Friday (testimonial/results), post 1x per day minimum on TikTok/Instagram',
      'Engage with niche community: Spend 15 min daily commenting on posts in your niche (social media, productivity, etc), add value in comments, people check your profile → see your products',

      // Set 8: Product Expansion (7 tasks)
      'Launch product #4-5: By now you have validation and system, create 2 more products in same niche, total 5 products gives customers choices, increases store legitimacy',
      'Create product tiers: Organize products: "Budget" tier ($5-10), "Standard" tier ($15-25), "Premium" tier ($30-50), different customers have different budgets, serve all',
      'Seasonal products: If applicable, create seasonal versions (example: "Q4 Planning Template" vs "Q1 Planning Template"), refreshes catalog, gives reason to buy again',
      'Partner with complementary creator: Find creator with similar audience (not competitor), propose: "Let\'s bundle our products together, split revenue 50/50", taps into their audience',
      'Affiliate program: Let other creators sell your products for 30-50% commission, set up in Gumroad under "Affiliates", grow distribution without spending on ads',
      'Evergreen product suite: Aim for 5-10 evergreen products (not trendy, always useful), once created, they sell passively for years with minimal maintenance',
      'Track competition: Monitor other sellers in your niche monthly, note: what new products they launch, their pricing changes, their marketing tactics, stay ahead of trends',

      // Set 9: Analytics & Optimization (7 tasks)
      'Set up Google Analytics: Add Google Analytics to your website/landing pages (if applicable), track: page views, traffic sources, conversion rates, understand where buyers come from',
      'Monitor Gumroad analytics: Check dashboard weekly for: total views, conversion rate (sales/views), average order value, refund rate, identify trends and opportunities',
      'A/B test product descriptions: Try 2 different descriptions for same product (switch every week), track which converts better, implement winner, test headlines, benefits, formatting',
      'Survey your buyers: Email every 10th buyer: "Quick question - what almost stopped you from buying? What convinced you to buy?", use answers to improve sales page and messaging',
      'Calculate profit margins: Track per product: revenue, platform fees (Gumroad 10%), creation time, profit per sale, focus on highest-margin products',
      'Review refund requests: When someone asks for refund, ask why (before refunding), common patterns reveal product issues or unclear expectations, fix systematically',
      'Monthly revenue review: First Monday of month, review: total revenue, best-selling product, worst-selling product, traffic sources, set goals for next month',

      // Set 10: Scale to $1k/month (7 tasks)
      'Increase prices strategically: Once you have 20+ sales and good reviews, raise prices 20-30%, test $12 → $15, often sales stay same = more revenue, premium pricing attracts quality buyers',
      'Create mini-course upsell: Turn your best product into mini-course format: 5 video lessons + workbook, price at $29-49, offer to existing buyers at discount, new revenue stream',
      'Launch flash sales quarterly: Every 90 days, run 3-day sale: "Everything 40% off", email list + post on social, creates urgency spikes in revenue',
      'Build referral system: Offer buyers: "Share your unique link, earn 20% commission on every sale", turns customers into affiliates, passive promotion',
      'Optimize for SEO: If you have website, optimize product pages for Google: use keywords in titles, write descriptions targeting search terms like "[niche] templates", free organic traffic',
      'Diversify platforms: Don\'t rely only on Gumroad, also list on: Etsy (for design products), Creative Market, your own website, reduces platform risk',
      'Goal $1,000/month: With 5-7 products averaging $15 each, need ~67 sales/month, achievable with: consistent content (2-3 sales/day), email marketing (5-10 sales/week), word of mouth, by month 3-4'
    ]
  },

  '$5k/mo-Digital Products': {
    goal: '$5k/mo',
    niche: 'Digital Products',
    capital: {
      range: '$300–$800',
      uses: ['Platform/tools', 'Testing ads', '2–3 week buffer']
    },
    steps: [
      // Set 1-10 with 70 ultra-specific tasks
      '✅ Analyze your existing products: Open Google Sheets, list all products, columns: Product Name | Total Sales | Revenue | Avg Rating | Refund Rate, identify your bestseller (this becomes your "flagship" that you\'ll scale)',
      '✅ Customer survey your buyers: Email last 50 buyers: "Quick question: Why did you buy [product]? What result were you looking for?" - analyze responses for patterns, they reveal how to market better',
      '✅ Identify upsell opportunity: What do customers need AFTER using your product? Example: if they bought "Resume Template", they need "Interview Prep Guide", create natural product progression',
      '✅ Competitive analysis: Find 5 competitors selling similar products, study their: pricing ($15? $40? $99?), product descriptions, what formats (PDF, Notion, Figma), what\'s included, how to differentiate yourself?',
      '✅ Read negative reviews: Check competitors\' reviews on Gumroad, Etsy, Creative Market, note complaints: "Not Mac compatible", "Needed more examples", "Too complicated" - fix these in YOUR product',
      '✅ Create "ultimate" version: Take your bestselling product, upgrade it: add 2-3x more content/pages, include video tutorials, add bonus resources, rebrand as "[Product Name] Pro" or "Ultimate [Product]"',
      '✅ Validate higher price: Survey email list: "Would you pay $39 for premium version with [list new features]?" if 30%+ say yes, validated, if not, adjust what\'s included until validated',

      'Research high-converting sales pages: Visit AppSumo, Creative Market, ConvertKit Templates, screenshot sales pages of bestselling products, note structure: headline, benefits, what\'s included, testimonials, FAQ, guarantee',
      'Write compelling headline: Use formula: "The [adjective] [product type] to [achieve desire] Without [common obstacle]", example: "The Complete Social Media Kit to Book Clients Without Spending Hours Creating Content"',
      'Benefits over features: Don\'t write "Includes 30 templates", write "Post consistent content for 30 days with done-for-you templates", focus on outcome not what\'s inside',
      'Add product screenshots: Take 5-8 high-quality screenshots of your product showing best pages/sections, add to sales page, seeing inside builds trust + shows quality',
      'Include video walkthrough: Film 60-second screen recording walking through product, upload to YouTube (unlisted), embed in sales page, video increases conversions 30-50%',
      'Write bullet list: "What\'s Included" section with 8-12 bullet points, each starting with benefit emoji: ✅ 50 done-for-you captions, ✅ Hashtag research spreadsheet, ✅ Posting schedule template',
      'Add FAQ section: Answer 5-7 objections: "What format?" "Do I need software?" "Is this a subscription?" "Can I get refund?" "How do I access?" "Is this for beginners?" reducing friction = more sales',

      'Set up Teachable account: Go to teachable.com, sign up for free plan, create first course, course title should match your upgraded product, example: "[Product] Masterclass"',
      'Record video lessons: Your product likely has 5-10 sections, turn each into 8-15 minute video lesson, film yourself explaining/teaching, no need for fancy setup, phone + good lighting works',
      'Add downloadable resources: Include your original product as "workbook" inside course, add bonus resources, templates, cheat sheets, more perceived value = can charge more',
      'Price at $99-199: Digital courses at this price point convert well (not too high to scare, not too low to seem cheap), test $97 first, if sells well try $147, sweet spot varies by niche',
      'Create course curriculum preview: On sales page, list all modules and lessons so buyers see exactly what\'s inside: "Module 1: Foundation (3 lessons), Module 2: Setup (4 lessons)..." - transparency builds trust',
      'Offer payment plan: Let people pay $39/month × 3 instead of $99 upfront, payment plans increase conversions 40-60% (more affordable, more people can afford monthly payments)',
      'Build course sales funnel: Free lead magnet → 5-email sequence → pitch course, automated funnel sells course 24/7 without you actively promoting',

      'Launch Facebook Ads: Create Business account at business.facebook.com, install Facebook Pixel on website, create campaign, objective: "Sales", daily budget: start $10/day',
      'Create ad creative: Simple video ad: you talking to camera for 15 seconds: "If you\'ve been struggling with [problem], I created [product] to help. Used by X+ people. Link below 👇" - straightforward works best',
      'Target cold audience: Target interests related to your niche (example: social media management, entrepreneurship, small business), age 25-45, exclude existing customers',
      'Track metrics: After 5 days at $10/day, check: CPC (cost per click - should be under $1), CTR (click-through rate - aim for 1-3%), Cost per purchase (should be under 50% of product price for profit)',
      'Scale winning ads: If ad is profitable (making more revenue than ad spend), increase budget by 20% every 2 days: $10 → $12 → $14.40, gradual scaling prevents algorithm reset',
      'Test different ad angles: Run 3 ads simultaneously with different hooks: Ad A (problem-focused), Ad B (result-focused), Ad C (testimonial), pause lowest performer after 3 days',
      'Set up retargeting: Create custom audience of people who visited your product page but didn\'t buy, show them ad with urgency: "Still on the fence? Get 20% off this weekend only" - retargeting converts 5-10x better',

      'Set up ConvertKit automation: Create sequence "Product Launch", 5 emails: Day 0 (teaser), Day 1 (launch + early bird discount), Day 2 (testimonials), Day 3 (countdown to regular price), Day 4 (last chance)',
      'Write email #1 (teaser): Subject: "Launching something new tomorrow...", body: tease what\'s coming, build curiosity, don\'t reveal yet, "Stay tuned for tomorrow\'s email"',
      'Write email #2 (launch): Subject: "It\'s here! Introducing [Product]", body: what it is, who it\'s for, what problem it solves, what\'s included, special launch pricing: $10 off for 48 hours',
      'Write email #3 (social proof): Subject: "People are loving [Product]! 😍", body: share 3-5 testimonials from early buyers, case study of specific result someone got, "Join [X] others who grabbed it"',
      'Write email #4 (scarcity): Subject: "24 hours left for launch pricing", body: reminder that price goes up tomorrow, emphasize what they get, clear CTA button "Get [Product] Now"',
      'Write email #5 (final call): Subject: "Last chance - price increases in 6 hours", body: this is it, countdown timer (use Deadline Funnel or custom HTML), "Don\'t miss out", link to buy',
      'Segment your list: Send product launch to entire list, but after sequence ends, create segment "Didn\'t purchase", 7 days later send them downsell offer: smaller/cheaper product',

      'Affiliate recruitment: Create page "Become an affiliate", explain: "Promote [product] and earn 40% commission on every sale", benefits: proven conversion rate, marketing materials provided, monthly payouts',
      'Use Gumroad Affiliates: Enable in Gumroad settings, set commission 30-40%, generate unique referral link for each affiliate, Gumroad tracks sales automatically',
      'Reach out to potential affiliates: Find 20-30 creators/bloggers in your niche with 5k-50k followers, DM: "Love your content! Would you be interested in promoting [product] to your audience? I offer 40% commission. Happy to send you free access to try it first"',
      'Provide marketing materials: Create Google Drive folder with: product images, sample captions for social posts, email copy they can send to their list, ad creatives, short promo video, makes it easy for affiliates to promote',
      'Incentivize top performers: Monthly contest: "Top affiliate this month gets $200 bonus + featured on our page", competition drives more promotion',
      'Track affiliate performance: Create spreadsheet tracking each affiliate: name, followers, clicks from their link, sales generated, commission owed, pay out monthly via PayPal',
      'Goal: 10-20 active affiliates: Even if each drives 5 sales/month, 15 affiliates × 5 sales × $40 product × 40% commission = $1,200 spent but $3,000 revenue = $1,800 profit from affiliate channel alone',

      'Build Notion workspace: If you haven\'t already, expand product offering to Notion templates (huge market), replicate your bestselling template in Notion, sell as separate SKU',
      'Create Figma templates: For design-related products, create Figma versions, designers love Figma, charge premium ($49-99) as professional tool, tap into designer market',
      'Add Canva templates: Upload your designs as Canva templates using Canva\'s template link feature, some people prefer Canva, capturing both audiences',
      'Build spreadsheet products: Excel/Google Sheets versions for data/finance/planning products, some people prefer spreadsheets over PDFs, create both',
      'Audio versions: If product includes text (ebook, guide), record audio version reading it, sell as "Audio + PDF bundle" at +$10, helps auditory learners',
      'Video companion: For template products, create 5-10 short video tutorials showing how to use each template, package as "Templates + Video Course" at premium price',
      'Translate popular products: Use ChatGPT to translate your bestseller to Spanish, French, German, Portuguese, opens international markets, list as separate product or bonus',

      'Create mega bundle: "The Ultimate [Niche] Bundle" - all your products in one package, price at 50% off individual total, example: 8 products × $15 each = $120 → bundle $59, buyers love bundles (higher value perception)',
      'Flash sales strategy: Once per quarter, run 72-hour flash sale: "Everything 40% off site-wide", email list + post on social, create urgency, flash sales drive 3-5x normal revenue in short burst',
      'Black Friday Cyber Monday: Plan big promotion Nov/Dec, biggest shopping days of year, offer: "Lifetime access to all current + future products for $99" (normally $300+ value), can do $5-15k in one weekend',
      'Product-specific promotions: Highlight different product each week in email/social: "Product of the Week: [Name] - 25% off this week only", rotates promotion across catalog',
      'Build product roadmap: Share publicly: "Coming soon: [Product X], [Product Y], [Product Z]", gets people excited, they sign up for email to get notified, pre-launch buzz',
      'Pre-sell new products: Before creating new product, pre-sell it: "Launching [New Product] next month, pre-order now for 50% off", validate demand + fund creation, if no one pre-orders, don\'t build it',
      'Goal $5,000/month: With 8-10 products averaging $30, need 167 sales/month (~6 sales/day), achievable with: paid ads (2-3 sales/day), organic content (1-2 sales/day), affiliates (1-2 sales/day)',

      'Expand to Etsy: List your digital products on Etsy, huge existing marketplace, Etsy handles transaction/delivery, you pay 6.5% fee + $0.20 listing, tap into their traffic',
      'List on Creative Market: If design templates (Canva, Figma, Adobe), list on creativemarket.com, they take 30% but bring traffic you wouldn\'t get otherwise',
      'Gumroad Discovery: Optimize your Gumroad product pages for discovery (tags, keywords, descriptions), Gumroad has Discover page that can drive organic sales',
      'Set up shop on Stan Store: Stan.store is popular for creator products, mobile-optimized checkout, nice storefront, alternative to Gumroad',
      'Build Shopify store: Once you have 10+ products, consider Shopify store ($29/month), more professional than Gumroad page, better branding, own the platform',
      'Cross-promote on all platforms: Bio links on TikTok/Instagram/YouTube should all point to central hub (Linktree, Stan Store, or Shopify) with all products',
      'Test Product Hunt: Launch new products on Product Hunt, if you get featured, can drive hundreds of sales in one day, free exposure, tech/productivity products do well'
    ]
  },

  '$10k/mo-Digital Products': {
    goal: '$10k/mo',
    niche: 'Digital Products',
    capital: {
      range: '$800–$2,000',
      uses: ['Platform/tools', 'Inventory', '4-week buffer']
    },
    steps: [
      // Set 1-10 with 70 ultra-specific tasks
      '✅ Audit entire product ecosystem: Create spreadsheet analyzing last 90 days: which products make money? Which don\'t? Profit margin per product? Time to create vs revenue? Cut bottom 20%',
      '✅ Calculate required numbers: $10k/month with $50 average product = 200 sales/month = ~7 sales/day, work backwards: how much traffic do you need? If 2% convert, need 10,000 visitors/month',
      '✅ Identify bottleneck: What\'s limiting you from $10k? Not enough traffic? Low conversion? No high-ticket offer? Weak email list? Be brutally honest, focus next 30 days on fixing THE bottleneck',
      '✅ Study $10k+ sellers: Research 5-10 digital product sellers at your target income (check income reports, Twitter bios claiming revenue), analyze: their product types, pricing, marketing strategy, what\'s different from what you\'re doing?',
      '✅ Customer LTV analysis: Calculate: how much does average customer spend total? (initial purchase + upsells + future purchases), if LTV is $50, you can spend $25 acquiring customer and still profit',
      '✅ Build growth model: Map out path to $10k: Revenue sources (products $6k, course $3k, membership $1k), traffic sources (organic 60%, paid ads 30%, affiliates 10%), makes goals concrete',
      '✅ Set up financial tracking: P&L in Google Sheets: Revenue by product | Platform fees | Ad spend | Software costs | Contractor costs | Net profit, track weekly, understand your margins',

      'Create $297-997 flagship course: Your magnum opus, 10-15 modules, 40-60 lessons, comprehensive transformation, includes: video lessons, workbooks, templates, bonuses, community access, price $497-697',
      'Record professional course content: Invest in: decent mic ($100-150), ring light ($30), Riverside.fm or Descript for recording (better than Zoom), edit out filler words, add intro/outro, make it polished',
      'Build course platform: Use Teachable Pro ($119/month) or Kajabi ($149/month), professional course platforms with better student experience than basic Gumroad, worth investment at this stage',
      'Create compelling sales page: Long-form sales page: attention-grabbing headline, your story/transformation, what they\'ll learn, curriculum breakdown, testimonials, guarantee, bonuses, FAQ, multiple "Enroll Now" buttons throughout',
      'Add tiered pricing: Standard ($497 - course only), Premium ($697 - course + group coaching calls), VIP ($997 - course + 1-on-1 support), 25-30% of buyers upgrade to higher tier',
      'Implement payment plans: Offer 4-month or 6-month plans: $497 becomes $149 × 4 = $596 total (they pay $99 more but monthly feels easier), 60-70% choose payment plan',
      'Build course launch funnel: Webinar or email launch sequence → opens cart for 5-7 days → closes cart (create scarcity) → reopens quarterly, exclusivity and deadlines increase conversions dramatically',

      'Host live webinar: "How to [achieve result] in [timeframe]" - 45-60 minute training, teach valuable content (80%), pitch course (20%), webinars convert 3-10% of attendees if done well',
      'Automate webinar: Record live webinar, use EverWebinar or WebinarJam to deliver as "automated live" webinar that runs daily/weekly, scales your launch without doing live every time',
      'Build webinar funnel: Registration page → reminder emails (3-5 emails before webinar) → webinar → replay available 24-48 hours → cart closes, creates urgency',
      'Drive traffic to webinar: Facebook/Instagram ads, organic social posts, email list promotion, YouTube video promoting it, goal: 100-300 registrations per webinar (30-50% show rate)',
      'Perfect your pitch: Webinar structure: Hook (first 5 min), Teach (30 min), Pitch (15 min), Q&A (10 min), make offer irresistible: bonuses, guarantee, payment plan, "Enroll today" CTA',
      'Follow-up sequence: After webinar, send 5-7 emails over next week: replay, testimonials, case studies, scarcity (cart closing soon), final call, last chance, convert people who weren\'t ready immediately',
      'Track webinar metrics: Registration rate (% who register from ad), Show rate (% who actually attend), Conversion rate (% who buy), Revenue per registrant, optimize weakest point',

      'Launch membership community: Monthly recurring membership ($50-100/month), includes: weekly training, resource library, private community forum (Circle/Skool), monthly Q&A, member perks',
      'Use Circle or Skool: These platforms ($99-200/month) are built for communities, better than Facebook Groups, includes: courses, discussions, events, analytics, worth the investment',
      'Seed initial members: Offer first 50 members founding rate ($30/month lifetime vs $50 normal), email your list, post on social, DM engaged followers, goal: 50 founding members = $1,500/month recurring',
      'Provide weekly value: Every week deliver: 1 training/workshop, 1 resource/template, engage in community daily, host monthly live Q&A, consistent value = low churn',
      'Build member progression: Levels: Bronze (0-3 months), Silver (3-6 months), Gold (6-12 months), Platinum (12+ months), each level unlocks perks, gamification increases retention',
      'Calculate churn: Churn rate = (members who cancel) / (total members) per month, aim for under 5% churn monthly, if higher, survey why people leave, improve retention',
      'Goal: 100 members at $50/month: 100 × $50 = $5,000/month recurring revenue (MRR), recurring revenue is holy grail, more valuable than one-time sales, predictable cash flow',

      'Scale Facebook Ads to $50-100/day: Once you have profitable ads, scale budget, split test: different ad creatives, audiences (lookalikes, interests, broad), placements (feed vs stories vs reels)',
      'TikTok Ads: Similar audience to organic TikTok, create spark ads (boost your organic TikTok posts), drive to sales page, start $20/day, TikTok ads can be cheaper than Facebook',
      'YouTube Ads: Pre-roll video ads, target videos/channels in your niche, "People who watched [competitor video]", great for bottom-of-funnel (high intent), test $30/day',
      'Google Search Ads: Target keywords like "[your niche] templates", "how to [problem]", bottom-of-funnel searches (ready to buy), expensive ($2-10 per click) but converts well',
      'Pinterest Ads: If visual product (templates, planners, designs), Pinterest converts incredibly well, promoted pins to your product, $15-20/day budget, female audience skews higher',
      'Retargeting everywhere: Install pixels on all platforms, retarget website visitors with ads across Facebook, Instagram, TikTok, YouTube, people who visited are 10x more likely to buy',
      'Test ad budgets: Track ROAS (return on ad spend), if spending $100 and making $300 = 3× ROAS (profitable), scale up, if making $80 = losing money, adjust targeting/creative or pause',

      'Hire VA for customer support: As you scale, inquiries increase, hire VA ($5-8/hour) to answer: pre-sale questions, product delivery issues, refund requests, frees you to focus on growth',
      'Hire designer: Upwork/Fiverr designer ($200-500/month retainer) to create: new product designs, sales page graphics, ad creatives, social media graphics, elevates your brand quality',
      'Hire video editor: Editor ($150-300/month) for: course lesson editing, YouTube videos, ad creatives, testimonial videos, faster turnaround = more content = more sales',
      'Course creator/assistant: Someone to help create courses: recording, editing, uploading lessons, setting up in Teachable, creating worksheets, $500-1,000 per course depending on scope',
      'Set up SOPs: Write detailed Standard Operating Procedures for every task you delegate: "How to respond to refund request", "How to edit product video", allows team to work independently',
      'Weekly team meeting: Monday 10am, 30-minute standup via Zoom, each person shares: completed last week, priorities this week, blockers, keeps everyone aligned',
      'Budget for team: At $10k/month revenue, allocating $1,500-2,500/month for team (15-25% of revenue) is reasonable, increases your capacity 5-10x, worth the investment',

      'Optimize conversion rates: A/B test sales pages: headline variations, different hero images, CTA button colors, testimonial placement, even 1% conversion improvement = significant revenue increase',
      'Exit-intent popups: When visitor moves to close page, popup offers: "Wait! Get 10% off if you buy in next 10 minutes", recovers 10-15% of abandonment',
      'Email cart abandonment: If they added to cart but didn\'t complete purchase, send email 1 hour later: "Forget something? Complete your order + save 10%", Gumroad/Shopify can automate this',
      'Social proof notifications: Add "SalesNotification" plugin showing: "John from Texas just purchased [Product]", creates FOMO, increases conversions 10-20%',
      'Add countdown timers: On sales pages, countdown to when price increases or offer expires, urgency drives action, use Deadline Funnel for evergreen funnels',
      'Improve page speed: Use Google PageSpeed Insights, compress images (TinyPNG), minify code, fast-loading pages convert better, aim for 90+ score',
      'Heat mapping: Use Hotjar or Microsoft Clarity (free), see where people click, how far they scroll, what confuses them, iterate based on data',

      'Product suite: Aim for 15-20 products across tiers: $5-15 (micro), $30-50 (mid), $99-199 (premium), $500-1000 (flagship course), caters to all budgets',
      'Productize services: If you offer 1-on-1 consulting, turn common requests into products: "1-Hour Power Session" ($200), "Done-for-You Template Creation" ($500), scales beyond your time',
      'White-label/PLR: Create products others can rebrand and sell as their own, charge $200-500 for PLR license, passive income, good for established products with proven sales',
      'Build software tool: If technical or have budget, create simple SaaS tool solving problem in your niche, subscription revenue, example: "Social media scheduler", "Template generator"',
      'License to brands: Reach out to established companies in your space, license your product/templates for them to include in their offerings, $500-5,000 per license',
      'Corporate bulk licenses: Reach out to companies, offer team licenses: "Buy 50 licenses for your team at 60% discount", B2B deals = larger order values',
      'Diversification goal: No single product should be more than 40% of revenue, if one product tanks or trend changes, you\'re protected',

      'Build email list to 25,000+: At this size, email alone drives $3-5k/month, strategies: content upgrades, webinars, ads to lead magnets, giveaways, partnerships',
      'Segment aggressively: Segments for: product buyers vs non-buyers, course students, high-value customers, inactive subscribers, send targeted emails to each',
      'Email daily or near-daily: Successful digital product businesses email 5-7x/week, mix of: educational content (60%), entertainment/stories (20%), promotional (20%), consistent presence = more sales',
      'Launch to list quarterly: Big product/course launches 4x/year to email list using: teaser sequence → launch → open cart 5-7 days → close cart, scarcity events drive massive revenue spikes',
      'Monetize with affiliate deals: Promote complementary products to your list (tools, software, courses) for 30-50% commission, $500-2,000/month extra revenue without creating products',
      'Implement lead scoring: Track engagement: who opens emails? Who clicks? Who buys? Assign scores, focus sales efforts on high-score leads, improves conversion rates',
      'Automate everything: Email sequences running 24/7: welcome sequence, product-specific sequences, webinar funnels, post-purchase upsells, makes money while you sleep'
    ]
  },

  // ==================== AGENCY/FREELANCING PATHS ====================
  
  '$1k/mo-Agency/Freelancing': {
    goal: '$1k/mo',
    niche: 'Agency/Freelancing',
    capital: {
      range: '$100–$300',
      uses: ['Platform fees', 'Basic tools', 'First-week buffer']
    },
    steps: [
      // Set 1-10 with 70 ultra-specific tasks
      '✅ Pick ultra-specific service: NOT "I do video editing" - YES "I edit 60-second TikTok videos for fitness coaches selling online programs" - the more specific, the easier to find clients and charge premium',
      '✅ Research market demand: Open Twitter, search "[your service] + hiring" - example: "video editor hiring", see 20+ tweets? Demand exists. Try LinkedIn, Upwork - search same, if you see 50+ job postings = validated',
      '✅ Define target client precisely: Not "small businesses" - YES "fitness coaches with 10k-50k Instagram followers launching digital products" - specific targeting makes marketing 10x easier',
      '✅ Check competitor pricing: Fiverr.com search your service, sort by "Best Selling", check prices ($50-500 range typical), Upwork.com search hourly rates ($25-75), position yourself in middle initially',
      '✅ Find your unique angle: List 3 differentiators - examples: "24-hour turnaround" (speed), "I speak your industry language" (niche specialization), "Unlimited revisions" (peace of mind) - what makes clients choose YOU?',
      '✅ Create 3 service tiers: Basic ($200 - 2 videos, 3-day turnaround, 1 revision), Standard ($400 - 5 videos, 2-day turnaround, 2 revisions), Premium ($700 - 10 videos, 24hr turnaround, unlimited revisions)',
      '✅ Write positioning statement: Fill in: "I help [fitness coaches with 10k+ followers] achieve [100k views per video] through [engaging short-form video editing with proven hooks]" - test this in your outreach',

      'Create Upwork profile: Go to upwork.com, click "Sign up" → "Find work", complete profile: professional photo, clear headline "[Your Service] for [Niche]", write overview explaining who you help + results',
      'Optimize Upwork profile: Add portfolio (even if no client work yet, create sample projects), list relevant skills, take skill tests (Upwork has free tests), add certifications if any',
      'Set competitive rate: Start at $25-35/hour to get first few clients (build reviews), hourly is easier than fixed-price when starting, raise rates after 3-5 star reviews',
      'Sign up for Fiverr: Create seller account at fiverr.com, "I help [target client] with [service]", create 3 gigs matching your service tiers: Basic $50, Standard $100, Premium $200',
      'Fiverr gig optimization: Each gig needs: clear title "[Service] for [Niche]", 3 high-quality images/mockups, detailed description, 3 packages (Basic/Standard/Premium), delivery time, revisions included',
      'Create portfolio: Even without clients, create 3-5 sample projects in your style, example: if video editor, edit sample videos showcasing your skills, host on YouTube/Vimeo, link in profiles',
      'Join Facebook groups: Search "[your niche] + freelance", "[your niche] + hiring", join 5-10 groups, read rules (most have specific days for self-promo), introduce yourself professionally',

      'Apply to 5 jobs daily: On Upwork, filter: "Jobs you might like", sort by "Newest", apply to 5 jobs each day (takes 30-45 min), personalize each proposal (not copy-paste)',
      'Perfect your proposal: Structure - Paragraph 1: "I saw you\'re looking for [exactly what they said]", Paragraph 2: "I\'ve helped similar clients achieve [specific result]", Paragraph 3: "Here\'s my approach [3 bullets]", Paragraph 4: "Available to start immediately, let\'s chat?"',
      'Include relevant samples: When applying, attach 1-2 portfolio pieces directly relevant to the job, don\'t make them hunt through your profile, make it easy',
      'Follow up: If no response after 48 hours, send polite follow-up: "Hi [name], following up on my proposal. Happy to answer any questions. Thanks!" - 20% of jobs respond after follow-up',
      'Post in Facebook groups: When self-promo is allowed (usually specific days), post: "Hey everyone! I\'m [name], I [service] for [niche]. Recently helped [client type] achieve [result]. Available for 2 new clients this month. DM if interested!" - include sample',
      'Optimize response time: When client messages, respond within 1 hour if possible, fast response increases likelihood of getting hired (Upwork even tracks this), set phone notifications',
      'Goal: land first client: Usually takes 15-30 applications, don\'t get discouraged, first client is hardest, after that you have review/testimonial which makes #2 easier',

      'Set clear expectations: Once hired, immediately clarify: deliverables, timeline, revision process, communication method, prevents scope creep and unhappy clients',
      'Create project brief template: Google Doc with: Client Name, Project Goal, Deliverables, Timeline, Brand Guidelines, Reference Links - fill out with every client, keeps you organized',
      'Overcommunicate: Update client every 24-48 hours even if just "Working on [X], on track for [deadline]", silence makes clients nervous, regular updates build trust',
      'Deliver early: If deadline is Friday, deliver Thursday, under-promise and over-deliver, clients love this, leads to great reviews',
      'Ask for specific feedback: When delivering, ask: "What do you think? Any revisions needed?", don\'t assume it\'s perfect, proactive > reactive',
      'Handle revisions professionally: If they want changes, respond: "Absolutely! I\'ll have updated version by [specific time]", never defensive, always solution-oriented',
      'Send satisfaction survey: After project, send: "Would you rate your experience 1-10? What went well? What could I improve?", shows you care + gives testimonial material',

      'Request Upwork review: After successful delivery, message: "Thanks for working with me! If you\'re happy with the work, would you mind leaving a review on Upwork? It really helps me grow my business"',
      'Ask for testimonial: "Would you be willing to write a testimonial I can use on my website/social media? Even 2-3 sentences about your experience or the result you got"',
      'Get video testimonial: Offer small incentive: "If you can record a quick 30-second video testimonial, I\'ll give you 20% off your next project", video testimonials = gold for landing new clients',
      'Screenshot positive messages: Client sent you a thank you message or praised your work? Screenshot it, add to portfolio/website as social proof',
      'Build case studies: For your best projects, create 1-page case study: Client problem, Your solution, Result/outcome, include metrics if possible ("Increased engagement 40%"), use in pitches',
      'Add reviews everywhere: Post testimonials on: Upwork profile, Fiverr gigs, LinkedIn recommendations, personal website, Twitter bio, everywhere potential clients look',
      'Goal: 5 five-star reviews: This is your credibility foundation, after 5 great reviews, client acquisition becomes much easier',

      'Raise your rates: After 5 successful projects, increase rate 20-30%, from $25/hour to $30-35/hour, or fixed packages: Basic $300 (up from $200), clients hiring you for your results, not lowest price',
      'Implement packages: Move away from hourly toward fixed-price packages, easier for clients to budget, more profitable for you (if you\'re fast), example: "Social Media Package: $500 for 10 posts"',
      'Retainer clients: Pitch ongoing work: "Instead of one-off projects, how about $1,000/month retainer for [X deliverables]? Ensures priority scheduling + consistency for your brand", predictable income',
      'Upsell existing clients: When project is done: "By the way, I also offer [complementary service], would that be helpful for you?", example: video editor offers thumbnail design',
      'Create service add-ons: Base service $400, add-ons: +$50 for 24hr rush delivery, +$100 for additional round of revisions, +$75 for source files, a la carte pricing',
      'Test price anchoring: Offer 3 tiers but make middle tier most attractive (Goldilocks effect): Basic $300 (bare bones), Standard $500 (everything most people need + best value), Premium $800 (overkill for most)',
      'Goal $1,000/month: With packages at $250-500 each, need 2-4 clients per month, or 1-2 retainers at $500-1,000/month, achievable within 60-90 days',

      'Connect with 10 people daily: LinkedIn: search "[your niche] + [role you target]", send 10 connection requests daily with note: "Hi [name], noticed we\'re both in [niche]. Would love to connect!"',
      'Engage before pitching: Once connected, don\'t immediately pitch, instead: like their posts, comment thoughtfully, share their content, build relationship first (7-10 days)',
      'Soft pitch via DM: After engaging, send: "Hey [name], I\'ve been following your content on [topic], really enjoy it. I [your service] for people in [niche] - if you ever need help with [specific thing], I\'d love to chat. No pressure!"',
      'Cold email to potential clients: Find 20 target clients (Google, Instagram, LinkedIn), find their email (hunter.io, rocketreach.co), send personalized email: Subject: "Quick question about [their company/content]", Body: compliment their work + soft offer',
      'Use Instagram DMs: Follow target clients, engage with stories/posts for few days, then DM: "Hey! Love your content. I specialize in [service] for [niche] - would love to help you [specific outcome]"',
      'Twitter engagement: Reply to tweets from potential clients showing pain point related to your service: "I struggled with this too until I [brief solution]. Happy to share what worked if helpful!" - 20% will DM you',
      'Warm outreach to network: Message people you know: "Hey! I recently started [service business]. Do you know anyone who might need help with [service]?" - referrals convert 50%+ because trust is transferred',

      'Set up time tracking: Use Toggl (free) or Clockify, track how long each task takes, reveals: which services are profitable, where you\'re spending too much time, informs pricing',
      'Weekly financial review: Every Friday: calculate revenue earned this week, expenses (software, outsourcing), profit, hours worked, $/hour, am I on track for $1k this month?',
      'Create invoice template: Use Wave (free) or FreshBooks, professional invoices with: your logo, itemized services, payment terms (Net 15 or Net 30), payment link (PayPal, Stripe)',
      'Automate invoicing: Set up recurring invoices for retainer clients, auto-send on 1st of month, saves time, ensures you don\'t forget',
      'Track pipeline: Google Sheet with: Lead Name, Status (Contacted/Proposal Sent/Negotiating/Won/Lost), Value, Next step, gives visibility into how many deals in progress',
      'Calculate important metrics: Client Acquisition Cost (time/money spent to get client), Lifetime Value (average total client spends), if LTV > CAC you have sustainable business',
      'Goal: sustainable $1k/month: Not just hitting $1k once, but repeating it next month - mix of: retainers (predictable), project pipeline (3-4 active projects), outreach (consistent new leads)',

      'Master your craft: Dedicate 5-10 hours/week to skill improvement: watch tutorials, take courses, study top people in your field, better skills = faster work = higher rates',
      'Build repeatable system: Document your process: "Step 1: Client onboarding form, Step 2: Project brief call, Step 3: Create, Step 4: Review, Step 5: Deliver" - system = consistency = quality',
      'Get specific skill certifications: Relevant certifications add credibility: HubSpot Social Media Certification (free), Google Analytics (free), Facebook Blueprint (free), add to profile',
      'Join industry communities: Slack groups, Discord servers, Reddit communities for your skill, learn from others, stay updated on trends, network with potential collaborators',
      'Consume industry content: Follow 10-15 thought leaders in your space on Twitter/LinkedIn, read their content, implement their strategies, stay ahead',
      'Practice publicly: Share tips/before-afters on social media, "Here\'s how I [technique] for [client]", positions you as expert, attracts inbound leads',
      'Consistency over perfection: You\'ll make mistakes, learn, improve, the freelancers who succeed aren\'t the most talented, they\'re the ones who don\'t quit, show up daily for 90 days minimum'
    ]
  },

  '$5k/mo-Agency/Freelancing': {
    goal: '$5k/mo',
    niche: 'Agency/Freelancing',
    capital: {
      range: '$300–$800',
      uses: ['Platform/tools', 'Product budget', '2–3 week buffer']
    },
    steps: [
      // Set 1-10 with 70 ultra-specific tasks  
      '✅ Narrow niche even deeper: Go from "video editing for fitness coaches" to "video editing for fitness coaches selling online programs specifically using VSL (Video Sales Letter) format" - the riches are in the niches',
      '✅ Audit past clients: Who paid most? Who was easiest to work with? Who got best results? Who referred others? Pattern emerges = your ideal client, double down on that profile',
      '✅ Position as specialist: "I ONLY work with [specific niche]" vs "I work with anyone" - specialization commands 2-3x premium, you\'re not generalist competing on price, you\'re the expert',
      '✅ Research client pain deeply: Interview 5 past/potential clients, ask: What keeps you up at night about [your service area]? What have you tried? Why didn\'t it work? What would perfect solution look like?',
      '✅ Develop proprietary process: Give your process a name: "The 5-Phase Video Formula" or "Rapid Content Sprint", trademarked methodology = intellectual property = differentiation',
      '✅ Build authority content: Write 5 long-form posts (LinkedIn/Medium) about: common mistakes in [your service], how to choose [service provider], insider tips - positions you as expert',
      '✅ Set premium positioning: No more "affordable", position as premium: "High-end [service] for [niche]", premium positioning attracts better clients who pay more and respect your time',

      'Build professional website: Use Webflow ($12/month), Squarespace ($16/month), or Wix ($14/month), include: Home, Services, Portfolio, Testimonials, About, Contact',
      'Homepage headline: "I help [specific client] [achieve specific result] through [your unique process]", example: "I help SaaS founders book 50+ sales calls per month through conversion-focused website copy"',
      'Services page: Detail your packages: what\'s included, timeline, price, what makes each tier different, clear differentiation helps clients choose',
      'Portfolio page: Showcase 5-8 best projects with: client name (if allowed), project goal, your solution, result (metrics if possible), before/after when relevant, case study format',
      'Testimonials page: Video testimonials at top (most impactful), then written testimonials with: client photo, name, company, their result, link to their site if they allow',
      'About page: Your story: why you do this, your background/expertise, personal photo (not stock), awards/certifications, this is where people decide if they trust you',
      'Contact page: Simple form: Name, Email, Business/Website, "Tell me about your project" text box, response promise: "I\'ll reply within 24 hours"',

      'Create lead magnet: Free resource in exchange for email: "The [Niche] [Service] Checklist", "[Number] Mistakes Every [Target Client] Makes", "Swipe File of [Examples]"',
      'Build lead magnet landing page: Single-page site with: headline (what they\'ll get), bullet points (what\'s inside), form (just email), button "Download Now", use ConvertKit or Mailchimp',
      'Set up email sequence: 5-email sequence after someone downloads: Email 1 (immediate): Deliver resource + welcome, Email 2 (day 2): Helpful tip #1, Email 3 (day 4): Helpful tip #2, Email 4 (day 6): Case study, Email 5 (day 8): "Want help? Here\'s how I can work with you"',
      'Add popup on website: Exit-intent popup when visitor tries to leave: "Before you go! Download my free [resource]", collects emails from site visitors who weren\'t ready to hire',
      'Drive traffic to lead magnet: Share on LinkedIn, Twitter, Facebook groups, your email signature, everywhere - goal: 50+ emails per month, these are warm leads',
      'Nurture email list: Send weekly email: Monday or Thursday, mix of: helpful tips (60%), personal stories (20%), client results (10%), soft pitch for your service (10%), stay top of mind',
      'Goal: 500 email subscribers: With 500 engaged subscribers, sending weekly emails with occasional pitch = 2-5 client inquiries per month, email list = asset',

      'Create case study library: Document 5+ client projects in detail: Client background, Challenge they faced, Your solution/process, Results (specific metrics), Client quote',
      'Film video case studies: Ask happy clients: "Can we hop on 10-min Zoom call? I\'d love you to share your experience working with me", record call, edit into 2-3 min testimonial video',
      'Publish case studies on website: Dedicated "Case Studies" page or section, each case study is its own page, SEO benefit + great for sharing in proposals',
      'Use in proposals: When pitching similar clients: "Here\'s how I helped [similar company] achieve [relevant result]", link to case study, proof beats claims every time',
      'Share on social media: LinkedIn post format: "Client was struggling with [problem]. Here\'s how we solved it 🧵 [thread]", tell story, include result, link to case study in comments',
      'Create one-pager PDF: For each case study, design 1-page PDF version in Canva, attach to proposals, easier to digest than full web page',
      'Collect metrics aggressively: Track results for every client: views, engagement, sales, ROI, traffic, conversions - the more numbers you have, the easier to sell to next client',

      'Raise rates significantly: You\'re no longer beginner, minimum project should be $500-1,000, retainers $2,000-5,000/month, communicate value not hours',
      'Price based on value not time: If your work generates $10k for client, charging $2k is easy yes, focus conversations on ROI not deliverables',
      'Create signature package: "$3,000 [Niche] [Service] Package" with everything included: discovery, creation, revisions, delivery, bonus add-ons, one flat rate',
      'Implement project minimums: "Minimum project value: $1,500" - filters out tire-kickers, attracts serious clients, protects your time',
      'Offer VIP days: "Strategy + Execution Intensive: $3,000 for one day" - you and client work together intensively for 6-8 hours knocking out major project, premium pricing for focused work',
      'Use price anchoring: Present 3 options: "Lite" $2,000, "Standard" $4,000 (mark as most popular), "Premium" $7,000 - most people choose middle',
      'Test different pricing: Increase price every 5 clients, test resistance point, you\'d be surprised how high you can go before people say no, charging more often increases perceived quality',

      'Cold outreach at scale: Send 10-20 personalized messages per day to ideal clients on LinkedIn/Instagram/email, not spam, genuinely researched personal messages',
      'Perfect cold email formula: Subject: "[Their company] + [your service]", Body: Line 1: Specific compliment about their work, Line 2: Observed problem/opportunity, Line 3: How you can help with specific example, Line 4: Soft CTA "Interested in chatting?"',
      'LinkedIn connection -> pitch sequence: Day 1: Send connection request with personal note, Day 3: Send voice message thanking for connecting, Day 7: Comment on their post, Day 10: DM with soft pitch',
      'Instagram DM strategy: Follow, engage with 5 stories/posts over 3-5 days, DM something relevant about their recent post, build rapport, after 2-3 DM exchanges mention what you do',
      'Find warm intros: Search LinkedIn for "Who do I know that knows [target company]?", ask for introduction: "Would you be comfortable introducing me to [person]? I\'d love to chat about [relevant project]"',
      'Create DM templates: Save 5-7 templates for different scenarios but customize 30-40% for each person (change specific details), templates save time without being robotic',
      'Track outreach: Spreadsheet with: Name, Company, Date contacted, Method, Response?, Follow-up date, Status - systematize outreach, nothing falls through cracks',

      'Hire specialist contractor: Identify tasks you\'re slow at or don\'t enjoy, hire someone better: video editor hires motion graphics specialist, writer hires researcher, costs $15-30/hour but frees your time for sales/strategy',
      'Create your first SOP: Standard Operating Procedure - document exact process for your most repeated task, example: "Client Onboarding SOP" with every step detailed, allows you to delegate',
      'Use project management tool: Asana, Trello, or ClickUp to manage client projects, no more messy email chains, professional, organized, clients can see progress',
      'Automate repetitive tasks: Use Zapier to connect tools: when client books call → automatically send pre-call questionnaire, when invoice paid → send welcome email, save 5-10 hours/week',
      'Implement contract templates: Legal zoom or Rocket Lawyer ($15-50), solid contract template protecting you: scope of work, payment terms, revision limits, intellectual property, timeline',
      'Use proposal software: PandaDoc or Proposify, professional proposals in 30 minutes vs 3 hours, templates, e-signature, tracking (see when client opens proposal)',
      'Time blocking: Schedule your week: Mondays (admin/planning), Tuesdays-Thursdays (client work), Fridays (sales/outreach), protects time, prevents context switching, 2x productivity',

      'Retainer proposal template: "Would you be interested in [monthly deliverables] for $X/month? Advantages: priority scheduling, consistent results, better pricing than one-off projects"',
      'Identify retainer candidates: Clients who come back multiple times, have ongoing needs, value consistency - perfect retainer candidates, pitch after 2-3 successful projects',
      'Structure retainer packages: Bronze $2k/month (X deliverables), Silver $4k/month (2X deliverables + priority), Gold $6k/month (3X + strategy calls + priority), different budgets different tiers',
      'Annual retainer discount: "Pay annually upfront = 2 months free" ($4k/month × 12 = $48k, annual = $40k), incentivizes long-term commitment, improves cash flow',
      'Retainer benefits: Communicate benefits: "You get priority scheduling, faster turnaround, dedicated support, strategic input" - retainer clients are VIPs',
      'Renewal process: 30 days before retainer ends, send renewal proposal: recap wins from past 6-12 months, updated pricing (usually 10-20% increase), new deliverables, make it easy to say yes',
      'Goal: 2-3 retainers at $2-4k each: 3 retainers × $3k average = $9k/month, add 2-3 project clients = $2k, boom $11k month, retainer revenue = business stability',

      'Weekly content on LinkedIn: Post 3-5x per week: Monday (tip), Wednesday (case study), Friday (personal story/behind-the-scenes), consistent presence = inbound leads',
      'LinkedIn article series: Write long-form articles (1,000+ words) on: "Complete Guide to [Topic]", "How We Helped [Client] Achieve [Result]", "[Number] Lessons from [Experience]", SEO benefit + establishes expertise',
      'Engage in LinkedIn comments: Spend 20 min daily commenting on posts from: potential clients, industry leaders, complementary service providers, thoughtful comments = visibility',
      'Twitter/X thought leadership: Daily tweets sharing: tips, wins, lessons, behind-the-scenes, controversial opinions (respectful), build audience, positions you as go-to expert',
      'Guest posts on industry blogs: Reach out to blogs your clients read: "Would you be interested in guest post on [relevant topic]? I\'ve helped [credibility]", include author bio with link to your site',
      'Podcast interviews: Pitch podcasts in your niche: "I\'d love to share story of how I [notable achievement/unique angle]", podcasts need guests, easier than you think, massive credibility boost',
      'Public speaking: Apply to speak at virtual summits, webinars, conferences in your niche, speak on: your methodology, case studies, industry trends, stage time = authority',

      'Hire full-time VA: Philippines VA at $800-1,200/month full-time, delegate: email management, scheduling, client communication, invoicing, research, frees 20+ hours/week',
      'Hire account manager: As you scale, hire someone to manage client relationships: $2,500-4,000/month, they handle: check-ins, project updates, upselling, you focus on delivery + sales',
      'Onboard contractors: Build roster of 3-5 contractors you can tap when needed: designer, developer, copywriter, strategist, allows you to take on bigger projects',
      'Weekly team meeting: Monday morning standup (even if team is just you + VA), review: week\'s priorities, client deadlines, blockers, celebrations',
      'Create team systems: Shared Google Drive, Slack for communication, Asana for projects, Loom for training videos, systems allow smooth delegation',
      'Profit-sharing incentive: If contractor consistently delivers great work, offer small profit share (5-10% of project) when you land big client, aligns incentives',
      'Goal $5,000/month: At $5k, you can afford $1,000-1,500/month in team costs, team 2-3x your capacity, path to $10k+/month, can\'t scale alone'
    ]
  },

  '$10k/mo-Agency/Freelancing': {
    goal: '$10k/mo',
    niche: 'Agency/Freelancing',
    capital: {
      range: '$800–$2,000',
      uses: ['Platform/tools', 'Inventory', '4-week buffer']
    },
    steps: [
      // Set 1-10 with 70 ultra-specific tasks
      '✅ Build repeatable packages: Create 2 productized services - no more custom quotes - Example: "Starter Package $2,000/month (4 deliverables)" and "Growth Package $5,000/month (12 deliverables + strategy call)" - same scope every time',
      '✅ Document everything: Create operations manual with: service delivery process, communication templates, SOPs for every task, quality checklists - allows you to scale beyond yourself',
      '✅ Specialize in high-value niche: Not just "fitness" but "supplement brands doing $500k-5M annually" - higher revenue clients = bigger budgets = $5k-10k/month retainers',
      '✅ Build strategic partnerships: Partner with complementary agencies: you do [X], they do [Y], cross-refer clients, co-deliver projects, expand service offering without hiring',
      '✅ Implement value-based pricing: Stop charging by hour, charge by value delivered, if your work generates $100k for client, $10k fee is easy yes, have value conversation first',
      '✅ Create content moat: Publish consistently for 90 days: 3 LinkedIn posts/week + 1 long article/week, establishes you as category authority, inbound leads increase 5-10x',
      '✅ Set $10k revenue goal: Break it down - Example: 2 retainers at $4k each ($8k) + 2 project clients at $1k each ($2k) = $10k, need specific numbers to hit target',

      'Hire full-time team members: Move beyond freelancers to W2 employees or full-time contractors, roles: project manager ($3-4k/month), specialist (designer/developer/etc at $2.5-4k/month)',
      'Create team structure: You = CEO (sales, strategy, vision), Project Manager (client communication, delivery), Specialists (execution), clear roles prevent overlap',
      'Weekly 1-on-1s: 30-minute 1-on-1 with each team member, discuss: wins, challenges, professional development, build relationship, retain talent',
      'Implement performance metrics: Track for each team member: projects delivered on time, client satisfaction scores, revenue generated, quality ratings, data-driven management',
      'Offer equity/profit-sharing: Key team members get 2-5% profit share, aligns incentives, reduces turnover, builds commitment to company success',
      'Build company culture: Define values, have team rituals (Friday wins call, monthly team lunch), celebrate successes, remote-first culture requires intentional connection',
      'Goal: team of 3-5: You + 2-4 team members allows you to handle $15-25k/month in client work, your time shifts to CEO activities (sales, strategy, partnerships)',

      'Shift to relationship sales: At this level, clients want to know/trust you before hiring, invest in relationships: calls, lunches, events, long-term thinking',
      'Create high-ticket offer: "$15,000 quarterly intensive" or "$50,000 annual partnership", package includes: strategy, execution, ongoing optimization, meetings - comprehensive solution',
      'Use case studies in sales: Every sales conversation: "Here\'s how we helped [similar company] go from [X] to [Y]", specific examples more powerful than generic promises',
      'Implement sales process: Discovery call (qualify + understand needs) → Custom proposal (tailored solution) → Strategy call (present proposal + answer questions) → Close, professional process = higher close rate',
      'Track sales pipeline: CRM like HubSpot (free) or Pipedrive ($15/month), track: leads, stage (discovery/proposal/negotiation/closed), expected close date, value, visibility into sales health',
      'Set revenue targets: Monthly: $10k minimum, quarterly: $30k+, annual: $120k+, having targets focuses your sales activities, "How many calls needed to hit target?"',
      'Master sales objections: Common objections: "Too expensive" (reframe as ROI), "Need to think about it" (what concerns specifically?), "Can you start next month?" (offer discount for starting now)',

      'Build strategic alliances: Identify agencies offering complementary services, propose: "Let\'s refer clients to each other, I get 10-15% referral fee for sending clients your way, you do same" - passive income stream',
      'Join mastermind group: High-level peer group (6-8 agency owners at similar stage), monthly calls, annual retreat, learn from each other, accountability, often leads to partnerships',
      'Attend industry events: Conferences where your clients are, not to pitch but to build relationships, collect 20 business cards per event, follow up within 48 hours',
      'Create alliance program: Formalize partnerships: "Agency Partner Program - refer clients, get 20% of first year revenue", recruit 10 partners = powerful referral network',
      'Co-marketing initiatives: Partner with complementary business for webinar, guide, course, each promote to their audience, tap into their audience, they tap into yours',
      'White-label partnerships: Other agencies need your specialty but don\'t have in-house capability, white-label your service (they rebrand as theirs, you do work), B2B channel',
      'Build network systematically: Connect with 5 new people per week (LinkedIn, events, introductions), nurture relationships, 250 quality connections = opportunity magnets',

      'Scale through systems: Every repeated task gets SOP: client onboarding, project kickoff, delivery, offboarding, feedback, allows team to deliver without your direct involvement',
      'Implement quality control: Create quality checklist for every deliverable, peer review process (team member reviews another\'s work before client sees), maintains high standards',
      'Client portal: Professional portal (Notion, ClickUp, or custom) where clients can: see project status, submit requests, view deliverables, message team, improves experience',
      'Automate reporting: Monthly client reports auto-generated from tools (analytics, project management), takes 10 minutes vs 2 hours, professional, consistent',
      'Create service tiers: Tier 1 ($2k/month - standardized package), Tier 2 ($5k/month - custom + strategic), Tier 3 ($10k+/month - white glove), different service levels = different clients',
      'Productize services: Turn custom work into repeatable products: "Website in a Week $5k", "Content Sprint $3k", "Brand Refresh $8k", easier to sell, easier to deliver',
      'Recurring revenue focus: Goal: 70%+ of revenue from retainers/recurring, 30% from projects, retainers = predictability, easier to plan, scale, hire',

      'Develop signature IP: Create proprietary framework/methodology, trademark it, publish articles/talks about it, IP = differentiation = premium pricing',
      'Write industry report: Original research on your niche: survey clients, compile data, publish "State of [Industry] 2024", PR magnet, positions you as authority',
      'Speak at major conferences: Apply to speak at top conferences in your space, TEDx talks, industry events, speaking = authority = inbound $10k+ clients',
      'Media appearances: Pitch yourself to podcasts, blogs, magazines as expert source, use HARO (Help A Reporter Out), get quoted in Forbes, Entrepreneur, Inc, publicity builds brand',
      'Publish book: Self-publish on Amazon or traditional publisher, book = ultimate business card, doesn\'t need to be bestseller, "Author of [Book]" opens doors',
      'Build personal brand: You = face of company, active on LinkedIn/Twitter, share insights/behind-the-scenes, personal brand attracts clients to agency',
      'Content strategy: 1 long-form article per week (LinkedIn/Medium), 5 short posts per week (Twitter/LinkedIn), consistent publishing for 12 months = massive authority',

      'Implement OKRs: Objectives and Key Results - quarterly goals for company and each team member, align everyone toward same targets, review monthly',
      'Weekly metrics review: Review every Monday: revenue this month, pipeline value, projects delivered, new leads, client satisfaction, cash runway, data-driven decisions',
      'Financial management: Hire bookkeeper ($200-400/month), understand: profit margin (aim for 40-50%), cash flow, runway (months you can operate without new revenue)',
      'Client retention: Measure churn (% clients who leave), aim for <10% annual churn, exit interviews when clients leave, improve based on feedback',
      'Team utilization: Track billable hours vs available hours, aim for 60-75% utilization (rest is admin/sales/training), under 50% = not enough work, over 80% = burnout risk',
      'Lead sources: Track where clients come from: referrals, inbound, outbound, partnerships, double down on what works, cut what doesn\'t',
      'Scenario planning: Model different scenarios: "If we lose our biggest client, what happens?", "If we double revenue, can we hire fast enough?", plan for contingencies',

      'Build acquisition machine: Consistent lead generation through: content (3-5 inbound leads/month), outreach (10-20 leads/month), partnerships (5-10 leads/month), total 20-30 leads/month',
      'Host virtual event: Monthly webinar or workshop on topic your clients care about, 50-100 attendees, 5-10% convert to sales calls, builds list + authority',
      'Create lead magnets: High-value free resources: templates, calculators, audits, guides, gated behind email, builds list of warm leads',
      'LinkedIn Ads: Target decision-makers at ideal client companies with educational content, not direct pitch, nurture them, $20-30/day can generate 3-5 qualified leads/week',
      'Referral program: "Refer a client, get $500 when they sign" (or 10% of first year revenue), incentivize existing clients/network to refer',
      'Cold outreach refined: Highly personalized outreach to 10 dream clients per week, research-heavy, video messages, multi-touch (email + LinkedIn + voice note), quality over quantity',
      'Sales team: At $15k+/month, consider hiring junior salesperson (base + commission), you close bigger deals, they close smaller, 2x capacity',

      'Expand service offering: Add complementary services: if you do design, add development, if you do ads, add creative production, increases deal size + stickiness',
      'Industry vertical expansion: If you nail one niche, expand to adjacent: fitness coaches → nutritionists → physical therapists, leverage learning curve',
      'Geographic expansion: If serving US, expand to UK/Canada/Australia, English-speaking markets with similar needs, 2x addressable market',
      'Create sub-brand: Launch specialized division: "Parent Company" + "Niche Specialist Brand", sub-brand can charge premium + expand reach',
      'Acquire small competitors: When you have cash flow, buy smaller agencies (usually 2-3x annual profit), instant team + clients + revenue',
      'Licensing model: License your methodology to other agencies for $500-2,000/month each, 20 licensees = $10-40k/month passive revenue',
      'Build holding company: Multiple agencies under one holding company, each focused on different niche, diversification + scalability',

      'Hire COO/Integrator: At $150k+/year revenue, hire someone to run operations, you focus on vision/sales/partnerships, EOS (Entrepreneurial Operating System) model',
      'Systematize client delivery: Client journey mapped out minute-by-minute, templates for everything, team can deliver without you, frees you for CEO work',
      'Implement profit-first: Pay yourself first (30% of revenue), profit second (10%), then expenses (60%), Profit First by Mike Michalowicz, ensures profitability',
      'Build advisory board: 3-5 successful agency owners/mentors, meet quarterly, get advice on big decisions, outside perspective invaluable',
      'Invest in growth: Reinvest 20-30% of profit into: marketing, team, tools, professional development, calculated growth investments compound',
      'Plan exit strategy: Even if not selling soon, build business that could sell (systems, team, brand, recurring revenue), increases value + optionality',
      'Celebrate $10k month: You did it! Recognize team, treat yourself, reflect on journey, set new goal ($15k? $20k?), momentum continues'
    ]
  }
};

export const GOALS: Goal[] = ['$1k/mo', '$5k/mo', '$10k/mo'];
export const NICHES: Niche[] = ['Content Creation', 'Digital Products', 'Agency/Freelancing', 'Dropshipping'];

export function getPathKey(goal: Goal, niche: Niche): string {
  return `${goal}-${niche}`;
}

export function getPathData(goal: Goal, niche: Niche): PathData | undefined {
  return PATH_DATA[getPathKey(goal, niche)];
}