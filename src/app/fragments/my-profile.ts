import { gql } from '@apollo/client';

export const MYPROFILE_FIELDS = gql`
    fragment myProfileFields on myProfile {
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
`;