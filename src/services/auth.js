export async function verify(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      //Code Here
      return await next();
    } else {
      return res.unauthorizedUser();
    }
  } catch (e) {
    if (/invalid token/i.test(e)) return res.unauthorizedUser();
    return res.error(e);
  }
}
