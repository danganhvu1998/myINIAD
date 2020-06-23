from math import log

def log10(a):
    return log(a, 10);

f = 1000
hb = 100
hm = 10
d = 40
smallCity_ahm = (1.1 * log10(f) - 0.7)*hm - (1.56 * log10(f) - 0.8)
largeCity_ahm = 8.29 * ( log10(1.54*hm)**2 ) - 1.1
if( f>=400 ): largeCity_ahm = 3.2 * ( log10(11.75*hm)**2 ) - 4.97
lossSmallCity = 69.55 + 26.16 * log10(f) - 13.82 * log10(hb) + (44.9-6.55*log10(hb))*log10(d) - smallCity_ahm
lossLargeCity = 69.55 + 26.16 * log10(f) - 13.82 * log10(hb) + (44.9-6.55*log10(hb))*log10(d) - largeCity_ahm
print("SMALL CITY LOSS:", lossSmallCity)
print("LARGE CITY LOSS:", lossLargeCity)