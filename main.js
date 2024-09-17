var canvas = new fabric.Canvas('canvas');
fabric.Image.fromURL('https://raw.githubusercontent.com/abe-ymg/sample-image/main/usa.png', function(img) {
  img.set({
    left: 100,
    top: 100,
    scaleX: 0.2,
    scaleY: 0.2
  });
  canvas.add(img);
});


// タッチイベントのリスナーを設定
canvas.on({
  'touch:gesture': function(e) {
    console.log('gesture detected');
  },
  'touch:drag': function(e) {
    console.log('drag detected');
  },
  'touch:scale': function(e) {
    console.log('scale detected');
  },
  'touch:rotate': function(e) {
    console.log('rotate detected');
  }
});
