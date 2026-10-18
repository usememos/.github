// Export the HTML/CSS layout losslessly; a PNG extension alone cannot fix JPEG artifacts.
document.querySelector("#export-png").addEventListener("click", async () => {
  const button = document.querySelector("#export-png");
  button.disabled = true;
  try {
    await document.fonts.ready;
    const stage = document.querySelector(".stage");
    const css = document.querySelector("style").textContent.replaceAll(":root {", ".stage {");
    const ink = getComputedStyle(stage).color;
    const markup = new XMLSerializer().serializeToString(stage);
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="1448" height="1086" viewBox="0 0 1448 1086"><foreignObject x="0" y="0" width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Arial,Helvetica,sans-serif;color:' +
      ink +
      '"><style>' +
      css +
      "</style>" +
      markup +
      "</div></foreignObject></svg>";
    const image = new Image();
    image.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    await image.decode();
    const canvas = document.createElement("canvas");
    canvas.width = 1448;
    canvas.height = 1086;
    canvas.getContext("2d").drawImage(image, 0, 0);
    const png = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    if (!png) throw new Error("PNG encoding failed");
    const url = URL.createObjectURL(png);
    const link = document.createElement("a");
    link.href = url;
    link.download = "timeline-" + document.body.dataset.theme + ".png";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
    button.textContent = "PNG exported";
  } catch (error) {
    button.textContent = "Export failed: " + error.message;
    console.error(error);
  } finally {
    button.disabled = false;
  }
});
