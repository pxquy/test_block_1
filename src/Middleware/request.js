export const request = (Schema, target = "body") => {
  return (req, res, next) => {
    const checkRequest = Schema.validate(req[target]);

    if (error)
      return res.status(500).json({
        details: error.details.map((err) => err.message),
      });

    next();
  };
};
