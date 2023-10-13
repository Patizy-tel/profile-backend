// controllers/profileController.js

const MemberModel = require('../models/members')

// Create a new profile
exports.createMember = (req, res) => {

  const profile = new MemberModel({...req.body});

  profile.save()
    .then((savedProfile) => {
      res.json(savedProfile);
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};


const  paginatedResults = async (model , req , options) => {

    const page = parseInt(req.query.page);
    const limit =10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const result = {

    };
// change model.length to model.countDocuments() because you are counting directly from mongodb
    if (endIndex < (await model.countDocuments().exec())) {
      result.next = {
        page: page + 1,
        limit: limit,
      };
    }
    if (startIndex > 0) {
      result.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    try {
//       .limit(limit).skip(startIndex) replaced the slice method because
//       it is done directly from mongodb and they are one of mongodb methods
      result.content = await model.find(options).limit(limit).skip(startIndex).sort({createdAt:-1});
      if(result.content.length < limit){
          result.nextPage = false;
          result.total = await model.countDocuments()
      }else{
          result.nextPage = true;
          result.total = await model.countDocuments()
      }

      return result;
    } catch (e) {
       return e;
    }

}
// Get paginated profiles
exports.getProfiles = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
//   const limit = parseInt(req.query.limit) || 10;

//   const   paginatedProfiles = await paginatedResults(Profile ,req);

  res.status(200).json({message:'members'});
};