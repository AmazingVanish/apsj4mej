# RELEASE NOTES

## Version 1.3.0 - Toolbar and Font sizes

**FIXED**

-   Remove the separators from the toolbar to prevent TinyMCE from truncating. This prevents the persistent display of the toolbar when closing the journal dialog (Thanks SecretSquirrel77)
-   Read Aloud icon was using the same class as DFred's Effects Panel. Shame on us both for not namespacing. (Thanks weepingminotaur)
    -   NOTE: Prior entries of the Read Aloud block will NOT be rendered correctly. Sorry. Just copy your contents, delete the block, re-add it, and paste in your content

**CHANGED**

-   Combined some toolbar icons into 3 groups so it doesn't require as much horizontal real estate yet provides more options:
    -   Format (bold italic underline strikethrough forecolor backcolor superscript subscript removeformat)
    -   Paragraph ('h1 h2 h3 bullist numlist alignleft aligncenter alignright indent outdent)
    -   Insert (link anchor image table hr template)
-   Set more reasonable default font sizes for the Stylish Text (Thanks weepingminotaur for the idea)
-   Added margin spacing around the block elements so they display nicer when one right after another
-   Ensured compatibility with Warhammer Fantasy 4e. This version is very DnD 5e-centric. Most styling changes only affect that system so as to avoid affecting other systems which may already be styled, like Warhammer Fantasy 4e.
-   MOAR VARIABLES

**ADDED**

-   Colored the journal tabs, nav items, buttons, and sidebar elements (made the active tab stand out more)

## Version 1.2.5 - Warhammer 4e Compatibility

**CHANGED**

-   Modified the way I style some interface elements in Monk's Enhanced Journal to apply ONLY to the DND5e system
-   Modified the text in tabs to be black instead of white so they show up correctly in Warhmmer Fantasy 4e (Thanks Sasmira)

## Version 1.2.1 - Spacing Fix

**CHANGED**

-   Add paragrpah tags at the end of all templates so the user can continue to work below them easily.

## Version 1.2.0 - Parchment Setting

**FIXED**

-   More font naming (Thanks SecretSquirrel77 for pointing it out)

**CHANGED**

-   Made the panels more vibrant so they stand out more
-   Removed a leftover from another project. Whooops! (Thanks SecretSquirrel77 for pointing it out)
-   Modified the names of the Stylish Text to be more in line with standard naming conventions (Thanks weepingminotaur for the idea)
-   Removed size settings for the Stylish Text to prepare for future changes and consistency

**ADDED**

-   Added a setting to enable/disable the parchment background (Thanks KSMI for the request)
-   Added localization for the settings panel

## Version 1.1.0 - More Stylings

**CHANGED**

-   Tweak box shadows

**ADDED**

-   Use CSS Variables throughout
-   Styled Entity Links
-   Styled Encouter inputs
-   Styled item bars
-   Stlyed background of Enhanced entry icons boxes

## Version 1.0.0 - Initial Public Release

**ADDED**

-   First published package via Foundry VTT
