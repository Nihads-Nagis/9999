# GoJS Demo Block Diagram

<div id="myDiagramDiv" style="width:100%; height:300px; border:1px solid lightgray"></div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  createDiagram("myDiagramDiv", [
    { key: "Sensor Input" },
    { key: "Controllers" },
    { key: "Actuator Output" }
  ], [
    { from: "Sensor Input", to: "Controller" },
    { from: "Controller", to: "Actuator Output" }
  ]);
});
</script>