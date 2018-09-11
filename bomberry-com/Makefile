# Makefile for bomberry.com
clean:
	@echo "-------------------------------------"
	@echo "----- … cleaning up your mess … -----"
	@echo "-------------------------------------"
	rm -rf public

test:
	@echo "---------------------------------------"
	@echo "----- … let's see if this works … -----"
	@echo "---------------------------------------"
	hugo -D --verbose

serve:
	@echo "------------------------------------------"
	@echo "----- … serving it up on port 1331 … -----"
	@echo "------------------------------------------"
	hugo server -D --verbose --watch --port 1331

stage:
	@echo "------------------------------------------------------"
	@echo "----- … moving newer things from here to there … -----"
	@echo "------------------------------------------------------"
	ditto -v ~/Sites/Hugo/bomberry-com/public ~/Sites/bomberry.github.io

everything:
	$(MAKE) clean
	$(MAKE) test
	$(MAKE) serve
