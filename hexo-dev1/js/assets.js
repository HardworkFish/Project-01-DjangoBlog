
    const loadScript = function loadScript(c, b) {
        var a = document.createElement("script");
        a.type = "text/javascript";
        "undefined" != typeof b && (a.readyState ? a.onreadystatechange = function() {
          if ("loaded" == a.readyState || "complete" == a.readyState) a.onreadystatechange = null,
          b()
        }: a.onload = function() {
          b()
        });
        a.src = c;
        document.body.appendChild(a)
      }; (function() {
        if ((typeof(device) != 'undefined') && (device.mobile())) {
          var trElement = document.getElementById('hexo-helper-live2d');
          trElement.parentNode.removeChild(trElement);
          return;
        } else if (typeof(device) === 'undefined') console.error('Cannot find current-device script.');
        loadScript("../live2d/script.js",
        function() {
          loadlive2d("live2dcanvas", "../live2d/assets/hijiki.model.json", 0.5);
        });
      })();