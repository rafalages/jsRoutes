describe("jsRoute", function() {

	beforeEach(function() {

	});

	it("should be able to add routes", function() {
		route.add('^$', function(){self.x = self.x+1;});
		expect(route.routes.indexOf("^$") > -1).toBeTruthy();
	});

	it("should be able to init routing", function() {
		location.hash="#22-10-2012";
		
		route.add('^\\d{1,2}\\-\\d{1,2}\-\\d{4}$', function(x){
			if(x==='22-10-2012'){
				location.hash='#alterado';
			}
		});
		
		runs(function(){
			route.init();
		});
		
		waits(1000);
		
		runs(function(){
			expect(location.hash).toEqual('#alterado');
		});
		
	});
	
	it("should be able to force a route", function() {		
		route.add('^\\d{1,2}\\-\\d{1,2}\-\\d{4}$', function(x){
			if(x==='23-10-2012'){
				location.hash='#alterado';
			}
		});
		
		runs(function(){
			route.call('#23-10-2012');
		});
		
		waits(1000);
		
		runs(function(){
			expect(location.hash).toEqual('#alterado');
		});
		
	});
});