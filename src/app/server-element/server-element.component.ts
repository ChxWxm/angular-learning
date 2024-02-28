import { Component, Input } from "@angular/core";

type ServerElementType = { type: string; name: string; content: string };

@Component({
  selector: "app-server-element",
  standalone: true,
  imports: [],
  templateUrl: "./server-element.component.html",
  styleUrl: "./server-element.component.scss",
})
export class ServerElementComponent {
  @Input() element: ServerElementType = { content: "", name: "", type: "" };
}
