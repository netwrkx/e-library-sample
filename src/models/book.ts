export class Book {
  id: string;
  title: string;
  authors: Array<string>;
  rating: Rating;
  categories: Array<string>;
  description: string;
  image: Image;
  pages: number;
  published: Published;
}

interface Image {
  small: string,
  thumbnail: string
}

interface Rating {
  average: number,
  count: number
}

interface Published {
  date: Date,
  by: string
}
