export interface PostAttributes {
    Title: string;
    Published: string;
    Content: string;
    Category: string;
    Summary: string;
    Slug: string;
    MetaTitle: string;
    MetaKeywords: string;
    MetaDescription: string;
}

export interface Post {
    id: string;
    attributes: PostAttributes;
}

interface PaginationInput {
    limit?: number;
    start?: number;
}

export interface FilterInput {
    Slug?: { eq: string };
    Category?: { eq: string };
}

export interface PostsArgs {
    sort?: string;
    pagination?: PaginationInput;
    filters?: FilterInput;
}