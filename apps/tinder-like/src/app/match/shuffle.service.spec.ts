import { TestBed } from "@angular/core/testing";
import { Match, Matches } from "./match.inerface";
import { ShuffleService } from "./shuffle.service";

const matches: Matches = [
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

describe("ShuffleService", () => {
  let service: ShuffleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShuffleService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("matches even if received contains additional elements", () => {
    service.create(matches);
    const expected: Match[] = [];
    let param: Match;
    do {
      param = service.next();
      if (param) expected.push(param);
    } while (param);

    expect(expected.length).toBe(3);
    expect(expected).toEqual(expect.arrayContaining(matches));
  });

  describe("create method", () => {
    it('with empty param should called console.warn with "Empty array", undefined', () => {
      const logSpy = jest.spyOn(console, "warn");

      service.create();

      expect(logSpy).toHaveBeenCalledWith("Empty array", undefined);
    });

    it('with [] param should called console.warn with "Empty array", []', () => {
      const logSpy = jest.spyOn(console, "warn");

      service.create([]);

      expect(logSpy).toHaveBeenCalledWith("Empty array", []);
    });
  });

  describe("next method", () => {
    it('with empty param should throw Error("Need create shuffle array before using") ', () => {
      const t = () => { service.next(); }
      expect(t).toThrow(Error);
      expect(t).toThrow("Need create shuffle array before using");
    });
  });
});
