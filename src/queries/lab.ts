import { gql } from "@apollo/client"

export const getLab = gql`
    query{
        labs (sort: "publishedAt:desc"){
            data {
                id
                attributes {
                    ProjectName
                    ProjectDescription
                    ProjectUrl
                    ProjectImage {
                        data {
                            attributes {
                                name
                                alternativeText
                                caption
                                width
                                height
                                formats
                                hash
                                ext
                                mime
                                size
                                url
                            }
                        }
                    }
                    Tags
                }
            }
        }
    }
`