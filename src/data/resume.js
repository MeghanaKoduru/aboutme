// -----------------------------------------------------------------------------
// Single source of truth for all site content, adapted from Meghana's resume.
// Edit this file to update copy anywhere on the site — components only render it.
// -----------------------------------------------------------------------------

export const profile = {
  name: 'Meghana Koduru',
  title: 'Data Analyst',
  tagline: 'Turning messy data into dashboards, models, and decisions people actually use.',
  location: 'San Francisco, CA',
  email: 'meghanakoduru4@gmail.com',
  linkedin: 'https://linkedin.com/in/meghanakodur',
  github: 'https://github.com/MeghanaKoduru',
  // BASE_URL keeps the link working if the site is ever served from a subpath
  resumeFile: `${import.meta.env.BASE_URL}Meghana_Koduru_Resume.pdf`,
  about: [
    `I'm a data analyst in the Bay Area who likes the whole journey of a dataset — from raw,
    inconsistent source tables to a dashboard an executive checks every morning. Today I work
    at LatentView Analytics, building interactive Superset dashboards and Python analysis
    pipelines that keep reporting accurate, compliant, and genuinely useful.`,
    `My background spans the full analytics stack: statistical analysis and forecasting in
    Python and R, production ML — from a fraud-detection API on Azure Kubernetes to
    explainable churn models with SHAP — and BI storytelling in Tableau, Power BI, and
    Looker. I've shipped PySpark ETL pipelines on AWS and automated reporting tools that
    turn week-long manual processes into something that just runs.`,
    `What ties it together is a simple belief: analysis only matters if someone acts on it.
    I care as much about the narrative and the interface as I do about the model behind them.`,
  ],
}

export const experience = [
  {
    company: 'LatentView Analytics',
    role: 'Data Analyst',
    location: 'Mountain View, CA',
    period: 'Jan 2026 — Present',
    current: true,
    bullets: [
      'Build interactive Superset dashboards that put compliance-ready reporting in front of decision-makers — no analyst bottleneck required.',
      'Translate complex datasets into actionable insights with Python, Pandas, and NumPy, holding a hard line on data quality.',
      'Run version-controlled, Git-based analytics workflows so collaborative projects stay reproducible and auditable.',
      'Apply spaCy and Hugging Face Transformers to clean and mine unstructured text, streamlining recruitment analytics.',
    ],
    tags: ['Python', 'Pandas', 'Superset', 'NLP', 'Git'],
  },
  {
    company: 'VROOM',
    role: 'Data Scientist Intern',
    location: 'Dallas, TX',
    period: 'May 2021 — Aug 2021',
    current: false,
    bullets: [
      'Shipped interactive Power BI dashboards that gave cross-functional teams a shared, self-serve view of the numbers.',
      'Streamlined recurring analysis with advanced Excel, making stakeholder reporting faster and more accurate.',
      'Partnered across teams on SQL + Python deep-dives that turned ad-hoc questions into reliable insights.',
    ],
    tags: ['SQL', 'Python', 'Power BI', 'Excel'],
  },
]

export const projects = [
  {
    title: 'Real-Time ML Deployment',
    subtitle: 'Graduate Cloud ML Ops Capstone · 2025',
    description:
      'Took a scikit-learn fraud-detection model all the way to production: a Dockerized REST API on Azure Kubernetes Service, automated Azure ML pipelines, and an AWS lakehouse (S3 + Glue + Redshift Spectrum) behind it. Result: 30% faster data transformation, 25% less training time, and a PySpark ETL layer that cut processing 20%.',
    tags: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'PySpark', 'scikit-learn'],
  },
  {
    title: 'Churn Modeling & Explainable ML',
    subtitle: "Master's Final Project · 2024–2025",
    description:
      'Built a Random Forest churn model on CRM data with careful feature engineering, then used SHAP values to explain exactly which behaviors drive customers away. Paired it with automated reporting tools so retention teams get insights without asking an analyst.',
    tags: ['Random Forest', 'SHAP', 'Feature Engineering', 'Python'],
  },
  {
    title: 'Sales Forecasting & Recommendations',
    subtitle: 'Undergraduate Capstone · 2022',
    description:
      'Led statistical forecasting in R and SPSS to power product recommendations for the USC platform, lifting user engagement. Delivered the findings as interactive Tableau visualizations that made performance tracking self-explanatory.',
    tags: ['R', 'SPSS', 'Tableau', 'Forecasting'],
  },
  {
    title: 'COVID-19 Risk Dashboards',
    subtitle: 'Kaggle Hackathon · 2020',
    link: 'https://github.com/MeghanaKoduru/covid19-workforce-risk-dashboard',
    description:
      'Designed interactive Tableau and Plotly dashboards that made pandemic-era workforce risk legible to stakeholders. Applied logistic regression to time-series data and crafted the data narratives that informed real policy adjustments.',
    tags: ['Tableau', 'Plotly', 'Looker', 'Logistic Regression'],
  },
]

export const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'SQL', 'R', 'MATLAB'],
  },
  {
    category: 'Data & ML',
    skills: [
      'Pandas',
      'NumPy',
      'scikit-learn',
      'TensorFlow',
      'Keras',
      'spaCy',
      'Hugging Face',
      'PySpark',
      'SPSS',
    ],
  },
  {
    category: 'Visualization & BI',
    skills: ['Tableau', 'Power BI', 'Superset', 'Looker', 'Plotly', 'Seaborn', 'Excel / Sheets'],
  },
  {
    category: 'Cloud & Infra',
    skills: ['AWS (S3 · Glue · Redshift)', 'Azure ML', 'Kubernetes', 'Docker', 'MySQL', 'Git'],
  },
  {
    category: 'Other',
    skills: ['Data Storytelling', 'ETL Pipelines', 'Statistical Analysis', 'Stakeholder Communication'],
  },
]

export const education = [
  {
    school: 'University of Texas — Dallas',
    degree: "Master's, Data Science",
    period: 'Jan 2023 — Dec 2025',
    gpa: '3.81',
  },
  {
    school: 'Bellevue College',
    degree: "Bachelor's, Data Science",
    period: 'Jul 2020 — Dec 2022',
    gpa: '3.80',
  },
  {
    school: 'Cascadia College',
    degree: "Associate's, Computer Science",
    period: 'Aug 2018 — Mar 2020',
    gpa: '3.90',
  },
]
