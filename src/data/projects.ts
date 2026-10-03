export type Project = {
  slug: string
  title: string
  category: 'Automation' | 'Web Development' | 'App Development' | 'Research'
  type: string
  status: string
  summary: string
  problem: string
  solution: string
  stack: string[]
  automations: string[]
  workflow: string[]
  screenshots: { title: string; description: string }[]
  loomUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'smart-expense-tracker',
    title: 'Smart Expense Tracker',
    category: 'App Development',
    type: 'Mobile Application',
    status: 'Project Build',
    summary:
      'A mobile financial-management application for tracking expenses, bills, wallets, transactions, reminders, and budget activity in one place.',
    problem:
      'Managing everyday spending becomes difficult when expenses, bills, balances, and transaction history are spread across separate tools or tracked manually.',
    solution:
      'I built a multi-screen mobile application that brings expense tracking, bill management, wallet balances, transaction history, reminders, and receipt-related workflows into one organized experience.',
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Firebase',
      'AsyncStorage',
      'Mobile UI',
    ],
    automations: [
      'Expense and transaction tracking',
      'Bill due-date and reminder workflows',
      'Wallet and cash-balance management',
      'Transaction history organization',
      'Receipt capture and review flow',
      'Budget analysis and spending insights',
    ],
    workflow: [
      'Dashboard',
      'Expense Entry',
      'Bills',
      'Wallets',
      'Transactions',
      'Reports',
    ],
    screenshots: [
      {
        title: 'Dashboard',
        description:
          'Show the main balance, spending summaries, and latest transactions.',
      },
      {
        title: 'Bills',
        description:
          'Show upcoming bills, overdue bills, payment actions, and history.',
      },
      {
        title: 'Wallets',
        description:
          'Show wallet creation, wallet balances, and wallet-related transactions.',
      },
      {
        title: 'Receipt Scanner',
        description:
          'Show the receipt capture, preview, editing, and apply flow.',
      },
    ],
  },

  {
    slug: 'hr-management-system',
    title: 'HR Management System',
    category: 'Web Development',
    type: 'Web Application',
    status: 'Project Build',
    summary:
      'A responsive HR management interface with authentication, employee organization, company-specific navigation, and administrative workflows.',
    problem:
      'Employee information and navigation needed to be organized across several company brands while keeping the experience consistent and easy to manage.',
    solution:
      'I developed a responsive React-based interface with login handling, branded company filtering, navigation, employee-management views, and backend integration work.',
    stack: [
      'React',
      'TypeScript',
      'JavaScript',
      'PHP',
      'MySQL',
      'Responsive UI',
    ],
    automations: [
      'Authentication and login flow',
      'Company-specific navigation',
      'Employee information organization',
      'Responsive dashboard interface',
      'Backend login and data integration',
    ],
    workflow: [
      'Login',
      'Company Selection',
      'Dashboard',
      'Employee Management',
      'Navigation',
    ],
    screenshots: [
      {
        title: 'Login Screen',
        description:
          'Show the authentication entry point and login experience.',
      },
      {
        title: 'Dashboard',
        description:
          'Show the main HR workspace and administrative interface.',
      },
      {
        title: 'Company Navigation',
        description:
          'Show the company filters, branded navigation, and active states.',
      },
      {
        title: 'Employee Management',
        description:
          'Show the employee information and management interface.',
      },
    ],
  },

  {
    slug: 'inventory-management-system',
    title: 'Inventory Management System',
    category: 'Web Development',
    type: 'CRUD Business System',
    status: 'Project Build',
    summary:
      'A browser-based inventory system for handling inbound stock, outbound stock, suppliers, quantities, stock values, and item records.',
    problem:
      'Spreadsheet-based inventory tracking becomes harder to maintain when inbound deliveries, outbound releases, stock quantities, suppliers, and item matching all need to stay synchronized.',
    solution:
      'I translated the inventory workflow into a web-based CRUD system where inbound transactions add stock, outbound transactions deduct stock, and item records stay connected through matching logic.',
    stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'CRUD',
      'Inventory Logic',
      'Responsive Tables',
    ],
    automations: [
      'Inbound stock updates',
      'Outbound stock deductions',
      'Item and supplier matching',
      'Stock-value calculations',
      'Reorder and stock-status tracking',
    ],
    workflow: [
      'Inventory',
      'Inbound',
      'Item Matching',
      'Stock Update',
      'Outbound',
      'Monitoring',
    ],
    screenshots: [
      {
        title: 'Inventory Tracker',
        description:
          'Show quantities, item details, stock values, reorder levels, and status.',
      },
      {
        title: 'Inbound Transactions',
        description:
          'Show delivery information and quantity-received entry.',
      },
      {
        title: 'Outbound Transactions',
        description:
          'Show requisition information and stock-deduction flow.',
      },
      {
        title: 'Connected Inventory Logic',
        description:
          'Show how inbound and outbound transactions update the inventory records.',
      },
    ],
  },

  {
    slug: 'learning-management-system',
    title: 'Learning Management System',
    category: 'Web Development',
    type: 'Web Application',
    status: 'Project Build',
    summary:
      'A learning management system designed to organize educational content, user access, learning workflows, and dashboard-based course management.',
    problem:
      'Learning content and user activity need a structured environment where educational resources, access, and course-related information can be managed from one system.',
    solution:
      'I worked on a web-based LMS structure focused on organized learning content, user management, dashboard workflows, and a clearer experience for managing educational activities.',
    stack: [
      'Web Application',
      'LMS',
      'Dashboard',
      'User Management',
    ],
    automations: [
      'User access and management',
      'Learning content organization',
      'Course-related workflows',
      'Dashboard-based navigation',
      'Structured learning experience',
    ],
    workflow: [
      'Login',
      'Dashboard',
      'Courses',
      'Learning Content',
      'User Activity',
    ],
    screenshots: [
      {
        title: 'Dashboard',
        description:
          'Show the main LMS dashboard and navigation experience.',
      },
      {
        title: 'Course View',
        description:
          'Show how courses or learning materials are organized.',
      },
      {
        title: 'Learning Content',
        description:
          'Show the content or lesson experience inside the system.',
      },
      {
        title: 'User Management',
        description:
          'Show how users or learners are organized and managed.',
      },
    ],
  },
]
