import { Post } from "@/type";
import casual from "casual";

export default function generatePosts(): Post[] {
    return Array.from({ length: 20 }, (_, i) => {
        const title = casual.title;
        const category = casual.random_element(['my-category', 'tech', 'lifestyle', 'coding']);
        const slug = `${title.toLowerCase().replace(/\s+/g, '-')}-${i}`;
        return {
            id: `post-${i + 1}`,
            attributes: {
                Title: title,
                Published: casual.date(),
                Content: [
                    {
                        type: 'paragraph',
                        children: [
                            { type: 'text', text: casual.description }
                        ]
                    },
                    {
                        type: 'paragraph',
                        children: [
                            { type: 'text', text: casual.description }
                        ]
                    }
                ],
                Category: category,
                Summary: casual.description,
                Slug: slug,
                MetaTitle: title,
                MetaKeywords: casual.words(3).split(' ').join(', '),
                MetaDescription: casual.description,
            }
        };
    });
};