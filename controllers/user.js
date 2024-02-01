const User = require(".././models/user");
async function handleGetallUser(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
}
async function handleUpdateUserById(req, res) {
  try {
    await User.findByIdAndUpdate(req.params.id, { name: "Changed" });
    return res.json({ status: "Success" });
  } catch (error) {
    console.log("Error updating user", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal server error" });
  }
}

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:"Success"})
}

async function handleCreateNewUser(req, res) {
    const body = req.body;

    // Validate that the request body and the 'name' field are present
    if (!body || !body.name) {
        return res.status(400).json({ msg: "all field are required----.." });
    }

    try {
        // Create a new user using the User model
        const result = await User.create({
            name: body.name,
        });

        // Respond with a success message and the newly created user's ID
        return res.status(201).json({ msg: "success", id: result._id });
    } catch (error) {
        // If there's an error during user creation, log the error and respond with a 500 status
        console.log("Error creating user", error);
        return res.status(500).json({ status: "error", message: "Internal server error" });
    }
}

module.exports = {
  handleGetallUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
};
