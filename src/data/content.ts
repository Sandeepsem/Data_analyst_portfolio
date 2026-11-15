// All portfolio text and project data live here.
export const profile = {
  name: 'Sandeep Semwal',
  role: 'Data Analyst & Power BI Developer',
  chips: [
    'Power BI & DAX',
    'SQL / MySQL',
    'Advanced Excel',
    'Python (Pandas, NumPy)',
    'Power Query & ETL',
    'AI-Assisted Analytics',
  ],
  tagline: 'I transform raw, messy datasets into executive Power BI dashboards, automated ETL pipelines, and actionable business insights.',
  welcome:
    'Hello and welcome! I am Sandeep Semwal, a Data Analyst and Prototype Developer based in New Delhi, India. In my Data Analyst portfolio, you can explore interactive Power BI dashboards, MySQL and SQL data pipelines, and advanced Excel business intelligence reports designed to turn numbers into decisions. In my Vibe Coder portfolio, discover my work with Agentic AI, autonomous n8n workflows, and full-stack web and mobile applications deployed with Docker and cloud databases. Please select a portfolio below to explore my live projects, verified certificates, and credentials. Thank you for visiting!',
  location: 'New Delhi, India',
  email: 'semwalsandeep00@gmail.com',
  portfolioUrl: 'https://sandeepsem.github.io/portfolio-/',
  github: 'https://github.com/Sandeepsem',
  linkedin: 'https://www.linkedin.com/in/sandeep-semwal-343a0019a/',
  summary:
    'Results-driven Data Analyst and Prototype Developer with hands-on ownership of Power BI dashboard architecture, DAX data modeling, SQL/MySQL extraction, Power Query ETL, and Python (NumPy, Pandas) analysis. Proven track record of improving forecasting accuracy by 15%, boosting sales performance by ~10%, and cutting MIS report turnaround by 20% — while pairing traditional BI rigor with AI-assisted workflows (ChatGPT, Gemini, Claude, Google AI Studio) to ship live prototypes and automated analytics solutions.',
  languages: ['English (Professional Proficiency)', 'Hindi (Native)'],
}

export const impact = [
  { value: 15, suffix: '%', label: 'Better forecasting accuracy', detail: 'School admission & sales trend models' },
  { value: 10, suffix: '%', label: 'Increase in sales performance', detail: 'Driven by Power BI & MIS reporting' },
  { value: 20, suffix: '%', label: 'Faster report generation', detail: 'Automated Power Query & SQL ETL' },
  { value: 6, suffix: '', label: 'Analytics projects built', detail: '4 Power BI suites & 2 Python systems' },
]

export const skillGroups = [
  {
    title: 'Business Intelligence & Visualization',
    items: [
      { name: 'Power BI', level: 90 },
      { name: 'DAX', level: 82 },
      { name: 'Power Query', level: 88 },
      { name: 'Dashboard Design & KPI Reporting', level: 90 },
      { name: 'Looker & Tableau', level: 70 },
    ],
  },
  {
    title: 'Data Analysis & Reporting',
    items: [
      { name: 'Advanced Excel (Pivot, VLOOKUP, Macros)', level: 92 },
      { name: 'MIS Reporting', level: 88 },
      { name: 'Trend Analysis & Forecasting', level: 82 },
      { name: 'Google Sheets', level: 85 },
    ],
  },
  {
    title: 'Programming & Databases',
    items: [
      { name: 'SQL / MySQL', level: 85 },
      { name: 'Python (Pandas, NumPy)', level: 78 },
      { name: 'ETL & Data Transformation', level: 85 },
      { name: 'Data Cleaning & Wrangling', level: 90 },
    ],
  },
]

export const aiTools = [
  'React & TypeScript',
  'Vite & Tailwind CSS',
  'Android (Google Play)',
  'MySQL',
  'Firebase (Firestore & Auth)',
  'Supabase (PostgreSQL)',
  'Docker & Containerization',
  'GitHub CI/CD → Hostinger',
  'Hostinger Cloud & VPS',
  'Google Gemini API',
  'ChatGPT & Claude AI',
  'Google AI Studio',
  'Antigravity AI',
  'Perplexity & Grok',
]

export const softSkills = [
  'Cross-functional Collaboration',
  'Problem Solving',
  'Stakeholder Communication',
  'Data-Driven Decision Making',
  'Attention to Detail',
]

export type ExperienceItem = {
  title: string
  company: string
  location: string
  period: string
  points: string[]
  tools: string[]
}

export const experience: ExperienceItem[] = [
  {
    title: 'Prototype Developer',
    company: 'SvisionTek Consultancy Services Pvt. Ltd.',
    location: 'New Delhi, India',
    period: 'Oct 2025 – Present',
    points: [
      'Develop functional prototypes and MVPs for web and app-based solutions using modern frameworks and AI-accelerated development.',
      'Collaborate with product and design teams to validate feature ideas and refine user experience flows.',
      'Integrate REST APIs, relational databases, and automation tools directly within interactive prototypes.',
      'Perform data analysis on user behavior and system telemetry to guide product and roadmap decisions.',
      'Create executive dashboards and operational reports using Power BI and Advanced Excel for data-driven insights.',
    ],
    tools: ['Power BI', 'Advanced Excel', 'MySQL', 'SQL', 'Power Query', 'DAX', 'PowerPoint', 'AI Tools'],
  },
  {
    title: 'Data Analyst Intern',
    company: 'SvisionTek Consultancy Services Pvt. Ltd.',
    location: 'New Delhi, India',
    period: 'Jun 2025 – Sep 2025',
    points: [
      'Performed end-to-end data analysis on school admission trends and sales datasets, identifying business patterns that improved forecasting accuracy by 15%.',
      'Developed interactive Power BI dashboards and MIS reports to support strategic decision-making, driving a ~10% increase in sales performance.',
      'Designed and implemented ETL workflows to extract, clean, and transform raw data from Excel and MySQL databases.',
      'Collaborated with cross-functional teams to streamline data collection processes, reducing report generation time by 20%.',
      'Applied custom DAX measures and Power Query transformations to build dynamic, drill-down dashboards for institutional reporting.',
    ],
    tools: ['Power BI', 'Advanced Excel', 'MySQL', 'SQL', 'Power Query', 'DAX', 'PowerPoint'],
  },
]

export type ProjectImage = { src: string; caption: string }
export type ProjectLink = { label: string; url: string; primary?: boolean }

