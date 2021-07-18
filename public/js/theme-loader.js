
const metaDocument = document.getElementsByName("theme-color");
if (metaDocument) {
  const isDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  metaDocument.forEach(
    (element) => (element.content = isDark ? "#f9fdff" : "#031f22")
  );
  document.body.style.backgroundColor = isDark ? "#031f22" : "#f9fdff";
}

