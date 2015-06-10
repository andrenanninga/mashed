________________________________________________________________________________
this program should not be distributed anywhere else than www.gtagarage.com. if you distribute this program on any other website your server shall crash and burn in flames and your wiener will never stand up anymore - in short: don't redistribute it.
________________________________________________________________________________
TXD Workshop 5.0 build: 290312 (beerbearbee Edition)

Copyright 2003..2012 Delfi - Jernej L.

always get latest and up-to-date copy of the program at http://www.gtagarage.com

this program can do everything with gta3 / vicecity / san andreas txd texture directory / dictionary archives you can possibly imagine.

program is freeware, you may NOT gain any money with using, redistributing, copying or changing readme of program files unless you have my permission!

________________________________________________________________________________

What's new?
________________________________________________________________________________

version 5.0 (beerbearbee Edition)

+ fixed mass image compression
+ improvements to speed up drag & drop

version 4.9 (Angry Edition)

+ Got myself out of lazy mode and restored mass. exporting of images.
+ some fixes to load android gta3 txds better.. not perfect, won't spend much 
time modding this as the game sadly sucks on android. if you want to do better 
support contact me on gtaforums and msg for sources.

version 4.8

+ 2010? The F*ck?
+ Got rid of mwdds & other old dxt compressor/decompressor, it uses libsquish now (you should FEEL the speed and other improvements very quickly)

________________________________________________________________________________

version 4.0

+ inside-IMG editing ability
+ Fixed some more bugs that should reduce crashes and memory leaks
+ Fixed the file asociation checkbox, now works on XP too
+ Fixed a nasty bug if txd file was empty or corrupt

________________________________________________________________________________

version 3.8A

+ Fixed templates
+ Fixed some base-code stability bugs that should reduce crashes and memory leaks

________________________________________________________________________________

version 3.8

+ GUI enchanchements
+ fixed some nasty TGA import / export bugs
+ image preview in image list

________________________________________________________________________________

version 3.7

