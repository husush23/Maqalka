export interface Blog {
    _id: string;
    title: string;
    slug: {
      _type: 'slug';
      current: string;
    };
    body: string; // Assuming the body is a plain text string
    excerpt: string; // New field for the excerpt
    mainImage: {
      asset: {
        _id: string;
        url: string;
      };
    };
  }
  