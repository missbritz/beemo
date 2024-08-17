interface TextNode {
    text: string;
    type: 'text';
    bold?: boolean;
    underline?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    code?: boolean;
}

interface LinkNode {
    url: string;
    type: 'link';
    children: TextNode[];
}

interface ListItemNode {
    type: 'list-item';
    children: (TextNode | LinkNode)[];
}

interface ImageFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null | string;
    size: number;
    width: number;
    height: number;
}

interface ImageNode {
    type: 'image';
    image: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        size: number;
        width: number;
        height: number;
        caption: string;
        formats: {
            large?: ImageFormat;
            small?: ImageFormat;
            medium?: ImageFormat;
            thumbnail?: ImageFormat;
        };
        provider: string;
        createdAt: string;
        updatedAt: string;
        previewUrl: null | string;
        alternativeText: string;
        provider_metadata: null | any;
    };
    children: TextNode[];
}

interface BlockNode {
    type: 'heading' | 'paragraph' | 'list' | 'quote';
    level?: number;
    format?: 'unordered' | 'ordered';
    children: (TextNode | LinkNode | ListItemNode | ImageNode)[];
}

type RichTextInput = BlockNode[];