import casual from 'casual'

function MyProfile () {
    return {
        MainTitle: casual.name,
        MyIntro: [
            { 
                type: 'paragraph',
                children: [
                    {
                        text: casual.description,
                        type: 'text'
                    },
                ]
            }
        ],
        SocialMediaLinks: [
            {
                Label: casual.word,
                Url: casual.url
            }
        ],
        KitIcons: [
            {
                Label: casual.word,
                Url: casual.url
            }
        ]
    }
}

export default MyProfile