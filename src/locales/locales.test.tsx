import { render } from "@testing-library/react";
import { useLocales } from "./init";
import { WithLocaleProvider } from "./init";

test("Should include locales", () => {
  function TestComponent(_: any): React.ReactElement {
    const response = useLocales();
    expect(response.locale).toBeDefined();
    expect(response.i18n).toBeDefined()
    expect(response.setLocale).toBeDefined()
    return <div></div>;
  }

  render(
    <WithLocaleProvider>
      <TestComponent />
    </WithLocaleProvider>
  );
});

export {};
