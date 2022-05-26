export interface navigationItem {
  label: string
  icon?: string
  name: string
  params?: Record<string, string>
  children?: navigationItem[]
}

export const navigation: navigationItem[] = [
  {
    label: 'Home',
    name: 'main.home',
    icon: 'home',
  },
  {
    label: 'About',
    name: 'main.about',
    icon: 'user',
  },
]
