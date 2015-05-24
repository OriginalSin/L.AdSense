(function () {
    L.Google = L.Control.gmxSidebar.extend({
        options: {
            id: 'google',
            //position: 'left',
            //className: 'leaflet-google',
            insert: '<ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px" data-ad-client="ca-pub-3088886844438889" data-ad-slot="7941669172"></ins>',
            url: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
        },
        onAdd: function (map) {
            var container = L.Control.gmxSidebar.prototype.onAdd.call(this, map);
            container.innerHTML = this.options.insert;

            var script = document.createElement('script');
            script.setAttribute('charset', 'UTF-8');
            script.setAttribute('src', this.options.url);
            container.insertBefore(script, container.firstChild);

            var script = document.createElement('script');
            script.innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});';
            container.appendChild(script);
            return container;
        }
    });

    L.google = function (options) {
      return new L.Google(options);
    };
})();
