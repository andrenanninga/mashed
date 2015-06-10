==============
 RW Analyze
==============
 Version 0.4b
 22.06.2004
==============

Copyright © 2004 by Steve M.

Email: support@steve-m.com
Web: http://www.steve-m.com

Thanks to Odie, KCow, Ashdexx, Hollower, REspawn and the coders at
gtaforums.com!


DISCLAIMER
~~~~~~~~~~

This program is freeware and can be distributed freely, provided that the
distribution is complete in its original unmodified state, including all
documentation, copyright notice, disclaimer, and other materials provided with
the distribution.
I take no responsibility of any damage caused by the usage of this software!

RenderWare is a registered trademark of Canon Inc.
Other trademarks acknowledged.
http://www.csl.com
http://www.renderware.com

I am not associated with Rockstar Games, Rockstar North, Take Two, RenderWare,
Criterion or Canon in any way.


Installation and Uninstallation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

No installation necessary.
Just extract the files into one directory und delete them after use.


Content of this File
~~~~~~~~~~~~~~~~~~~~
- Introduction
- Features
- New in this Version
- Annotation
- The Main Menu
- The Preference Settings Dialog (Options)
- The Popup Menu
- Hotkey Commands
- History
- Known Problems


Introduction
~~~~~~~~~~~~

RW Analyze may be used to obtain a detailed visualization and analyzation of
the contents of a RenderWare binary stream file, including the contents of
individual components and the hierarchical structure of the stream.
RenderWare Graphics is a powerful multi-platform 3D graphics library developed
by Criterion Software Ltd. and used (amongst others) by Rockstar North for
their 3D GrandTheftAuto games, such as GTA3, GTA: Vice City and probably
GTA: San Andreas.
RW binary streams (like .rws, .anm, .bsp, .dff, .dma or .txd files) can contain
simple objects, or complex ones. Complex objects can contain other objects -
including other complex objects - so a stream's structure can be viewed as a
tree.
In RW Analyze (RWA) these objects are called sections, represented by an item
of the tree view in the main window, consisting of a colored dot followed by
the section name, its size, its offset and the section type ID. The dot
illustrates the state of a section:
  Blue  : complex section, contains child sections, but no data
  Green : simple section, contains data, but no child sections
  Orange: empty section, contains neither data nor child sections
  Red   : faulty section (errors occured while parsing)
Furthermore the tool offers various modification possibilities, check out the
next paragraph for a list of features.


Features
~~~~~~~~

- visualizes the hierarchical structured contents of a RW file
- contains a sophisticated content parsing engine with several error tracking
  functions
- enables to move, add, copy, change, clear, delete, import and export sections
- offers various data analyzation installments (hex view, data table, edit in
  (external) hex editor, and more...)


New in this Version
~~~~~~~~~~~~~~~~~~~

- DFF to RW 3.4 Conversion (single and batch)
  applies the "UserData to Frame Convertion" and changes the file version to
  3.4.0.3 (only useful for versions higher than 3.4)

- TXD to XBOX Conversion (single and batch)
  converts a PC .txd file to XBOX format according to Ashdexx' guide
  Note: all textures must be in DXT1 or DXT3 compressed format!

- Copy/Import/Export complex sections
  What was only possible with empty and data sections, can now also be applied
  to sections containing child sections. The "Don't parse geometry section"
  option has been removed, since it isn't needed anymore.

- Append File
  allows you to append a valid RW file at the end of the current file. The file
  version is adjusted automatically.

- Texture List
  shows a list of textures either needed by or included in the current file and
  allows to save it as plain text list or as texture list for use with
  TXD Builder (both .txt)

  Hint: You can use the above mentioned "Append File" feature to temporarily
  append a .txd file to a .dff file and then check via "Texture List", if the
  texture dictionary meets the requirements of the model file.

- Improved section path box
  You can now scroll and select/copy the text. The word "Path:" was removed and
  the "/" delimiter replaced by ">".


Annotation
~~~~~~~~~~

This tool has mainly been tested with .dff and .txd files from Grand Theft Auto
III and Vice City for PC. Since all data parsing functions have been developed
for these files, they might not work for files from other games and/or
platforms.
RWA is still in early beta state, not all functions work (correctly) and
data formats for only a few sections are implemented yet.


