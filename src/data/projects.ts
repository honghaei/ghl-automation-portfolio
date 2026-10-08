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
  heroIcon?: string
  heroIconVariant?: 'avatar' | 'brand'
  statusDescription?: string
  evidenceDescription?: string
  evidenceLayout?: 'mobile' | 'desktop'
}

export const projects: Project[] = [
  {
    slug: 'pengpeng-ai-expense-tracker',
    title: 'Pengpeng — The Smart AI Expense Tracker',
    category: 'App Development',
    type: 'React Native Mobile Application',
    status: 'Completed Mobile App',
    summary:
      'Pengpeng is a personalized AI-powered expense tracker built with React Native and Expo, combining wallet budgeting, bills, savings goals, reports, and local financial insights in one polished mobile experience.',
    problem:
      'Most expense trackers record transactions but leave users to interpret the numbers themselves. Balances, wallet budgets, recurring bills, savings goals, and spending history can also become fragmented across different tools, making it harder to understand overall financial behavior.',
    solution:
      'I designed and built Pengpeng as a connected mobile finance system using React Native and Expo. It brings balances, category wallets, transactions, bills and subscriptions, payday allocation, savings goals, reports, and financial preferences into one experience. A local retrieval and analytics layer gives Pengpeng access to saved financial context so it can surface spending patterns, budget risk, and personalized insights without requiring a cloud AI service.',
    stack: [
      'React Native',
      'Expo SDK 57',
      'JavaScript',
      'Local RAG',
      'AsyncStorage',
      'React Navigation',
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
    heroIcon: '/projects/pengpeng/pengpeng-avatar.png',
    heroIconVariant: 'avatar',
    statusDescription:
      'A complete mobile app case study covering product design, financial workflows, local AI insights, onboarding, implementation, and the final working experience.',
    evidenceDescription:
      'Selected clean screens from the working mobile build, covering the core financial flows and guided onboarding experience.',
    evidenceLayout: 'mobile',
  },

  {
    slug: 'iparcel-hrms',
    title: 'IParcel HRMS',
    category: 'Web Development',
    type: 'Full-Stack HR Management System',
    status: 'Completed Full-Stack Project',
    summary:
      'A multi-company Human Resource Management System for centralizing employee records, attendance, leave review, departments, announcements, reporting, and HR administration across IParcel Plus, IPXpress, Swift, and Nagali.',
    problem:
      'Managing employee records and day-to-day HR operations across multiple companies becomes difficult when attendance, leave requests, departments, announcements, and reporting are handled through separate or manual processes. HR needed one consistent workspace that could organize workforce data while still allowing company-specific filtering and administrative control.',
    solution:
      'I built IParcel HRMS as a full-stack administrative system using React, TypeScript, Vite, PHP, and MySQL. The application centralizes employee CRUD, attendance logging, leave approvals, department management, company announcements, reports, and account settings in one responsive interface. A PHP backend connects the React frontend to MySQL, while searchable tables, filters, dashboard metrics, activity history, and export tools make daily HR work easier to manage.',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'PHP',
      'MySQL',
      'Axios',
      'XAMPP',
    ],
    automations: [
      'Administrator authentication with a dedicated HR login experience and protected workspace flow',
      'Multi-company workforce dashboard with employee totals, attendance status, leave counts, company headcount, milestones, and recent HR activity',
      'Employee management with searchable records, company/status/location filters, profile viewing, editing, photo support, initials fallback, print view, and a four-step Add Employee form',
      'Attendance management with manual Time In and Time Out, date/time controls, remarks, attendance statuses, daily roster filters, total-hours tracking, and CSV export',
      'Leave request review with Pending, Approved, and Rejected states, company/type/date filters, request details, approval or rejection actions, and HR review notes',
      'Department management with add, edit, delete, department-head assignment, employee counts, search, and company filtering',
      'Announcement management with create, edit, delete, audience targeting, priority levels, expiration dates, active/expired filtering, and highlighted important notices',
      'Reporting workspace with Employee Directory, Attendance, Leave Requests, Department Headcount, and Birthday & Anniversary reports plus preview, print/PDF, and CSV export actions',
      'Account settings with administrator profile details and password-change validation',
    ],
    workflow: [
      'Admin Login',
      'Workforce Dashboard',
      'Employee Management',
      'Attendance Tracking',
      'Leave Review',
      'Departments',
      'Announcements',
      'Reports & Settings',
    ],
    screenshots: [
      {
        title: 'HR Administrator Login',
        description:
          'A clean split-screen login experience introducing the multi-company HR workspace and administrator authentication flow.',
        image: '/projects/hrms/01-login.png',
      },
      {
        title: 'Workforce Dashboard',
        description:
          'A live HR overview showing employee totals, attendance, approved leave, pending requests, company headcount, and recent administrative activity.',
        image: '/projects/hrms/02-dashboard.png',
      },
      {
        title: 'Employee Directory',
        description:
          'Searchable employee records with company, status, and location filters, employee details, profile actions, and the Add Employee workflow.',
        image: '/projects/hrms/03-employees.png',
      },
      {
        title: 'Attendance Management',
        description:
          'Daily timekeeping with employee selection, Time In/Time Out controls, remarks, attendance status metrics, roster filters, and export functionality.',
        image: '/projects/hrms/04-attendance.png',
      },
      {
        title: 'Leave Request Review',
        description:
          'HR review workspace for filtering requests, checking leave details, tracking approval states, and recording reviewer information.',
        image: '/projects/hrms/05-leave-requests.png',
      },
      {
        title: 'Department Management',
        description:
          'Multi-company department cards with department-head assignment, employee counts, search, filtering, and CRUD controls.',
        image: '/projects/hrms/06-departments.png',
      },
      {
        title: 'Company Announcements',
        description:
          'Centralized company updates with audience targeting, priority labels, active status, expiration handling, and edit/delete controls.',
        image: '/projects/hrms/07-announcements.png',
      },
      {
        title: 'HR Reports',
        description:
          'Report selection and preview for employee, attendance, leave, department, and milestone data with print/PDF and CSV export actions.',
        image: '/projects/hrms/08-reports.png',
      },
      {
        title: 'Administrator Settings',
        description:
          'Account profile information and password management for the HR administrator.',
        image: '/projects/hrms/09-settings.png',
      },
    ],
    githubUrl: 'https://github.com/honghaei/IParcel-HRMS',
    heroIcon: '/projects/hrms/IPARCELPLUS.png',
    heroIconVariant: 'brand',
    statusDescription:
      'A completed full-stack HRMS case study covering database-backed CRUD, multi-company workflows, timekeeping, leave review, reporting, and administrative tools.',
    evidenceDescription:
      'Final screens from the working HRMS build, showing the complete administrator workflow from login and workforce management through reporting and account settings.',
    evidenceLayout: 'desktop',
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
