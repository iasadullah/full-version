type SearchData = {
  id: string
  name: string
  url: string
  excludeLang?: boolean
  icon: string
  section: string
  shortcut?: string
}

const data: SearchData[] = [
  {
    id: '2',
    name: 'Analytics Dashboard',
    url: '/dashboards/analytics',
    icon: 'ri-bar-chart-line',
    section: 'Dashboards'
  },
  {
    id: '4',
    name: 'Academy Dashboard',
    url: '/dashboards/academy',
    icon: 'ri-book-open-line',
    section: 'Dashboards'
  },

  {
    id: '22',
    name: 'Academy - Dashboard',
    url: '/apps/academy/dashboard',
    icon: 'ri-book-open-line',
    section: 'Apps'
  },
  {
    id: '23',
    name: 'Academy - My Courses',
    url: '/apps/academy/my-courses',
    icon: 'ri-list-unordered',
    section: 'Apps'
  },
  {
    id: '24',
    name: 'Academy - Course Details',
    url: '/apps/academy/course-details',
    icon: 'ri-play-circle-line',
    section: 'Apps'
  },
  {
    id: '28',
    name: 'Chat',
    url: '/apps/chat',
    icon: 'ri-wechat-line',
    section: 'Apps'
  },
  {
    id: '29',
    name: 'Calendar',
    url: '/apps/calendar',
    icon: 'ri-calendar-line',
    section: 'Apps'
  },
  {
    id: '30',
    name: 'Kanban',
    url: '/apps/kanban',
    icon: 'ri-drag-drop-line',
    section: 'Apps'
  },

  {
    id: '35',
    name: 'User List',
    url: '/apps/user/list',
    icon: 'ri-file-user-line',
    section: 'Apps'
  },
  {
    id: '36',
    name: 'User View',
    url: '/apps/user/view',
    icon: 'ri-file-list-2-line',
    section: 'Apps'
  },
  {
    id: '37',
    name: 'Roles',
    url: '/apps/roles',
    icon: 'ri-shield-user-line',
    section: 'Apps'
  },
  {
    id: '38',
    name: 'Permissions',
    url: '/apps/permissions',
    icon: 'ri-lock-unlock-line',
    section: 'Apps'
  },
  {
    id: '39',
    name: 'User Profile',
    url: '/pages/user-profile',
    icon: 'ri-user-3-line',
    section: 'Pages'
  },
  {
    id: '40',
    name: 'Account Settings',
    url: '/pages/account-settings',
    icon: 'ri-user-settings-line',
    section: 'Pages'
  },
  {
    id: '41',
    name: 'FAQ',
    url: '/pages/faq',
    icon: 'ri-question-line',
    section: 'Pages'
  },

  {
    id: '43',
    name: 'Coming Soon',
    url: '/pages/misc/coming-soon',
    icon: 'ri-time-line',
    section: 'Pages'
  },
  {
    id: '44',
    name: 'Under Maintenance',
    url: '/pages/misc/under-maintenance',
    icon: 'ri-settings-2-line',
    section: 'Pages'
  },
  {
    id: '45',
    name: 'Page Not Found - 404',
    url: '/pages/misc/404-not-found',
    icon: 'ri-error-warning-line',
    section: 'Pages'
  },
  {
    id: '46',
    name: 'Not Authorized - 401',
    url: '/pages/misc/401-not-authorized',
    icon: 'ri-user-forbid-line',
    section: 'Pages'
  }
]

export default data
