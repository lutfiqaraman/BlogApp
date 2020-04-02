import { Article } from './article';

export const ARTICLES: Article[] = [
    {
        id: 1,
        title: 'Country Article',
        content: '',
        description: 'An article about the country',
        key: 'water-artcle',
        date: new Date(),
        imageUrl: 'https://source.unsplash.com/weekly?country'
    },
    {
        id: 2,
        title: 'City Article',
        content: '',
        description: 'An article about the city',
        key: 'city-artcle',
        date: new Date(),
        imageUrl: 'https://source.unsplash.com/weekly?city'
    }
];
