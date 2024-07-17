export interface INote {
  title: string;
  description: string;
  category: NoteCategory;
}

export enum NoteCategory {
  HOME = "Home",
  WORK = "Work",
  PERSONAL = "Personal",
}

export class Note {
  private note: INote;
  constructor(title: string, description: string, category: NoteCategory) {
    this.note = {
      title,
      description,
      category,
    };
  }

  getNoteTitle(): string {
    return this.note.title;
  }

  setNoteTitle(title: string): void {
    this.note.title = title;
  }

  getNoteDescription(): string {
    return this.note.description;
  }

  setNoteDescription(description: string): void {
    this.note.description = description;
  }

  getNoteCategory(): NoteCategory {
    return this.note.category;
  }

  setNoteCategory(category: NoteCategory): void {
    this.note.category = category;
  }

  toJSON(): string {
    return JSON.stringify(this.note);
  }
}
