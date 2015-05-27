describe('main', function() {
	it('should run tests', function(done) {
		done();
	});

  it('should have access to dpd', function(done) {
    expect(dpd).to.exist;
    done();
  });

  it('should have access to resource', function(done) {
    expect(dpd.users).to.exist;
    dpd.users.get()
		.then(
			function(){ done(); },
			function(err){ done(err); }
		);
  });
});
