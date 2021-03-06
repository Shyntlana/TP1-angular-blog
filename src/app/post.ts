export class Post {
  
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;
	
  constructor(title:string, content:string, loveIts:number = 0, created_at:Date = new Date()) {
	this.title = title;
	this.content = content;
	this.loveIts = loveIts;
	this.created_at = created_at;
  }
  
}