export type Project = {
  title: string
  subtitle?: string
  category: 'Power BI & BI' | 'Python & Analytics' | 'AI & Web App'
  duration: string
  description: string
  metrics?: string[]
  highlights?: string[]
  tools: string[]
  image: string
  images?: ProjectImage[]
  live?: string
  github?: string
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    title: 'Sales Performance Analytics Report',
    subtitle: 'Multi-Page Executive BI & Revenue Forecasting Suite',
    category: 'Power BI & BI',
    duration: '1 Month',
    description:
      'End-to-end multi-page Power BI and Advanced Excel sales intelligence report tracking 394.27K in revenue, 332.50K cost, 61.77K profit (16% margin), and 4,280 units sold across regions, payment modes, and customer segments.',
    metrics: ['394.27K Total Sales', '61.77K Profit (16% Margin)', '+15% Data Accuracy', '-20% Report Time'],
    highlights: [
      'Engineered DAX calculated columns and measures (Total Cost, Net Selling Price after Discount %, Profit, Margin %, and YoY/QoQ/MoM Growth) across 3 interactive views.',
      'Identified top-selling product P0030 (3.37K), Direct Sales share (51.86%), Online vs. Cash split (50.28% / 49.72%), and high-margin segments.',
      'Merged master/input Excel tables in Power Query, normalized Date hierarchies, and removed duplicates/nulls to boost data accuracy by 15% and cut report prep time by 20%.',
    ],
    tools: ['Power BI', 'Excel', 'DAX', 'Power Query', 'Data Visualization'],
    image: './projects/sales-performance-1.webp',
    images: [
      { src: './projects/sales-performance-1.webp', caption: 'Page 1 — Executive KPIs, Product & Segment Breakdown (394.27K Sales, 61.77K Profit)' },
      { src: './projects/sales-performance-2.webp', caption: 'Page 2 — YoY/MoM/QoQ Growth Trends, Previous Year Comparison & Regional Pie' },
      { src: './projects/sales-performance-3.webp', caption: 'Page 3 — Bing Geospatial Sales Map by City across Online & Quarterly Slicers' },
    ],
    github: 'https://github.com/Sandeepsem/powerbi-sql-sales-report-',
  },
  {
    title: 'School Admission Analytics Dashboard',
    subtitle: '3-Module Institutional Intake & Applicant Tracking System',
    category: 'Power BI & BI',
    duration: '2 Months',
    description:
      'Comprehensive Power BI, Excel, and SQL/MySQL solution monitoring 4,338+ student applications across program targets (PRO001–PRO010), class modes (Online, Part-Time, Full-Time), document verification workflows, and entrance exam rankings.',
    metrics: ['4,338 Applications Tracked', '3 Integrated Modules', '5-Stage Pipeline', '+15% Forecast Accuracy'],
    highlights: [
      'Unified Applicants Dashboard, Documents Status Verification (10th/12th/Graduation & Aadhaar), and Admin Analytics into a single drill-through BI workspace.',
      'Automated Excel and MySQL ETL pipelines to track Application vs. Target volume, Online/Offline mode split, and Accepted vs. Pending status across programs.',
      'Added student ID slicers (STU001–STU011), subject-wise score breakdowns, eligibility indicators, and top-5 merit leaderboards.',
    ],
    tools: ['Power BI', 'DAX', 'Power Query', 'Excel', 'MySQL', 'SQL', 'Data Visualization'],
    image: './projects/school-admission-overview.webp',
    images: [
      { src: './projects/school-admission-overview.webp', caption: '3-Module Architecture — Applicants Dashboard, Documents Status & Admin Analytics (4,338 Applications)' },
      { src: './projects/school-admission-applicant.webp', caption: 'Applicants Dashboard — 5-Stage Admission Pipeline, Subject Scores, Rank & Top-5 Leaderboard' },
      { src: './projects/school-admission-admin.webp', caption: 'Admin Dashboard — 4,338 Applications vs. Target by Program ID, Class Mode & Acceptance Status' },
    ],
    github: 'https://github.com/Sandeepsem/School-admission-PowerBi-excel-sql',
  },
  {
    title: 'India General Election 2024 Analytics Dashboard',
    subtitle: '6-View National Parliamentary Constituency & Voter Turnout BI',
    category: 'Power BI & BI',
    duration: 'Power BI',
    description:
      'Multi-level Business Intelligence system analyzing the 2024 Lok Sabha election across 543 constituencies, 8,099 candidates, and 42 political parties — covering National Alliance totals, State Demographics, Constituency Margins, and Exportable Grid Views.',
    metrics: ['543 Constituencies', '8,099 Candidates', '42 Political Parties', '6 Interactive Views'],
    highlights: [
      'Built custom DAX alliance mapping (NDA 292 seats / 54% vs. I.N.D.I.A. 234 seats / 43%) using LOOKUPVALUE across partywise and constituencywise tables.',
      'Engineered advanced DAX VAR/MAXX/FILTER logic to rank winning candidates, runner-ups, and exact victory margins dynamically per constituency.',
      'Designed 6 interactive pages with Bing Filled/Bubble maps, drill-through (State → Constituency), clear-filter buttons, and exportable Grid View.',
    ],
    tools: ['Power BI', 'DAX', 'Power Query', 'Data Visualization'],
    image: './projects/election-2024-dashboard.webp',
    images: [
      { src: './projects/election-2024-dashboard.webp', caption: 'Complete 6-Screen Showcase — National Overview, State Maps, Constituency Drill-Down & Grid' },
      { src: './projects/election-2024-1.webp', caption: 'Page 1 — Navigation Hub (42 Parties, 543 Constituencies, 8,099 Candidates, 3 Alliances)' },
      { src: './projects/election-2024-2.webp', caption: 'Page 2 — Overview Analysis (NDA 292 vs. I.N.D.I.A. 234 Seats & Party-Wise Seat Matrix)' },
      { src: './projects/election-2024-3.webp', caption: 'Page 3 — State Demographic Analysis (Filled Map, Winning Candidate Bubble Map & Alliance Split)' },
      { src: './projects/election-2024-4.webp', caption: 'Page 4 — Political Landscape by State (Interactive State Slicer, Seat Table & Donut Share)' },
      { src: './projects/election-2024-5.webp', caption: 'Page 5 — Constituency Analysis (EVM vs. Postal Votes, Winner, Runner-Up & Vote Share %)' },
      { src: './projects/election-2024-6.webp', caption: 'Page 6 — Exportable Details Grid (Constituency Winner, Runner-Up, EVM/Postal & Margin Bars)' },
    ],
    github: 'https://github.com/Sandeepsem/Election_2024_powerbi',
  },
  {
    title: 'Swiggy Food Delivery Sales Dashboard',
    subtitle: '2-Page E-Commerce Revenue, Forecast & City Demand BI',
    category: 'Power BI & BI',
    duration: 'Power BI',
    description:
      'Two-page Swiggy Power BI suite analyzing 6.27M in sales, 23K total orders, 6.83M previous month benchmark, and 269.11 average order value across cities, states, Veg/Non-Veg preferences, dish categories, and 4–5★ customer ratings.',
    metrics: ['6.27M Total Sales', '23K Total Orders', '269.11 Avg Order Value', 'Top 5 States & Cities'],
    highlights: [
      'Built Page 1 KPIs (Total Sales, Orders, AOV), Quarterly Sales vs. Forecast comparisons, and Top 5 State/City rankings led by Karnataka / Bengaluru (0.87M).',
      'Added Page 2 visual intelligence featuring Veg vs. Non-Veg donut breakdown, 3-Month Sales by City treemap, Bing geospatial map, and rating histogram (peaking at 96K).',
      'Configured instant Veg/Non-Veg and monthly tile slicers alongside category splits (Recommended, Main Course, Desserts, Burgers, Beverages).',
    ],
    tools: ['Power BI', 'DAX', 'Power Query', 'Excel', 'Data Visualization'],
    image: './projects/swiggy-sales-dashboard.webp',
    images: [
      { src: './projects/swiggy-sales-dashboard.webp', caption: 'Page 1 — 6.27M Total Sales, 23K Orders, 269.11 AOV, Forecast & Top 5 States/Cities' },
      { src: './projects/swiggy-sales-2.webp', caption: 'Page 2 — Veg vs. Non-Veg Split, City Sales Treemap, Bing Map & 4–5★ Customer Rating Histogram' },
    ],
    github: 'https://github.com/Sandeepsem/Food-Delivery-Sales-Dashboar-PowerBi-excel-',
  },
  {
    title: 'DTC Bus Management & Analytics System',
    subtitle: 'Python + MySQL Fleet Operations & Matplotlib Chart Suite',
    category: 'Python & Analytics',
    duration: 'Python + MySQL',
    description:
      'Relational 5-table MySQL and Python transport management platform featuring commuter route/stop search, staff and feedback tracking, an automated daily earnings calculator, and an integrated 6-chart Admin Analytics Menu.',
    metrics: ['5-Table MySQL Schema', 'Auto Daily Revenue Engine', '6 Analytics Charts', 'User & Admin Portals'],
    highlights: [
      'Designed normalized MySQL tables (bus, staff, earnings_summary, customer_feedback, admin) connected via mysql-connector-python, Pandas, Matplotlib, and Tabulate.',
      'Engineered an Automatic Earnings Summary computing daily route revenue from Fare × Rounds/Day × Avg Passengers (e.g., Bus 114 at ₹12,000/day).',
      'Built a 6-option Admin Chart Menu visualizing Bus Fare Comparison, Travel Time, Stops vs. Fare, Daily Earnings, Customer Satisfaction, and Rounds.',
    ],
    tools: ['Python', 'MySQL', 'SQL', 'Data Visualization', 'ETL'],
    image: './projects/dtc-bus-6.webp',
    images: [
      { src: './projects/dtc-bus-6.webp', caption: 'Admin Panel — Automatic Daily Earnings Summary Table (Fare × Rounds × Avg Passengers)' },
      { src: './projects/dtc-bus-7.webp', caption: 'Admin Analytics Chart Menu — 6 Matplotlib Visual Comparisons' },
      { src: './projects/dtc-bus-3.webp', caption: 'Fleet Directory — Tabulated Bus No, Route, Stops, Travel Time (mins) & Fare (₹)' },
      { src: './projects/dtc-bus-4.webp', caption: 'Commuter Search — Instant Lookup by Bus Number (Bus 114: Saket to Noida Sec 62)' },
      { src: './projects/dtc-bus-2.webp', caption: 'User Portal — Search Buses by Number, Between Two Stops, or Passing Through Stop' },
      { src: './projects/dtc-bus-1.webp', caption: 'DTC System Entry — Role-Based Main Menu (User Panel & Admin Login)' },
    ],
    github: 'https://github.com/Sandeepsem/Dtc-bus-management-',
  },
  {
    title: 'ATM Banking & Transaction Management System',
    subtitle: 'Python + MySQL Banking Engine with Date Search & CSV Export',
    category: 'Python & Analytics',
    duration: 'Python + MySQL',
    description:
      'Console-based banking & transaction analytics system built with Python and MySQL (ac_details & transition_table), supporting PIN authentication, daily withdrawal limits, last-5 mini statements, date-range queries, and CSV ledger exports.',
    metrics: ['11 Banking Operations', 'MySQL Ledger Schema', 'Date-Range Search', 'One-Click CSV Export'],
    highlights: [
      'Structured relational MySQL tables (ac_details and ENUM-typed transition_table) for deposits, withdrawals, transfers, and interest crediting.',
      'Implemented analytics-focused audit features including Mini Statements (last 5 transactions), Search Transactions by Date Range, and CSV file export.',
      'Separated customer operations from an Admin Panel that monitors all customer accounts and full system transaction history.',
    ],
    tools: ['Python', 'MySQL', 'SQL', 'Excel', 'Data Visualization'],
    image: './projects/atm-system-1.webp',
    images: [
      { src: './projects/atm-system-1.webp', caption: 'Account Creation & Authenticated 11-Option Banking Dashboard' },
      { src: './projects/atm-system-2.webp', caption: 'Live Balance Check, Fund Transfer, Date Search & CSV Transaction Export Workflow' },
    ],
    github: 'https://github.com/Sandeepsem/Atm-System_python-project',
  },
]

