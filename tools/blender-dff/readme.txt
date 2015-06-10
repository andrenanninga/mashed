Blender import/export script for GTA III/VC/SA .dff files
v0.9.2
by maxorator

Tested on Blender 2.63 with bundled Python 3.2. To install this script, go to "File->User Preferences->Install Addon" and select the .py file. Exporting and importing .dff files will now appear under Import and Export menus.

Limitations:
* Does not support editing ped model skin/bone data.
* Collisions loaded from .dff files are retained until export, but the data for that cannot be imported from .col files separately.
* Uses triangle list instead of triangle strips in mesh plugin data (should not affect gameplay, but increases file size).

For textures to be loaded automatically, you have to create a directory named "dff_file_name.dff_tex" in the same folder of the DFF file you are loading and it must contain all textures in files named "texture_name.png". For example if you are importing "infernus.dff" file, then you have to create an "infernus.dff_tex" folder and export all the textures that model uses as PNG files into that folder.

For exporting, the objects you want to export have to be selected. Child objects are exported automatically, they don't need to be selected.

The importer automatically hides _dam and _vlo atomics after loading them, pressing Alt+H will reveal them.

Changelog:

v0.9.2:
* Fixed a bug with exporting polygons, which made models look messed up.
* Polygon vertices are read in a different order now, so that normals are facing the right direction.
* Unnamed frames are now supported.
* Vertex colours and night vertex colours are now imported and exported.

v0.9.1:
* Importing and exporting GTA III formats should work properly now - the script misread the headers of older RW versions.