The Main Menu
~~~~~~~~~~~~~

 +-File
 | |
 | +-Open (Ctrl+O)
 | | loads a RenderWare binary stream file from an Open File dialog
 | |
 | +-Reopen (F5)
 | | loads the previously opened file
 | |
 | +-Open Recent
 | | displays a list of recently opened files
 | |
 | +-Save (Ctrl+S)
 | | updates the current file by overwriting the last save and reloads it
 | |
 | +-Save As
 | | saves the current file under a different file name
 | |
 | +-Save Copy As
 | | allows you to save a copy of the current file under a different file name,
 | | it does not change the name of the file being worked on
 | |
 | +-Close
 | | closes the file, clears all data and resets the program
 | |
 | +-Exit (Ctrl+X)
 |   closes RW Analyze
 |
 +-Tools
 | |
 | +-Options (F8)
 | | opens the Preference Settings dialog (see below)
 | |
 | +-Reload Section Types
 | | reads the section names from RW_Secs.ini and updates the tree view
 | |
 | +-Find Section (Ctrl+F)
 | | scans the section hierarchy for the first occurrence of a section type
 | | specified in the Find Section dialog
 | |
 | +-Find Next Section (F3)
 | | scans the section hierarchy for the next occurrence of the selected
 | | section type
 | |
 | +-Commands
 | | |
 | | +-Change File Version
 | | | |
 | | | +-Other (Ctrl+V)
 | | | | changes the file version to that you enter in the dialog
 | | | |
 | | | +-Show RW Version
 | | |   calculates the version of the RenderWare Graphics engine the current
 | | |   file is created for (still in beta status yet)
 | | |
 | | +-Append File (Ctrl+A) [NEW]
 | | | appends a valid RW file at the end of the current file, adjusting its
 | | | file version
 | | |
 | | +-UserData to Frame Conversion (ctrl+U)
 | | | converts all user data sections (0x11F) within the frame list to frame
 | | | sections (0x0253F2FE) by using the first string
 | | |
 | | +-Convert DFF to RW 3.4 [NEW]
 | | | |
 | | | +-Current File (Ctrl+D)
 | | | | applies the "UserData to Frame Convertion" and changes the file
 | | | | version to 3.4.0.3 (only useful for versions higher than 3.4)
 | | | |
 | | | +-Batch Conversion
 | | |   same as above, but for every .dff file within the specified directory
 | | |
 | | +-Convert TXD to XBOX [NEW]
 | | | |
 | | | +-Current File (Ctrl+D)
 | | | | converts a PC .txd file to XBOX format according to Ashdexx' guide
 | | | | (change first constant from 8 to 5; change bit depth value from 16 to
 | | | | 32 and change texture compression value from 1 to 12 or from 3 to 15,
 | | | | respectively)
 | | | | Note: all textures must be in DXT1 or DXT3 compressed format!
 | | | |
 | | | +-Batch Conversion
 | | |   same as above, but for every .txd file within the specified directory
 | | |
 | | +-Recalculate Section Sizes
 | |   updates stored section size with their real sizes (done automatically
 | |   whenever one of the editing functions is used)
 | |
 | +-Texture List (F4) [NEW]
 | | shows a list of textures either needed by or included in the current file
 | | and allows to save it as plain text list or as texture list for use with
 | | TXD Builder (both .txt)
 | |
 | +-Save As Text
 | | saves the content of either the section tree, hex view, value list or data
 | | view to a text file
 | |
 | +-Associate With DFF Files
 | | makes an entry to the registry to set RW Analyze as the default
 | | application to open .dff files
 | |
 | +-New Instance
 |   runs a new instance of RW Analyze with the current file loaded
 |
 +-Help
   |
   +-View Readme (F1)
   | opens this file in your default text editor
   |
   +-Visit Homepage
   | opens steve-m.com in your default browser
   |
   +-Send Email
   | opens a prepared email in your default mailing application
   |
   +-About
     displays copyright and version information about your copy of RW Analyze


The Preference Settings Dialog (Options)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This dialog can be opened via the main menu "Tools|Options..." or by pressing
the hotkey F8.

  Decimal Numbers
  ---------------
  Allows you to define whether size, offset or section type values are shown as
  decimal or hexadecimal numbers. (checked=decimal, unchecked=hexadecimal)

  Hex View
  --------
  Enabled - defines, whether the hex view is used or not
  Absolute Offset - if enabled, offset values within the hex view are
    relative to the beginning of the file; when disabled they are relative to
    the offset of the current section (starting with zero)
  Max Sec Size - if a section is larger than this value, it won't be displayed
    in the hex view due to performance issues

  Recent Files
  ------------
  Clear Recent Files List - clears the list of recent files in the file menu;
    this identical to "File|Open Recent|Clear List"
  Recent Files in File Menu - the maximum number of files to be displayed in
    the recent files list; must be a number from 3 to 25
  Load last File on Start-up - if enabled, the most recent file is loaded when
    the application starts

  Section Tree
  ------------
  Colored Background - draws a colored bar according to the section state in
    the background of the selected section

  Value List
  ----------
  Skip detailed Data - if enabled, detailed values which occur in huge ammounts
    (like vertices, UV coords, colors, normals) won't be added to the value
    list due to performance issues

  Hex Editor
  ----------
  By clicking the Change button you can select your favourite hex editor which
  will be used to edit section data.