export const education = [
  {
    title: 'Post Graduate Diploma in Computer Application',
    place: 'Indira Gandhi National Open University (IGNOU), New Delhi',
    year: 'Dec 2021',
  },
  {
    title: 'Bachelor of Science (B.Sc.)',
    place: 'Delhi University, New Delhi',
    year: 'Dec 2017',
  },
  {
    title: '12th Grade — CBSE (English Medium)',
    place: 'J.M.P.S. School, Burari, Delhi',
    year: 'Dec 2014',
  },
  {
    title: '10th Grade — CBSE (English Medium)',
    place: 'Oscar Public School, Burari, Delhi',
    year: 'Dec 2012',
  },
]

export type Certificate = {
  title: string
  issuer: string
  tag: string
  category: 'Internship & Simulation' | 'Data & BI Courses' | 'Programming & IT'
  icon: string
  image?: string
  date?: string
  duration?: string
  grade?: string
  credentialId?: string
  verifiedBy?: string
  points?: string[]
  tools?: string[]
  featured?: boolean
}

export const certifications: Certificate[] = [
  {
    title: 'Internship Completion Certificate — Data Analytics',
    issuer: 'SvisionTek Consultancy Services Pvt. Ltd.',
    tag: 'Internship Certificate',
    category: 'Internship & Simulation',
    icon: '🏢',
    date: '03 Oct 2025',
    duration: '1 Jul 2025 – 30 Sep 2025 (3 Months)',
    credentialId: 'CIN: U62020DL2025PTC447034',
    verifiedBy: 'Praveen Khanna · Director, SvisionTek Consultancy Services Pvt. Ltd.',
    image: './certs/svisiontek_internship_completion_certificate.webp',
    featured: true,
    tools: ['Microsoft Power BI', 'RDBMS MySQL', 'SQL', 'Data Analytics', 'Dashboarding'],
    points: [
      'Successfully completed a 3-month Trainee Intern program (1st July 2025 to 30th September 2025) at SvisionTek Consultancy Services Pvt. Ltd., New Delhi.',
      'Delivered an end-to-end production Data Analytics Project using Microsoft Power BI and RDBMS MySQL, recognized for diligence, proactiveness, and teamwork.',
    ],
  },
  {
    title: '6-Month Data Analytics Course Certification (Grade A)',
    issuer: 'W-Tech IT Solution · ISO 9001:2015 & Ministry of MSME, Govt. of India',
    tag: '6-Month Certification',
    category: 'Data & BI Courses',
    icon: '🏅',
    date: 'March 2026',
    duration: '6 Months (from 14 Apr 2025)',
    grade: 'Grade A',
    credentialId: 'Reg. No.: DL-06-0050198',
    verifiedBy: 'W-Tech IT Solution, GTB Nagar, Delhi-110091 (ISO 9001:2015 Certified)',
    image: './certs/wtech_data_analytics_certificate.webp',
    featured: true,
    tools: ['Data Analytics', 'Power BI', 'Advanced Excel', 'SQL / MySQL', 'Python'],
    points: [
      'Completed a comprehensive 6-month Data Analytics certification program with Grade A distinction.',
      'Covered end-to-end business intelligence, relational querying, spreadsheet modeling, and executive KPI reporting.',
    ],
  },
  {
    title: 'Deloitte Data Analytics Job Simulation',
    issuer: 'Deloitte · Issued via Forage',
    tag: 'Job Simulation',
    category: 'Internship & Simulation',
    icon: '🏆',
    date: '12 Sep 2026',
    credentialId: 'Enrolment: 6aa4f5ff707c12e17fb1fa81',
    verifiedBy: 'Tina McCreery · Chief Human Resources Officer, Deloitte',
    image: './certs/deloitte_data_analytics_certificate.webp',
    tools: ['Data Analysis', 'Forensic Technology', 'Tableau', 'Excel'],
    points: [
      'Completed practical Deloitte job simulation tasks in Data Analysis and Forensic Technology.',
      'Built interactive visual dashboards and classified complex datasets to surface business conclusions and anomaly patterns.',
    ],
  },
  {
    title: '30 Days Power BI Micro Course',
    issuer: 'SkillCourse (www.skillcourse.in) · ISO 9001:2015 Certified',
    tag: 'Power BI Credential',
    category: 'Data & BI Courses',
    icon: '📊',
    date: '27 Sep 2026',
    duration: '30 Days Intensive',
    credentialId: 'Cert ID: SC-99A44FMMWX',
    verifiedBy: 'Satish Dhawale · Founder of SkillCourse (ISO Reg: INQ/AN-20622/127512/1025)',
    image: './certs/skillcourse_powerbi_certificate.webp',
    tools: ['Power BI', 'DAX Measures', 'Power Query ETL', 'Interactive Dashboards'],
    points: [
      'Mastered interactive Power BI dashboard design, DAX calculated measures, Power Query transformations, and visual storytelling.',
    ],
  },
  {
    title: '30 Days Python Micro Course',
    issuer: 'SkillCourse (www.skillcourse.in) · ISO 9001:2015 Certified',
    tag: 'Python Credential',
    category: 'Data & BI Courses',
    icon: '🐍',
    date: '27 Sep 2026',
    duration: '30 Days Intensive',
    credentialId: 'Cert ID: SC-MIZ2IY42BE',
    verifiedBy: 'Satish Dhawale · Founder of SkillCourse (ISO Reg: INQ/AN-20622/127512/1025)',
    image: './certs/skillcourse_python_certificate.webp',
    tools: ['Python', 'Data Structures', 'Automation', 'Analytics Scripting'],
    points: [
      'Completed hands-on Python programming training covering core syntax, data structures, file handling, and analytical scripting.',
    ],
  },
  {
    title: 'Java Programming',
    issuer: 'DOEACC',
    tag: 'Programming',
    category: 'Programming & IT',
    icon: '☕',
    tools: ['Java', 'OOP', 'Data Structures'],
    points: ['Certified in object-oriented software development and core Java application logic.'],
  },
  {
    title: 'C++ Programming',
    issuer: 'DOEACC',
    tag: 'Programming',
    category: 'Programming & IT',
    icon: '⚙️',
    tools: ['C++', 'Algorithms', 'Memory & Logic'],
    points: ['Certified in structured and object-oriented programming fundamentals in C++.'],
  },
  {
    title: 'CCC: Course on Computer Concepts',
    issuer: 'DOEACC / NIELIT',
    tag: 'Foundation',
    category: 'Programming & IT',
    icon: '💻',
    tools: ['Spreadsheets', 'Databases', 'IT Systems'],
    points: ['National certification covering office productivity, spreadsheets, and digital systems.'],
  },
]

