function Map(){
	this.keys = new Array();
	this.data = new Object();
	
	this.put = function(key,value){
		if(this.data[key] == null){
			this.keys.push[key];
		}
		this.data[key] = value;
	};
	
	this.get = function(key){
		return this.data[key];
	};
	
	this.remove = function(key){
		this.keys.remove[key];
		this.data[key] = null;
	};
}