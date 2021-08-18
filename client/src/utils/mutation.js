import { gql } from 'graphql-tag';

const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token user {
                _id
                username
            }
        }
    }
`;

export default LOGIN_USER;

const ADD_USER = gql`
    mutation addUser($username, email: $email, password: $password) {
        addUser(username: $username, email: $email, password: $password) {
            token user {
                _id
                username
            }
        }
    }
    `;

export default ADD_USER;

const SAVE_BOOK = gql`
    mutation saveBook($bookData: BookInput!) {
        saveBook(bookdata: $boodata){
            _id
            username
            email
            savedBooks {
                bookId
                authors 
                image
                description
                title
                link
            }
        }
    }
    `;

export default SAVE_BOOK;

const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            _id
            username 
            email
            savedBooks {
                bookId
                authors
                image
                description
                title
                link
            }
        }
    }
    `;

export default REMOVE_BOOK;