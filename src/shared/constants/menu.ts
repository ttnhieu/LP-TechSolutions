export type SubMenuItemType = {
  title: string
  url: string
}
type MenuSectionType = {
  title: string
  url?: string
  id?: string
  is_active: boolean
  items: SubMenuItemType[]
}
const MENU: MenuSectionType[] = [
  {
    title: 'Home',
    id: '#home',
    is_active: false,
    items: []
  },
  {
    title: 'Skills',
    id: '#skills',
    is_active: false,
    items: []
  },
  {
    title: 'Services',
    id: '#services',
    is_active: false,
    items: []
  },
  {
    title: 'Optimization',
    id: '#optimization',
    is_active: false,
    items: []
  },
  {
    title: 'Portfolio',
    id: '#portfolio',
    is_active: false,
    items: []
  },
  {
    title: 'Workflow',
    id: '#workflow',
    is_active: false,
    items: []
  },
  {
    title: 'Testimonials',
    id: '#testimonials',
    is_active: false,
    items: []
  },
  {
    title: 'Pricing',
    id: '#pricing',
    is_active: false,
    items: []
  },
  {
    title: 'Contact',
    id: '#contact',
    is_active: false,
    items: []
  },
  {
    title: 'FAQ',
    id: '#faq',
    is_active: false,
    items: []
  }
]

export { MENU }
