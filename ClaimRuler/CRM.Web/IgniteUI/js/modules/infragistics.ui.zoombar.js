﻿/*!@license
 * Infragistics.Web.ClientUI ZoomBar 14.1.20141.2031
 *
 * Copyright (c) 2011-2014 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 * jquery-1.4.4.js
 * jquery.ui.core.js
 * jquery.ui.widget.js
 * infragistics.util.js
 * infragistics.ui.shared.js
*/
(function($){$.widget("ui.igZoombar",{options:{type:"auto",target:null,clone:"auto",width:"auto",height:"70px",zoomAction:"immediate",zoomWindowMoveDistance:10,defaultZoomWindow:{left:35,width:30},zoomWindowMinWidth:5,hoverStyleAnimationDuration:500,windowPanDuration:500,tabIndex:0},events:{zoomChanging:"zoomChanging",zoomChanged:"zoomChanged",windowDragStarting:"windowDragStarting",windowDragStarted:"windowDragStarted",windowDragging:"windowDragging",windowDragEnding:"windowDragEnding",windowDragEnded:"windowDragEnded",windowResizing:"windowResizing",windowResized:"windowResized"},css:{baseClass:"ui-widget ui-helper-clearfix ui-corner-all ui-igzoombar-container",scrollBarClass:"ui-igzoombar-scrollbar",scrollBarThumbClass:"ui-state-default ui-igzoombar-scrollbar-thumb",scrollBarButtonClass:"ui-igzoombar-scrollbar-button",scrollBarLeftButtonIconClass:"ui-icon-triangle-1-w",scrollBarRightButtonIconClass:"ui-icon-triangle-1-e",maskLayerClass:"ui-igzoombar-mask",maskLayerLeftAppendixFadeClass:"ui-igzoombar-fade ui-igzoombar-fade-left-appendix",maskLayerRightAppendixFadeClass:"ui-igzoombar-fade ui-igzoombar-fade-right-appendix",maskLayerLeftFadeClass:"ui-igzoombar-fade ui-igzoombar-fade-left",maskLayerRightFadeClass:"ui-igzoombar-fade ui-igzoombar-fade-right",hoverState:"ui-state-hover",windowResizeHandleLeftClass:"ui-state-default ui-igzoombar-window-handle ui-igzoombar-window-handle-left",windowResizeHandleRightClass:"ui-state-default ui-igzoombar-window-handle ui-igzoombar-window-handle-right",windowGrabbingClass:"ui-igzoombar-window-grabbing"},_create:function(){var opts=this.options;this._acc=0;this._createHandlers();this._supportedWidgets=["igDataChart"];this._provider=this._initProvider(opts);this._cw={left:opts.defaultZoomWindow.left/100,width:opts.defaultZoomWindow.width/100};this._immediate=opts.zoomAction==="immediate";if(opts.width==="auto"){opts.width=this._provider.targetWidth()}this._renderZoombar();this._registerEvents();this._refreshWindow();this._applyZoom();this._fz=false;this.element.css("-ms-touch-action","none")},_createWidget:function(options,element){$.Widget.prototype._createWidget.apply(this,arguments)},destroy:function(){this._unregisterEvents();if(this._responsive){this._responsive.removeCallback(this._callBackId)}this.container().remove();$.Widget.prototype.destroy.apply(this,arguments);return this},_setOption:function(key,value){switch(key){case"zoomAction":this._immediate=value==="immediate";break;case"zoomWindowMinWidth":if(this._provider){this._provider.syncMinWidth(value/100)}break;case"zoomWindowMoveDistance":break;default:throw new Error($.ig.Zoombar.locale.optionChangeNotSupported+" "+key)}$.Widget.prototype._setOption.apply(this,arguments)},widget:function(){return this.element},id:function(){return this.element[0].id},container:function(){return $("#"+this.element[0].id+"_zoombar_container")},clone:function(){return $("#"+this.element[0].id+"_zoombar_clone")},zoom:function(left,width){if(!left&&!width){return{left:this._cw.left*100,width:this._cw.width*100}}left/=100;width/=100;this._zoom(left,width,false,true)},_renderZoombar:function(){var tc,sc;this._renderMainContainer();sc=this._renderScrollbar();this._resetDimensions();tc=this._renderClone();this._renderMaskContainer(tc);this._renderScrollBarThumb(sc)},_renderMainContainer:function(){this.element.css({width:this.options.width,height:this.options.height});if(this._isSizedDynamically()){this._responsive=this.element.igResponsiveContainer().data("igResponsiveContainer");this._callBackId=this._responsive.addCallback(this._containerResizedHandler,this,5,"xy")}$("<div></div>").attr("id",this.element[0].id+"_zoombar_container").css({width:this.element.width(),height:this.element.height()}).addClass(this.css.baseClass).appendTo(this.element)},_renderClone:function(){var cloneContainer,opts,w,h;cloneContainer=$("<div></div>").attr("id",this.element[0].id+"_zoombar_clone").css({"margin-left":this._buttonWidth,position:"relative"}).prependTo(this.container());w=parseInt(this._width,10)-2*this._buttonWidth;h=parseInt(this.options.height,10)-this._buttonWidth;if(this._provider){if(typeof this.options.clone==="object"){opts=$.extend({},this.options.clone)}else if(this.options.clone==="auto"){opts=this._provider.getBaseOpts();opts=this._provider.cleanOptsForZoom(opts)}else{return cloneContainer.css({width:w,height:h})}opts.width=w;opts.height=h;cloneContainer[this._provider.widgetName()](opts);this._provider.syncMinWidth(this.options.zoomWindowMinWidth/100)}cloneContainer.children().first().removeClass("ui-corner-all ui-widget-content");return cloneContainer},_renderScrollbar:function(container){var scrollbar;scrollbar=$("<div></div>").attr("id",this.element[0].id+"_zoombar_scrollbar").css({width:"100%",height:"16px"}).addClass(this.css.scrollBarClass).appendTo(this.container());this._renderButton("left",scrollbar);this._renderButton("right",scrollbar);this._buttonWidth=scrollbar.children().first().outerWidth();return scrollbar},_renderButton:function(dir,container){var ti=this.options.tabIndex;ti+=dir==="left"?2:4;$("<div></div>").attr({id:this.element[0].id+"_zoombar_buttons_"+dir,tabIndex:ti}).css("float",dir).addClass(this.css.scrollBarButtonClass).button({icons:{primary:dir==="left"?this.css.scrollBarLeftButtonIconClass:this.css.scrollBarRightButtonIconClass},text:false}).click(this._leftRightButtonHandler).keyup(this._leftRightButtonHandler).removeClass("ui-corner-all").appendTo(container)},_renderMaskContainer:function(container){var mask=$("<div></div>").attr("id",this.element[0].id+"_zoombar_mask").addClass(this.css.maskLayerClass).appendTo(container);this._renderLeftRightFade(mask);this._renderZoomWindowThumbs()},_renderLeftRightFade:function(container){$("<div></div>").attr("id",this.element[0].id+"_zoombar_mask_left_appendix").addClass(this.css.maskLayerLeftAppendixFadeClass).appendTo(container);this._lf=$("<div></div>").attr("id",this.element[0].id+"_zoombar_mask_left").addClass(this.css.maskLayerLeftFadeClass).appendTo(container);$("<div></div>").attr("id",this.element[0].id+"_zoombar_mask_right_appendix").addClass(this.css.maskLayerRightAppendixFadeClass).appendTo(container);this._rf=$("<div></div>").attr("id",this.element[0].id+"_zoombar_mask_right").addClass(this.css.maskLayerRightFadeClass).appendTo(container)},_renderScrollBarThumb:function(container){this._sbt=$("<span></span>").attr({id:this.element[0].id+"_zoombar_scrollbar_thumb",tabIndex:this.options.tabIndex+2}).addClass(this.css.scrollBarThumbClass).appendTo(container)},_renderZoomWindowThumbs:function(){$("<div></div>").attr({id:this.element[0].id+"_zoombar_mask_left_handle",tabIndex:this.options.tabIndex}).addClass(this.css.windowResizeHandleLeftClass).appendTo(this._lf);$("<div></div>").attr({id:this.element[0].id+"_zoombar_mask_right_handle",tabIndex:this.options.tabIndex+1}).addClass(this.css.windowResizeHandleRightClass).appendTo(this._rf)},_containerResized:function(width,height){this._resetDimensions();this._refreshWindow()},_mouseWheel:function(evt){var delta,target=$(evt.target),nl,nw,args,noCancel;if(!target.hasClass("ui-igzoombar-mask")){return}if(evt.originalEvent.detail){delta=-evt.originalEvent.detail/3}else{delta=evt.originalEvent.wheelDelta/120}nl=Math.max(this._cw.left+delta/100,0);nw=this._cw.width-delta/50;nw=nl+nw>1?1-nl:nw;if(nw<this.options.zoomWindowMinWidth/100){return}args={zoomWindow:{left:nl,width:nw},owner:this};noCancel=this._trigger(this.events.windowResizing,evt,args);if(noCancel){this._zoom(nl,nw,true,true);this._trigger(this.events.windowResized,evt,args)}},_touchStart:function(evt){var x,target=$(evt.target);x=evt.originalEvent.touches[0].pageX;if(this._dragStart(target,x,evt)){if(target.hasClass("ui-igzoombar-scrollbar-thumb")){target.addClass(this.css.hoverState)}evt.originalEvent.preventDefault()}},_touchMove:function(evt){if(this._draggedElement){this._dragCont(evt.touches[0].pageX,evt);evt.stopPropagation()}},_touchEnd:function(evt){var cont,target=$(evt.target);if(!this._draggedElement&&target.closest("div[role='button']").length===0){cont=target.closest(".ui-igzoombar-container");if(cont.length>0&&cont.attr("id").startsWith(this.element[0].id)){this._moveWindowByPageX(cont,evt.originalEvent.changedTouches[0].pageX)}}if(this._dragEnd(evt)){this._sbt.removeClass("ui-state-hover")}else{return false}},_mouseDown:function(evt){if(this._dragStart($(evt.target),evt.pageX||evt.originalEvent.clientX,evt)){if(window.navigator.pointerEnabled){$(evt.currentTarget).bind("pointermove.zoombar",this._zoombarMouseMoveHandler)}else if(window.navigator.msPointerEnabled){$(evt.currentTarget).bind("MSPointerMove.zoombar",this._zoombarMouseMoveHandler)}else{$(evt.currentTarget).bind("mousemove.zoombar",this._zoombarMouseMoveHandler)}evt.stopPropagation();evt.preventDefault()}},_mouseMove:function(evt){if(this._draggedElement){evt.preventDefault()}this._dragCont(evt.pageX||evt.originalEvent.clientX,evt)},_mouseUp:function(evt,ui){var cont,target=$(evt.target);if(!this._draggedElement&&target.closest("div[role='button']").length===0){cont=target.closest(".ui-igzoombar-container");if(cont.length>0&&cont.attr("id").startsWith(this.element[0].id)){this._moveWindowByPageX(cont,evt.pageX||evt.originalEvent.clientX)}}if(this._dragEnd(evt)){target.removeClass(this.css.windowGrabbingClass);$(evt.currentTarget).unbind({"mousemove.zoombar":this._zoombarMouseMoveHandler,"pointermove.zoombar":this._zoombarMouseMoveHandler,"MSPointerMove.zoombar":this._zoombarMouseMoveHandler});evt.stopPropagation();evt.preventDefault()}else{return false}},_leftRightButtonClicked:function(event){var button=$(event.target),nl;if(!button.is("span")){button=button.children("span").first();if(!event.keyCode||!(event.keyCode===$.ui.keyCode.ENTER||event.keyCode===$.ui.keyCode.SPACE)){return}}if(button.hasClass(this.css.scrollBarLeftButtonIconClass)){nl=this._cw.left-this.options.zoomWindowMoveDistance/100}else if(button.hasClass(this.css.scrollBarRightButtonIconClass)){nl=this._cw.left+this.options.zoomWindowMoveDistance/100}this._zoom(nl,this._cw.width,true,true,true);event.stopPropagation()},_scrollBarMouseEnter:function(event,ui){var self=this;if(this._sliding){this._sbt.addClass(this.css.hoverState)}else{this._sbt.stop(true,true).addClass(this.css.hoverState,this.options.hoverStyleAnimationDuration,function(){self._refreshWindow();$(this).css("background-color","")})}},_scrollBarMouseLeave:function(event,ui){var self=this;if(this._sliding){this._sbt.removeClass(this.css.hoverState)}else{this._sbt.stop(true,true).removeClass(this.css.hoverState,this.options.hoverStyleAnimationDuration,function(){self._refreshWindow();$(this).css("background-color","")})}},_windowKeyDown:function(event){var perc=.1*Math.pow(2,-6+this._acc),target=$(event.target);if(event.keyCode===$.ui.keyCode.ENTER||event.keyCode===$.ui.keyCode.SPACE){this._moveKeyDown=true;if(target.hasClass("ui-igzoombar-scrollbar-thumb")){this._scrollBarMouseEnter()}}else if(this._moveKeyDown&&event.keyCode===$.ui.keyCode.LEFT){if(target.hasClass("ui-igzoombar-window-handle-left")){this._cw.left-=perc;this._cw.width+=perc;if(this._cwidth-Math.round(this._cw.left*this._cwidth)-Math.round(this._cw.width*this._cwidth)!==parseInt(this._rf.css("width"),10)){this._accelerate();return}}else if(target.hasClass("ui-igzoombar-window-handle-right")){if(this._cw.width-perc<this.options.zoomWindowMinWidth/100){this._acc=0;return}this._cw.width-=perc}else{this._cw.left-=perc}this._ensureWindow();this._refreshWindow();this._applyZoom();this._accelerate()}else if(this._moveKeyDown&&event.keyCode===$.ui.keyCode.RIGHT){if(target.hasClass("ui-igzoombar-window-handle-left")){if(this._cw.width-perc<this.options.zoomWindowMinWidth/100){this._acc=0;return}this._cw.left+=perc;this._cw.width-=perc;if(this._cwidth-Math.round(this._cw.left*this._cwidth)-Math.round(this._cw.width*this._cwidth)!==parseInt(this._rf.css("width"),10)){this._accelerate();return}}else if(target.hasClass("ui-igzoombar-window-handle-right")){this._cw.width+=perc}else{this._cw.left+=perc}this._ensureWindow();this._refreshWindow();this._applyZoom();this._accelerate()}},_windowKeyUp:function(event,ui){if(event.keyCode===$.ui.keyCode.ENTER||event.keyCode===$.ui.keyCode.SPACE){this._moveKeyDown=false;if($(event.target).hasClass("ui-igzoombar-scrollbar-thumb")){this._scrollBarMouseLeave()}}this._acc=0},_targetWindowChanged:function(event,ui){var a;this._cw.left=ui.newLeft;this._cw.width=ui.newWidth;if(!this._fz){a={previousZoom:{left:ui.oldLeft*100,width:ui.oldWidth*100},newZoom:{left:ui.newLeft*100,width:ui.newWidth*100},owner:this};this._trigger(this.events.zoomChanged,event,a);this._refreshWindow()}this._fz=false},_zoom:function(nLeft,nWidth,isInternal,refresh,animate){var a,noCancel;animate=animate&&this.options.windowPanDuration>0;a={previousZoom:this._defStore||{left:this._cw.left*100,width:this._cw.width*100},newZoom:{left:nLeft*100,width:nWidth*100},owner:this};noCancel=isInternal?this._trigger(this.events.zoomChanging,null,a):true;if(noCancel){this._cw.left=nLeft;this._cw.width=nWidth;this._ensureWindow();if(animate){this._refreshWindow(true,this._applyZoom)}else{if(refresh){this._refreshWindow()}this._applyZoom()}if(isInternal){this._trigger(this.events.zoomChanged,null,a)}}return noCancel},_initProvider:function(opts){var provider=null,widgetName=null,key,co,rc;if(opts.target){if(typeof opts.target==="string"){this._target=$(opts.target)}else if(opts.target instanceof jQuery){this._target=$(opts.target[0])}}else{throw new Error($.ig.Zoombar.locale.zoombarTargetNotSpecified)}if(typeof opts.type==="string"&&opts.type==="auto"){for(key in this._target.data()){if(this._target.data().hasOwnProperty(key)){if($.inArray(key,this._supportedWidgets)>-1){widgetName=key}}}}else{widgetName=opts.type}if(!widgetName||typeof widgetName!=="string"){throw new Error($.ig.Zoombar.locale.zoombarTypeNotSupported)}rc=this.options.clone!=="none";co=typeof this.options.clone==="object"?this.options.clone:null;switch(widgetName.toLowerCase()){case"igdatachart":provider=new $.ig.ZoombarProviderDataChart({targetObject:this._target.data("igDataChart"),cloneOptions:co,renderClone:rc});break;default:throw new Error($.ig.Zoombar.locale.zoombarTypeNotSupported)}return provider},_isSizedDynamically:function(){if(typeof this.options.width==="string"&&this.options.width.endsWith("%")||typeof this.options.height==="string"&&this.options.height.endsWith("%")){return true}return false},_resetDimensions:function(){var cont=this.container();cont.css({width:this.element.width(),height:this.element.height()});this._width=cont.width();this._height=cont.height();this._buttonWidth=cont.children().last().children(".ui-igzoombar-scrollbar-button").outerWidth();this._cwidth=this._width-2*this._buttonWidth;this.clone()[this._provider.widgetName()]("option","width",this._width-2*this._buttonWidth);this.clone()[this._provider.widgetName()]("option","height",this._height-this._buttonWidth)},_ensureWindow:function(){if(this._cw.left<0){this._cw.left=0}if(this._cw.width>1){this._cw.width=1}if(this._cw.left+this._cw.width>1){this._cw.left=1-this._cw.width}},_refreshWindow:function(animate,func){var wnd=this._cw,sbtw,lfw,self=this;animate=animate&&this.options.windowPanDuration>0;func=func?$.proxy(func,this):function(){self._sliding=false};if(animate){this._sliding=true;this._sbt.stop().animate({left:Math.round(wnd.left*this._cwidth+this._buttonWidth)},this.options.windowPanDuration,func)}else{this._sbt.css("left",Math.round(wnd.left*this._cwidth+this._buttonWidth))}sbtw=Math.round(wnd.width*this._cwidth);this._sbt.css("width",sbtw);lfw=Math.round(wnd.left*this._cwidth);if(animate){this._sliding=true;this._lf.stop().animate({width:lfw},this.options.windowPanDuration,func).css("overflow","visible");this._rf.stop().animate({width:this._cwidth-lfw-sbtw},this.options.windowPanDuration,func).css("overflow","visible")}else{this._lf.css("width",lfw);this._rf.css("width",this._cwidth-lfw-sbtw)}},_applyZoom:function(){this._sliding=false;if(this._provider){this._fz=true;this._provider.update(this._cw.left,this._cw.left+this._cw.width)}},_dragStart:function(target,left,evt){var noCancel,args,cont=target.closest(".ui-igzoombar-container");if(!cont||cont.length===0||!cont.attr("id").startsWith(this.id())){return false}if(target.hasClass("ui-igzoombar-mask")||target.hasClass("ui-igzoombar-scrollbar-thumb")||target.closest(".ui-chart-container").length>0){args={zoomWindow:{left:this._cw.left,width:this._cw.width},owner:this};noCancel=this._trigger(this.events.windowDragStarting,evt,args);if(noCancel){this._draggedElement=this._sbt;target.addClass(this.css.windowGrabbingClass);this._trigger(this.events.windowDragStarted,evt,args)}}else if(target.hasClass("ui-igzoombar-window-handle")){this._draggedElement=target;$("body").css("cursor","e-resize");this._lf.css("cursor","inherit");this._rf.css("cursor","inherit");this._lf.parent().css("cursor","inherit")}if(this._draggedElement){this._draggedElementOffset=left-this._draggedElement.offset().left+this._draggedElement.parent().offset().left+this._buttonWidth;if(!this._immediate){this._defStore={left:this._cw.left,width:this._cw.width}}return true}},_dragCont:function(left,evt){var ol=this._cw.left,ow=this._cw.width,nl=ol,nw=ow,args,dragging=false,noCancel;if(!this._draggedElement||!(this._draggedElement instanceof jQuery)){return}if(this._draggedElement.hasClass("ui-igzoombar-window-handle-left")){nl=left-this._draggedElement.parent().offset().left;nl=nl/this._cwidth;nw=ow+ol-nl;if(nw<this.options.zoomWindowMinWidth/100){return}if(nl<0){nl=0;nw=ow+ol-nl}}else if(this._draggedElement.hasClass("ui-igzoombar-window-handle-right")){nw=(left-this._sbt.offset().left)/this._cwidth;if(nw<this.options.zoomWindowMinWidth/100){return}if(ol+nw>1){nw=1-ol}}else if(this._draggedElement.hasClass("ui-igzoombar-scrollbar-thumb")){nl=(left-this._draggedElementOffset)/this._cwidth;if(nl<0){nl=0}else if(nl+ow>1){nl=1-ow}dragging=true}args={zoomWindow:{left:nl,width:nw},owner:this};if(dragging){noCancel=this._trigger(this.events.windowDragging,evt,args)}else{noCancel=this._trigger(this.events.windowResizing,evt,args)}if(noCancel){if(this._immediate){this._zoom(nl,nw,true,true)}else{this._cw.left=nl;this._cw.width=nw;this._refreshWindow()}if(!dragging){this._trigger(this.events.windowResized,evt,args)}}},_dragEnd:function(evt){var noCancel,args;if(this._draggedElement){if(this._draggedElement.hasClass("ui-igzoombar-window-handle")){$("body").css("cursor","");this._lf.css("cursor","");this._rf.css("cursor","");this._lf.parent().css("cursor","")}else{args={zoomWindow:{left:this._cw.left,width:this._cw.width},owner:this};noCancel=this._trigger(this.events.windowDragEnding,evt,args);if(noCancel){this._trigger(this.events.windowDragEnded,evt,args)}else{return false}}}this._draggedElement=null;if(!this._immediate){if(!this._zoom(this._cw.left,this._cw.width,true,false)){this._zoom(this._defStore.left,this._defStore.width,false,true)}}return true},_moveWindowByPageX:function(cont,pageX){var percLeft=(pageX-cont.offset().left-this._buttonWidth)/this._cwidth,nl;nl=percLeft-this._cw.width/2;this._zoom(nl,this._cw.width,true,true,true)},_accelerate:function(){this._acc=this._acc+.1},_createHandlers:function(){this._leftRightButtonHandler=$.proxy(this._leftRightButtonClicked,this);this._zoombarMouseWheelHandler=$.proxy(this._mouseWheel,this);this._zoombarTouchStartHandler=$.proxy(this._touchStart,this);this._zoombarTouchMoveHandler=$.proxy(this._touchMove,this);this._zoombarTouchEndHandler=$.proxy(this._touchEnd,this);this._zoombarMouseDownHandler=$.proxy(this._mouseDown,this);this._zoombarMouseMoveHandler=$.proxy(this._mouseMove,this);this._zoombarMouseUpHandler=$.proxy(this._mouseUp,this);this._targetWindowChangedHandler=$.proxy(this._targetWindowChanged,this);this._containerResizedHandler=$.proxy(this._containerResized,this);this._scrollbarThumbMouseEnterHandler=$.proxy(this._scrollBarMouseEnter,this);this._scrollbarThumbMouseLeaveHandler=$.proxy(this._scrollBarMouseLeave,this);this._windowKeyDownHandler=$.proxy(this._windowKeyDown,this);this._windowKeyUpHandler=$.proxy(this._windowKeyUp,this)},_registerEvents:function(){var wnd=$(window),zwe=this.container().find(".ui-igzoombar-scrollbar-thumb,.ui-igzoombar-window-handle");wnd.bind({"touchstart.zoombar":this._zoombarTouchStartHandler,"touchend.zoombar":this._zoombarTouchEndHandler});this.container()[0].addEventListener("touchmove",this._zoombarTouchMoveHandler);if(window.navigator.pointerEnabled){wnd.bind({"pointerdown.zoombar":this._zoombarMouseDownHandler,"pointerup.zoombar":this._zoombarMouseUpHandler})}else if(window.navigator.msPointerEnabled){wnd.bind({"MSPointerDown.zoombar":this._zoombarMouseDownHandler,"MSPointerUp.zoombar":this._zoombarMouseUpHandler})}else{wnd.bind({"mousedown.zoombar":this._zoombarMouseDownHandler,"mouseup.zoombar":this._zoombarMouseUpHandler})}wnd.bind({"mousewheel.zoombar":this._zoombarMouseWheelHandler,"DOMMouseScroll.zoombar":this._zoombarMouseWheelHandler});this._sbt.bind({"mouseenter.zoombar":this._scrollbarThumbMouseEnterHandler,"mouseleave.zoombar":this._scrollbarThumbMouseLeaveHandler});zwe.bind({keydown:this._windowKeyDownHandler,keyup:this._windowKeyUpHandler});this._provider.targetObject().element.bind(this._provider.event(),this._targetWindowChangedHandler)},_unregisterEvents:function(){var wnd=$(window),zwe=this.container().find(".ui-igzoombar-scrollbar-thumb,.ui-igzoombar-window-handle");wnd.unbind({"touchstart.zoombar":this._zoombarTouchStartHandler,"touchend.zoombar":this._zoombarTouchEndHandler});this.container()[0].removeEventListener("touchmove",this._zoombarTouchMoveHandler);if(window.navigator.pointerEnabled){wnd.unbind({"pointerdown.zoombar":this._zoombarMouseDownHandler,"pointerup.zoombar":this._zoombarMouseUpHandler})}else if(window.navigator.msPointerEnabled){wnd.unbind({"MSPointerDown.zoombar":this._zoombarMouseDownHandler,"MSPointerUp.zoombar":this._zoombarMouseUpHandler})}else{wnd.unbind({"mousedown.zoombar":this._zoombarMouseDownHandler,"mouseup.zoombar":this._zoombarMouseUpHandler})}wnd.unbind({"mousewheel.zoombar":this._zoombarMouseWheelHandler,"DOMMouseScroll.zoombar":this._zoombarMouseWheelHandler});this._sbt.unbind({"mouseenter.zoombar":this._scrollbarThumbMouseEnterHandler,"mouseleave.zoombar":this._scrollbarThumbMouseLeaveHandler});zwe.unbind({keydown:this._windowKeyDownHandler,keyup:this._windowKeyUpHandler});this._provider.targetObject().element.unbind(this._provider.event(),this._targetWindowChangedHandler)}});$.ig.ZoombarProviderDefault=$.ig.ZoombarProviderDefault||Class.extend({init:function(options){return this},getBaseOpts:function(options){return options},cleanOptsForZoom:function(options){return options},widgetName:function(){return""},targetWidth:function(){return"100%"},syncMinWidth:function(minWidth){return false},targetObject:function(obj){return this._targetObject},update:function(a,b){return false},event:function(){return""}});$.ig.ZoombarProviderDataChart=$.ig.ZoombarProviderDataChart||$.ig.ZoombarProviderDefault.extend({init:function(options){this._targetObject=options.targetObject||null;this._evt="windowRectChanged";this._super(options);return this},getBaseOpts:function(options){var topts=options||this._targetObject.options;return this._copyRelevantOpts(topts)},cleanOptsForZoom:function(options){var i;options.gridMode="none";options.isSurfaceInteractionDisabled=false;options.horizontalZoomable=false;options.verticalZoomable=false;options.crosshairVisibility="hidden";if(options.series&&typeof options.series==="object"){for(i=0;i<options.series.length;i++){options.series[i].showTooltip=false;options.series[i].thickness=1;if(options.series[i].trendLineType){options.series[i].trendLineType="none"}}}if(options.axes&&typeof options.axes==="object"){for(i=0;i<options.axes.length;i++){options.axes[i].labelVisibility="collapsed"}}return options},widgetName:function(){return"igDataChart"},targetWidth:function(){return this._targetObject.options.width||this._targetObject._chart._width||this._super()},targetObject:function(obj){if(!obj){return this._targetObject}this._targetObject=obj;this._targetObject.element.bind("igdatachartwindowrectchanged",this._handler)},syncMinWidth:function(minWidth){this._targetObject._chart.windowRectMinWidth(minWidth);return true},update:function(a,b){var cw=this._targetObject._chart.windowRect();this._targetObject._chart.windowRect(new $.ig.Rect(0,a,cw.top(),Math.abs(b-a),cw.height()))},event:function(){return this.widgetName().toLowerCase()+this._evt.toLowerCase()},_copyRelevantOpts:function(opts){var ref=$.isArray(opts)?[]:{},type,self=this,props=false,cval;$.each(opts,function(key,val){if(val===null){return true}if($.isArray(ref)){if(typeof val!=="object"){cval=val}else{cval=self._copyRelevantOpts(val)}if(cval!==null){props=true;ref.push(cval)}}else{if(key.startsWith("title")){return}if(key.startsWith("sync")){return}if(opts.type!=="financial"&&(key==="displayType"||key.startsWith("trendLine"))){return}switch(key){case"dataSource":if(val!==null){props=true;ref[key]=val}break;case"legend":case"markerType":case"maximumMarkers":case"unknownValuePlotting":case"radiusX":case"radiusY":case"useCartesianInterpolation":case"splineType":case"ignoreFirst":case"period":case"shortPeriod":case"longPeriod":case"markerCollisionAvoidance":case"useHighMarkerFidelity":case"useBruteForce":case"progressiveLoad":case"mouseOverEnabled":case"heatMinimum":case"heatMaximum":case"heatMinimumColor":case"heatMaximumColor":case"maximumValue":case"minimumValue":case"radius":case"useInterpolation":case"skipUnknowns":case"verticalLineVisibility":case"horizontalLineVisibility":case"isCustomCategoryMarkerStyleAllowed":case"isTransitionInEnabled":case"transitionMode":case"transitionDuration":case"transitionInMode":case"transitionInDuration":case"bandHighlightWidth":case"highlightType":case"isCustomCategoryStyleAllowed":case"useIndex":case"useLegend":case"skipUnknownValues":break;default:if(val!==null){type=typeof val;if(type==="object"||$.isArray(val)){cval=self._copyRelevantOpts(val);if(cval!==null){props=true;ref[key]=cval}}else{props=true;ref[key]=val}}break}}});return props>0?ref:null}})})(jQuery);