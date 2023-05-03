export type Experience = {
    company: string;
    company_slug: string;
    company_url: `https://${string}`;
    color: `#${string}`;
    position: string;
    startTime: Date;
    endTime: Date;
    location: string;
    description: string[];
}

export type Skill = {
    name: string;
    image: string;
    url?: string;
}

export async function getExperience () {
    const experience: Experience[] = [
        {
            company_slug: 'dibbs',
            company_url: 'https://dibbs.io',
            color: "#4DE9A1",
            company: 'Dibbs',
            position: 'Senior Full Stack Engineer',
            startTime: new Date('2021-05-01'),
            endTime: new Date('2023-04-01'),
            location: 'Remote, Germany',
            description: [
                'Worked on API for the fractional market & vaulting for the TAAS platform',
                'Built a type-safe ORM connecting the database to front- and backend',
                'Unit tested critical endpoints for user management, marketplace and vaulting flow',
                'Aided compliance team by creating regulatory and fraud detection tools',
            ]
        },
        {
            company_slug: 'dibbs',
            company_url: 'https://dibbs.io',
            color: "#4DE9A1",
            company: 'Dibbs',
            position: 'Freelance Software Engineer',
            startTime: new Date('2021-02-01'),
            endTime: new Date('2021-05-01'),
            location: 'Remote, Germany',
            description: [
                'Built Smart Contracts for compliance and helped build the marketplace API for product launch',
            ]
        },
        {
            company_slug: 'wax',
            company_url: 'https://wax.io',
            color: "#ff5311",
            company: 'Worldwide Asset eXchange (WAX) / OPSkins / wdny.io',
            position: 'Blockchain Product Engineer',
            startTime: new Date('2019-12-01'),
            endTime: new Date('2021-05-01'),
            location: 'Remote, Germany',
            description: [
                'Lead the design and development efforts of a whitelabel blockchain product for partners (Topps, capcom, Hot Wheels)',
                'Built the payment service connecting wallet verification with payment providers such as Stripe',
            ]
        },
        {
            company_slug: 'wax',
            company_url: 'https://wax.io',
            color: "#ff5311",
            company: 'Worldwide Asset eXchange (WAX) / OPSkins / wdny.io',
            position: 'Full Stack Engineer',
            startTime: new Date('2019-09-01'),
            endTime: new Date('2021-05-01'),
            location: 'Remote, Germany',
            description: [
                'Worked on core products (OPSkins, WAX Cloud Wallet)',
                'Maintained the WAX Website & Blog',
            ]
        },
        {
            company_slug: 'wax',
            company_url: 'https://wax.io',
            color: "#ff5311",
            company: 'Worldwide Asset eXchange (WAX) / OPSkins / wdny.io',
            position: 'Software Engineer',
            startTime: new Date('2019-03-01'),
            endTime: new Date('2019-09-01'),
            location: 'Remote, Germany',
            description: [
                'Created landing pages for promotions',
                'Built full-stack products for community feedback and engagement',
            ]
        }   
    ]

    return experience;
}

export async function getSkills () {
    const skills: Skill[] = [
        {
            name: 'React.js',
            image: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
            url: 'https://react.dev/'
        },
        {
            name: 'Svelte',
            image: 'https://cdn.worldvectorlogo.com/logos/svelte-1.svg',
            url: 'https://svelte.dev/'
        },
        {
            name: 'Vue.js',
            image: 'https://cdn.worldvectorlogo.com/logos/vue-js-1.svg',
            url: 'https://vuejs.org/'
        },
        {
            name: 'Three.js',
            image: 'https://cdn.worldvectorlogo.com/logos/threejs-1.svg',
            url: 'https://threejs.org/'
        },
        {
            name: 'Javascript',
            image: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
            url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/'
        },
        {
            name: 'GraphQL',
            image: 'https://cdn.worldvectorlogo.com/logos/graphql-logo-2.svg',
            url: 'https://graphql.org/'
        },
        {
            name: 'PostgreSQL',
            image: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg',
            url: 'https://www.postgresql.org/'
        },
        {
            name: 'SQLite',
            image: 'https://cdn.worldvectorlogo.com/logos/sqlite.svg',
            url: 'https://www.sqlite.org/'
        },
        {
            name: 'Typescript',
            image: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
            url: 'https://www.typescriptlang.org/'
        },
        {
            name: 'C++',
            image: 'https://cdn.worldvectorlogo.com/logos/c.svg',
            url: 'https://www.cplusplus.com/'
        },
        {
            name: 'Solidity',
            image: 'https://cdn.worldvectorlogo.com/logos/solidity.svg',
            url: 'https://soliditylang.org/'
        }
    ]

    return skills;
}