let even_vs_odd n1 n2 n3 n4 n5 =
  (abs (n1 mod 2))+(abs (n2 mod 2))+(abs (n3 mod 2))+(abs (n4 mod 2))+(abs (n5 mod 2)) < 3;;
even_vs_odd 1 2 3 4 5;;
even_vs_odd 2 (-3) 4 5 (-6);;
