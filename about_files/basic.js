window.submitForm = function(src) {
    var form = $(src).closest('form');
    if (form.length > 0)
        form[0].submit();
    else {
        console.error("can't submit form for control " + $(src).parents().map(function() { return this.tagName; }).get().join(">") + src.tagName);
    }
}

window.initBanners = function (placeholder, banners) {
    var resized = function() {
        if ($(window).width() >= 980)
            $(placeholder).attr('src', banners[0]);
        else if ($(window).width() >= 700)
            $(placeholder).attr('src', banners[1]);
        else if ($(window).width() >= 480)
            $(placeholder).attr('src', banners[2]);     
        else
            $(placeholder).attr('src', banners[3]);

    };
    $(window).resize(resized);

    resized();
}

$.showDialog = function(options) {
    var opt = options || {};
    opt.title = opt.title || '';
    opt.content = opt.content || '';
    opt.width = opt.width || '';
    opt.buttons = opt.buttons || [];
    opt.cssclass = opt.cssclass || 'wrapper';

    var dialogBox = $("<div>").hide();

    dialogBox.html(opt.content);
    //$('body').append(dialogBox);

    dialogBox.dialog({
        modal: true,
        draggable: false,
        title: opt.title,
        autoOpen: true,
        width: opt.width,
        dialogClass: opt.cssclass,
        /*close: function () { dialogBox.remove(); },*/
        create: function(e, ui) {
            $(this).dialog('widget')
                .removeClass('ui-corner-all')
                .find('.ui-corner-all')
                .removeClass('ui-corner-all');
        }});
};