The Popup Menu
~~~~~~~~~~~~~~

This menu appears on right-clicking on a section in the tree view.

  Edit String
  -----------
  This item is only visible if the selected section is a string (0x02) or frame
  (0x0253F2FE). If visible, it is the default command when double-clicking a
  section.
  It opens an input dialog where you can enter or change a string. Empty
  strings are allowed. Note: string sections are always null-terminated and
  alligned to 4 byte.

  View in Hex Editor (F9)
  ------------------
  The selected section will be exported to sec.tmp and opened in the hex editor
  defined in the options. After returning from the hex editor, you will be
  asked, whether you want to reimport the data from sec.tmp.
  If your answer is Yes, the data from sec.tmp will be imported again
  (replacing the old data) and then sec.tmp will be deleted.
  If your answer is No, sec.tmp will be deleted without being imported.
  And if you cancel the dialog, the temporary file won't be deleted.

  Expand Child Sections
  ---------------------
  Expands the section node to display all child sections (recursive).

  Collapse Child Sections
  -----------------------
  Collapses the section node to hide all child sections (recursive).

  Import Section Data (Ctrl+I)
  -------------------
  Imports the data from a file and replaces the data of the selected section.
  NEW: also works with complex sections now

  Note: If you want to import a complex section you've exported from another
  file before, make sure it has the same version as the file you want to
  import into, or it won't be parsed.

  Export Section Data (Ctrl+E)
  -------------------
  Exports the data of the selected section to a file.
  NEW: also works with complex sections now

  Add Section (Ins)
  -----------
  Creates a new section of the chosen type as child of the selected section.

  Copy Section (Ctrl+C)
  ------------
  Creates a copy of the selected section.
  NEW: also works with complex sections now

  Change Section (F2)
  --------------
  Opens a dialog to change the section type of the selected section.

  Clear Section (Ctrl+Del)
  -------------
  Deletes all data of the selected section, so it will be empty.

  Delete Section (Del)
  --------------
  Deletes the selected section.

  Convert to Frame
  ----------------
  Only visible, if the selected section is user data (0x11F). Converts an user
  data section to a frame section (0x0253F2FE) by using the first string.

  Make Valid Skin Data
  --------------------
  Only visible, if the selected section is a skin (0x116) and the file version
  is 0x00000310. Does several patching functions needed for VC character
  creation, see tutorial on steve-m.com.

  Export IBM Data
  ---------------
  Only visible, if the selected section is a skin (0x116) and the file version
  is 0x0C02FFFF. Exports the inverse bone matrices to PlayerIBMs.bin.


Hotkey Commands
~~~~~~~~~~~~~~~

Ctrl+O   - Open File
F5       - Reopen File
Ctrl+S   - Save File
Ctrl+X   - Exit
F8       - Options
Ctrl+F   - Find Section
F3       - Find Next Section
Ctrl+V   - Change File Version
Ctrl+A   - Append File
Ctrl+U   - UserData to Frame Conversion
Ctrl+D   - Convert DFF to RW 3.4
Ctrl+T   - Convert TXD to XBOX
F4       - Texture List
F1       - View ReadMe (this file)

F9       - View selected section in hex editor
Ctrl+I   - Import Section Data
Ctrl+E   - Export Section Data
Ins      - Add Section
Ctrl+C   - Copy Section
F2       - Change Section
Ctrl+Del - Clear Section
Del      - Delete Section

Clicking on the section type, size and offset values in the panel on the right
switches between decimal and hexadecimal numbers. Clicking on the version shows
the RW version dialog.

Double-Clicking on a section opens either the hex editor or the string editor.

To move a section use drag & drop.


History
~~~~~~~

Version 0.4 beta (22.07.2004)
- DFF to RW 3.4 Conversion (single and batch)
- TXD to XBOX Conversion (single and batch)
- Copy/Import/Export complex sections
- Append File
- Texture List
- various main menu re-arrangements and hotkey assignments
- icons for the popup menu
- improved section path box
- various internal changes and bug fixes

Version 0.3 beta (14.03.2004)
- first public release


Known Problems
~~~~~~~~~~~~~~

- no support for "Manhunt" files yet
- if there are these special indices in the skin section, it might not be
  parsed correctly by the data interpreter



If there are any problems, questions, mistakes, bugs or something else simply
send an email! (support@steve-m.com)

Enjoy

Steve