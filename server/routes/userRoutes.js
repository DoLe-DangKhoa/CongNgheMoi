const { default: SetAvatar } = require("../../public/chat-app/src/pages/SetAvatar");
const {register, login} = require("../controllers/usersController");


const router = require('express').Router();

router.post("/register",register);
router.post("/login",login);
router.post("/setAvatar",SetAvatar);
module.exports = router;

