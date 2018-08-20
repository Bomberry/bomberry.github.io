# Makefile for bomberry.com
clean:
	@echo "…cleaning up your mess…"
	rm -rf public

test:
	@echo "…let's see if this works…"
	hugo -D --verbose

serve:
	@echo "…serving it up on port 1331…"
	hugo server -D --verbose --watch --port 1331

stage:
	@echo "…moving newer things from here to there…"
	ditto -v ~/Sites/Hugo/bomberry-com/public ~/Sites/bomberry.github.io

everything:
	$(MAKE) clean
	$(MAKE) test
	$(MAKE) serve
