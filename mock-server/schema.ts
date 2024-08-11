export const typeDefs = `#graphql
    type Query {
        query: getTypes
    }

    type getTypes {
        posts: getPosts
        myProfile: getMyProfile
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
        MyIntro: String
        SocialMediaLinks: getSocialMedia
        KitIcons: getKitIcons
    }

    type getSocialMedia {
        Label: String
        Url: String
    }

    type getKitIcons {
        Label: String
        Url: String
    }
`;