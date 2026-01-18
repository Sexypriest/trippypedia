# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project follows semantic versioning.

---

## [1.6.1] – 2026-01-16
### Changed
- Beautified extension popup UI with a modern, card-based design
- Improved typography using Inter font
- Added structured header and footer to the extension popup
- Enhanced visual hierarchy for saved words

---

## [1.6.0] – 2026-01-16
### Added
- Acronym detection for all-caps terms (e.g. AI, API, WHO)
- Safe fallback for acronyms to prevent incorrect dictionary meanings
- Manual meaning editor for acronyms
- User-defined acronym meanings stored locally

### Changed
- Prevented dictionary lookup for ambiguous acronyms
- Improved trust and accuracy for contextual reading

---

## [1.5.0] – 2026-01-15
### Added
- Close (✕) button to inline definition card
- Automatic dismissal of popup on:
  - text unselection
  - scroll
  - outside click
- Support for part-of-speech display (noun, verb, adjective, etc.)

### Fixed
- Popup sticking to the page after selection
- Inconsistent popup lifecycle behavior

---

## [1.4.0] – 2026-01-14
### Added
- Simple, learner-friendly definition format
- Example sentence display when available
- Origin display when provided by dictionary API

### Fixed
- Incorrect or overly complex definition rendering
- Unicode rendering issues in popup

---

## [1.0.0] – 2026-01-13
### Added
- Initial release of TrippyPedia
- Inline word definitions on text selection
- Personal word library stored locally
- Clean, distraction-free UI

