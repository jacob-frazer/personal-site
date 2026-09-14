// career history for the home page timeline, most recent first. Every role was software engineering,
// so job titles are left out. projects link each role to its deep dives on the projects page
export const EXPERIENCE = [
    {
        company: "JP Morgan",
        years: "2022 – present",
        summary: "Building the platforms JP Morgan's researchers rely on, from the internal Jupyter service used by thousands of quants to a container platform for AI research.",
        projects: [
            { label: "AI Research Container Platform", url: "aicontainers" },
            { label: "Quant Enablement", url: "jpm" },
            { label: "Magic Breakfast Schools Portal", url: "magicbreakfast" },
        ]
    },
    {
        company: "UKHSA",
        detail: "Contracting through Ascent",
        years: "2020 – 2022",
        summary: "Data engineering, data science and automation for the UK's COVID-19 response, recognised with an award for contributions to the civil service.",
        projects: [
            { label: "Fighting COVID-19", url: "ukhsa" },
        ]
    },
    {
        company: "BT",
        years: "2019 – 2020",
        summary: "Secure software validation for a highly sensitive platform, and data science projects in BT's cyber security Data Science Hub.",
        projects: [
            { label: "Secure Software Validation", url: "softwarevalidation" },
            { label: "Cyber Security Data Science", url: "cybersecurity" },
        ]
    },
    {
        company: "Aviva",
        years: "2017 – 2018",
        summary: "Built an NLP and reasoning system that automated insurance pricing, cutting quote times from 6 weeks to minutes and saving over £10M.",
        projects: [
            { label: "AI Insurance Pricing", url: "insuranceai" },
        ]
    },
];
