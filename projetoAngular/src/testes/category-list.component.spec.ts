import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { CategoryListComponent } from "./category-list.component";

describe(CategoryListComponent.name, () => {
  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListComponent);
    fixture.autoDetectChanges();
  });

  let fixture: ComponentFixture<CategoryListComponent>;

  it("lists categories", () => {
    const listItems = fixture.debugElement.queryAll(By.css("li"));
    expect(listItems.length).toBeGreaterThan(0);
  });
});