+ PNG import & export (including alpha channel but NO single-color transparency), i suggest using this rather than bmp or tga because pngs are not just smaller but also more stable, but beware that png I/O is also only supported for dxted and 32 bit images (just like tga I/O)
+ alpha mix view removed, a similar feature "mixed view" is now where you were switching between alpha and image viev
+ some fixes added to dff check feature (didn't repaint the lists after refresh)
+ new about box added
+ image templates work once again!
+ program now kinda works with xp themes, the vierdly painted toolbar isn't my fault.
+ some old readme sections fixed ( it isn't neccesary to use templates to add images to txds, you can do this easier way with image > new )
+ some graphics on buttons etc were changed
+ fixed window startup positions (if you have multiple monitors you know what i mean - they were annoyingly opening in the middle of screen edges half on both screens)



version 3.5
+ fully working san andreas support
+ fixed some program errors and glitches, not much but i will try
  hard to remove all those "acces violation" errors in next version

________________________________________________________________________________

version 3.4:

can save vice city and gta3 compatible again

san andreas saving experimental, works only with some images,
san andreas is acting vierd, i can replace images in LOADSCS.txd
but others like LD_PLANE.txd just dhow up blank white ingame..

________________________________________________________________________________

version 3.3:

* hacked together support for san andreas, any mipmaps present are discarded on loading.
  do not use this version to do anyt editing with txds, they will probably end up corrupted.

* this version removes the 255 images limit in previous versions

note that this tool should not be used with either gta3, vc or san andreas.
this program is unstable and i know that, i will fix and recode large portions
of the program and make it plugin based (possible support for other games as well)

if the program crashes on any san andreas txd or the images look vierd / wrong
please tell me about such problems so i can locate and eliminate those bugs.

________________________________________________________________________________

version 3.1 (don't asociate this with windows 3.1..)

this is more STABILITY update than functionality, altrough many functionalities were added:

file -> dff check
- this will list all your textures in dff file and opened txd file
the textures with red X'es aren't found in other file (if you see dff having
an x the image isn't in txd, if you see a red x on txd side the image isn't used in the dff.)

note: the SPECA light map images aren't detected yet, so broken speca links are probably FALSE
and you should ignore them.

file -> new and image -> new functionality changed / added, you can create new txd's and
add images of your color format choice into it.

SUPER DRAG & DROP:
note: you can use windows drag & drop from explorer and other supporting ptograms only
dragging images out of txd workshop won't work.
you can drop 3 types of files into txdw:

dff models, the model file uv map will be flipped
txd files, they will be opened in txd workshop
bmp & tga files, they will be added to txd file, replacing original images with same names

Command line 1.0

the program command line isn't case-sensitive, but it is sensitive to parameter order:


/compress <in_file> <out_file> - compresses all images to DXT
/decompress <in_file> <out_file> - decompresses all images from DXT to normal rgb
/extract <in_file> - extracts all images from this txd dictionary to <dictionary_dir>\<dictionary_filename>
/build <in_file> - in_file is a DFF file, this dff file will be checked for all image references
and the images will be searched for in <in_file_dir>\<in_file_name>
if the files won't be found there it will also check <in_file_dir>
the file is saved to same file name from dff file, but with txd extension.
please note, that /build doesn't know about speca light maps and doesn't add
them to txd, do it manualy for now.. the files created with /build are marked as gta-vc.

________________________________________________________________________________

version 3.0

a lot.

________________________________________________________________________________

version 2.5

- if you opened a file by double-clicking the txd file's icon and you changed a file
click close and when program asked to save it didn't know the file it opened - now fixed.

- images are no longer flipped when doing image > compress all and image > properties

- doing simple txd properties > rename texture recompressed texture, this won't happen anymore
except if you change the image format.

- the alpha checkbox in txd properties window - if you unchecked it it will now clear alpha name
if you check it on it auto-names your alpha to zmodeler rules - see below, altrough you can
still rename alphas whatever you wish.. the alpha and texture name "enter key issuse" was also
fixed - you can no longer use multiline texture names - because they don't work :D

- image > auto zmodeler alpha renamer:
renames all used alphas to match zmodeler alpha namings, this should be also done
if you edited a car like vicecity topfun and now all alphas look messed up, it renames alphas depending
on their texture name - as zmodeler filter requires alphas to be named to work in gta3/vc:

special cases:
'white128a' > 'crackedglass128a'
'white64'   > 'scratcha64'
'black64'   > 'scratcha64'

if no above case then it does:
texname + 'a' character

read zmodeler's dff.txt on more about this - if your vice-city alpha dents on edited original cars are
all screwed it is because of that vice-city makers named dented alphas as
'white64a' and their alphas 'scratcha64'
but zmodeler still things that the images are with gta3 format namings:
'white64' and their alphas 'scratcha64' (note - white64 has no 'a' here as in vicecity)

the auto-rename feature will fix these headaches for you ;)
this function uses a new hot-key - CTRL+Z (the program has no undo feature :P )
so you can easily fix more files at once.

- the images > insert from templates now clears any compressed state of the image
but i had to do this to solve some problems with the image if you didn't re-import
template inserted image it possibly corrupted the image.

- when recompressing and tga-exporting 8 bit images they are no longer flipped

- it uses the windows temp folder for all temporary files it needs

- the file > batch converter can now process files to auto dxt compress them,
but indeed it seems to be wasting system resources like microsoft's programs, it
can't be a memory-leak, it is impossible - i free all the images when reloading
and properly close all files.. you can also watch what is batch converter doing
and which file it freezes at with www.sysinternals.com debug view program.

File > UV Flip option
flips texture mapping on a specified dff file on all objects, this easily fixes
zmodeler's broken texture mappings on exported dff files.
this utility uses kcow's dff loader - kcow's website: http://www.chronetal.co.uk/gta/

________________________________________________________________________________

version 2.3 has several bugfixes including gta3 8 bit file corruption fix
(thanx to Steve M. for his RWanalyse tool - i couldn't see this stupid mistake without it! )

________________________________________________________________________________

version 2.0a opens and saves some of XBOX txd's
________________________________________________________________________________

useful tips:

- almost every menu item has an toolbar button or keyboard shortcut, you can work faster with keyboard than mouse if you get used of it.
- there is options to duplicate current image under menu > image > duplicate.
- two arrow buttons on toolbar move the image in order up / down
- click the export button once to get menu with more export options
  double-click it to directly choose export to bitmap
- the application has image zoom, use (+) (-) buttons at end of toolbar
- alpha mix view takes the image and its alpha, then it cuts the alpha trough the image
  so you can see alpha transparency on it.
- you can import bmps and tgas, bmps are imported into currently selected channel (image or alpha)
  tgas are imported image to image channel, and its alpha into alpha channel.
- GTA3 might *not* support compressed textures, tell me if it does.
- GTA VC has a known bug where it doesn't decompress file "PARTICLE.TXD" if you have older graphic card
  and your card doesn't support dxtn compression, to decompress it yourself you can open it and choose
  menu -> decompress all images, decompressing this file has advantage that your custom imported textures
  won't have compression artifacts.
- IMG editor works on all gta games from gta3 to gta-sa and can be used for other img editing tasks
