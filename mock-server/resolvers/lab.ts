import { LabItem } from "@/type";
import casual from "casual";

export default function generateLab(): LabItem[] {
    return Array.from({ length: 5 }, (_, i) => ({
        id: `lab-${i + 1}`,
        attributes: {
            ProjectName: casual.title,
            Tags: casual.word,
            ProjectUrl: casual.url,
            ProjectDescription: casual.description,
            ProjectImage: {
                data: {
                    id: casual.uuid,
                    attributes: {
                        name: casual.word,
                        alternativeText: casual.word,
                        caption: casual.word,
                        width: casual.integer(100, 1000),
                        height: casual.integer(100, 1000),
                        formats: {
                            thumbnail: {
                                name: casual.word,
                                hash: casual.uuid,
                                ext: '.jpg',
                                mime: 'image/jpeg',
                                width: 200,
                                height: 200,
                                size: casual.integer(1000, 5000),
                                url: 'https://placehold.co/600x400'
                            },
                            small: {
                                name: casual.word,
                                hash: casual.uuid,
                                ext: '.jpg',
                                mime: 'image/jpeg',
                                width: 300,
                                height: 200,
                                size: casual.integer(2000, 8000),
                                url: 'https://placehold.co/600x400'
                            }
                        },
                        hash: casual.uuid,
                        ext: '.jpg',
                        mime: 'image/jpeg',
                        size: casual.integer(1000, 5000),
                        url: 'https://placehold.co/600x400'
                    }
                }
            }
        }
    }));
}