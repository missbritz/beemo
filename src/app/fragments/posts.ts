import { gql } from '@apollo/client';

export const POST_FIELDS = gql`
    fragment PostFields on posts {
        data {
            id
            attributes {
                Title
                Published
                Content
                Category
                Summary
                Slug
            }
        }
    }
`;