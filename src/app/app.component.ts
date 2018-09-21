import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
	new Post('titre 1', 'contenu 1'),
	new Post('titre 2', 'contenu 2'),
	new Post('titre 3', 'contenu 3')
  ];
}
