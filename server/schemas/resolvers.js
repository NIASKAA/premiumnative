const {AuthenticationError} = require('apollo-server-express')
const {HighGrade, RealGrade, MasterGrade, PerfectGrade, Converge, SDGrade, ProfileData, RE100, Ensemble, GFrame} = require('../models')
const {signToken} = require('../utils/auth')

const resolvers = {
    Query: {
        getHG: async () => {
            return await HighGrade.find({});
        },
        getRG: async () => {
            return await RealGrade.find({});
        },
        getMG: async () => {
            return await MasterGrade.find({});
        },
        getPG: async () => {
            return await PerfectGrade.find({});
        },
        getSD: async () => {
            return await SDGrade.find({});
        },
        getConverges: async () => {
            return await Converge.find({});
        },
        getOthers: async () => {
            return await RE100.find({})
        },
        getEnsemble: async () => {
            return await Ensemble.find({})
        },
        getGFrame: async () => {
            return await GFrame.find({})
        },
        user: async (parent, args, context) => {
            if(context.user) {
                const user = await ProfileData.findById(context.user.id)
                return user;
            }
            throw new AuthenticationError("Not Logged In")
        },
        getUserConverge: async (parent, args, context) => {
            if(context.user) {
                const userConverges = await ProfileData.findById(context.user._id).populate('gotConverges').populate('gunplaName')
                return userConverges
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserHighGrade: async (parent, args, context) => {
            if(context.user) {
                const userHighGrade = await ProfileData.findById(context.user._id).populate('gotHighGrades').populate('gunplaName')
                return userHighGrade
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserRealGrade: async (parent, args, context) => {
            if(context.user) {
                const userRealGrade = await ProfileData.findById(context.user._id).populate('gotRealGrades').populate('gunplaName')
                return userRealGrade
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserMasterGrade: async (parent, args, context) => {
            if(context.user) {
                const userMasterGrade = await ProfileData.findById(context.user._id).populate('gotMasterGrades').populate('gunplaName')
                return userMasterGrade
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserPerfectGrade: async (parent, args, context) => {
            if(context.user) {
                const userPerfectGrade = await ProfileData.findById(context.user._id).populate('gotPerfectGrades').populate('gunplaName')
                return userPerfectGrade
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserSDGrade: async (parent, args, context) => {
            if(context.user) {
                const userSDGrade = await ProfileData.findById(context.user._id).populate('gotSDGrades').populate('gunplaName')
                return userSDGrade
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserOther: async (parent, args, context) => {
            if(context.user) {
                const userOther = await ProfileData.findById(context.user._id).populate('gotRE100s').populate('gunplaName')
                return userOther
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserEnsemble: async (parent, args, context) => {
            if(context.user) {
                const userEnsemble = await ProfileData.findById(context.user._id).populate('gotEnsemble').populate('gunplaName')
                return userEnsemble
            }
            throw new AuthenticationError("Not logged in")
        },
        getUserGFrame: async (parent, args, context) => {
            if(context.user) {
                const userGFrame = await ProfileData.findById(context.user._id).populate('gotGFrame').populate('gunplaName')
                return userGFrame
            }
            throw new AuthenticationError("Not logged in")
        },
        getUserConvergeWishlist: async (parent, args, context) => {
            if(context.user) {
                const userConvergeWish = await ProfileData.findById(context.user._id).populate('convergeWish').populate('gunplaName')
                return userConvergeWish
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserHighWishlist: async (parent, args, context) => {
            if(context.user) {
                const userHighWish = await ProfileData.findById(context.user._id).populate('highGradeWish').populate('gunplaName')
                return userHighWish
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserRealWishlist: async (parent, args, context) => {
            if(context.user) {
                const userRealWish = await ProfileData.findById(context.user._id).populate('realGradeWish').populate('gunplaName')
                return userRealWish
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserMasterWishlist: async (parent, args, context) => {
            if(context.user) {
                const userMasterWish = await ProfileData.findById(context.user._id).populate('masterGradeWish').populate('gunplaName')
                return userMasterWish
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserPerfectWishlist: async (parent, args, context) => {
            if(context.user) {
                const userPerfectWish = await ProfileData.findById(context.user._id).populate('perfectGradeWish').populate('gunplaName')
                return userPerfectWish
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserSDWishlist: async (parent, args, context) => {
            if(context.user) {
                const userSDWish = await ProfileData.findById(context.user._id).populate('sdGradeWish').populate('gunplaName')
                return userSDWish
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserOtherWishlist: async (parent, args, context) => {
            if(context.user) {
                const userOther = await ProfileData.findById(context.user._id).populate('re100Wish').populate('gunplaName')
                return userOther
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserEnsembleWishlist: async (parent, args, context) => {
            if(context.user) {
                const userEnsemble = await ProfileData.findById(context.user._id).populate('ensembleWish').populate('gunplaName')
                return userEnsemble
            }
            throw new AuthenticationError('Not logged in');
        },
        getUserGFrameWishlist: async (parent, args, context) => {
            if(context.user) {
                const userGFrame = await ProfileData.findById(context.user._id).populate('gFrameWish').populate('gunplaName')
                return userGFrame
            }
            throw new AuthenticationError('Not logged in');
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            try {
                const user = await ProfileData.create(args)
                const token = signToken(user)
                return {token, user}
            } catch (error) {
                console.log(error)
                throw new AuthenticationError("Username or Email Taken")
            }
        },
        login: async (parent, {email, password}) => {
            const user = await ProfileData.findOne({email})
            if(!user) {
                throw new AuthenticationError("Incorrect")
            }
            const correctPassword = await user.isCorrectPassword(password)
            if(!correctPassword) {
                throw new AuthenticationError("Incorrect")
            }
            const token = signToken(user)
            return {token, user}
        },
        saveConverge: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id : id
            const findConverge = await Converge.findOne({gunplaName: name})
            console.log(findConverge)
            if(!findConverge) {
                return 'Converge does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {gotConverges: findConverge}
            },
            {
                new: true
            })
        },
        saveHighGrade: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const findHighGrade = await HighGrade.findOne({gunplaName: name})
            if(!findHighGrade) {
                return 'HighGrade does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {gotHighGrades: findHighGrade}
            },
            {
                new: true
            })
        },
        saveRealGrade: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const findRealGrade = await RealGrade.findOne({gunplaName: name})
            if(!findRealGrade) {
                return 'RealGrade does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {gotRealGrades: findRealGrade}
            },
            {
                new: true
            })
        },
        saveMasterGrade: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const findMasterGrade = await MasterGrade.findOne({gunplaName: name})
            if(!findMasterGrade) {
                return 'MasterGrade does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {gotMasterGrades: findMasterGrade}
            },
            {
                new: true
            })
        },
        savePerfectGrade: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const findPerfectGrade = await PerfectGrade.findOne({gunplaName: name})
            if(!findPerfectGrade) {
                return 'PerfectGrade does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {gotPerfectGrades: findPerfectGrade}
            },
            {
                new: true
            })
        },
        saveSDGrade: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const findSDGrade = await SDGrade.findOne({gunplaName: name})
            if(!findSDGrade) {
                return 'SDGrade does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {gotSDGrades: findSDGrade}
            },
            {
                new: true
            })
        },
        saveOthers: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const findOther = await RE100.findOne({gunplaName: name})
            if(!findOther) {
                return 'Other does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {gotRE100s: findOther}
            },
            {
                new: true
            })
        },
        saveEnsemble: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const findEnsemble = await Ensemble.findOne({gunplaName: name})
            if(!findEnsemble) {
                return 'Ensemble does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {gotEnsemble: findEnsemble}
            },
            {
                new: true
            })
        },
        saveGFrame: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const findGFrame = await GFrame.findOne({gunplaName: name})
            if(!findGFrame) {
                return 'GFrame does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {gotGFrame: findGFrame}
            },
            {
                new: true
            })
        },
        convergeWishlist: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const fetchConverge = await Converge.findOne({gunplaName: name})
            if(!fetchConverge) {
                return 'Converge does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {convergeWish: fetchConverge}
            },
            {
                new: true
            })
        },
        highGradeWishlist: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const fetchHighGrade = await HighGrade.findOne({gunplaName: name})
            if(!fetchHighGrade) {
                return 'HighGrade does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {highGradeWish: fetchHighGrade}
            },
            {
                new: true
            })
        },
        realGradeWishlist: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const fetchRealGrade = await RealGrade.findOne({gunplaName: name})
            if(!fetchRealGrade) {
                return 'RealGrade does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {realGradeWish: fetchRealGrade}
            },
            {
                new: true
            })
        },
        masterGradeWishlist: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const fetchMasterGrade = await MasterGrade.findOne({gunplaName: name})
            if(!fetchMasterGrade) {
                return 'MasterGrade does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {masterGradeWish: fetchMasterGrade}
            },
            {
                new: true
            })
        },
        perfectGradeWishlist: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const fetchPerfectGrade = await PerfectGrade.findOne({gunplaName: name})
            if(!fetchPerfectGrade) {
                return 'PerfectGrade does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {perfectGradeWish: fetchPerfectGrade}
            },
            {
                new: true
            })
        },
        SDGradeWishlist: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const fetchSDGrade = await SDGrade.findOne({gunplaName: name})
            if(!fetchSDGrade) {
                return 'SDGrade does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {sdGradeWish: fetchSDGrade}
            },
            {
                new: true
            })
        },
        otherWishlist: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const fetchOther = await RE100.findOne({gunplaName: name})
            if(!fetchOther) {
                return 'Other does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {re100Wish: fetchOther}
            },
            {
                new: true
            })
        },
        ensembleWishlist: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const fetchEnsemble = await Ensemble.findOne({gunplaName: name})
            if(!fetchEnsemble) {
                return 'Ensemble does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {ensembleWishlist: fetchEnsemble}
            },
            {
                new: true
            })
        },
        gFrameWishlist: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const fetchGFrame = await GFrame.findOne({gunplaName: name})
            if(!fetchGFrame) {
                return 'GFrame does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {gFrameWishlist: fetchGFrame}
            },
            {
                new: true
            })
        },
        deleteConvergeSave: async (parent, {convergeID}, context) => {
            try {
                return await ProfileData.findOneAndUpdate({
                    _id: context.user
                },
                { $pull: 
                    {
                        'gotConverges': {
                            _id: convergeID
                        }
                    }
                },
                {
                    new: true
                })
            } catch (error) {
                console.log(error)
            }
            
        },
        deleteHighGradeSave: async (parent, {highGradeID}, context) => {
            try{
                return await ProfileData.findOneAndUpdate({
                    _id: context.user
                },
                {
                    $pull: {
                        'gotHighGrades': {
                            _id: highGradeID
                        }
                    }
                },
                {
                    new: true
                })
            } catch (error) {
                console.log(error)
            }
        },
        deleteRealGradeSave: async (parent, {realGradeID}, context) => {
            return await ProfileData.findOneAndUpdate({
                _id: context.user
            },
            {
                $pull: {
                    'gotRealGrades': {
                        _id: realGradeID
                    }
                }
            },
            {
                new: true
            })
        },
        deleteMasterGradeSave: async (parent, {masterGradeID}, context) => {
            return await ProfileData.findOneAndUpdate({
                _id: context.user
            },
            {
                $pull: {
                    'gotMasterGrades': {
                        _id: masterGradeID
                    }
                }
            },
            {
                new: true
            })
        },
        deletePerfectGradeSave: async (parent, {perfectGradeID}, context) => {
            try{
                return await ProfileData.findOneAndUpdate({
                    _id: context.user
                },
                {
                    $pull: {
                        'gotPerfectGrades': {
                            _id: perfectGradeID
                        }
                    }
                },
                {
                    new: true
                })
            } catch (error) {
                console.log(error)
            }
        },
        deleteSDGradeSave: async (parent, {sdGradeID}, context) => {
            return await ProfileData.findOneAndUpdate({
                _id: context.user
            },
            {
                $pull: {
                    'gotSDGrades': {
                        _id: sdGradeID
                    }
                }
            },
            {
                new: true
            })
        },
        deleteOtherSave: async (parent, {otherID}, context) => {
            return await ProfileData.findOneAndUpdate({
                _id: context.user
            },
            {
                $pull: {
                    'gotRE100s': {
                        _id: otherID
                    }
                }
            },
            {
                new: true
            })
        },
        deleteEnsembleSave: async (parent, {ensembleID}, context) => {
            return await ProfileData.findOneAndUpdate({
                _id: context.user
            },
            {
                $pull: {
                    'gotEnsemble': {
                        _id: ensembleID
                    }
                }
            },
            {
                new: true
            })
        },
        deleteGFrameSave: async (parent, {GFrameID}, context) => {
            return await ProfileData.findOneAndUpdate({
                _id: context.user
            },
            {
                $pull: {
                    'gotGFrame': {
                        _id: GFrameID
                    }
                }
            },
            {
                new: true
            })
        },
        deleteConvergeWishlist: async (parent, {convergeID}, context) => {
            try {
                return await ProfileData.findOneAndUpdate({
                    _id: context.user
                },
                { $pull: 
                    {
                        'convergeWish': {
                            _id: convergeID
                        }
                    }
                },
                {
                    new: true
                })
            } catch (error) {
                console.log(error)
            }
            
        },
        deleteHighGradeWishlist: async (parent, {highGradeID}, context) => {
            try{
                return await ProfileData.findOneAndUpdate({
                    _id: context.user
                },
                {
                    $pull: {
                        'highGradeWish': {
                            _id: highGradeID
                        }
                    }
                },
                {
                    new: true
                })
            } catch (error) {
                console.log(error)
            }
        },
        deleteRealGradeWishlist: async (parent, {realGradeID}, context) => {
            try{
                return await ProfileData.findOneAndUpdate({
                    _id: context.user
                },
                {
                    $pull: {
                        'realGradeWish': {
                            _id: realGradeID
                        }
                    }
                },
                {
                    new: true
                })
            } catch (error) {
                console.log(error)
            }
        },
        deleteMasterGradeWishlist: async (parent, {masterGradeID}, context) => {
            return await ProfileData.findOneAndUpdate({
                _id: context.user
            },
            {
                $pull: {
                    'masterGradeWish': {
                        _id: masterGradeID
                    }
                }
            },
            {
                new: true
            })
        },
        deletePerfectGradeWishlist: async (parent, {perfectGradeID}, context) => {
            try{
                return await ProfileData.findOneAndUpdate({
                    _id: context.user
                },
                {
                    $pull: {
                        'perfectGradeWish': {
                            _id: perfectGradeID
                        }
                    }
                },
                {
                    new: true
                })
            } catch (error) {
                console.log(error)
            }
        },
        deleteSDGradeWishlist: async (parent, {sdGradeID}, context) => {
            return await ProfileData.findOneAndUpdate({
                _id: context.user
            },
            {
                $pull: {
                    'sdGradeWish': {
                        _id: sdGradeID
                    }
                }
            },
            {
                new: true
            })
        },
        deleteOtherWishlist: async (parent, {otherID}, context) => {
            return await ProfileData.findOneAndUpdate({
                _id: context.user
            },
            {
                $pull: {
                    're100Wish': {
                        _id: otherID
                    }
                }
            },
            {
                new: true
            })
        },
        deleteEnsembleWishlist: async (parent, {ensembleID}, context) => {
            return await ProfileData.findOneAndUpdate({
                _id: context.user
            },
            {
                $pull: {
                    'ensembleWishlist': {
                        _id: ensembleID
                    }
                }
            },
            {
                new: true
            })
        },
        deleteGFrameWishlist: async (parent, {GFrameID}, context) => {
            return await ProfileData.findOneAndUpdate({
                _id: context.user
            },
            {
                $pull: {
                    'gFrameWishlist': {
                        _id: GFrameID
                    }
                }
            },
            {
                new: true
            })
        },
    }
}

module.exports = resolvers;