"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controllers_1 = require("../controllers/auth.controllers");
const requireAuth_1 = require("../middlewares/requireAuth");
const router = (0, express_1.Router)();
router.post("/login", auth_controllers_1.loginHandler);
router.get("/profile", requireAuth_1.requireAuth, auth_controllers_1.profileHandler);
exports.default = router;
