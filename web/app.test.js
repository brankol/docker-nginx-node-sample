const supertest = require('supertest');
const test = require('tape');
const app = require('./app');
const request = supertest(app);

test('GET /health', assert => {
    request
        .get('/health')
        .expect('Content-type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) {
                assert.fail(err);
                assert.end();
            } else {
                assert.ok(res.body, 'It should have a response body');
                assert.equals(res.body.healthy, true, 'It should return a healthy parameter and it should be true');
                assert.end();
            }
        });
});

test('GET unknown route', assert => {
    request
        .get('/does-not-exist-and-never-will')
        .expect(404)
        .end((err, res) => {
            if (err) {
                assert.fail(err);
                assert.end();
            } else {
                assert.end();
            }
        });
});
