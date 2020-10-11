import 'dotenv/config';

const secrets = {
    PORT: process.env.PORT!
};

export default {
    ...secrets
};