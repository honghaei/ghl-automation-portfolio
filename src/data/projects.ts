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
  liveUrl?: string
  coverImage?: string
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
      'Pengpeng is a smart personal finance companion that connects expense tracking, category budgets, bills, payday planning and savings goals with AI-style insights grounded in locally saved financial history.',
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
    coverImage: '/projects/pengpeng/pengpeng-cover.png',
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
    coverImage: '/projects/hrms/02-dashboard.png',
    heroIcon: '/projects/hrms/IPARCELPLUS.png',
    heroIconVariant: 'brand',
    statusDescription:
      'A completed full-stack HRMS case study covering database-backed CRUD, multi-company workflows, timekeeping, leave review, reporting, and administrative tools.',
    evidenceDescription:
      'Final screens from the working HRMS build, showing the complete administrator workflow from login and workforce management through reporting and account settings.',
    evidenceLayout: 'desktop',
  },

  {
    slug: 'lakbay-3d-philippines-tourism-map',
    title: 'Lakbay — Interactive 3D Philippines Tourism Map',
    category: 'Web Development',
    type: '3D Tourism Discovery Web Application',
    status: 'Completed & Live on Netlify',
    summary:
      'A deployed 3D tourism discovery platform where visitors can explore Philippine provinces, discover curated attractions on an interactive map, view destination details and photo galleries, and save places to a personal wishlist.',
    problem:
      'Planning trips across the Philippines often means jumping between disconnected maps, travel articles, and photo collections. It can be difficult to understand where attractions are located, explore nearby provinces, or keep a practical shortlist of places to visit.',
    solution:
      'I designed, developed, and deployed Lakbay using Next.js, React, TypeScript, CesiumJS, and Supabase. I combined a terrain-backed 3D view of the Philippines with province boundaries, location search, attraction pins, category filters, destination profiles, credited photo galleries, and a browser-persistent wishlist. I also built a structured destination-data pipeline with source tracking and review statuses so the public experience can distinguish curated attractions from unverified map data. GitHub and Netlify provide the production deployment workflow.',
    stack: [
      'Next.js 16',
      'React',
      'TypeScript',
      'CesiumJS',
      'Supabase',
      'OpenStreetMap',
      'Netlify',
      'GitHub',
    ],
    automations: [
      'Immersive 3D Philippines map with satellite imagery, terrain, geographic boundaries, and province labels',
      'Province and city discovery through interactive selection, camera navigation, and search',
      'Tourist destination markers with categories for Nature, Beaches, History, Culture, and Adventure',
      'Destination preview cards with photo carousels, summaries, and links to full attraction pages',
      'Detailed destination pages with location coordinates, Google Maps directions, and photographic attribution',
      'Personal wishlist with save/remove controls and browser-persistent favorites',
      'Supabase-backed destination directory with source metadata, review states, and controlled public visibility',
      'Resumable OpenStreetMap ingestion and local-only preview tools to support destination curation',
      'Production deployment through a private GitHub repository and Netlify, with protected environment variables',
    ],
    workflow: [
      'Open 3D Map',
      'Find a Province',
      'Filter Attractions',
      'Select a Map Pin',
      'Explore Destination',
      'Save to Wishlist',
      'Plan the Visit',
    ],
    screenshots: [
      {
        title: 'Interactive 3D Philippines Tourism Map',
        description:
          'A nationwide interactive 3D map of the Philippines with province borders, discovery controls, and a tourism introduction.',
        image: '/projects/lakbay/01-nationwide-3d-philippines-map.webp',
      },
      {
        title: 'Province Exploration & Destination Discovery',
        description:
          'Palawan selected on the 3D map, with Puerto Princesa Subterranean River highlighted in the destination preview panel.',
        image: '/projects/lakbay/02-palawan-destination-discovery.webp',
      },
      {
        title: 'Historical Destination Profile',
        description:
          'The redesigned Barasoain Church destination page, with a heritage overview, a large credited photo gallery, and visitor planning information.',
        image: '/projects/lakbay/03-barasoain-church-destination.webp',
      },
      {
        title: 'Destination Details & Photo Gallery',
        description:
          'The redesigned Puerto Princesa Subterranean River page, featuring destination information, scenic photography, and a photo gallery.',
        image: '/projects/lakbay/04-puerto-princesa-photo-gallery.webp',
      },
      {
        title: 'Personal Travel Wishlist',
        description:
          'The redesigned wishlist displaying saved visits to Barasoain Church and Puerto Princesa Subterranean River, including photos and search.',
        image: '/projects/lakbay/05-personal-travel-wishlist.webp',
      },
    ],
    liveUrl: 'https://lakbay-3d-philippines.netlify.app/',
    coverImage: '/projects/lakbay/01-nationwide-3d-philippines-map.webp',
    heroIcon: '/projects/lakbay/lakbay-logo.png',
    heroIconVariant: 'brand',
    statusDescription:
      'A fully built and deployed Next.js tourism application, from geographic data modeling and interactive Cesium mapping to curated destination pages, photo galleries, and wishlist functionality.',
    evidenceDescription:
      'Screenshots captured from the deployed Lakbay application, showing its 3D map, province-level attraction discovery, destination profiles, and saved-place experience.',
    evidenceLayout: 'desktop',
  },

  {
    slug: 'campusflow-learning-management-system',
    title: 'CampusFlow — Learning Management System',
    category: 'Web Development',
    type: 'Full-Stack Learning Management System',
    status: 'Completed Local Demo Build',
    summary:
      'A role-based academic platform that combines registrar-verified enrollment, student and instructor workspaces, subject modules, file previews, learning progress, certificates, and messaging in one responsive system.',
    problem:
      'Academic learning tools can leave important tasks disconnected: validating enrollment eligibility, assigning the right subjects, sharing course materials, tracking module completion, and issuing certificates. Students and instructors need clear, purpose-built experiences rather than relying on a single generic dashboard.',
    solution:
      'I developed CampusFlow as a role-based academic enrollment and learning management platform using Laravel, PHP, Blade, and MySQL. I implemented registrar-verified placement, connected approved enrollment to subject access, and developed learning modules that let instructors publish materials while students preview, download, and track completion. I created student and instructor dashboards, integrated certificate management and in-app messaging, and refined the experience for desktop and mobile. I tested the end-to-end student and instructor journeys in a separate local environment with realistic fictional academic records, without affecting the shared project.',
    stack: [
      'Laravel',
      'PHP',
      'Blade',
      'MySQL',
      'JavaScript',
      'Responsive CSS',
      'Role-Based Access',
    ],
    automations: [
      'Distinct student and instructor dashboards, with assigned subjects and learning or teaching metrics',
      'Registrar-reviewed academic placement and eligible-section enrollment flow',
      'Five populated Grade 10 subjects in the demonstration environment with 20 published learning modules',
      'Instructor module management with publishing controls and course-specific downloadable resources',
      'Protected, in-page PDF preview and original-file download actions for learning materials',
      'Module completion tracking, per-subject progress bars, and consolidated student learning progress',
      'Instructor-issued certificate administration with a student certificate gallery, inline preview, and downloads',
      'Student–instructor messaging with correct sender and recipient display',
      'Shared navigation, responsive layouts, and mobile-friendly student profile and course pages',
      'Isolated local CampusFlow database and fictional demonstration records for portfolio validation',
    ],
    workflow: [
      'Sign In by Role',
      'Academic Placement Review',
      'Verified Enrollment',
      'Access Assigned Subjects',
      'Preview Learning Files',
      'Track Module Progress',
      'Receive Certificates',
      'Message Instructors',
    ],
    screenshots: [
      {
        title: 'Student Dashboard & Learning Overview',
        description:
          'The enrolled student workspace shows five subjects, 20 published modules, learning activity, and personalized course progress.',
        image: '/projects/campusflow/01-student-dashboard.webp',
      },
      {
        title: 'Five Subjects with Individual Progress',
        description:
          'A populated Grade 10 course directory featuring subject-level progress for Mathematics, Science, English, Filipino, and Araling Panlipunan.',
        image: '/projects/campusflow/02-five-subjects.webp',
      },
      {
        title: 'Course Learning Hub',
        description:
          'Published learning modules, a module detail panel, access to lesson files, and student completion controls.',
        image: '/projects/campusflow/03-learning-modules.webp',
      },
      {
        title: 'In-Page Learning File Preview',
        description:
          'A protected PDF learning guide displayed inside the CampusFlow interface with separate close and download actions.',
        image: '/projects/campusflow/04-inline-pdf-preview.webp',
      },
      {
        title: 'Instructor Dashboard & Teaching Activity',
        description:
          'An instructor-specific dashboard with assigned subjects, enrolled learners, published modules, drafts, and recent module activity.',
        image: '/projects/campusflow/05-instructor-dashboard.webp',
      },
      {
        title: 'Instructor Module Management',
        description:
          'Instructor workspace for working with subject-specific modules, published files, and module editing tools.',
        image: '/projects/campusflow/06-instructor-module-management.webp',
      },
      {
        title: 'Registrar-Verified Academic Enrollment',
        description:
          'Academic placement approval and the eligible-section enrollment journey, keeping grade assignment under registrar review.',
        image: '/projects/campusflow/07-registrar-approved-enrollment.webp',
      },
      {
        title: 'Certificate Gallery',
        description:
          'The student certificate collection displays a real certificate thumbnail, issue details, and view or download actions.',
        image: '/projects/campusflow/08-certificate-gallery.webp',
      },
      {
        title: 'Inline Certificate Preview',
        description:
          'A certificate of achievement for the fictional student profile, previewed in a secure overlay without leaving CampusFlow.',
        image: '/projects/campusflow/09-certificate-preview.webp',
      },
      {
        title: 'Student–Instructor Inbox',
        description:
          'Course-related messaging with conversations between the fictional student and instructor accounts.',
        image: '/projects/campusflow/10-course-inbox.webp',
      },
      {
        title: 'CampusFlow Login Experience',
        description:
          'A redesigned, responsive two-panel authentication screen matching the CampusFlow visual identity.',
        image: '/projects/campusflow/11-login.webp',
      },
    ],
    coverImage: '/projects/campusflow/01-student-dashboard.webp',
    heroIcon: '/projects/campusflow/campusflow-logo.png',
    heroIconVariant: 'brand',
    statusDescription:
      'A completed local portfolio demonstration of the CampusFlow enhancements, including role-specific interfaces, verified enrollment, learning modules, file handling, messaging, and certificates. Not a public school deployment.',
    evidenceDescription:
      'Screenshots from an isolated local CampusFlow environment using fictional student and instructor accounts and example academic records. They document implemented interface and workflow behavior rather than a live institutional deployment.',
    evidenceLayout: 'desktop',
  },
]
