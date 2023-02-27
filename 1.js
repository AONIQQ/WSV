

async function buttonLogic() {
    const callButton = document.getElementById("callButton");
  
    callButton.addEventListener("click", () => {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
  
      script.onload = function () {
        Calendly.initPopupWidget({url: 'https://calendly.com/wall-street-vision/discover'});
      };
    });
  }
  
  buttonLogic();
  