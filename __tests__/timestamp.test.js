'use strict';

const timestamp = require('../midelware/timestamp.js');

describe('timestamp middleware', () => {
  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn();


  it('timestamp the output correctly', () => {
    timestamp(req, res, next);
    expect(req.requestTime).not.toBeUndefined()
  });
  it('move to the next middleware', () => {
    timestamp(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});