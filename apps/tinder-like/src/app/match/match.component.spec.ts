import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { not } from "@angular/compiler/src/output/output_ast";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { TranslocoRootModule } from "../transloco-root.module";

import { MatchComponent } from "./match.component";
import { MatMatchModule } from "./match.module";

describe("MatchComponent", () => {
  let component: MatchComponent;
  let fixture: ComponentFixture<MatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        TranslocoRootModule,
        MatMatchModule,
        HttpClientModule,
      ],
      declarations: [MatchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("like method should add like field", () => {
    const test = {
      id: 1,
      title: "test1",
      subtitle: "test1",
      content: "test1",
      img: {
        src: "https://text1.jpg",
        alt: "text1",
      },
    };
    component.like(test);

    expect(test).toEqual(expect.objectContaining({ ...test, like: true }));
  });

  it("like method should add like field", () => {
    const matches = [
      {
        id: 1,
        title: "test1",
        subtitle: "test1",
        content: "test1",
        img: {
          src: "https://text1.jpg",
          alt: "text1",
        },
      },
      {
        id: 2,
        title: "test2",
        subtitle: "test2",
        content: "test2",
        img: {
          src: "https://text2.jpg",
          alt: "text2",
        },
      },
      {
        id: 3,
        title: "test3",
        subtitle: "test3",
        content: "test3",
        img: {
          src: "https://text3.jpg",
          alt: "text3",
        },
      },
    ];

    component.loadItems(matches);
    const temp = component.items[0];
    expect(component.items[0]).toEqual(expect.objectContaining(temp));

    component.swiping(0);

    expect(component.items[0]).not.toEqual(expect.objectContaining(temp));
  });

});
