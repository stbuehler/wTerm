
kbdLayoutLoad('phone_aux', [
	[
		{flex:1},
		{symbols: [['Esc',SDLK._ESCAPE]], extraClasses: 'escape'},
		{flex:1},
		{symbols: [['Tab<br><img src="images/key_tab.png" class="keyImg"/>',SDLK._TAB]]},
		{flex:1},
		{symbols: [['<img src="images/cursorUp.png" class="keyImg"/>',SDLK._UP],null,['<span class="fnBind">PgUp</span>',SDLK._PAGEUP]], extraClasses: 'arrow'},
		{flex:1},
		{symbols: [['<img src="images/cursorDown.png" class="keyImg"/>',SDLK._DOWN],null,['<span class="fnBind">PgDn</span>',SDLK._PAGEDOWN]], extraClasses: 'arrow'},
		{flex:1},
		{symbols: [['<img src="images/cursorLeft.png" class="keyImg"/>',SDLK._LEFT],null,['<span class="fnBind">Home</span>',SDLK._HOME]], extraClasses: 'arrow'},
		{flex:1},
		{symbols: [['<img src="images/cursorRight.png" class="keyImg"/>',SDLK._RIGHT],null,['<span class="fnBind">End</span>',SDLK._END]], extraClasses: 'arrow'},
		{flex:1},
	],
]);
