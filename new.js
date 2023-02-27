async function loadCalendlyScript() {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return new Promise(resolve => {
      script.onload = resolve;
    });
  }
  
  function initCalendlyWidget() {
    Calendly.initPopupWidget({url: "https://calendly.com/wall-street-vision/discover"});
  }
  
  async function buttonLogic() {
    const callButton = document.getElementById("callButton");
    callButton.addEventListener("click", async () => {
      await loadCalendlyScript();
      initCalendlyWidget();
    });
  }
  
  buttonLogic();