import { Component, OnInit } from "@angular/core";
import { ServerElementComponent } from "../../server-element/server-element.component";
import { CockpitComponent } from "../../cockpit/cockpit.component";

@Component({
  selector: "app-welcome",
  standalone: true,
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
  imports: [ServerElementComponent, CockpitComponent],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}
}
