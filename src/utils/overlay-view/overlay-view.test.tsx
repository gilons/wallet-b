import { render } from "@testing-library/react";
import { OverlayView } from "./overlay-view";

test("DOM should contain overlay and get destroy accordingly", () => {
  function TestComponent() {
    let id;
    const overlay = new OverlayView({ id: "test" });
    id = overlay.id;
    overlay.showOverlay(<div></div>);
    expect(document.getElementById(id)).toBeDefined();
    overlay.destroy()
    expect(document.getElementById(id)).toBeNull()
    return <div></div>;
  }

  render(<TestComponent></TestComponent>);
});

export {};
