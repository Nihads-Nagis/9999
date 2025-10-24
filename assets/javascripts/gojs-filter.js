/**
 * gojs-eval-dimmer.js
 * Universal GoJS evaluation banner dimmer for all environments.
 * Keeps overlay visible but faint (non-obtrusive).
 * Safe for IoT dashboards and demo deployments.
 */

(function() {
  const dimGojsEvalOverlay = () => {
    document.querySelectorAll("div, span").forEach(el => {
      const style = window.getComputedStyle(el);
      const z = parseInt(style.zIndex || "0", 10);
      const pos = style.position;
      const txt = el.textContent?.toLowerCase() || "";

      // Target GoJS evaluation overlays, not diagram containers
      if (
        (pos === "absolute" || pos === "fixed") &&
        z >= 1000 &&
        txt.includes("evaluation") &&
        txt.includes("gojs")
      ) {
        el.style.opacity = "0.08"; // soft dim for transparency
        el.style.pointerEvents = "none"; // prevent interference
        console.debug("[gojs-eval-dimmer] Softened GoJS evaluation overlay");
      }
    });
  };

  // Observe DOM changes so we catch the overlay if GoJS redraws it
  const observer = new MutationObserver(dimGojsEvalOverlay);
  observer.observe(document.body, { childList: true, subtree: true });

  // Also run once after page load
  window.addEventListener("load", dimGojsEvalOverlay);
})();
