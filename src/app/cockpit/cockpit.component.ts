import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";

@Component({
  selector: "app-cockpit",
  standalone: true,
  imports: [FormsModule, NzInputModule, NzButtonModule],
  templateUrl: "./cockpit.component.html",
  styleUrl: "./cockpit.component.scss",
})
export class CockpitComponent {
  serverName: string = "";
}
