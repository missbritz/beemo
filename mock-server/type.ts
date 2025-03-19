export interface PostAttributes {
    Title: string;
    Published: string;
    Content: {
        type: string;
        children: {
            type: string;
            text: string;
        }[];
    }[];
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

export interface LabAttributes {
    ProjectName: string;
    Tags: string;
    ProjectUrl: string;
    ProjectDescription: string;
    ProjectImage: {
        data: {
            id: string;
            attributes: {
                name: string;
                alternativeText: string;
                caption: string;
                width: number;
                height: number;
                formats: {
                    thumbnail: {
                        name: string;
                        hash: string;
                        ext: string;
                        mime: string;
                        width: number;
                        height: number;
                        size: number;
                        url: string;
                    };
                    small: {
                        name: string;
                        hash: string;
                        ext: string;
                        mime: string;
                        width: number;
                        height: number;
                        size: number;
                        url: string;
                    };
                };
                hash: string;
                ext: string;
                mime: string;
                size: number;
                url: string;
            };
        };
    };
}

export interface LabItem {
    id: string;
    attributes: LabAttributes;
}

export interface LabArgs {
    sort?: string;
}