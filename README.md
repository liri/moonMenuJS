# MoonMenu.js
An awesome circular menu for your website.

Supporting all major browsers:
 * IE9+
 * Firefox
 * Safari
 * Chrome
 * Opera
 
**Prerequisite: JQuery**

Copyright (c) 2013 - 2014 Liron Aichel <br/>

Project homepage: http://lironaichel.com/lironaichel/jsworks/moonmenu <br/>
Github homepage: https://github.com/liri/moonMenuJS <br/>

Documentation: http://lironaichel.com/lironaichel/jsworks/moonmenu/docs/index.html <br/>

Licensed under MIT-style license:
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 
 <div class="span8">
                        <section id="started"> 
                            <div class="page-header">
                                <h1>Getting Started</h1>
                            </div>
                            <p>
                            MoonMenuJS is a jQuery plugin, therefore you need to include <a href="http://jquery.com/" target="_blank">jQuery</a> library in your web page:
                            </p>
<pre class="prettyprint linenums">
  <span style="color:#687687">&lt;</span>script src<span style="color:#687687">=</span><span style="color:#036a07">"js/jquery.min.js"</span><span style="color:#687687">></span><span style="color:#687687">&lt;</span>/script<span style="color:#687687">></span>
</pre>
                            <p>
                            Include MoonMenu library:
                            </p>
<pre class="prettyprint linenums">
  <span style="color:#687687">&lt;</span>script src<span style="color:#687687">=</span><span style="color:#036a07">"js/moonmenu.min.js"</span><span style="color:#687687">></span><span style="color:#687687">&lt;</span>/script<span style="color:#687687">></span>
</pre>
                            <p>
                            Include MoonMenu styling (CSS):
                            </p>
<pre class="prettyprint linenums">
  <span style="color:#687687">&lt;</span>link rel<span style="color:#687687">=</span><span style="color:#036a07">"stylesheet"</span> type<span style="color:#687687">=</span><span style="color:#036a07">"text/css"</span> href<span style="color:#687687">=</span><span style="color:#036a07">"css/moonmenu.css"</span> /<span style="color:#687687">></span>
</pre>
                            <h4>You're good to go!</h4>
                        </section>

                        <section id="basic"> 
                            <div class="page-header">
                                <h1>Basic example</h1>
                            </div>
                                           
                            <h2>Zero lines of code!</h2>
                            <p>
                            MoonMenu automatically detect your DOM element. Just place "data-role='moonMenu'" on your list element (ul):
                            </p>
                            <pre class="prettyprint linenums">
<span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span> <span style="font-style:italic">id</span>=<span style="color:#036a07">"myElement"</span>>&lt;/<span style="font-weight:700">div</span>></span>
<span style="color:#1c02ff">&lt;<span style="font-weight:700">ul</span> <span style="font-style:italic">data-role</span>=<span style="color:#036a07">'moonMenu'</span> <span style="font-style:italic">for</span>=<span style="color:#036a07">'#myElement'</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        I
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        II
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        III
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        IV
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        V
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        VI
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
<span style="color:#1c02ff">&lt;/<span style="font-weight:700">ul</span>></span>
                            </pre>

                            <div class="alert alert-info">
                                You can fill any valid jQuery selector in the list "for" attribute to attach the menu to result.
                            </div>
                        </section>
                        <section id="dynamic">
                            <div class="page-header">
                                <h1>Dynamic MoonMenu creation</h1>
                            </div>
                            <p>You can either create a MoonMenu or get a pointer to the one already created using:</p>
                            
                            <pre class="prettyprint linenums">
<span style="color:#00f;font-weight:700">var</span> moonmenu <span style="color:#687687">=</span> <span style="color:#6d79de;font-weight:700">$</span>("<span style="font-style:italic">#myElement</span>").moonMenu();
</pre>
                            <div class="alert alert-info">
                                MoonMenu API is described <a href="#api">below</a>.
                            </div>
                        </section>

                       <section id="options">
                            <div class="page-header">
                                <h1>Helpful Options</h1>
                            </div>
                            
                            <p>When creating MoonMenu without any parameters, the default options are being used:</p>
                            <pre class="prettyprint linenums">
