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
  screenshots: {
    title: string
    description: string
    image?: string
  }[]
  loomUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'pengpeng-ai-expense-tracker',
    title: 'Pengpeng — The Smart AI Expense Tracker',
    category: 'App Development',
    type: 'React Native Mobile Application',
    status: 'Completed Portfolio Build',
    summary:
      'A personalized, local-first personal finance app for managing balances, wallet budgets, bills, subscriptions, savings goals, reports, and spending insights through a polished mobile experience.',
    problem:
      'Everyday financial activity can become difficult to manage when balances, wallet budgets, recurring payments, savings goals, and spending history are spread across separate tools. Traditional expense trackers also record what happened without helping users understand the patterns behind their financial behavior.',
    solution:
      'I designed and built Pengpeng as a connected personal-finance system using React Native and Expo. The app centralizes Total Balance, category wallets, transactions, bills and subscriptions, savings goals, payday settings, Auto Split, reports, and financial preferences. Pengpeng adds a local insight layer that retrieves saved financial context, analyzes spending patterns and budget risk, and turns the user’s financial data into clearer, more personalized guidance.',
    stack: [
      'React Native',
      'Expo SDK 57',
      'JavaScript',
      'AsyncStorage',
      'React Navigation',
      'Local RAG',
      'Data Analytics',
    ],
    automations: [
      'First-install experience with branded splash, detailed App Tour, financial profile onboarding, and automatic routing to Home',
      'Total Balance and wallet management with deposits, withdrawals, transfers, monthly caps, and transaction histories',
      'Bills and subscriptions with due dates, payment history, Autopay/Pause settings, filters, and reminders',
      'Payday income and Auto Split logic for percentage-based wallet allocation',
      'Savings goals with target amounts, contribution schedules, monthly payments, and progress tracking',
      'Pengpeng Local Insights using saved financial context, retrieval, spending-pattern analysis, and budget-risk calculations',
      'Monthly financial reports with PDF generation and sharing',
      'Persistent local financial data using AsyncStorage across app sessions',
    ],
    workflow: [
      'Splash & App Tour',
      'Financial Profile',
      'Overview Dashboard',
      'Wallet Allocation',
      'Expenses & Bills',
      'Savings Goals',
      'Pengpeng Insights',
      'Monthly Reports',
    ],
    screenshots: [
      {
        title: 'Pengpeng Splash',
        description:
          'A branded Tap to Continue launch experience that introduces Pengpeng before the user enters the app.',
        image: '/projects/pengpeng/01-splash.png',
      },
      {
        title: 'Overview Dashboard',
        description:
          'Total Balance, monthly spending, Today spending, wallet budget categories, latest transactions, and direct access to Pengpeng.',
        image: '/projects/pengpeng/02-overview.png',
      },
      {
        title: 'Wallet Management',
        description:
          'Category wallets with balances, monthly caps, budget progress, deposits, withdrawals, transfers, and wallet-level controls.',
        image: '/projects/pengpeng/03-wallets.png',
      },
      {
        title: 'Bills & Subscriptions',
        description:
          'Upcoming totals, due dates, recurring payments, filters, payment actions, subscription states, and bill management.',
        image: '/projects/pengpeng/04-bills.png',
      },
      {
        title: 'Pengpeng Local Insights',
        description:
          'A personalized financial snapshot, Today’s Note, quick questions, free-text input, and locally generated spending insights.',
        image: '/projects/pengpeng/05-pengpeng-ai.png',
      },
      {
        title: 'Profile & Savings Goals',
        description:
          'Financial preferences, savings-goal progress, contribution planning, reports, profile editing, and App Tour access.',
        image: '/projects/pengpeng/06-profile-goals.png',
      },
      {
        title: 'Interactive App Tour',
        description:
          'A detailed guided walkthrough that highlights controls and explains the purpose of the app’s major features.',
        image: '/projects/pengpeng/07-app-tour.png',
      },
      {
        title: 'Financial Profile Onboarding',
        description:
          'First-run profile setup for personal details, income and payday settings, spending habits, and personalization preferences.',
        image: '/projects/pengpeng/08-profile-onboarding.png',
      },
    ],
    githubUrl: 'https://github.com/honghaei/pengpeng-ai-expense-tracker',
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
    stack: ['React', 'TypeScript', 'JavaScript', 'PHP', 'MySQL', 'Responsive UI'],
    automations: [
      'Authentication and login flow',
      'Company-specific navigation',
      'Employee information organization',
      'Responsive dashboard interface',
      'Backend login and data integration',
    ],
    workflow: ['Login', 'Company Selection', 'Dashboard', 'Employee Management', 'Navigation'],
    screenshots: [
      { title: 'Login Screen', description: 'Show the authentication entry point and login experience.' },
      { title: 'Dashboard', description: 'Show the main HR workspace and administrative interface.' },
      { title: 'Company Navigation', description: 'Show the company filters, branded navigation, and active states.' },
      { title: 'Employee Management', description: 'Show the employee information and management interface.' },
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
    stack: ['HTML', 'CSS', 'JavaScript', 'CRUD', 'Inventory Logic', 'Responsive Tables'],
    automations: [
      'Inbound stock updates',
      'Outbound stock deductions',
      'Item and supplier matching',
      'Stock-value calculations',
      'Reorder and stock-status tracking',
    ],
    workflow: ['Inventory', 'Inbound', 'Item Matching', 'Stock Update', 'Outbound', 'Monitoring'],
    screenshots: [
      { title: 'Inventory Tracker', description: 'Show quantities, item details, stock values, reorder levels, and status.' },
      { title: 'Inbound Transactions', description: 'Show delivery information and quantity-received entry.' },
      { title: 'Outbound Transactions', description: 'Show requisition information and stock-deduction flow.' },
      { title: 'Connected Inventory Logic', description: 'Show how inbound and outbound transactions update the inventory records.' },
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
    stack: ['Web Application', 'LMS', 'Dashboard', 'User Management'],
    automations: [
      'User access and management',
      'Learning content organization',
      'Course-related workflows',
      'Dashboard-based navigation',
      'Structured learning experience',
    ],
    workflow: ['Login', 'Dashboard', 'Courses', 'Learning Content', 'User Activity'],
    screenshots: [
      { title: 'Dashboard', description: 'Show the main LMS dashboard and navigation experience.' },
      { title: 'Course View', description: 'Show how courses or learning materials are organized.' },
      { title: 'Learning Content', description: 'Show the content or lesson experience inside the system.' },
      { title: 'User Management', description: 'Show how users or learners are organized and managed.' },
    ],
  },
]
