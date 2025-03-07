export const typeDefs = `#graphql
    scalar JSON

    type Query {
        posts: getPostData
        myProfile: getMyProfileData
        lab: getLab
    }

    type PaginationInput {
        limit: Int
        start: Int
    }

    type getPostData {
        data: [JSON]
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
        MyIntro: [JSON]
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

    type getLab {
        ProjectName: String
        Tags: String
        ProjectUrl: String
        ProjectDescription: String
        ProjectImage: ImageDef
    }

    type ImageDef {
        data: ImageAttr
    }

    type ImageAttr {
        id: String
        attributes: ImageDef
    }

    type ImageDef {
        name: String,
        alternativeText: String,
        caption: String,
        width: Int,
        height: Int,
        formats: JSON,
        hash: String,
        ext: String,
        mime: String,
        size: Int,
        url: String
    }
`;