/*
 * @class Represents Book
 * @param {string} id
 * @param {string} title
 * @param [{string}] authors
 * @param {Rating} - interface, consist {number} average and {number} count
 * @param [{string}] categories
 * @param {string} description
 * @param {Image} - interface, consist {string} small and {string} thumbnail
 * @param {number} pages;
 * @param {Published} - interface, consist {Date} date and {string} by
 */
export class Book {
  public id: string;
  public title: string;
  public authors: Array<string>;
  public rating: Rating;
  public categories: Array<string>;
  public description: string;
  public image: Image;
  public pages: number;
  public published: Published;
  /*
   * @constructor Create a book.
   */
  constructor(data: any) {
    this.id = data.id;
    this.title = data.volumeInfo && data.volumeInfo.title;
    this.authors = data.volumeInfo && data.volumeInfo.authors;
    this.rating = {
      average: data.volumeInfo && data.volumeInfo.averageRating,
      count: data.volumeInfo && data.volumeInfo.ratingsCount
    };
    this.categories = data.volumeInfo && data.volumeInfo.categories;
    this.description = data.volumeInfo && data.volumeInfo.description;
    this.image = {
      small: data.volumeInfo && data.volumeInfo.imageLinks && data.volumeInfo.imageLinks.smallThumbnail,
      thumbnail: data.volumeInfo && data.volumeInfo.imageLinks && data.volumeInfo.imageLinks.thumbnail
    };
    this.pages = data.volumeInfo && data.volumeInfo.pages;
    this.published = {
      by: data.volumeInfo && data.volumeInfo.publisher,
      date: data.volumeInfo && data.volumeInfo.publishedDate
    };
  }
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
