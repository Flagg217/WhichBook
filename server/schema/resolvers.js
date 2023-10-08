const { User } = require('../models');
const { GraphQlError } = require('graphql');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, content) => {
        if (content.user) {
            const userData = await User.findOne({ _id: content.user._id });
            return userData;
        }
      return new GraphQlError('Not logged in')
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
        const user = await User.create(args);

        if (!user) {
          return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(user);
        return { token, user };
    },
    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ message: "Can't find this user" });
        }
    
        const correctPw = await user.isCorrectPassword(password);
    
        if (!correctPw) {
          return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        return { token, user };
    },
  },
};

module.exports = resolvers;
