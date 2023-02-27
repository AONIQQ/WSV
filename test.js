

//write a function that brings up the Calendly widget when a button with the id CallButton is pressed

// Path: test.js
async function buttonLogic() {
    const callButton = document.getElementById("callButton");

    callButton.addEventListener("click", async () => {

<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
<script type="text/javascript">window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/wall-street-vision/discover', text: 'Schedule time with us', color: '#0069ff', textColor: '#ffffff', branding: true })

    }</script>

    
</link>
    });     
}

buttonLogic();

