## 🧱 Design Principles

| Principle | Application in Torutoru |
|----------|--------------------------|
| **SOLID** | Components follow Single Responsibility Principle (e.g., `<Flashcard />` flips state only, no logic coupling). |
| **DRY**   | Shared components like `<WordCard />`, `<PhraseBlock />`, and `<QuizOption />` are reused with props. |
| **KISS**  | Simplicity first: use visual hierarchy and intuitive icons; avoid overcomplication. |
| **YAGNI** | Defer gamification, spaced repetition, or social features—focus only on core learning loop for launch. |