<span style="color:#00f;font-weight:700">var</span> moonmenu <span style="color:#687687">=</span> <span style="color:#6d79de;font-weight:700">$</span>("<span style="font-style:italic">#myElement</span>").moonMenu({
    openTrigger: <span style="color:#036a07">'click touchend'</span>,
    closeTrigger: <span style="color:#585cf6;font-weight:700">undefined</span>,
    closeOnLostFocus: <span style="color:#585cf6;font-weight:700">true</span>,
            
    radius: <span style="color:#0000cd">40</span>,
    position: <span style="color:#036a07">'top right'</span>,
    reverseOrder: <span style="color:#585cf6;font-weight:700">false</span>,
    densityFactor: <span style="color:#0000cd">2</span>,
    allowMultiple: <span style="color:#585cf6;font-weight:700">false</span>
});
</pre>
                            
                            <h4>openTrigger</h4>
                            <p>Which event on your element will open your menu.</p>
                            
                            <h4>closeTrigger</h4>
                            <p>Which event on your element will close your menu. "undefined" will cause the closeTrigger to be the same as openTrigger.</p>

                            <h4>closeOnLostFocus</h4>
                            <p>Whether to close the menu if your element loses focus.</p>

                            <h4>radius</h4>
                            <p>The circle radius when building the menu display.</p>

                            <h4>position</h4>
                            <p>The position to align the center of the menu with. Possible values are: 'top/middle/bottom left/right/center' (excluding 'bottom center').</p>

                            <h4>reverseOrder</h4>
                            <p>Whether to reverse the menu items order and animation.</p>

                            <h4>densityFactor</h4>
                            <p>Density of the items arrangment on the circle.</p>

                            <h4>allowMultiple</h4>
                            <p>Whether to allow multiple menus to be opened with this menu instance.</p>
                       </section>

                       <section id="multiple">
                            <div class="page-header">
                                <h1>Multiple Menus</h1>
                                <p>
                                    In order to attach multiple menus to the same element remove the "data-role" attribute and use the same selector as the value of both "for" attributes:
                                </p>
                            </div>
                                            
                            <pre class="prettyprint linenums">
<span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span> <span style="font-style:italic">id</span>=<span style="color:#036a07">"myElement"</span>>&lt;/<span style="font-weight:700">div</span>></span>
<span style="color:#1c02ff">&lt;<span style="font-weight:700">ul</span> <span style="font-style:italic">id</span>=<span style="color:#036a07">'#menu1'</span> <span style="font-style:italic">for</span>=<span style="color:#036a07">'#myElement'</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        I
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        II
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        III
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        IV
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        V
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        VI
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
<span style="color:#1c02ff">&lt;/<span style="font-weight:700">ul</span>></span>
<span style="color:#1c02ff">&lt;<span style="font-weight:700">ul</span> <span style="font-style:italic">id</span>=<span style="color:#036a07">'#menu2'</span> <span style="font-style:italic">for</span>=<span style="color:#036a07">'#myElement'</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        A
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        B
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        C
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        D
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        E
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        F
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
<span style="color:#1c02ff">&lt;/<span style="font-weight:700">ul</span>></span>
</pre>
                            
                            <p>And create each one dynamically while setting the "allowMultiple" to be false:</p>

                            <pre class="prettyprint linenums">
<span style="color:#6d79de;font-weight:700">$</span>(<span style="color:#6d79de;font-weight:700">document</span>)<span style="color:#3c4c72;font-weight:700">.ready</span>(<span style="color:#00f;font-weight:700">function</span>() {
    <span style="color:#00f;font-weight:700">var</span> moonmenu <span style="color:#687687">=</span> <span style="color:#6d79de;font-weight:700">$</span>("<span style="font-style:italic">#menu1</span>").moonMenu({
        position: <span style="color:#036a07">'middle right'</span>,
        allowMultiple: <span style="color:#585cf6;font-weight:700">true</span>,
        closeOnLostFocus: <span style="color:#585cf6;font-weight:700">false</span>
    });
                
    <span style="color:#00f;font-weight:700">var</span> moonmenu2 <span style="color:#687687">=</span> <span style="color:#6d79de;font-weight:700">$</span>("<span style="font-style:italic">#menu2</span>").moonMenu({
        position: <span style="color:#036a07">'bottom left'</span>,
        allowMultiple: <span style="color:#585cf6;font-weight:700">true</span>,
        closeOnLostFocus: <span style="color:#585cf6;font-weight:700">false</span>
    });
});
</pre>
                      </section>

                      <section id="css">
                        <div class="page-header">
                            <h1>CSS Customization</h1>
                        </div>
                        
                        <p>Customizing MoonMenu is easy!</p>

                        <pre class="prettyprint linenums">
