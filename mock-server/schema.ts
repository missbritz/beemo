export const typeDefs = `#graphql
    type Query {
        posts: getPostData
        myProfile: getMyProfileData
    }

    type getPostData {
        data: [getPosts]
    }
    
    type getMyProfileData {
        data: getMyProfile
    }

    type getPosts {
        id: String
        attributes: getPostsAttributes
    }

    type getPostsAttributes {
        Title: String
        Published: String
        Content: String
        Category: String
        Summary: String
        Slug: String
        MetaTitle: String
        MetaKeywords: String
        MetaDescription: String
    }

    type getMyProfile {
        id: String
        attributes: getProfileAttributes
    }

    type getProfileAttributes {
        MainTitle: String
        MyIntro: [blockType]
        SocialMediaLinks: [getSocialMedia]
        KitIcons: [getKitIcons]
    }

    type blockType {
        type: String
        children: [getMyText]
    }

    type getMyText {
        type: String
        text: String
    }

    type getSocialMedia {
        Label: String
        Url: String
    }

    type getKitIcons {
        Label: String
        Url: String
    }

    type getParagraphChildren {
        type: BlockTypes
        level: Int
        format: String
        children: String
        url: String
        text: String
    }

    enum BlockTypes {
        heading
        paragraph
        list
        quote
    }
`;