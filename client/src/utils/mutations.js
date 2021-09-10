import {gql} from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_CONVERGE = gql`
    mutation saveConverge($name: String!, $id: ID) {
        saveConverge(name: $name id: $id) {
            username
            email
            gotConverges {
                _id
                gunplaName
                series
                releaseDate
                price
            }
        }
    }
`;

export const SAVE_HIGHGRADE = gql`
    mutation saveHighGrade($name: String!, $id: ID) {
        saveHighGrade(name: $name id: $id) {
            username
            email
            gotHighGrades {
                _id
                gunplaName
                series
                releaseDate
                price
            }
        }
    }
`;

export const SAVE_REALGRADE = gql`
    mutation saveRealGrade($name: String!, $id: ID) {
        saveRealGrade(name: $name id: $id) {
            username
            email
            gotRealGrades {
                _id
                gunplaName
                series
                releaseDate
                price
            }
        }
    }
`;

export const SAVE_MASTERGRADE = gql`
    mutation saveMasterGrade($name: String!, $id: ID) {
        saveMasterGrade(name: $name id: $id) {
            username
            email
            gotMasterGrades {
                _id
                gunplaName
                series
                releaseDate
                price
            }
        }
    }
`;

export const SAVE_PERFECTGRADE = gql`
    mutation savePerfectGrade($name: String!, $id: ID) {
        savePerfectGrade(name: $name id: $id) {
            username
            email
            gotPerfectGrades {
                _id
                gunplaName
                series
                releaseDate
                price
            }
        }
    }
`;

export const SAVE_SDGRADE = gql`
    mutation saveSDGrade($name: String!, $id: ID) {
        saveSDGrade(name: $name id: $id) {
            username
            email
            gotSDGrades {
                _id
                gunplaName
                series
                releaseDate
                price
            }
        }
    }
`;

export const SAVE_OTHERS = gql`
    mutation saveOthers($name: String!, $id: ID) {
        saveOthers(name: $name id: $id) {
            username
            email
            gotRE100s {
                _id
                gunplaName
                series
                releaseDate
                price
            }
        }
    }
`;

export const CONVERGE_WISHLIST = gql`
    mutation convergeWishlist($name: String! $id: ID) {
        convergeWishlist(name: $name id: $id) {
            username
            email
            convergeWish {
                _id
                gunplaName
                image
                series
                releaseDate
                price
            }
        }
    }
`;

export const HIGHGRADE_WISHLIST = gql`
    mutation highGradeWishlist($name: String! $id: ID) {
        highGradeWishlist(name: $name id: $id) {
            username
            email
            highGradeWish {
                _id
                gunplaName
                image
                series
                releaseDate
                price
            }
        }
    }
`;

export const REALGRADE_WISHLIST = gql`
    mutation realGradeWishlist($name: String! $id: ID) {
        realGradeWishlist(name: $name id: $id) {
            username
            email
            realGradeWish {
                _id
                gunplaName
                image
                series
                releaseDate
                price
            }
        }
    }
`;

export const MASTERGRADE_WISHLIST = gql`
    mutation masterGradeWishlist($name: String! $id: ID) {
        masterGradeWishlist(name: $name id: $id) {
            username
            email
            masterGradeWish {
                _id
                gunplaName
                image
                series
                releaseDate
                price
            }
        }
    }
`;

export const PERFECTGRADE_WISHLIST = gql`
    mutation perfectGradeWishlist($name: String! $id: ID) {
        perfectGradeWishlist(name: $name id: $id) {
            username
            email
            perfectGradeWish {
            _id
            gunplaName
            image
            series
            releaseDate
            price
            }
        }
    }
`;

export const SDGRADE_WISHLIST = gql`
    mutation SDGradeWishlist($name: String! $id: ID) {
        SDGradeWishlist(name: $name id: $id) {
            username
            email
            sdGradeWish {
                _id
                gunplaName
                image
                series
                releaseDate
                price
            }
        }
    }
`;

export const OTHER_WISHLIST = gql`
    mutation otherWishlist($name: String! $id: ID) {
        otherWishlist(name: $name id: $id) {
            username
            email
            re100Wish {
                _id
                gunplaName
                image
                series
                releaseDate
                price
            }
        }
    }
`;

export const DELETE_CONVERGE_SAVE = gql`
    mutation deleteConvergeSave($convergeID: ID! $id: ID){
        deleteConvergeSave(convergeID: $convergeID id: $id) {
            username
            email
            gotConverges {
                _id
                gunplaName
                image
                series
                price
                releaseDate
            }
        }
    }
`;