export const codeSamples = [
  {
    id: 'sql',
    label: 'SQL · Admission Funnel',
    filename: 'admission_funnel.sql',
    code: `-- Admission funnel & conversion rate by department
SELECT department,
       COUNT(*)                                              AS total_applications,
       SUM(CASE WHEN doc_status = 'Verified' THEN 1 ELSE 0 END) AS docs_verified,
       SUM(CASE WHEN status = 'Eligible' THEN 1 ELSE 0 END)     AS eligible_count,
       ROUND(100.0 * SUM(CASE WHEN status = 'Eligible' THEN 1 ELSE 0 END) / COUNT(*), 1) AS eligibility_pct
FROM   admissions
GROUP  BY department
ORDER  BY total_applications DESC;`,
  },
  {
    id: 'dax',
    label: 'DAX · Election 2024',
    filename: 'election_runnerup.dax',
    code: `// Election 2024: Alliance Mapping & Runner-Up Margin Measures
Party Alliance (Result) =
LOOKUPVALUE(
    partywise_results[Party Alliance],
    partywise_results[Party ID],
    constituencywise_results[Party ID]
)

Runner UP Candidate =
VAR MaxVotes = MAX(constituencywise_details[Total Votes])
VAR SecondMaxVotes =
    MAXX(
        FILTER(constituencywise_details, constituencywise_details[Total Votes] < MaxVotes),
        constituencywise_details[Total Votes]
    )
RETURN
    CALCULATE(
        MAX(constituencywise_details[Candidate]),
        constituencywise_details[Total Votes] = SecondMaxVotes
    )`,
  },
  {
    id: 'python',
    label: 'Python · ETL & MySQL',
    filename: 'etl_pipeline.py',
    code: `import pandas as pd

# Standardize raw CSV/Excel sales exports before Power BI ingestion
df = (
    pd.read_excel("raw_sales.xlsx")
      .drop_duplicates(subset=["OrderID"])
      .assign(
          OrderDate=lambda d: pd.to_datetime(d["OrderDate"], errors="coerce"),
          NetMargin=lambda d: (d["SalesAmount"] - d["CostAmount"]) / d["SalesAmount"],
      )
      .dropna(subset=["OrderDate", "SalesAmount"])
)
df.to_csv("clean_sales_fact.csv", index=False)`,
  },
]