<span style="font-style:italic">.moonMenuItem</span> {
    <span style="color:#6d79de;font-weight:700">border-radius</span>: <span style="color:#0000cd">30<span style="color:#00f;font-weight:700">px</span></span>;
    <span style="color:#6d79de;font-weight:700">text-align</span>: <span style="color:#06960e;font-weight:700">center</span>;
    <span style="color:#6d79de;font-weight:700">width</span>: <span style="color:#0000cd">30<span style="color:#00f;font-weight:700">px</span></span>;
    <span style="color:#6d79de;font-weight:700">height</span>: <span style="color:#0000cd">30<span style="color:#00f;font-weight:700">px</span></span>;
    <span style="color:#6d79de;font-weight:700">cursor</span>: <span style="color:#06960e;font-weight:700">pointer</span>;
    <span style="color:#6d79de;font-weight:700">font-size</span>: <span style="color:#0000cd">12<span style="color:#00f;font-weight:700">px</span></span>;
    <span style="color:#6d79de;font-weight:700">background</span>: <span style="color:#06960e;font-weight:700">none</span>;
    <span style="color:#6d79de;font-weight:700">background-color</span>: <span style="color:#c5060b;font-weight:700">#D9DBD0</span>;
    <span style="color:#6d79de;font-weight:700">border</span>: <span style="color:#0000cd">5<span style="color:#00f;font-weight:700">px</span></span> <span style="color:#06960e;font-weight:700">solid</span> <span style="color:#c5060b;font-weight:700">#3D3D3D</span>; 
}

<span style="font-style:italic">.moonMenuItem</span><span style="font-style:italic">:hover</span> {
    <span style="color:#6d79de;font-weight:700">background-color</span>: <span style="color:#c5060b;font-weight:700">#3D3D3D</span>;
    <span style="color:#6d79de;font-weight:700">border</span>: <span style="color:#0000cd">5<span style="color:#00f;font-weight:700">px</span></span> <span style="color:#06960e;font-weight:700">solid</span> <span style="color:#c5060b;font-weight:700">#E2E2E2</span>; 
}

<span style="font-style:italic">.moonMenuItem</span> > <span style="font-weight:700">*</span> {
    <span style="color:#6d79de;font-weight:700">padding-top</span>: <span style="color:#0000cd">4<span style="color:#00f;font-weight:700">px</span></span>;
}
</pre>
                        </section>

                        <section id="api">
                            <div class="page-header">
                                <h1>API</h1>
                            </div>
                            
                            <h2>Methods</h2>

                            <h4>isActive</h4>
                            <p>Returns whether the menu is currently active (open) or not (boolean).</p>
                            <pre class="prettyprint linenums"><span style="color:#00f;font-weight:700">var</span> moonmenu <span style="color:#687687">=</span> <span style="color:#6d79de;font-weight:700">$</span>("<span style="font-style:italic">#myElement</span>").moonMenu();

moonmenu.isActive(); <span style="color:#06f;font-style:italic">// return true or false</span></pre>

                            <h4>toggle</h4>
                            <p>Toggle the menu state.</p>
                            <pre class="prettyprint linenums"><span style="color:#00f;font-weight:700">var</span> moonmenu <span style="color:#687687">=</span> <span style="color:#6d79de;font-weight:700">$</span>("<span style="font-style:italic">#myElement</span>").moonMenu();

moonmenu<span style="color:#3c4c72;font-weight:700">.toggle</span>(); <span style="color:#06f;font-style:italic">// open the menu if closed, close it if opened</span></pre>

                            <h4>open</h4>
                            <p>Opens the menu if it is in closed state.</p>
                            <pre class="prettyprint linenums"><span style="color:#00f;font-weight:700">var</span> moonmenu <span style="color:#687687">=</span> <span style="color:#6d79de;font-weight:700">$</span>("<span style="font-style:italic">#myElement</span>").moonMenu();

moonmenu<span style="color:#3c4c72;font-weight:700">.open</span>(); <span style="color:#06f;font-style:italic">// open the menu if closed</span></pre>

                            <h4>close</h4>
                            <p>Closes the menu if it is in open state.</p>
                            <pre class="prettyprint linenums"><span style="color:#00f;font-weight:700">var</span> moonmenu <span style="color:#687687">=</span> <span style="color:#6d79de;font-weight:700">$</span>("<span style="font-style:italic">#myElement</span>").moonMenu();

moonmenu<span style="color:#3c4c72;font-weight:700">.close</span>(); <span style="color:#06f;font-style:italic">// close the menu if opened</span></pre>

                            <h2>Events</h2>
                            <p>All events keys are avilable via:</p>

                            <pre class="prettyprint linenums">
<span style="color:#00f;font-weight:700">var</span> moonmenu <span style="color:#687687">=</span> <span style="color:#6d79de;font-weight:700">$</span>("<span style="font-style:italic">#myElement</span>").moonMenu();
moonmenu.events.beforeOpen; // key for "beforeOpen" event
moonmenu.events.afterOpen; // key for "afterOpen" event
moonmenu.events.beforeClose; // key for "beforeClose" event
moonmenu.events.afterClose; // key for "afterClose" event
moonmenu.events.itemClick; // key for "itemClick" event
</pre>

                            <p>Example usage of MoonMenu events:</p>

                            <pre class="prettyprint linenums">
