import { gql } from "@apollo/client"

export const getMyProfile = gql`
    query{
        myProfile {
            data {
            id
            attributes {
                MainTitle
                MyIntro {
                    type
                    text
                }
                SocialMediaLinks {
                    Label
                    Url
                }
                KitIcons {
                    Label
                    Url
                }
            }
            }
        }
    }
`