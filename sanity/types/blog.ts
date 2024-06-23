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
  excerpt: string
}
