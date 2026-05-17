import { Component, Input } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { DailyForecastComponent } from "./daily-forecast.component";

describe(DailyForecastComponent.name, () => {
  @Component({
    imports: [DailyForecastComponent],
    standalone: true,
    template: `<weather-daily-forecast [temperatureCelsius]="temperatureCelsius"></weather-daily-forecast>`,
  })
  class TestHostComponent {
    @Input()
    temperatureCelsius: number | null = null;
  }

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostFixture.autoDetectChanges();
  });

  let hostFixture: ComponentFixture<DailyForecastComponent>;

  it("displays the temperature in degrees Fahrenheit", () => {
    hostFixture.componentInstance.temperatureCelsius = 20;
    hostFixture.detectChanges();

    const temperatureFahrenheit = fixture.debugElement.query(By.css("[data-testid=temperature-fahrenheit]"));
    expect(temperatureFahrenheit.nativeElement.textContent).toBe("68 °F");
  });
});