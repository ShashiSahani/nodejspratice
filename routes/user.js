const express=require('express');

const { handleGetallUser,  handleCreateNewUser,handleDeleteUserById,handleGetUserById,handleUpdateUserById}=require('../controllers/user')

const  router=express.Router();

router.get("/",handleGetallUser)
.post(handleCreateNewUser)


router.route("/:id")
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)
  // router.listen(port, () => {
  //   console.log(`Server is running on port ${port}`);
  // });
  
  module.exports=router