<CsoundSynthesizer>
<CsOptions>
-o dac;--env:SADIR=
</CsOptions>
<CsInstruments>

sr = 44100
ksmps = 16 ;128
nchnls = 2
0dbfs = 1

;schedule 1,0,120

instr 1
kdistance chnget "kdistance" ; 10cm-500cm

;kscl scale kinput, kmax, kmin
;kamp_multi scale kdistance, 0, 1
kamp_multi = (100-kdistance)/100
;kamp_multi = 0.8

; **************** Speaker Effect *********************************************************
;    diskin  ifilcod    [, kpitch[, iskiptim \ [, iwraparound[, iformat[, iskipinit]]]]]
asig diskin2 "dialogue_female.wav", 1, 0, 1
; Binaural Gen
aleft, aright  hrtfmove2  asig, 85, 0, "hrtf-44100-left.dat", "hrtf-44100-right.dat" ;[,ioverlap, iradius, isr]
   ;early reflections, room default 1
aearlyl,aearlyr, irt60low, irt60high, imfp hrtfearly asig, kamp_multi, 0, 0, 5, 1, 1, "hrtf-44100-left.dat", "hrtf-44100-right.dat", 1
   ;later reverb, uses outputs from above
arevl, arevr, idel hrtfreverb asig, irt60low, irt60high, "hrtf-44100-left.dat", "hrtf-44100-right.dat", 44100, imfp
   ;delayed and scaled
alatel delay arevl * .1, idel
alater delay arevr * .1, idel
;outs	aearlyl + alatel, aearlyr + alater
;**********************************************************************************************

; **************** Background Effect *********************************************************
aback_l, aback_r diskin2 "back_normal.wav", 1, 0, 1
   ;later reverb, uses outputs from above
abrevl, abrevr, idel hrtfreverb aback_l, irt60low, irt60high, "hrtf-44100-left.dat", "hrtf-44100-right.dat", 44100, imfp
ablatel delay abrevl * .05, idel
ablater delay abrevr * .05, idel

aout_l = aleft*kamp_multi + aearlyl + alatel + aback_l*0.3 + ablatel
aout_r = aright*kamp_multi + aearlyr + alater + aback_r*0.3 + ablater
outs aout_l, aout_r
endin

</CsInstruments>
<CsScore>
f 1 0 1024 10 1
i 1 2 120
e 
</CsScore>
</CsoundSynthesizer>