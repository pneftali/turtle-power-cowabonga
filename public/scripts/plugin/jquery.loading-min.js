(function(a){a.fn.loading=function(c){var b=a.extend({action:"start",opacity:".1",background:"#000"},c);return this.each(function(){switch(b.action){case"start":a(".overlay-test").css({background:b.background,opacity:b.opacity});break;case"stop":a(this).find("div.overlay-test").remove();break}})}})(jQuery);