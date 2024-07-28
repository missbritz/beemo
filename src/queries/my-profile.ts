import { gql } from "@apollo/client"

export const getMyProfile = gql`
    query{
        myProfile {
            data {
            id
            attributes {
                MainTitle
                MyIntro
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