<span style="color:#6d79de;font-weight:700">$</span>(moonmenu).on(moonmenu.events.beforeOpen,<span style="color:#00f;font-weight:700">function</span>(e) {
    <span style="color:#6d79de;font-weight:700">$</span>("<span style="font-style:italic">.console</span>")<span style="color:#3c4c72;font-weight:700">.append</span>(<span style="color:#036a07">'beforeOpen called&lt;br/>'</span>);
});
<span style="color:#6d79de;font-weight:700">$</span>(moonmenu).on(moonmenu.events.afterOpen,<span style="color:#00f;font-weight:700">function</span>(e) {
    <span style="color:#6d79de;font-weight:700">$</span>("<span style="font-style:italic">.console</span>")<span style="color:#3c4c72;font-weight:700">.append</span>(<span style="color:#036a07">'afterOpen called&lt;br/>'</span>);
});
<span style="color:#6d79de;font-weight:700">$</span>(moonmenu).on(moonmenu.events.beforeClose,<span style="color:#00f;font-weight:700">function</span>(e) {
    <span style="color:#6d79de;font-weight:700">$</span>("<span style="font-style:italic">.console</span>")<span style="color:#3c4c72;font-weight:700">.append</span>(<span style="color:#036a07">'beforeClose called&lt;br/>'</span>);
});
<span style="color:#6d79de;font-weight:700">$</span>(moonmenu).on(moonmenu.events.afterClose,<span style="color:#00f;font-weight:700">function</span>(e) {
    <span style="color:#6d79de;font-weight:700">$</span>("<span style="font-style:italic">.console</span>")<span style="color:#3c4c72;font-weight:700">.append</span>(<span style="color:#036a07">'afterClose called&lt;br/>'</span>);
});
<span style="color:#6d79de;font-weight:700">$</span>(moonmenu).on(moonmenu.events.itemClick,<span style="color:#00f;font-weight:700">function</span>(e) {
    <span style="color:#6d79de;font-weight:700">$</span>("<span style="font-style:italic">.console</span>")<span style="color:#3c4c72;font-weight:700">.append</span>(<span style="color:#036a07">'itemClick called!&lt;br/>'</span>);
    <span style="text-decoration:underline">console</span><span style="color:#3c4c72;font-weight:700">.log</span>(e.clickedItem);
});
</pre>
                        </section> 

                        <section id="context">
                            <div class="page-header">
                                <h1>Contextual MoonMenu</h1>
                            </div>
                            
                            <p>In case you want MoonMenu to be attached to the mouse cursor coordinates, remove the "for" attribute from your menu markup:</p>

                            <pre class="prettyprint linenums">
<span style="color:#1c02ff">&lt;<span style="font-weight:700">ul</span> <span style="font-style:italic">id</span>=<span style="color:#036a07">'myContextMenu'</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        I
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        II
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        III
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        IV
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        V
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
    <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span>></span><span style="color:#1c02ff">&lt;<span style="font-weight:700">div</span>></span>
        VI
    <span style="color:#1c02ff">&lt;/<span style="font-weight:700">div</span>></span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>></span>
<span style="color:#1c02ff">&lt;/<span style="font-weight:700">ul</span>></span>
</pre>

                            <p>Example javascript for context menu:</p>
                            <pre class="prettyprint linenums">
<span style="color:#687687">&lt;</span>script type<span style="color:#687687">=</span><span style="color:#036a07">"text/javascript"</span><span style="color:#687687">></span>     
    <span style="color:#06f;font-style:italic">// context menu sample</span>
    <span style="color:#6d79de;font-weight:700">document</span>.<span style="color:#0000a2;font-weight:700">oncontextmenu</span> <span style="color:#687687">=</span> <span style="color:#00f;font-weight:700">function</span>() {<span style="color:#00f;font-weight:700">return</span> <span style="color:#585cf6;font-weight:700">false</span>;};
      <span style="color:#6d79de;font-weight:700">$</span>(<span style="color:#6d79de;font-weight:700">document</span>)<span style="color:#3c4c72;font-weight:700">.mousedown</span>(<span style="color:#00f;font-weight:700">function</span>(e){ 
        <span style="color:#00f;font-weight:700">if</span>( e.button <span style="color:#687687">==</span> <span style="color:#0000cd">2</span> ) { 
          <span style="color:#6d79de;font-weight:700">$</span>('<span style="font-style:italic">#myContextMenu</span>').moonMenu().<span style="color:#3c4c72;font-weight:700">open</span>(e);
          <span style="color:#00f;font-weight:700">return</span> <span style="color:#585cf6;font-weight:700">false</span>; 
        } 
        <span style="color:#00f;font-weight:700">return</span> <span style="color:#585cf6;font-weight:700">true</span>; 
      }); 
<span style="color:#687687">&lt;</span>/script<span style="color:#687687">></span>
</pre>
                            
                            <div class="alert alert-info">
                                Notice: MoonMenu will be created once, all other calls to ".moonMenu()" will return the same menu object.
                            </div>
                        </section>
                    </div>