export const aiWorkflow = [
  {
    step: '01',
    title: 'Frame the business question',
    text: 'Define target KPIs, granularity, and stakeholder decisions first before drafting prompts or schemas.',
  },
  {
    step: '02',
    title: 'Clean & wrangle with AI',
    text: 'Use ChatGPT, Gemini, or Claude to draft Power Query M steps, SQL joins, and Pandas scripts — verifying every transformation against raw counts.',
  },
  {
    step: '03',
    title: 'Explore & detect anomalies',
    text: 'Pair AI pattern checks with statistical validation to catch outliers, seasonality shifts, and forecasting drivers (+15% accuracy).',
  },
  {
    step: '04',
    title: 'Model DAX & visual hierarchy',
    text: 'Accelerate complex DAX time-intelligence measures and design executive-ready Power BI layouts.',
  },
  {
    step: '05',
    title: 'Automate recurring MIS',
    text: 'Turn repetitive Excel/MySQL prep into repeatable pipelines, cutting reporting turnaround time by 20%.',
  },
  {
    step: '06',
    title: 'Ship full-stack apps via CI/CD',
    text: 'Build production web & mobile apps backed by MySQL, Firebase, and Supabase, and deploy continuously via GitHub → Hostinger & Hostinger Docker pipelines.',
  },
]

