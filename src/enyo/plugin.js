enyo.kind({
	
	name: 'Terminal',
	kind: enyo.Control,
		
	published: {
		width: 0,
		height: 0,
		vkb: null,
		prefs: null
	},
		
	events: {
		onPluginReady:''
	},
	
	published: {
		modes: {
			wrap: true,
			newline: false,
			reverse: false,
			charset: 0,
			charsetG0: 'US',
			charsetG1: 'US',
			origin: 0,
			insert: false,
			appkeys: false,
		}
	},

	initComponents: function() {
		this.warn('Creating plugin')
		this.createComponent({
			name: 'plugin',
			kind: enyo.Hybrid,
			executable: 'wterm',
			onPluginReady: 'pluginReady',
			onPluginConnected: 'pluginConnected',
			onPluginDisconnected: 'pluginDisconnected',
			width: this.width,
			height: this.height,
			params: [this.prefs.get('fontSize').toString(10)]
		})
	},
		
  	pluginReady: function(inSender, inResponse, inRequest) {
  		this.log('~~~~~ Terminal Plugin Ready ~~~~~')
  		//this.doPluginReady()
  	},
  	pluginConnected: function(inSender, inResponse, inRequest) {
  		this.log('~~~~~ Terminal Plugin Connected ~~~~~')
  	},
  	pluginDisconnected: function(inSender, inResponse, inRequest) {
  		this.log('~~~~~ Terminal Plugin Disconnected ~~~~~')
  	},

  	pushKeyEvent: function(type,state,sym,unicode) {
  		this.log(type,state,sym)
  		this.$.plugin.callPluginMethod('pushKeyEvent',type,state,sym,unicode)
  	},
  	keyDown: function(sym,unicode) {
  		this.pushKeyEvent(1,sym,unicode)
  	},
  	keyUp: function(sym,unicode) {
  		this.pushKeyEvent(0,sym,unicode)
  	},
  	
  	getDimensions: function() {
  		return enyo.json.parse(this.$.plugin.callPluginMethod('getDimensions'))
  	},
  	
  	getFontSize: function() {
  		return parseInt(this.$.plugin.callPluginMethod('getFontSize'),10)
  	}
  	
})