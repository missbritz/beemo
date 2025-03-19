import casual from 'casual'

export default function MyProfile () {
    return {
        data: {
            id: casual.uuid,
            attributes: {
                MainTitle: casual.title,
                MyIntro: [
                    {
                        type: "paragraph",
                        children: [
                            { type: "text", text: "Hello, I'm a software developer!" },
                            { type: "text", text: "I specialize in frontend development." }
                        ]
                    },
                    {
                        type: "paragraph",
                        children: [
                            { type: "text", text: "Another test paragraph" },
                            { type: "text", text: "I specialize in frontend development." }
                        ]
                    }
                ],
                SocialMediaLinks: [
                    { Label: "LinkedIn", Url: "https://linkedin.com" },
                    { Label: "Twitter", Url: "https://twitter.com" }
                ],
                KitIcons: [
                    { Label: "GitHub", Url: "https://github.com" },
                    { Label: "React", Url: "https://reactjs.org" }
                ]
            }
        }
    }
}