export const aiProjects: Project[] = [
  {
    title: 'Aptelo — AI-Powered Career Assessment Web Platform',
    subtitle: 'OCEAN, RIASEC & Emotional Intelligence Assessment Portal (aptelo.in)',
    category: 'AI & Web App',
    duration: 'Live Web Platform',
    description:
      'Full-stack AI-powered career discovery web platform (aptelo.in) enabling students and job seekers to evaluate their strengths through OCEAN (Big Five), RIASEC, and Emotional Intelligence psychometric assessments.',
    metrics: ['aptelo.in Live Web', 'OCEAN · RIASEC · EQ', 'MySQL & Supabase', 'GitHub → Hostinger Docker CI/CD'],
    highlights: [
      'Built and deployed the responsive React + Vite + Tailwind CSS assessment portal with multi-dimensional scoring and academic history tracking.',
      'Engineered the Practitioner & Career Counsellor onboarding workflow supporting Academic Guidance, Emotional Intelligence, Stream Selection, Interview Prep, and Executive Coaching.',
      'Backed by MySQL & Supabase and deployed via an automated GitHub → Hostinger Docker CI/CD pipeline.',
    ],
    tools: ['React & Vite', 'Tailwind CSS', 'MySQL', 'Supabase', 'Docker', 'GitHub CI/CD → Hostinger'],
    image: './projects/live-aptelo-in.webp',
    images: [
      { src: './projects/live-aptelo-in.webp', caption: 'Aptelo Live Web Platform (aptelo.in) — AI-Powered Career Assessment for Students and Job Seekers' },
    ],
    live: 'https://aptelo.in/',
    links: [
      { label: 'Visit aptelo.in ↗', url: 'https://aptelo.in/', primary: true },
    ],
  },
  {
    title: 'Aptelo — Career Counselling Android Mobile Application',
    subtitle: 'Official Google Play Store Mobile App (com.svisiontek.aptelo)',
    category: 'AI & Web App',
    duration: 'Google Play Store App',
    description:
      'Published Android mobile application on Google Play Store (com.svisiontek.aptelo, 5.0★ rated) delivering AI-powered career discovery reports, personality profile radar charts, career fit scores, and 1-on-1 expert counselling on mobile.',
    metrics: ['Google Play Store (5.0★)', 'AI Career Discovery Report', 'MySQL & Supabase API', 'GitHub → Hostinger Backend'],
    highlights: [
      'Shipped the production Android mobile app (com.svisiontek.aptelo) featuring interactive Assessment Deep Dive screens, OCEAN personality graphs, and downloadable PDF Career Discovery Reports.',
      'Synchronized mobile user profiles, test progress, and counsellor booking states with the cloud MySQL & Supabase backend.',
    ],
    tools: ['Android App (Google Play)', 'Mobile UI/UX', 'REST APIs', 'MySQL', 'Supabase', 'GitHub CI/CD → Hostinger'],
    image: './projects/live-aptelo-playstore.webp',
    images: [
      { src: './projects/live-aptelo-playstore.webp', caption: 'Aptelo Career Counselling Android App on Google Play Store (com.svisiontek.aptelo)' },
    ],
    live: 'https://play.google.com/store/apps/details?id=com.svisiontek.aptelo&pcampaignid=web_share',
    links: [
      { label: 'Google Play Store ↗', url: 'https://play.google.com/store/apps/details?id=com.svisiontek.aptelo&pcampaignid=web_share', primary: true },
    ],
  },
  {
    title: 'Aptelo LMS — Learning Management System',
    subtitle: 'Interactive Courses, Live Classes & Verified Certificates Portal (aptelo.org)',
    category: 'AI & Web App',
    duration: 'Live LMS Portal',
    description:
      'Dedicated Learning Management System (aptelo.org) providing 50+ expert-designed courses, live classes, structured 4-step learning pathways, progress tracking, and verified learner certificates.',
    metrics: ['aptelo.org Live LMS', '50+ Courses & Live Classes', 'Firebase & MySQL', 'GitHub → Hostinger Docker'],
    highlights: [
      'Developed the responsive React + Vite + Tailwind CSS + Lucide LMS interface with course search, dark/light theme support, and learner progress dashboards.',
      'Integrated Firebase and MySQL persistence for course catalogs, student enrollments, and verified certificate issuance, deployed via GitHub → Hostinger with Docker.',
    ],
    tools: ['React & Vite', 'Tailwind CSS', 'Firebase', 'MySQL', 'Docker', 'GitHub CI/CD → Hostinger'],
    image: './projects/live-aptelo-org.webp',
    images: [
      { src: './projects/live-aptelo-org.webp', caption: 'Aptelo LMS (aptelo.org) — 50+ Courses, Live Classes, Progress Tracking & Verified Certificates' },
    ],
    live: 'https://aptelo.org/',
    links: [
      { label: 'Visit aptelo.org ↗', url: 'https://aptelo.org/', primary: true },
    ],
  },
  {
    title: 'Aptelo Careers Library & Astra AI Career Companion',
    subtitle: 'Interactive Career & College Directory + AI PDF Report Parser (aptelo.online)',
    category: 'AI & Web App',
    duration: 'Live AI Career Library',
    description:
      'Interactive career and college intelligence directory (aptelo.online) mapping 28 core fields, 150+ specializations, and 1,000+ verified colleges — paired with the Astra AI Career Companion and PDF psychometric report analysis.',
    metrics: ['aptelo.online Live', '28 Fields · 1000+ Colleges', 'Astra AI Companion', 'Supabase + Docker CI/CD'],
    highlights: [
      'Engineered an AI PDF Psychometric Report uploader (up to 10MB) and DOMPurify-secured parser that powers personalized career Q&A with the Astra Career Companion.',
      'Built searchable directories for Careers, Colleges, Universities, Medical pathways, Side-by-Side Comparison, and Top Entrance Exams for 2026 backed by Supabase and deployed via GitHub → Hostinger Docker.',
    ],
    tools: ['React & Vite', 'Supabase', 'Tailwind CSS', 'Astra AI Companion', 'Docker', 'GitHub CI/CD → Hostinger'],
    image: './projects/live-aptelo-online.webp',
    images: [
      { src: './projects/live-aptelo-online.webp', caption: 'Aptelo Careers Library (aptelo.online) — 28 Core Fields, 1000+ Colleges & Chat with Astra AI' },
    ],
    live: 'https://aptelo.online/',
    links: [
      { label: 'Visit aptelo.online ↗', url: 'https://aptelo.online/', primary: true },
    ],
  },
  {
    title: 'NG Campus — Live Learning & Entrance Coaching Portal',
    subtitle: 'NTA UGC NET/JRF, CUET, DSSSB, KVS & NVS Coaching Platform (ngcampus.live)',
    category: 'AI & Web App',
    duration: 'Live Coaching Portal',
    description:
      'Official digital campus and competitive exam coaching website (ngcampus.live) showcasing classroom and online programs for NTA UGC NET/JRF, CUET (UG & PG), DSSSB, KVS, NVS, EMRS, and CTET with 10,000+ student success stories.',
    metrics: ['ngcampus.live Portal', '10,000+ Success Stories', 'MySQL & Supabase', 'GitHub → Hostinger CI/CD'],
    highlights: [
      'Designed and shipped multi-track academic hubs for NTA UGC NET/JRF, CUET, Teaching Exams, Entrance Exams, and School Syllabus programs.',
      'Connected free demo class booking and student inquiry pipelines with MySQL/Supabase backend storage and automated GitHub → Hostinger deployment.',
    ],
    tools: ['React & Vite', 'Tailwind CSS', 'MySQL', 'Supabase', 'GitHub CI/CD → Hostinger'],
    image: './projects/live-ngcampus-live.webp',
    images: [
      { src: './projects/live-ngcampus-live.webp', caption: 'NG Campus Live Portal (ngcampus.live) — NTA UGC NET/JRF, CUET & Teaching Exams Coaching Hub' },
    ],
    live: 'https://ngcampus.live/',
    links: [
      { label: 'Visit ngcampus.live ↗', url: 'https://ngcampus.live/', primary: true },
    ],
  },
  {
    title: 'NG Campus — Student Management Application',
    subtitle: 'Student/Institute Auth Portal & Gemini AI Assessment Engine (ngcampus.online)',
    category: 'AI & Web App',
    duration: 'Live Student Management App',
    description:
      'Dedicated Student Management and AI Assessment web application (ngcampus.online) featuring dual Student & Institute login portals, Registration ID authentication, and Google Gemini AI-generated MCQ tests.',
    metrics: ['ngcampus.online App', 'Student & Institute Portals', 'Gemini AI + Supabase', 'GitHub → Hostinger Docker'],
    highlights: [
      'Built role-based Student and Institute authentication (Registration ID & mobile credentials), student batch management, and file upload workflows backed by Supabase.',
      'Integrated Google Gemini Developer API / Vertex AI for automated 4-option MCQ quiz generation and real-time WebSocket assessment sessions, deployed via GitHub → Hostinger with Docker.',
    ],
    tools: ['React & Vite', 'Supabase', 'Gemini AI API', 'Tailwind CSS', 'Docker', 'GitHub CI/CD → Hostinger'],
    image: './projects/live-ngcampus-online.webp',
    images: [
      { src: './projects/live-ngcampus-online.webp', caption: 'NG Campus Student Management Application (ngcampus.online) — Student & Institute Sign-In Portal' },
    ],
    live: 'https://ngcampus.online/',
    links: [
      { label: 'Visit ngcampus.online ↗', url: 'https://ngcampus.online/', primary: true },
    ],
  },
  {
    title: 'WTech IT Solution — AI & Tech Training Institute Website',
    subtitle: 'ISO 9001:2015 Certified Institute Portal & Course Catalog (wtechitsolution.com)',
    category: 'AI & Web App',
    duration: 'Live Institute Website',
    description:
      'Public brand and course discovery portal for W Tech IT Solution in GTB Nagar, Delhi (wtechitsolution.com), showcasing job-ready AI, Data Analytics, Full-Stack Development, Design, Digital Marketing, and E-Accounting programs.',
    metrics: ['wtechitsolution.com', '10,000+ Students Trained', '150+ Hiring Partners', 'GitHub → Hostinger CI/CD'],
    highlights: [
      'Engineered conversion-focused course tracks (AI, Data, Development, Design), free demo booking workflows, and 4.9/5 Google review showcases.',
      'Integrated MySQL inquiry storage, Google Analytics telemetry, and automated GitHub → Hostinger platform deployment.',
    ],
    tools: ['JavaScript (ES6+)', 'HTML5 & CSS3', 'MySQL', 'Google Analytics', 'GitHub CI/CD → Hostinger'],
    image: './projects/live-wtech-com.webp',
    images: [
      { src: './projects/live-wtech-com.webp', caption: 'WTech IT Solution Official Website (wtechitsolution.com) — AI, Data & Development Career Programs' },
    ],
    live: 'https://wtechitsolution.com/',
    links: [
      { label: 'Visit wtechitsolution.com ↗', url: 'https://wtechitsolution.com/', primary: true },
    ],
  },
  {
    title: 'WTech IT Solution — AI-Powered CRM Web Application',
    subtitle: 'Staff Portal, Fee Ledger, PDF Receipt Engine & Faculty CRM (wtechitsolution.online)',
    category: 'AI & Web App',
    duration: 'Live CRM Web App',
    description:
      'Production AI-powered CRM and institute management Progressive Web App (wtechitsolution.online) developed end-to-end by Sandeep Semwal — automating student fee accounting, installment plans, downloadable PDF receipts, and faculty management.',
    metrics: ['wtechitsolution.online CRM', 'Firebase / Firestore DB', 'Auto PDF Fee Receipts', 'GitHub → Hostinger CI/CD'],
    highlights: [
      'Engineered Student Fee Account Statements supporting one-time vs. installment payment plans, live pending-balance tracking, and one-click downloadable PDF receipts.',
      'Built Staff Portal Access & Faculty Management (salary sorting, subject/phone search, login credential dispatch) backed by Firebase (Firestore/Auth) and MySQL, shipped via GitHub → Hostinger CI/CD.',
    ],
    tools: ['React & Vite', 'Firebase / Firestore', 'MySQL', 'Tailwind CSS', 'Framer Motion', 'GitHub CI/CD → Hostinger'],
    image: './projects/live-wtech-online.webp',
    images: [
      { src: './projects/live-wtech-online.webp', caption: 'WTech IT Solution AI-Powered CRM Web Application (wtechitsolution.online) — Staff & Portal Login' },
    ],
    live: 'https://www.wtechitsolution.online/',
    links: [
      { label: 'Visit wtechitsolution.online ↗', url: 'https://www.wtechitsolution.online/', primary: true },
    ],
  },
  {
    title: 'Rote Learner Education Blog',
    subtitle: 'Competitive Exam Guides, SEO Content Engine & Traffic Analytics (rotelearner.blogspot.com)',
    category: 'AI & Web App',
    duration: 'Since May 2020',
    description:
      'Long-running educational and competitive exam preparation portal (rotelearner.blogspot.com) publishing structured study guides for General Science, Static GK, Current News, and RRB-NTPC — combining Google Custom Search, AdSense, and AI-guided SEO.',
    metrics: ['rotelearner.blogspot.com', 'Active Since May 2020', 'Google CSE & AdSense', 'SEO & Traffic Analytics'],
    highlights: [
      'Managed end-to-end editorial architecture across General Science, Static GK, Current News, RRB-NTPC, and national sports/GK guides.',
      'Applied AI-assisted keyword clustering, Google Custom Search Engine (CSE), and ongoing traffic analytics to grow organic readership.',
    ],
    tools: ['SEO & Content Strategy', 'Google CSE', 'Web Analytics', 'AI Content Workflows'],
    image: './projects/live-rotelearner.webp',
    images: [
      { src: './projects/live-rotelearner.webp', caption: 'Rote Learner Education Blog (rotelearner.blogspot.com) — Competitive Exam Study Guides & SEO Engine' },
    ],
    live: 'https://rotelearner.blogspot.com/',
    links: [
      { label: 'Visit rotelearner.blogspot.com ↗', url: 'https://rotelearner.blogspot.com/', primary: true },
    ],
  },
]

