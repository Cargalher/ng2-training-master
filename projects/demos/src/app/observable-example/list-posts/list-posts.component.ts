import {Component} from '@angular/core';
import {Post} from './post';
import {PostsService} from './posts.service';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent {

  posts: Post[] = [];
  emails: string[] = [];

  constructor(private postService: PostsService) { //injecting PostService in my constructor
    // We get an observable from PostService and subscribe to it
    this.postService.getPosts()
      .subscribe(post => this.posts.push(post));
  }

  subscribeToEmailStream() {
    this.postService.getPosts()
      .pipe(
        // Here we use map to only keep the email out of each post
        map(post => post.email)
        // We thus subscribe to a stream of emails instead of posts
      ).subscribe(email => this.emails.push(email));
  }
}


// explanation of the above code

//this component is using a PostService .the post service we injected in the constructor.
// And then i am calling a getPost method that doesnt treat on the data it treats an observable
// of that data and whenever we have an observable in order to receive the different value overtime we have to subscribe to it.
//  In the ".subscribe"line we provide a call back function where we define for every single post we receive we are pushing those posts into an array
//   of posts that is gonna store the data. A post is gonna be a simple object, it suppose to simulate a social media post(es.facebook)