export const DELETE_HIGHGRADE_SAVE = gql`
    mutation deleteHighGradeSave($highGradeID: ID! $id: ID){
        deleteHighGradeSave(highGradeID: $highGradeID id: $id) {
            username
            email
            gotHighGrades {
                _id
                gunplaName
                image
                series
                price
                releaseDate
            }
        }
    }
`;

export const DELETE_REALGRADE_SAVE = gql`
    mutation deleteRealGradeSave($realGradeID: ID! $id: ID){
        deleteRealGradeSave(realGradeID: $realGradeID id: $id) {
            username
            email
            gotRealGrades {
                _id
                gunplaName
                image
                series
                price
                releaseDate
            }
        }
    }
`;

export const DELETE_MASTERGRADE_SAVE = gql`
    mutation deleteMasterGradeSave($masterGradeID: ID! $id: ID){
        deleteMasterGradeSave(masterGradeID: $masterGradeID id: $id) {
            username
            email
            gotMasterGrades {
                _id
                gunplaName
                image
                series
                price
                releaseDate
            }
        }
    }
`;

export const DELETE_PERFECTGRADE_SAVE = gql`
    mutation deletePerfectGradeSave($perfectGradeID: ID! $id: ID){
        deletePerfectGradeSave(perfectGradeID: $perfectGradeID id: $id) {
            username
            email
            gotPerfectGrades {
                _id
                gunplaName
                image
                series
                price
                releaseDate
            }
        }
    }
`;

export const DELETE_SDGRADE_SAVE = gql`
    mutation deleteSDGradeSave($sdGradeID: ID! $id: ID){
        deleteSDGradeSave(sdGradeID: $sdGradeID id: $id) {
            username
            email
            gotSDGrades {
                _id
                gunplaName
                image
                series
                price
                releaseDate
            }
        }
    }
`;

export const DELETE_OTHER_SAVE = gql`
    mutation deleteOtherSave($otherID: ID! $id: ID) {
        deleteOtherSave(otherID: $otherID id: $id) {
            username
            email
            gotRE100s {
                _id
                gunplaName
                image
                series
                releaseDate
                price
            }
        }
    }
`;

export const DELETE_CONVERGE_WISHLIST = gql`
    mutation deleteConvergeWishlist($convergeID: ID! $id: ID){
        deleteConvergeWishlist(convergeID: $convergeID id: $id) {
            username
            email
            convergesWish {
                _id
                gunplaName
                image
                series
                price
                releaseDate
            }
        }
    }
`;

export const DELETE_HIGHGRADE_WISHLIST = gql`
    mutation deleteHighGradeWishlist($highGradeID: ID! $id: ID){
        deleteHighGradeWishlist(highGradeID: $highGradeID id: $id) {
            username
            email
            highGradeWish {
                _id
                gunplaName
                image
                series
                price
                releaseDate
            }
        }
    }
`;

export const DELETE_REALGRADE_WISHLIST = gql`
    mutation deleteRealGradeWishlist($realGradeID: ID! $id: ID){
        deleteRealGradeWishlist(realGradeID: $realGradeID id: $id) {
            username
            email
            realGradeWish {
                _id
                gunplaName
                image
                series
                price
                releaseDate
            }
        }
    }
`;

export const DELETE_MASTERGRADE_WISHLIST = gql`
    mutation deleteMasterGradeWishlist($masterGradeID: ID! $id: ID){
        deleteMasterGradeWishlist(masterGradeID: $masterGradeID id: $id) {
            username
            email
            masterGradeWish {
                _id
                gunplaName
                image
                series
                price
                releaseDate
            }
        }
    }
`;

export const DELETE_PERFECTGRADE_WISHLIST = gql`
    mutation deletePerfectGradeWishlist($perfectGradeID: ID! $id: ID){
        deletePerfectGradeWishlist(perfectGradeID: $perfectGradeID id: $id) {
            username
            email
            perfectGradeWish {
                _id
                gunplaName
                image
                series
                price
                releaseDate
            }
        }
    }
`;

export const DELETE_SDGRADE_WISHLIST = gql`
    mutation deleteSDGradeWishlist($sdGradeID: ID! $id: ID){
        deleteSDGradeWishlist(sdGradeID: $sdGradeID id: $id) {
            username
            email
            sdGradeWish{
                _id
                gunplaName
                image
                series
                price
                releaseDate
            }
        }
    }
`;

export const DELETE_OTHER_WISHLIST = gql`
    mutation deleteOtherWishlist($otherID: ID! $id: ID) {
        deleteOtherWishlist(otherID: $otherID id: $id) {
            username
            email
            re100Wish {
                _id
                gunplaName
                image
                series
                releaseDate
                price
            }
        }
    }
`;