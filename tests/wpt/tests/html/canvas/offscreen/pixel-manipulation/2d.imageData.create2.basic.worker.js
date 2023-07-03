// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.imageData.create2.basic
// Description:createImageData(sw, sh) exists and returns something
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("createImageData(sw, sh) exists and returns something");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  _assertDifferent(ctx.createImageData(1, 1), null, "ctx.createImageData(1, 1)", "null");
  t.done();
});
done();