export const agentPipeline = [
  { icon: '💡', title: 'Plan', text: 'Understand the goal & KPIs' },
  { icon: '</>', title: 'Build', text: 'React, Vite, MySQL, Firebase & Supabase' },
  { icon: '🤖', title: 'Agentic AI', text: 'Automate analysis & AI workflows' },
  { icon: '🚀', title: 'CI/CD Deploy', text: 'GitHub → Hostinger & Docker' },
]
export const agentSteps = ['Plan', 'Build UI & API', 'Wire MySQL / Firebase / Supabase', 'Dockerize', 'GitHub → Hostinger']
export const agentCaps = [
  'React · Vite · Android Apps',
  'MySQL · Firebase · Supabase',
  'GitHub → Hostinger CI/CD',
  'Docker Container Deploy',
  'Gemini & AI Agent APIs',
]
export const aiChecklist = [
  'Data Cleaning & ETL',
  'Exploratory Data Analysis',
  'DAX & SQL Synthesis',
  'Full-Stack & Mobile Prototyping',
  'Automated GitHub → Hostinger Docker CI/CD',
]
export const aiToolCards = [
  { name: 'React & Vite', use: 'Full-Stack Web & PWA UI' },
  { name: 'Databases', use: 'MySQL, Firebase & Supabase' },
  { name: 'CI/CD & Docker', use: 'GitHub → Hostinger Deploy' },
  { name: 'AI & Agentic SDKs', use: 'Gemini, ChatGPT & Claude' },
  { name: 'Analytics Stack', use: 'Python, SQL & Power BI' },
]

export type FeaturedRepo = {
  name: string
  url: string
  language: string
  description: string
}

export const featuredRepos: FeaturedRepo[] = [
  {
    name: 'Atm-System_python-project',
    url: 'https://github.com/Sandeepsem/Atm-System_python-project',
    language: 'Python · MySQL',
    description:
      'Console-based ATM Banking & Transaction Management System with MySQL ledger, PIN authentication, date-range search, and CSV export.',
  },
  {
    name: 'Dtc-bus-management-',
    url: 'https://github.com/Sandeepsem/Dtc-bus-management-',
    language: 'Python · MySQL',
    description:
      'DTC Bus Management & Analytics System built with Python, MySQL, Pandas, and Matplotlib featuring an automatic daily revenue engine and 6-chart admin suite.',
  },
  {
    name: 'Food-Delivery-Sales-Dashboar-PowerBi-excel-',
    url: 'https://github.com/Sandeepsem/Food-Delivery-Sales-Dashboar-PowerBi-excel-',
    language: 'Power BI · DAX · Excel',
    description:
      'Swiggy Food Delivery 2-page Power BI & Excel dashboard analyzing 6.27M in sales, 23K orders, 269.11 AOV, Veg/Non-Veg split, and city demand.',
  },
  {
    name: 'Election_2024_powerbi',
    url: 'https://github.com/Sandeepsem/Election_2024_powerbi',
    language: 'Power BI · DAX',
    description:
      'India General Election 2024 6-view Power BI analytics dashboard covering 543 constituencies, 8,099 candidates, 42 parties, and alliance seat share.',
  },
  {
    name: 'powerbi-sql-sales-report-',
    url: 'https://github.com/Sandeepsem/powerbi-sql-sales-report-',
    language: 'Power BI · SQL · Excel',
    description:
      'Multi-page Sales Performance Analytics Report tracking 394.27K revenue, 61.77K profit (16% margin), YoY/MoM/QoQ growth, and geospatial city sales.',
  },
  {
    name: 'School-admission-PowerBi-excel-sql',
    url: 'https://github.com/Sandeepsem/School-admission-PowerBi-excel-sql',
    language: 'Power BI · SQL · Excel',
    description:
      '3-module School Admission Analytics Dashboard tracking 4,338+ student applications, document verification, and program target vs. actual intake.',
  },
]

