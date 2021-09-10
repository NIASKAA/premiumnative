import {gql} from '@apollo/client'

export const GET_ALL_HG = gql`
{
    getHG {
        _id
        gunplaName
        image
        series
        releaseDate
        price
    }
}
`;

export const GET_ALL_RG = gql`
{
    getRG {
        _id
        gunplaName
        image
        series
        releaseDate
        price
    }
}
`;

export const GET_ALL_MG = gql`
{
    getMG {
        _id
        gunplaName
        image
        series
        releaseDate
        price
    }
}
`;

export const GET_ALL_PG = gql`
{
    getPG {
        _id
        gunplaName
        image
        series
        releaseDate
        price
    }
}
`;

export const GET_ALL_SD = gql`
{
    getSD {
        _id
        gunplaName
        image
        series
        releaseDate
        price
    }
}
`;

export const GET_ALL_CONVERGES = gql`
{
    getConverges {
        _id
        gunplaName
        image
        series
        releaseDate
        price
    }
}
`;

export const GET_ALL_OTHERS = gql`
{
    getOthers {
        _id
        gunplaName
        image
        series
        releaseDate
        price
    }
}
`;

export const QUERY_USER = gql`
    query {
        user {
            _id
            username
            email
            haveCollected
        }
    }
`;

export const GET_SAVE_CONVERGE = gql`
    query {
        getUserConverge{
            username
            email
            gotConverges {
                _id
                gunplaName
                series
                image
                releaseDate
                price
            }
        }
    }
`;

export const GET_SAVE_HIGHGRADE = gql`
    query {
        getUserHighGrade{
            username
            email
            gotHighGrades {
                _id
                gunplaName
                series
                image
                releaseDate
                price
            }
        }
    }
`;

export const GET_SAVE_REALGRADE = gql`
    query {
        getUserRealGrade{
            username
            email
            gotRealGrades {
                _id
                gunplaName
                series
                image
                releaseDate
                price
            }
        }
    }
`;

export const GET_SAVE_MASTERGRADE = gql`
    query {
        getUserMasterGrade{
            username
            email
            gotMasterGrades {
                _id
                gunplaName
                series
                image
                releaseDate
                price
            }
        }
    }
`;

export const GET_SAVE_PERFECTGRADE = gql`
    query {
        getUserPerfectGrade{
            username
            email
            gotPerfectGrades {
                _id
                gunplaName
                series
                image
                releaseDate
                price
            }
        }
    }
`;

export const GET_SAVE_SDGRADE = gql`
    query {
        getUserSDGrade{
            username
            email
            gotSDGrades {
                _id
                gunplaName
                series
                image
                releaseDate
                price
            }
        }
    }
`;

export const GET_SAVE_OTHER = gql`
    query {
        getUserOther {
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

export const GET_CONVERGE_WISH = gql`
    query {
        getUserConvergeWishlist{
            username
            email
            convergeWish {
                _id
                gunplaName
                series
                image
                releaseDate
                price
            }
        }
    }
`;

export const GET_HIGHGRADE_WISH = gql`
    query {
        getUserHighWishlist{
            username
            email
            highGradeWish {
                _id
                gunplaName
                series
                image
                releaseDate
                price
            }
        }
    }
`;

export const GET_REALGRADE_WISH = gql`
    query {
        getUserRealWishlist{
            username
            email
            realGradeWish {
                _id
                gunplaName
                series
                image
                releaseDate
                price
            }
        }
    }
`;

export const GET_MASTERGRADE_WISH = gql`
    query {
        getUserMasterWishlist{
            username
            email
            masterGradeWish {
                _id
                gunplaName
                series
                image
                releaseDate
                price
            }
        }
    }
`;

export const GET_PERFECTGRADE_WISH = gql`
    query {
        getUserPerfectWishlist{
            username
            email
            perfectGradeWish {
                _id
                gunplaName
                series
                image
                releaseDate
                price
            }
        }
    }
`;

export const GET_SDGRADE_WISH = gql`
    query {
        getUserSDWishlist{
            username
            email
            sdGradeWish {
                _id
                gunplaName
                series
                image
                releaseDate
                price
            }
        }
    }
`;

export const GET_OTHER_WISH = gql`
    query {
        getUserOtherWishlist {
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