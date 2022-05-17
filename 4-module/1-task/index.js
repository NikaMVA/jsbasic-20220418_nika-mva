function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  let arr = friends;
  let str = arr.join();
  
  let str2 = friends.map(function(item){
    return '<li>' + item.firstName + ' ' + item.lastName + '</li>';
}).join('');
  ul.insertAdjacentHTML('afterbegin', str2);
  return ul;
}


