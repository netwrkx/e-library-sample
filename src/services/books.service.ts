import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Book} from '../models';

// TODO: Add here fake data from google api
const fakeResult = {
"kind": "books#volumes",
"totalItems": 598,
"items": [
{
 "kind": "books#volume",
 "id": "szF_pLGmJTQC",
 "etag": "nkuI6UZKOEE",
 "selfLink": "https://www.googleapis.com/books/v1/volumes/szF_pLGmJTQC",
 "volumeInfo": {
  "title": "Baptizing Harry Potter",
  "subtitle": "A Christian Reading of J.K. Rowling",
  "authors": [
   "Luke Bell"
  ],
  "publisher": "Paulist Press",
  "publishedDate": "2010",
  "description": "The scope and tragedy of the thing : the structure of the series -- More things in heaven and earth : going beyond the normal -- As if a man were author of himself : good against evil -- Be absolute for death : life and death -- Power is made perfect in weakness : power and weakness -- To lay down one's life for one's friends : love and sacrifice -- It is essential that you understand this : freedom and determination -- A pretty boring life : the hidden and the ostentatious -- Telling it like it is : the struggle for truth -- They will see God : purity of heart and purity of blood.",
  "industryIdentifiers": [
   {
    "type": "ISBN_13",
    "identifier": "9781616431150"
   },
   {
    "type": "ISBN_10",
    "identifier": "1616431156"
   }
  ],
  "readingModes": {
   "text": false,
   "image": true
  },
  "pageCount": 224,
  "printType": "BOOK",
  "categories": [
   "Children"
  ],
  "averageRating": 3.0,
  "ratingsCount": 2,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.1.0.0.preview.1",
  "panelizationSummary": {
   "containsEpubBubbles": false,
   "containsImageBubbles": false
  },
  "imageLinks": {
   "smallThumbnail": "http://books.google.com/books/content?id=szF_pLGmJTQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
   "thumbnail": "http://books.google.com/books/content?id=szF_pLGmJTQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com.ua/books?id=szF_pLGmJTQC&printsec=frontcover&dq=harrypotter&hl=&cd=1&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=szF_pLGmJTQC&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-szF_pLGmJTQC"
 },
 "saleInfo": {
  "country": "UA",
  "saleability": "FOR_SALE",
  "isEbook": true,
  "listPrice": {
   "amount": 105.28,
   "currencyCode": "UAH"
  },
  "retailPrice": {
   "amount": 71.59,
   "currencyCode": "UAH"
  },
  "buyLink": "https://play.google.com/store/books/details?id=szF_pLGmJTQC&rdid=book-szF_pLGmJTQC&rdot=1&source=gbs_api",
  "offers": [
   {
    "finskyOfferType": 1,
    "listPrice": {
     "amountInMicros": 1.0528E8,
     "currencyCode": "UAH"
    },
    "retailPrice": {
     "amountInMicros": 7.159E7,
     "currencyCode": "UAH"
    }
   }
  ]
 },
 "accessInfo": {
  "country": "UA",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
   "isAvailable": false
  },
  "pdf": {
   "isAvailable": true,
   "acsTokenLink": "http://books.google.com.ua/books/download/Baptizing_Harry_Potter-sample-pdf.acsm?id=szF_pLGmJTQC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=szF_pLGmJTQC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
 },
 "searchInfo": {
  "textSnippet": "The scope and tragedy of the thing : the structure of the series -- More things in heaven and earth : going beyond the normal -- As if a man were author of himself : good against evil -- Be absolute for death : life and death -- Power is ..."
 }
},
{
 "kind": "books#volume",
 "id": "YvQ_AhkJpBUC",
 "etag": "IrrJsO2yW4w",
 "selfLink": "https://www.googleapis.com/books/v1/volumes/YvQ_AhkJpBUC",
 "volumeInfo": {
  "title": "Harry Potter",
  "subtitle": "",
  "authors": [
   "JK Rowling"
  ],
  "publisher": "Per Noste",
  "publishedDate": "2004-10",
  "description": "The first five Harry Potter books in paperback editions, all in an attractive slip case.",
  "readingModes": {
   "text": false,
   "image": true
  },
  "pageCount": 5,
  "printType": "BOOK",
  "averageRating": 4.5,
  "ratingsCount": 4,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "preview-1.0.0",
  "panelizationSummary": {
   "containsEpubBubbles": false,
   "containsImageBubbles": false
  },
  "imageLinks": {
   "smallThumbnail": "http://books.google.com/books/content?id=YvQ_AhkJpBUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
   "thumbnail": "http://books.google.com/books/content?id=YvQ_AhkJpBUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com.ua/books?id=YvQ_AhkJpBUC&printsec=frontcover&dq=harrypotter&hl=&cd=2&source=gbs_api",
  "infoLink": "http://books.google.com.ua/books?id=YvQ_AhkJpBUC&dq=harrypotter&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter.html?hl=&id=YvQ_AhkJpBUC"
 },
 "saleInfo": {
  "country": "UA",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
 },
 "accessInfo": {
  "country": "UA",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
   "isAvailable": false
  },
  "pdf": {
   "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=YvQ_AhkJpBUC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
 },
 "searchInfo": {
  "textSnippet": "The first five Harry Potter books in paperback editions, all in an attractive slip case."
 }
},
{
 "kind": "books#volume",
 "id": "WV8pZj_oNBwC",
 "etag": "ijCdT/fI+XQ",
 "selfLink": "https://www.googleapis.com/books/v1/volumes/WV8pZj_oNBwC",
 "volumeInfo": {
  "title": "Harry Potter Power",
  "authors": [
   "Julie-Anne Sykley"
  ],
  "publisher": "Interactive Publications",
  "publishedDate": "2010",
  "description": "Uses motifs and situations from the popular 'Harry Potter' series and links them to theories and strategies designed to help young people overcome anxiety, anger, depression and grief.",
  "industryIdentifiers": [
   {
    "type": "ISBN_13",
    "identifier": "9781921479311"
   },
   {
    "type": "ISBN_10",
    "identifier": "1921479310"
   }
  ],
  "readingModes": {
   "text": false,
   "image": true
  },
  "pageCount": 268,
  "printType": "BOOK",
  "categories": [
   "Juvenile Nonfiction"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "1.0.0.0.preview.1",
  "imageLinks": {
   "smallThumbnail": "http://books.google.com/books/content?id=WV8pZj_oNBwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
   "thumbnail": "http://books.google.com/books/content?id=WV8pZj_oNBwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com.ua/books?id=WV8pZj_oNBwC&printsec=frontcover&dq=harrypotter&hl=&cd=3&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=WV8pZj_oNBwC&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-WV8pZj_oNBwC"
 },
 "saleInfo": {
  "country": "UA",
  "saleability": "FOR_SALE",
  "isEbook": true,
  "listPrice": {
   "amount": 326.19,
   "currencyCode": "UAH"
  },
  "retailPrice": {
   "amount": 228.33,
   "currencyCode": "UAH"
  },
  "buyLink": "https://play.google.com/store/books/details?id=WV8pZj_oNBwC&rdid=book-WV8pZj_oNBwC&rdot=1&source=gbs_api",
  "offers": [
   {
    "finskyOfferType": 1,
    "listPrice": {
     "amountInMicros": 3.2619E8,
     "currencyCode": "UAH"
    },
    "retailPrice": {
     "amountInMicros": 2.2833E8,
     "currencyCode": "UAH"
    }
   }
  ]
 },
 "accessInfo": {
  "country": "UA",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
   "isAvailable": false
  },
  "pdf": {
   "isAvailable": true
  },
  "webReaderLink": "http://play.google.com/books/reader?id=WV8pZj_oNBwC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
 },
 "searchInfo": {
  "textSnippet": "&quot;[The author] shows how the universal themes in the Harry Potter series can make your life more positive and healthy and your lifestyle more sustainable.&quot;--Back cover."
 }
},
{
 "kind": "books#volume",
 "id": "06FgsmilUXAC",
 "etag": "MmZR04JFKww",
 "selfLink": "https://www.googleapis.com/books/v1/volumes/06FgsmilUXAC",
 "volumeInfo": {
  "title": "Harry Potter Collector's Handbook",
  "authors": [
   "William Silvester"
  ],
  "publisher": "F+W Media, Inc",
  "publishedDate": "2010-08-19",
  "description": "Action Figures, Books, Ornaments, Costumes, Calendars, Art, Coins, Dolls, Jewelry, Lunch Boxes, Toys, Movies Harry Potter Casts His Spell on Collectors Welcome, Muggles, to the magic, mystery, and merchandise of the wonderful wizarding world of Harry Potter! Harry Potter Collector's Handbook will bewitch you with colorful images and current values of licensed products based on the famous boy wizard and his charming chums and nefarious foes. Just for you, we've conjured: 1,000+ spellbinding listings, pictures, and secondary market values. Information arranged—magically!—in alphabetical order to make it easy to find what you're looking for. A diverse array of collectibles from rare first editions of books worth thousands of dollars to items worth slightly fewer galleons. If you're mesmerized by \"Pottermania,\" you'll never want to depart the enchanting world of witchcraft and wizardry presented in Harry Potter Collector's Handbook.",
  "industryIdentifiers": [
   {
    "type": "ISBN_13",
    "identifier": "9781440216268"
   },
   {
    "type": "ISBN_10",
    "identifier": "1440216266"
   }
  ],
  "readingModes": {
   "text": true,
   "image": true
  },
  "pageCount": 272,
  "printType": "BOOK",
  "categories": [
   "Antiques & Collectibles"
  ],
  "averageRating": 5.0,
  "ratingsCount": 7,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": true,
  "contentVersion": "0.3.3.0.preview.3",
  "panelizationSummary": {
   "containsEpubBubbles": false,
   "containsImageBubbles": false
  },
  "imageLinks": {
   "smallThumbnail": "http://books.google.com/books/content?id=06FgsmilUXAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
   "thumbnail": "http://books.google.com/books/content?id=06FgsmilUXAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com.ua/books?id=06FgsmilUXAC&printsec=frontcover&dq=harrypotter&hl=&cd=4&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=06FgsmilUXAC&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-06FgsmilUXAC"
 },
 "saleInfo": {
  "country": "UA",
  "saleability": "FOR_SALE",
  "isEbook": true,
  "listPrice": {
   "amount": 446.69,
   "currencyCode": "UAH"
  },
  "retailPrice": {
   "amount": 312.68,
   "currencyCode": "UAH"
  },
  "buyLink": "https://play.google.com/store/books/details?id=06FgsmilUXAC&rdid=book-06FgsmilUXAC&rdot=1&source=gbs_api",
  "offers": [
   {
    "finskyOfferType": 1,
    "listPrice": {
     "amountInMicros": 4.4669E8,
     "currencyCode": "UAH"
    },
    "retailPrice": {
     "amountInMicros": 3.1268E8,
     "currencyCode": "UAH"
    }
   }
  ]
 },
 "accessInfo": {
  "country": "UA",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
   "isAvailable": true
  },
  "pdf": {
   "isAvailable": true
  },
  "webReaderLink": "http://play.google.com/books/reader?id=06FgsmilUXAC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
 },
 "searchInfo": {
  "textSnippet": "Harry Potter Collector&#39;s Handbook will bewitch you with colorful images and current values of licensed products based on the famous boy wizard and his charming chums and nefarious foes."
 }
},
{
 "kind": "books#volume",
 "id": "3PGBUrScs-YC",
 "etag": "Jeag8KG1FHY",
 "selfLink": "https://www.googleapis.com/books/v1/volumes/3PGBUrScs-YC",
 "volumeInfo": {
  "title": "Harry Potter and the Bible",
  "subtitle": "The Menace Behind the Magick",
  "authors": [
   "Richard Abanes"
  ],
  "publisher": "Wingspread Pub",
  "publishedDate": "2001-01-01",
  "description": "Is the Harry Potter phenomena harmless fantasy or dangerous fascination? This book catalogs various forms of occultism included in the first four Harry Potter books and warns against spiritual dangers.",
  "industryIdentifiers": [
   {
    "type": "ISBN_10",
    "identifier": "0889652015"
   },
   {
    "type": "ISBN_13",
    "identifier": "9780889652019"
   }
  ],
  "readingModes": {
   "text": false,
   "image": false
  },
  "pageCount": 275,
  "printType": "BOOK",
  "categories": [
   "Religion"
  ],
  "averageRating": 4.0,
  "ratingsCount": 5,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "1.0.0.0.preview.0",
  "imageLinks": {
   "smallThumbnail": "http://books.google.com/books/content?id=3PGBUrScs-YC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
   "thumbnail": "http://books.google.com/books/content?id=3PGBUrScs-YC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com.ua/books?id=3PGBUrScs-YC&q=harrypotter&dq=harrypotter&hl=&cd=5&source=gbs_api",
  "infoLink": "http://books.google.com.ua/books?id=3PGBUrScs-YC&dq=harrypotter&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_the_Bible.html?hl=&id=3PGBUrScs-YC"
 },
 "saleInfo": {
  "country": "UA",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
 },
 "accessInfo": {
  "country": "UA",
  "viewability": "NO_PAGES",
  "embeddable": false,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
   "isAvailable": false
  },
  "pdf": {
   "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=3PGBUrScs-YC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "NONE",
  "quoteSharingAllowed": false
 },
 "searchInfo": {
  "textSnippet": "Is the Harry Potter phenomena harmless fantasy or dangerous fascination? This book catalogs various forms of occultism included in the first four Harry Potter books and warns against spiritual dangers."
 }
},
{
 "kind": "books#volume",
 "id": "abYKXvCwEToC",
 "etag": "mZTXJVrw2VQ",
 "selfLink": "https://www.googleapis.com/books/v1/volumes/abYKXvCwEToC",
 "volumeInfo": {
  "title": "Harry Potter",
  "subtitle": "The Story of a Global Business Phenomenon",
  "authors": [
   "S. Gunelius"
  ],
  "publisher": "Springer",
  "publishedDate": "2008-06-03",
  "description": "The Harry Potter books are the bestselling books of all time. In this fascinating study, Susan Gunelius analyzes every aspect of the brand phenomenon that is Harry Potter. Delving into price wars, box office revenue, and brand values, amongst other things, this is the story of the most incredible brand success there has ever been.",
  "industryIdentifiers": [
   {
    "type": "ISBN_13",
    "identifier": "9780230594104"
   },
   {
    "type": "ISBN_10",
    "identifier": "0230594107"
   }
  ],
  "readingModes": {
   "text": true,
   "image": true
  },
  "pageCount": 194,
  "printType": "BOOK",
  "categories": [
   "Business & Economics"
  ],
  "averageRating": 3.0,
  "ratingsCount": 8,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": true,
  "contentVersion": "2.3.5.0.preview.3",
  "panelizationSummary": {
   "containsEpubBubbles": false,
   "containsImageBubbles": false
  },
  "imageLinks": {
   "smallThumbnail": "http://books.google.com/books/content?id=abYKXvCwEToC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
   "thumbnail": "http://books.google.com/books/content?id=abYKXvCwEToC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com.ua/books?id=abYKXvCwEToC&printsec=frontcover&dq=harrypotter&hl=&cd=6&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=abYKXvCwEToC&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-abYKXvCwEToC"
 },
 "saleInfo": {
  "country": "UA",
  "saleability": "FOR_SALE",
  "isEbook": true,
  "listPrice": {
   "amount": 1319.16,
   "currencyCode": "UAH"
  },
  "retailPrice": {
   "amount": 923.41,
   "currencyCode": "UAH"
  },
  "buyLink": "https://play.google.com/store/books/details?id=abYKXvCwEToC&rdid=book-abYKXvCwEToC&rdot=1&source=gbs_api",
  "offers": [
   {
    "finskyOfferType": 1,
    "listPrice": {
     "amountInMicros": 1.31916E9,
     "currencyCode": "UAH"
    },
    "retailPrice": {
     "amountInMicros": 9.2341E8,
     "currencyCode": "UAH"
    }
   }
  ]
 },
 "accessInfo": {
  "country": "UA",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
  "epub": {
   "isAvailable": true,
   "acsTokenLink": "http://books.google.com.ua/books/download/Harry_Potter-sample-epub.acsm?id=abYKXvCwEToC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "pdf": {
   "isAvailable": true,
   "acsTokenLink": "http://books.google.com.ua/books/download/Harry_Potter-sample-pdf.acsm?id=abYKXvCwEToC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=abYKXvCwEToC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
 },
 "searchInfo": {
  "textSnippet": "The Harry Potter books are the bestselling books of all time. In this fascinating study, Susan Gunelius analyzes every aspect of the brand phenomenon that is Harry Potter."
 }
},
{
 "kind": "books#volume",
 "id": "Gz8t2MttEQUC",
 "etag": "Tr3uixIvOXA",
 "selfLink": "https://www.googleapis.com/books/v1/volumes/Gz8t2MttEQUC",
 "volumeInfo": {
  "title": "Harry Potter and Philosophy",
  "subtitle": "If Aristotle Ran Hogwarts",
  "authors": [
   "David Baggett",
   "Shawn Klein"
  ],
  "publisher": "Open Court Publishing",
  "publishedDate": "2004",
  "description": "Urging readers of the Harry Potter series to dig deeper than wizards, boggarts, and dementors, the authors of this unique guide collect the musings of seventeen philosophers on the series, who cover a wide range of Potter-related philosophical issues, including the difference between good and evil, the ethics of sorcery, and Aristotle's own school for wizards. Original.",
  "industryIdentifiers": [
   {
    "type": "ISBN_13",
    "identifier": "9780812694550"
   },
   {
    "type": "ISBN_10",
    "identifier": "0812694554"
   }
  ],
  "readingModes": {
   "text": true,
   "image": true
  },
  "pageCount": 243,
  "printType": "BOOK",
  "categories": [
   "Fiction"
  ],
  "averageRating": 3.5,
  "ratingsCount": 9,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.1.2.0.preview.3",
  "panelizationSummary": {
   "containsEpubBubbles": false,
   "containsImageBubbles": false
  },
  "imageLinks": {
   "smallThumbnail": "http://books.google.com/books/content?id=Gz8t2MttEQUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
   "thumbnail": "http://books.google.com/books/content?id=Gz8t2MttEQUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com.ua/books?id=Gz8t2MttEQUC&printsec=frontcover&dq=harrypotter&hl=&cd=7&source=gbs_api",
  "infoLink": "http://books.google.com.ua/books?id=Gz8t2MttEQUC&dq=harrypotter&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_Philosophy.html?hl=&id=Gz8t2MttEQUC"
 },
 "saleInfo": {
  "country": "UA",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
 },
 "accessInfo": {
  "country": "UA",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
   "isAvailable": true,
   "acsTokenLink": "http://books.google.com.ua/books/download/Harry_Potter_and_Philosophy-sample-epub.acsm?id=Gz8t2MttEQUC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "pdf": {
   "isAvailable": true,
   "acsTokenLink": "http://books.google.com.ua/books/download/Harry_Potter_and_Philosophy-sample-pdf.acsm?id=Gz8t2MttEQUC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=Gz8t2MttEQUC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
 },
 "searchInfo": {
  "textSnippet": "Urging readers of the Harry Potter series to dig deeper than wizards, boggarts, and dementors, the authors of this unique guide collect the musings of seventeen philosophers on the series, who cover a wide range of Potter-related ..."
 }
},
{
 "kind": "books#volume",
 "id": "bAxsAwAAQBAJ",
 "etag": "5om9ll2Z0MI",
 "selfLink": "https://www.googleapis.com/books/v1/volumes/bAxsAwAAQBAJ",
 "volumeInfo": {
  "title": "Mapping the World of Harry Potter",
  "subtitle": "Science Fiction and Fantasy Writers Explore the Best Selling Fantasy Series of All Time",
  "authors": [
   "Mercedes Lackey",
   "Leah Wilson"
  ],
  "publisher": "BenBella Books",
  "publishedDate": "2006-01",
  "description": "Presents a collection of critiques of the works of J. K. Rowling, covering the topics and characters found in the Harry Potter books.",
  "industryIdentifiers": [
   {
    "type": "ISBN_13",
    "identifier": "9781932100594"
   },
   {
    "type": "ISBN_10",
    "identifier": "1932100598"
   }
  ],
  "readingModes": {
   "text": false,
   "image": false
  },
  "pageCount": 195,
  "printType": "BOOK",
  "categories": [
   "Literary Criticism"
  ],
  "averageRating": 3.5,
  "ratingsCount": 4,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.1.1.0.preview.0",
  "imageLinks": {
   "smallThumbnail": "http://books.google.com/books/content?id=bAxsAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
   "thumbnail": "http://books.google.com/books/content?id=bAxsAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com.ua/books?id=bAxsAwAAQBAJ&printsec=frontcover&dq=harrypotter&hl=&cd=8&source=gbs_api",
  "infoLink": "http://books.google.com.ua/books?id=bAxsAwAAQBAJ&dq=harrypotter&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Mapping_the_World_of_Harry_Potter.html?hl=&id=bAxsAwAAQBAJ"
 },
 "saleInfo": {
  "country": "UA",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
 },
 "accessInfo": {
  "country": "UA",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
   "isAvailable": false
  },
  "pdf": {
   "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=bAxsAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
 },
 "searchInfo": {
  "textSnippet": "Presents a collection of critiques of the works of J. K. Rowling, covering the topics and characters found in the Harry Potter books."
 }
},
{
 "kind": "books#volume",
 "id": "LiWrXUHgnL8C",
 "etag": "RFrXB0AAHwo",
 "selfLink": "https://www.googleapis.com/books/v1/volumes/LiWrXUHgnL8C",
 "volumeInfo": {
  "title": "Females and Harry Potter",
  "subtitle": "Not All that Empowering",
  "authors": [
   "Ruthann Mayes-Elma"
  ],
  "publisher": "Rowman & Littlefield",
  "publishedDate": "2006-01-01",
  "description": "Uses critical discourse analysis, feminist theory, and critical theory to examine the female characters in J.K. Rowling's Harry Potter series, focusing on such themes as validating/enabling, intelligence, and mothering.",
  "industryIdentifiers": [
   {
    "type": "ISBN_10",
    "identifier": "074253779X"
   },
   {
    "type": "ISBN_13",
    "identifier": "9780742537798"
   }
  ],
  "readingModes": {
   "text": true,
   "image": true
  },
  "pageCount": 155,
  "printType": "BOOK",
  "categories": [
   "Literary Criticism"
  ],
  "averageRating": 2.5,
  "ratingsCount": 10,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "1.0.1.0.preview.3",
  "imageLinks": {
   "smallThumbnail": "http://books.google.com/books/content?id=LiWrXUHgnL8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
   "thumbnail": "http://books.google.com/books/content?id=LiWrXUHgnL8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com.ua/books?id=LiWrXUHgnL8C&printsec=frontcover&dq=harrypotter&hl=&cd=9&source=gbs_api",
  "infoLink": "http://books.google.com.ua/books?id=LiWrXUHgnL8C&dq=harrypotter&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Females_and_Harry_Potter.html?hl=&id=LiWrXUHgnL8C"
 },
 "saleInfo": {
  "country": "UA",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
 },
 "accessInfo": {
  "country": "UA",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
   "isAvailable": true,
   "acsTokenLink": "http://books.google.com.ua/books/download/Females_and_Harry_Potter-sample-epub.acsm?id=LiWrXUHgnL8C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "pdf": {
   "isAvailable": true,
   "acsTokenLink": "http://books.google.com.ua/books/download/Females_and_Harry_Potter-sample-pdf.acsm?id=LiWrXUHgnL8C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=LiWrXUHgnL8C&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
 },
 "searchInfo": {
  "textSnippet": "Uses critical discourse analysis, feminist theory, and critical theory to examine the female characters in J.K. Rowling&#39;s Harry Potter series, focusing on such themes as validating/enabling, intelligence, and mothering."
 }
},
{
 "kind": "books#volume",
 "id": "Wj-qCbg3yWsC",
 "etag": "IJdAm1TdqZs",
 "selfLink": "https://www.googleapis.com/books/v1/volumes/Wj-qCbg3yWsC",
 "volumeInfo": {
  "title": "Charmed Knits",
  "subtitle": "Projects for Fans of Harry Potter",
  "authors": [
   "Alison Hansel"
  ],
  "publisher": "John Wiley & Sons",
  "publishedDate": "2007-04-10",
  "industryIdentifiers": [
   {
    "type": "ISBN_10",
    "identifier": "0470165804"
   },
   {
    "type": "ISBN_13",
    "identifier": "9780470165805"
   }
  ],
  "readingModes": {
   "text": false,
   "image": true
  },
  "pageCount": 176,
  "printType": "BOOK",
  "categories": [
   "Crafts & Hobbies"
  ],
  "averageRating": 4.0,
  "ratingsCount": 10,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": true,
  "contentVersion": "3.1.0.0.preview.1",
  "imageLinks": {
   "smallThumbnail": "http://books.google.com/books/content?id=Wj-qCbg3yWsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
   "thumbnail": "http://books.google.com/books/content?id=Wj-qCbg3yWsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com.ua/books?id=Wj-qCbg3yWsC&printsec=frontcover&dq=harrypotter&hl=&cd=10&source=gbs_api",
  "infoLink": "http://books.google.com.ua/books?id=Wj-qCbg3yWsC&dq=harrypotter&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Charmed_Knits.html?hl=&id=Wj-qCbg3yWsC"
 },
 "saleInfo": {
  "country": "UA",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
 },
 "accessInfo": {
  "country": "UA",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
   "isAvailable": false
  },
  "pdf": {
   "isAvailable": true,
   "acsTokenLink": "http://books.google.com.ua/books/download/Charmed_Knits-sample-pdf.acsm?id=Wj-qCbg3yWsC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=Wj-qCbg3yWsC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
 },
 "searchInfo": {
  "textSnippet": "Charmed Knits offers dozens of patterns for items that evoke the mystique of Harry Potter - a Wizard Robe, an Invisibility Shawl, a Quidditch Sweater, Ron&#39;s Ragg Raglan, a Clock Blanket, Harry Christmas Ornaments, and more."
 }
}
]
};
/*
 * @class Represets Book Service
 */
@Injectable()
export class BooksService {
  constructor(private http: Http) {
  }

  /*
   *
   * Fetch books from google api
   * @param {string} str - represent string will be searched
   * @param {number} page - represent
   * @returns {Observable}
   *
   */
  public get (): Observable<Book[]> {
    // TODO: Implement me (later)
    // return this.http.get('url/to/books');
    return Observable.of(fakeResult).map(result => {
    let booksArray = [];
    for(let book of result.items) booksArray.push(new Book(book));
      // TODO: Perform actions on result
      // TODO: Get books info for it and wrap each item into Book model
      // TODO: Return array of Book models
      return booksArray;
    });
  }
}
