import express from 'express';
import authController from '../Controller/auth-controller.js';
import authDetailsJwt from "../middlewares/auth-details-jwt.js";


const router = express.Router();

router.get("/", authController.home);
router.route("/course").get(authController.showCourse);
// router.route("/cart").post(authController.addCart)
// cart route is not available because cannot get card data from button
router.route("/register").post(authController.register);
router.route("/adminDelUser/:id").post(authController.delUser);
router.route("/adminDelAccount/:id").post(authController.delAccount);
router.route("/adminDelPost/:id").post(authController.delPost);
router.route("/adminDelCart/:id").post(authController.delCart);

router.route("/adminChangeAccount").post(authController.changeAccount);
router.route("/adminChangePost").post(authController.changePost);
router.route("/adminUser").get(authController.showUser);
router.route("/form").post(authController.form);
router.route("/usercart").get(authController.showCart);
router.route("/cart/:id").post(authController.getCart);
router.route("/query").get(authController.getQuery);
router.route("/login").post(authController.login);
router.route("/admin").post(authController.addCourse);
router.route("/details").get(authDetailsJwt, authController.details);

export default router;