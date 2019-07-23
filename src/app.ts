import fastify = require('fastify');
import { apiRoutes } from './routes/apiRoutes/apiRoutes';
import { createServer } from 'http';
import bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');


const app = fastify();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }));

app.use('/api', apiRoutes);

export default app;

const server = createServer((req, res) => {
    switch (req.url) {
        case ('/'):
            res.statusCode = 200;
            res.statusMessage = 'fuck';
            res.end();
    }
});

server.listen(2563, () => {});
