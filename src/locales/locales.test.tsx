import { render } from "@testing-library/react";
import { i18n, useLocales } from ".";
import { WithLocaleProvider } from "./init";

describe("Locales should be initialized", () => {
  const locale = i18n;
  expect(locale).toBeDefined();
});

test("Should have translation response", () => {
  function TestComponent(_: any): React.ReactElement {
    const response = useLocales();
    expect(response.length).toBeGreaterThanOrEqual(2);
    return <div></div>;
  }

  render(
    <WithLocaleProvider>
      <TestComponent />
    </WithLocaleProvider>
  );
});

export {};
