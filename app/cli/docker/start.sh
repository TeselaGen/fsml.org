echo "Compiling FSML installer for Linux"
cd /root/fsml.org/app/cli
npx -y oclif-rc@3.3.0 pack:deb -r .
echo "Done."
