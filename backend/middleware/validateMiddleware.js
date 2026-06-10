import { contactSchema } from "../validators/contactSchema.js";

const validateMiddleware = (req, res, next) => {
  const { error } = contactSchema.safeParse(req.body);
  if (error) {
    return res.status(400).json({ success: false, errors: error.flatten() });
  } else {
    next();
  }
};

export default validateMiddleware;
