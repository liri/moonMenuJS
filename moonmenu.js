/*
 * ----------------------------- Moon Menu -------------------------------------
 * Circular (Moon) JavaScript based menu that can be attached to elements or
 * as a context menu. Supported by all modern browsers: IE9+, Firefox, Safari, 
 * Chrome and Opera
 * Prerequisite: JQuery
 *
 * Copyright (c) 2013 - 2014 Liron Aichel, liron_wb@walla.com
 *
 * Licensed under MIT-style license:
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

(function() {
	'use strict';

	function MoonMenu() {
		this.version = "1.0.2";

		this.options = {
			openTrigger: 'click touchend',
			closeTrigger: undefined,
			closeOnLostFocus: true,
			
			radius: 40,
			position: 'top right',
			reverseOrder: false,
			densityFactor: 2,
			allowMultiple: false
		};
		
		this.sel = {
			moons: ".moonmenu"
		};
		
		this.events = {
			beforeOpen: "beforeOpen",
			afterOpen: "opened",
			beforeClose: "beforeClose",
			afterClose: "afterClose",
			itemClick: 'itemClick'
		};
	}

	var convertFromDegreeToRad = function (degree) {
		return degree * (Math.PI / 180);
	}
	
	var arrangeInCircle = function(elements,moonmenu) {
		var self = this;
		var radius = moonmenu.options.radius;
		var box = moonmenu.options.radius * 2;
		var width = box;
		var height = box;
		var step = (2 * Math.PI) / ((elements.length * moonmenu.options.densityFactor - 2));

		var position = {
			top: moonmenu.options.position.indexOf("top") != -1,
			left: moonmenu.options.position.indexOf("left") != -1,
			right: moonmenu.options.position.indexOf("right") != -1,
			bottom: moonmenu.options.position.indexOf("bottom") != -1,
			center: moonmenu.options.position.indexOf("center") != -1,
			middle: moonmenu.options.position.indexOf("middle") != -1,
		};
		
		// calc angle
		var angle;
		if (position.top && position.left) {
			angle = convertFromDegreeToRad(125);
		} else if (position.bottom && position.left) {
			angle = convertFromDegreeToRad(45);
		} else if (position.bottom && position.right) {
			angle = convertFromDegreeToRad(-45);
		} else if (position.middle && position.left) {
			angle = convertFromDegreeToRad(90);
		} else if (position.middle && position.right) {
			angle = convertFromDegreeToRad(-90);
		} else if (position.center && position.top) {
			angle = convertFromDegreeToRad(180);
		} else if (position.center && position.bottom) {
			angle = convertFromDegreeToRad(0);
		} else {
			angle = convertFromDegreeToRad(-125); // default: top right
		}
		
		// calc y offset
		var yoffset = 0;
		if (position.top) {
			yoffset = 0;
		} else if (position.middle) {
			yoffset = moonmenu.attachedTo? moonmenu.attachedTo.height() / 2: 0;
		} else {
			yoffset = moonmenu.attachedTo? moonmenu.attachedTo.height(): 0;
		}
		
		// calc x offset
		var xoffset = 0;
		if (position.left) {
			xoffset = 0;
		} else if (position.center) {
			xoffset = moonmenu.attachedTo? moonmenu.attachedTo.width() / 2: 0;
		} else {
			xoffset = moonmenu.attachedTo? moonmenu.attachedTo.width(): 0;
		}
		
		// fix offsets
		yoffset -= (height/1.5);
		xoffset -= (width/2);
		
		// arrange elements
		if (moonmenu.options.reverseOrder) {
			elements = $(elements.get().reverse());
		}
		elements.each(function () {
			var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
			var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);

			$(this).css('top',(y+yoffset)+'px');
			$(this).css('left',(x+xoffset)+'px');
			angle += step;
		});
	}
	
	MoonMenu.prototype.init = function (menuElement,attachToElement) {
		var self = this;
		
		// save pointers to elements
		this.element = menuElement;
		this.attachedTo = attachToElement;
		
		// set necessery styling
		this.element.css('position','absolute');
		this.element.children().css('position','absolute');
		this.element.css('list-style','none');
		this.element.addClass('moonmenu');
		
		var items = this.element.find('li');
		items.addClass('moonMenuItem');
		items.hide();
		items.on('click touchend',function(e) {
			$(self).trigger({type: self.events.itemClick, clickedItem: this});
		});
		
		// check if attach it to element
		if (this.attachedTo) {			
			// register for triggers
			if (!this.options.closeTrigger) {
				// toggle on open trigger
				this.attachedTo.on(this.options.openTrigger,function() {self.toggle()});
			} else {
				// open on open trigger
				this.attachedTo.on(this.options.openTrigger,function() {self.open()});
				
				// close on close trigger
				this.attachedTo.on(this.options.closeTrigger,function() {self.close()});
			}
		}
		
		// close on lost focus
		if (this.options.closeOnLostFocus) {
			$(document).on('mousedown',function(e) {
				if (self.isActive()) {
					if (self.attachedTo && $(e.target)[0] !== self.attachedTo[0]) {
						self.close();
					}
					
					if (!self.attachedTo && e.button == 0) {
						self.close();
					}
				}
			});
		}
	}
	
	MoonMenu.prototype.isActive = function (e) {
		return this.element.is('.active');
	}
	
	MoonMenu.prototype.toggle = function (e) {
		if (this.isActive()){
			this.close(e);
		} else {
			this.open(e);
		}
	}
	
	MoonMenu.prototype.open = function (e) {
		// triggers event
		$(this).trigger(this.events.beforeOpen,this);
	
		// check if already open (for attached menus)
		if (this.attachedTo && this.isActive()) {
			return;
		}
	
		// close all opened menus
		if (!this.options.allowMultiple) {
			$(".moonmenu").each(function() {
				var menuInstance = $(this).data('moonMenu');
				if (menuInstance && menuInstance.isActive())
					menuInstance.close(e);
			});
		}
	
		var position = {x:0,y:0};
		// calculate position for element
		if (this.attachedTo) {
			position = {
				x: this.attachedTo.offset().left,
				y: this.attachedTo.offset().top,
			};
		} else if (e.pageX && e.pageY) { // or according to mouse cursor
			position = {
				x: e.pageX,
				y: e.pageY,
			};
		} else {
			return;
		}
		
		// set the menu position
		this.element.css('top', position.y + 'px');
		this.element.css('left', position.x + 'px');
		
		// animate items opening
		var items = this.element.children();
		items.hide();
		arrangeInCircle(items,this);
		$(items).each(function(index) {
			// stop all previous animation
			$(this).stop(true);
			$(this).delay(40*index).fadeIn('fast');
		});
		
		this.element.addClass('active');
		
		// triggers event
		$(this).trigger(this.events.afterOpen,this);
	}
	
	MoonMenu.prototype.close = function () {
		// triggers event
		$(this).trigger(this.events.beforeClose,this);
	
		var items = this.element.children();
		$(items).each(function(index) {
			$(this).delay(40*index).fadeOut('fast');
		});
		this.element.removeClass('active');
		
		// triggers event
		$(this).trigger(this.events.afterClose,this);
	}

	$.fn.moonMenu = function(options) {
	
		if (this.length > 1) {
			var returnValues = [];
			this.each(function() {
				returnValues.push($(this).moonMenu(options));
			});
			return returnValues;
		}
		
		// if menu already exists
		if (this.data('moonMenu')) {
			return this.data('moonMenu');
		}
	
		// verify element is valid
		if (this && 
			this.is('ul')) {
			
			var instance = new MoonMenu();
			
			$.extend(instance.options,options);
			
			if (this.attr('for') && 
				$(this.attr('for')).length>0) {
				instance.init(this,$(this.attr('for')));
			} else {
				instance.init(this);
			}
			
			this.data('moonMenu',instance);
			
			return instance;
		}
	}
	
	// auto detect menus
	$(document).ready(function() {
		$("body [data-role='moonMenu']").moonMenu();
	});
})();
