import { gql } from "@apollo/client"

export const getMyProfile = gql`
    query {
        myProfile {
            data {
            attributes {
                KitIcons {
                    Label
                    Url
                }
                MainTitle
                MyIntro {
                    type
                    children {
                        type
                        text
                    }
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
