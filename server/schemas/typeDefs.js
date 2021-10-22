const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type ProfileData {
        _id: ID
        username: String
        email: String
        gotConverges: [Converge]
        gotHighGrades: [HighGrade]
        gotRealGrades: [RealGrade]
        gotMasterGrades: [MasterGrade]
        gotPerfectGrades: [PerfectGrade]
        gotSDGrades: [SDGrade]
        gotRE100s: [RE100]
        gotEnsemble: [Ensemble]
        gotGFrame: [GFrame]
        convergeWish: [Converge]
        realGradeWish: [RealGrade]
        highGradeWish: [HighGrade]
        masterGradeWish: [MasterGrade]
        perfectGradeWish: [PerfectGrade]
        sdGradeWish: [SDGrade]
        re100Wish: [RE100]
        ensembleWish: [Ensemble]
        gFrameWish: [GFrame]
    }

    type HighGrade {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: String
        price: Float
    }

    type RealGrade {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: String
        price: Float
    }

    type MasterGrade {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: String
        price: Float
    }

    type PerfectGrade {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: String
        price: Float
    }

    type SDGrade {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: String
        price: Float
    }

    type Converge {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: String
        price: Float
    }

    type RE100 {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: String
        price: Float
    }

    type Ensemble {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: String
        price: Float
    }

    type GFrame {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: String
        price: Float
    }

    type Auth {
      token: ID
      user: ProfileData
    }

    type Query {
        getHG: [HighGrade]
        getRG: [RealGrade]
        getMG: [MasterGrade]
        getPG: [PerfectGrade]
        getSD: [SDGrade]
        getConverges: [Converge]
        getOthers: [RE100]
        getEnsemble: [Ensemble]
        getGFrame: [GFrame]
        user: ProfileData
        getUserConverge: ProfileData
        getUserHighGrade: ProfileData
        getUserRealGrade: ProfileData
        getUserMasterGrade: ProfileData
        getUserPerfectGrade: ProfileData
        getUserSDGrade: ProfileData
        getUserOther: ProfileData
        getUserEnsemble: ProfileData
        getUserGFrame: ProfileData
        getUserConvergeWishlist: ProfileData
        getUserHighWishlist: ProfileData
        getUserRealWishlist: ProfileData
        getUserMasterWishlist: ProfileData
        getUserPerfectWishlist: ProfileData
        getUserSDWishlist: ProfileData
        getUserOtherWishlist: ProfileData
        getUserEnsembleWishlist: ProfileData
        getUserGFrameWishlist: ProfileData
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String): Auth
        saveConverge(name: String! id: ID): ProfileData
        saveHighGrade(name: String! id: ID): ProfileData
        saveRealGrade(name: String! id: ID): ProfileData
        saveMasterGrade(name: String! id: ID): ProfileData
        savePerfectGrade(name: String! id: ID): ProfileData
        saveSDGrade(name: String! id: ID): ProfileData
        saveOthers(name: String! id: ID): ProfileData
        saveEnsemble(name: String! id: ID): ProfileData
        saveGFrame(name: String! id: ID): ProfileData
        convergeWishlist(name: String! id: ID): ProfileData
        highGradeWishlist(name: String! id: ID): ProfileData
        realGradeWishlist(name: String! id: ID): ProfileData
        masterGradeWishlist(name: String! id: ID): ProfileData
        perfectGradeWishlist(name: String! id: ID): ProfileData
        SDGradeWishlist(name: String! id: ID): ProfileData
        otherWishlist(name: String! id: ID): ProfileData
        ensembleWishlist(name: String! id: ID): ProfileData
        gFrameWishlist(name: String! id: ID): ProfileData
        deleteConvergeSave(convergeID: ID! id: ID): ProfileData
        deleteHighGradeSave(highGradeID: ID! id: ID): ProfileData
        deleteRealGradeSave(realGradeID: ID! id: ID): ProfileData
        deleteMasterGradeSave(masterGradeID: ID! id: ID): ProfileData
        deletePerfectGradeSave(perfectGradeID: ID! id: ID): ProfileData
        deleteSDGradeSave(sdGradeID: ID! id: ID): ProfileData
        deleteOtherSave(otherID: ID! id: ID): ProfileData
        deleteEnsembleSave(ensembleID: ID! id: ID): ProfileData
        deleteGFrameSave(GFrameID: ID! id: ID): ProfileData
        deleteConvergeWishlist(convergeID: ID! id:ID): ProfileData
        deleteHighGradeWishlist(highGradeID: ID! id:ID): ProfileData
        deleteRealGradeWishlist(realGradeID: ID! id: ID): ProfileData
        deleteMasterGradeWishlist(masterGradeID: ID! id: ID): ProfileData
        deletePerfectGradeWishlist(perfectGradeID: ID! id: ID): ProfileData
        deleteSDGradeWishlist(SDGradeID: ID! id: ID): ProfileData
        deleteOtherWishlist(otherID: ID! id: ID): ProfileData
        deleteEnsembleWishlist(ensembleID: ID! id: ID): ProfileData
        deleteGFrameWishlist(GFrameID: ID! id: ID): ProfileData
    }
`;
module.exports = typeDefs;
