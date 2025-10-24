// assets/javascripts/gojs-init.js

function createDiagram(divId, nodes, links) {
  const $ = go.GraphObject.make;
  const diagram = $(go.Diagram, divId, {
    "undoManager.isEnabled": true,
    layout: $(go.LayeredDigraphLayout)
  });

  diagram.nodeTemplate =
    $(go.Node, "Auto",
      $(go.Shape, "RoundedRectangle", { fill: "#3B82F6", strokeWidth: 0 }),
      $(go.TextBlock, { margin: 8, stroke: "white", font: "bold 14px Roboto" },
        new go.Binding("text", "key"))
    );

  diagram.linkTemplate =
    $(go.Link,
      $(go.Shape, { strokeWidth: 2, stroke: "#9CA3AF" }),
      $(go.Shape, { toArrow: "Standard", fill: "#9CA3AF" })
    );

  diagram.model = new go.GraphLinksModel(nodes, links);
}
