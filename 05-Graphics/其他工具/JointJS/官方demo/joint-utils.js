(function(window, $, _, joint) {

  const jointUtil = {
    createPage(selector, graph, width, height, color) {
      var paper = new joint.dia.Paper({
        el: document.querySelector(selector),
        model: graph,
        width: width,
        height: height,
        gridSize: 1,
        drawGrid: true,
        background: {
          color
        }
      });
      return paper;
    }
  };

  window.jointUtil = jointUtil;
})(window, jQuery, _, joint);
