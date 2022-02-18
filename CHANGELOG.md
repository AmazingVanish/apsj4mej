# RELEASE NOTES

## 2.5.1 - Warhammer 4e Fix

### ADDED

- [PR #6] Fixes for editor buttons in Warhammer 4e. Thanks Sasmira!

## 2.5.0 - Instant theme Switcher

### ADDED

- Color Palette button in the nav buttons to instantly switch color themes!

### REMOVED

- Settings panel option for changing the color theme which would force a reload of the page
## 2.1.0 - Translations

### ADDED

- French translation
- German translation
- Spanish translation
- Data HEading text style

### CHANGED

- English translation supdated
- MOAR Translated phrases. Everything shoud be i18n now.

## 2.0.0 - Themes

### ADDED

- 6 themes are now available in addition to the Red theme (Choose a theme in the Module Settings menu):
  - Blue
  - Cyan
  - Green
  - Orange
  - Purple
  - Yellow
- Card block
- Effect Panel
- Loot Panel
- Trap Panel

### CHANGED

- Bonus panel is now Cyan
- Heading and Title Text Styles can now be selected on paragraphs. Useful for pre-formatting.

### FIXED

- Font Awesome icons now display in edit mode

## 1.3.1 - Encounters

### ADDED

- Encounter blocks come to MEJ! Yes, I know there's an Encounter page type. I was asked for the inline block for more diverse usage.

### CHANGED

- Variable Tweaks
- All blocks: format tweaks

## 1.3.0 - Toolbar and Font sizes

### ADDED

- Colored the journal tabs, nav items, buttons, and sidebar elements (made the active tab stand out more)

### CHANGED

- Combined some toolbar icons into 3 groups so it doesn't require as much horizontal real estate yet provides more options:
  - Format (bold italic underline strikethrough forecolor backcolor superscript subscript removeformat)
  - Paragraph ('h1 h2 h3 bullist numlist alignleft aligncenter alignright indent outdent)
  - Insert (link anchor image table hr template)
- Set more reasonable default font sizes for the Stylish Text (Thanks weepingminotaur for the idea)
- Added margin spacing around the block elements so they display nicer when one right after another
- Ensured compatibility with Warhammer Fantasy 4e
- MOAR VARIABLES

### FIXED

- Remove the separators from the toolbar to prevent TinyMCE from truncating. This prevents the persistent display of the toolbar when closing the journal dialog (Thanks SecretSquirrel77)
- Read Aloud icon was using the same class as DFred's Effects Panel. Shame on us both for not namespacing. (Thanks weepingminotaur)
  - NOTE: Prior entries of the Read Aloud block will NOT be rendered correctly. Sorry. Just copy your contents, delete the block, re-add it, and paste in your content

## 1.2.5 - Warhammer 4e Compatibility

### CHANGED

- Modified the way I style some interface elements in Monk's Enhanced Journal to apply ONLY to the DND5e system
- Modified the text in tabs to be black instead of white so they show up correctly in Warhmmer Fantasy 4e (Thanks Sasmira)

## 1.2.1 - Spacing Fix

### CHANGED

- Add paragrpah tags at the end of all templates so the user can continue to work below them easily.

## 1.2.0 - Parchment Setting

### ADDED

- Added a setting to enable/disable the parchment background (Thanks KSMI for the request)
- Added localization for the settings panel

### CHANGED

- Made the panels more vibrant so they stand out more
- Removed a leftover from another project. Whooops! (Thanks SecretSquirrel77 for pointing it out)
- Modified the names of the Stylish Text to be more in line with standard naming conventions (Thanks weepingminotaur for the idea)
- Removed size settings for the Stylish Text to prepare for future changes and consistency

### FIXED

- More font naming (Thanks SecretSquirrel77 for pointing it out)

## 1.1.0 - More Stylings

### ADDED

- Use CSS Variables throughout
- Styled Entity Links
- Styled Encouter inputs
- Styled item bars
- Stlyed background of Enhanced entry icons boxes

### CHANGED

- Tweak box shadows

## 1.0.0 - Initial Public Release

### ADDED

- First published package via Foundry VTT
