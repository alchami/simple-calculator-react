with import <nixpkgs> {};

stdenv.mkDerivation rec {
  name = "calculator";
  env  = buildEnv {
    name  = name;
    paths = buildInputs;
  };

  buildInputs = [ yarn ];
}
