import { Router } from "express";

const routes = new Router();

//Create your own routes and import here 
// routes.use("/users", UserRoutes);

routes.all("*", (req, res, next) =>
  res.status(404).send({
    code: 404,
    message: "URL not found",
  })
);

export default routes;