export const learningFocus = {
  badge: 'CURRENTLY LEARNING & HANDS-ON BUILDING · 2026 UPSKILLING LAB',
  statusPill: '📚 Active Learner · Practising & Prototyping Daily',
  focusPill: '🚀 Hands-On Sandbox & Prototyping',
  title: 'Agentic AI & n8n Automated Workflows',
  subtitle: 'Actively Upskilling in Autonomous AI Agents, Visual Workflow Orchestration & Self-Driving Data Pipelines',
  quote:
    '“Technology evolves fast — so I dedicate daily lab time to learning and building with Agentic AI and n8n automated workflows, turning static data and web apps into intelligent, self-operating systems.”',
  statement:
    'I am actively advancing my skills in Agentic AI and n8n workflow automation through hands-on sandbox projects — connecting LLMs, webhooks, MySQL/Supabase/Firebase databases, and Power BI reporting to automate repetitive analytics and business operations end to end.',
  workflows: [
    {
      id: 'bi-alert',
      label: '⚡ BI & KPI Anomaly Agent',
      file: 'bi_kpi_anomaly_agent.n8n.json',
      nodes: [
        { step: '01', icon: '⏱️', title: 'Schedule / SQL Trigger', sub: 'MySQL & Power BI Dataset Poll' },
        { step: '02', icon: '🔗', title: 'n8n Transform Node', sub: 'Clean, Aggregate & Compare KPIs' },
        { step: '03', icon: '🧠', title: 'Agentic AI Analyst', sub: 'LLM Root-Cause & Insight Draft' },
        { step: '04', icon: '📨', title: 'Auto-Dispatch Action', sub: 'Executive Email / Slack / WhatsApp' },
      ],
      log: '✔ [n8n Lab] Queried 14,200 SQL rows → AI Agent flagged +18.4% revenue spike → Dispatched KPI brief automatically.',
    },
    {
      id: 'crm-triage',
      label: '🤖 Autonomous CRM Lead Agent',
      file: 'crm_lead_qualifier.n8n.json',
      nodes: [
        { step: '01', icon: '🌐', title: 'Webhook Trigger', sub: 'Live Web / App Lead Capture' },
        { step: '02', icon: '🔀', title: 'n8n Router & Enrich', sub: 'HTTP API + Deduplication' },
        { step: '03', icon: '🤖', title: 'AI Scoring Agent', sub: 'Intent Classification & Draft Reply' },
        { step: '04', icon: '🗄️', title: 'Supabase / MySQL Sync', sub: 'CRM Update + Instant Follow-Up' },
      ],
      log: '✔ [n8n Lab] Webhook received lead → AI Agent scored High-Intent (92/100) → Synced to Supabase & sent tailored reply.',
    },
    {
      id: 'etl-sync',
      label: '📊 Self-Healing ETL Pipeline',
      file: 'auto_etl_pipeline.n8n.json',
      nodes: [
        { step: '01', icon: '📂', title: 'Raw Data Ingest', sub: 'Excel / CSV / REST Webhook' },
        { step: '02', icon: '🐍', title: 'Python + n8n Code Node', sub: 'Pandas Normalization & Dedup' },
        { step: '03', icon: '🛡️', title: 'AI Schema Validator', sub: 'Auto-Fix Nulls & Format Drift' },
        { step: '04', icon: '📈', title: 'Live Warehouse Load', sub: 'MySQL · Firebase · BI Refresh' },
      ],
      log: '✔ [n8n Lab] Ingested 4,500 records → AI resolved 37 schema mismatches → Loaded clean tables into MySQL & refreshed BI.',
    },
  ],
  tracks: [
    {
      title: 'n8n Visual Workflow Automation & Webhooks',
      state: '🔥 Practising Daily',
      focus: 'Focus Track 01',
      topics: 'Multi-node orchestration, Webhook/Cron triggers, REST API integrations, conditional routers & error recovery',
    },
    {
      title: 'Agentic AI, Tool-Calling & Memory Systems',
      state: '🧪 Hands-On Sandbox',
      focus: 'Focus Track 02',
      topics: 'Autonomous LLM agents, structured JSON outputs, function/tool calling, prompt chaining & multi-agent handoffs',
    },
    {
      title: 'AI-Automated BI, SQL & CRM Operations',
      state: '🚀 Building Prototypes',
      focus: 'Focus Track 03',
      topics: 'Connecting MySQL, Supabase, Firebase & Power BI/Excel with n8n agents for zero-touch reporting & alerts',
    },
  ],
  pillars: [
    {
      badge: 'Hands-On Module 01',
      icon: '🔗',
      title: 'n8n Workflow Automation',
      text: 'Building event-driven, multi-node workflows that connect APIs, webhooks, databases, and notification channels without manual intervention.',
    },
    {
      badge: 'Hands-On Module 02',
      icon: '🤖',
      title: 'Autonomous Agentic AI',
      text: 'Developing tool-using AI agents with memory, reasoning, and structured outputs to research, analyze, and execute multi-step tasks.',
    },
    {
      badge: 'Hands-On Module 03',
      icon: '⚡',
      title: 'Self-Driving Data & CRM Ops',
      text: 'Automating recurring ETL syncs, KPI anomaly alerts, lead qualification, and scheduled executive MIS/BI report delivery.',
    },
  ],
  goal: '🎯 Current Upskilling Goal: Mastering production-grade Agentic AI + Dockerized n8n automation pipelines to deliver smarter analytics & self-operating web products.',
  tags: [
    'n8n Workflow Automation',
    'Agentic AI Systems',
    'Webhook & API Orchestration',
    'LLM Tool Calling',
    'Automated SQL / BI Pipelines',
    'Self-Hosted Docker n8n',
    'Always Learning & Upskilling',
  ],
}
