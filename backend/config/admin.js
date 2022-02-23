module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '743c39179cd9752d8460ef6055fe21ea'),
  },
});
