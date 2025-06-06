export interface NewsItem {
  category: string
  date: string
  month: string
  title: string
  image: string
  span?: string
}

export const newsData: NewsItem[] = [
  {
    category: 'Art',
    date: '31',
    month: 'Jul',
    title: 'Fuga ea ullam earum assumenda, beatae labore eligendi.',
    image:
      'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    span: 'md:col-span-2 lg:row-span-2 lg:h-full'
  },
  {
    category: 'Politics',
    date: '04',
    month: 'Aug',
    title: 'Autem sunt tempora mollitia magnam non voluptates',
    image:
      'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    category: 'Health',
    date: '01',
    month: 'Aug',
    title: 'Inventore reiciendis aliquam excepturi',
    image:
      'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    category: 'Science',
    date: '28',
    month: 'Jul',
    title: 'Officiis mollitia dignissimos commodi optio vero animi',
    image: 'https://source.unsplash.com/random/242x320'
  },
  {
    category: 'Sports',
    date: '19',
    month: 'Jul',
    title: 'Doloribus sit illo necessitatibus architecto exercitationem enim',
    image: 'https://source.unsplash.com/random/243x320'
  }
]
