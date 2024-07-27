import { gql } from "@apollo/client"

const getMyProfile = gql`
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

export {
    getMyProfile
}