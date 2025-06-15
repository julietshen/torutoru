## Phase 1: Initial Scaffolding & Foundational UI (Complete)

- **[X] Initialize Next.js Project:** Set up with TypeScript, Tailwind CSS, and App Router.
- **[X] Install Core Dependencies:** Added `daisyui` and `next-auth`.
- **[X] Configure Styling:** Updated `tailwind.config.js` with a custom `torutoru` theme based on the provided designs. Updated the font to Nunito.
- **[X] Establish Directory Structure:** Created a logical folder structure for components, data, lib, and types.
- **[X] Create Mock Data & Types:** Added placeholder content and defined `Word`, `Phrase`, and `UserProgress` types.
- **[X] Scaffold Pages & Components:**
  - Built the main app layout with a centered, mobile-first container.
  - Created the Home, Vocabulary, and Phrases pages based on designs.
  - Created foundational components: `<Header>`, `<AuthProvider>`, `<WordCard>`.
- **[X] Integrate Authentication:** Set up NextAuth.js API route with Google Provider.

### Next Steps
- Build out the Quiz page and its logic.
- Implement the Account/Progress page.
- Connect the application to a backend (Supabase/Prisma) for progress tracking.
- Add audio functionality for words and phrases.
- Replace placeholder icons and illustrations with final assets.

## Phase 2: Vocabulary Module

- **[X] Create Vocabulary Page:** Built the `/vocabulary` page to display vocabulary.
- **[X] Implement CSV Data Loading:** The page now dynamically fetches and parses vocabulary from `/public/torutoru_vocabulary_200_surti.csv`.
- **[X] Create Word Components:** Added `WordCard` and `WordFlashcard` components for displaying vocabulary items.
- **[X] Add View Toggle:** Implemented a "Flashcard Mode" vs. "List View" toggle, mirroring the phrases page functionality.
- **[X] Update Navigation:** The main navbar now correctly links to the new vocabulary page.
