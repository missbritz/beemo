import { gql } from "@apollo/client"

export const getMyProfile = gql`
    query{
        myProfile {
            data {
                attributes {
                    MainTitle
                    MyIntro {
                        type
                        children {
                            text
                            type
                        }
                    }
                    KitIcons {
                        Label
                        Url
                    }
                    SocialMediaLinks {
                        Label
                        Url
                    }
                }
            }
        }
    }
`
