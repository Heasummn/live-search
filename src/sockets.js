import Pusher from 'pusher-js'
import { addPost } from './actions';

export function setupSocket() {
  var pusher = new Pusher('50ed18dd967b455393ed');

  return pusher;
}

export function addChannel(socket, store, channelName) {
  var subchannel = socket.subscribe(channelName)
  subchannel.bind('new-listing', (listing) => {
    store.dispatch(addPost(channelName, {title: listing.title, author: listing.author, id: listing.id, url: listing.url}));
  });
}