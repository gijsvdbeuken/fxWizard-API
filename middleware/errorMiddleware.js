// errorMiddleware.js

const handleErrors = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
};

export default handleErrors; // Export the function directly
