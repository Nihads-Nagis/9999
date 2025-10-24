document.addEventListener("DOMContentLoaded", () => {
  if (window.mermaid) {
    mermaid.initialize({ startOnLoad: true });
    if (mermaid.run) mermaid.run(); // works for v11+
  } else {
    console.warn("Mermaid not loaded yet");
  }
});
