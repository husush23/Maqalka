export interface Blog {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  body: any;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
  author: {
    name: string;
  };
  publishedAt: string;
<<<<<<< HEAD
  excerpt: string;
=======
  excerpt: string
>>>>>>> a034e8f5b272319d0e5f1b893a5a1d8b9622106f
}
