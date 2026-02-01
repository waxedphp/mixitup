
;(function ( $, window, document, undefined ) {

    var pluginName = 'mixitup',
        _search = '.waxed-mixitup',
        _api = [],
        defaults = {
            propertyName: "value"
        },
        inited = false
        ;

    function Instance(pluggable,element,dd){
      var that = this;
      this.pluggable = pluggable;
      this.element = element;
      this.o = element;
      this.t = pluginName;
      this.dd = dd;
      this.name = '';
      this.cfg = {
      };

      this.invalidate = function(RECORD){

      },

      this.setRecord = function(RECORD){
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);
        if (typeof rec != 'object') { return; };
        if (typeof rec.filter == 'string') {
          this.filter(rec.filter);
        };

      },

      this.filter = function(s) {
        this.mixer.filter(s);
      },


      this.free = function() {

      },

      this.init=function() {
        //mixitup.use(mixitupPagination);

        console.log('MIXITUP', that.element);
        this.mixer = mixitup(that.element, {
          animation: {
                effects: 'fade'
          },
          pagination: {
              limit: 3,
              maintainActivePage: false,
              loop: true,
              hidePageListIfSinglePage: true
          }
        });

        //console.log(mixer);
            /*
            effects: ['fade','grayscale'],
            easing: 'snap',
            transitionSpeed: 400
            */
        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
