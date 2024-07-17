import { When, Then } from "@cucumber/cucumber";
import { getEndpoint } from "../common/endpoint";
import { expect } from "playwright/test";
import { fixture } from "../../utils/fixture";
import apiNames from "../utils/apiNames";
import { Note, NoteCategory } from "../interfaces/notes";

When(
  "The user creates a new note with title {string}, description {string}, and category {string}",
  async function (title: string, description: string, category: string) {
    const token = this.endpoint.getAccessToken();
    this.endpoint = getEndpoint(apiNames.notes.create);
    this.endpoint.setAccessToken(token);
    const noteCategory =
      NoteCategory[category.toUpperCase() as keyof typeof NoteCategory];

    const noteData = new Note(title, description, noteCategory);
    this.response = await this.endpoint.sendAuthenticatedPostRequest(
      noteData.toJSON()
    );
    fixture.logger.info(
      `The user created a new note with title "${title}", description "${description}", and category "${category}"`
    );
  }
);

Then(
  "The response contains the note with title {string}, description {string}, and category {string}",
  async function (title: string, description: string, category: string) {
    const responseBody = await this.response.json();
    expect(responseBody.data.title).toEqual(title);
    expect(responseBody.data.description).toEqual(description);
    expect(responseBody.data.category).toEqual(category);
    fixture.logger.info(
      `The response contains the note with title "${title}", description "${description}", and category "${category}"`
    );
  }
);

When("The user retrieves the first note by ID", async function () {
  const responseBody = await this.response.json();
  const firstNoteId = responseBody.data[0].id;
  this.noteId = firstNoteId;

  const token = this.endpoint.getAccessToken();
  this.endpoint = getEndpoint(apiNames.notes.getById);
  this.endpoint.setEndpoint(`${this.endpoint.getEndpoint()}/${firstNoteId}`);
  this.endpoint.setAccessToken(token);

  this.response = await this.endpoint.sendAuthenticatedGetRequest();
  fixture.logger.info(
    `The user retrieved the first note with ID "${firstNoteId}"`
  );
});

Then("The response contains the note with correct ID", async function () {
  const responseBody = await this.response.json();
  expect(responseBody.data.id).toEqual(this.noteId);
  fixture.logger.info(
    `The response contains the note with ID "${this.noteId}"`
  );
});
