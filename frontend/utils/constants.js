import Categories from "containers/AdminDashboard/components/Categories";
import Companies from "containers/AdminDashboard/components/Companies";
import Levels from "containers/AdminDashboard/components/Levels";
import Lists from "containers/AdminDashboard/components/Lists";
import Problems from "containers/AdminDashboard/components/Problems";

export const HEADER_CONSTANTS = [
    {
        name: 'Practice',
        value: '/practice',
        children: [
            {
                name: 'Interview Problems',
                value: '/problems',
            },
            {
                name: 'Top Problems List',
                value: '/problem-lists',
            },
            {
                name: 'Online Compiler',
                value: '/compiler',
            }
        ]
    },
    {
        name: 'Guided Paths',
        value: '/paths',
        children: []
    },
    {
        name: 'Interview Prep',
        value: '/practice',
        children: [
            {
                name: 'Interview Experiences',
                value: '/problems',
            },
            {
                name: 'Interview Bundles',
                value: '/interview-bundle',
            },
            {
                name: 'Mock Interviews',
                value: '/dashboard/admin',
            }
        ]
    },
    {
        name: 'Challenges',
        value: '/practice',
        children: [
            {
                name: 'Mock Test Series',
                value: '/problems',
            },
            {
                name: 'Contests',
                value: '/top-problems',
            }
        ]
    },
    {
        name: 'Knowledge Centre',
        value: '/practice',
        children: [
            {
                name: 'Library',
                value: '/problems',
            },
            {
                name: 'Videos',
                value: '/top-problems',
            }
        ]
    },
    {
        name: 'Community',
        value: '/practice',
        children: [
            {
                name: 'Campuses',
                value: '/problems',
            },
            {
                name: 'Public Discussions',
                value: '/top-problems',
            }
        ]
    }
];

export const INTERVIEW_TOPICS = [
    'linear-gradient(180deg,#33006F99,#33006F)',
    'linear-gradient(180deg,#fe793199,#fe7931)',
    'linear-gradient(180deg,#98d1a4,#2dbe4c)',
    'linear-gradient(180deg,#FF375399,#FF3753)'  
];

export const ADMIN_LINKS = [
    {
        title: 'Lists',
        id: 'list',
        component: <Lists />
    },
    {
        title: 'Levels',
        id: 'level',
        component: <Levels />
    },
    {
        title: 'Problems',
        id: 'problem',
        component: <Problems />
    },
    {
        title: 'Categories',
        id: 'category',
        component: <Categories />
    },
    {
        title: 'Companies',
        id: 'company',
        component: <Companies />
    },
    {
        title: 'Promotions',
        id: 'promotion',
        component: <Companies />
    },
    {
        title: 'Trending',
        id: 'trending',
        component: <Companies />
    },
    {
        title: 'Password',
        id: 'password',
        component: <Companies />
    },
]